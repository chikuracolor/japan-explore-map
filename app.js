(() => {
  const PREFS = [
    { id: 'tokyo', code: '13', name: '東京都', en: 'Tokyo', ja: '東京都', tw: '東京都', cn: '东京都', ko: '도쿄도' },
    { id: 'kanagawa', code: '14', name: '神奈川県', en: 'Kanagawa', ja: '神奈川県', tw: '神奈川県', cn: '神奈川县', ko: '가나가와현' },
    { id: 'chiba', code: '12', name: '千葉県', en: 'Chiba', ja: '千葉県', tw: '千葉縣', cn: '千叶县', ko: '지바현' },
    { id: 'saitama', code: '11', name: '埼玉県', en: 'Saitama', ja: '埼玉県', tw: '埼玉縣', cn: '埼玉县', ko: '사이타마현' },
    { id: 'ibaraki', code: '08', name: '茨城県', en: 'Ibaraki', ja: '茨城県', tw: '茨城縣', cn: '茨城县', ko: '이바라키현' },
    { id: 'tochigi', code: '09', name: '栃木県', en: 'Tochigi', ja: '栃木県', tw: '栃木縣', cn: '栃木县', ko: '도치기현' },
    { id: 'gunma', code: '10', name: '群馬県', en: 'Gunma', ja: '群馬県', tw: '群馬縣', cn: '群马县', ko: '군마현' },
  ];
  const LOCALES = ['zh-TW', 'en', 'ja'];
  const BASE_PATH = window.APP_BASE_PATH || '';
  const COPY = {
    'zh-TW': { navHome:'探索首頁',navMap:'關東地圖',navStats:'探索統計',navCollection:'神社與美食',brandCaption:'旅の記録',tagline:'每一次出發，都值得收藏。',localData:'資料儲存於此裝置',language:'網站語言',export:'匯出資料',myJapan:'我的日本',home:'探索首頁',map:'關東地圖',stats:'探索統計',collection:'參訪與美食收藏',journey:'MY KANTO JOURNEY',homeTitle:'每一段路，都算數。',homeSubtitle:'把在日本走過的地方，慢慢收進自己的地圖裡。',seven:'關東七都縣',mapHint:'點選都縣，展開市區町村地圖',exploreRate:'關東探索率',visitedCount:'已探索行政區',of:'／',districts:'個行政區',start:'開始探索',seeStats:'查看統計',mapTitle:'探索中的關東',material:'地圖材質',matPaper:'紙感',matWash:'水彩',matTopo:'等高線',statusLegend:'探索程度',mapTap:'點選一個都縣，查看裡面的市區町村。',prefecture:'都縣',munis:'市區町村',explored:'已探索',search:'搜尋行政區…',filter:'探索狀態',all:'全部狀態',detail:'旅行紀錄',detailHint:'點選地圖上的區域，再為這個地方留下旅行印記。',openRecord:'查看旅行紀錄',status:'探索狀態',statusHelp:'點選這個地方後，選擇最符合的狀態。',date:'第一次到訪',places:'去過的地點',placePlaceholder:'輸入景點名稱',add:'新增',rating:'個人評價',notes:'旅行筆記',notesPlaceholder:'記下風景、味道，或不想忘記的瞬間…',save:'儲存紀錄',saved:'已儲存',localOnly:'紀錄儲存在目前瀏覽器，可匯出備份。',back:'返回',noResults:'找不到符合的行政區。',statTitle:'探索統計',statDesc:'看見旅程足跡如何慢慢累積。',levels:'狀態分布',prefRate:'各都縣探索率',notVisited:'尚未探索',collectionTitle:'一宮參訪與關東美食',collectionDesc:'把參拜過的神社、嚐過的在地料理，逐一收進收藏。',shrineSection:'關東一宮巡禮',shrineIntro:'一宮依古代令制國而定，與今日都縣界線不完全相同。',foodSection:'關東在地美食',foodIntro:'選自農林水產省等公開的地方飲食資料；清單可逐項收藏。',visited:'已收藏／參訪',markVisited:'標記參訪',undo:'取消標記',visitDate:'參訪日期',foodDate:'品嚐日期',shrineAchievement:'一宮巡禮',foodAchievement:'關東美食',progress:'完成',place:'位置',source:'資料來源',firstVisit:'第一個足跡',allShrines:'一宮全收集',firstBite:'第一口在地味',foodTen:'十味巡禮',locked:'尚未解鎖',unlocked:'已解鎖',achievement:'小小成就',clickArea:'選擇地圖區域即可編輯狀態',langName:'繁體中文',emptyNotes:'尚未留下筆記',exported:'旅行資料已匯出',styleHint:'材質只改變地圖紋理，不影響狀態顏色。',homeRollup:'每個市區町村依自己的探索狀態上色；都縣名稱旁的百分比代表該縣探索率。',ratingNone:'尚未評分',cityLabel:'行政區',mapLoad:'地圖載入完成',activity:'最近更新',notFound:'找不到這個地方',notFoundText:'回到關東地圖，繼續探索。',foodDistrict:'代表地區',noDate:'尚未記錄日期',collectionsCount:'項已收藏',nationalProvince:'古代令制國',statResidence:'居住',statLodging:'旅宿',statVisit:'遊玩',statStop:'接地',statPass:'通過',statNone:'沒去過',selectLanguage:'選擇語言',noteAttribution:'地圖界線資料：國土交通省國土數值情報（2025），經簡化處理。'},
    'zh-CN': { navHome:'探索首页',navMap:'关东地图',navStats:'探索统计',navCollection:'神社与美食',brandCaption:'旅の記録',tagline:'每一次出发，都值得收藏。',localData:'资料保存在此设备',language:'网站语言',export:'导出资料',myJapan:'我的日本',home:'探索首页',map:'关东地图',stats:'探索统计',collection:'参访与美食收藏',journey:'MY KANTO JOURNEY',homeTitle:'每一段路，都算数。',homeSubtitle:'把在日本走过的地方，慢慢收进自己的地图里。',seven:'关东七都县',mapHint:'点击都县，展开市区町村地图',exploreRate:'关东探索率',visitedCount:'已探索行政区',of:'／',districts:'个行政区',start:'开始探索',seeStats:'查看统计',mapTitle:'探索中的关东',material:'地图材质',matPaper:'纸感',matWash:'水彩',matTopo:'等高线',statusLegend:'探索程度',mapTap:'点击一个都县，查看里面的市区町村。',prefecture:'都县',munis:'市区町村',explored:'已探索',search:'搜索行政区…',filter:'探索状态',all:'全部状态',detail:'旅行记录',detailHint:'点击地图上的区域，再为这个地方留下旅行印记。',openRecord:'查看旅行记录',status:'探索状态',statusHelp:'点击这个地方后，选择最符合的状态。',date:'第一次到访',places:'去过的地点',placePlaceholder:'输入景点名称',add:'新增',rating:'个人评价',notes:'旅行笔记',notesPlaceholder:'记下风景、味道，或不想忘记的瞬间…',save:'保存记录',saved:'已保存',localOnly:'记录保存在当前浏览器，可导出备份。',back:'返回',noResults:'找不到符合的行政区。',statTitle:'探索统计',statDesc:'看见旅程足迹如何慢慢累积。',levels:'状态分布',prefRate:'各都县探索率',notVisited:'尚未探索',collectionTitle:'一宫参访与关东美食',collectionDesc:'把参拜过的神社、尝过的当地料理，逐一收进收藏。',shrineSection:'关东一宫巡礼',shrineIntro:'一宫依据古代令制国划分，与今日都县边界并不完全相同。',foodSection:'关东当地美食',foodIntro:'精选自农林水产省等公开的地方饮食资料；可逐项收藏。',visited:'已收藏／参访',markVisited:'标记参访',undo:'取消标记',visitDate:'参访日期',foodDate:'品尝日期',shrineAchievement:'一宫巡礼',foodAchievement:'关东美食',progress:'完成',place:'位置',source:'资料来源',firstVisit:'第一个足迹',allShrines:'一宫全收集',firstBite:'第一口当地味',foodTen:'十味巡礼',locked:'尚未解锁',unlocked:'已解锁',achievement:'小小成就',clickArea:'选择地图区域即可编辑状态',notFound:'找不到这个地方',notFoundText:'返回关东地图，继续探索。',foodDistrict:'代表地区',noDate:'尚未记录日期',collectionsCount:'项已收藏',nationalProvince:'古代令制国',statResidence:'居住',statLodging:'旅宿',statVisit:'游玩',statStop:'接地',statPass:'通过',statNone:'没去过',selectLanguage:'选择语言',noteAttribution:'地图界线资料：日本国土交通省国土数值信息（2025），已作简化处理。'},
    en: { navHome:'Home',navMap:'Kanto map',navStats:'Statistics',navCollection:'Shrines & food',brandCaption:'Travel notes',tagline:'Every journey is worth keeping.',localData:'Saved on this device',language:'Language',export:'Export data',myJapan:'My Japan',home:'Home',map:'Kanto map',stats:'Statistics',collection:'Shrine & food collection',journey:'MY KANTO JOURNEY',homeTitle:'Every step counts.',homeSubtitle:'Keep the places you have explored in Japan on your own map.',seven:'7 Kanto prefectures',mapHint:'Select a prefecture to open its municipality map.',exploreRate:'Kanto explored',visitedCount:'Municipalities explored',of:'of',districts:'municipalities',start:'Explore the map',seeStats:'View statistics',mapTitle:'Your Kanto map',material:'Map texture',matPaper:'Paper',matWash:'Watercolor',matTopo:'Contours',statusLegend:'Travel status',mapTap:'Select a prefecture to see its municipalities.',prefecture:'Prefecture',munis:'Municipalities',explored:'Explored',search:'Search municipalities…',filter:'Status',all:'All statuses',detail:'Travel record',detailHint:'Choose an area on the map, then save your travel memory.',openRecord:'Open travel record',status:'Travel status',statusHelp:'Choose the status that best describes your visit.',date:'First visit',places:'Places visited',placePlaceholder:'Add a place',add:'Add',rating:'Your rating',notes:'Travel notes',notesPlaceholder:'Save a view, a flavor, or a moment you want to remember…',save:'Save record',saved:'Saved',localOnly:'Records stay in this browser. Export a backup anytime.',back:'Back',noResults:'No municipalities match your search.',statTitle:'Journey statistics',statDesc:'See your travel footprint grow.',levels:'Status breakdown',prefRate:'Explored by prefecture',notVisited:'Not explored',collectionTitle:'Ichinomiya shrines & Kanto food',collectionDesc:'Collect the shrines you visit and local dishes you taste.',shrineSection:'Kanto Ichinomiya pilgrimage',shrineIntro:'Ichinomiya belong to historical provinces, whose borders do not exactly match today’s prefectures.',foodSection:'Local food of Kanto',foodIntro:'A curated list based on public regional food resources. Mark each item as you try it.',visited:'Collected / visited',markVisited:'Mark visited',undo:'Unmark',visitDate:'Visit date',foodDate:'Tasting date',shrineAchievement:'Shrine pilgrimage',foodAchievement:'Kanto food',progress:'Progress',place:'Location',source:'Sources',firstVisit:'First footprint',allShrines:'All Ichinomiya shrines',firstBite:'First local taste',foodTen:'Ten local flavors',locked:'Locked',unlocked:'Unlocked',achievement:'Milestones',clickArea:'Select an area on the map to edit its status',notFound:'Place not found',notFoundText:'Return to the Kanto map to keep exploring.',foodDistrict:'Associated area',noDate:'No date recorded',collectionsCount:'collected',nationalProvince:'Historical province',statResidence:'Live here',statLodging:'Stayed overnight',statVisit:'Explored',statStop:'Transfer / brief stop',statPass:'Passed through',statNone:'Not visited',selectLanguage:'Select language',noteAttribution:'Boundary data: Japan MLIT National Land Numerical Information (2025), simplified for this site.'},
    ja: { navHome:'探索ホーム',navMap:'関東マップ',navStats:'探索統計',navCollection:'神社と食',brandCaption:'旅の記録',tagline:'旅のひとつひとつを、大切に。',localData:'この端末に保存',language:'表示言語',export:'データを書き出す',myJapan:'日本の旅',home:'探索ホーム',map:'関東マップ',stats:'探索統計',collection:'神社参拝とご当地グルメ',journey:'MY KANTO JOURNEY',homeTitle:'歩いた分だけ、思い出になる。',homeSubtitle:'日本で訪れた場所を、自分だけの地図に記録しよう。',seven:'関東7都県',mapHint:'都県を選ぶと、市区町村マップが開きます。',exploreRate:'関東の探索率',visitedCount:'訪問した市区町村',of:'／',districts:'市区町村',start:'地図を開く',seeStats:'統計を見る',mapTitle:'あなたの関東マップ',material:'地図の質感',matPaper:'紙',matWash:'水彩',matTopo:'等高線',statusLegend:'探索レベル',mapTap:'都県を選んで、市区町村を表示します。',prefecture:'都県',munis:'市区町村',explored:'探索済み',search:'市区町村を検索…',filter:'状態',all:'すべて',detail:'旅行記録',detailHint:'地図上の地域を選び、旅の記録を残しましょう。',openRecord:'旅行記録を開く',status:'探索状態',statusHelp:'訪問状況に合うものを選んでください。',date:'初回訪問日',places:'訪れた場所',placePlaceholder:'場所を入力',add:'追加',rating:'評価',notes:'旅のメモ',notesPlaceholder:'景色や味、忘れたくない瞬間を記録…',save:'記録を保存',saved:'保存しました',localOnly:'記録はこのブラウザーに保存されます。JSONでバックアップできます。',back:'戻る',noResults:'該当する市区町村がありません。',statTitle:'探索統計',statDesc:'旅の足跡を数字で振り返ります。',levels:'状態の内訳',prefRate:'都県別の探索率',notVisited:'未探索',collectionTitle:'一宮巡礼と関東の食',collectionDesc:'参拝した神社、味わった郷土料理をコレクション。',shrineSection:'関東の一宮巡礼',shrineIntro:'一宮は古代の令制国に基づき、現在の都県境とは一致しない場合があります。',foodSection:'関東のご当地グルメ',foodIntro:'公開されている郷土料理資料を参考に選定。食べた料理に印をつけましょう。',visited:'参拝・収集済み',markVisited:'訪問済みにする',undo:'取り消す',visitDate:'参拝日',foodDate:'食べた日',shrineAchievement:'一宮巡礼',foodAchievement:'関東グルメ',progress:'達成',place:'所在地',source:'出典',firstVisit:'最初の足跡',allShrines:'一宮を巡る',firstBite:'初めての郷土の味',foodTen:'十の味めぐり',locked:'未達成',unlocked:'達成',achievement:'小さな達成',clickArea:'地図の地域を選ぶと状態を編集できます',notFound:'地域が見つかりません',notFoundText:'関東マップに戻って探索を続けましょう。',foodDistrict:'主な地域',noDate:'日付未記録',collectionsCount:'件収集',nationalProvince:'古代の令制国',statResidence:'居住',statLodging:'宿泊',statVisit:'観光',statStop:'乗換・短時間の下車',statPass:'通過',statNone:'未訪問',selectLanguage:'言語を選択',noteAttribution:'境界データ：国土交通省 国土数値情報（2025年版）を簡略化して使用。'},
    ko: { navHome:'탐험 홈',navMap:'간토 지도',navStats:'탐험 통계',navCollection:'신사와 음식',brandCaption:'여행 기록',tagline:'모든 여행을 소중히 기록해요.',localData:'이 기기에 저장됨',language:'언어',export:'데이터 내보내기',myJapan:'나의 일본',home:'탐험 홈',map:'간토 지도',stats:'탐험 통계',collection:'신사 참배와 음식 컬렉션',journey:'MY KANTO JOURNEY',homeTitle:'걸어간 만큼 추억이 됩니다.',homeSubtitle:'일본에서 다녀온 곳을 나만의 지도에 기록하세요.',seven:'간토 7도현',mapHint:'도현을 선택하면 시정촌 지도가 열립니다.',exploreRate:'간토 탐험률',visitedCount:'탐험한 행정구역',of:'/',districts:'개 행정구역',start:'지도 탐험하기',seeStats:'통계 보기',mapTitle:'나의 간토 지도',material:'지도 질감',matPaper:'종이',matWash:'수채화',matTopo:'등고선',statusLegend:'탐험 상태',mapTap:'도현을 선택해 시정촌을 확인하세요.',prefecture:'도현',munis:'시정촌',explored:'탐험함',search:'행정구역 검색…',filter:'상태',all:'전체 상태',detail:'여행 기록',detailHint:'지도에서 지역을 선택하고 여행의 기억을 남겨보세요.',openRecord:'여행 기록 열기',status:'탐험 상태',statusHelp:'방문 경험에 맞는 상태를 선택하세요.',date:'첫 방문일',places:'방문한 장소',placePlaceholder:'장소 입력',add:'추가',rating:'평점',notes:'여행 메모',notesPlaceholder:'풍경, 맛, 기억하고 싶은 순간을 적어보세요…',save:'기록 저장',saved:'저장됨',localOnly:'기록은 이 브라우저에 저장됩니다. JSON 백업을 내보낼 수 있습니다.',back:'뒤로',noResults:'검색 결과가 없습니다.',statTitle:'탐험 통계',statDesc:'여행의 발자취가 쌓이는 모습을 확인하세요.',levels:'상태별 분포',prefRate:'도현별 탐험률',notVisited:'미탐험',collectionTitle:'이치노미야 신사와 간토 음식',collectionDesc:'참배한 신사와 맛본 지역 음식을 하나씩 모아보세요.',shrineSection:'간토 이치노미야 순례',shrineIntro:'이치노미야는 고대 율령국 기준으로 정해져 현재 도현 경계와 다를 수 있습니다.',foodSection:'간토 향토 음식',foodIntro:'공개된 지역 음식 자료를 바탕으로 골랐습니다. 먹어본 항목을 표시하세요.',visited:'방문 / 수집 완료',markVisited:'방문 표시',undo:'표시 취소',visitDate:'참배일',foodDate:'맛본 날짜',shrineAchievement:'신사 순례',foodAchievement:'간토 음식',progress:'진행',place:'위치',source:'출처',firstVisit:'첫 발자국',allShrines:'이치노미야 완주',firstBite:'첫 지역 음식',foodTen:'열 가지 맛 순례',locked:'미달성',unlocked:'달성',achievement:'여행 이정표',clickArea:'지도에서 지역을 선택해 상태를 수정하세요',notFound:'장소를 찾을 수 없습니다',notFoundText:'간토 지도로 돌아가 탐험을 계속하세요.',foodDistrict:'관련 지역',noDate:'날짜 기록 없음',collectionsCount:'개 수집',nationalProvince:'옛 율령국',statResidence:'거주',statLodging:'숙박',statVisit:'여행',statStop:'환승·잠시 하차',statPass:'통과',statNone:'미방문',selectLanguage:'언어 선택',noteAttribution:'경계 데이터: 일본 국토교통성 국토수치정보(2025), 단순화하여 사용.'},
  };
  Object.assign(COPY['zh-TW'], { navSection:'探索旅程',footerNote:'讓每段旅程，都留下印記。',chapter:'第一章・關東',siteTitle:'我的日本探索地圖',menuOpen:'開啟導覽',exportTooltip:'匯出旅行資料' });
  Object.assign(COPY['zh-CN'], { navSection:'探索旅程',footerNote:'让每段旅程，都留下印记。',chapter:'第一章・关东',siteTitle:'我的日本探索地图',menuOpen:'打开导航',exportTooltip:'导出旅行资料',langName:'简体中文',emptyNotes:'暂无笔记',exported:'旅行资料已导出',styleHint:'材质只改变地图纹理，不影响状态颜色。',homeRollup:'每个市区町村按自己的探索状态上色；都县名称旁的百分比代表该县探索率。',ratingNone:'尚未评分',cityLabel:'行政区',mapLoad:'地图加载完成',activity:'最近更新' });
  Object.assign(COPY.en, { navSection:'Your journey',footerNote:'Every journey leaves a mark.',chapter:'Chapter 1 · Kanto',siteTitle:'My Japan Exploration Map',menuOpen:'Open navigation',exportTooltip:'Export travel data',langName:'English',emptyNotes:'No notes saved yet',exported:'Travel data exported',styleHint:'Map texture changes the surface, not travel status colors.',homeRollup:'Each municipality is colored by its own exploration status; the percentage beside each prefecture is its exploration rate.',ratingNone:'Not rated',cityLabel:'Area',mapLoad:'Map loaded',activity:'Recent updates' });
  Object.assign(COPY.ja, { navSection:'旅を記録',footerNote:'すべての旅に、しるしを。',chapter:'第一章・関東',siteTitle:'わたしの日本探訪マップ',menuOpen:'ナビゲーションを開く',exportTooltip:'旅行データを書き出す',langName:'日本語',emptyNotes:'メモはまだありません',exported:'旅行データをエクスポートしました',styleHint:'地図の質感を変えても、訪問状況の色は変わりません。',homeRollup:'各市区町村は個別の探索状況で色分けし、都県名の横に探索率を表示します。',ratingNone:'未評価',cityLabel:'地域',mapLoad:'地図を読み込みました',activity:'最近の更新' });
  Object.assign(COPY.ko, { navSection:'여행 기록',footerNote:'모든 여정에 흔적을 남기세요.',chapter:'제1장 · 간토',siteTitle:'나의 일본 탐방 지도',menuOpen:'탐색 메뉴 열기',exportTooltip:'여행 기록 내보내기',langName:'한국어',emptyNotes:'아직 메모가 없습니다',exported:'여행 기록을 내보냈습니다',styleHint:'지도 질감은 바뀌지만 방문 상태 색상은 그대로입니다.',homeRollup:'각 시정촌은 개별 탐험 상태에 따라 색칠되며, 도현 이름 옆에 해당 탐험률이 표시됩니다.',ratingNone:'평가 없음',cityLabel:'지역',mapLoad:'지도를 불러왔습니다',activity:'최근 업데이트' });
  Object.assign(COPY['zh-TW'], { homeTitle:'日本制縣等級',homeSubtitle:'關東市區町村地圖',collectionTitle:'一之宮神社、在地美食與登山',collectionDesc:'收藏參訪、品嚐與登頂的旅程印記。',navCollection:'一之宮神社',navFoods:'美食收集',navMountains:'名峰登山',shrinePageTitle:'一之宮神社參訪',shrinePageDesc:'記錄走訪關東各地一之宮的日期與回憶。',foodPageTitle:'關東美食收集',foodPageDesc:'把吃過的鄉土料理與在地好味道收藏起來。',mountainPageTitle:'知名山峰攀登',mountainPageDesc:'收藏登過的山峰，記下日期與登山筆記。',mountainsSection:'關東與日本名峰',collectionMapHint:'選擇地圖上的圖示，可快速找到這筆收藏。',openMap:'地圖與交通 ↗',zoomMap:'地圖縮放',zoomIn:'放大',zoomOut:'縮小',zoomReset:'重設縮放',japanContext:'日本位置圖' });
  Object.assign(COPY['zh-CN'], { homeTitle:'日本制县等级',homeSubtitle:'关东市区町村地图',collectionTitle:'一之宫神社、当地美食与登山',collectionDesc:'收藏参访、品尝与登顶的旅程印记。',navCollection:'一之宫神社',navFoods:'美食收集',navMountains:'名峰登山',shrinePageTitle:'一之宫神社参访',shrinePageDesc:'记录走访关东各地一之宫的日期与回忆。',foodPageTitle:'关东美食收集',foodPageDesc:'收藏吃过的乡土料理与当地风味。',mountainPageTitle:'知名山峰攀登',mountainPageDesc:'收藏登过的山峰，记下日期与登山笔记。',mountainsSection:'关东与日本名峰',zoomMap:'地图缩放',zoomIn:'放大',zoomOut:'缩小',zoomReset:'重置缩放',japanContext:'日本位置图' });
  Object.assign(COPY.en, { homeTitle:'Japan’s Prefectures',homeSubtitle:'Kanto cities, towns and villages',collectionTitle:'Shrines, local food and mountain climbs',collectionDesc:'Save memories from visits, meals and summits.',navCollection:'Ichinomiya shrines',navFoods:'Local foods',navMountains:'Mountain climbs',shrinePageTitle:'Ichinomiya shrine visits',shrinePageDesc:'Keep dates and memories from visiting Kanto’s Ichinomiya shrines.',foodPageTitle:'Kanto food collection',foodPageDesc:'Collect regional dishes and local flavors you have tried.',mountainPageTitle:'Famous mountain climbs',mountainPageDesc:'Track summits, dates, and notes from your hikes.',mountainsSection:'Famous peaks in and around Kanto',collectionMapHint:'Select a map marker to jump to its collection card.',openMap:'Map and directions ↗',zoomMap:'Map zoom',zoomIn:'Zoom in',zoomOut:'Zoom out',zoomReset:'Reset zoom',japanContext:'Japan locator' });
  Object.assign(COPY.ja, { homeTitle:'日本の都道府県',homeSubtitle:'関東の市区町村マップ',collectionTitle:'一之宮神社・ご当地グルメ・登山',collectionDesc:'参拝、食事、登頂の思い出を記録します。',navCollection:'一之宮神社',navFoods:'ご当地グルメ',navMountains:'名峰登山',shrinePageTitle:'一之宮神社の参拝記録',shrinePageDesc:'関東各地の一之宮を訪れた日や思い出を記録します。',foodPageTitle:'関東グルメコレクション',foodPageDesc:'食べた郷土料理やご当地の味を集めましょう。',mountainPageTitle:'名峰の登山記録',mountainPageDesc:'登った山や日付、登山メモを記録します。',mountainsSection:'関東と周辺の名峰',collectionMapHint:'地図のマーカーを選ぶと、該当する項目へ移動します。',openMap:'地図・行き方 ↗',zoomMap:'地図の拡大縮小',zoomIn:'拡大',zoomOut:'縮小',zoomReset:'拡大をリセット',japanContext:'日本の位置図' });
  Object.assign(COPY.ko, { homeTitle:'일본 도도부현',homeSubtitle:'간토 시정촌 지도',collectionTitle:'신사·향토 음식·산행',collectionDesc:'참배와 식사, 등정의 기억을 기록하세요.',navCollection:'이치노미야 신사',navFoods:'향토 음식',navMountains:'명산 등반',shrinePageTitle:'이치노미야 신사 참배 기록',shrinePageDesc:'간토 각지의 이치노미야를 방문한 날짜와 추억을 기록하세요.',foodPageTitle:'간토 음식 컬렉션',foodPageDesc:'맛본 향토 요리와 지역의 맛을 모아보세요.',mountainPageTitle:'명산 등반 기록',mountainPageDesc:'정상과 날짜, 산행 메모를 기록하세요.',mountainsSection:'간토와 주변의 명산',zoomMap:'지도 확대/축소',zoomIn:'확대',zoomOut:'축소',zoomReset:'확대 초기화',japanContext:'일본 위치도' });
  const STATUS = {
    'zh-TW': [ ['旅宿過','曾在這裡住宿'],['遊玩過','曾在這裡旅行或遊玩'],['乘換','曾在這裡轉乘或短暫下車'],['通過','經過但沒有下車'],['沒去過','尚未到訪'] ],
    en: [ ['Stayed overnight','You stayed overnight'],['Explored','You visited for a trip'],['Transfer','You transferred or briefly got off'],['Passed through','You passed through without getting off'],['Not visited','You have not visited'] ],
    ja: [ ['宿泊','ここに宿泊した'],['観光','旅行・観光で訪れた'],['乗換','乗換または短時間下車した'],['通過','下車せずに通過した'],['未訪問','まだ訪れていない'] ],
  };
  const municipalityList = window.JAPAN_MUNICIPALITIES || [];
  const geo = window.JAPAN_BOUNDARIES || { prefectures: {}, municipalities: {}, details: {}, viewBox: [0,0,1000,680] };
  const byCode = new Map(municipalityList.map((m) => [String(m.id), m]));
  const byName = new Map(municipalityList.map((m) => [`${m.prefecture}|${m.name}`, m]));
  const pref = (id) => PREFS.find((p) => p.id === id);
  const localeName = (p) => p?.[locale === 'zh-CN' ? 'cn' : locale === 'zh-TW' ? 'tw' : locale] || p?.name || '';
  const text = (key) => COPY[locale]?.[key] ?? COPY['zh-TW'][key] ?? key;
  const app = document.querySelector('#app'); const breadcrumb = document.querySelector('#breadcrumb');
  const dataKey = 'tabi-shirushi-kanto-v2'; const oldKey = 'tabi-shirushi-kanto-v1';
  let locale = localStorage.getItem('tabi-shirushi-locale') || 'zh-TW';
  if (!LOCALES.includes(locale)) { locale = 'zh-TW'; localStorage.setItem('tabi-shirushi-locale', locale); }
  let toastTimer;
  let playPrefEffectNext=false;
  let prefectureEffectTimer=null;
  let saved;
  try { saved = JSON.parse(localStorage.getItem(dataKey) || 'null'); } catch { saved = null; }
  if (!saved) {
    let old = {};
    try { old = JSON.parse(localStorage.getItem(oldKey) || '{}'); } catch { old = {}; }
    saved = { schemaVersion: 2, records: {}, collections: {} };
    for (const [id, oldRecord] of Object.entries(old.records || old)) {
      if (!oldRecord || typeof oldRecord !== 'object' || !byCode.has(String(id))) continue;
      const oldLevel = Number(oldRecord.level ?? 0);
      const migratedLevel = ({ 0: 5, 1: 4, 2: 2, 3: 0 })[oldLevel] ?? 5;
      saved.records[id] = { ...oldRecord, level: migratedLevel, places: Array.isArray(oldRecord.places) ? oldRecord.places : [] };
    }
    localStorage.setItem(dataKey, JSON.stringify(saved));
  }
  if (!saved.records || typeof saved.records !== 'object') saved.records = {};
  if (!saved.collections || typeof saved.collections !== 'object') saved.collections = {};
  if (Number(saved.schemaVersion || 0) < 3) {
    const statusMigration = { 0: 0, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };
    for (const entry of Object.values(saved.records)) {
      if (!entry || typeof entry !== 'object') continue;
      entry.level = statusMigration[Number(entry.level)] ?? 4;
    }
    saved.schemaVersion = 3;
    localStorage.setItem(dataKey, JSON.stringify(saved));
  }
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const record = (id) => saved.records[id] || { level: 4, visitedDate: '', notes: '', rating: 0, places: [] };
  const countsFor = (items) => { const counts = [0,0,0,0,0]; items.forEach((item) => { const n = Math.max(0, Math.min(4, Number(record(item.id).level ?? 4))); counts[n]++; }); const explored = counts.slice(0,4).reduce((a,b)=>a+b,0); return { counts, total: items.length, explored, rate: items.length ? explored/items.length : 0 }; };
  const ofPref = (id) => municipalityList.filter((m) => m.prefecture === id);
  const allCounts = () => countsFor(municipalityList);
  const pct = (n) => `${n > 0 && n < .01 ? (n*100).toFixed(1) : Math.round(n*100)}%`;
  const statusLabel = (level) => STATUS[locale]?.[level]?.[0] || STATUS['zh-TW'][level][0];
  const statusDesc = (level) => STATUS[locale]?.[level]?.[1] || STATUS['zh-TW'][level][1];
  const tStatus = () => STATUS[locale] || STATUS['zh-TW'];
  const store = () => { saved.schemaVersion = 3; localStorage.setItem(dataKey, JSON.stringify(saved)); };
  const toast = (message) => { const node = document.querySelector('#toast'); node.textContent = message; node.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => node.classList.remove('show'), 2200); };
  const setBreadcrumb = (names) => { breadcrumb.innerHTML = `<a href="/regions">${escapeHtml(text('myJapan'))}</a>${names.map((name) => `<b>/</b><span>${escapeHtml(name)}</span>`).join('')}`; };
  const inRegionOrder = ['tokyo','kanagawa','chiba','saitama','ibaraki','tochigi','gunma'];
  function rollup(id) {
    const data = countsFor(ofPref(id));
    if (!data.explored) return { ...data, level: 4 };
    const visited = data.counts.slice(0,4); const max = Math.max(...visited);
    return { ...data, level: visited.findIndex((count) => count === max) };
  }
  function svgDefs() {
    return `<defs>
      <pattern id="tex-paper" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="2" r=".55" fill="#493f32" opacity=".19"/><path d="M5 7h1" stroke="#fff" stroke-opacity=".26" stroke-width=".65"/></pattern>
      <pattern id="tex-wash" width="36" height="30" patternUnits="userSpaceOnUse"><path d="M2 9c5-5 9-3 13-7s10-1 11 3 6 4 8 8-4 9-10 8-8 6-15 3S1 18 2 9Z" fill="#fff" opacity=".23"/><circle cx="28" cy="3" r="4" fill="#fff" opacity=".13"/></pattern>
      <pattern id="tex-topo" width="58" height="44" patternUnits="userSpaceOnUse"><path d="M-8 16c10-11 20-11 30 0s20 11 36 0M-8 26c10-11 20-11 30 0s20 11 36 0M4 36c8-8 15-8 23 0s16 8 26 0" fill="none" stroke="#fff" stroke-opacity=".34" stroke-width="1.1"/></pattern>
      <filter id="lift" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#243d31" flood-opacity=".28"/></filter>
    </defs>`;
  }
  function statusColor(level) { return `var(--status-${level})`; }
  function legend() {
    return `<div class="status-legend" aria-label="${escapeHtml(text('statusLegend'))}">${tStatus().map((s,i) => `<span><i class="legend-swatch s${i}"></i>${escapeHtml(s[0])}</span>`).join('')}</div>`;
  }
  function mapShell(content, type = 'pref') {
    return `<div class="map-frame ${type}" data-material="paper"><svg class="map-svg" viewBox="0 0 1000 680" role="group" aria-label="${escapeHtml(text(type === 'kanto' ? 'mapTitle' : type === 'collection-map' ? 'collectionTitle' : 'munis'))}">${svgDefs()}<g class="map-zoom-layer">${content}</g></svg><div class="map-zoom-controls" aria-label="${escapeHtml(text('zoomMap'))}"><button type="button" data-map-zoom="-1" aria-label="${escapeHtml(text('zoomOut'))}">−</button><button type="button" data-map-zoom="reset" aria-label="${escapeHtml(text('zoomReset'))}">↺</button><button type="button" data-map-zoom="1" aria-label="${escapeHtml(text('zoomIn'))}">＋</button></div><div class="map-tooltip" aria-live="polite" hidden></div></div>`;
  }
  function homeMap(showPrefectureRates = true) {
    const center=geo.japan?.kantoCenter;
    const coastBackdrop=geo.japan?.d&&center?`<path class="japan-coast-backdrop" d="${geo.japan.d}" transform="translate(${(500-center.x*.9).toFixed(2)} ${(340-center.y*.9).toFixed(2)}) scale(.9)" pointer-events="none"/>`:'';
    const municipalities = (geo.homeMunicipalities || []).map((feature) => {
      const item = byCode.get(String(feature.id)); if (!item || !feature.d) return '';
      const state = record(item.id); const status = statusLabel(state.level);
      return `<a class="map-unit-link" href="/prefecture/${item.prefecture}" aria-label="${escapeHtml(item.name)} · ${escapeHtml(status)}"><g class="map-unit"><path class="map-region-shape s${state.level} interactive-muni" d="${feature.d}" data-code="${item.id}" tabindex="0" role="link" aria-label="${escapeHtml(item.name)} · ${escapeHtml(status)}"/><path class="map-texture" d="${feature.d}"/></g></a>`;
    }).join('');
    const prefectureLabels = inRegionOrder.map((id) => {
      const p = pref(id); const roll = rollup(id); const geometry = geo.home?.find((feature) => feature.id === id);
      return geometry ? `<g class="prefecture-label-group" pointer-events="none"><text class="pref-map-label" x="${geometry.cx}" y="${geometry.cy}" text-anchor="middle">${escapeHtml(localeName(p))}</text>${showPrefectureRates?`<text class="pref-map-percent" x="${geometry.cx}" y="${Number(geometry.cy)+19}" text-anchor="middle">${pct(roll.rate)}</text>`:''}</g>` : '';
    }).join('');
    return mapShell(coastBackdrop + municipalities + prefectureLabels, 'kanto');
  }
  function renderHome() {
    const data=allCounts();
    setBreadcrumb([text('home')]);
    const active=Object.values(saved.records).filter((r)=>r && Number(r.level)<4).length;
    app.innerHTML=`<section class="welcome"><div><div class="eyebrow">${escapeHtml(text('journey'))}</div><h1 class="page-title">${escapeHtml(text('homeTitle'))}</h1><p class="page-subtitle">${escapeHtml(text('homeSubtitle'))}</p><div class="welcome-note">${escapeHtml(text('seven'))} · ${data.total} ${escapeHtml(text('districts'))}</div></div><div class="date-chip">✿ <span>${new Intl.DateTimeFormat(locale,{dateStyle:'long'}).format(new Date())}</span></div></section>
      <section class="map-dashboard"><div class="map-dashboard-head"><div><div class="eyebrow">${escapeHtml(text('mapTitle'))}</div><h2>${escapeHtml(text('seven'))}</h2><p>${escapeHtml(text('mapTap'))}</p></div><div class="home-pie">${pieChart(data.counts,data.total)}<div><strong>${pct(data.rate)}</strong><small>${escapeHtml(text('exploreRate'))}</small></div></div></div>
        <div class="dashboard-map-toolbar"><span class="map-data-count">${data.explored} ${escapeHtml(text('of'))} ${data.total} ${escapeHtml(text('districts'))}</span></div>
        ${homeMap()}${legend()}<p class="map-rollup-hint">${escapeHtml(text('homeRollup'))}</p></section>
      <section class="status-summary">${tStatus().map((s,i)=>`<div class="status-summary-card s${i}"><span class="summary-emoji">${['▱','✿','↔','→','○'][i]}</span><div><strong>${data.counts[i]}</strong><small>${escapeHtml(s[0])}</small></div></div>`).join('')}</section>
      <section class="home-lower"><div class="panel"><div class="panel-heading"><div><h3>${escapeHtml(text('prefRate'))}</h3><p>${escapeHtml(text('homeRollup'))}</p></div><a class="text-link" href="/regions">${escapeHtml(text('map'))} →</a></div><div class="prefecture-progress-list">${inRegionOrder.map((id)=>{const p=pref(id),s=rollup(id);return `<a class="pref-progress-row" href="/prefecture/${id}"><span>${escapeHtml(localeName(p))}</span><div class="progress"><span style="width:${s.rate*100}%"></span></div><small>${s.explored}/${s.total}</small><b>${pct(s.rate)}</b></a>`}).join('')}</div></div>
      <div class="panel home-collect"><div class="panel-heading"><div><h3>${escapeHtml(text('collectionTitle'))}</h3><p>${escapeHtml(text('collectionDesc'))}</p></div></div>${collectionProgress()}<div class="collection-shortcuts"><a href="/shrines">⛩ ${escapeHtml(text('navCollection'))}　↗</a><a href="/food">🍜 ${escapeHtml(text('navFoods'))}　↗</a><a href="/mountains">⛰ ${escapeHtml(text('navMountains'))}　↗</a></div></div></section>
      <p class="data-credit">${escapeHtml(text('noteAttribution'))} · <a href="https://github.com/kyodo-official/japan-choropleth" target="_blank" rel="noopener noreferrer">kyodo-official/japan-choropleth · CC BY 4.0</a></p>`;
  }
  function renderRegions() {
    setBreadcrumb([]);
    app.innerHTML=`<div class="section-header"><div><div class="eyebrow">${escapeHtml(text('seven'))}</div><h1 class="page-title">${escapeHtml(text('homeTitle'))}</h1><p class="page-subtitle">${escapeHtml(text('homeSubtitle'))} · ${escapeHtml(text('mapHint'))}</p></div></div><section class="map-dashboard region-dashboard"><div class="dashboard-map-toolbar">${legend()}</div>${homeMap(false)}</section>`;
  }
  function renderPrefecture(id) {
    const p=pref(id); if(!p)return renderNotFound();
    const items=ofPref(id);const stats=countsFor(items); const features=geo.municipalities?.[id]||[]; const featureByCode=new Map(features.map((f)=>[String(f.id),f]));
    const mainShapes=features.filter((f)=>f.d).map((f)=>{const item=byCode.get(String(f.id));if(!item)return '';const s=record(item.id);const path=f.d;return `<a class="map-unit-link" href="/municipality/${item.id}" aria-label="${escapeHtml(item.name)} · ${escapeHtml(statusLabel(s.level))}"><g class="map-unit"><path class="map-muni-shape s${s.level} interactive-muni" d="${path}" data-code="${item.id}" tabindex="0" role="link" aria-label="${escapeHtml(item.name)} · ${escapeHtml(statusLabel(s.level))}"/><path class="map-texture" d="${path}" pointer-events="none"/></g></a>`}).join('');
    const mapPins=prefecturePins(id);
    const islandShapes=id==='tokyo'?features.filter((f)=>f.islandD).map((f)=>{const item=byCode.get(String(f.id));if(!item)return '';const s=record(item.id);return `<a class="map-unit-link" href="/municipality/${item.id}" aria-label="${escapeHtml(item.name)} · ${escapeHtml(statusLabel(s.level))}"><g class="map-unit"><path class="map-muni-shape s${s.level} interactive-muni" d="${f.islandD}" data-code="${item.id}" tabindex="0" role="link" aria-label="${escapeHtml(item.name)} · ${escapeHtml(statusLabel(s.level))}"/><path class="map-texture" d="${f.islandD}" pointer-events="none"/></g></a>`}).join(''):'';
    setBreadcrumb([text('map'),localeName(p)]);
    app.innerHTML=`<div class="section-header"><div><div class="eyebrow">${p.en.toUpperCase()} · ${escapeHtml(text('prefecture'))}</div><h1 class="page-title">${escapeHtml(localeName(p))}</h1><p class="page-subtitle">${escapeHtml(text('detailHint'))}</p></div><a class="date-chip" href="/regions">← ${escapeHtml(text('back'))}</a></div>
      <section class="pref-map-page"><div class="pref-map-main"><div class="map-dashboard-toolbar"><div class="pref-map-count"><b>${stats.explored} / ${stats.total}</b> ${escapeHtml(text('munis'))} · ${pct(stats.rate)}</div></div>${mapShell(mainShapes+mapPins,'municipal')}${collectionPinLegend(id)}<div class="map-hover-help">${escapeHtml(text('clickArea'))}</div>
        ${id==='tokyo'?`<div class="island-inset"><div class="inset-heading"><b>${escapeHtml(localeName(p))} · 島しょ部</b><small>${escapeHtml(text('mapHint'))}</small></div>${mapShell(islandShapes,'islands')}</div>`:''}
        ${legend()}<details class="municipality-index"><summary>${escapeHtml(text('munis'))} · ${items.length}</summary><div class="index-tools"><input id="indexSearch" type="search" placeholder="${escapeHtml(text('search'))}"/><select id="indexFilter" aria-label="${escapeHtml(text('filter'))}"><option value="all">${escapeHtml(text('all'))}</option>${tStatus().map((s,i)=>`<option value="${i}">${escapeHtml(s[0])}</option>`).join('')}</select></div><div class="index-grid">${items.map((m)=>`<a href="/municipality/${m.id}" data-index-name="${escapeHtml(m.name)}" data-index-level="${record(m.id).level}"><span class="legend-swatch s${record(m.id).level}"></span>${escapeHtml(m.name)}</a>`).join('')}</div><div id="indexEmpty" class="empty-state" hidden>${escapeHtml(text('noResults'))}</div></details></div>
      <aside class="pref-map-aside"><div class="detail-status-card"><div class="eyebrow">${escapeHtml(text('exploreRate'))}</div><h3>${escapeHtml(localeName(p))}</h3><div class="detail-kpi"><strong>${pct(stats.rate)}</strong><span>${stats.explored} / ${stats.total} ${escapeHtml(text('munis'))}</span></div><div class="progress"><span style="width:${stats.rate*100}%"></span></div><div class="level-totals">${tStatus().map((s,i)=>`<span><i class="legend-swatch s${i}"></i>${escapeHtml(s[0])}<b>${stats.counts[i]}</b></span>`).join('')}</div></div><div class="panel side-hint"><h3>${escapeHtml(text('statusLegend'))}</h3>${tStatus().map((s,i)=>`<div class="level-description"><i class="legend-swatch s${i}"></i><div><b>${escapeHtml(s[0])}</b><small>${escapeHtml(s[1])}</small></div></div>`).join('')}</div></aside></section>${renderPrefectureCollections(id)}`;
    const search=document.querySelector('#indexSearch'),filter=document.querySelector('#indexFilter');
    const filterIndex=()=>{const q=search.value.toLowerCase().trim();let n=0;document.querySelectorAll('[data-index-name]').forEach((a)=>{const show=a.dataset.indexName.toLowerCase().includes(q)&&(filter.value==='all'||a.dataset.indexLevel===filter.value);a.hidden=!show;if(show)n++});document.querySelector('#indexEmpty').hidden=n>0};
    search.addEventListener('input',filterIndex);filter.addEventListener('change',filterIndex);
  }
  function renderMunicipality(id) {
    const item=byCode.get(String(id));if(!item)return renderNotFound();const p=pref(item.prefecture);const r=record(item.id);let draftLevel=Number(r.level??4),draftPlaces=[...(r.places||[])],draftRating=Number(r.rating)||0;
    setBreadcrumb([localeName(p),item.name]);
    const other=geo.municipalities?.[p.id]?.find((f)=>String(f.id)===String(item.id));
    const localShape=other?.d?`<svg class="selected-area-mini" viewBox="0 0 1000 680" aria-hidden="true">${svgDefs()}<path class="map-muni-shape s${draftLevel}" d="${other.d}"/></svg>`:'';
    app.innerHTML=`<div class="section-header"><div><div class="eyebrow">${p.en.toUpperCase()} · ${escapeHtml(text('detail'))}</div><h1 class="page-title">${escapeHtml(item.name)}</h1><p class="page-subtitle">${escapeHtml(localeName(p))} · ${escapeHtml(text('detailHint'))}</p></div><a class="date-chip" href="/prefecture/${p.id}">← ${escapeHtml(text('back'))}</a></div>
      <section class="district-detail"><div><div class="municipality-hero"><div class="eyebrow">${escapeHtml(localeName(p))} · ${escapeHtml(item.id)}</div><div class="municipality-hero-row">${localShape}<div><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(localeName(p))}</p><div class="status-current"><span id="currentEmoji">${['▱','✿','↔','→','○'][draftLevel]}</span><span id="currentStatus">${escapeHtml(statusLabel(draftLevel))}</span></div></div></div></div>
        <div class="panel state-editor"><div class="panel-heading"><div><h3>${escapeHtml(text('status'))}</h3><p>${escapeHtml(text('statusHelp'))}</p></div></div><div class="state-choice-grid" role="group" aria-label="${escapeHtml(text('status'))}">${tStatus().map((s,i)=>`<button type="button" class="state-choice s${i} ${draftLevel===i?'selected':''}" data-set-level="${i}" aria-pressed="${draftLevel===i}"><i class="choice-swatch s${i}"></i><span><b>${escapeHtml(s[0])}</b><small>${escapeHtml(s[1])}</small></span><span class="choice-check">✓</span></button>`).join('')}</div></div></div>
        <form id="recordForm" class="record-card"><h3>${escapeHtml(text('detail'))}</h3><div class="field"><label for="visitedDate">${escapeHtml(text('date'))}</label><input type="date" id="visitedDate" value="${escapeHtml(r.visitedDate||'')}"/></div><div class="field"><label for="placeInput">${escapeHtml(text('places'))}</label><div class="place-input-row"><input id="placeInput" placeholder="${escapeHtml(text('placePlaceholder'))}"/><button id="addPlace" type="button" aria-label="${escapeHtml(text('add'))}">＋</button></div><div class="place-chips" id="placeChips">${draftPlaces.map((v,i)=>`<span class="place-chip">${escapeHtml(v)}<button type="button" data-remove-place="${i}" aria-label="remove">×</button></span>`).join('')}</div></div><div class="field"><label>${escapeHtml(text('rating'))}</label><div class="rating" role="group" aria-label="${escapeHtml(text('rating'))}">${[1,2,3,4,5].map((n)=>`<button type="button" data-rating="${n}" class="${n<=draftRating?'on':''}" aria-label="${n} ★" aria-pressed="${n===draftRating}">★</button>`).join('')}</div></div><div class="field"><label for="notes">${escapeHtml(text('notes'))}</label><textarea id="notes" placeholder="${escapeHtml(text('notesPlaceholder'))}">${escapeHtml(r.notes||'')}</textarea></div><div class="save-row"><span class="save-hint">${escapeHtml(text('localOnly'))}</span><button class="button-primary" type="submit">${escapeHtml(text('save'))}　✓</button></div></form></section>`;
    const updateLevel=(n)=>{draftLevel=n;saved.records[item.id]={...record(item.id),level:n};store();app.querySelectorAll('[data-set-level]').forEach((button)=>{const on=Number(button.dataset.setLevel)===n;button.classList.toggle('selected',on);button.setAttribute('aria-pressed',String(on))});document.querySelector('#currentEmoji').textContent=['▱','✿','↔','→','○'][n];document.querySelector('#currentStatus').textContent=statusLabel(n);const shape=document.querySelector('.selected-area-mini path');if(shape)shape.setAttribute('class',`map-muni-shape s${n}`)};
    app.onclick=(event)=>{const status=event.target.closest('[data-set-level]');if(status)updateLevel(Number(status.dataset.setLevel));const rating=event.target.closest('[data-rating]');if(rating){draftRating=Number(rating.dataset.rating);app.querySelectorAll('[data-rating]').forEach((b)=>{b.classList.toggle('on',Number(b.dataset.rating)<=draftRating);b.setAttribute('aria-pressed',String(Number(b.dataset.rating)===draftRating))})}const remove=event.target.closest('[data-remove-place]');if(remove){draftPlaces.splice(Number(remove.dataset.removePlace),1);refreshPlaces()}if(event.target.closest('#addPlace'))addPlace()};
    const refreshPlaces=()=>{document.querySelector('#placeChips').innerHTML=draftPlaces.map((v,i)=>`<span class="place-chip">${escapeHtml(v)}<button type="button" data-remove-place="${i}" aria-label="remove">×</button></span>`).join('')};
    const addPlace=()=>{const input=document.querySelector('#placeInput'),value=input.value.trim();if(value){draftPlaces.push(value);input.value='';refreshPlaces()}};
    document.querySelector('#placeInput').addEventListener('keydown',(event)=>{if(event.key==='Enter'){event.preventDefault();addPlace()}});
    document.querySelector('#recordForm').addEventListener('submit',(event)=>{event.preventDefault();saved.records[item.id]={level:draftLevel,visitedDate:document.querySelector('#visitedDate').value,notes:document.querySelector('#notes').value.trim(),rating:draftRating,places:draftPlaces};store();playPrefEffectNext=false;history.pushState({},'',`${BASE_PATH}/prefecture/${p.id}`);route();toast(text('saved'))});
  }
  function donut(counts,total) {
    const circumference=2*Math.PI*61;let offset=0;const segments=counts.map((value,i)=>{if(!value)return '';const length=value/(total||1)*circumference;const html=`<circle class="donut-seg s${i}" cx="80" cy="80" r="61" stroke-dasharray="${Math.max(length-2,0)} ${circumference}" stroke-dashoffset="${-offset}"/>`;offset+=length;return html}).join('');
    return `<div class="donut-v2"><svg viewBox="0 0 160 160"><circle class="donut-track" cx="80" cy="80" r="61"/>${segments}</svg><div class="donut-v2-center"><strong>${pct(counts.slice(0,4).reduce((a,b)=>a+b,0)/(total||1))}</strong><small>${escapeHtml(text('exploreRate'))}</small></div></div>`;
  }
  function pieChart(counts,total) {
    let angle=-90;
    const slices=counts.map((count,index)=>{
      if(!count)return '';
      if(count===total)return `<circle class="pie-slice s${index}" cx="80" cy="80" r="68"/>`;
      const sweep=count/total*360,startX=80+68*Math.cos(angle*Math.PI/180),startY=80+68*Math.sin(angle*Math.PI/180),endAngle=angle+sweep,endX=80+68*Math.cos(endAngle*Math.PI/180),endY=80+68*Math.sin(endAngle*Math.PI/180);
      const path=`M80 80L${startX.toFixed(2)} ${startY.toFixed(2)}A68 68 0 ${sweep>180?1:0} 1 ${endX.toFixed(2)} ${endY.toFixed(2)}Z`;angle=endAngle;
      return `<path class="pie-slice s${index}" d="${path}"/>`;
    }).join('');
    return `<svg class="pie-chart" viewBox="0 0 160 160" role="img" aria-label="${escapeHtml(text('exploreRate'))} ${pct(counts.slice(0,4).reduce((a,b)=>a+b,0)/(total||1))}">${slices}</svg>`;
  }
  function renderStatistics() {
    const data=allCounts();setBreadcrumb([text('stats')]);
    app.innerHTML=`<div class="section-header"><div><div class="eyebrow">YOUR JOURNEY IN NUMBERS</div><h1 class="page-title">${escapeHtml(text('statTitle'))}</h1><p class="page-subtitle">${escapeHtml(text('statDesc'))}</p></div><span class="date-chip">${escapeHtml(text('seven'))} · ${data.total} ${escapeHtml(text('districts'))}</span></div>
      <section class="stat-overview"><div class="overview-card"><span>${escapeHtml(text('exploreRate'))}</span><strong>${pct(data.rate)}</strong></div><div class="overview-card"><span>${escapeHtml(text('explored'))}</span><strong>${data.explored}<small> / ${data.total}</small></strong></div></section>
      <section class="chart-grid"><div class="panel"><div class="panel-heading"><div><h3>${escapeHtml(text('levels'))}</h3><p>${escapeHtml(text('statusLegend'))}</p></div></div><div class="donut-panel"><div class="home-pie">${pieChart(data.counts,data.total)}</div><div class="legend">${tStatus().map((s,i)=>`<div class="legend-item"><i class="legend-swatch s${i}"></i>${escapeHtml(s[0])}<b>${data.counts[i]}</b></div>`).join('')}</div></div></div><div class="panel"><div class="panel-heading"><div><h3>${escapeHtml(text('prefRate'))}</h3><p>${escapeHtml(text('explored'))} / ${escapeHtml(text('munis'))}</p></div></div><div class="chart-bars">${inRegionOrder.map((id)=>{const p=pref(id),s=countsFor(ofPref(id));return `<a class="chart-bar-row" href="/prefecture/${id}"><span>${escapeHtml(localeName(p))}</span><div class="progress"><span style="width:${s.rate*100}%"></span></div><small>${pct(s.rate)}</small></a>`}).join('')}</div></div></section>`;
  }

  const SHRINES=[
    {id:'hikawa-musashi',province:'Musashi',name:{'zh-TW':'武藏一宮 氷川神社','zh-CN':'武藏一宫 冰川神社',en:'Musashi Ichinomiya Hikawa Shrine',ja:'武蔵一宮 氷川神社',ko:'무사시 이치노미야 히카와 신사'},placeId:'111007',city:'さいたま市',url:'https://musashiichinomiya-hikawa.or.jp/about/'},
    {id:'samukawa-sagami',province:'Sagami',name:{'zh-TW':'相模國一宮 寒川神社','zh-CN':'相模国一宫 寒川神社',en:'Samukawa Shrine',ja:'相模國一之宮 寒川神社',ko:'사가미국 이치노미야 사무카와 신사'},placeId:'143219',city:'寒川町',url:'https://samukawajinjya.jp/'},
    {id:'awa-awa',province:'Awa',name:{'zh-TW':'安房國一宮 安房神社','zh-CN':'安房国一宫 安房神社',en:'Awa Shrine',ja:'安房國一之宮 安房神社',ko:'아와국 이치노미야 아와 신사'},placeId:'122050',city:'館山市',url:'https://www.awajinjya.org/'},
    {id:'tamasaki-kazusa',province:'Kazusa',name:{'zh-TW':'上總國一宮 玉前神社','zh-CN':'上总国一宫 玉前神社',en:'Tamasaki Shrine',ja:'上總國一之宮 玉前神社',ko:'가즈사국 이치노미야 다마사키 신사'},placeId:'124214',city:'一宮町',url:'https://tamasakijinja.or.jp/'},
    {id:'katori-shimousa',province:'Shimousa',name:{'zh-TW':'下總國一宮 香取神宮','zh-CN':'下总国一宫 香取神宫',en:'Katori Jingū Shrine',ja:'下總國一之宮 香取神宮',ko:'시모사국 이치노미야 가토리 신궁'},placeId:'122360',city:'香取市',url:'https://katori-jingu.or.jp/'},
    {id:'kashima-hitachi',province:'Hitachi',name:{'zh-TW':'常陸國一宮 鹿島神宮','zh-CN':'常陆国一宫 鹿岛神宫',en:'Kashima Jingū Shrine',ja:'常陸國一之宮 鹿島神宮',ko:'히타치국 이치노미야 가시마 신궁'},placeId:'082228',city:'鹿嶋市',url:'https://kashimajingu.jp/'},
    {id:'futarasan-shimotsuke',province:'Shimotsuke',name:{'zh-TW':'下野國一宮 二荒山神社','zh-CN':'下野国一宫 二荒山神社',en:'Futarasan Shrine',ja:'下野國一之宮 二荒山神社',ko:'시모쓰케국 이치노미야 후타라산 신사'},placeId:'092011',city:'宇都宮市',url:'https://www.futarasan.jp/'},
    {id:'nukisaki-kozuke',province:'Kōzuke',name:{'zh-TW':'上野國一宮 一之宮貫前神社','zh-CN':'上野国一宫 一之宫贯前神社',en:'Kōzuke Ichinomiya Nukisaki Shrine',ja:'上野國一之宮 一之宮貫前神社',ko:'고즈케국 이치노미야 누키사키 신사'},placeId:'102105',city:'富岡市',url:'https://nukisaki.or.jp/'},
  ];
  const FOODS=[
    {id:'ibaraki-hoshiimo',pref:'ibaraki',name:{'zh-TW':'茨城乾燥地瓜','zh-CN':'茨城红薯干',en:'Ibaraki dried sweet potato',ja:'ほしいも',ko:'이바라키 호시이모'},city:'ひたちなか市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/ibaraki.html'},
    {id:'ibaraki-ankonabe',pref:'ibaraki',name:{'zh-TW':'鮟鱇魚鍋','zh-CN':'鮟鱇鱼锅',en:'Anglerfish hot pot',ja:'あんこう鍋',ko:'아귀 전골'},city:'北茨城市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/ibaraki.html'},
    {id:'ibaraki-natto',pref:'ibaraki',name:{'zh-TW':'水戶納豆','zh-CN':'水户纳豆',en:'Mito natto',ja:'水戸納豆',ko:'미토 낫토'},city:'水戸市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/ibaraki.html'},
    {id:'tochigi-shimotsukare',pref:'tochigi',name:{'zh-TW':'什麼都吃的鄉土料理 しもつかれ','zh-CN':'栃木乡土料理 しもつかれ',en:'Shimotsukare',ja:'しもつかれ',ko:'시모쓰카레'},city:'栃木県全域',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/tochigi.html'},
    {id:'tochigi-gyoza',pref:'tochigi',name:{'zh-TW':'宇都宮餃子','zh-CN':'宇都宫饺子',en:'Utsunomiya gyoza',ja:'宇都宮餃子',ko:'우쓰노미야 교자'},city:'宇都宮市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/tochigi.html'},
    {id:'tochigi-lemonmilk',pref:'tochigi',name:{'zh-TW':'栃木檸檬牛奶','zh-CN':'栃木柠檬牛奶',en:'Tochigi lemon milk',ja:'レモン牛乳',ko:'도치기 레몬 우유'},city:'栃木県全域',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/tochigi.html'},
    {id:'gunma-okirikomi',pref:'gunma',name:{'zh-TW':'おっきりこみ寬麵','zh-CN':'群马宽面 おっきりこみ',en:'Okkirikomi noodles',ja:'おっきりこみ',ko:'옷키리코미'},city:'群馬県全域',url:'https://www.maff.go.jp/j/syokuiku/kodomo_navi/cuisine/cuisine2.html'},
    {id:'gunma-yakimanju',pref:'gunma',name:{'zh-TW':'烤饅頭','zh-CN':'烤馒头',en:'Grilled manju',ja:'焼きまんじゅう',ko:'야키만주'},city:'前橋市',url:'https://www.maff.go.jp/j/syokuiku/kodomo_navi/cuisine/cuisine2.html'},
    {id:'gunma-konnyaku',pref:'gunma',name:{'zh-TW':'蒟蒻味噌關東煮','zh-CN':'魔芋味噌关东煮',en:'Konjac miso oden',ja:'こんにゃく味噌おでん',ko:'곤약 미소 오뎅'},city:'下仁田町',url:'https://www.maff.go.jp/j/syokuiku/kodomo_navi/cuisine/cuisine2.html'},
    {id:'saitama-zerifurai',pref:'saitama',name:{'zh-TW':'ゼリーフライ（豆渣炸餅）','zh-CN':'ゼリーフライ（豆渣炸饼）',en:'Zeri-furai',ja:'ゼリーフライ',ko:'제리후라이'},city:'行田市',url:'https://www.maff.go.jp/j/syokuiku/kodomo_navi/cuisine/cuisine2.html'},
    {id:'saitama-hiyajiru',pref:'saitama',name:{'zh-TW':'冷汁烏龍麵','zh-CN':'冷汁乌冬面',en:'Hiyajiru udon',ja:'冷汁うどん',ko:'히야지루 우동'},city:'埼玉県全域',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/about/attach/pdf/index-53.pdf'},
    {id:'saitama-senbei',pref:'saitama',name:{'zh-TW':'草加仙貝','zh-CN':'草加仙贝',en:'Sōka rice crackers',ja:'草加せんべい',ko:'소카 센베이'},city:'草加市',url:'https://foodculture2021.go.jp/wp/wp-content/themes/foodculture/assets/pdf/food-list-2023.pdf'},
    {id:'chiba-futomaki',pref:'chiba',name:{'zh-TW':'太卷祭典壽司','zh-CN':'太卷祭典寿司',en:'Futomaki festival sushi',ja:'太巻き祭りずし',ko:'후토마키 마쓰리즈시'},city:'千葉県全域',url:'https://foodculture2021.go.jp/wp/wp-content/themes/foodculture/assets/pdf/food-list-2023.pdf'},
    {id:'chiba-namero',pref:'chiba',name:{'zh-TW':'なめろう（香煎魚生）','zh-CN':'なめろう（香煎鱼生）',en:'Namero',ja:'なめろう',ko:'나메로'},city:'房総半島',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/chiba.html'},
    {id:'chiba-peanut',pref:'chiba',name:{'zh-TW':'千葉花生','zh-CN':'千叶花生',en:'Chiba peanuts',ja:'千葉の落花生',ko:'지바 땅콩'},city:'八街市',url:'https://www.maff.go.jp/kanto/kikaku/oishii_kanto/index.html'},
    {id:'tokyo-fukagawa',pref:'tokyo',name:{'zh-TW':'深川飯','zh-CN':'深川饭',en:'Fukagawa meshi',ja:'深川めし',ko:'후카가와 메시'},city:'江東区',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/34_1_tokyo.html'},
    {id:'tokyo-monjayaki',pref:'tokyo',name:{'zh-TW':'文字燒','zh-CN':'文字烧',en:'Monjayaki',ja:'もんじゃ焼き',ko:'몬자야키'},city:'中央区（月島）',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/tokyo.html'},
    {id:'tokyo-edomae',pref:'tokyo',name:{'zh-TW':'江戶前握壽司','zh-CN':'江户前寿司',en:'Edomae sushi',ja:'江戸前寿司',ko:'에도마에 스시'},city:'東京都内',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/tokyo.html'},
    {id:'kanagawa-kamaboko',pref:'kanagawa',name:{'zh-TW':'小田原蒲鉾','zh-CN':'小田原鱼糕',en:'Odawara kamaboko',ja:'小田原かまぼこ',ko:'오다와라 가마보코'},city:'小田原市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/35_19_kanagawa.html'},
    {id:'kanagawa-sanma-men',pref:'kanagawa',name:{'zh-TW':'生碼麵','zh-CN':'生码面',en:'Sanma-men',ja:'サンマーメン',ko:'산마멘'},city:'横浜市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/kanagawa.html'},
    {id:'kanagawa-shirasu',pref:'kanagawa',name:{'zh-TW':'湘南吻仔魚','zh-CN':'湘南银鱼',en:'Shōnan whitebait',ja:'湘南しらす',ko:'쇼난 뱅어'},city:'鎌倉市・藤沢市',url:'https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/kanagawa.html'},
  ];
  const MOUNTAINS=[
    {id:'mount-fuji',height:'3,776 m',region:{'zh-TW':'山梨縣・靜岡縣','zh-CN':'山梨县・静冈县',en:'Yamanashi · Shizuoka',ja:'山梨県・静岡県',ko:'야마나시·시즈오카'},name:{'zh-TW':'富士山','zh-CN':'富士山',en:'Mount Fuji',ja:'富士山',ko:'후지산'},url:'https://www.fujisan-climb.jp/'},
    {id:'tsukuba',height:'877 m',region:{'zh-TW':'茨城縣','zh-CN':'茨城县',en:'Ibaraki',ja:'茨城県',ko:'이바라키'},name:{'zh-TW':'筑波山','zh-CN':'筑波山',en:'Mount Tsukuba',ja:'筑波山',ko:'쓰쿠바산'},url:'https://tsukubasanjinja.jp/keidai/'},
    {id:'takao',height:'599 m',region:{'zh-TW':'東京都','zh-CN':'东京都',en:'Tokyo',ja:'東京都',ko:'도쿄도'},name:{'zh-TW':'高尾山','zh-CN':'高尾山',en:'Mount Takao',ja:'高尾山',ko:'다카오산'},url:'https://www.city.hachioji.tokyo.jp/kankobunka/001/004/p003393.html'},
    {id:'kumotori',height:'2,017 m',region:{'zh-TW':'東京都・埼玉縣・山梨縣','zh-CN':'东京都・埼玉县・山梨县',en:'Tokyo · Saitama · Yamanashi',ja:'東京都・埼玉県・山梨県',ko:'도쿄·사이타마·야마나시'},name:{'zh-TW':'雲取山','zh-CN':'云取山',en:'Mount Kumotori',ja:'雲取山',ko:'구모토리산'},url:'https://www.town.okutama.tokyo.jp/gyosei/6/kankojoho/miru/1724.html'},
    {id:'nantai',height:'2,486 m',region:{'zh-TW':'栃木縣','zh-CN':'栃木县',en:'Tochigi',ja:'栃木県',ko:'도치기'},name:{'zh-TW':'男體山','zh-CN':'男体山',en:'Mount Nantai',ja:'男体山',ko:'난타이산'},url:'https://www.env.go.jp/nature/nationalparks/list/nikko/spot/'},
    {id:'nikko-shirane',height:'2,578 m',region:{'zh-TW':'栃木縣・群馬縣','zh-CN':'栃木县・群马县',en:'Tochigi · Gunma',ja:'栃木県・群馬県',ko:'도치기·군마'},name:{'zh-TW':'日光白根山','zh-CN':'日光白根山',en:'Mount Nikko-Shirane',ja:'日光白根山',ko:'닛코시라네산'},url:'https://www.env.go.jp/nature/nationalparks/list/nikko/spot/'},
    {id:'tanigawa',height:'1,977 m',region:{'zh-TW':'群馬縣・新潟縣','zh-CN':'群马县・新潟县',en:'Gunma · Niigata',ja:'群馬県・新潟県',ko:'군마·니가타'},name:{'zh-TW':'谷川岳','zh-CN':'谷川岳',en:'Mount Tanigawa',ja:'谷川岳',ko:'다니가와다케'},url:'https://www.pref.gunma.jp/page/19040.html'},
    {id:'akagi',height:'1,828 m',region:{'zh-TW':'群馬縣','zh-CN':'群马县',en:'Gunma',ja:'群馬県',ko:'군마'},name:{'zh-TW':'赤城山（黑檜山）','zh-CN':'赤城山（黑檜山）',en:'Mount Akagi (Kurobi-san)',ja:'赤城山（黒檜山）',ko:'아카기산(구로비산)'},url:'https://www.pref.gunma.jp/page/1222.html'},
    {id:'oyama',height:'1,252 m',region:{'zh-TW':'神奈川縣','zh-CN':'神奈川县',en:'Kanagawa',ja:'神奈川県',ko:'가나가와'},name:{'zh-TW':'大山','zh-CN':'大山',en:'Mount Ōyama',ja:'大山',ko:'오야마'},url:'https://www.pref.kanagawa.jp/'},
    {id:'nokogiri',height:'329 m',region:{'zh-TW':'千葉縣','zh-CN':'千叶县',en:'Chiba',ja:'千葉県',ko:'지바'},name:{'zh-TW':'鋸山','zh-CN':'锯山',en:'Mount Nokogiri',ja:'鋸山',ko:'노코기리산'},url:'https://maruchiba.jp/'}
  ];
  const MOUNTAIN_LOCATIONS={'mount-fuji':'143821',tsukuba:'082201',takao:'132012',kumotori:'133086',nantai:'092061','nikko-shirane':'092061',tanigawa:'104493',akagi:'102067',oyama:'142140',nokogiri:'124630'};
  function collectionLocation(item,type) {
    let place;
    if(type==='shrine') place=byCode.get(String(item.placeId));
    else if(type==='food') {
      const area=item.city.split(/[・·]/)[0].replace(/[（(].*?[）)]/g,'').trim();
      place=municipalityList.find((m)=>m.name_ja===area||m.name===area);
      if(!place&&item.city==='房総半島')place=byCode.get('122050');
    }
    else place=byCode.get(String(MOUNTAIN_LOCATIONS[item.id]||''));
    if(place) {
      const feature=geo.municipalities?.[place.prefecture]?.find((f)=>String(f.id)===String(place.id));
      if(feature)return {x:feature.cx,y:feature.cy,place,outside:type==='mountain'&&item.id==='mount-fuji'};
    }
    const prefId=place?.prefecture||item.pref||'tokyo';
    const localFeatures=(geo.municipalities?.[prefId]||[]).filter((feature)=>feature.d);
    if(localFeatures.length){const center=localFeatures.reduce((point,feature)=>({x:point.x+feature.cx/localFeatures.length,y:point.y+feature.cy/localFeatures.length}),{x:0,y:0});return {...center,place};}
    const center=geo.home?.find((f)=>f.id===prefId);
    return center?{x:center.cx,y:center.cy,place}:{x:500,y:340};
  }
  function collectionsForPrefecture(id) {
    const shrines=SHRINES.filter((item)=>byCode.get(String(item.placeId))?.prefecture===id);
    const food=FOODS.filter((item)=>item.pref===id);
    const mountains=MOUNTAINS.filter((item)=>byCode.get(String(MOUNTAIN_LOCATIONS[item.id]||''))?.prefecture===id);
    return {shrine:shrines,food,mountain:mountains};
  }
  function prefecturePins(id) {
    const groups=collectionsForPrefecture(id),seen=new Map();
    return Object.entries(groups).flatMap(([type,items])=>items.map((item)=>{
      const loc=collectionLocation(item,type),key=Math.round(loc.x/16)+':'+Math.round(loc.y/16),offset=seen.get(key)||0;seen.set(key,offset+1);
      const x=loc.x+(offset%3-1)*9,y=loc.y+Math.floor(offset/3)*9;
      const icon=type==='shrine'?'⛩':type==='food'?'🍜':'▲',name=item.name[locale]||item.name['zh-TW'];
      const outsideLabel=locale==='en'?'Outside Kanto':locale==='ja'?'関東の範囲外':'關東外';
      return '<g class="collection-pin '+type+'-pin '+(loc.outside?'outside':'')+'" data-collection-target="'+item.id+'" transform="translate('+x+' '+y+')" tabindex="0" role="button" aria-label="'+escapeHtml(name)+(loc.outside?' · '+outsideLabel:'')+'"><circle r="15"/><text class="collection-pin-symbol" y="4">'+icon+'</text><title>'+escapeHtml(name)+(loc.outside?' · '+outsideLabel:'')+'</title></g>';
    })).join('');
  }
  function collectionPinLegend(id) {
    const groups=collectionsForPrefecture(id);
    const entries=[['shrine','⛩','shrineAchievement'],['food','🍜','foodAchievement'],['mountain','⛰','navMountains']].filter(([type])=>groups[type].length);
    return '<div class="collection-pin-legend">'+entries.map(([,icon,label])=>'<span><i>'+icon+'</i>'+escapeHtml(text(label))+'</span>').join('')+'</div>';
  }

  function renderPrefectureCollections(id) {
    const groups=collectionsForPrefecture(id);
    const config=[
      {type:'shrine',icon:'⛩',title:text('shrineSection')},
      {type:'food',icon:'🍜',title:text('foodSection')},
      {type:'mountain',icon:'⛰',title:text('mountainsSection')},
    ];
    return '<div class="pref-collections">'+config.map(({type,icon,title})=>{
      const items=groups[type];if(!items.length)return '';
      const done=items.filter((item)=>col(item.id).visited).length;
      return '<section class="collection-section pref-collection-section"><div class="collection-section-head"><div><div class="eyebrow">'+icon+' · '+escapeHtml(localeName(pref(id)))+'</div><h2>'+escapeHtml(title)+'</h2><p>'+escapeHtml(text('collectionMapHint'))+'</p></div><span class="date-chip">'+done+' / '+items.length+'</span></div><div class="collection-grid">'+items.map((item,index)=>renderCollectionCard(item,type,index)).join('')+'</div></section>';
    }).join('')+'</div>';
  }

  function collectionMap(items,type) {
    const base=(geo.homeMunicipalities||[]).map((f)=>{const item=byCode.get(String(f.id));if(!item||!f.d)return '';const s=record(item.id);return `<a class="map-unit-link" href="/municipality/${item.id}" aria-label="${escapeHtml(item.name)} · ${escapeHtml(statusLabel(s.level))}"><path class="map-muni-shape s${s.level} interactive-muni" d="${f.d}" data-code="${item.id}"/></a>`}).join('');
    const seen=new Map();
    const pins=items.map((item,index)=>{
      const loc=collectionLocation(item,type);const key=`${Math.round(loc.x/14)}:${Math.round(loc.y/14)}`,offset=seen.get(key)||0;seen.set(key,offset+1);
      const x=loc.x+(offset%3-1)*8,y=loc.y+Math.floor(offset/3)*8;
      const name=item.name[locale]||item.name['zh-TW'],number=String(index+1).padStart(2,'0'),outsideLabel=locale==='en'?'Outside Kanto':locale==='ja'?'関東の範囲外':'關東範圍外';
      return `<g class="collection-pin ${loc.outside?'outside':''}" data-collection-target="${item.id}" transform="translate(${x} ${y})" tabindex="0" role="button" aria-label="${number} ${escapeHtml(name)}${loc.outside?` · ${outsideLabel}`:''}"><circle r="15"/><text y="3.5">${number}</text>${loc.outside?`<text class="outside-label" x="18" y="3.5">${outsideLabel}</text>`:''}<title>${escapeHtml(name)}${loc.outside?` · ${outsideLabel}`:''}</title></g>`;
    }).join('');
    return mapShell(base+pins,'collection-map');
  }
  function col(id) { return saved.collections[id] || { visited:false, date:'', note:'' }; }
  function collectionProgress() {
    const shrineDone=SHRINES.filter((x)=>col(x.id).visited).length,foodDone=FOODS.filter((x)=>col(x.id).visited).length,mountainDone=MOUNTAINS.filter((x)=>col(x.id).visited).length;
    return `<div class="collection-progress"><div><span>⛩</span><b>${shrineDone} / ${SHRINES.length}</b><small>${escapeHtml(text('shrineAchievement'))}</small></div><div><span>🍜</span><b>${foodDone} / ${FOODS.length}</b><small>${escapeHtml(text('foodAchievement'))}</small></div><div><span>⛰</span><b>${mountainDone} / ${MOUNTAINS.length}</b><small>${escapeHtml(text('navMountains'))}</small></div></div>`;
  }
  function milestoneCards() {
    const shrineDone=SHRINES.filter((x)=>col(x.id).visited).length, foodDone=FOODS.filter((x)=>col(x.id).visited).length;
    const goals=[{icon:'⛩',title:text('firstVisit'),desc:text('shrineSection'),done:shrineDone>0},{icon:'🏆',title:text('allShrines'),desc:`${shrineDone} / ${SHRINES.length}`,done:shrineDone===SHRINES.length},{icon:'🍡',title:text('firstBite'),desc:text('foodSection'),done:foodDone>0},{icon:'🎖',title:text('foodTen'),desc:`${foodDone} / 10`,done:foodDone>=10}];
    return `<div class="milestone-grid">${goals.map((g)=>`<article class="milestone-card ${g.done?'done':''}"><span>${g.icon}</span><div><b>${escapeHtml(g.title)}</b><small>${escapeHtml(g.desc)}</small></div><em>${escapeHtml(g.done?text('unlocked'):text('locked'))}</em></article>`).join('')}</div>`;
  }
  function renderCollectionCard(item,type,index) {
    const row=col(item.id);const title=item.name[locale]||item.name['zh-TW'];const target=collectionLocation(item,type).place;const targetText=target?target.name:type==='mountain'?(item.region[locale]||item.region['zh-TW']):item.city;const number=String(index+1).padStart(2,'0');
    const icon=type==='shrine'?'⛩':type==='mountain'?'⛰':'🍽';
    const meta=type==='shrine'?`${text('nationalProvince')} · ${item.province}`:type==='mountain'?item.height:localeName(pref(item.pref));
    const mapUrl=`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${title} ${targetText}`)}`;
    return `<article id="collection-${item.id}" class="collection-card ${row.visited?'collected':''}" data-pref="${type==='food'?item.pref:''}"><div class="collection-card-top"><span class="collect-icon">${icon} <small class="collection-number">${number}</small></span><button type="button" class="collect-toggle ${row.visited?'checked':''}" data-collect="${item.id}" aria-pressed="${row.visited}">${row.visited?'✓':'+ '}<span>${escapeHtml(row.visited?text('undo'):text('markVisited'))}</span></button></div><div class="collection-meta">${escapeHtml(meta)}</div><h3>${escapeHtml(title)}</h3><div class="collection-location">⌖ ${escapeHtml(text(type==='shrine'?'place':'foodDistrict'))}：${escapeHtml(targetText)}</div>${target?`<a class="collection-map-link" href="/municipality/${target.id}">↗ ${escapeHtml(text('openRecord'))}</a>`:''}<a class="collection-map-link" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text('openMap'))}</a><div class="collection-fields ${row.visited?'show':''}"><label>${escapeHtml(text(type==='shrine'?'visitDate':type==='mountain'?'date':'foodDate'))}<input type="date" value="${escapeHtml(row.date||'')}" data-collection-date="${item.id}"/></label><label>${escapeHtml(text('notes'))}<textarea data-collection-note="${item.id}" placeholder="${escapeHtml(text('notesPlaceholder'))}">${escapeHtml(row.note||'')}</textarea></label><button type="button" class="button-soft" data-save-collection="${item.id}">${escapeHtml(text('save'))}</button></div><a class="source-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(text('source'))} ↗</a></article>`;
  }
  function renderCollection(type='shrines') {
    const setup={shrines:{title:'shrinePageTitle',desc:'shrinePageDesc',items:SHRINES,kind:'shrine',icon:'⛩',eyebrow:'01 · ICHINOMIYA'},food:{title:'foodPageTitle',desc:'foodPageDesc',items:FOODS,kind:'food',icon:'🍜',eyebrow:'02 · LOCAL TASTE'},mountains:{title:'mountainPageTitle',desc:'mountainPageDesc',items:MOUNTAINS,kind:'mountain',icon:'⛰',eyebrow:'03 · MOUNTAIN TRAILS'}}[type]||{title:'shrinePageTitle',desc:'shrinePageDesc',items:SHRINES,kind:'shrine',icon:'⛩',eyebrow:'01 · ICHINOMIYA'};
    const done=setup.items.filter((item)=>col(item.id).visited).length;
    setBreadcrumb([text(setup.title)]);
    app.innerHTML=`<div class="section-header"><div><div class="eyebrow">${setup.eyebrow}</div><h1 class="page-title">${escapeHtml(text(setup.title))}</h1><p class="page-subtitle">${escapeHtml(text(setup.desc))}</p></div><span class="date-chip">${setup.icon} ${done} / ${setup.items.length}</span></div><section class="panel collection-explainer"><div><div class="eyebrow">${escapeHtml(text('achievement'))}</div><h2>${escapeHtml(type==='mountains'?text('mountainsSection'):type==='food'?text('foodIntro'):text('shrineIntro'))}</h2><p>${escapeHtml(text('localOnly'))}</p></div><div class="collection-progress"><div><span>${setup.icon}</span><b>${done} / ${setup.items.length}</b><small>${escapeHtml(text('progress'))}</small></div></div></section><section class="collection-map-panel"><div class="collection-section-head"><div><div class="eyebrow">${escapeHtml(text('mapTitle'))}</div><h2>${escapeHtml(text('map'))}</h2><p>${escapeHtml(text('collectionMapHint'))}</p></div></div>${collectionMap(setup.items,setup.kind)}${legend()}</section>${type==='food'?`<div class="collection-filter"><select id="foodPrefFilter" aria-label="${escapeHtml(text('prefecture'))}"><option value="all">${escapeHtml(text('all'))}</option>${inRegionOrder.map((id)=>`<option value="${id}">${escapeHtml(localeName(pref(id)))}</option>`).join('')}</select></div>`:''}<section class="collection-section"><div class="collection-section-head"><div><div class="eyebrow">${setup.eyebrow}</div><h2>${escapeHtml(text(setup.title))}</h2><p>${escapeHtml(text(setup.desc))}</p></div><span>${done} / ${setup.items.length}</span></div><div class="collection-grid ${type==='food'?'food-grid':''}">${setup.items.map((item,index)=>renderCollectionCard(item,setup.kind,index)).join('')}</div></section>`;
  }
  function renderNotFound() { setBreadcrumb([text('notFound')]);app.innerHTML=`<section class="panel not-found"><div class="eyebrow">404 · LOST IN JAPAN</div><h1 class="page-title">${escapeHtml(text('notFound'))}</h1><p>${escapeHtml(text('notFoundText'))}</p><a class="button-primary" href="/regions">${escapeHtml(text('map'))}</a></section>`; }

  function clearPrefectureEffect() {
    clearTimeout(prefectureEffectTimer);prefectureEffectTimer=null;
    document.querySelector('.prefecture-effect')?.remove();
  }
  function playPrefectureEffect(id) {
    if(id!=='chiba'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    clearPrefectureEffect();
    const layer=document.createElement('div');layer.className='prefecture-effect';layer.setAttribute('aria-hidden','true');
    for(let i=0;i<12;i++){
      const petal=document.createElement('span');petal.className='sakura-petal';
      petal.style.left=((i*37+Math.random()*18)%100)+'vw';
      petal.style.setProperty('--petal-delay',(Math.random()*.45)+'s');
      petal.style.setProperty('--petal-duration',(2.1+Math.random()*.65)+'s');
      petal.style.setProperty('--petal-drift',((Math.random()-.5)*150)+'px');
      petal.style.setProperty('--petal-size',(7+Math.random()*6)+'px');
      layer.append(petal);
    }
    document.body.append(layer);
    prefectureEffectTimer=setTimeout(clearPrefectureEffect,3300);
  }

  function route() {
    let routePath=location.pathname;
    if(BASE_PATH&&(routePath===BASE_PATH||routePath.startsWith(BASE_PATH+'/')))routePath=routePath.slice(BASE_PATH.length)||'/';
    const parts=decodeURIComponent(routePath).split('/').filter(Boolean);
    if(['collection','achievements','shrines','food','mountains'].includes(parts[0])){
      parts.splice(0,parts.length,'regions');history.replaceState({},'',BASE_PATH+'/regions');
    }
    const shouldPlayEffect=playPrefEffectNext&&parts[0]==='prefecture'&&parts[1]==='chiba';
    playPrefEffectNext=false;clearPrefectureEffect();
    if(!parts.length||parts.at(-1)==='index.html')renderRegions();
    else if(parts[0]==='regions')renderRegions();
    else if(parts[0]==='statistics')renderStatistics();
    else if(parts[0]==='prefecture'&&parts[1])renderPrefecture(parts[1]);
    else if(parts[0]==='municipality'&&parts[1])renderMunicipality(parts[1]);
    else renderNotFound();
    if(BASE_PATH)document.querySelectorAll('a[href^="/"]').forEach((link)=>{if(!link.dataset.basePathApplied){link.setAttribute('href',BASE_PATH+link.getAttribute('href'));link.dataset.basePathApplied='true'}});
    document.querySelectorAll('[data-route]').forEach((link)=>{
      const isPrefecture=link.dataset.prefNav&&parts[0]==='prefecture'&&parts[1]===link.dataset.prefNav;
      const isRegion=link.dataset.route==='regions'&&(!parts.length||parts[0]==='regions'||parts.at(-1)==='index.html');
      link.classList.toggle('active',Boolean(isPrefecture||isRegion||(!link.dataset.prefNav&&link.dataset.route===parts[0])));
    });
    document.querySelectorAll('[data-pref-nav]').forEach((link)=>{const label=link.querySelector('[data-nav-name]');if(label)label.textContent=localeName(pref(link.dataset.prefNav));});
    document.documentElement.lang=locale==='zh-TW'?'zh-Hant':locale;
    document.title=text('siteTitle');
    document.querySelector('#languageSelect')?.setAttribute('aria-label',text('language'));
    document.querySelectorAll('[data-i18n]').forEach((node)=>{node.textContent=text(node.dataset.i18n)});
    document.querySelectorAll('[data-i18n-aria]').forEach((node)=>node.setAttribute('aria-label',text(node.dataset.i18nAria)));
    document.querySelector('#exportButton')?.setAttribute('title',text('exportTooltip'));
    const selector=document.querySelector('#languageSelect');if(selector)selector.value=locale;
    if(shouldPlayEffect)playPrefectureEffect(parts[1]);
  }

  let activePan=null;
  document.addEventListener('pointerdown',(event)=>{
    if(event.button!==0||event.target.closest('.map-zoom-controls'))return;
    const frame=event.target.closest('.map-frame');if(!frame)return;
    const state=frame._zoomState||(frame._zoomState={scale:1,x:0,y:0});
    activePan={frame,pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,originX:state.x,originY:state.y,moved:false};
  });
  document.addEventListener('pointermove',(event)=>{
    if(!activePan||event.pointerId!==activePan.pointerId)return;
    const dx=event.clientX-activePan.startX,dy=event.clientY-activePan.startY;
    if(!activePan.moved&&Math.hypot(dx,dy)<5)return;
    activePan.moved=true;event.preventDefault();activePan.frame.classList.add('is-panning');
    const svg=activePan.frame.querySelector('.map-svg'),layer=svg?.querySelector('.map-zoom-layer');if(!svg||!layer)return;
    const rect=svg.getBoundingClientRect(),state=activePan.frame._zoomState;
    state.x=activePan.originX+dx*1000/rect.width;state.y=activePan.originY+dy*680/rect.height;
    layer.setAttribute('transform',`translate(${state.x} ${state.y}) scale(${state.scale})`);
  },{passive:false});
  const endPan=(event)=>{
    if(!activePan||event.pointerId!==activePan.pointerId)return;
    const {frame,moved}=activePan;activePan=null;frame.classList.remove('is-panning');
    if(moved){frame._suppressMapClick=true;setTimeout(()=>{frame._suppressMapClick=false},0);}
  };
  document.addEventListener('pointerup',endPan);document.addEventListener('pointercancel',endPan);
  document.addEventListener('click',(event)=>{const frame=event.target.closest('.map-frame');if(frame?._suppressMapClick){event.preventDefault();event.stopImmediatePropagation();}},true);
  document.addEventListener('click',(event)=>{
    const collectionPin=event.target.closest('[data-collection-target]');if(collectionPin){event.preventDefault();document.getElementById(`collection-${collectionPin.dataset.collectionTarget}`)?.scrollIntoView({behavior:'smooth',block:'center'});return;}
    const link=event.target.closest('a[href^="/"]');if(link&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey&&event.button===0){event.preventDefault();const href=link.getAttribute('href');const current=location.pathname.startsWith(BASE_PATH+'/')?location.pathname.slice(BASE_PATH.length):location.pathname;const target=BASE_PATH&&href.startsWith(BASE_PATH+'/')?href.slice(BASE_PATH.length):href;playPrefEffectNext=target==='/prefecture/chiba'&&(Boolean(link.closest('.map-frame.kanto'))||(link.dataset.prefNav==='chiba'&&(current==='/'||current==='/regions'||current.endsWith('/index.html'))));if(link.closest('.sidebar'))document.querySelector('#sidebar').classList.remove('open');history.pushState({},'',href);route();window.scrollTo({top:0,behavior:'instant'});return;}
    const zoomButton=event.target.closest('[data-map-zoom]');if(zoomButton){const frame=zoomButton.closest('.map-frame');if(frame){const factor=zoomButton.dataset.mapZoom==='reset'?'reset':Number(zoomButton.dataset.mapZoom)>0?1.25:1/1.25;zoomMap(frame,factor)}return;}
    const prefShape=event.target.closest('[data-pref]');if(prefShape){history.pushState({},'',`/prefecture/${prefShape.dataset.pref}`);route();window.scrollTo({top:0,behavior:'instant'});return;}
    const muniShape=event.target.closest('[data-code]');if(muniShape){history.pushState({},'',`/municipality/${muniShape.dataset.code}`);route();window.scrollTo({top:0,behavior:'instant'});return;}
    const levelButton=event.target.closest('[data-set-level]');if(levelButton){document.querySelectorAll('[data-set-level]').forEach((b)=>{const on=b===levelButton;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))});return;}
    const colButton=event.target.closest('[data-collect]');if(colButton){const id=colButton.dataset.collect;const current=col(id);saved.collections[id]={...current,visited:!current.visited};store();route();return;}
    const saveCollect=event.target.closest('[data-save-collection]');if(saveCollect){const id=saveCollect.dataset.saveCollection;saved.collections[id]={...col(id),date:document.querySelector(`[data-collection-date="${id}"]`).value,note:document.querySelector(`[data-collection-note="${id}"]`).value.trim()};store();route();toast(text('saved'));}
    if(!event.target.closest('#sidebar')&&!event.target.closest('#menuButton'))document.querySelector('#sidebar')?.classList.remove('open');
  });
  document.addEventListener('change',(event)=>{if(event.target.id==='languageSelect'){locale=event.target.value;localStorage.setItem('tabi-shirushi-locale',locale);route();}if(event.target.id==='foodPrefFilter'){const id=event.target.value;document.querySelectorAll('.food-grid .collection-card').forEach((card)=>{card.hidden=id!=='all'&&!card.dataset.pref?.includes(id)});}});
  document.addEventListener('input',(event)=>{if(event.target.id==='foodPrefFilter')return;});
  document.addEventListener('keydown',(event)=>{if((event.key==='Enter'||event.key===' ')&&event.target.matches('.interactive-pref,.interactive-muni,.collection-pin')){event.preventDefault();event.target.click();}});
  document.addEventListener('pointermove',(event)=>{const path=event.target.closest('.interactive-pref,.interactive-muni');const tooltip=event.currentTarget.querySelector('.map-tooltip');if(!tooltip)return;if(!path){tooltip.hidden=true;return;}const wrap=path.closest('.map-frame'),rect=wrap.getBoundingClientRect();let label='',sub='';if(path.dataset.pref){const p=pref(path.dataset.pref),s=rollup(path.dataset.pref);label=localeName(p);sub=`${pct(s.rate)} · ${s.explored}/${s.total}`;}else{const m=byCode.get(path.dataset.code);if(wrap.classList.contains('kanto')&&m){const p=pref(m.prefecture),s=rollup(m.prefecture);label=localeName(p);sub=pct(s.rate)+' · '+s.explored+'/'+s.total;}else{const s=record(path.dataset.code);label=m?.name||'';sub=statusLabel(s.level);}}tooltip.innerHTML=`<b>${escapeHtml(label)}</b><span>${escapeHtml(sub)}</span>`;tooltip.hidden=false;tooltip.style.left=`${Math.max(10,Math.min(event.clientX-rect.left+10,rect.width-165))}px`;tooltip.style.top=`${Math.max(10,Math.min(event.clientY-rect.top+10,rect.height-56))}px`;});
  function zoomMap(frame, factor, clientX=null, clientY=null) {
    const svg=frame.querySelector('.map-svg'),layer=svg?.querySelector('.map-zoom-layer');if(!svg||!layer)return;
    const state=frame._zoomState||(frame._zoomState={scale:1,x:0,y:0});
    if(factor==='reset'){state.scale=1;state.x=0;state.y=0;layer.removeAttribute('transform');return;}
    const next=Math.max(1,Math.min(5,state.scale*factor));if(next===state.scale)return;
    let point={x:500,y:340};
    if(clientX!==null&&clientY!==null){const cursor=svg.createSVGPoint();cursor.x=clientX;cursor.y=clientY;const local=cursor.matrixTransform(svg.getScreenCTM().inverse());point={x:local.x,y:local.y};}
    const ratio=next/state.scale;state.x=point.x*(1-ratio)+state.x*ratio;state.y=point.y*(1-ratio)+state.y*ratio;state.scale=next;
    layer.setAttribute('transform',`translate(${state.x} ${state.y}) scale(${state.scale})`);
  }
  document.addEventListener('wheel',(event)=>{const frame=event.target.closest('.map-frame');if(!frame)return;event.preventDefault();zoomMap(frame,Math.exp(-event.deltaY*.0015),event.clientX,event.clientY);},{passive:false});
  document.querySelector('#menuButton').addEventListener('click',()=>document.querySelector('#sidebar').classList.toggle('open'));
  document.querySelector('#exportButton').addEventListener('click',()=>{const payload={app:'旅のしるし',schemaVersion:2,exportedAt:new Date().toISOString(),records:saved.records,collections:saved.collections,locale};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='my-japan-travel-records.json';a.click();URL.revokeObjectURL(url);toast(text('exported'));});
  window.addEventListener('popstate',route);
  route();
})();
