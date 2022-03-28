## 框架特定设计

### modify特定修改参数

* 当带有该参数时，不存在时方法为获取，存在为修改

> 以Game对象的名字为例
>
> Game().name(modify:string)

```lua
-- 获取游戏地图名字
-- 默认会从地图结构获取
Game().name() -- return string

-- 自定义游戏地图名字
Game().name("剑圣求生之路") -- return this

```

* 支持数值型属性的浮动修改

> 以Game对象的玩家仓库容量为例
>
> Game().warehouseSlot(max:number)

```lua
-- 设置玩家的仓库容量为18
Game().warehouseSlot(18)
-- 设置玩家的仓库容量减少1
Game().warehouseSlot("-=1")
-- 设置玩家的仓库容量增加4
Game().warehouseSlot("+=4")
-- 设置玩家的仓库容量为3倍
Game().warehouseSlot("*=3")
-- 设置玩家的仓库容量为当前一半
Game().warehouseSlot("/=2")
```

### 对象连贯操作

* 大部分对象的方法，都会返回this，即对象本身，从而可实现连贯操作

> 以 AbilityTpl 技能模版举例

```lua
AbilityTpl("一个被动", ABILITY_TARGET_TYPE.PAS)
    .icon("AB2")
    .description({ "效果: +{50+this.level()*100}攻击" })
    .levelMax(5)
    .levelUpNeedPoint(101)
```
