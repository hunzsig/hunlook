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

* <div class="colour" style="background-color:#000000"> colour.black = "000000" -- 黑色</div>
* <div class="colour" style="background-color:#FFFFFF"> colour.white = "FFFFFF" -- 白色</div>
* <div class="colour" style="background-color:#FFFAFA"> colour.snow = "FFFAFA" -- 雪白色</div>
* <div class="colour" style="background-color:#F5F5F5"> colour.whitesmoke = "F5F5F5" -- 煙白色</div>
* <div class="colour" style="background-color:#D3D3D3"> colour.lightgray = "D3D3D3" -- 淺灰</div>
* <div class="colour" style="background-color:#C0C0C0"> colour.silver = "C0C0C0" -- 銀色</div>
* <div class="colour" style="background-color:#A9A9A9"> colour.darkgray = "A9A9A9" -- 暗灰色</div>
* <div class="colour" style="background-color:#ff2424"> colour.red = "ff2424" -- 紅色</div>
* <div class="colour" style="background-color:#FF6A6A"> colour.indianred = "FF6A6A" -- 印度紅色</div>
* <div class="colour" style="background-color:#FF8080"> colour.littlepink = "FF8080" -- 小粉色</div>
* <div class="colour" style="background-color:#FFC0CB"> colour.pink = "FFC0CB" -- 粉紅色</div>
* <div class="colour" style="background-color:#FFE4E1"> colour.mistyrose = "FFE4E1" -- 淺玫瑰色</div>
* <div class="colour" style="background-color:#FFCC00"> colour.gold = "FFCC00" -- 金色</div>
* <div class="colour" style="background-color:#FFA500"> colour.orange = "FFA500" -- 橙色</div>
* <div class="colour" style="background-color:#F4A460"> colour.sandybrown = "F4A460" -- 沙褐色</div>
* <div class="colour" style="background-color:#F08080"> colour.lightcoral = "F08080" -- 亮珊瑚色</div>
* <div class="colour" style="background-color:#FA8072"> colour.salmon = "FA8072" -- 鮮肉色</div>
* <div class="colour" style="background-color:#FFA07A"> colour.lightsalmon = "FFA07A" -- 亮肉色</div>
* <div class="colour" style="background-color:#FF6347"> colour.tomato = "FF6347" -- 西紅柿色</div>
* <div class="colour" style="background-color:#FFFF00"> colour.yellow = "FFFF00" -- 黃色</div>
* <div class="colour" style="background-color:#BDB76B"> colour.darkkhaki = "BDB76B" -- 暗黃褐色</div>
* <div class="colour" style="background-color:#F0E68C"> colour.khaki = "F0E68C" -- 黃褐色</div>
* <div class="colour" style="background-color:#F5F5DC"> colour.beige = "F5F5DC" -- 米色</div>
* <div class="colour" style="background-color:#FFFACD"> colour.lemonchiffon = "FFFACD" -- 檸檬綢色</div>
* <div class="colour" style="background-color:#FFFFE0"> colour.lightyellow = "FFFFE0" -- 淺黃色</div>
* <div class="colour" style="background-color:#80FF00"> colour.green = "80FF00" -- 大綠色</div>
* <div class="colour" style="background-color:#32CD32"> colour.limegreen = "32CD32" -- 橙綠色</div>
* <div class="colour" style="background-color:#7CFC00"> colour.lawngreen = "7CFC00" -- 草綠色</div>
* <div class="colour" style="background-color:#90EE90"> colour.lightgreen = "90EE90" -- 亮綠色</div>
* <div class="colour" style="background-color:#98F898"> colour.palegreen = "98F898" -- 蒼綠色</div>
* <div class="colour" style="background-color:#7FFFD4"> colour.aquamarine = "7FFFD4" -- 碧綠色</div>
* <div class="colour" style="background-color:#F0FFF0"> colour.honeydew = "F0FFF0" -- 蜜色</div>
* <div class="colour" style="background-color:#C1FFC1"> colour.darkseagreen = "C1FFC1" -- 淺綠色</div>
* <div class="colour" style="background-color:#F5FFFA"> colour.mintcream = "F5FFFA" -- 薄荷色</div>
* <div class="colour" style="background-color:#4169E1"> colour.royalblue = "4169E1" -- 皇家藍</div>
* <div class="colour" style="background-color:#1E90FF"> colour.dodgerblue = "1E90FF" -- 閃蘭色</div>
* <div class="colour" style="background-color:#6495ED"> colour.cornflowerblue = "6495ED" -- 菊蘭色</div>
* <div class="colour" style="background-color:#00BFFF"> colour.deepskyblue = "00BFFF" -- 深天藍色</div>
* <div class="colour" style="background-color:#87CECB"> colour.skyblue = "87CECB" -- 天藍色</div>
* <div class="colour" style="background-color:#87CEFA"> colour.lightskyblue = "87CEFA" -- 亮天藍色</div>
* <div class="colour" style="background-color:#B0C4DE"> colour.lightsteelblue = "B0C4DE" -- 亮鋼蘭色</div>
* <div class="colour" style="background-color:#ADD8E6"> colour.lightblue = "ADD8E6" -- 亮藍色</div>
* <div class="colour" style="background-color:#E0FFFF"> colour.lightcyan = "E0FFFF" -- 亮青色</div>
* <div class="colour" style="background-color:#F0F8FF"> colour.aliceblue = "F0F8FF" -- 艾利斯蘭</div>
* <div class="colour" style="background-color:#CC1AFF"> colour.purple = "CC1AFF" -- 紫色</div>
* <div class="colour" style="background-color:#9932CC"> colour.darkorchid = "9932CC" -- 暗紫色</div>
* <div class="colour" style="background-color:#9370DB"> colour.mediumpurple = "9370DB" -- 間紫色</div>
* <div class="colour" style="background-color:#BA55D3"> colour.mediumorchid = "BA55D3" -- 間紫蘭色</div>
* <div class="colour" style="background-color:#EE82EE"> colour.violet = "EE82EE" -- 淺紫色</div>
* <div class="colour" style="background-color:#DDA0DD"> colour.plum = "DDA0DD" -- 洋李色</div>
* <div class="colour" style="background-color:#D8BFD8"> colour.thistle = "D8BFD8" -- 薊色</div>
* <div class="colour" style="background-color:#E6E6FA"> colour.lavender = "E6E6FA" -- 淡紫色</div>
