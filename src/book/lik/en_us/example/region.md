## Region

#### Create a square region

```lua
Region("square region", "square", 0, 0, 500, 500)
```

#### Create a circular/elliptical region

```lua
Region("circle region", "circle", 0, 0, 500, 500)
```

#### Region events

```lua
local r = Region("square area", "square", 0, 0, 500, 500)
---@param enterData noteOnRectEnterData
r:onEvent(EVENT.Region.Enter, function(enterData)
    print("Enter", enterData.triggerRect:name(), enterData.triggerUnit:name())
end)
---@param enterData noteOnRectLeaveData
r:onEvent(EVENT.Region.Leave, function(enterData)
    print("Leave", enterData.triggerRect:name(), enterData.triggerUnit:name())
end)
```

#### Region weather

> When the weather is applied in the circular area, the hidden square space will be used

```lua
local r = Region("square area", "square", 0, 0, 500, 500)
r:weather(WEATHER_TYPE.rain, true) -- enable
r:weather(WEATHER_TYPE.rain, false) -- disable
```
