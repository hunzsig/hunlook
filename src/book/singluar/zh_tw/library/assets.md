## Assets 資産

#### 共有 9 種資産

> 以下類別都可以參考assets目錄下的實現
>
> 後綴如找不到則必須小寫，下麵說明一般都默認大小寫強製
>
> _assets 係列函數是在地圖生成前自動引入

* Font
  > 字體 格式支持：ttf
* Icon
  > 圖標 格式支持：tga
* Loading
  > 載入圖 格式支持：tga
* Preview
  > 預覽圖 格式支持：tga
* Model
  > 模型 格式支持：mdx
* Selection
  > 選擇圈 格式支持：限定形式套件
* Sound
  > 聲效 格式支持：mp3
* Textures
  > 模型貼圖 格式支持：blp
* UI
  > 界麵 格式支持：限定形式套件

#### 引用 Font(字體)

> 資源文件放在 war3mapFont 裏

```lua
_assets_font("微軟雅黑") --後綴可省略
```

#### 引用 Icon(圖標)

> 資源文件放在 war3mapIcon 裏

```lua
-- 原生魔獸的圖標路徑需要在前麵加一個冒號 ":"
-- 可以賦予一個別稱來在代碼中引用
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon 目錄下的直接相對路徑就可以了
_assets_icon("black") -- 例如載入 war3mapIcon\black.tga
_assets_icon("black","黑") --可以賦予一個別稱，後續也能在代碼中引用
```

scripts中引用

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黑") -- 有別稱的用別稱
```

#### 引用 Loading(載入圖)

> 資源文件放在 war3MapLoading 裏

```lua
_assets_loading("default") --後綴可省略
```

#### 引用 Preview(預覽圖)

> 資源文件放在 war3MapPreview 裏

```lua
_assets_preview("default") --後綴可省略
```

#### 引用 Model(模型)

> 資源文件放在 war3mapModel 裏
>
> 模型有 3 種形態：| common | unit | item | destructable
>
> unit | item | destructable |的模型通用可以使用AModel獲取
>
> * 【單位】Unit對象隻能使用unit形態的模型
>
> * 【物品】Item對象隻能使用item形態的模型
>
> * 【可破壞物】Destructable對象隻能使用destructable形態的模型

```lua
-- 綿羊（這個是unit形態，由於是原生路徑，所以冒號別忘了）
-- 單位形態可以配置options，使模型參數更具體
-- options內可以配置Art（類似slk）這個圖標也會自動引用Icon
_assets_model(":units\\critters\\Sheep\\Sheep", "Sheep", "unit", {
    Art = ":ReplaceableTextures\\CommandButtons\\BTNSheep.blp",
    unitSound = "Sheep", scale = 1.20,
})

-- 牢籠
_assets_model(":Doodads\\LordaeronSummer\\Props\\Cage\\Cage", "Cage", "destructable")
```

> war3mapModel內的模型如果有貼圖，必須放在 war3mapTextures 內
>
> 請自行修改好模型貼圖路徑
>
> 當貼圖在 war3mapTextures 存在時，模型被加載時會自動引入需要的貼圖
>
> 如果魔獸存在 Portrait，文件名格式為在對應本體模型名字加 _Portrait，
> 例如你有個hero.mdx的模型，該模型作者提供了Portrait.mdx，
> 你應該將其命名為hero_Portrait.mdx
>
> 目錄內就有兩個文件 hero.mdx 和 hero_Portrait.mdx

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

#### 引用 Selection(選擇圈)

> 資源文件放在 war3mapSelection 裏
>
> 已自帶提供8套，默認為Common

```lua
_assets_selection("CorneredBox")
```

#### 引用 Sound(聲效)

> 資源文件放在 war3mapSound 裏
>
> 聲效分為4種：vwp vcm v3d bgm

* vwp 武器套件，參考提供的編譜你自己的
* vcm 界麵音效，不以地點綁定的音效，與距離無關
* v3d 3D音效，以地點、單位、區域綁定的音效，距離遠近影響音量
* bgm 背景音樂

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### 引用 模型貼圖

> 資源文件放在 war3mapTextures 裏
>
> 必須和 war3mapModel 聯動才有用，單指模型的貼圖，其他貼圖不要放這裏

#### 引用 UI 套件

> 資源文件放在 war3mapUI 裏
>
> UI 套件（Kit）使用的資源與其他目錄無關，UI套件是自成一體的，便於移植
>
> 項目組已免費提供了很多強有力的 UI 套件，請參考它們的格式，編寫你的UI（不可隨意用於商用）

```lua
_assets_ui("singluar_debug")
_assets_ui("singluar_echo")
_assets_ui("singluar_chat")
_assets_ui("singluar_set")
_assets_ui("singluar_cursor") --指針置頂
```
