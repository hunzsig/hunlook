## Sound 音響

> 音響効果は4種類に分けられる：
>
> Vwp（武器音）、Vcm（ラジオサウンド）、V 3 d（3 Dサウンド）、Bgm（BGM）

* ネイティブオーディオはサポートされていません！
* mp 3のみサポート
* サウンド（v？？）リファレンス：48000 HZ 192 Kシングル
* 音楽（bgm）リファレンス：48000 HZ 320 K（wav->mp 3）

### Vwp（武器音）

> 武器音は一般的にユニット武器音のみに配置されている
>
> war3mapSound/weapon キットと組み合わせて使用します（通常は手動再生は必要ありません）

```lua
-- assetsの書き方
_assets_sound("metal_bash_heavy", nil, "vwp")

-- damagedArrivedの再生（展示、管理不要）
Vwp(sourceUnit, targetUnit)

-- 一般的には単位属性のみを構成する必要があります
Unit():weaponSound("metal_bash_heavy")
```

### Vcm（ラジオサウンド）

> ラジオサウンドは最も一般的なサウンドであり、通常のインタフェースで聞こえるボタンクリックなどはVcm

```lua
-- assetsの書き方
_assets_sound("voice/clickhero/level_up", "lv", "vcm")

-- 再生コード
Vcm("lv"):play() -- 全プレイヤーが聞く
-- プレイヤー使用法の指定
async.call(Player(1), function()
    Vcm("lv"):play()
end)
```

### V3d（3Dサウンドエフェクト）

> 3Dサウンドとは、どこかをバインドするサウンドのことで、遠近の音量が変わるのが特徴です

```lua
-- assetsの書き方
_assets_sound("voice/clickhero/level_up", "lv", "v3d")

-- 再生コード
local v3d = V3d("lv")

v3d:xyz(0,0,0) -- バインドポイント
v3d:unit(bindUnit) -- バインド単位
v3d:Region(bindRegion) -- バインド領域

v3d:play() -- 全プレイヤーが聞く
-- プレイヤー使用法の指定
async.call(Player(1), function()
    v3d:play()
end)
```

### Bgm（バックミュージック）

> BgmはPlayerオブジェクトと密接に関連しています

```lua
-- assetsの書き方
_assets_sound("bgm/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")

-- 全体的な使い方
Bgm():stop() -- ストップ
Bgm():play("gbl") -- gbl音楽を再生

-- プレイヤー使用法の指定
async.call(Player(1), function()
    Bgm():play("gbl")
end)
```

