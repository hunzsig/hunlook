## 背景図

```lua
FrameBackdrop(kit .. "->main", FrameGameUI)
    :adaptive(true)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```

```lua
FrameBackdropTile(kit .. "->tile", FrameGameUI)
    :adaptive(true)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```
