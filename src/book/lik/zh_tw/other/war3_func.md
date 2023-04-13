## 魔獸函式異同特徵

一般而言，魔獸的函式可以分為同步執行函式和非同步執行函式

例如Japi的UI、聲音、遮罩貼圖等，少數就是非同步執行函式

而建立單位，傷害目標、移動物品等，絕大多數就是同步執行函式

> 後續程式碼非正式執行程式碼，僅作結構演示

### 非同步執行函式

非同步執行函式不需要環境的加持，當你環境處於同步時，則函式對所有玩家有效，非同步環境時，則對特定玩家有效

```lua
-- 允許非同步資料的非同步執行函式
japi.FrameSetTexture() -- 可以
async.call(Player(1),function()
    japi.FrameSetTexture() -- 也可以
end)
```

### 同步執行函式

同步執行函式需要環境的加持，你必須注意環境處於同步狀態下，且效果對所有玩家有效

```lua
-- 必須同步資料的同步執行函式
J.CreateUnit() -- 可以
async.call(Player(1),function()
    J.CreateUnit() -- 幾乎涼涼
end)
```

> 然而，魔獸裡還存在一種特殊的函式系列

### 允許非同步資料的同步執行函式

這類函式你必須注意環境處於同步狀態下，才可執行！但它的資料可以非同步，也就是各個玩家不一致

```lua
-- 允許非同步資料的同步執行函式
local z = 100
async.call(Player(1),function()
    z = 996
end)
japi.EXSetEffectZ(e, z) -- 可以,但玩家1自己是996高度
async.call(Player(1),function()
    japi.EXSetEffectZ(e, z) -- 幾乎涼涼
end
```
