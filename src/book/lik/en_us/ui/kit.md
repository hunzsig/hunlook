## Kit(Suite)

### UI Kit Structure

```
└── my_kit - name
    ├── assets -（*|·）assets
    │   ├── my.tga - A picture
    │   ├── btn - Support multi-level directory
    │   │   └── bag.tga - A bag icon
    │   └── brun.mdx - Support model etc.
    ├── main.fdf -（·）Support additional fdfs, but not recommended (the name must be main)
    └── main.lua -（*）Suite script code (must be called main name)
```

### A simple kit

```
local kit = 'lik_my'
local this = UIKit(kit)
--- Suite Initialization Resources
this:onSetup(function()
    local stage = this:stage()
end)
--- Kit refresh setting (not available)
this:onRefresh(1, function()
    -- Do something every second
end)
```

### Expand functionality for suites

```
local kit = 'lik_my'
--- Note the package, and the emmyLua plug-in automatically indexes
---@class MyUI1
local this = UIKit(kit)
function this:update()
    --- your codes
end

--- Call the extended functions of the suite elsewhere
UIKit('lik_my'):update()
```
