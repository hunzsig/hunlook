## Colour text color

> The framework provides a library for text color modification

#### hex method 6 length

```lua
colour.hex("FF0000", "A string")
colour.hex(colour.gold, "Gold string")
```

#### format method

> Suitable for complex text color processing

```lua
-- 例子
local txt = colour.format("Hello %s", colour.white, {
    { "80ff00", "World" },
})

print(txt)
echo(txt)
```

#### The frame comes with many excellent colors

```lua
colour.black = "000000"
colour.white = "FFFFFF"
colour.snow = "FFFAFA"
colour.whitesmoke = "F5F5F5"
colour.lightgray = "D3D3D3"
colour.silver = "C0C0C0"
colour.darkgray = "A9A9A9"
colour.red = "FF0000"
colour.indianred = "FF6A6A"
colour.littlepink = "FF8080"
colour.pink = "FFC0CB"
colour.mistyrose = "FFE4E1"
colour.gold = "FFCC00"
colour.orange = "FFA500"
colour.sandybrown = "F4A460"
colour.lightcoral = "F08080"
colour.salmon = "FA8072"
colour.lightsalmon = "FFA07A"
colour.tomato = "FF6347"
colour.yellow = "FFFF00"
colour.darkkhaki = "BDB76B"
colour.khaki = "F0E68C"
colour.beige = "F5F5DC"
colour.lemonchiffon = "FFFACD"
colour.lightyellow = "FFFFE0"
colour.green = "80FF00"
colour.limegreen = "32CD32"
colour.lawngreen = "7CFC00"
colour.lightgreen = "90EE90"
colour.palegreen = "98F898"
colour.aquamarine = "7FFFD4"
colour.honeydew = "F0FFF0"
colour.darkseagreen = "C1FFC1"
colour.mintcream = "F5FFFA"
colour.royalblue = "4169E1"
colour.dodgerblue = "1E90FF"
colour.cornflowerblue = "6495ED"
colour.deepskyblue = "00BFFF"
colour.skyblue = "87CECB"
colour.lightskyblue = "87CEFA"
colour.lightsteelblue = "B0C4DE"
colour.lightblue = "ADD8E6"
colour.lightcyan = "E0FFFF"
colour.aliceblue = "F0F8FF"
colour.purple = "800080"
colour.darkorchid = "9932CC"
colour.mediumpurple = "9370DB"
colour.mediumorchid = "BA55D3"
colour.violet = "EE82EE"
colour.plum = "DDA0DD"
colour.thistle = "D8BFD8"
colour.lavender = "E6E6FA"
```
