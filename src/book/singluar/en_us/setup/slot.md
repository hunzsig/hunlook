### Unit level limit, skill experience calculation

```lua
-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game().unitExp(100, 100, 1.20, 1000000)
```

### Skill bar hotkey, level limit, skill experience calculation

```lua
-- Configure game - skill bar hotkey
-- A S H is occupied by the default command, not recommended
Game().abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game().abilityExp(99, 100, 1.00, 10000)
```

### Inventory hotkey, level limit, skill experience calculation

```lua
-- Configure game - item bar hotkey
-- The 78, 45 and 12 of Warcraft are used here
Game().itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game().itemExp(99, 100, 1.00, 10000)
```

### Player warehouse cap

```lua
-- Configure Game - Player Warehouse
Game().warehouseSlot(18)
```
