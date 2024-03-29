## 区域

#### 创建一个方形区域

```lua
Region("方形区域", "square", 0, 0, 500, 500)
```

#### 创建一个圆形/椭圆区域

```lua
Region("圆形区域", "circle", 0, 0, 500, 500)
```

#### 区域事件

```lua
local r = Region("方形区域", "square", 0, 0, 500, 500)
---@param enterData noteOnRegionEnterData
r:onEvent(EVENT.Region.Enter, function(enterData)
    print("Enter", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
---@param enterData noteOnRegionLeaveData
r:onEvent(EVENT.Region.Leave, function(enterData)
    print("Leave", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
```

#### 区域天气

> 天气在圆形区域应用时会采用隐性方形的空间

```lua
local r = Region("方形区域", "square", 0, 0, 500, 500)
r:weather(WEATHER_TYPE.rain, true) -- 启用
r:weather(WEATHER_TYPE.rain, false) -- 关闭
```
