## OrderRoute Route blueprint

> Set a route movement plan for the unit

* It can be obstructed halfway, but it will continue to follow the coordinates of the follow-up route
* You can add a user-defined function to each pause point to make additional actions (the route will be forcibly suspended, and the action needs to be manually resumed)
* Use orderRoute to perform route behavior
* Use orderRouteSet to modify the route
* Use orderRoutePause to pause the route behavior (but continue to finish the road section from which to start)
* Use orderRouteResume to resume the route behavior (if it has not been resumed after 10 seconds of suspension, the route will be automatically abolished)
* Use orderRouteDestroy to eliminate route behavior

### Example 1

> General definition, modification, suspension and recovery

```lua
local u = Unit(TPL_UNIT.HeroFlameLord, Player(i), 0, 0, 0)
u:orderRoute(true, {
    {
        -500, -500,
        ---@param orderUnit Unit
        function(orderUnit)
            orderUnit:effect("HCancelDeath")
            orderUnit:orderRouteResume()
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
                    options.sourceUnit:orderRouteResume()
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
                    options.targetUnit:orderRouteResume()
                end
            })
        end
    },
    { -500, -1000 },
})

time.setTimeout(6, function()
    print("Patch 5")
    u:orderRouteSet(5, { 0, 0 })
    time.setTimeout(10, function()
        print("Delete patch 5")
        u:orderRouteSet(5, nil)
    end)
end)
```

### Example 2

> Commonly used in multi route design

```lua
--- Example 2
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
    u:orderRoute(true, r)
end
```
