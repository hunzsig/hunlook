## Colour テキスト色

> フレームワークには、テキストの色を変更するためのライブラリが用意されています

#### hex メソッド、6ビット長カラーを使用

```lua
colour.hex("FF0000", "文字列")
colour.hex(colour.gold, "金色の文字列")
```

#### format 方法

> 複雑なテキスト色処理に適用

```lua
 -- 例
local txt  =  colour.format("%s 世界平和", colour.white, {
    { "80ff00", "永遠の" },
})
print(txt)
echo(txt)
```

#### フレームワークは、独自の優れたカラーを提供しています

```lua
colour.black = "000000" --黒
colour.white = "FFFFFF" --ホワイト
colour.snow = "FFFAFA" --スノーホワイト
colour.whitesmoke = "F5F5F5" --スモークホワイト
colour.lightgray = "D3D3D3" --ライトグレー
colour.silver = "C0C0C0" --シルバー
colour.darkgray = "A9A9A9" --ダークグレー
colour.red = "ff2424" --赤
colour.indianred = "FF6A6A" --インドレッド
colour.littlepink = "FF8080" --ピンク
colour.pink = "FFC0CB" --ピンク
colour.mistylose = "FFE4E1" --ライトローズ
colour.gold = "FFCC00" --ゴールド
colour.orange = "FFA500" --オレンジ
colour.sandybrown = "F4A460" --サンドブラウン
colour.lightcoral = "F08080" --明るいサンゴ色
colour.salmon = "FA8072" --鮮肉色
colour.lightsalmon = "FFA07A" --明るい肉色
colour.tomato = "FF6347" --トマト色
colour.yellow = "FFFF00" --イエロー
colour.darkkhaki = "BDB76B" --ダークイエロー
colour.khaki = "F0E68C" --黄褐色
colour.beige = "F5F5DC" --ベージュ
colour.lemonchiffon = "FFFACD" --レモンシルク
colour.lightyellow = "FFE0" --ライトイエロー
colour.green = "80FF00" --大緑色
colour.limegreen = "32CD32" --オレンジグリーン
colour.lawngreen = "7CFC00" --草緑色
colour.lightgreen = "90EE90" --明るい緑色
colour.palegreen = "98F898" --蒼緑色
colour.aquamarine = "7FFFD4" --エメラルドグリーン
colour.honeydew = "F0FFF0" --蜜色
colour.darkseagreen = "C1FFC1" --ライトグリーン
colour.mintcream = "F5FFFA" --ミント色
colour.royalblue = "4169E1" --ロイヤルブルー
colour.dodgerblue = "1E90FF" --フラッシュブルー
colour.cornflowerblue = "6495ED" --キクラゲ色
colour.deepskyblue = "00BFFF" --ダークスカイブルー
colour.skyblue = "87CECB" --スカイブルー
colour.lightskyblue = "87CEFA" --明るいブルー
colour.lightsteelblue = "B0C4DE" --ブライトスチールブルー
colour.lightblue = "ADD8E6" --明るい青
colour.lightcyan = "E0FFFF" --明るいシアン
colour.aliceblue = "F0F8FF" --アイリスランド
colour.purple = "cc1aff" --紫
colour.darkorchid = "9932CC" --ダークパープル
colour.mediumpurple = "9370DB" --間紫色
colour.mediumorchid = "BA55D3" --間紫色
colour.violet = "EE82EE" --ライトパープル
colour.plum = "DDA0DD" --マリンカラー
colour.thistle = "D8BFD8" --アザミ色
colour.lavender = "E6E6FA" --薄紫色
```
