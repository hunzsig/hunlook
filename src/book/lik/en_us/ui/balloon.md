## Bubble dialogue

#### The use and realization of a target dialogue that can be started when approaching

#### It can be realized by itself instead of using

#### This UI does not need to be actively instantiated. The use method is as follows

```lua
--- -In the game configuration, the FrameBalloonClass category of enableScreen must be enabled
Game():enableScreen(FrameBalloonClass, true)

--- You can also configure the shortcut keys of the dialog, play the layer sound effect and volume, and switch the sound effect and volume
Game():balloonKeyboard('F')
Game():balloonVoicePop(nil, 70)
Game():balloonVoiceFlip("chatClick", 15)

--- In the unit TPL configuration, balloon data needs to be configured
--- The message data is the conversation multi-segment data, and the conversation can be switched if there are multiple groups in it
--- Tips must return string[]
UnitTpl('')
    :name("Boot NPC")
    :balloon({
        z = 240, -- z-axis offset
        interval = 0,  -- output frequency, color words are not supported
        message = {
            { 
                tips = { 
                    "I am the guide", 
                    "I don't teach you anything", 
                    "Please click the bubble 'dialogue' to close the dialogue",
                }
            },
            {
                tips = function()
                    return {
                        "Well, do you understand clearly?",
                        Game():balloonKeyboardTips("clearly understood")
                    }
                end,
                call = function()
                    --- Do something
                end
            },
        },
    })
```

#### In addition to Unit, Item, Effect and Coordinate also support

```lua
(ItemTpl):balloon ...
(Effect):balloon ...
(Coordinate):balloon ...
```
