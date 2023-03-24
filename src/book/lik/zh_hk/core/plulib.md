## 插件庫

#### 有時候我們並不像直接修改功能庫 library

#### 又有時候項目處於開發途中或其他原因，也不想公開項目子庫 sublibrary

#### 這時 war3mapPlugins 插件庫的作用就出來了。插件獨立於項目之外，在分享代碼的時候會更加方便

#### 下面將以實例插件 Printer 説明

> 這裏先觀察一下 Printer 的目錄結構

![Plugins1](https://gitlab.com/h-document/lik/-/raw/main/assets/plugins1.png)

#### 一個插件包含兩部分 encrypt 和 plulibrary，這兩個目錄是固定的

* encrypt 用於定義插件自定義內容的混淆規則，file由plulibrary後開始
* plulibrary 就是庫代碼放置的地方，你可以隨意編寫，但當你與主library結構一致時，可獲得更多底層協助，如混淆等

#### plulibrary如果是對原來已有邏輯的補充，那麼規則會**沿用已有的而不需要額外編寫**

#### 而plulibrary下的oop嚴重根據當前結構來定義的話，在打包時則會自動進行代碼混淆

> 這裏看一個值得參考的目錄結構

![Plugins2](https://gitlab.com/h-document/lik/-/raw/main/assets/plugins2.png)

#### 插件所有的東西編寫完成後，並不會自動生效

#### 與UIKit類似，你需要啓用哪一個插件，需要自己在assets中引用

```lua
_assets_plugins("Printer")
```
