## 氣泡對話

#### 一種靠近即可啟動目標對話的使用實現

#### 可不使用，改為自行實現

#### 此UI並不需要主動例項化，使用方法如下

```lua
--- 在遊戲配置中，必須啟用 enableScreen 的 FrameBalloonClass 類別
Game():enableScreen(FrameBalloonClass, true)

--- 還可以配置對話的快捷鍵，彈層音效、音量和切換音效、音量
Game():balloonKeyboard('F')
Game():balloonVoicePop(nil, 70)
Game():balloonVoiceFlip("chatClick", 15)

--- 在單位TPL配置中，需要為其配置balloon資料
--- message 資料為對話多段資料，裡面有多組就可以切換對話
--- tips 必須返回 string[]
UnitTpl('')
    :name("引導NPC")
    :balloon({
        z = 240, -- z軸偏移
        interval = 0,  -- 輸出頻率，不支援彩字
        message = {
            { 
                tips = { 
                    "我是引導人", 
                    "我什麼都不教你", 
                    "你趕緊點選這個氣泡“對話”，關閉對話",
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
