## Description 記述体

> フレームワークはテキスト記述体の結合方法を提供する
>
> Game（）オブジェクトの下

#### まずあなたの好きな記述体を定義します

> string[]またはnilに戻すことができます

```lua
-- このような記述構成を定義することができます
Game().defineDescription("myAbility", function(this, options)
    return {"1行目","2行目"}
end)
```

> 記述体定義コールバック関数の最初のthisは、Ability、Item、Unitなどの参照先を指します。

#### スキルの一般的な記述体を見る

> この記述体はoptionsを導入し、追加のデータは、各参照に持ち込まれ、中にはwhichLevelがあり、後にどのように入力するかを示す

```lua
--スキル記述体の定義
-- [基礎情報]
---@param this Ability
---@param options {whichLevel:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local whichLevel = math.floor(options.whichLevel or this.level())
    local tt = this.targetType()
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        table.insert(desc, this.name() .. ' - 等級 ' .. colour.gold(whichLevel) .. '（' .. colour.gold(this.hotkey()) .. '）')
    else
        table.insert(desc, this.name() .. " - 等級 " .. colour.gold(whichLevel))
    end
    table.insert(desc, 'を選択してオプションを設定します：' .. colour.gold(tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        local chantCast = this.castChant(whichLevel)
        if (chantCast > 0) then
            table.insert(desc, '吟唱時間：' .. colour.skyLight(chantCast .. " 秒"))
        else
            table.insert(desc, '吟唱時間：' .. colour.skyLight("瞬間施法"))
        end
        local keepCast = this.castKeep(whichLevel)
        if (keepCast > 0) then
            table.insert(desc, '最大施法継続：' .. colour.skyLight(keepCast .. " 秒"))
        end
    end
    return desc
end)
```

#### 説明体定義後はもちろんそれらを組み合わせてテキストデータを構築することができます

```lua
-- 単純参照
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase")

-- optionsを使用して、whichLevel設定10
local txtArray = Game().combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- 前にもmyAbilityを定義しましたが、2つのデータセットを使用して、あなたが導入した順序でマージすることもできます
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### Ability、Item、Unitオブジェクトはdescription関数を定義し、特定の略称&lt ;D> 関数のコールバックデータを導入する

```lua
-- オブジェクト定義descrptionの特別な導入
local txtArray = Game().combineDescription(whichAbility, nil, "<D>", "abilityBase")
```

#### 文字列配列データを直接使用するか、combineDescriptionに供給して使用することができます

```lua
-- 直接引き込みtable
local txtArray = Game().combineDescription(whichAbility, nil, {"1行目","2行目"})
```
