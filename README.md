# 旅のしるし｜我的日本探索地圖

可部署的靜態旅行探索地圖。第一階段涵蓋關東七都縣與 316 個市區町村，使用原生 HTML、CSS、JavaScript 與 SVG 行政界線；不需登入、建置工具或付費 API。

## 本機執行

需要 Node.js 18 或更新版本。在專案資料夾執行 `node server.mjs`，再開啟 `http://127.0.0.1:4173`。沒有外部套件需要安裝。

## 部署

把整個資料夾匯入 Vercel 或 Netlify 即可。已附 SPA 路由設定；靜態主機需支援所有路徑回退至 `index.html`。沒有建置指令。

### GitHub Pages

1. 在 GitHub 建立一個公開 repository，將解壓縮後的專案所有檔案上傳到 repository 根目錄（包括 `404.html`）。
2. 開啟 repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**，branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
4. 等待 Pages 發布完成後，Settings → Pages 會顯示網站網址。之後推送到 `main` 的更新會自動發布。

網站會自動辨認 `username.github.io/repository/` 專案網址，並處理縣市頁重新整理時的路由回復。GitHub Free 的 Pages 適用於公開 repository；發布的網站任何人都能瀏覽。旅行紀錄仍只留在使用者的瀏覽器，不會上傳至 GitHub。

## 功能

- 首頁直接是關東七都縣互動地圖，並以淡色日本海岸輪廓作為背景；側欄可直接開啟各縣。
- 總覽地圖按各市區町村自己的紀錄上色；滑過去會凸起、變色，提示顯示都縣名稱。點選後展開該縣的市區町村地圖。
- 316 個行政區 SVG 多邊形，含東京都島嶼插圖；滑鼠滾輪縮放，按住左鍵拖曳平移。
- 五種狀態：旅宿過、遊玩過、乘換、通過、沒去過。顏色區分狀態，不顯示等級數字；舊紀錄會自動轉成新狀態，原本「居住」會併入「旅宿過」。
- 市區町村紀錄可填第一次到訪日期、地點、評分與筆記；狀態即時保存，送出表單後直接回到所屬縣地圖。
- 縣頁地圖內整合一宮神社、美食與名峰圖示；點圖示可定位下方收藏卡片，並可開啟地圖與交通資訊。
- 千葉縣從關東地圖進入時有一次短暫櫻花花瓣效果；儲存紀錄返回縣頁不會播放。
- 統計頁獨立呈現探索率、五種狀態圓餅圖及各都縣進度。
- 繁體中文、英文、日文；Local Storage 自動保存，支援 JSON 備份匯出。
- 手機、平板與桌面響應式版面。

## 行政區與地圖資料

自治體名錄位於 `municipalities.json`／`municipalities.js`。SVG 路徑位於 `boundaries.json`／`boundaries.js`，可透過 `node build-boundaries.mjs` 重新產生（需網路連線）。邊界資料取自 [kyodo-official/japan-choropleth](https://github.com/kyodo-official/japan-choropleth)，該專案標明使用日本國土交通省國土數值情報 2025 年行政區界資料，採 CC BY 4.0；地圖幾何已簡化並需保留來源標示。原始來源：[國土交通省國土數值情報行政區域資料](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v3_1.html)。自治體名錄來源：[code4fukui/localgovjp](https://github.com/code4fukui/localgovjp)（CC0）。

一宮按歷史令制國劃分，與現代都縣不完全對應；因此收藏頁以歷史國名說明。地方料理清單連結各項參考來源。

## 瀏覽器資料

旅行紀錄與收藏預設只存在目前瀏覽器的 Local Storage。可在頁首匯出 JSON 備份；清除瀏覽器資料或改用另一台裝置前，請先匯出備份。
