### モニター監視

```lua
--- HP 監視
---@param obj Unit
Monitor("life_back")
    :frequency(0.1)
    :actionFunc(function(obj) obj.hpCur("+=" .. 0.1 * obj.hpRegen()) end)
    :ignoreFilter(function(obj) return obj:isDead() or obj.hpRegen() == nil or obj.hpRegen() == 0 end)

--- MP 監視
---@param obj Unit
Monitor("mana_back")
    :frequency(0.1)
    :actionFunc(function(obj) obj.mpCur("+=" .. 0.1 * obj.mpRegen()) end)
    :ignoreFilter(function(obj) return obj:isDead() or obj.mpRegen() == nil or obj.mpRegen() == 0 end)

--- PP 監視
---@param obj Unit
Monitor("punish_back")
    :frequency(1)
    :actionFunc(function(obj) obj.punishCur("+=" .. obj.punishRegen()) end)
    :ignoreFilter(function(obj) return obj:isDead() or obj.punishRegen() == nil or obj.punishRegen() == 0 end)
```
