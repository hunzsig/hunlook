## アダプティブ

#### UIオブジェクトは、適応を使用して異なる画面を自動的に割り当てることができます

```lua
--- アダプティブがオンになっていない
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```

```lua
--- アダプティブがオン
FrameBackdrop(kit .. "->main", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
    :adaptive(true)
```
