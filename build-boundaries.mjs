import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

const sourceUrl = 'https://raw.githubusercontent.com/kyodo-official/japan-choropleth/main/data/geojson/municipalities.geojson';
const res = await fetch(sourceUrl);
if (!res.ok) throw new Error(`Boundary source returned ${res.status}`);
const source = await res.json();
const local = JSON.parse(fs.readFileSync(path.join(root, 'municipalities.json'), 'utf8'));
const prefJaToId = {
  '茨城県': 'ibaraki', '栃木県': 'tochigi', '群馬県': 'gunma', '埼玉県': 'saitama',
  '千葉県': 'chiba', '東京都': 'tokyo', '神奈川県': 'kanagawa',
};
const localKey = new Map(local.map((item) => [`${item.prefecture}|${item.name}`, item.id]));
const projectPrefs = ['ibaraki', 'tochigi', 'gunma', 'saitama', 'chiba', 'tokyo', 'kanagawa'];
const groups = new Map(local.map((item) => [item.id, []]));
const unmatched = [];
for (const feature of source.features) {
  const p = feature.properties;
  const pref = prefJaToId[p.prefecture];
  if (!pref) continue;
  const id = localKey.get(`${pref}|${p.municipality}`);
  if (!id) { unmatched.push({ id: feature.id, prefecture: p.prefecture, municipality: p.municipality, ward: p.ward }); continue; }
  groups.get(id).push(feature.geometry);
}
const counts = Object.fromEntries(projectPrefs.map((pref) => [pref, local.filter((x) => x.prefecture === pref && groups.get(x.id)?.length).length]));
const empty = local.filter((x) => !groups.get(x.id)?.length).map((x) => `${x.prefecture}/${x.name}`);

