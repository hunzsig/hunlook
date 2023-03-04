### 游戏构成

```lua
-- 可选配置启用状态条
Game():enableScreen(FrameBarStateClass, true)

-- 可选配置启用气泡
Game():enableScreen(FrameBalloonClass, true)

-- 可选配置启用吐司
Game():enableScreen(FrameToastClass, true)

-- 可选配置气泡的执行快捷键
Game():balloonKeyboard('F')

-- 可选配置气泡的触发音效
Game():balloonVoicePop(nil, 70)

-- 可选配置气泡的切换音效
Game():balloonVoiceFlip("chatClick", 15)
```
