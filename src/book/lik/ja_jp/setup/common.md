### UI構成

```lua
-- オプションで初期化元のUIを非表示にする
Game():hideInterface(true)
```

### 単位等級限界、技能経験計算

```lua
-- スキルアップグレードの限界と経験的な計算パラメータ max fixed ratio limit
Game():unitExp(100, 100, 1.20, 1000000)
```

### スキルバーホットキー、レベル限界、スキル経験計算

```lua
-- ゲームの設定 - スキルバーのホットキー
-- A S H デフォルトのコマンド占有推奨では使用されません
Game():abilityHotkey({ KEYBOARD.Q, KEYBOARD.W, KEYBOARD.E, KEYBOARD.R, KEYBOARD.D, KEYBOARD.F, KEYBOARD.C, KEYBOARD.V })

Game():abilityUpgrade(99, 100, 1.00, 10000)
```

### 物品栏热键、等级极限、技能经验计算

```lua
-- ゲームの設定 - アイテムバーホットキー
-- ここでは魔獣の 78 45 12
Game():itemHotkey({ KEYBOARD.Numpad7, KEYBOARD.Numpad8, KEYBOARD.Numpad4, KEYBOARD.Numpad5, KEYBOARD.Numpad1, KEYBOARD.Numpad2 })

-- スキルアップグレードの限界と経験的な計算パラメータ max fixed ratio limit
Game():itemExp(99, 100, 1.00, 10000)
```

### アイテム選択モード

```lua
Game():itemPickMode(ITEM_PICK_MODE.itemOnly)
```

### プレイヤー倉庫上限

```lua
-- 配置游戏 - プレイヤー倉庫
Game():warehouseSlot(18)
```
