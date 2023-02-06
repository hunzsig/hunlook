### 監聽器

```lua
--- 恢複生命監聽器
---@param obj Unit
monitor.create("monitor-life_back", 0.4,
    function(obj) obj.hpCur("+=" .. 0.4 * obj.hpRegen()) end,
    function(obj) return obj.isDead() or obj.hpRegen() == nil or obj.hpRegen() == 0 end
)

--- 恢複魔法監聽器
---@param obj Unit
monitor.create("monitor-mana_back", 0.5,
    function(obj) obj.mpCur("+=" .. 0.5 * obj.mpRegen()) end,
    function(obj) return obj.isDead() or obj.mpRegen() == nil or obj.mpRegen() == 0 end
)

--- 硬直監聽器
---@param obj Unit
monitor.create("monitor-punish_back", 1,
    function(obj) obj.punishCur("+=" .. obj.punishRegen()) end,
    function(obj) return obj.isDead() or obj.punishRegen() == nil or obj.punishRegen() == 0 end
)
```
