## Process management

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

### Over callback

#### What can you do at the end of the process

```lua
local process = Process("test")
process:onOver(function(this)
    --- something
end)
```

### Bubble data within the process

#### Some data is only valid within the current process and needs to be manually managed at the end of the process, which is not very fast

#### A bubble bubble data is provided within the process, which is a simple table that can automatically clean up one-dimensional data when the process is over

#### For example, there is a process called bossComing, which creates a boss attack player

#### You can bind it to a bubble, so that this boss will automatically eliminate when the process jumps or ends

> The bubble data processing provided by the framework is very simple, and if you need it, you can expand the desired effect on your own, such as processing multidimensional data

```lua
local process = Process("bossComing")
process
    :onStart(function(this)
        -- A boss
        local boss = Unit(TPL_UNIT.BOSS, Player(12), 0, 0, 0)
        -- save in bubble
        local bubble = this:bubble()
        bubble.boss = boss
    end)
```

### You can also register some commands to manually control the jump of the process

#### Here is an example, such as typing - proc test, which will reset the execution test, while typing - proc this will reset the current process

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
            ProcessCurrent:over()
            proc:start()
        end
    end)
end
```
