## Colour 文本顏色

> 框架提供了文本顏色修改的庫

#### hex 方法，使用6位長度顏色

```lua
colour.hex("FF0000", "一個字符串")
colour.hex(colour.gold, "金色字符串")
```

#### format 方法

> 適用於複雜文本顏色處理

```lua
-- 例子
local txt = colour.format("%s在%s裏觀摩%s，結果弄壞了，賠了%s", colour.white, {
    { "80ff00", "劍聖" },
    { "ff59ff", "武器屋" },
    { "ff0000", "[聖劍·火之高興]" },
    { colour.gold, "100W" },
})

print(txt)
echo(txt)
```

#### 框架已自帶提供多種優秀顏色

```lua
colour.black = "000000" -- 黑色
colour.white = "FFFFFF" -- 白色
colour.snow = "FFFAFA" -- 雪白色
colour.whitesmoke = "F5F5F5" -- 煙白色
colour.lightgray = "D3D3D3" -- 淺灰
colour.silver = "C0C0C0" -- 銀色
colour.darkgray = "A9A9A9" -- 暗灰色
colour.red = "FF0000" -- 紅色
colour.indianred = "FF6A6A" -- 印度紅色
colour.littlepink = "FF8080" -- 小粉色
colour.pink = "FFC0CB" -- 粉紅色
colour.mistyrose = "FFE4E1" -- 淺玫瑰色
colour.gold = "FFCC00" -- 金色
colour.orange = "FFA500" -- 橙色
colour.sandybrown = "F4A460" -- 沙褐色
colour.lightcoral = "F08080" -- 亮珊瑚色
colour.salmon = "FA8072" -- 鮮肉色
colour.lightsalmon = "FFA07A" -- 亮肉色
colour.tomato = "FF6347" -- 西紅柿色
colour.yellow = "FFFF00" -- 黃色
colour.darkkhaki = "BDB76B" -- 暗黃褐色
colour.khaki = "F0E68C" -- 黃褐色
colour.beige = "F5F5DC" -- 米色
colour.lemonchiffon = "FFFACD" -- 檸檬綢色
colour.lightyellow = "FFFFE0" -- 淺黃色
colour.green = "80FF00" -- 大綠色
colour.limegreen = "32CD32" -- 橙綠色
colour.lawngreen = "7CFC00" -- 草綠色
colour.lightgreen = "90EE90" -- 亮綠色
colour.palegreen = "98F898" -- 蒼綠色
colour.aquamarine = "7FFFD4" -- 碧綠色
colour.honeydew = "F0FFF0" -- 蜜色
colour.darkseagreen = "C1FFC1" -- 淺綠色
colour.mintcream = "F5FFFA" -- 薄荷色
colour.royalblue = "4169E1" -- 皇家藍
colour.dodgerblue = "1E90FF" -- 閃蘭色
colour.cornflowerblue = "6495ED" -- 菊蘭色
colour.deepskyblue = "00BFFF" -- 深天藍色
colour.skyblue = "87CECB" -- 天藍色
colour.lightskyblue = "87CEFA" -- 亮天藍色
colour.lightsteelblue = "B0C4DE" -- 亮鋼蘭色
colour.lightblue = "ADD8E6" -- 亮藍色
colour.lightcyan = "E0FFFF" -- 亮青色
colour.aliceblue = "F0F8FF" -- 艾利斯蘭
colour.purple = "800080" -- 紫色
colour.darkorchid = "9932CC" -- 暗紫色
colour.mediumpurple = "9370DB" -- 間紫色
colour.mediumorchid = "BA55D3" -- 間紫蘭色
colour.violet = "EE82EE" -- 淺紫色
colour.plum = "DDA0DD" -- 洋李色
colour.thistle = "D8BFD8" -- 薊色
colour.lavender = "E6E6FA" -- 淡紫色
```
