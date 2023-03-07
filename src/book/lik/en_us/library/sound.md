## Sound effect

> There are 4 kinds of sound effects:
>
> Vwp（weaponSound）、Vcm（broadcast）、V3d（3D）、Bgm（music）

* Native audio is not supported
* Only MP3 is supported
* Sound effect (V??) Recommendation: 48000hz 192K single
* Music(bgm) Recommendation：48000HZ 320K (wav->mp3)

### Vwp（weaponSound）

> Weapon sound is generally configured only in unit weapon sound
>
> It is used with war3mapsound/weapon Suite (generally, it does not need to be played manually)

```lua
-- Writing method of assets
_assets_sound("metal_bash_heavy", nil, "vwp")

--Playback of damagedArrived (display, no need to manage)
Vwp(sourceUnit, targetUnit)

-- Generally, only company attributes need to be configured
Unit():weaponSound("metal_bash_heavy")
```

### Vcm（broadcast）

> The broadcast sound effect is the most common sound effect. The buttons and clicks heard on the interface are VCM

```lua
-- Writing method of assets
_assets_sound("voice/clickhero/level_up", "lv", "vcm")

-- Play
Vcm("lv"):play() -- All players heard
-- Specify player usage
async.call(Player(1), function()
    Vcm("lv"):play()
end)
```

### V3d（3D）

> 3D sound effect is the sound effect bound to a certain place, which is characterized by the change of far and near volume

```lua
-- Writing method of assets
_assets_sound("voice/clickhero/level_up", "lv", "v3d")

-- Play
local v3d = V3d("lv")

v3d:xyz(0,0,0) -- Binding point
v3d:unit(bindUnit) -- Binding unit
v3d:Region(bindRegion) -- Binding Region

v3d:play() -- All players heard
-- Specify player usage
async.call(Player(1), function()
    v3d:play()
end)
```

### Bgm（music）

> BGM will be closely associated with the player object

```lua
-- Writing method of assets
_assets_sound("bgm/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")

-- General usage
Bgm():stop() -- Stop
Bgm():play("gbl") -- Play GBL music

-- Specify player usage
async.call(Player(1), function()
    Bgm():play("gbl")
end)
```

