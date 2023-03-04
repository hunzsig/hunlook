## 圖文

#### 圖在左側，左對齊圖文

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :autoSize(true) -- 可選自動規劃
    :side(LAYOUT_ALIGN_LEFT)
    :textAlign(LAYOUT_ALIGN_LEFT)
    :fontSize(infoFontSize)
    :text("Label")
```

#### 圖在右側，右對齊圖文

```lua
FrameLabel(kit .. "->label", FrameGameUI)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.16, 0.08) -- 自定義尺寸
    :side(LAYOUT_ALIGN_RIGHT)
    :textAlign(LAYOUT_ALIGN_RIGHT)
    :fontSize(infoFontSize)
    :text("Label")
```
