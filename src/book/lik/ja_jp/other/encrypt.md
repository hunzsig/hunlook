## 難読暗号化

> このフレームワークには半自動化された難読暗号化アルゴリズムがあります
>
> レベルの異なるディレクトリ、構造、コンテンツ、ロード順序の混沌化。しかも軽くて強力。

### 難読暗号化プロセス

* コンパイル解析 -> 算術的異化 -> 中国語漢字等価置換 -> 文字列等価置換 -> 文字列混同暗号化 -> 語根の上書き -> 語根の破棄 -> 語根の置換 -> 表面語根 -> 関数語根 -> カスタム強制語根

### 難読暗号化結果一覧

> 難読暗号化の結果はすべてランダム

```
file: C_SbpBzW8mhuxW5qC2i6EViWYp0k_e.lua
function wUdiGvyccm(start, stop, t) return start + (stop - start) * t end function MwJsYlttvS(start, ctl, stop, t) return start + (-9905 + 5145 - -4762) * (ctl - start) * t + (stop - (-9905 + 5145 - -4762) * ctl + start) * t ^ (-9905 + 5145 - -4762) end function aQsYRHnKgi(start, ctl1, ctl2, stop, t) return start + (12104 + -9643 - 2458) * t * (ctl1 - start) + (12104 + -9643 - 2458) * t ^ (-9905 + 5145 - -4762) * (ctl2 - (-9905 + 5145 - -4762) * ctl1 + start) + t ^ (12104 + -9643 - 2458) * (3 * (ctl1 - ctl2) + stop - start) end function uVYLPCSxqE(start, stop, tangent1, tangent2, t) local h1 = (-8411 + 7759 - -660) * t * t ^ (-9905 + 5145 - -4762) - (6884 + -6294 - 581) * t ^ (-9905 + 5145 - -4762) local h2 = h1 * -1 local h3 = t ^ (-9905 + 5145 - -4762) * (t - (-9905 + 5145 - -4762)) + t local h4 = t ^ (-9905 + 5145 - -4762) * (t - (-7147 + 2012 - -5136)) h1 = h1 + (-7147 + 2012 - -5136) return h1 * start + h2 * stop + h3 * tangent1 + h4 * tangent2 end function avRBpEnpBC(p1, p2, p3, p, c, b) return (1 - p) * (1 - c) * (1 + b) * (p2 - p1) / (-9905 + 5145 - -4762) + (1 - p) * (1 + c) * (1 - b) * (p3 - p2) / (-9905 + 5145 - -4762) end function HPCnNvdlIm(p1, p2, p3, p, c, b) return (1 - p) * (1 + c) * (1 + b) * (p2 - p1) / (-9905 + 5145 - -4762) + (1 - p) * (1 - c) * (1 - b) * (p3 - p2) / (-9905 + 5145 - -4762) end
```

### 難読暗号化参加

> 下位レベルの自動暗号化に加えて、暗号化ルールのカスタマイズに自由に参加できます
>
> 基本的な自動混同には、次のような自己参加は必要ありません。
> * library/builtIn
> * library/oop/facades、library/oop/class
> * sublibrary/oop/facades、sublibrary/oop/class

##### ルール定義 \encrypt では、ルールに一致するコンテンツがタイプ別に暗号化されることを意味します

##### デフォルトではほとんどのルールが作成されているので、修正しなくても十分強力です

##### force.json 語根を強制的に混同することができ、優先度を置くと、単語全体がカバーされ、遅い

##### rule.json library(!builtIn)内の各混同規則を定義可能

### sublibrary

> サブライブラリはlibraryを拡張するために使用されるので、対応する場所のファイルを正しく配置すると
>
> 関連するサブ拡張は、rule内のルールを混同するためにも自動的に使用されます

##### 例えば /sublibrary/variable/prop.lua も /library/variable/prop.lua に記述された規則を使用します
