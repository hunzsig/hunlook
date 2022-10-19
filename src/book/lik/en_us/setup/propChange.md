### Parameter monitoring

> You can preset the trigger mechanism when any parameter changes

#### Any monitoring range

```lua
-- Any synchronous monitoring range
event._prop_std = "any"

-- Any asynchronous listening range
event._prop_dyn = "any"
```

#### Only three key changes can be monitored asynchronously

> It is valid only when it is set to true and can be used as a temporary change

```lua
event._prop_dyn = {
    attack = true,
    defend = true,
    crit = false,
}
```

#### Use of listening events

> This event will not be triggered when the number data has not changed

```lua
---@param evtData noteOnPropPlayer
event.reaction(EVENT.Prop.Change, "myChange", function(evtData)
    if (isClass(evtData.triggerObject, UnitClass)) then
        if (evtData.key == "attack") then
            print("Attack changed")
        end
    end
end)
```
