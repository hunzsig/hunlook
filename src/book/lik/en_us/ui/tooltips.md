## Tooltips

#### Tooltips, often used for directional instructions

### Use FrameTooltips

> FrameTooltips are 4 by default, and the serial number corresponds to 0-3
>
> The 0 serial number is occupied by the bottom layer, which is generally not used. Please note
>
> The remaining 1-3 numbers can be used at will. Normally, the number 1 is automatically obtained without specifying the number

```lua
FrameTooltips()
    :textAlign(TEXT_ALIGN_LEFT)
    :fontSize(10)
    :relation(FRAME_ALIGN_BOTTOM, btn, FRAME_ALIGN_TOP, 0, 0.002)
    :content({
        icons1 = {},
        bars = {},
        tips = {
            "123",
            "456",
        },
    })
    :show(true)
```

### Specify sequence number 2 FrameTooltips

```lua
FrameTooltips(2)
    :textAlign(TEXT_ALIGN_LEFT)
    :fontSize(10)
    :relation(FRAME_ALIGN_BOTTOM, btn, FRAME_ALIGN_TOP, 0, 0.002)
    :content(content)
    :show(true)
```

### Hide FrameTooltips

```lua
FrameTooltips():show(false, 0)
```

### Make FrameTooltips call UIKit asset

> If the content content needs to call the assets resource conveniently, you can temporarily bind the kit of the UI for it

```lua
FrameTooltips():kit(kit)
```
