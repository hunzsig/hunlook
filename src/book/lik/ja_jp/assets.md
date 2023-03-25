## assets資産

##### 計10種の資産

> 以下の说明も参考にできるassetsリストの下の実現
>
> 接尾辞が見つからなけれは小文字で、普通の下に説明を黙認大小写強制
>
> _assets シリーズの関数は地図の生成自動導入前には

* Font
  > 书体 フォーマットサポート：ttf
* Icon
  > アイコン フォーマットサポート：tga
* Loading
  > ロードマップ フォーマットサポート：tga
* Preview
  > プレビュー図 フォーマットサポート：tga
* Model
  > モデル フォーマットサポート：mdx
* Plugins
  > プラグイン フォーマットサポート：限定形式キット
* Selection
  > せんたく圏 フォーマットサポート：限定形式キット
* Sound
  > 音響効果 フォーマットサポート：mp3
* Textures
  > モデルマップ フォーマットサポート：blp
* UI
  > インタフェース フォーマットサポート：限定形式キット
* Speech(組み込みリソース)
  > 音声テンプレート サポート：origin

#### 使う Font(书体)

> リソースファイルは war3mapFont 格納されています

```lua
_assets_font("マイクロソフト・ブラック") --接尾辞名は省略可能
```

#### 使う Icon(アイコン)

> リソースファイルは war3mapIcon 格納されています

```lua
-- 原生魔獣のアイコンパスは前にコロンを付ける必要があります ":"
-- コード内で参照する別称を付けることができます
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon ディレクトリ下の直接相対パスでOK
_assets_icon("black") -- 例えばロード war3mapIcon\black.tga
_assets_icon("black","黒") --別名を付けることができ、その後もコードで参照することができます
```

scriptsでの使う

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黒") -- 別称のあるものは別称を用いる
```

#### 使う Loading(ロードマップ)

> リソースファイルは war3MapLoading 格納されています

```lua
_assets_loading("default") --接尾辞名は省略可能
```

#### 使う Preview(プレビュー図)

> リソースファイルは war3MapPreview 格納されています

```lua
_assets_preview("default") --接尾辞名は省略可能
```

#### 使う Model(モデル)

> リソースファイルは war3mapModel 格納されています
>
> war3mapModel内のモデルにマップがある場合は、war3mapTextures内に置く必要があります
>
> モデルマップパスは自分で修正してください
>
> war3mapTexturesにマップが存在する場合、モデルがロードされると必要なマップが自動的に取り込まれます
>
> 魔獣に Portrait が存在する場合、ファイル名は対応する本体モデル名に _Portrait
> 例えば、著者がPortrait.mdxを提供するhero.mdxのモデルがあります
> あなたはそれを hero_Portrait.mdx
>
> ディレクトリ内には2つのファイルがあります hero.mdx と hero _Portrait.mdx

```lua
-- war3mapModel ディレクトリ下の直接相対パスでOK
_assets_model("buff/ApaceGrowth")
_assets_model("slash/Red_swing")
_assets_model("buff/Echo","echo")
```

```lua
-- scriptsでの使う
AModel("buff/ApaceGrowth")
AModel("slash/Red_swing")
AModel("echo")
```

#### Pluginsプラグインを引用する

> リソースファイルはwar3mapPluginsに置かれます
>
> プラグインは一つのセットで自己完結しており、移植が容易です

```lua
_assets_plugins("Printer")
```

#### 使う Selection(せんたく圏)

> リソースファイルは war3mapSelection 格納されています
>
> 8セットを持参済み、デフォルトはCommon

```lua
_assets_selection("CorneredBox")
```

#### 使う Sound(音響効果)

> リソースファイルは war3mapSound 格納されています
>
> 音響効果は4種類に分けられる：vwp vcm v3d bgm

* vwp 武器キット、提供されたスペクトルを参考にして自分の
* vcm 距離に関係なく場所にバインドされていないインタフェースサウンド
* v3d 3Dサウンド、場所、単位、領域でバインドされたサウンド、距離遠近が音量に影響する
* bgm バックミュージック

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### 使う 模型贴图

> リソースファイルは war3mapTextures 格納されています
>
> war3mapModel と連動している必要があります。モデルのマッピングだけを指し、他のマッピングはここに置かないでください

#### 使う UI スイート

> リソースファイルは war3mapUI 格納されています
>
> UIキット（Kit）で使用されるリソースは他のディレクトリとは関係なく、UIキットは独自のものであり、移植に便利である
>
> プロジェクトグループは強力なUIスイートを無料で提供しています。そのフォーマットを参考にして、UIを作成してください（ビジネスでは自由に使用できません）

```lua
_assets_ui("lik_menu")
_assets_ui("lik_plate")
_assets_ui("lik_buff")
_assets_ui("lik_debug")
_assets_ui("lik_cursor") --ポインタセット
```

#### Speech 音声テンプレート

> 音声テンプレートは魔獣自身のリソース
>
> 単位TPL定義時に参照またはUnitオブジェクトを後で変更して使用する
>
> speech音声データはデフォルトで選択されており、独自に拡張可能

```lua
-- 聖騎士
_assets_speech(":HeroPaladin", "HeroPaladin")

-- 聖騎士（モデルアバターを有効にする）
_assets_speech(":HeroPaladin", "HeroPaladin", { "HeroPaladin" })

-- 聖騎士（72衝突を有効にする）
_assets_speech(":HeroPaladin", "HeroPaladin", nil, { 72 })

-- tplで使用
UnitTpl("HeroPaladin")
```
