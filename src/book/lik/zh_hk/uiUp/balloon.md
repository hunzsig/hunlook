## 氣泡對話

#### 一種靠近即可啓動目標對話的使用實現

#### 可不使用，改為自行實現

#### 此UI並不需要主動實例化，使用方法如下

```lua
--- 在遊戲配置中，必須啓用 enableScreen 的 FrameBalloonClass 類別
Game():enableScreen(FrameBalloonClass, true)

--- 還可以配置對話的快捷鍵，彈層音效、音量和切換音效、音量
Game():balloonKeyboard('F')
Game():balloonVoicePop(nil, 70)
Game():balloonVoiceFlip("chatClick", 15)

--- 作為觸發消息的單位TPL配置中，需要為其配置為lighter
UnitTpl(''):balloonLighter(true)

--- 需要發佈消息的單位TPL配置中，需要為其配置balloon數據
--- message 數據為對話多段數據，裏面有多組就可以切換對話
--- tips 必須返回 string[]
UnitTpl('')
    :name("引導NPC")
    :balloon({
        z = 240, -- z軸偏移
        interval = 0,  -- 輸出頻率，不支持彩字
        message = {
            { 
                tips = { 
                    "我是引導人", 
                    "我什麼都不教你", 
                    "你趕緊點擊這個氣泡“對話”，關閉對話",
                }
            },
            {
                tips = function()
                    return {
                        "好啦，你清楚明白了嗎？",
                        Game():balloonKeyboardTips("清楚明白")
                    }
                end,
                call = function()
                    --- 做點什麼
                end
            },
        },
    })
```

#### 除了Unit外，Item、Effect、Coordinate 也支持

```lua
(ItemTpl):balloon ...
(Effect):balloon ...
(Coordinate):balloon ...
```