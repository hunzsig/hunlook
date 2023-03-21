## 疑難雜症

###### 這裏總結了一些UI製作過程中，遇到的各種奇怪問題的過程與解決辦法

### 在UI套件裏編寫嵌套套件，套件無效

* 狀況：在scripts裏面編寫二次UI，以main整合，但是一直不成功

> 問題所在：開發對代碼掌握能力稍有欠缺，導致UI嵌套發生問題

* 解決辦法

```
秉承一個套件做一件事的原則，在能力提升之前不編寫複雜嵌套UI
```

### 在其他作用域調用UI套件裏面的assets資源

* 狀況：在assets裏面放好了tga圖片，套件內main的kit名也對應了，但不知道如何在其他套件或其他代碼裏使用

> 問題所在：套件在內固然好用，但在外確不知道如何調用

* 解決辦法

```
-- 使用AUIKit即可隨意引用
local path = AUIKit("kit", "bg", "tga")
```

### FrameBackdrop的texture設置無效

* 狀況：在FrameBackdrop裏面使用assets裏面的tga圖片資源，但找不到

> 問題所在：kit在對象實例化時標識丟失，導致尋址失敗

* 解決辦法

```lua
-- 套件目錄名為：hunzsig_pic
-- 圖片路徑為 lik/assets/war3mapUI/assets/pic.tga
local kit = "hunzsig_pic" -- 此處kit應與目錄同名

stage.pic = FrameBackdrop( "chaosStrings->pic", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, stage.main, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.3, 0.3)
    :texture('pic') -- 丟失

stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI) -- 將kit加入索引段，並用->分割
    :relation(FRAME_ALIGN_CENTER, stage.main, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.3, 0.3)
    :texture('pic')
```

### UI自適應初始化失效

* 狀況：窗口進入遊戲，最大化窗口後
* F10重啓遊戲狀態下進入遊戲，UI自適應沒有效果
* 當修改窗口後，又重新有效

> 問題所在：adaptive調用過於置後，以至於初始化size已跳過自動流程

* 解決辦法

```lua
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, stage.main, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.5, 0.4)
    :adaptive(true)
    :texture('pic')
    :show(true)
-- 將adaptive置頂，修改後
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    :adaptive(true)
    :relation(FRAME_ALIGN_CENTER, stage.main, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.5, 0.4)
    :texture('pic')
    :show(true)
```


