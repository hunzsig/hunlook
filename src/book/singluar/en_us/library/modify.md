## Frame specific design

### Modify specific modification parameters

* With this parameter, the method is get when it does not exist and modify when it exists

> Take the name of the game object as an example
>
> Game().name(modify:string)

```lua
-- 获取游戏地图名字
-- 默认会从地图结构获取
Game().name() -- return string

-- 自定义游戏地图名字
Game().name("剑圣求生之路") -- return this

```

* Support floating modification of numeric attributes

> Take the player warehouse capacity of game object as an example
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

### Coherent operation

* Most object methods will return this, that is, the object itself, so that coherent operations can be achieved

> Take the abilitytpl skill template as an example

```lua
AbilityTpl("一个被动", ABILITY_TARGET_TYPE.PAS)
    .icon("AB2")
    .description({ "效果: +{50+this.level()*100}攻击" })
    .levelMax(5)
    .levelUpNeedPoint(101)
```
