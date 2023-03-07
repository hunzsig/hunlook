## 區域

#### 創建一個方形區域

```lua
Region("方形區域", "square", 0, 0, 500, 500)
```

#### 創建一個圓形/橢圓區域

```lua
Region("圓形區域", "circle", 0, 0, 500, 500)
```

#### 區域事件

```lua
local r = Region("方形區域", "square", 0, 0, 500, 500)
---@param enterData noteOnRegionEnterData
r:onEvent(EVENT.Region.Enter, function(enterData)
    print("Enter", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
---@param enterData noteOnRegionLeaveData
r:onEvent(EVENT.Region.Leave, function(enterData)
    print("Leave", enterData.triggerRegion:name(), enterData.triggerUnit:name())
end)
```

#### 區域天氣

> 天氣在圓形區域應用時會採用隱性方形的空間

```lua
local r = Region("方形區域", "square", 0, 0, 500, 500)
r:weather(WEATHER_TYPE.rain, true) -- 啓用
r:weather(WEATHER_TYPE.rain, false) -- 關閉
```
