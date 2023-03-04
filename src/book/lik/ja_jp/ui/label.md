## 図文

#### 図は左側にあり、図文を左に揃えます

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :autoSize(true) -- オプションの自動計画
    :side(LAYOUT_ALIGN_LEFT)
    :textAlign(LAYOUT_ALIGN_LEFT)
    :fontSize(infoFontSize)
    :text("Label")
```

#### 図は右側にあり、図文を右に揃えます

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.16, 0.08) -- 自定义尺寸
    :side(LAYOUT_ALIGN_RIGHT)
    :textAlign(LAYOUT_ALIGN_RIGHT)
    :fontSize(infoFontSize)
    :text("Label")
```
