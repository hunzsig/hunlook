## 框架特定設計

### modify特定修改參數

* 當帶有該參數時，不存在時方法為獲取，存在為修改

> 以Game對象的名字為例
>
> Game():name(modify:string)

```lua
-- 獲取遊戲地圖名字
-- 默認會從地圖結構獲取
Game():name() -- return string

-- 自定義遊戲地圖名字
Game():name("死亡之輪") -- return this

```

* 支持數值型屬性的浮動修改

> 以Game對象的玩家倉庫容量為例
>
> Game():warehouseSlot(max:number)

```lua
-- 設置玩家的倉庫容量為18
Game():warehouseSlot(18)
-- 設置玩家的倉庫容量減少1
Game():warehouseSlot("-=1")
-- 設置玩家的倉庫容量增加4
Game():warehouseSlot("+=4")
-- 設置玩家的倉庫容量為3倍
Game():warehouseSlot("*=3")
-- 設置玩家的倉庫容量為當前一半
Game():warehouseSlot("/=2")
```

### 連貫操作

* 大部分對象的方法，都會返回this，即對象本身，從而可實現連貫操作

> 以 AbilityTpl 技能模版舉例

```lua
AbilityTpl()
    :name("瞬間反擊")
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
            "受到傷害時，運用盾牌進行防禦並反彈傷害",
            colour.format("抵禦傷害：%s%", nil, { { colour.gold, dmg } }),
            colour.format("反彈傷害：%s%", nil, { { colour.gold, rer } }),
            colour.format("持續時間：%s秒", nil, { { colour.sky, dur } }),
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
          :buff("瞬間反擊")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
