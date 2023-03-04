## Label(Picture and text)

#### The picture is on the left, and the picture and text are aligned on the left

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :autoSize(true) -- optional automatic planning
    :side(LAYOUT_ALIGN_LEFT)
    :textAlign(LAYOUT_ALIGN_LEFT)
    :fontSize(infoFontSize)
    :text("Label")
```

#### The picture is on the right, and the picture and text are aligned on the right

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.16, 0.08) -- custom size
    :side(LAYOUT_ALIGN_RIGHT)
    :textAlign(LAYOUT_ALIGN_RIGHT)
    :fontSize(infoFontSize)
    :text("Label")
```
