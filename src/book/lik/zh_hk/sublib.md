## 拓展庫

#### 框架功能庫 library 雖然很全很強大，但總有不能滿足的時候

#### 在項目構建後可以為其獨立創建一份局部核心庫 sublibrary

#### 使用 sublibrary 有很多好處，強烈不建議在 sublibrary 外書寫拓展

* 自動加載，貼合工具鏈路
* 方便管理，極大地降低維護成本
* 路徑強制，在不同項目間輕鬆復刻
* 規則適應，符合混淆的自動化處理

#### 下面將展示為 Game 拓展一個方法的過程

```
構建一個新的項目，名為 demo
```

#### 根據 library 的目錄結構，可以得知在 oop 下有 class

#### 而 class 裏有 Game 對象的實現源碼 game.lua

```lua
參考library的路徑
lik\library\oop\class\game.lua

相對地構建一次sublibrary的路徑
demo\sublibrary\oop\class\game.lua
```

#### 引用 class，即可為它添加一個方法 infoCenter

> 此例子已包含在默認new的新項目中

```lua
---@type GameClass
local class = Class(GameClass)

---@param modify string|nil
---@return self|string
function class:infoCenter(modify)
    return self:prop("infoCenter", modify)
end
```

#### 除了拓展原先存在的功能外，新建模塊也是支持的，可自由發揮
