## Special effects

#### Lightning effect

```lua
Lightning(LIGHTNING_TYPE.thunderRed, 0.3, source:x(), source:y(), source:h(), targer:x(), targer:y(), targer:h())
```

#### Point special effect

```lua
--- Water blasting lasting for 3 seconds
Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), 3)

--- Permanently delete
local e = Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), -1)
time.setTimeout(3, function()
    destroy(e)
end)

--- Create with unit as the core
(Unit):effect("NagaDeath", 3)
```

#### Attach special effects

```lua
--- Treatment lasting for 0.5 seconds, default -1
EffectAttach((Unit), "HealTarget2", "origin", 0.5)

--- Create with unit as the core
(Unit):attach("HealTarget2", "origin", 0.5)
```

#### Application in buff with special effects

> Sometimes special effects are attached for skill effects, but skill effects will be cleared halfway
>
> At this time, you can use the stateless call with attached special effects, and you don't need to manage the survival of special effects by yourself

```lua
--- attach, binding special effect
--- detach, unbinding special effect 
(Unit):buff("Flame Immunity")
    :signal(BUFF_SIGNAL.up)
    :icon("ability/FireMan")
    :description("In flame immunity")
    :duration(2)
    :purpose(function(buffObj)
        buffObj:attach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "+=1")
    end)
    :rollback(function(buffObj)
        buffObj:detach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "-=1")
    end)
    :run()
```
