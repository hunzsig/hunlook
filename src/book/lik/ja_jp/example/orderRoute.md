## orderRoute ロードマップ

> 単位の線形移動の計画を設定する

* 途中で妨害されることはありますが、引き続き次のルート座標に従って移動していきます
* 停止点ごとにカスタム関数を追加して追加の動作を行うことができます（ルートは強制的に停止され、動作中は手動で復元する必要があります）
* orderRouteを使用したルート動作の実行
* orderRouteSetを使用して線形を変更する
* orderRoutePauseを使用してルート動作を一時停止します（ただし、出発するルートを歩き続けます）
* orderRouteResumeを使用して線形挙動を復元します（10秒停止しても復元されない場合、線形は自動的に廃止されます）
* orderRouteDestroyを使用して線形挙動を排除

### 例1

> 一般的な定義、変更、一時停止、リカバリ

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
    print("セグメント5")
    u:orderRouteSet(5, { 0, 0 })
    time.setTimeout(10, function()
        print("セグメント5の削除")
        u:orderRouteSet(5, nil)
    end)
end)
```

### 例2

> 多角形線形設計でよく使用される

```lua
--- 例2
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
