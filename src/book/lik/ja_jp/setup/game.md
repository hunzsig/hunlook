### ゲーム構成

```lua
-- オプションの構成イネーブラステータスバー
Game():enableScreen(FrameBarStateClass, true)

-- オプションの構成で気泡を有効にする
Game():enableScreen(FrameBalloonClass, true)

-- オプションの構成でトーストを有効にする
Game():enableScreen(FrameToastClass, true)

-- オプションでバブルの実行ショートカットを設定
Game():balloonKeyboard('F')

-- オプションでバブルのトリガー音を設定
Game():balloonVoicePop(nil, 70)

-- オプションでバブルのスイッチングサウンドを設定
Game():balloonVoiceFlip("chatClick", 15)
```
