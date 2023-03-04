## Aura Field

### The domain is a circular scope, which can control the status of units entering and leaving

### There is no separate instantiation, only attachment and unbinding

#### Attachment

```lua
AuraAttach("DecelerationField" .. u:id())
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
        eu:buff("DecelerationCompression")
          :description({ colour.hex(colour.indianred, "Mov：-" .. move) })
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
        eu:buffClear({ key = "DecelerationCompression" })
    end)
```

#### unbinding

```lua
AuraDetach("DecelerationField" .. (Unit):id())
```

#### In addition to binding centerUnit, the domain can also bind coordinates ~~:centerUnit((Unit))~~

```lua
AuraAttach("DecelerationField" .. u:id())
    :centerPosition({ x, y })
    ...
```
