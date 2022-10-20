## フレームワーク固有の設計

### modify固有の変更パラメータ

* このパラメータが存在しない場合、メソッドは取得、存在は修正

> ゲーム相手の名前を例にとる
>
> Game().name(modify:string)

```lua
--ゲームマップ名を取得
--デフォルトではマップ構造から取得されます
Game().name() -- return string

-- カスタムゲームマップ名
Game().name("剑圣求生之路") -- return this

```

* 数値属性のフローティング修正をサポートする

> ゲーム対象のプレイヤーの倉庫容量を例にとる
>
> Game().warehouseSlot(max:number)

```lua
-- プレイヤーの倉庫容量を18に設定
Game().warehouseSlot(18)
-- 設置プレイヤーの倉庫容量を1削減
Game().warehouseSlot("-=1")
-- 設置プレイヤーの倉庫容量が増加4
Game().warehouseSlot("+=4")
-- プレイヤーの倉庫容量を3倍に設定
Game().warehouseSlot("*=3")
-- プレイヤーの倉庫容量を現在の半分に設定
Game().warehouseSlot("/=2")
```

### れんけつそうさ

* ほとんどのオブジェクトのメソッドは、オブジェクト自体であるthisを返し、一貫した操作を可能にします。

> AbilityTplスキルテンプレートの例

```lua
AbilityTpl("一个被动", ABILITY_TARGET_TYPE.PAS)
    .icon("AB2")
    .description({ "效果: +{50+this.level()*100}攻击" })
    .levelMax(5)
    .levelUpNeedPoint(101)
```
