## Status bar

#### Self-contained four modes status indicator bar, commonly used for unit blood bar

#### If there is need for adjustment, it can be realized by itself instead of using

#### This UI does not need to be used actively. The use method is as follows

```lua
--- In the game configuration, the FrameBarStateClass class of enableScreen must be enabled
Game():enableScreen(FrameBarStateClass, true)

--- In the unit TPL configuration, it is necessary to configure the mode of status bar and other conditions
--- The default is false, and false is only displayed when the unit is injured
--- It is not recommended to fully open
(Unit):barStateAlways(true)

--- Preset (1) 1 simple mode 2 left mode 3 right mode 4 upper mode
(Unit):barStateMode(1)

--- Custom marker line spacing (preset 0, invalid)
--- The minimum value is 100. If the value is not 100, the floor shall be used
(Unit):barStateMarker(1000)
```
