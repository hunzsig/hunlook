## Assets

#### There are 10 kinds of assets in total

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
* Plugins
  > Plugins - Only：Limited form Kit
* Selection
  > Selection - Only：Limited form Kit
* Sound
  > Sound - Only：mp3
* Textures
  > Model Textures - Only：blp
* UI
  > UIKit - Only：Limited form Kit
* Speech(Inner Source)
  > Voice Speech - Only origin

#### Reference Font

> Resource files are placed in war3mapFont

```lua
_assets_font("Microsoft Yahei") --Suffix can be omitted
```

#### Reference Icon

> Resource files are placed in war3mapIcon

```lua
--The icon path of native Warcraft needs to be preceded by a colon ":"
--You can assign a nickname to reference in code
_ assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

--The direct relative path under the war3mapIcon directory is OK
_ assets_icon("black") -- for example, loading war3mapIcon black.tga
_ assets_icon("black", "blackAlias") -- can be given a nickname, and can be referenced in the code later
```

References in scripts

```lua
AIcon("Sheep")
AIcon("black")
AIcon("blackAlias") -- Use a nickname if you have one
```

#### Reference Loading

> Resource files are placed in war3MapLoading

```lua
_assets_loading("default") --Suffix can be omitted
```

#### Reference Preview

> Resource files are placed in war3MapPreview

```lua
_assets_preview("default") --Suffix can be omitted
```

#### Reference Model

> Resource files are placed in war3mapModel
>
> If the model in war3mapModel has a map, it must be placed in war3mapTextures
>
> Please modify the model map path by yourself
>
> When maps exist in war3mapTextures, the required maps will be automatically introduced when the model is loaded
>
> If there is a portlet in Warcraft, the file name format is added to the name of the corresponding ontology model + _
> Portrait，
> For example, you have a model of hero.mdx, and the author of the model provides portrait.mdx,
> You should name it hero_Portrait.mdx
>
> There are two files in the directory hero.mdx and hero_Portrait.mdx

```lua
-- war3mapModel The direct relative path under the directory is OK
_assets_model("buff/ApaceGrowth")
_assets_model("slash/Red_swing")
_assets_model("buff/Echo","echo")
```

```lua
-- references in scripts
AModel("buff/ApaceGrowth")
AModel("slash/Red_swing")
AModel("echo")
```

#### Reference Plugins

> Resource files are placed in war3mapPlugins
>
> Plugins are self-contained and easy to port

```lua
_assets_plugins("Printer")
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
> The resources used by the UI kit are independent of other directories. The UI kit is self-contained and easy to
> migrate
>
> The project team has provided many powerful UI Suites for free. Please refer to their formats and write your UI (not
> for commercial use at will)

```lua
_assets_ui("lik_menu")
_assets_ui("lik_plate")
_assets_ui("lik_buff")
_assets_ui("lik_debug")
_assets_ui("lik_cursor") --Pointer on top
```

#### Speech Voice template

> The voice template is the own resource of Warcraft
>
> Referenced when defining the unit TPL or used by subsequent modification of the Unit object
>
> Speech voice data has been selected by default and can be expanded by itself

```lua
-- Paladin
_assets_speech(":HeroPaladin", "HeroPaladin")

-- in Tpl
UnitTpl("HeroPaladin")
```

#### Speech Extra Module

> You can continue to add custom modules for the voice template

```lua
-- Paladin
_assets_speech(":HeroPaladin", "HeroPaladin", {
    avatar = _assets_speech_extra({ modelAlias = "HeroPaladin" }), -- Avatar Module
})

-- in Tpl
UnitTpl("HeroPaladin"):speechExtra("avatar")

-- in Unit
(Unit):speechExtra("avatar")
```
