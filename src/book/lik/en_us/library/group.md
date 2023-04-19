## Group

### Add To Group

```lua
Group():insert(obj)
```

### Remove from Group

```lua
Group():remove(obj)
```

### Group traversal

```lua
Group():forEach(UnitClass, nil, function(enumObj)
    ---do something
end)
```

### Group condition data traversal

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

### Maximum of 7 within group condition data

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

### Randomly select one from the group condition data

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

### Randomly select n items from group conditional data

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

### Select the target closest to (x, y) within the range of group condition data

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

