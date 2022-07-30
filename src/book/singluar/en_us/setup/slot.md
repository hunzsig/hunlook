### Unit level limit, skill experience calculation

```lua
-- 技能升级极限以及经验计算参数 max fixed ratio limit
Game().unitExp(100, 100, 1.20, 1000000)
```

### Skill bar hotkey, level limit, skill experience calculation

```lua
-- 配置游戏 - 技能栏热键
-- A S H 被默认命令占用建议不使用
Game().abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

-- 技能升级极限以及经验计算参数 max fixed ratio limit
Game().abilityExp(99, 100, 1.00, 10000)
```

### Inventory hotkey, level limit, skill experience calculation

```lua
-- 配置游戏 - 物品栏热键
-- 这里使用魔兽的 78 45 12
Game().itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- 技能升级极限以及经验计算参数 max fixed ratio limit
Game().itemExp(99, 100, 1.00, 10000)
```

### Player warehouse cap

```lua
-- 配置游戏 - 玩家仓库
Game().warehouseSlot(18)
```
