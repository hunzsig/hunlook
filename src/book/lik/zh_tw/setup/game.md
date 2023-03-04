### 遊戲構成

```lua
-- 可選配置啟用狀態條
Game():enableScreen(FrameBarStateClass, true)

-- 可選配置啟用氣泡
Game():enableScreen(FrameBalloonClass, true)

-- 可選配置啟用土司
Game():enableScreen(FrameToastClass, true)

-- 可選配置氣泡的執行快捷鍵
Game():balloonKeyboard('F')

-- 可選配置氣泡的觸發音效
Game():balloonVoicePop(nil, 70)

-- 可選配置氣泡的切換音效
Game():balloonVoiceFlip("chatClick", 15)
```
