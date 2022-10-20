## 命令列

### 新建專案

```
> sl.exe new demo //新建一個地圖專案，名為demo
```

### 使用WE編輯地形

> 編輯完後在使用test時會自動將改動記錄回你的專案中

```
> sl.exe we demo //以WE開啟專案demo，主要用於編輯地形
```

### 模型批次檢視

命令後續共有3個引數

* 1 類別：分為 -a(檢視assets) -n(檢視assetsNew) -p(檢視某個專案assets的model宣告虛幻程式碼)
* 2 頁數：數目字，從第1頁開始
* 3 過濾：搜尋

> 模型預設scale1.00，方便對比

```
> sl.exe model -a //檢視根assets目錄下的模型，第1頁
> sl.exe model -a 2 buff //檢視根assets目錄下的模型，第2頁，同時隻檢視路徑帶有buff的模型
> sl.exe model -n //檢視根assetsNew目錄下的模型，第1頁
> sl.exe model -n 3//檢視根assetsNew目錄下的模型，第3頁
> sl.exe model -p:demo 1  //檢視demo專案的model宣告虛幻模型，第1頁
> sl.exe model -p:demo 2 unit //檢視demo專案的model宣告虛幻模型，第2頁，同時隻檢視路徑帶有unit的模型
```

### 執行測試

命令後續共有3個引數

* 1 專案：具體專案名稱，如demo
* 2 模式：(預設 -h)
  * -t(test 臨時) 隻建立臨時目錄並打包ini地圖等資源，不會構建測試地圖和開啟測試
  * -h(hot 熱更新) 開視窗除錯。可F10重啟獲得指令碼更新，也可以修改檔案實時更新指令碼
  * -b(build 構建打包) 開視窗除錯。無熱更，加密，冇有slk最佳化。
  * -d(distributable 構建打包) 開視窗除錯。無熱更，加密並亂構、自動slk最佳化。
  * -r(release 上線發行+slk最佳化) 冇有除錯視窗。無熱更，加密並亂構、自動slk最佳化。

> 一般實際執行的測試圖都是放在 Warcraft III Frozen Throne\Maps\Test\WorldEditTestMap.w3x
>
> 具體位置可參考WE裡麵的配置

```
> sl.exe run demo -t //生成臨時檔案檢視
> sl.exe run demo -h //熱更新模式下並除錯demo
> sl.exe run demo -b //構建指令碼加密地圖並除錯demo
> sl.exe run demo -d //構建指令碼加密且slk最佳化的地圖並除錯demo
> sl.exe run demo -r //構建上線地圖並測試
```

> 在模式後新增~符號，可以跳過資源變更，特別適用於純程式碼改動時的測試
```
> sl.exe run demo -h~
> sl.exe run demo -b~
> sl.exe run demo -d~
> sl.exe run demo -r~
```

### 同時開啟N個魔獸客戶端（支援JAPI）

> 預設開啟2個，最多一次性開啟9個(並不建議，單人4個足矣)

```
> sl.exe multi 4 //開啟4個
```

### 關閉所有War3客戶端

> 此命令需要管理員許可權，請留意

```
> sl.exe kill
```

### 清理快取

```
> sl.exe clear demo //清理構建的臨時檔案
```

### 刪除所有本地DZ伺服器資料

```
> sl.exe clean
```

### 檢視當前工具版本

```
> sl.exe version
```
