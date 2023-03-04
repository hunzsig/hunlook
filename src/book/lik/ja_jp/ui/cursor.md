## ポインタ

#### SizeRate範囲変更値

> スコープインジケータが表示され、スキルスコープが動的に変更されたときに変更できます、瞬間ではなく徐々に

#### テクスチャ

> さまざまな動作のポインタマップ設定
>
> normal は通常状態、positiveは一般的に友軍状態、negativeは一般的に敵軍状態を指す
>
> arrow 常時中心ポインタ、マップ左上を照準点とする
>
> aim スキルが点、単位ターゲットの場合のポインタ、マップ中心を照準点とする
>
> drag 有効時のポインタをドラッグし、マップ中心を照準点にする
>
> circle スキルが円範囲ターゲットである場合のポインタ、マップ中心を照準点とする
>
> square スキルが方形範囲ターゲットである場合のポインタ、マップ中心を照準点とする

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
