### 単位等級限界、技能経験計算

```lua
-- スキルアップグレードの限界と経験的な計算パラメータ max fixed ratio limit
Game():unitExp(100, 100, 1.20, 1000000)
```

### スキルバーホットキー、レベル限界、スキル経験計算

```lua
-- ゲームの設定 - スキルバーのホットキー
-- A S H デフォルトのコマンド占有推奨では使用されません
Game():abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

Game():abilityUpgrade(99, 100, 1.00, 10000)
```

### 物品栏热键、等级极限、技能经验计算

```lua
-- ゲームの設定 - アイテムバーホットキー
-- ここでは魔獣の 78 45 12
Game():itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- スキルアップグレードの限界と経験的な計算パラメータ max fixed ratio limit
Game():itemExp(99, 100, 1.00, 10000)
```

### プレイヤー倉庫上限

```lua
-- 配置游戏 - プレイヤー倉庫
Game():warehouseSlot(18)
```
