## 图文

#### 图在左侧，左对齐图文

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :autoSize(true) -- 可选自动规划
    :side(LAYOUT_ALIGN_LEFT)
    :textAlign(LAYOUT_ALIGN_LEFT)
    :fontSize(infoFontSize)
    :text("Label")
```

#### 图在右侧，右对齐图文

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.16, 0.08) -- 自定义尺寸
    :side(LAYOUT_ALIGN_RIGHT)
    :textAlign(LAYOUT_ALIGN_RIGHT)
    :fontSize(infoFontSize)
    :text("Label")
```
