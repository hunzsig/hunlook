### 指標

#### sizeRate 範圍變化值

> 當範圍指標已顯示，動態修改了技能的範圍時，可漸進變化而不是瞬間變化

#### texture

> 各種行為的指標貼圖設定
>
> normal指常規態、positive一般指友軍態、negative一般指敵軍態
>
> arrow 平時中心指標，以貼圖左上角為瞄準點
>
> aim 技能為點、單位目標時的指標，以貼圖中心為瞄準點
>
> drag 拖拽生效時的指標，以貼圖中心為瞄準點
>
> circle 技能為圓範圍目標時的指標，以貼圖中心為瞄準點
>
> square 技能為方型範圍目標時的指標，以貼圖中心為瞄準點

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
