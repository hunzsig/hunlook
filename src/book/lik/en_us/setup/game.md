### Game composition

```lua
-- Optional hide initialization native UI
Game():hideInterface(true)

-- Optional configuration enable status bar
Game():enableScreen(FrameBarStateClass, true)

-- Optional Configuration Enable Bubbles
Game():enableScreen(FrameBalloonClass, true)

-- Optional configuration enables chieftain
Game():enableScreen(FrameToastClass, true)

-- Optional configuration of execution shortcut keys for bubbles
Game():balloonKeyboard('F')

-- Optional configuration of trigger sound effect of bubbles
Game():balloonVoicePop(nil, 70)

-- Optional configuration of bubble switching sound effect
Game():balloonVoiceFlip("chatClick", 15)
```
