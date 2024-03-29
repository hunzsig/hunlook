## Colour 文本颜色

> 框架提供了文本颜色修改的库

#### hex 方法，使用6位长度颜色

```lua
colour.hex("FF0000", "一个字符串")
colour.hex(colour.gold, "金色字符串")
```

#### format 方法

> 适用于复杂文本颜色处理

```lua
-- 例子
local txt = colour.format("%s在%s里观摩%s，结果弄坏了，赔了%s", colour.white, {
    { "80ff00", "剑圣" },
    { "ff59ff", "武器屋" },
    { "ff0000", "[圣剑·火之高兴]" },
    { colour.gold, "100W" },
})

print(txt)
echo(txt)
```

#### 框架已自带提供多种优秀颜色

```lua
colour.black = "000000" -- 黑色
colour.white = "FFFFFF" -- 白色
colour.snow = "FFFAFA" -- 雪白色
colour.whitesmoke = "F5F5F5" -- 烟白色
colour.lightgray = "D3D3D3" -- 浅灰
colour.silver = "C0C0C0" -- 银色
colour.darkgray = "A9A9A9" -- 暗灰色
colour.red = "ff2424" -- 红色
colour.indianred = "FF6A6A" -- 印度红色
colour.littlepink = "FF8080" -- 小粉色
colour.pink = "FFC0CB" -- 粉红色
colour.mistyrose = "FFE4E1" -- 浅玫瑰色
colour.gold = "FFCC00" -- 金色
colour.orange = "FFA500" -- 橙色
colour.sandybrown = "F4A460" -- 沙褐色
colour.lightcoral = "F08080" -- 亮珊瑚色
colour.salmon = "FA8072" -- 鲜肉色
colour.lightsalmon = "FFA07A" -- 亮肉色
colour.tomato = "FF6347" -- 西红柿色
colour.yellow = "FFFF00" -- 黄色
colour.darkkhaki = "BDB76B" -- 暗黄褐色
colour.khaki = "F0E68C" -- 黄褐色
colour.beige = "F5F5DC" -- 米色
colour.lemonchiffon = "FFFACD" -- 柠檬绸色
colour.lightyellow = "FFFFE0" -- 浅黄色
colour.green = "80FF00" -- 大绿色
colour.limegreen = "32CD32" -- 橙绿色
colour.lawngreen = "7CFC00" -- 草绿色
colour.lightgreen = "90EE90" -- 亮绿色
colour.palegreen = "98F898" -- 苍绿色
colour.aquamarine = "7FFFD4" -- 碧绿色
colour.honeydew = "F0FFF0" -- 蜜色
colour.darkseagreen = "C1FFC1" -- 浅绿色
colour.mintcream = "F5FFFA" -- 薄荷色
colour.royalblue = "4169E1" -- 皇家蓝
colour.dodgerblue = "1E90FF" -- 闪兰色
colour.cornflowerblue = "6495ED" -- 菊兰色
colour.deepskyblue = "00BFFF" -- 深天蓝色
colour.skyblue = "87CECB" -- 天蓝色
colour.lightskyblue = "87CEFA" -- 亮天蓝色
colour.lightsteelblue = "B0C4DE" -- 亮钢兰色
colour.lightblue = "ADD8E6" -- 亮蓝色
colour.lightcyan = "E0FFFF" -- 亮青色
colour.aliceblue = "F0F8FF" -- 艾利斯兰
colour.purple = "cc1aff" -- 紫色
colour.darkorchid = "9932CC" -- 暗紫色
colour.mediumpurple = "9370DB" -- 间紫色
colour.mediumorchid = "BA55D3" -- 间紫兰色
colour.violet = "EE82EE" -- 浅紫色
colour.plum = "DDA0DD" -- 洋李色
colour.thistle = "D8BFD8" -- 蓟色
colour.lavender = "E6E6FA" -- 淡紫色
```
