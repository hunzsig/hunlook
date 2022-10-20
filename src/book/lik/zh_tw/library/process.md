## Process 流程管理

> 在全域性熱更新 hotLoader 的扶持下，Process的效能變得突破天際的強
>
> 你可以使用 Process 編寫某一段的遊戲流程，隨時回滾測試，跳躍測試

### 先在專案裡面新建一個流程目錄，專門用來寫流程，如 process

```
└── project_demo - 專案目錄
    └── scripts
        └── process - 專案流程程式碼
            └── start.lua -- 流程以 start 開始
```

你可以在初始流程裡寫一些簡單的東西，因為一般只作為入口，如

```lua
local process = Process("start")
process:onStart(function(this)
    -- 除錯自動去除迷霧
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
end)
```

### 使用 next方法，跳到下一個流程

```lua
-- 以名定義流程 start 將會遊戲啟動時自動執行
local process = Process("start")
-- 流程主體
process:onStart(function(this)
    -- 除錯自動去除迷霧
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
    -- 使用next然後就可以跳去下一個流程了，這裡跳去test流程了
    this:next("test")
end)
```

### 然後在建一個test流程

```
└── project_demo - 專案目錄
    └── scripts
        └── process - 專案流程程式碼
            ├── start.lua -- 流程以 start 開始
            └── test.lua -- test流程
```

這個 test.lua 裡面迴響一句話

```lua
local process = Process("test")
process:onStart(function(this)
    echo("lik魅力無敵")
end)
```

### 流程內的資源管理

> 一般區域性變數可以無視，不管理即可
>
> 但例如有個流程叫bossComing，它建立了一個boss攻擊玩家
>
> 你可以把它繫結到stage裡，然後在結束回撥時，令它刪除
>
> 這樣這個boss就會在流程跳躍或重置時，自動消滅

```lua
local process = Process("bossComing")
process
    :onStart(function(this)
        -- 建立一個BOSS
        local boss = Unit(TPL_UNIT.BOSS, Player(12), 0, 0, 0)
        -- 註冊進stage
        this:stage("boss", boss)
    end)
    :onOver(function(this)
        -- 幹掉boss
        destroy(this:stage("boss"))
    end)
```

### 你也可以註冊一些命令，來手動控制流程的跳躍

> 下面是個例子，如敲入 -proc test，將會重置執行 test
>
> 下面是個例子，如敲入 -proc this，將會重置當前流程

```lua
if (DEBUGGING) then
    --- 流程掌控
    Game():command("^-proc [a-zA-Z0-9_]+$", function(evtData)
        local p = string.trim(evtData.matchedString)
        p = string.sub(p, 7, string.len(p))
        local proc
        if (p == "this") then
            proc = ProcessCurrent
        else
            proc = Processes:get(p)
        end
        if (instanceof(proc, ProcessClass)) then
            print(p .. "流程已重置")
            proc:start()
        end
    end)
end
```
