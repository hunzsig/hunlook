## Group グループ

### グループに追加

```lua
Group():insert(obj)
```

### グループから削除

```lua
Group():remove(obj)
```

### グループのトラバース

```lua
Group():forEach(UnitClass, nil, function(enumObj)
    ---do something
end)
```

### グループ条件データのトラバース

```lua
local enumUnits = Group():catch(UnitClass, {
    circle = {
        x = x,
        y = y,
        radius = radius,
    },
})
if (#enumUnits > 0) then
    for _, eu in ipairs(enumUnits) do
        ---do something
    end
end
```

### グループ条件データ内で最大7個取る

```lua
local enumUnits = Group():catch(UnitClass, {
    limit = 7,
    circle = {
        x = x,
        y = y,
        radius = radius,
    },
})
```

### グループ条件データ内からランダムに1個取る

```lua
local enumUnit = Group():rand(UnitClass, {
    circle = {
        x = x,
        y = y,
        radius = radius,
    },
})
print(isClass(enumUnit, UnitClass))
```

### グループ条件データ内からランダムにn個取る

```lua
local enumUnits = Group():rand(UnitClass, {
    circle = {
        x = x,
        y = y,
        radius = radius,
    },
}, n)
if (#enumUnits > 0) then
    for _, eu in ipairs(enumUnits) do
        ---do something
    end
end
```

### グループ条件データ内で最も近い(x，y)ターゲットをとる

```lua
local closestUnit = Group():closest(UnitClass, {
    square = {
        x = x,
        y = y,
        width = width,
        height = height,
    },
})
print(isClass(closestUnit, UnitClass))
```

