## orderRoute 路線藍圖

> 為單位設定一個路線移動的計劃

* 可以被中途阻擾，但依然會非常堅持的一直遵循後續路線座標移動下去
* 可以在每一段停頓點加入一個自定義函數來做出額外的動作（路線會被強行暫停，動作中需要手動恢復）
* 使用 orderRoute 來執行路線行為
* 使用 orderRouteSet 來修改路線
* 使用 orderRoutePause 來暫停路線行為（但會繼續走完以出發的路段）
* 使用 orderRouteResume 來恢復路線行為（在暫停10秒後如還未恢復，路線會自動廢除）
* 使用 orderRouteDestroy 來消除路線行為

### 例子1

> 常規的定義、修改、暫停、恢復

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
    print("第5段")
    u:orderRouteSet(5, { 0, 0 })
    time.setTimeout(10, function()
        print("刪除第5段")
        u:orderRouteSet(5, nil)
    end)
end)
```

### 例子2

> 常用於多方路線設計

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
    u:orderRoute(true, r)
end
```
