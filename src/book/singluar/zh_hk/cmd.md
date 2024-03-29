## 命令行

### 新建項目

```
> sl.exe new demo //新建一個地圖項目，名為demo
```

### 使用WE編輯地形

> 編輯完後在使用test時會自動將改動記錄回你的項目中

```
> sl.exe we demo //以WE打開項目demo，主要用於編輯地形
```

### 模型批量查看

### 模型批量查看

命令後續共有2個參數

* 1 類別：分為 -a(查看assets) -n(查看assetsNew) -p(查看某個項目assets的model聲明虛幻代碼)
* 2 過濾：搜索

> 模型默認scale1.00，方便對比
>
> 路徑帶有item_的模型將scale2.00，便於查看（因為物品模型通常偏小）
>
> 路徑帶有eff_的模型將scale0.75，便於查看（因為特效模型通常凌亂）

```
> sl.exe model -a //查看根assets目錄下的模型
> sl.exe model -a buff //查看根assets目錄下的模型，同時只查看路徑帶有buff的模型
> sl.exe model -a buff,eff //查看根assets目錄下的模型，同時只查看路徑帶有buff或eff的模型
> sl.exe model -n //查看根assetsNew目錄下的模型
> sl.exe model -p:demo  //查看demo項目的model聲明虛幻模型
```

### 運行測試

命令後續共有2個參數

* 1 項目：具體項目名稱，如demo
* 2 模式：(默認 -h)
    * -t(test 臨時) 隻建立臨時目錄並打包ini地圖等資源，不會構建測試地圖和開啓測試
    * -h(hot 熱更新) 開窗口調試。可F10重啓獲得腳本更新，也可以修改文件實時更新腳本
    * -b(build 構建打包) 開窗口調試。無熱更，加密，冇有slk優化。
    * -d(distributable 構建打包) 開窗口調試。無熱更，加密並亂構、自動slk優化。
    * -r(release 上線發行+slk優化) 冇有調試窗口。無熱更，加密並亂構、自動slk優化。

> 一般實際運行的測試圖都是放在 Warcraft III Frozen Throne\Maps\Test\WorldEditTestMap.w3x
>
> 具體位置可參考WE裏麵的配置

```
> sl.exe run demo -t //生成臨時文件查看
> sl.exe run demo -h //熱更新模式下並調試demo
> sl.exe run demo -b //構建腳本加密地圖並調試demo
> sl.exe run demo -d //構建腳本加密且slk優化的地圖並調試demo
> sl.exe run demo -r //構建上線地圖並測試
```

> 在模式後添加~符號，可以跳過資源變更，特別適用於純代碼改動時的測試

```
> sl.exe run demo -h~
> sl.exe run demo -b~
> sl.exe run demo -d~
> sl.exe run demo -r~
```

### 同時開啓N個魔獸客戶端（支持JAPI）

> 默認打開2個，最多一次性打開9個(並不建議，單人4個足矣)

```
> sl.exe multi 4 //打開4個
```

### 關閉所有War3客戶端

> 此命令需要管理員權限，請留意

```
> sl.exe kill
```

### 清理緩存並刪除本地服務器數據

```
> sl.exe clear
```

### 查看當前工具版本

```
> sl.exe version
```
