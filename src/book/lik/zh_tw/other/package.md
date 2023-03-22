## 打包修正

#### 雖然自動混淆已進行了相當多精細的調整和處理

#### 但仍然會存在少數使得-b及之後打包後報錯的情況

#### 如註釋符資訊、字串呼叫物件方法等，下面舉一個例子，萬一遇到也可以輕鬆解決

```lua
local process = Process("test")
process:onStart(function(this)
    print("--這是個毀天滅地的列印")
end)
```

#### 這裡 -h 測試結果是可以執行的

![PackageH](https://gitlab.com/h-document/lik/-/raw/main/assets/packageH.png)

#### 但使用 -b 時卻報錯了

![PackageB](https://gitlab.com/h-document/lik/-/raw/main/assets/packageB.png)

#### 很多人這時候就已經不知所措了，這時不能慌，我們知道打包的臨時檔案其實都在 temp 目錄裡

#### 根據提示知道是 script\process\test.lua，進入 map 目錄查詢問題

> 這個 _build 就是 -b 指令對應的臨時目錄了

![PackageBuild](https://gitlab.com/h-document/lik/-/raw/main/assets/packageBuild.png)

#### 開啟程式碼檔案可以看到裡面報錯了

![PackageError](https://gitlab.com/h-document/lik/-/raw/main/assets/packageError.png)

#### 這樣當然難以檢視，我們將其結果程式碼格式化

![PackageFormat](https://gitlab.com/h-document/lik/-/raw/main/assets/packageFormat.png)

#### 可以看到 print("--這是個毀天滅地的列印") 後面的 “這是個毀天滅地的列印")” 都不見了

#### 說明在消除註釋的時候被刪除了

#### 我們就不要這樣寫了，因為會被最佳化，換成>>

```lua
local process = Process("test")
process:onStart(function(this)
    print(">>這是個毀天滅地的列印")
end)
```

#### -b 測試發現不再報錯，問題解決

#### 除了最後這種被動修正，平時我們測試的時候可以留意終端提示的問題

#### 例如資源不存在的警告，資源沒有被使用的警告

![PackageAssetsError](https://gitlab.com/h-document/lik/-/raw/main/assets/packageAssetsError.png)

![PackageAssetsWarn](https://gitlab.com/h-document/lik/-/raw/main/assets/packageAssetsWarn.png)
