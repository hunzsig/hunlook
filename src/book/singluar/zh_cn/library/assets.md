## Assets 资产

> 用过 h-lua 的都知道有个 hslk，本框架已基本废除改为assets管理
>
> 如果你很熟悉hslk，也许你很快也能掌握
>
> 假如实在没法掌握assets，此处建议直接放弃此框架

### 共有 9 种资产

> 以下类别都可以参考assets目录下的实现
>
> 后缀如找不到则必须小写，下面说明一般都默认大小写强制
>
> _assets 系列函数是在地图生成前自动引入

* Font
  > 字体 格式支持：ttf
* Icon
  > 图标 格式支持：tga
* Loading
  > 载入图 格式支持：tga
* Preview
  > 预览图 格式支持：tga
* Model
  > 模型 格式支持：mdx
* Selection
  > 选择圈 格式支持：限定形式套件
* Sound
  > 声效 格式支持：mp3
* Textures
  > 模型贴图 格式支持：blp
* UI
  > 界面 格式支持：限定形式套件

#### 引用 Font(字体)

> 资源文件放在 war3mapFont 里

```lua
_assets_font("微软雅黑") --后缀可省略
```

#### 引用 Icon(图标)

> 资源文件放在 war3mapIcon 里

```lua
-- 原生魔兽的图标路径需要在前面加一个冒号 ":"
-- 可以赋予一个别称来在代码中引用
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon 目录下的直接相对路径就可以了
_assets_icon("black") -- 例如载入 war3mapIcon\black.tga
_assets_icon("black","黑") --可以赋予一个别称，后续也能在代码中引用
```

scripts中引用

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黑") -- 有别称的用别称
```

#### 引用 Loading(载入图)

> 资源文件放在 war3MapLoading 里

```lua
_assets_loading("default") --后缀可省略
```

#### 引用 Preview(预览图)

> 资源文件放在 war3MapPreview 里

```lua
_assets_preview("default") --后缀可省略
```

#### 引用 Model(模型)

> 资源文件放在 war3mapModel 里
>
> 模型有 3 种形态：| common | unit | item | destructable
>
> unit | item | destructable |的模型通用可以使用AModel获取
>
> * 【单位】Unit对象只能使用unit形态的模型
>
> * 【物品】Item对象只能使用item形态的模型
>
> * 【可破坏物】Destructable对象只能使用destructable形态的模型

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

> war3mapModel内的模型如果有贴图，必须放在 war3mapTextures 内
>
> 请自行修改好模型贴图路径
>
> 当贴图在 war3mapTextures 存在时，模型被加载时会自动引入需要的贴图
>
> 如果魔兽存在 Portrait，文件名格式为在对应本体模型名字加 _Portrait，
> 例如你有个hero.mdx的模型，该模型作者提供了Portrait.mdx，
> 你应该将其命名为hero_Portrait.mdx
>
> 目录内就有两个文件 hero.mdx 和 hero_Portrait.mdx

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

#### 引用 Selection(选择圈)

> 资源文件放在 war3mapSelection 里
>
> 以自带提供8套，默认为Common

```lua
_assets_selection("CorneredBox")
```

#### 引用 Sound(声效)

> 资源文件放在 war3mapSound 里
>
> 声效分为4种：vwp vcm v3d bgm

* vwp 武器套件，参考提供的编谱你自己的
* vcm 界面音效，不以地点绑定的音效，与距离无关
* v3d 3D音效，以地点、单位、区域绑定的音效，距离远近影响音量
* bgm 背景音乐

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### 引用 模型贴图

> 资源文件放在 war3mapTextures 里
>
> 必须和 war3mapModel 联动才有用，单指模型的贴图，其他贴图不要放这里

#### 引用 UI 套件

> 资源文件放在 war3mapUI 里
>
> UI 套件（Kit）使用的资源与其他目录无关，UI套件是自成一体的，便于移植
>
> 项目组已免费提供了很多强有力的 UI 套件，请参考它们的格式，编写你的UI（不可随意用于商用）

```lua
_assets_ui("singluar_debug")
_assets_ui("singluar_echo")
_assets_ui("singluar_chat")
_assets_ui("singluar_set")
_assets_ui("singluar_cursor") --指针置顶
```
