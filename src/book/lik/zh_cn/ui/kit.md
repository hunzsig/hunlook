## UI套件

### UI套件(Kit)结构

```
└── my_kit - 套件名称
    ├── assets -（*|·）放资源
    │   ├── my.tga - 一个我的图
    │   ├── btn - 支持多级目录
    │   │   └── bag.tga - 一个背包图标
    │   └── brun.mdx - 支持模型等
    ├── main.fdf -（·）支持额外fdf，但不推荐（必须叫main名字）
    └── main.lua -（*）套件脚本代码（必须叫main名字）
```

### 一个简单的套件

```
local kit = 'lik_my'
local this = UIKit(kit)
--- 套件初始化资源
this:onSetup(function()
    local stage = this:stage()
end)
--- 套件刷新设定（可没有）
this:onRefresh(1, function()
    -- 每秒干点啥
end)
```

### 为套件拓展功能

```
local kit = 'lik_my'
--- 为套件注解一下，emmyLua插件自动索引
---@class MyUI1
local this = UIKit(kit)
function this:update()
    --- your codes
end

--- 别处调用套件的拓展功能
UIKit('lik_my'):update()
```
