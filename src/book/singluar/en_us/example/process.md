## Process management

> With the support of global hot update hotloader, the efficiency of process has become stronger than the sky
>
> You can use process to write a certain game flow, roll back the test and jump the test at any time

### First, create a new process directory in the project, which is specially used to write processes, such as process

```
└── project_demo - Project directory
    └── scripts
        └── process - Project process code
            └── start.lua -- The process starts with start
```

You can write some simple things in the initial process, because it is generally only used as an entry, such as

```lua
local process = Process("start")
process.onStart(function(this)
    -- 调试自动去除迷雾
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
end)
```

### Use the next method to jump to the next process

```lua
-- 以名定义流程 start 将会游戏启动时自动运行
local process = Process("start")
-- 流程主体
process.onStart(function(this)
    -- 调试自动去除迷雾
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
    -- 使用next然后就可以跳去下一个流程了，这里跳去test流程了
    this.next("test")
end)
```

### Then a test process is under construction

```
└── project_demo - 项目目录
    └── scripts
        └── process - 项目流程代码
            ├── start.lua -- 流程以 start 开始
            └── test.lua -- test流程
```

This test A sentence echoed in Lua

```lua
local process = Process("test")
process.onStart(function(this)
    echo("singluar无敌")
end)
```

### Resource management within the process

> General local variables can be ignored without management
>
> But for example, there is a process called bossComing, which creates a boss attack player
>
> You can bind it to the stage, and then delete it at the end of the callback
>
> In this way, the boss will be automatically eliminated when the process jumps or resets

```lua
local process = Process("bossComing")
process
    .onStart(function(this)
        -- 创建一个BOSS
        local boss = TPL_UNIT.BOSS.create(Player(12), 0, 0, 0)
        -- 注册进stage
        this.stage("boss", boss)
    end)
    .onOver(function(this)
        -- 干掉boss
        this.stage("boss").destroy()
    end)
```

### You can also register some commands to manually control the jump of the process

> The following is an example. If you type -proc test, the execution of test will be reset
> 
> The following is an example. If you type -proc this, the current process will be reset

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
