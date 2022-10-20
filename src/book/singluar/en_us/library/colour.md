## Colour text color

> The framework provides a library of text color modification

#### hex method, Use 6-bit length color

```lua
colour.hex("A string", "FF0000")
```

#### hex derivative method

> You can also expand some common colors you bring

```lua
--- gold
colour.gold("A string")

--- white
colour.white("A string")

--- black
colour.black("A string")

--- grey
colour.grey("A string")

--- greyDeep
colour.greyDeep("A string")

--- redLight
colour.redLight("A string")

--- red
colour.red("A string")

--- greenLight
colour.greenLight("A string")

--- green
colour.green("A string")

--- yellowLight
colour.yellowLight("A string")

--- yellow
colour.yellow("A string")

--- orangeLight
colour.orangeLight("A string")

--- orange
colour.orange("A string")

--- skyLight
colour.skyLight("A string")

--- sky
colour.sky("A string")

--- seaLight
colour.seaLight("A string")

--- sea
colour.sea("A string")

--- purpleLight
colour.purpleLight("A string")

--- purple
colour.purple("A string")
```

#### format

> Suitable for complex text color processing

```lua
-- example
local txt = colour.format("%s world", colour.white, {
    { "80ff00", "Hello" },
})

print(txt)
echo(txt)
```
