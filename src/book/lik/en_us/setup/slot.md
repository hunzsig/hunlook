### Unit level limit, skill experience calculation

```lua
-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game():unitExp(100, 100, 1.20, 1000000)
```

### Skill bar hotkey, level limit, skill experience calculation

```lua
-- Configure game - skill bar hotkey
-- A S H It is recommended not to use it if it is occupied by the default command
Game():abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

Game():abilityUpgrade(99, 100, 1.00, 10000)
```

### Item list hotkey, level limit, skill experience calculation

```lua
-- Configure Game - Item List Hotkey
-- Use War3: 78 45 12
Game():itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game():itemExp(99, 100, 1.00, 10000)
```

### Upper limit of player warehouse

```lua
-- Configure Game - Player Warehouse
Game():warehouseSlot(18)
```
