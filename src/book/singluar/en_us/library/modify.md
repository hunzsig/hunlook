## Frame specific design

### Modify specific modification parameters

* With this parameter, the method is get when it does not exist and modify when it exists

> Take the name of the game object as an example
>
> Game().name(modify:string)

```lua
-- Get the name of the game map
-- Get from map structure by default
Game().name() -- return string

-- Custom game map name
Game().name("MapName") -- return this

```

* Support floating modification of numeric attributes

> Take the player warehouse capacity of game object as an example
>
> Game().warehouseSlot(max:number)

```lua
-- Set the player's warehouse capacity to 18
Game().warehouseSlot(18)
-- Set the player's warehouse capacity to decrease by 1
Game().warehouseSlot("-=1")
-- Set the player's warehouse capacity to increase by 4
Game().warehouseSlot("+=4")
-- Set the player's warehouse capacity to 3 times
Game().warehouseSlot("*=3")
-- Set the player's warehouse capacity to half of the current one
Game().warehouseSlot("/=2")
```

### Coherent operation

* Most object methods will return this, that is, the object itself, so that coherent operations can be achieved

> Take the abilitytpl skill template as an example

```lua
AbilityTpl("A passive skill", ABILITY_TARGET_TYPE.PAS)
    .icon("AB2")
    .description({ "Effect: +{50+this.level()*100}Attack" })
    .levelMax(5)
    .levelUpNeedPoint(101)
```
