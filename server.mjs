import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.toml': 'text/plain; charset=utf-8' };
const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { 'content-type': 'text/plain; charset=utf-8' }).end('Method not allowed');
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end('Bad request'); return; }
  const candidate = path.resolve(root, `.${pathname}`);
  if (!candidate.startsWith(`${root}${path.sep}`) && candidate !== root && candidate !== path.join(root, 'index.html')) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  let file = candidate;
  try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); }
  catch { file = path.join(root, 'index.html'); }
  try {
    const body = await readFile(file);
    response.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
  }
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`旅のしるし is running at http://127.0.0.1:${port}`));
