## Sound 聲效

> 聲效分為 4 種：
>
> Vwp（武器音）、Vcm（廣播音效）、V3d（3D音效）、Bgm（背景音樂）

* 不支援原生音訊！
* 只支援mp3
* 音效(v??)薦：48000HZ 192K 單
* 音樂(bgm)薦：48000HZ 320K (wav->mp3)

### Vwp（武器音）

> 武器音一般只在Unit武器聲音配置
>
> 和 war3mapSound/weapon 套件配套使用（一般不需要手動播放）

```lua
-- assets的寫法
_assets_sound("metal_bash_heavy", nil, "vwp")

-- damagedArrived的播放（展示，不需要管）
Vwp(sourceUnit, targetUnit)

-- 一般只需要配置單位屬性
Unit():weaponSound("metal_bash_heavy")
```

### Vcm（廣播音效）

> 廣播音效是最普通的音效，平常介面聽到的按鈕點選等都是Vcm

```lua
-- assets的寫法
_assets_sound("voice/clickhero/level_up", "lv", "vcm")

-- 播放程式碼
Vcm("lv"):play() -- 全部玩家聽到
-- 指定玩家用法
async.call(Player(1), function()
    Vcm("lv"):play()
end)
```

### V3d（3D音效）

> 3D音效就是繫結某個地方的音效，特點是遠近的音量會隨之改變

```lua
-- assets的寫法
_assets_sound("voice/clickhero/level_up", "lv", "v3d")

-- 播放程式碼
local v3d = V3d("lv")

v3d:xyz(0,0,0) -- 繫結點
v3d:unit(bindUnit) -- 繫結單位
v3d:Region(bindRect) -- 繫結區域

v3d:play() -- 全部玩家聽到
-- 指定玩家用法
async.call(Player(1), function()
    v3d:play()
end)
```

### Bgm（背景音樂）

> Bgm會與Player物件緊密連繫

```lua
-- assets的寫法
_assets_sound("bgm/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")

-- 全體用法
Bgm():stop() -- 停止
Bgm():play("gbl") -- 播放gbl音樂

-- 指定玩家用法
async.call(Player(1), function()
    Bgm():play("gbl")
end)
```

