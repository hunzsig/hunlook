### 原生UI構成

```lua
-- 可選隱藏初始化原生UI
Game():hideInterface(true)
```

### 單位等級極限、技能經驗計算

```lua
-- 技能升級極限以及經驗計算引數 max fixed ratio limit
Game():unitExp(100, 100, 1.20, 1000000)
```

### 技能欄熱鍵、等級極限、技能經驗計算

```lua
-- 配置遊戲 - 技能欄熱鍵
-- A S H 被預設命令佔用建議不使用
Game():abilityHotkey({ KEYBOARD.Q, KEYBOARD.W, KEYBOARD.E, KEYBOARD.R, KEYBOARD.D, KEYBOARD.F, KEYBOARD.C, KEYBOARD.V })

Game():abilityUpgrade(99, 100, 1.00, 10000)
```

### 物品欄熱鍵、等級極限、技能經驗計算

```lua
-- 配置遊戲 - 物品欄熱鍵
-- 這裡使用魔獸的 78 45 12
Game():itemHotkey({ KEYBOARD.Numpad7, KEYBOARD.Numpad8, KEYBOARD.Numpad4, KEYBOARD.Numpad5, KEYBOARD.Numpad1, KEYBOARD.Numpad2 })

-- 技能升級極限以及經驗計算引數 max fixed ratio limit
Game():itemExp(99, 100, 1.00, 10000)
```

### 物品拾取模式

```lua
Game():itemPickMode(ITEM_PICK_MODE.itemOnly)
```

### 玩家倉庫上限

```lua
-- 配置遊戲 - 玩家倉庫
Game():warehouseSlot(18)
```
