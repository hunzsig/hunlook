## Bar

#### Simple numeric bar, commonly used to display interface HP MP, etc

```lua
FrameBar(kit .. "->bar", FrameGameUI)
    :relation(FRAME_ALIGN_TOP, FrameGameUI, FRAME_ALIGN_TOP, 0, 0)
    :texture("value", "bar\\green")
    :fontSize(LAYOUT_ALIGN_CENTER, 10)
    :fontSize(LAYOUT_ALIGN_RIGHT, 10)
    :value(0, 0.062, 0.014)
```
