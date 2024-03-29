## 框架特定设计

### modify特定修改参数

* 当带有该参数时，不存在时方法为获取，存在为修改

> 以Game对象的名字为例
>
> Game():name(modify:string)

```lua
-- 获取游戏地图名字
-- 默认会从地图结构获取
Game():name() -- return string

-- 自定义游戏地图名字
Game():name("死亡之轮") -- return this

```

* 支持数值型属性的浮动修改

> 以Game对象的玩家仓库容量为例
>
> Game():warehouseSlot(max:number)

```lua
-- 设置玩家的仓库容量为18
Game():warehouseSlot(18)
-- 设置玩家的仓库容量减少1
Game():warehouseSlot("-=1")
-- 设置玩家的仓库容量增加4
Game():warehouseSlot("+=4")
-- 设置玩家的仓库容量为3倍
Game():warehouseSlot("*=3")
-- 设置玩家的仓库容量为当前一半
Game():warehouseSlot("/=2")
```

### 连贯操作

* 大部分对象的方法，都会返回this，即对象本身，从而可实现连贯操作

> 以 AbilityTpl 技能模版举例

```lua
AbilityTpl()
    :name("瞬间反击")
    :levelMax(9)
    :targetType(ABILITY_TARGET_TYPE.pas)
    :icon("ability/HolyArdentDefender")
    :coolDownAdv(10, -0.5)
    :mpCostAdv(50, 0)
    :description(
    function(obj)
        local dmg = 30 + 5 * obj:level()
        local rer = 8 + 2 * obj:level()
        local dur = 0.4 + 0.1 * obj:level()
        return {
            "受到伤害时，运用盾牌进行防御并反弹伤害",
            colour.format("抵御伤害：%s%", nil, { { colour.gold, dmg } }),
            colour.format("反弹伤害：%s%", nil, { { colour.gold, rer } }),
            colour.format("持续时间：%s秒", nil, { { colour.sky, dur } }),
        }
    end)
    :onUnitEvent(EVENT.Unit.Hurt,
    function(hurtData)
        hurtData.triggerAbility:effective()
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        local lv = effectiveData.triggerAbility:level()
        local tu = effectiveData.triggerUnit
        local reduce = math.floor(30 + 5 * lv)
        local rebound = math.floor(8 + 2 * lv)
        local dur = 0.4 + 0.1 * lv
        tu:attach("buff/IonCentrifugalCircle", "origin", dur)
          :buff("瞬间反击")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
