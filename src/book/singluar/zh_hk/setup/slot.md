### 單位等級極限、技能經驗計算

```lua
-- 技能升級極限以及經驗計算參數 max fixed ratio limit
Game().unitExp(100, 100, 1.20, 1000000)
```

### 技能欄熱鍵、等級極限、技能經驗計算

```lua
-- 配置遊戲 - 技能欄熱鍵
-- A S H 被默認命令佔用建議不使用
Game().abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

-- 技能升級極限以及經驗計算參數 max fixed ratio limit
Game().abilityExp(99, 100, 1.00, 10000)
```

### 物品欄熱鍵、等級極限、技能經驗計算

```lua
-- 配置遊戲 - 物品欄熱鍵
-- 這裏使用魔獸的 78 45 12
Game().itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- 技能升級極限以及經驗計算參數 max fixed ratio limit
Game().itemExp(99, 100, 1.00, 10000)
```

### 玩家倉庫上限

```lua
-- 配置遊戲 - 玩家倉庫
Game().warehouseSlot(18)
```
