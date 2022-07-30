## Assets

> Anyone who has used h-lua knows that there is an hslk. This framework has been basically abolished and changed to
> assets management
>
> If you are familiar with hslk, maybe you can master it soon
>
> If you really can't master assets, it is suggested to abandon this framework directly

### There are 9 kinds of assets in total

> The following categories can refer to the implementation under the assets directory
>
> If the suffix cannot be found, it must be lowercase. The following description generally defaults to case enforcement
>
> _assets series functions are automatically introduced before map generation

* Font
  > Font - Only: ttf
* Icon
  > Icon - Only：tga
* Loading
  > Loading - Only：tga
* Preview
  > Preview - Only：tga
* Model
  > Model - Only：mdx
* Selection
  > Selection - Only：Limited form Kit
* Sound
  > Sound - Only：mp3
* Textures
  > Model Textures - Only：blp
* UI
  > UIKit - Only：Limited form Kit

#### Reference Font

> Resource files are placed in war3mapFont

```lua
_assets_font("微软雅黑") --后缀可省略
```

#### Reference Icon

> Resource files are placed in war3mapIcon

```lua
-- 原生魔兽的图标路径需要在前面加一个冒号 ":"
-- 可以赋予一个别称来在代码中引用
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon 目录下的直接相对路径就可以了
_assets_icon("black") -- 例如载入 war3mapIcon\black.tga
_assets_icon("black","黑") --可以赋予一个别称，后续也能在代码中引用
```

References in scripts

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黑") -- 有别称的用别称
```

#### Reference Loading

> Resource files are placed in war3MapLoading

```lua
_assets_loading("default") --后缀可省略
```

#### Reference Preview

> Resource files are placed in war3MapPreview

```lua
_assets_preview("default") --后缀可省略
```

#### Reference Model

> Resource files are placed in war3mapModel
>
> The model has three forms：| common | unit | item | destructable
>
> unit | item | destructable |can be obtained by Amodel
>
> * 【unit】Unit object can only use the model in the form of unit
>
> * 【item】Item objects can only use models in item form
>
> * 【destructable】Destructible objects can only use destructible models

```lua
-- 绵羊（这个是unit形态，由于是原生路径，所以冒号别忘了）
-- 单位形态可以配置options，使模型参数更具体
-- options内可以配置Art（类似slk）这个图标也会自动引用Icon
_assets_model(":units\\critters\\Sheep\\Sheep", "Sheep", "unit", {
    Art = ":ReplaceableTextures\\CommandButtons\\BTNSheep.blp",
    unitSound = "Sheep", scale = 1.20,
})

-- 牢笼
_assets_model(":Doodads\\LordaeronSummer\\Props\\Cage\\Cage", "Cage", "destructable")
```

> If the model in war3mapModel has maps, it must be placed in war3mapTextures
>
> Please modify the model map path by yourself
>
> When the map exists in war3mapTextures, the required map will be automatically introduced when the model is loaded
>
> If there is a portlet in Warcraft, the file name format is added to the name of the corresponding ontology model + _Portrait，
> For example, you have a model of hero.mdx, and the author of the model provides portrait.mdx,
> You should name it hero_Portrait.mdx
>
> There are two files in the directory hero.mdx and hero_Portrait.mdx

```lua
-- war3mapModel 目录下的直接相对路径就可以了
_assets_model("buff/ApaceGrowth")
_assets_model("slash/Red_swing")
_assets_model("buff/Echo","echo")
```

```lua
-- scripts中引用
AModel("buff/ApaceGrowth")
AModel("slash/Red_swing")
AModel("echo")
```

#### Reference Selection

> Resource files are placed in war3mapSelection
>
> 8 sets have been provided, and the default is common

```lua
_assets_selection("CorneredBox")
```

#### Reference Sound

> Resource files are placed in war3mapSound
>
> There are four kinds of sound effects：vwp vcm v3d bgm

* vwp - Weapon kit, refer to the provided compilation of your own
* vcm - Interface sound effect, which is not bound by location, has nothing to do with distance
* v3d - 3D sound effects, sound effects bound by place, unit and area, and the distance affects the volume
* bgm - background music

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### Reference Model

> Resource files are placed in war3mapTextures
>
> It is only useful if it is linked with war3mapmodel. It only refers to the map of the model. Don't put other maps here

#### Reference UI Kits

> Resource files are placed in war3mapUI
>
> The resources used by the UI kit are independent of other directories. The UI kit is self-contained and easy to migrate
>
> The project team has provided many powerful UI Suites for free. Please refer to their formats and write your UI (not for commercial use at will)

```lua
_assets_ui("singluar_debug")
_assets_ui("singluar_echo")
_assets_ui("singluar_chat")
_assets_ui("singluar_set")
_assets_ui("singluar_cursor") --Pointer on top
```
