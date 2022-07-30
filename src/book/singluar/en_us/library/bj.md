## BJ (Blizzard Jass)

### Because BJ is redundant in nature, ydlua engine comes with theout BJ.

> Why is BJ redundant?
>
> Because BJ is essentially the encapsulation of CJ, writing Lua can encapsulate what you need without using it.
>
> Simply put, you don't need it to help you package

For example, let's look at a blizzard BJ package (set the life cycle of the unit)

```jass
UnitApplyTimedLifeBJ( 60, 'BTLF', GetTriggerUnit() )
```

So what does this BJ actually correspond to CJ?

> Press F4 to trigger the editor, turn t into jass custom text, press and hold Ctrl and click the function name to view
> the function details of we

```jass
function UnitApplyTimedLifeBJ takes real duration, integer buffId, unit whichUnit returns nothing
    call UnitApplyTimedLife(whichUnit, buffId, duration)
endfunction
```

It can be seen that Blizzard BJ packages are mostly such meaningless packages with different positions

If you are writing code in other languages (such as Lua) and need encapsulation, it's OK. Such encapsulation is meaningless in jass

So it is generally believed that BJ is useless in terms of custom code

```jass
UnitApplyTimedLife(whichUnit, buffId, duration)
```

So some BJ functions are useful, so what should we do? Believe that smart you already understand

Yes, just like above. Just look at how its BJ is written, and then write your own code style encapsulation

For example, the BJ method of players choosing units

> BJ function is not the name with BJ. BJ function displays the red name in we

```
SelectUnitForPlayerSingle( GetTriggerUnit(), Player(0) )

// Its essence
function SelectUnitForPlayerSingle takes unit whichUnit, player whichPlayer returns nothing
    if (GetLocalPlayer() == whichPlayer) then
        // Use only local code (no net traffic) within this block to avoid desyncs.
        call ClearSelection()
        call SelectUnit(whichUnit, true)
    endif
endfunction
```

Then you can write this in Lua

```lua
if (J.GetLocalPlayer() == whichPlayer) then
    J.ClearSelection()
    J.SelectUnit(whichUnit, true)
end
```


