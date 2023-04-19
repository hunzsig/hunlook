## Group 組

### 添加到組

```lua
Group():insert(obj)
```

### 從組刪除

```lua
Group():remove(obj)
```

### 組遍歷

```lua
Group():forEach(UnitClass, nil, function(enumObj)
    ---do something
end)
```

### 組條件數據遍歷

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

### 組條件數據內最大取7個

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

### 組條件數據內隨機取1個

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

### 組條件數據內隨機取n個

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

### 組條件數據內方範圍內取最靠近(x,y)的目標

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
