## Assets 資産

#### 9種類の資産

>以下のカテゴリはassetsディレクトリの実装を参照できます
>
>接尾辞が見つからない場合は小文字でなければなりません。以下の説明は一般的にデフォルトの大文字と小文字の強制です
>
> _Masssetsシリーズ関数は地図生成前に自動的に導入される

* Font
  > フォントフォーマットのサポート：ttf
* Icon
  > アイコンフォーマットのサポート：tga
* Loading
  > ロードマップフォーマットのサポート：tga
* Preview
  > プレビュー図フォーマットのサポート：tga
* Model
  > モデルフォーマットのサポート：mdx
* Selection
  > 選択円フォーマットのサポート：限定形式キット
* Sound
  > 音響効果フォーマットのサポート：mp3
* Textures
  > モデルマップフォーマットのサポート：blp
* UI
  > インタフェースフォーマットのサポート：限定フォームキット

#### 参照Font（フォント）

> リソースファイルはwar3mapFontに格納されています

```lua
_assets_font("微软雅黑") --接尾辞は省略可能
```

#### 引用 Icon(アイコン)

> リソースファイルはwar3mapiconに格納されています

```lua
--原生魔獣のアイコンパスには、前にコロン「:」を付ける必要があります。
--コード内で参照する別称を付けることができます
_assets_icon(":ReplaceableTextures\\CommandButtons\\BTNSheep.blp", "Sheep")

-- war3mapIcon ディレクトリ下の直接相対パスでOK
_assets_icon("black") -- 例えばロード war3mapIcon\black.tga
_assets_icon("black","黑") --別名を付けることができ、その後もコードで参照することができます
```

scripts中引用

```lua
AIcon("Sheep")
AIcon("black")
AIcon("黑") -- 別称のあるものは別称を用いる
```

#### Loadingを参照（ロード図）

> リソースファイルはwar3MapLoadingに格納されています

```lua
_assets_loading("default") --接尾辞は省略可能
```

#### 参照Preview（プレビュー図）

> リソースファイルはwar3MapPreviewに格納されています

```lua
_assets_preview("default") --接尾辞は省略可能
```

#### 参照モデル

> リソースファイルはwar3mapModelに格納されています
>
> モデルには3つの形態があります。｜common｜unit｜item｜destructable
>
> unit｜item｜destructable｜のモデル共通AModelを使用して取得できます
>
> * 【単位】Unitオブジェクトはunit形態のモデルしか使用できない
>
> * 【物品】Itemオブジェクトはitem形態のモデルしか使用できない
>
> * 【破壊可能】Destructableオブジェクトはdestructable形式のモデルのみを使用できます

```lua
--ヒツジ（これはunit形態で、原生経路なのでコロンは忘れないで）
--単位形態はモデルパラメータをより具体的にするためにoptionsを設定することができます
--options内でArt（slkのようなもの）を設定できるアイコンもIconを自動的に参照します
_assets_model(":units\\critters\\Sheep\\Sheep", "Sheep", "unit", {
    Art = ":ReplaceableTextures\\CommandButtons\\BTNSheep.blp",
    unitSound = "Sheep", scale = 1.20,
})

-- かご
_assets_model(":Doodads\\LordaeronSummer\\Props\\Cage\\Cage", "Cage", "destructable")
```

>war 3 mapModel内のモデルマップがある場合は、war 3 mapTextures内に置く必要があります
>
>モデルマップパスを自分で修正してください
>
>war 3 mapTexturesにマップが存在する場合、モデルがロードされると必要なマップが自動的に導入されます
>
>魔獣にPortraitが存在する場合、ファイル名は対応する本体モデル名に_Portrait，
>たとえば、Portrait.mdxを提供するhero.mdxのモデルがあります。
>hero _Portrait.mdx
>
>ディレクトリ内に2つのファイルがありますhero.mdxとhero _Portrait.mdx

```lua
-- war3mapModel ディレクトリ下の直接相対パスでOK
_assets_model("buff/ApaceGrowth")
_assets_model("slash/Red_swing")
_assets_model("buff/Echo","echo")
```

```lua
-- scriptsでの参照
AModel("buff/ApaceGrowth")
AModel("slash/Red_swing")
AModel("echo")
```

#### 参照＃サンショウ＃ Selection(選択リング)

>リソースファイルをwar3mapSelectionに入れる
>
>は8セットを持参しており、デフォルトではCommon

```lua
_assets_selection("CorneredBox")
```

#### 参照Sound（音響効果）

>リソースファイルをwar 3 mapSoundに入れる
>
>音響効果には4種類があります：vwp vcm v 3 d bgm

* vwp武器キット、提供されたスペクトルを参考にして自分の
* 距離に関係なく場所にバインドされていないvcmインタフェースサウンド
* v3d3Dサウンド、場所、単位、領域でバインドされたサウンド、距離遠近で音量に影響
* bgm BGM

```lua
_assets_sound("metal_bash_heavy", nil, "vwp")
_assets_sound("voice/clickhero/level_up", "lv", "v3d")
_assets_sound("voice/action/打鼓", "drum", "v3d")
_assets_sound("bgm/dnf/Dungeon and Fighter - GBL女神殿 - goddess temple", "gbl", "bgm")
```

#### 参照モデルマップ

>リソースファイルをwar 3 mapTexturesに保存
>
>war 3 mapModelと連動しなければ使用できません。モデルのマップだけを指し、他のマップはここに置かないでください

#### UIスイートの参照

>リソースファイルはwar 3 mapUIに格納されています
>
>UIキット（Kit）が使用するリソースは、他のディレクトリとは関係なく、UIキットは独自のものであり、移植に便利である
>
>プロジェクトチームは強力なUIスイートを無料で提供しています。そのフォーマットを参考にして、UIを作成してください（ビジネスでは自由に使用できません）

```lua
_assets_ui("singluar_debug")
_assets_ui("singluar_echo")
_assets_ui("singluar_chat")
_assets_ui("singluar_set")
_assets_ui("singluar_cursor") --ポインタセット
```
