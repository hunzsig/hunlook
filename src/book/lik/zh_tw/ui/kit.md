### UI套件

### UI套件(Kit)結構

```
└── my_kit - 套件名稱
    ├── assets -（*|·）放資源
    │   ├── my.tga - 一個我的圖
    │   ├── btn - 支援多級目錄
    │   │   └── bag.tga - 一個揹包圖示
    │   └── brun.mdx - 支援模型等
    ├── main.fdf -（·）支援額外fdf，但不推薦（必須叫main名字）
    └── main.lua -（*）套件指令碼程式碼（必須叫main名字）
```

### 一個簡單的套件

```
local kit = 'lik_my'
local this = UIKit(kit)
--- 套件初始化資源
this:onSetup(function()
    local stage = this:stage()
end)
--- 套件重新整理設定（可沒有）
this:onRefresh(1, function()
    -- 每秒乾點啥
end)
```

### 為套件拓展功能

```
local kit = 'lik_my'
--- 為套件註解一下，emmyLua外掛自動索引
---@class MyUI1
local this = UIKit(kit)
function this:update()
    --- your codes
end

--- 別處呼叫套件的拓展功能
UIKit('lik_my'):update()
```
