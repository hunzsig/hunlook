## Colour 文字顔色

> 框架提供了文字顔色修改的庫

#### hex 方法，使用6位長度顔色

```lua
colour.hex("一個字串", "FF0000")
```

#### hex衍生方法

> 自帶的一些常用顔色，你也可以自己拓展

```lua
--- 耀金
colour.gold("一個字串")

--- 純白
colour.white("一個字串")

--- 純黑
colour.black("一個字串")

--- 淺灰
colour.grey("一個字串")

--- 深灰
colour.greyDeep("一個字串")

--- 亮紅
colour.redLight("一個字串")

--- 大紅
colour.red("一個字串")

--- 淺綠
colour.greenLight("一個字串")

--- 深綠
colour.green("一個字串")

--- 淺黃
colour.yellowLight("一個字串")

--- 亮黃
colour.yellow("一個字串")

--- 淺橙
colour.orangeLight("一個字串")

--- 橙色
colour.orange("一個字串")

--- 天空藍
colour.skyLight("一個字串")

--- 青空藍
colour.sky("一個字串")

--- 淺海藍
colour.seaLight("一個字串")

--- 深海藍
colour.sea("一個字串")

--- 淺紫
colour.purpleLight("一個字串")

--- 亮紫
colour.purple("一個字串")
```

#### format 方法

> 適用於複雜文字顔色處理

```lua
-- 例子
local txt = colour.format("%s在%s裡觀摩%s，結果弄壞了，賠了%s", colour.white, {
    { "80ff00", "劍聖" },
    { "ff59ff", "武器屋" },
    { "ff0000", "[聖劍·火之高興]" },
    { colour.gold, "100W" },
})

print(txt)
echo(txt)
```
