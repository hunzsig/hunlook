### Native UI composition

```lua
-- Optional hide initialization native UI
Game():hideInterface(true)
```

### Unit level limit, skill experience calculation

```lua
-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game():unitExp(100, 100, 1.20, 1000000)
```

### Skill bar hotkey, level limit, skill experience calculation

```lua
-- Configure game - skill bar hotkey
-- A S H It is recommended not to use it if it is occupied by the default command
Game():abilityHotkey({ KEYBOARD.Q, KEYBOARD.W, KEYBOARD.E, KEYBOARD.R, KEYBOARD.D, KEYBOARD.F, KEYBOARD.C, KEYBOARD.V })

Game():abilityUpgrade(99, 100, 1.00, 10000)
```

### Item list hotkey, level limit, skill experience calculation

```lua
-- Configure Game - Item List Hotkey
-- Use War3: 78 45 12
Game():itemHotkey({ KEYBOARD.Numpad7, KEYBOARD.Numpad8, KEYBOARD.Numpad4, KEYBOARD.Numpad5, KEYBOARD.Numpad1, KEYBOARD.Numpad2 })

-- Skill upgrading limit and experience calculation parameters: max fixed ratio limit
Game():itemExp(99, 100, 1.00, 10000)
```

### Item Pickup Mode

```lua
Game():itemPickMode(ITEM_PICK_MODE.itemOnly)
```

### Upper limit of player warehouse

```lua
-- Configure Game - Player Warehouse
Game():warehouseSlot(18)
```
