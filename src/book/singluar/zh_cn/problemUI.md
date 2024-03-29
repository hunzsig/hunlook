## UI 疑难杂症

###### 这里总结了一些UI制作过程中，遇到的各种奇怪问题的过程与解决办法

### 在UI套件里编写嵌套套件，套件无效

* 状况：在scripts里面编写二次UI，以main整合，但是一直不成功

> 问题所在：开发对代码掌握能力稍有欠缺，导致UI嵌套发生问题

* 解决办法

```
秉承一个套件做一件事的原则，在能力提升之前不编写复杂嵌套UI
```

### 在其他作用域调用UI套件里面的assets资源

* 状况：在assets里面放好了tga图片，套件内main的kit名也对应了，但不知道如何在其他套件或其他代码里使用

> 问题所在：套件在内固然好用，但在外确不知道如何调用

* 解决办法

```
-- 使用AUIKit即可随意引用
local path = AUIKit("kit", "bg", "tga")
```

### FrameBackdrop的texture设置无效

* 状况：在FrameBackdrop里面使用assets里面的tga图片资源，但找不到

> 问题所在：kit在对象实例化时标识丢失，导致寻址失败

* 解决办法

```lua
-- 套件目录名为：hunzsig_pic
-- 图片路径为 singluar/assets/war3mapUI/assets/pic.tga
local kit = "hunzsig_pic" -- 此处kit应与目录同名

stage.pic = FrameBackdrop( "chaosStrings->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic') -- 丢失

stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI) -- 将kit加入索引段，并用->分割
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic')
```

### UI自适应初始化失效

* 状况：窗口进入游戏，最大化窗口后
* F10重启游戏状态下进入游戏，UI自适应没有效果
* 当修改窗口后，又重新有效

> 问题所在：adaptive调用过于置后，以至于初始化size已跳过自动流程

* 解决办法

```lua
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .adaptive(true)
    .texture('pic')
    .show(true)
-- 将adaptive置顶，修改后
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .adaptive(true)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .texture('pic')
    .show(true)
```


