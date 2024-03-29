## 拓展库

#### 框架功能库 library 虽然很全很强大，但总有不能满足的时候

#### 在项目构建后可以为其独立创建一份局部核心库 sublibrary

#### 使用 sublibrary 有很多好处，强烈不建议在 sublibrary 外书写拓展

* 自动加载，贴合工具链路
* 方便管理，极大地降低维护成本
* 路径强制，在不同项目间轻松复刻
* 规则适应，符合混淆的自动化处理

#### 下面将展示为 Game 拓展一个方法的过程

```
构建一个新的项目，名为 demo
```

#### 根据 library 的目录结构，可以得知在 oop 下有 class

#### 而 class 里有 Game 对象的实现源码 game.lua

```lua
参考library的路径
lik\library\oop\class\game.lua

相对地构建一次sublibrary的路径
demo\sublibrary\oop\class\game.lua
```

#### 引用 class，即可为它添加一个方法 infoCenter

> 此例子已包含在默认new的新项目中

```lua
---@type GameClass
local class = Class(GameClass)

---@param modify string|nil
---@return self|string
function class:infoCenter(modify)
    return self:prop("infoCenter", modify)
end
```

#### 除了拓展原先存在的功能外，新建模块也是支持的，可自由发挥
