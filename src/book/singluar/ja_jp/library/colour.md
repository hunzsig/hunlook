## Colour テキスト色

> フレームワークには、テキストの色を変更するためのライブラリが用意されています

#### hexメソッド、6ビット長カラーを使用

```lua
colour.hex("文字列", "FF0000")
```

#### hex派生方法

> 自分で持っている一般的な色の中には、自分で広げることもできます

```lua
--- ゴールド
colour.gold("文字列")

--- 純白
colour.white("文字列")

--- 純黒
colour.black("文字列")

--- うすはい
colour.grey("文字列")

--- ダークグレー
colour.greyDeep("文字列")

--- 明るい赤
colour.redLight("文字列")

--- 真っ赤
colour.red("文字列")

--- 浅緑
colour.greenLight("文字列")

--- 深緑
colour.green("文字列")

--- ライトイエロー
colour.yellowLight("文字列")

--- ブライトイエロー
colour.yellow("文字列")

--- オレンジ
colour.orangeLight("文字列")

--- オレンジ
colour.orange("文字列")

--- スカイブルー
colour.skyLight("文字列")

--- ブルー
colour.sky("文字列")

--- 浅海ブルー
colour.seaLight("文字列")

--- ディープマリンブルー
colour.sea("文字列")

--- 薄紫
colour.purpleLight("文字列")

--- 明るい紫
colour.purple("文字列")
```

#### format 方法＃ホウホウ＃

> 複雑なテキスト色処理に適用

```lua
-- 例
local txt = colour.format("%s 世界平和", colour.white, {
    { "80ff00", "永遠の" },
})

print(txt)
echo(txt)
```
