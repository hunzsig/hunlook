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
