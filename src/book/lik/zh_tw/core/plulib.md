## 外掛庫

#### 有時候我們並不想直接修改功能庫 library

#### 又有時候專案處於開發途中或其他原因，也不想公開專案子庫 sublibrary

#### 這時 war3mapPlugins 外掛庫的作用就出來了。外掛獨立於專案之外，在分享程式碼的時候會更加方便

#### 下面將以例項外掛 Printer 說明

> 這裡先觀察一下 Printer 的目錄結構

![Plugins1](/assets/plugins1.png)

#### 一個外掛包含兩部分 encrypt 和 plulibrary，這兩個目錄是固定的

* encrypt 用於定義外掛自定義內容的混淆規則，file由plulibrary後開始
* plulibrary 就是庫程式碼放置的地方，你可以隨意編寫，但當你與主library結構一致時，可獲得更多底層協助，如混淆等

#### plulibrary如果是對原來已有邏輯的補充，那麼規則會**沿用已有的而不需要額外編寫**

#### 而plulibrary下的oop嚴重根據當前結構來定義的話，在打包時則會自動進行程式碼混淆

> 這裡看一個值得參考的目錄結構

![Plugins2](/assets/plugins2.png)

#### 外掛所有的東西編寫完成後，並不會自動生效

#### 與UIKit類似，你需要啟用哪一個外掛，需要自己在assets中引用

```lua
_assets_plugins("Printer")
```
