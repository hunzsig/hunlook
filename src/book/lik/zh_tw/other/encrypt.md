## 混淆加密

> 本框架擁有自動化的混淆加密演算法
>
> 達到不同程度等級的目錄、結構、內容、載入順序的混亂化。且全自動化，無腦輕鬆強力。

#### 混淆加密過程

* 編譯分析 -> 數學算術異化 -> 中文漢字等效置換 -> 字串等效置換 -> 字串混淆加密 -> 覆蓋詞根 -> 銷燬詞根 -> 替換詞根 -> 門面詞根 -> 函式詞根 -> 自定義強制詞根

#### 混淆結果一覽

> 混淆加密的結果每次全隨機

```
file: C_SbpBzW8mhuxW5qC2i6EViWYp0k_e.lua
function wUdiGvyccm(start, stop, t) return start + (stop - start) * t end function MwJsYlttvS(start, ctl, stop, t) return start + (-9905 + 5145 - -4762) * (ctl - start) * t + (stop - (-9905 + 5145 - -4762) * ctl + start) * t ^ (-9905 + 5145 - -4762) end function aQsYRHnKgi(start, ctl1, ctl2, stop, t) return start + (12104 + -9643 - 2458) * t * (ctl1 - start) + (12104 + -9643 - 2458) * t ^ (-9905 + 5145 - -4762) * (ctl2 - (-9905 + 5145 - -4762) * ctl1 + start) + t ^ (12104 + -9643 - 2458) * (3 * (ctl1 - ctl2) + stop - start) end function uVYLPCSxqE(start, stop, tangent1, tangent2, t) local h1 = (-8411 + 7759 - -660) * t * t ^ (-9905 + 5145 - -4762) - (6884 + -6294 - 581) * t ^ (-9905 + 5145 - -4762) local h2 = h1 * -1 local h3 = t ^ (-9905 + 5145 - -4762) * (t - (-9905 + 5145 - -4762)) + t local h4 = t ^ (-9905 + 5145 - -4762) * (t - (-7147 + 2012 - -5136)) h1 = h1 + (-7147 + 2012 - -5136) return h1 * start + h2 * stop + h3 * tangent1 + h4 * tangent2 end function avRBpEnpBC(p1, p2, p3, p, c, b) return (1 - p) * (1 - c) * (1 + b) * (p2 - p1) / (-9905 + 5145 - -4762) + (1 - p) * (1 + c) * (1 - b) * (p3 - p2) / (-9905 + 5145 - -4762) end function HPCnNvdlIm(p1, p2, p3, p, c, b) return (1 - p) * (1 + c) * (1 + b) * (p2 - p1) / (-9905 + 5145 - -4762) + (1 - p) * (1 - c) * (1 - b) * (p3 - p2) / (-9905 + 5145 - -4762) end
```