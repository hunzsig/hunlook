## 漸變

#### Frame對象及其子對象都可以使用漸變

#### 靜態的UI略顯單調，除了幀動畫，你還可以使用漸變來實現一些簡單的臨時效果

> 漸變效果不會改變Frame的Prop數據，只改變臨時視覺觀感
>
> 所以如果有需要操作callFrame，需要在回調對其進行設置

### 為一個FrameBackdrop添加漸變顯示，從 -0.004 X軸距離的偏移處移至0

```lua
local fr = FrameBackdrop(kit .. "->bg", FrameGameUI)
fr:show(false)
fr:gradient({ duration = 0.1, x = -0.004, alpha = 1 }, function(callFrame)
    callFrame:show(true)
end)
```

### 為幀動畫結束時啓用漸變效果

```lua
FrameAnimate(kit .. "->ani", FrameGameUI)
    :adaptive(true)
    :motion(motion)
    :duration(1)
    :onStop(function(evt) 
        evt:gradient({ duration = 0.1, alpha = -1 }, function(callFrame) callFrame:show(false) end) 
    end)
```
