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
process:onStart(function(this)
    -- Debug automatic mist removal
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
end)
```

### Use the next method to jump to the next process

```lua
-- Define the process by name Start will automatically run when the game starts
local process = Process("start")
-- Main process
process:onStart(function(this)
    -- Debug automatic mist removal
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
    -- Use “next” to jump to the next process. Here we jump to the test process
    this:next("test")
end)
```

### Then a test process is under construction

```
└── project_demo - dir
    └── scripts
        └── process - codes
            ├── start.lua -- The process starts with start
            └── test.lua -- Process test
```

This test A sentence echoed in Lua

```lua
local process = Process("test")
process:onStart(function(this)
    echo("lik power")
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
    :onStart(function(this)
        -- A boss
        local boss = Unit(TPL_UNIT.BOSS, Player(12), 0, 0, 0)
        -- save in stage
        this:stage("boss", boss)
    end)
    :onOver(function(this)
        -- Destroy boss
        destroy(this:stage("boss"))
    end)
```

### You can also register some commands to manually control the jump of the process

> The following is an example. If you type -proc test, the execution of test will be reset
>
> The following is an example. If you type -proc this, the current process will be reset

```lua
if (DEBUGGING) then
    --- Process control
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
            print(p .. "Process reset")
            proc:start()
        end
    end)
end
```
