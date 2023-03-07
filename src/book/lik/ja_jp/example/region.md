## 域

#### 方形域を作成する

```lua
Region("方形域", "square", 0, 0, 500, 500)
```

#### 円/楕円領域を作成する

```lua
Region("円形域", "circle", 0, 0, 500, 500)
```

#### 域事件

```lua
local r = Region("方形域", "square", 0, 0, 500, 500)
---@param enterData noteOnRegionEnterData
r:onEvent(EVENT.Region.Enter, function(enterData)
    print("Enter", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
---@param enterData noteOnRegionLeaveData
r:onEvent(EVENT.Region.Leave, function(enterData)
    print("Leave", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
```

#### 域の天気

> 天候が円形領域に適用されると、暗黙的な四角形の空間が使用されます

```lua
local r = Region("方形域", "square", 0, 0, 500, 500)
r:weather(WEATHER_TYPE.rain, true) -- オン
r:weather(WEATHER_TYPE.rain, false) -- オフ
```
