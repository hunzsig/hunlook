## Assets 資產

##### 共有 10 種資產

> 以下類別都可以參考assets目錄下的實現
>
> 字尾如找不到則必須小寫，下面說明一般都預設大小寫強制
>
> _assets 系列函式是在地圖生成前自動引入

* Font
  > 字型 格式支援：ttf
* Icon
  > 圖示 格式支援：tga
* Loading
  > 載入圖 格式支援：tga
* Preview
  > 預覽圖 格式支援：tga
* Model
  > 模型 格式支援：mdx
* Plugins
  > 插件 格式支持：限定形式套件
* Selection
  > 選擇圈 格式支援：限定形式套件
* Sound
  > 聲效 格式支援：mp3
* Textures
  > 模型貼圖 格式支援：blp
* UI
  > 介面 格式支援：限定形式套件
* Speech(內建資源)
  > 語音模版 只支援：origin

#### 引用 Font(字型)

> 資原始檔放在 war3mapFont 裡

```lua
_assets_font("微軟雅黑") --字尾可省略
```

#### 引用 Icon(圖示)

> 資原始檔放在 war3mapIcon 裡

```lua
-- 原生魔獸的圖示路徑需要在前面加一個冒號 ":"
-- 可以賦予一個別稱來在程式碼中引用
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon 目錄下的直接相對路徑就可以了
_assets_icon("black") -- 例如載入 war3mapIcon\black.tga
_assets_icon("black","黑") --可以賦予一個別稱，後續也能在程式碼中引用
```

scripts中引用

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黑") -- 有別稱的用別稱
```

#### 引用 Loading(載入圖)

> 資原始檔放在 war3MapLoading 裡

```lua
_assets_loading("default") --字尾可省略
```

#### 引用 Preview(預覽圖)

> 資原始檔放在 war3MapPreview 裡

```lua
_assets_preview("default") --字尾可省略
```

#### 引用 Model(模型)

> 資原始檔放在 war3mapModel 裡
>
> war3mapModel內的模型如果有貼圖，必須放在 war3mapTextures 內
>
> 請自行修改好模型貼圖路徑
>
> 當貼圖在 war3mapTextures 存在時，模型被載入時會自動引入需要的貼圖
>
> 如果魔獸存在 Portrait，檔名格式為在對應本體模型名字加 _Portrait，
> 例如你有個hero.mdx的模型，該模型作者提供了Portrait.mdx，
> 你應該將其命名為hero_Portrait.mdx
>
> 目錄內就有兩個檔案 hero.mdx 和 hero_Portrait.mdx

```lua
-- war3mapModel 目錄下的直接相對路徑就可以了
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

#### 引用 Plugins 插件

> 資源文件放在 war3mapPlugins 裏
>
> 插件是為一套件是自成一體的，便於移植

```lua
_assets_plugins("Printer")
```

#### 引用 Selection(選擇圈)

> 資原始檔放在 war3mapSelection 裡
>
> 已自帶提供8套，預設為Common

```lua
_assets_selection("CorneredBox")
```

#### 引用 Sound(聲效)

> 資原始檔放在 war3mapSound 裡
>
> 聲效分為4種：vwp vcm v3d bgm

* vwp 武器套件，參考提供的編譜你自己的
* vcm 介面音效，不以地點繫結的音效，與距離無關
* v3d 3D音效，以地點、單位、區域繫結的音效，距離遠近影響音量
* bgm 背景音樂

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### 引用 模型貼圖

> 資原始檔放在 war3mapTextures 裡
>
> 必須和 war3mapModel 聯動才有用，單指模型的貼圖，其他貼圖不要放這裡

#### 引用 UI 套件

> 資原始檔放在 war3mapUI 裡
>
> UI 套件（Kit）使用的資源與其他目錄無關，UI套件是自成一體的，便於移植
>
> 專案組已免費提供了很多強有力的 UI 套件，請參考它們的格式，編寫你的UI（不可隨意用於商用）

```lua
_assets_ui("lik_menu")
_assets_ui("lik_plate")
_assets_ui("lik_buff")
_assets_ui("lik_debug")
_assets_ui("lik_cursor") --指標置頂
```

#### Speech 語音模版

> 語音模版為魔獸自帶資源
>
> 在單位TPL定義時引用或Unit對象後續修改使用
>
> 已默認精選speech語音數據，可自行拓展

```lua
-- 聖騎士
_assets_speech(":HeroPaladin", "HeroPaladin")

-- 在tpl中使用
UnitTpl("HeroPaladin")
```

#### SpeechExtra 語音模版額外模組

> 你可以繼續為語音模版添加自定義模組

```lua
-- 聖騎士
_assets_speech(":HeroPaladin", "HeroPaladin", {
    avatar = _assets_speech_extra({ modelAlias = "HeroPaladin" }), -- 模型頭像模組
})

-- 在tpl中使用
UnitTpl("HeroPaladin"):speechExtra("avatar")

-- 在Unit中使用
(Unit):speechExtra("avatar")
```
