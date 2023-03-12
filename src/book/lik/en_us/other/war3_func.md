## The similarities and differences of Warcraft functions

Generally speaking, the functions of Warcraft can be divided into synchronous execution functions and asynchronous
execution functions

For example, Japi's UI, sound, mask texture, etc., a few are asynchronous execution functions

And creating units, damage targets, moving items, etc., most of them are synchronous execution functions

> Subsequent code informal execution code, only for structural demonstration

### Execute function asynchronously

Asynchronous execution of the function does not require the support of the environment. When your environment is
synchronous, the function is valid for all players, and when the environment is asynchronous, it is valid for specific
players

```lua
-- Asynchronous execution functions that allow asynchronous data
japi.FrameSetTexture() -- YES
async.call(Player(1),function()
    japi.FrameSetTexture() -- YES
end)
```

### Execute function synchronously

The synchronous execution function requires the blessing of the environment, you must pay attention that the environment
is in a synchronous state, and the effect is valid for all players

```lua
-- Synchronous execution functions that must synchronize data
J.CreateUnit() -- YES
async.call(Player(1),function()
    J.CreateUnit() -- NO
end)
```

> However, there is also a special function series in Warcraft

### Allows synchronous execution of functions for asynchronous data

You must pay attention to this kind of function that the environment is in a synchronized state before it can be
executed! But its data can be asynchronous, that is, each player is inconsistent

```lua
-- Allow synchronous execution of functions with asynchronous data
local z = 100
async.call(Player(1),function()
    z = 996
end)
japi.EXSetEffectXY(e, z) -- YES,But player 1 is 996 high
async.call(Player(1),function()
    japi.EXSetEffectXY(e, z) -- NO
end
```
