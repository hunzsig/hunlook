## Tooltips

#### ツールチップ、指向性の説明によく使われる

### FrameTooltips の使用

> FrameTooltipsはデフォルトで4つ、シーケンス番号は0～3に対応しています
>
> ここでは0シーケンス番号は最下位占有であり、一般的には使用されませんので注意してください
>
> 残りの1～3番は自由に使用できますが、通常は番号を指定する必要がなければ自動的に番号1を取得します

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

### 指定番号2 FrameTooltips

```lua
FrameTooltips(2)
    :textAlign(TEXT_ALIGN_LEFT)
    :fontSize(10)
    :relation(FRAME_ALIGN_BOTTOM, btn, FRAME_ALIGN_TOP, 0, 0.002)
    :content(content)
    :show(true)
```

### 非表示 FrameTooltips

```lua
FrameTooltips():show(false, 0)
```

### FrameTooltipsをUIKit assetに呼び出す

> contentコンテンツがassetsリソースを簡単に呼び出す必要がある場合は、UIのkitを一時的にバインドすることができます

```lua
FrameTooltips():kit(kit)
```
