## Adaptive

#### UI objects can use adaption to automatically adapt and distinguish different screens

```lua
--- Adaptation is not turned on
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```

```lua
--- Adaptation turned on
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
    :adaptive(true)
```
