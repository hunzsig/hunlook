## 渐变

#### Frame对象及其子对象都可以使用渐变

#### 静态的UI略显单调，除了帧动画，你还可以使用渐变来实现一些简单的临时效果

> 渐变效果不会改变Frame的Prop数据，只改变临时视觉观感
>
> 所以如果有需要操作callFrame，需要在回调对其进行设置

### 为一个FrameBackdrop添加渐变显示，从 -0.004 X轴距离的偏移处移至0

```lua
local fr = FrameBackdrop(kit .. "->bg", FrameGameUI)
fr:show(false)
fr:gradient({ duration = 0.1, x = -0.004, alpha = 1 }, function(callFrame)
    callFrame:show(true)
end)
```

### 为帧动画结束时启用渐变效果

```lua
FrameAnimate(kit .. "->ani", FrameGameUI)
    :adaptive(true)
    :motion(motion)
    :duration(1)
    :onStop(function(evt) 
        evt:gradient({ duration = 0.1, alpha = -1 }, function(callFrame) callFrame:show(false) end) 
    end)
```
