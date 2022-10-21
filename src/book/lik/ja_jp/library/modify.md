## フレームワーク固有の設計

### modify固有の変更パラメータ

* このパラメータが存在しない場合、メソッドは取得、存在は修正

> ゲーム相手の名前を例にとる
>
> Game():name(modify:string)

```lua
-- ゲームマップ名を取得
-- デフォルトではマップ構造から取得されます
Game():name() -- return string

-- カスタムゲームマップ名
Game():name("死の輪") -- return this

```

* 数値属性のフローティング修正をサポートする

> ゲーム対象のプレイヤーの倉庫容量を例にとる
>
> Game():warehouseSlot(max:number)

```lua
-- プレイヤーの倉庫容量を18に設定
Game():warehouseSlot(18)
-- 設置プレイヤーの倉庫容量を1削減
Game():warehouseSlot("-=1")
-- 設置プレイヤーの倉庫容量が増加4
Game():warehouseSlot("+=4")
-- プレイヤーの倉庫容量を3倍に設定
Game():warehouseSlot("*=3")
-- プレイヤーの倉庫容量を現在の半分に設定
Game():warehouseSlot("/=2")
```

### れんけつそうさ

* ほとんどのオブジェクトのメソッドは、オブジェクト自体であるthisを返し、一貫した操作を可能にします

> AbilityTpl スキルテンプレートの例

```lua
AbilityTpl()
    :name("瞬間反撃")
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
            "ダメージを受けた時、シールドを用いて防御してダメージを跳ね返す",
            colour.format("傷害を防ぐ：%s%", nil, { { colour.gold, dmg } }),
            colour.format("リバウンドダメージ：%s%", nil, { { colour.gold, rer } }),
            colour.format("継続時間：%s秒", nil, { { colour.sky, dur } }),
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
          :buff("瞬間反撃")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
