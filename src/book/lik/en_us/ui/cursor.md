### Cursor

#### SizeRate range change value

> When the range indicator has been displayed and the range of skills has been dynamically modified, it can change gradually rather than instantaneously

#### texture

> Indicator map settings for various behaviors
>
> Normal refers to the conventional state, positive refers to the friendly state, negative refers to the enemy state
>
> Arrow is the center indicator in peacetime, with the upper left corner of the map as the aiming point
>
> The aim skill is an indicator when the target is a point or a unit, and the map center is the target point
>
> The indicator when drag is effective, with the map center as the aiming point
>
> The index when the circle skill is a circle range target, with the map center as the aiming point
>
> The square skill is an indicator of the square range target, with the map center as the aiming point

```lua
Cursor()
    :uiKit(kit)
    :sizeRate(20)
    :texture(
    {
        arrow = { width = 0.024, height = 0.024 * 68 / 46, alpha = 255, normal = "arrow\\normal", positive = "arrow\\focus", negative = "arrow\\attack" },
        aim = { width = 0.04, height = 0.04, alpha = 255, normal = "aim\\white", positive = "aim\\green", negative = "aim\\red", neutral = "aim\\gold" },
        drag = { width = 0.04, height = 0.04, alpha = 255, normal = "drag\\normal" },
        circle = { alpha = 255, positive = "circle\\white", negative = "circle\\red" },
        square = { alpha = 150, positive = "square\\white", negative = "square\\red" },
    })
```
