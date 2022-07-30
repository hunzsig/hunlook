## Colour 文本颜色

> The framework provides a library of text color modification

#### hex method, Use 6-bit length color

```lua
colour.hex("一个字符串", "FF0000")
```

#### hex derivative method

> You can also expand some common colors you bring

```lua
--- 耀金
colour.gold("一个字符串")

--- 纯白
colour.white("一个字符串")

--- 纯黑
colour.black("一个字符串")

--- 浅灰
colour.grey("一个字符串")

--- 深灰
colour.greyDeep("一个字符串")

--- 亮红
colour.redLight("一个字符串")

--- 大红
colour.red("一个字符串")

--- 浅绿
colour.greenLight("一个字符串")

--- 深绿
colour.green("一个字符串")

--- 浅黄
colour.yellowLight("一个字符串")

--- 亮黄
colour.yellow("一个字符串")

--- 浅橙
colour.orangeLight("一个字符串")

--- 橙色
colour.orange("一个字符串")

--- 天空蓝
colour.skyLight("一个字符串")

--- 青空蓝
colour.sky("一个字符串")

--- 浅海蓝
colour.seaLight("一个字符串")

--- 深海蓝
colour.sea("一个字符串")

--- 浅紫
colour.purpleLight("一个字符串")

--- 亮紫
colour.purple("一个字符串")
```

#### format

> Suitable for complex text color processing

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
