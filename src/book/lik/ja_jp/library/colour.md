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

* <div class="colour" style="background-color:#000000"> colour.black = "000000" --黒</div>
* <div class="colour" style="background-color:#FFFFFF"> colour.white = "FFFFFF" --ホワイト</div>
* <div class="colour" style="background-color:#FFFAFA"> colour.snow = "FFFAFA" --スノーホワイト</div>
* <div class="colour" style="background-color:#F5F5F5"> colour.whitesmoke = "F5F5F5" --スモークホワイト</div>
* <div class="colour" style="background-color:#D3D3D3"> colour.lightgray = "D3D3D3" --ライトグレー</div>
* <div class="colour" style="background-color:#C0C0C0"> colour.silver = "C0C0C0" --シルバー</div>
* <div class="colour" style="background-color:#A9A9A9"> colour.darkgray = "A9A9A9" --ダークグレー</div>
* <div class="colour" style="background-color:#ff2424"> colour.red = "ff2424" --赤</div>
* <div class="colour" style="background-color:#FF6A6A"> colour.indianred = "FF6A6A" --インドレッド</div>
* <div class="colour" style="background-color:#FF8080"> colour.littlepink = "FF8080" --ピンク</div>
* <div class="colour" style="background-color:#FFC0CB"> colour.pink = "FFC0CB" --ピンク</div>
* <div class="colour" style="background-color:#FFE4E1"> colour.mistylose = "FFE4E1" --ライトローズ</div>
* <div class="colour" style="background-color:#FFCC00"> colour.gold = "FFCC00" --ゴールド</div>
* <div class="colour" style="background-color:#FFA500"> colour.orange = "FFA500" --オレンジ</div>
* <div class="colour" style="background-color:#F4A460"> colour.sandybrown = "F4A460" --サンドブラウン</div>
* <div class="colour" style="background-color:#F08080"> colour.lightcoral = "F08080" --明るいサンゴ色</div>
* <div class="colour" style="background-color:#FA8072"> colour.salmon = "FA8072" --鮮肉色</div>
* <div class="colour" style="background-color:#FFA07A"> colour.lightsalmon = "FFA07A" --明るい肉色</div>
* <div class="colour" style="background-color:#FF6347"> colour.tomato = "FF6347" --トマト色</div>
* <div class="colour" style="background-color:#FFFF00"> colour.yellow = "FFFF00" --イエロー</div>
* <div class="colour" style="background-color:#BDB76B"> colour.darkkhaki = "BDB76B" --ダークイエロー</div>
* <div class="colour" style="background-color:#F0E68C"> colour.khaki = "F0E68C" --黄褐色</div>
* <div class="colour" style="background-color:#F5F5DC"> colour.beige = "F5F5DC" --ベージュ</div>
* <div class="colour" style="background-color:#FFFACD"> colour.lemonchiffon = "FFFACD" --レモンシルク</div>
* <div class="colour" style="background-color:#FFFFE0"> colour.lightyellow = "FFE0" --ライトイエロー</div>
* <div class="colour" style="background-color:#80FF00"> colour.green = "80FF00" --大緑色</div>
* <div class="colour" style="background-color:#32CD32"> colour.limegreen = "32CD32" --オレンジグリーン</div>
* <div class="colour" style="background-color:#7CFC00"> colour.lawngreen = "7CFC00" --草緑色</div>
* <div class="colour" style="background-color:#90EE90"> colour.lightgreen = "90EE90" --明るい緑色</div>
* <div class="colour" style="background-color:#98F898"> colour.palegreen = "98F898" --蒼緑色</div>
* <div class="colour" style="background-color:#7FFFD4"> colour.aquamarine = "7FFFD4" --エメラルドグリーン</div>
* <div class="colour" style="background-color:#F0FFF0"> colour.honeydew = "F0FFF0" --蜜色</div>
* <div class="colour" style="background-color:#C1FFC1"> colour.darkseagreen = "C1FFC1" --ライトグリーン</div>
* <div class="colour" style="background-color:#F5FFFA"> colour.mintcream = "F5FFFA" --ミント色</div>
* <div class="colour" style="background-color:#4169E1"> colour.royalblue = "4169E1" --ロイヤルブルー</div>
* <div class="colour" style="background-color:#1E90FF"> colour.dodgerblue = "1E90FF" --フラッシュブルー</div>
* <div class="colour" style="background-color:#6495ED"> colour.cornflowerblue = "6495ED" --キクラゲ色</div>
* <div class="colour" style="background-color:#00BFFF"> colour.deepskyblue = "00BFFF" --ダークスカイブルー</div>
* <div class="colour" style="background-color:#87CECB"> colour.skyblue = "87CECB" --スカイブルー</div>
* <div class="colour" style="background-color:#87CEFA"> colour.lightskyblue = "87CEFA" --明るいブルー</div>
* <div class="colour" style="background-color:#B0C4DE"> colour.lightsteelblue = "B0C4DE" --ブライトスチールブルー</div>
* <div class="colour" style="background-color:#ADD8E6"> colour.lightblue = "ADD8E6" --明るい青</div>
* <div class="colour" style="background-color:#E0FFFF"> colour.lightcyan = "E0FFFF" --明るいシアン</div>
* <div class="colour" style="background-color:#F0F8FF"> colour.aliceblue = "F0F8FF" --アイリスランド</div>
* <div class="colour" style="background-color:#CC1AFF"> colour.purple = "CC1AFF" --紫</div>
* <div class="colour" style="background-color:#9932CC"> colour.darkorchid = "9932CC" --ダークパープル</div>
* <div class="colour" style="background-color:#9370DB"> colour.mediumpurple = "9370DB" --間紫色</div>
* <div class="colour" style="background-color:#BA55D3"> colour.mediumorchid = "BA55D3" --間紫色</div>
* <div class="colour" style="background-color:#EE82EE"> colour.violet = "EE82EE" --ライトパープル</div>
* <div class="colour" style="background-color:#DDA0DD"> colour.plum = "DDA0DD" --マリンカラー</div>
* <div class="colour" style="background-color:#D8BFD8"> colour.thistle = "D8BFD8" --アザミ色</div>
* <div class="colour" style="background-color:#E6E6FA"> colour.lavender = "E6E6FA" --薄紫色</div>
