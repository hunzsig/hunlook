## 自適應

#### UI物件可以使用自適應來自動適配分辨不同的螢幕

```lua
--- 未開啟自適應
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```

```lua
--- 已開啟自適應
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
    :adaptive(true)
```
