## Process 流程管理

> 由于框架自带极其有用的热加载 hotLoader
>
> 在 hot 的加持下，Process模块诞生并极其强力
>
> 你可以使用 Process 编写某一段的游戏流程，随时回滚测试，跳跃测试

### 先在项目里面新建一个流程目录，专门用来写流程，如 process

```
└── project_demo - 项目目录
    └── scripts
        └── process - 项目流程代码
            └── start.lua -- 流程以 start 开始
```

你可以在初始流程里写一些简单的东西，因为一般只作为入口，如

```lua
local process = Process("start")
process.onSetup(function(this)
    -- 调试自动去除迷雾
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
end)
```

### 使用 next方法 在流程间跳跃

```lua
-- 以名定义流程 start 将会游戏启动时自动运行
local process = Process("start")
-- 流程主体
process.onSetup(function(this)
    -- 调试自动去除迷雾
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
    -- 使用next然后就可以跳去下一个流程了，这里跳去test流程了
    this.next("test")
end)
```

### 然后在建一个test流程

```
└── project_demo - 项目目录
    └── scripts
        └── process - 项目流程代码
            ├── start.lua -- 流程以 start 开始
            └── test.lua -- test流程
```

这个 test.lua 里面打印一句话

```lua
local process = Process("test")
process.onSetup(function(this)
    echo("singluar无敌")
end)
```

### 流程内的资源管理

> 一般局部变量可以无视，不管理即可
>
> 但例如有个流程叫bossComing，它创建了一个boss攻击玩家
>
> 你可以把它注册到stage里，然后写一个毁灭回调
>
> 这样这个boss就会在流程跳跃或重置时，自动消灭

```lua
local process = Process("bossComing")
process
    .onSetup(function(this)
        -- 创建一个BOSS
        local boss = TPL_UNIT.BOSS.create(Player(12), 0, 0, 0)
        -- 注册进stage
        this.stage("boss", boss)
    end)
    .onDestroy(function(this)
        -- 干掉boss
        this.stage("boss").destroy()
    end)
```

### 你也可以注册一些命令，来手动控制流程的跳跃

> 下面是个例子，如敲入 -proc test，将会重置执行 test
> 下面是个例子，如敲入 -proc this，将会重置当前流程

```lua
if (DEBUGGING) then
    --- 流程掌控
    Game().command("^-proc [a-zA-Z0-9_]+$", function(evtData)
        local p = string.trim(evtData.matchedString)
        p = string.sub(p, 7, string.len(p))
        local proc
        if (p == "this") then
            proc = ProcessCurrent
        else
            proc = Processes.get(p)
        end
        if (instanceof(proc, "Process")) then
            print(p .. "流程已重置")
            proc.start()
        end
    end)
end
```
