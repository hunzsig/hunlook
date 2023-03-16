## Toast information

#### A bubbling simple message prompt

#### It can be realized by itself instead of using

#### This UI does not need to be actively instantiated. The use method is as follows

```lua
--- In the game configuration, the FrameToastClass category of enableScreen must be enabled
Game():enableScreen(FrameToastClass, true)

--- In the unit TPL configuration, you need to configure toast data for it
--- A function that must return string
UnitTpl(''):toast(function(this) 
  return this:name() 
end)
```

#### In addition to Unit, Item also supports

```lua
(ItemTpl):toast ...
```
