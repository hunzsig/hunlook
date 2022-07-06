## orderRoute 路线蓝图

> 为单位设定一个路线移动的计划

* 可以被中途阻扰，但依然会非常坚持的一直遵循后续路线坐标移动下去
* 可以消除路线行为
* 可以在每一段停顿点加入一个自定义函数来做出额外的动作
* 停顿点动作会强行暂时中止路线，直到你在3秒内主动使用恢复
* 如果你在3秒内不恢复路线，路线会被废除

```lua
--- 例子
(Unit).orderRoute(true, {
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
    (Unit).orderRouteSet(5, { 0, 0 })
    time.setTimeout(10, function()
        print("删除第5段")
        (Unit).orderRouteSet(5, nil)
    end)
end)
```