const project = (rings, width = 1000, height = 680, fixedBounds = null, precision = 2) => {
  const points = rings.flat(1);
  if (!points.length) return { d: '', cx: 0, cy: 0, bounds: null };
  const meanLat = points.reduce((sum, p) => sum + p[1], 0) / points.length;
  const cosLat = fixedBounds?.cosLat ?? Math.cos(meanLat * Math.PI / 180);
  const xs = points.map((p) => p[0] * cosLat); const ys = points.map((p) => -p[1]);
  const extrema = (values) => values.reduce((result, value) => ({ min: Math.min(result.min, value), max: Math.max(result.max, value) }), { min: Infinity, max: -Infinity });
  const xExtent = extrema(xs), yExtent = extrema(ys);
  const bounds = fixedBounds || { minX: xExtent.min, maxX: xExtent.max, minY: yExtent.min, maxY: yExtent.max, cosLat };
  const dx = bounds.maxX - bounds.minX || 1e-5; const dy = bounds.maxY - bounds.minY || 1e-5;
  const margin = 16; const scale = Math.min((width - 2 * margin) / dx, (height - 2 * margin) / dy);
  const offsetX = (width - dx * scale) / 2; const offsetY = (height - dy * scale) / 2;
  const xy = (point) => [offsetX + (point[0] * cosLat - bounds.minX) * scale, offsetY + (-point[1] - bounds.minY) * scale];
  const d = rings.map((ring) => ring.map((point, i) => { const [x, y] = xy(point); return `${i ? 'L' : 'M'}${x.toFixed(precision)},${y.toFixed(precision)}`; }).join('') + 'Z').join('');
  // Keep each shape's own center even when its coordinates use shared map bounds.
  // The shared-bounds midpoint used here before made all seven prefecture labels overlap.
  const ownMidX = (xExtent.min + xExtent.max) / 2;
  const ownMidY = (yExtent.min + yExtent.max) / 2;
  const [cx, cy] = xy([ownMidX / cosLat, -ownMidY]);
  return { d, cx: Number(cx.toFixed(2)), cy: Number(cy.toFixed(2)), bounds };
};
const ringsForGeometry = (geometry) => {
  if (!geometry) return [];
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polygons.flatMap((polygon) => polygon.filter((ring) => ring.length >= 4));
};
const municipalityFeatures = [];
for (const item of local) {
  const allRings = groups.get(item.id).flatMap(ringsForGeometry);
  const isTokyo = item.prefecture === 'tokyo';
  const islandRings = isTokyo ? allRings.filter((ring) => ring.reduce((s, p) => s + p[1], 0) / ring.length < 34.5) : [];
  const mainlandRings = isTokyo ? allRings.filter((ring) => ring.reduce((s, p) => s + p[1], 0) / ring.length >= 34.5) : allRings;
  municipalityFeatures.push({ id: item.id, prefecture: item.prefecture, d: project(mainlandRings).d, islandRings });
}
// Render each municipal path in a common Kanto viewBox, then make a separately fitted county map.
const allCoordsByPref = new Map(projectPrefs.map((p) => [p, []]));
for (const item of local) {
  for (const geometry of groups.get(item.id)) {
    for (const ring of ringsForGeometry(geometry)) {
      if (item.prefecture === 'tokyo' && ring.reduce((s, p) => s + p[1], 0) / ring.length < 34.5) continue;
      allCoordsByPref.get(item.prefecture).push(ring);
    }
  }
}
const home = projectPrefs.map((prefecture) => {
  const rings = allCoordsByPref.get(prefecture);
  const p = project(rings, 1000, 680);
  const props = local.find((x) => x.prefecture === prefecture);
  const prefectureName = ({tokyo:'東京都',kanagawa:'神奈川県',chiba:'千葉県',saitama:'埼玉県',ibaraki:'茨城県',tochigi:'栃木県',gunma:'群馬県'})[prefecture];
  const countyFeatureRings = source.features.filter((f) => f.properties.prefecture === prefectureName && (prefecture !== 'tokyo' || ringsForGeometry(f.geometry).some((ring) => ring.reduce((s, q) => s + q[1], 0) / ring.length >= 34.5))).flatMap((f) => ringsForGeometry(f.geometry).filter((ring) => prefecture !== 'tokyo' || ring.reduce((s, q) => s + q[1], 0) / ring.length >= 34.5));
  return { id: prefecture, rings: countyFeatureRings };
});
const kantoRings = home.flatMap((x) => x.rings);
const kantoBounds = project(kantoRings, 1000, 680);
const nationalPrefectures = new Set(source.features.map((feature) => feature.properties.prefecture).filter(Boolean));
const japanRings = source.features.flatMap((feature) => {
  const geometry = feature.geometry;
  if (!geometry) return [];
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polygons.map((polygon) => polygon[0]).filter((ring) => ring?.length >= 4);
});
const pointSegmentDistance = (point, start, end) => {
  const dx = end[0] - start[0], dy = end[1] - start[1];
  if (!dx && !dy) return Math.hypot(point[0] - start[0], point[1] - start[1]);
  const t = Math.max(0, Math.min(1, ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(point[0] - (start[0] + t * dx), point[1] - (start[1] + t * dy));
};
const simplifyOpen = (points, tolerance) => {
  if (points.length <= 2) return points;
  let farthest = 0, split = 1;
  for (let index = 1; index < points.length - 1; index++) {
    const distance = pointSegmentDistance(points[index], points[0], points.at(-1));
    if (distance > farthest) { farthest = distance; split = index; }
  }
  if (farthest <= tolerance) return [points[0], points.at(-1)];
  const left = simplifyOpen(points.slice(0, split + 1), tolerance);
  const right = simplifyOpen(points.slice(split), tolerance);
  return [...left.slice(0, -1), ...right];
};
// This locator is displayed as a small context map, so a few kilometres of tolerance
// keeps its coastline crisp at screen size without shipping the full national geometry.
const simplifyRing = (ring, tolerance = 0.25) => {
  const open = ring.slice(0, -1);
  if (open.length <= 5) return ring;
  let farthest = 1;
  for (let index = 2; index < open.length; index++) if (Math.hypot(open[index][0] - open[0][0], open[index][1] - open[0][1]) > Math.hypot(open[farthest][0] - open[0][0], open[farthest][1] - open[0][1])) farthest = index;
  const first = simplifyOpen(open.slice(0, farthest + 1), tolerance);
  const second = simplifyOpen([...open.slice(farthest), open[0]], tolerance);
  const result = [...first.slice(0, -1), ...second];
  if (result.length < 4) {
    const a = open[0], b = open[Math.floor(open.length / 3)], c = open[Math.floor(open.length * 2 / 3)];
    return [a, b, c, a];
  }
  if (result.at(-1)[0] !== result[0][0] || result.at(-1)[1] !== result[0][1]) result.push(result[0]);
  return result;
};
const japanLand = project(japanRings.map((ring) => simplifyRing(ring)), 1000, 680, null, 0);
const kantoLocator = project(kantoRings, 1000, 680, japanLand.bounds);
const homeMunicipalities = local.map((item) => {
  const rings = groups.get(item.id).flatMap(ringsForGeometry).filter((ring) => item.prefecture !== 'tokyo' || ring.reduce((sum, point) => sum + point[1], 0) / ring.length >= 34.5);
  const shape = project(rings, 1000, 680, kantoBounds.bounds);
  return { id: item.id, prefecture: item.prefecture, d: shape.d, cx: shape.cx, cy: shape.cy };
});
const prefectureGeo = home.map((pref) => {
  const shape = project(pref.rings, 1000, 680, kantoBounds.bounds);
  return { id: pref.id, d: shape.d, cx: shape.cx, cy: shape.cy };
});
const detailBounds = Object.fromEntries(projectPrefs.map((pref) => {
  const main = [];
  const islands = [];
  for (const item of local.filter((x) => x.prefecture === pref)) {
    for (const geom of groups.get(item.id)) {
      for (const ring of ringsForGeometry(geom)) {
        const avgLat = ring.reduce((sum, point) => sum + point[1], 0) / ring.length;
        if (pref === 'tokyo' && avgLat < 34.5) islands.push(ring); else main.push(ring);
      }
    }
  }
  const mainMap = project(main); const islandMap = project(islands, 1000, 180);
  return [pref, { mainD: mainMap.d, islandsD: islandMap.d }];
}));
const ringsByMunicipality = new Map();
const allMainRingsByPref = new Map(projectPrefs.map((pref) => [pref, []]));
const allIslandRings = [];
for (const item of local) {
  const main = []; const islands = [];
  for (const geometry of groups.get(item.id)) {
    for (const ring of ringsForGeometry(geometry)) {
      const avgLat = ring.reduce((s, p) => s + p[1], 0) / ring.length;
      if (item.prefecture === 'tokyo' && avgLat < 34.5) { islands.push(ring); allIslandRings.push(ring); }
      else { main.push(ring); allMainRingsByPref.get(item.prefecture).push(ring); }
    }
  }
  ringsByMunicipality.set(item.id, { main, islands });
}
const sharedMainBounds = Object.fromEntries(projectPrefs.map((pref) => [pref, project(allMainRingsByPref.get(pref)).bounds]));
const sharedIslandBounds = project(allIslandRings, 1000, 180).bounds;
const featureMap = local.map((item) => {
  const rings = ringsByMunicipality.get(item.id);
  const localProject = project(rings.main, 1000, 680, sharedMainBounds[item.prefecture]);
  const island = project(rings.islands, 1000, 180, sharedIslandBounds);
  return { id: item.id, prefecture: item.prefecture, d: localProject.d, cx: localProject.cx, cy: localProject.cy, islandD: island.d };
});
const localFeatureByPref = {};
for (const pref of projectPrefs) localFeatureByPref[pref] = featureMap.filter((x) => x.prefecture === pref).map((x) => ({ id: x.id, d: x.d, cx: x.cx, cy: x.cy, islandD: x.islandD }));
const kantoFeatureByPref = Object.fromEntries(prefectureGeo.map((x) => [x.id, x.d]));
const output = { source: sourceUrl, year: 2025, viewBox: [0, 0, 1000, 680], home: prefectureGeo.map(({id,cx,cy})=>({id,cx,cy})), homeMunicipalities, japan: { d: japanLand.d, kantoCenter: { x: kantoLocator.cx, y: kantoLocator.cy }, prefectureCount: nationalPrefectures.size }, prefectures: kantoFeatureByPref, details: detailBounds, municipalities: localFeatureByPref };
fs.writeFileSync(path.join(root, 'boundaries.json'), JSON.stringify(output));
fs.writeFileSync(path.join(root, 'boundaries.js'), `window.JAPAN_BOUNDARIES=${JSON.stringify(output)};\n`);
console.log(JSON.stringify({sourceFeatures: source.features.length, counts, totalGrouped: local.length - empty.length, empty, unmatchedCount: unmatched.length, unmatched, outputBytes: Buffer.byteLength(JSON.stringify(output))}, null, 2));
