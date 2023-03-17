## 气泡对话

#### 一种靠近即可启动目标对话的使用实现

#### 可不使用，改为自行实现

#### 此UI并不需要主动实例化，使用方法如下

```lua
--- 在游戏配置中，必须启用 enableScreen 的 FrameBalloonClass 类别
Game():enableScreen(FrameBalloonClass, true)

--- 还可以配置对话的快捷键，弹层音效、音量和切换音效、音量
Game():balloonKeyboard('F')
Game():balloonVoicePop(nil, 70)
Game():balloonVoiceFlip("chatClick", 15)

--- 作为触发消息的单位TPL配置中，需要为其配置为lighter
UnitTpl(''):balloonLighter(true)

--- 需要发布消息的单位TPL配置中，需要为其配置balloon数据
--- message 数据为对话多段数据，里面有多组就可以切换对话
--- tips 必须返回 string[]
UnitTpl('')
    :name("引导NPC")
    :balloon({
        z = 240, -- z轴偏移
        interval = 0,  -- 输出频率，不支持彩字
        message = {
            { 
                tips = { 
                    "我是引导人", 
                    "我什么都不教你", 
                    "你赶紧点击这个气泡“对话”，关闭对话",
                }
            },
            {
                tips = function()
                    return {
                        "好啦，你清楚明白了吗？",
                        Game():balloonKeyboardTips("清楚明白")
                    }
                end,
                call = function()
                    --- 做点什么
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