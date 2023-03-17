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

* <div class="colour" style="background-color:#000000"> colour.black = "000000"</div>
* <div class="colour" style="background-color:#FFFFFF"> colour.white = "FFFFFF"</div>
* <div class="colour" style="background-color:#FFFAFA"> colour.snow = "FFFAFA"</div>
* <div class="colour" style="background-color:#F5F5F5"> colour.whitesmoke = "F5F5F5"</div>
* <div class="colour" style="background-color:#D3D3D3"> colour.lightgray = "D3D3D3"</div>
* <div class="colour" style="background-color:#C0C0C0"> colour.silver = "C0C0C0"</div>
* <div class="colour" style="background-color:#A9A9A9"> colour.darkgray = "A9A9A9"</div>
* <div class="colour" style="background-color:#ff2424"> colour.red = "ff2424"</div>
* <div class="colour" style="background-color:#FF6A6A"> colour.indianred = "FF6A6A"</div>
* <div class="colour" style="background-color:#FF8080"> colour.littlepink = "FF8080"</div>
* <div class="colour" style="background-color:#FFC0CB"> colour.pink = "FFC0CB"</div>
* <div class="colour" style="background-color:#FFE4E1"> colour.mistyrose = "FFE4E1"</div>
* <div class="colour" style="background-color:#FFCC00"> colour.gold = "FFCC00"</div>
* <div class="colour" style="background-color:#FFA500"> colour.orange = "FFA500"</div>
* <div class="colour" style="background-color:#F4A460"> colour.sandybrown = "F4A460"</div>
* <div class="colour" style="background-color:#F08080"> colour.lightcoral = "F08080"</div>
* <div class="colour" style="background-color:#FA8072"> colour.salmon = "FA8072"</div>
* <div class="colour" style="background-color:#FFA07A"> colour.lightsalmon = "FFA07A"</div>
* <div class="colour" style="background-color:#FF6347"> colour.tomato = "FF6347"</div>
* <div class="colour" style="background-color:#FFFF00"> colour.yellow = "FFFF00"</div>
* <div class="colour" style="background-color:#BDB76B"> colour.darkkhaki = "BDB76B"</div>
* <div class="colour" style="background-color:#F0E68C"> colour.khaki = "F0E68C"</div>
* <div class="colour" style="background-color:#F5F5DC"> colour.beige = "F5F5DC"</div>
* <div class="colour" style="background-color:#FFFACD"> colour.lemonchiffon = "FFFACD"</div>
* <div class="colour" style="background-color:#FFFFE0"> colour.lightyellow = "FFFFE0"</div>
* <div class="colour" style="background-color:#80FF00"> colour.green = "80FF00"</div>
* <div class="colour" style="background-color:#32CD32"> colour.limegreen = "32CD32"</div>
* <div class="colour" style="background-color:#7CFC00"> colour.lawngreen = "7CFC00"</div>
* <div class="colour" style="background-color:#90EE90"> colour.lightgreen = "90EE90"</div>
* <div class="colour" style="background-color:#98F898"> colour.palegreen = "98F898"</div>
* <div class="colour" style="background-color:#7FFFD4"> colour.aquamarine = "7FFFD4"</div>
* <div class="colour" style="background-color:#F0FFF0"> colour.honeydew = "F0FFF0"</div>
* <div class="colour" style="background-color:#C1FFC1"> colour.darkseagreen = "C1FFC1"</div>
* <div class="colour" style="background-color:#F5FFFA"> colour.mintcream = "F5FFFA"</div>
* <div class="colour" style="background-color:#4169E1"> colour.royalblue = "4169E1"</div>
* <div class="colour" style="background-color:#1E90FF"> colour.dodgerblue = "1E90FF"</div>
* <div class="colour" style="background-color:#6495ED"> colour.cornflowerblue = "6495ED"</div>
* <div class="colour" style="background-color:#00BFFF"> colour.deepskyblue = "00BFFF"</div>
* <div class="colour" style="background-color:#87CECB"> colour.skyblue = "87CECB"</div>
* <div class="colour" style="background-color:#87CEFA"> colour.lightskyblue = "87CEFA"</div>
* <div class="colour" style="background-color:#B0C4DE"> colour.lightsteelblue = "B0C4DE"</div>
* <div class="colour" style="background-color:#ADD8E6"> colour.lightblue = "ADD8E6"</div>
* <div class="colour" style="background-color:#E0FFFF"> colour.lightcyan = "E0FFFF"</div>
* <div class="colour" style="background-color:#F0F8FF"> colour.aliceblue = "F0F8FF"</div>
* <div class="colour" style="background-color:#CC1AFF"> colour.purple = "CC1AFF"</div>
* <div class="colour" style="background-color:#9932CC"> colour.darkorchid = "9932CC"</div>
* <div class="colour" style="background-color:#9370DB"> colour.mediumpurple = "9370DB"</div>
* <div class="colour" style="background-color:#BA55D3"> colour.mediumorchid = "BA55D3"</div>
* <div class="colour" style="background-color:#EE82EE"> colour.violet = "EE82EE"</div>
* <div class="colour" style="background-color:#DDA0DD"> colour.plum = "DDA0DD"</div>
* <div class="colour" style="background-color:#D8BFD8"> colour.thistle = "D8BFD8"</div>
* <div class="colour" style="background-color:#E6E6FA"> colour.lavender = "E6E6FA"</div>
