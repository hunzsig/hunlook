## バブルセッション

#### ターゲットセッションを近くで開始するための使用方法

#### は使用せずに、自分で実現するように変更することができます

#### このUIは、次のような方法でアクティブにインスタンス化する必要はありません

```lua
--- ゲーム構成では、enableScreen の FrameBalloonClassカテゴリを有効にする必要があります
Game():enableScreen(FrameBalloonClass, true)

--- 弾層サウンド、音量、切り替えサウンド、音量など、会話のショートカットを設定することもできます
Game():balloonKeyboard('F')
Game():balloonVoicePop(nil, 70)
Game():balloonVoiceFlip("chatClick", 15)

--- トリガメッセージとしての単位TPL構成では、lighterとして構成する必要がある
UnitTpl(''):balloonLighter(true)

--- メッセージを解放する必要がある単位TPL構成では、balloon資料を配置する必要がある
--- messageデータは会話多段データであり、中に複数組あれば会話を切り替えることができる
--- tips は string[] を返さなければなりません
UnitTpl('')
    :name("ブートNPC")
    :balloon({
        z = 240, -- z軸オフセット
        interval = 0,  -- 出力周波数、カラーワードはサポートされていません
        message = {
            { 
                tips = { 
                    "私は案内人です", 
                    "何も教えてあげない", 
                    "この気泡「会話」をクリックして会話を閉じなさい",
                }
            },
            {
                tips = function()
                    return {
                        "わかったか?",
                        Game():balloonKeyboardTips("はっきりわかる")
                    }
                end,
                call = function()
                    --- 何かする
                end
            },
        },
    })
```

#### Unitのほか、Item、Effect、Coordinateもサポート

```lua
(ItemTpl):balloon ...
(Effect):balloon ...
(Coordinate):balloon ...
```