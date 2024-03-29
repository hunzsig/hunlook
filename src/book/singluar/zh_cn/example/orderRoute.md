## orderRoute 路线蓝图

> 为单位设定一个路线移动的计划

* 可以被中途阻扰，但依然会非常坚持的一直遵循后续路线坐标移动下去
* 可以在每一段停顿点加入一个自定义函数来做出额外的动作（路线会被强行暂停，动作中需要手动恢复）
* 使用 orderRoute 来执行路线行为
* 使用 orderRouteSet 来修改路线
* 使用 orderRoutePause 来暂停路线行为（但会继续走完以出发的路段）
* 使用 orderRouteResume 来恢复路线行为（在暂停10秒后如还未恢复，路线会自动废除）
* 使用 orderRouteDestroy 来消除路线行为

### 例子1

> 常规的定义、修改、暂停、恢复

```lua
local u = Unit(TPL_UNIT.HeroFlameLord, Player(i), 0, 0, 0)
u.orderRoute(true, {
    {
        -500, -500,
        ---@param orderUnit Unit
        function(orderUnit)
            orderUnit.effect("HCancelDeath")
            orderUnit.orderRouteResume()
        end
    },
    {
        500, -500,
        ---@param orderUnit Unit
        function(orderUnit)
            ability.leap({
                sourceUnit = orderUnit,
                targetPoint = { 0, -1000, 0 },
                speed = 3000,
                height = 500,
                reflex = 2,
                onEnd = function(options)
                    options.sourceUnit.orderRouteResume()
                end
            })
        end
    },
    {
        500, -1000,
        ---@param orderUnit Unit
        function(orderUnit)
            ability.crackFly({
                targetUnit = orderUnit,
                distance = 300,
                height = 500,
                bounce = { qty = 3 },
                onEnd = function(options)
                    options.targetUnit.orderRouteResume()
                end
            })
        end
    },
    { -500, -1000 },
})

time.setTimeout(6, function()
    print("第5段")
    u.orderRouteSet(5, { 0, 0 })
    time.setTimeout(10, function()
        print("删除第5段")
        u.orderRouteSet(5, nil)
    end)
end)
```

### 例子2

> 常用于多方路线设计

```lua
--- 例子2
local lineMap = {
    { -500, -1000 },
    { 500, -1000 },
    { 500, -2000 },
    { -500, -2000 },
}

local routes = {}
for i = 1, #lineMap do
    routes[i] = table.wheel(lineMap, 1 * (i - 1))
end

for i = 1, #routes do
    local r = routes[i]
    local u = Unit(TPL_UNIT.HeroFlameLord, Player(i), r[1][1], r[1][2], 0)
    u.orderRoute(true, r)
end
```
