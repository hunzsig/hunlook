## Map

```lua
FrameMap(kit, FrameGameUI)
    :adaptive(true)
    :relation(FRAME_ALIGN_LEFT_BOTTOM, FrameGameUI, FRAME_ALIGN_LEFT_BOTTOM, 0.0058, 0.0068)
    :size(0.1322, 0.1200)
    :cameraSize(0.01, 0.01)
    :alertOption(
        { texture = "item\\alert", alpha = 190, size = 0.036 },
        { texture = "item\\questionWhite", alpha = 130, size = 0.016 })
    :texture({
        { "map\\01" },
        { "map\\02" },
        { "map\\03" },
        { "map\\04" },
        { "map\\05" },
        { "map\\06" },
        { "map\\07" },
        { "map\\08" },
        { "map\\09" },
        { "map\\10" },
        { "map\\11" },
        { "map\\12" },
        { "map\\13" },
        { "map\\14" },
        { "map\\15" },
        { "map\\16" },
    })
```