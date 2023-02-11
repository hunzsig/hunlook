## UI 難病

###### ここでは、UI作成中に発生したさまざまな奇妙な問題のプロセスと解決方法をまとめています

### UIスイートに不正な巣ごもりスイートを作成

* 状況：scriptsでmain統合のための二次UIを作成したが、成功しなかった

> 問題点：プログラムコードの把握能力がやや不足しており、UI巣状に問題が発生している

* 解決策

> スイートで1つのことをするという原則を守り、能力が向上するまで複雑な巣状UIを作成しない

### FrameBackdropのtexture設定が無効です

* 状況：FrameBackdropでassets内のtgaピクチャリソースを使用していますが、見つかりません

> 問題点：kitはアイテムのインスタンス化時にIDが失われ、アドレス指定に失敗しました

* 解決策

```lua
-- スイートディレクトリ名：hunzsig_pic
-- ピクチャパスは singluar/assets/war3mapUI/assets/pic.tga
local kit = "hunzsig_pic" -- ここでkitはディレクトリと同じ名前でなければなりません

stage.pic = FrameBackdrop( "chaosStrings->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic') -- 失われる

stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI) -- kitをインデックスセグメントに追加し、->で分割
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic')
```

### UIアダプティブ初期化の無効化

* 状況：ウィンドウがゲームに入り、ウィンドウを最大化した後
* F10を再起動した状態でゲームに入り、UIアダプティブは効果がありません
* ウィンドウを変更すると、再有効になります

> 問題点：adaptiveコールがオーバーセットされた後、初期化sizeで自動プロセスがスキップされました

* 解決策

```lua
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .adaptive(true)
    .texture('pic')
    .show(true)
-- adaptiveをトップに置き、修正後
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .adaptive(true)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .texture('pic')
    .show(true)
```


