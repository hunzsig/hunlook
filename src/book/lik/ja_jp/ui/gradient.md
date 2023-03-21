## グラデーション

#### Frameオブジェクトとそのサブオブジェクトの両方でランプを使用できます

#### 静的UIはやや単調で、フレームアニメーションの他にもグラデーションを使って簡単な一時的な効果を実現することができます

> ランプエフェクトはFrameのPropデータを変更せず、一時的な視覚的感覚だけを変更します
>
> したがってcallFrameを操作する必要がある場合は、コールバックで設定する必要があります

### FrameBackdropのグラデーション表示を追加し、-0.004 X軸距離のオフセットから0に移動

```lua
local fr = FrameBackdrop(kit .. "->bg", FrameGameUI)
fr:show(false)
fr:gradient({ duration = 0.1, x = -0.004, alpha = 1 }, function(callFrame)
    callFrame:show(true)
end)
```

### フレームアニメーションの終了時にグラデーションを有効にする

```lua
FrameAnimate(kit .. "->ani", FrameGameUI)
    :adaptive(true)
    :motion(motion)
    :duration(1)
    :onStop(function(evt) 
        evt:gradient({ duration = 0.1, alpha = -1 }, function(callFrame) callFrame:show(false) end) 
    end)
```
