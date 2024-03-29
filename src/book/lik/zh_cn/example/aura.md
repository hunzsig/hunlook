## 领域

### 领域是一个圆形作用域，可控制进入和离开的单位的状态

### 不存在单独实例化，只有附着与解绑

#### 领域附着

```lua
AuraAttach("减速领域" .. u:id())
    :radius(300)
    :centerUnit((Unit))
    :centerEffect("buff/FlyingSwordDark", "origin", 1)
    :filter(function(enumUnit) 
        return enumUnit:isAlive() and enumUnit:isEnemy((Unit):owner())
    end)
    :onEvent(EVENT.Aura.Enter,
    function(auraData)
        local eu = auraData.triggerUnit
        ---@param buffObj Unit
        eu:buff("减速压迫")
          :description({ colour.hex(colour.indianred, "移动：-" .. move) })
          :duration(-1)
          :purpose(function(buffObj)
            buffObj:move("-=" .. move)
        end)
          :rollback(function(buffObj)
            buffObj:move("+=" .. move)
        end)
          :run()
    end)
    :onEvent(EVENT.Aura.Leave,
    function(auraData)
        local eu = auraData.triggerUnit
        eu:buffClear({ key = "减速压迫" })
    end)
```

#### 领域解绑

```lua
AuraDetach("减速领域" .. (Unit):id())
```

#### 领域除了绑定centerUnit，还可以绑定坐标 ~~:centerUnit((Unit))~~

```lua
AuraAttach("减速领域" .. u:id())
    :centerPosition({ x, y })
    ...
```
