## 領域

### 領域は円形のスコープであり、進入と離脱の単位の状態を制御することができる

### 個別インスタンス化は存在せず、アタッチと解除のみ

#### ふちゃく

```lua
AuraAttach("げんそくりょういき" .. u:id())
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
        eu:buff("げんそくあっしゅく")
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
        eu:buffClear({ key = "げんそくあっしゅく" })
    end)
```

#### ひもを解く

```lua
AuraDetach("げんそくりょういき" .. (Unit):id())
```

#### レルムはcenterUnitをバインドするほか、座標をバインドすることもできます ~~:centerUnit((Unit))~~

```lua
AuraAttach("げんそくりょういき" .. u:id())
    :centerPosition({ x, y })
    ...
```
