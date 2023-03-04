## 領域

### 領域是一個圓形作用域，可控制進入和離開的單位的狀態

### 不存在單獨例項化，只有附著與解綁

#### 領域附著

```lua
AuraAttach("減速領域" .. u:id())
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
        eu:buff("減速壓迫")
          :description({ colour.hex(colour.indianred, "移動：-" .. move) })
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
        eu:buffClear({ key = "減速壓迫" })
    end)
```

#### 領域解綁

```lua
AuraDetach("減速領域" .. (Unit):id())
```

#### 領域除了繫結centerUnit，還可以繫結座標 ~~:centerUnit((Unit))~~

```lua
AuraAttach("減速領域" .. u:id())
    :centerPosition({ x, y })
    ...
```
