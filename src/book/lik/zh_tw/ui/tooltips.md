## Tooltips

#### 工具提示，常用於指向性說明

### 使用 FrameTooltips

> FrameTooltips預設4個，序號對應0-3
>
> 其中0序號為底層佔用，一般情況下不予使用，請注意
>
> 剩下1-3號可隨意使用，通常情況下無需指定序號則自動獲取序號1

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

### 指定序號2 FrameTooltips

```lua
FrameTooltips(2)
    :textAlign(TEXT_ALIGN_LEFT)
    :fontSize(10)
    :relation(FRAME_ALIGN_BOTTOM, btn, FRAME_ALIGN_TOP, 0, 0.002)
    :content(content)
    :show(true)
```

### 隱藏 FrameTooltips

```lua
FrameTooltips():show(false, 0)
```

### 使 FrameTooltips 呼叫UIKit asset

> 如content內容需要便捷呼叫assets資源，可以為其臨時繫結該UI的kit

```lua
FrameTooltips():kit(kit)
```
