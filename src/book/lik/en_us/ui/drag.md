## Drag

#### You can use the drag object as the parent element to easily dock the drag operation

> In the debug stage, dragging objects will be covered with a layer of pink background for easy identification, which is normal

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
