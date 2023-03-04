## 拖拽

#### 可以使用拖拽物件作為父元素，輕鬆對接拖拽操作

> 在debug階段，拖拽物件為了方便識別會蒙上一層粉色底色，為正常現象

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
