## 拓展庫

#### 框架功能庫 library 雖然很全很強大，但總有不能滿足的時候

#### 在專案構建後可以為其獨立建立一份區域性核心庫 sublibrary

#### 使用 sublibrary 有很多好處，強烈不建議在 sublibrary 外書寫拓展

* 方便管理，極大地降低維護成本
* 路徑強制，在不同專案間輕鬆復刻
* 規則適應，符合混淆的自動化處理

#### 下面將展示為 Game 拓展一個方法的過程

```
構建一個新的專案，名為 demo
```

#### 根據 library 的目錄結構，可以得知在 oop 下有 class

#### 而 class 裡有 Game 物件的實現原始碼 game.lua

```lua
參考library的路徑
lik\library\oop\class\game.lua

相對地構建一次sublibrary的路徑
demo\sublibrary\oop\class\game.lua
```

#### 引用 class，即可為它新增一個方法 infoCenter

> 此例子已包含在預設new的新專案中

```lua
---@type GameClass
local class = Class(GameClass)

---@param modify string|nil
---@return self|string
function class:infoCenter(modify)
    return self:prop("infoCenter", modify)
end
```

#### 除了拓展原先存在的功能外，新建模組也是支援的，可自由發揮
