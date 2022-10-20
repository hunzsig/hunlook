## 魔獸函數異同特徵

一般而言，魔獸的函數可以分為同步執行函數和異步執行函數

例如Japi的UI、聲音、遮罩貼圖等，少數就是異步執行函數

而創建單位，傷害目標、移動物品等，絕大多數就是同步執行函數

> 後續代碼非正式執行代碼，僅作結構演示

### 異步執行函數

異步執行函數不需要環境的加持，當你環境處於同步時，則函數對所有玩家有效，異步環境時，則對特定玩家有效

```lua
-- 允許異步數據的異步執行函數
japi.DzFrameSetTexture() -- 可以
async.call(Player(1),function()
    japi.DzFrameSetTexture() -- 也可以
end)
```

### 同步執行函數

同步執行函數需要環境的加持，你必須註意環境處於同步狀態下，且效果對所有玩家有效

```lua
-- 必須同步數據的同步執行函數
J.CreateUnit() -- 可以
async.call(Player(1),function()
    J.CreateUnit() -- 幾乎涼涼
end)
```

> 然而，魔獸裏還存在一種特殊的函數係列

### 允許異步數據的同步執行函數

這類函數你必須註意環境處於同步狀態下，才可執行！但它的數據可以異步，也就是各個玩家不一緻

```lua
-- 允許異步數據的同步執行函數
local z = 100
async.call(Player(1),function()
    z = 996
end)
japi.EXSetEffectXY(e, z) -- 可以,，但玩家1自己是996高度
async.call(Player(1),function()
    japi.EXSetEffectXY(e, z) -- 幾乎涼涼
end
```
