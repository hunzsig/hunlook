## ドラッグ

#### ドラッグオブジェクトを親要素として使用して、簡単にドッキングドラッグ操作を行うことができます

> デバッグの段階では、ドラッグしたオブジェクトが識別しやすいようにピンクの下地をかぶせて、正常な現象になります

```lua
local drag = FrameDrag(kitWh .. "->drag", FrameGameUI)
    :adaptive(true)
    :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
    :size(0.1, 0.1)
    :padding(0, 0, 0.13, 0)
    :show(false)
        
FrameBackdrop(kit .. "->main", drag)
    :relation(FRAME_ALIGN_TOP, drag, FRAME_ALIGN_TOP, 0, 0)
    :size(0.1, 0.1)
    :texture("bg")
```
