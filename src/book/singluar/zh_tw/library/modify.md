## 框架特定設計

### modify特定修改引數

* 當帶有該引數時，不存在時方法為獲取，存在為修改

> 以Game物件的名字為例
>
> Game().name(modify:string)

```lua
-- 獲取遊戲地圖名字
-- 預設會從地圖結構獲取
Game().name() -- return string

-- 自定義遊戲地圖名字
Game().name("劍聖求生之路") -- return this

```

* 支援數值型屬性的浮動修改

> 以Game物件的玩家倉庫容量為例
>
> Game().warehouseSlot(max:number)

```lua
-- 設定玩家的倉庫容量為18
Game().warehouseSlot(18)
-- 設定玩家的倉庫容量減少1
Game().warehouseSlot("-=1")
-- 設定玩家的倉庫容量增加4
Game().warehouseSlot("+=4")
-- 設定玩家的倉庫容量為3倍
Game().warehouseSlot("*=3")
-- 設定玩家的倉庫容量為當前一半
Game().warehouseSlot("/=2")
```

### 連貫操作

* 大部分物件的方法，都會返回this，即物件本身，從而可實現連貫操作

> 以 AbilityTpl 技能模版舉例

```lua
AbilityTpl("一個被動", ABILITY_TARGET_TYPE.PAS)
    .icon("AB2")
    .description({ "效果: +{50+this.level()*100}攻擊" })
    .levelMax(5)
    .levelUpNeedPoint(101)
```
