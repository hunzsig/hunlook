## 魔獣関数異同特徴

一般的に、魔獣の関数は同期実行関数と非同期実行関数に分けることができる

JapiのUI、サウンド、マスクマップなど、少数は非同期実行関数です

作成単位、傷害目標、移動物など、ほとんどが同期実行関数である

> 構造プレゼンテーションのみの後続コード非公式実行コード

### 非同期実行関数

非同期実行関数は環境の加持を必要とせず、環境が同期している場合、関数はすべてのプレイヤーに有効であり、非同期環境の場合、特定のプレイヤーに有効である

```lua
-- 非同期データを許可する非同期実行関数
japi.DzFrameSetTexture() -- できます
async.call(Player(1),function()
    japi.DzFrameSetTexture() -- してもよい
end)
```

### 同期実行関数

同期実行関数には環境の保持が必要です。環境が同期状態にあり、すべてのプレイヤーに効果があることに注意しなければなりません

```lua
-- データを同期する必要がある同期実行関数
J.CreateUnit() -- できます
async.call(Player(1),function()
    J.CreateUnit() -- ほとんど涼しい
end)
```

> しかし、魔獣には特殊な関数系列が存在する

### 非同期データの同期実行を許可する関数

このような関数を実行するには、環境が同期状態にあることに注意しなければなりません！しかし、そのデータは非同期であってもよく、つまり各プレイヤーが一致しない

```lua
-- 非同期データの同期実行を許可する関数
local z = 100
async.call(Player(1),function()
    z = 996
end)
japi.EXSetEffectXY(e, z) -- はい、できますが、プレイヤー1自身は996の高さです
async.call(Player(1),function()
    japi.EXSetEffectXY(e, z) -- ほとんど涼しい
end
```