## Gradient

#### Frame objects and their sub-objects can use gradients

#### The static UI is slightly monotonous. In addition to frame animation, you can also use gradients to achieve some simple temporary effects

> The gradient effect does not change the Prop data of the frame, but only changes the temporary visual appearance
>
> So if you need to operate callFrame, you need to set it in the callback

### Add a gradient display for a FrameBackdrop, moving from the offset of -0.004 X axis distance to 0

```lua
local fr = FrameBackdrop(kit .. "->bg", FrameGameUI)
fr:show(false)
fr:gradient({ duration = 0.1, x = -0.004, alpha = 1 }, function(callFrame)
    callFrame:show(true)
end)
```

### Enable gradient effect at the end of FrameAnimate

```lua
FrameAnimate(kit .. "->ani", FrameGameUI)
    :adaptive(true)
    :motion(motion)
    :duration(1)
    :onStop(function(evt) 
        evt:gradient({ duration = 0.1, alpha = -1 }, function(callFrame) callFrame:show(false) end) 
    end)
```
