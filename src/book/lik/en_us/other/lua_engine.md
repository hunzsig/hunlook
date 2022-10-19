## YDWE lua engine

[From github/actboy168/jass2lua](https://github.com/actboy168/jass2lua/edit/master/lua-engine.md)

> Remember: bugs end in geniuses

### Introduction

YDWE lua engine (hereinafter referred to as lua engine) is a plug-in embedded in "Warcraft III" (hereinafter referred to
as Warcraft), it allows Warcraft to execute lua and call Warcraft's export function (function defined in common.j ) , as
with jass. This description assumes that you have mastered the related syntax of jass and lua, and the related syntax
will not be explained separately.

### Enter

Calling `call Cheat("exec-lua: hello")` in jass is equivalent to calling `require 'hello'` in lua. The lua engine has
loaded the files in the map into the search path, so the hello.lua in the map will be executed.

### The modification of the lua engine to the standard lua

Slightly modified lua in order to be suitable for using lua engine in Warcraft.

1. math.randomseed is implemented using the jass function SetRandomSeed instead.
2. math.random is implemented using the jass function GetRandomReal instead.
3. The random seed of the table element depends on the random seed inside of Warcraft.
4. Block some functions that are considered unsafe

### Library

The lua engine has a total of 12 built-in libraries, which can be called by "require 'library name'".

* jass.common
* jass.ai
* jass.globals
* jass.japi
* jass.hook
* jass.runtime
* jass.slk
* jass.console
* jass.debug
* jass.log
* jass.message
* jass.bignum

### jass.common

The jass.common library contains all functions registered in common.j. (excluding BJ)

```lua
	local jass = require 'jass.common'
	print(jass.GetHandleId(jass.Player(0)))
```

### jass.ai

The jass.ai library contains all functions registered in common.ai.

```lua
	local jass = require 'jass.common'
	local ai = require 'jass.ai'
	print(ai.UnitAlive(jass.GetTriggerUnit()))
```

### jass.globals

The jass.globals library allows you to access global variables in jass.
> You can use this library to access objects preset in the big map.

```lua
	local cg = require 'jass.globals'
    print(cg.udg_i) --Get the i integer defined in jass
```

### jass.japi

All japi functions currently registered by the jass.japi library. (including dz function)

```lua
	local jass = require 'jass.common'
	local japi = require 'jass.japi'
	japi.EXDisplayChat(jass.Player(0), 0, "Hello!")
```

The japi function may be slightly different in different environments, you can traverse all the current japi functions
through pairs

```lua
	for k, v in pairs(require 'jass.japi') do
		print(k, v)
	end
```

### jass.hook

The jass.hook library can hook functions registered in common.j. Note: the jass.common library will not be affected.

At the same time, in order to avoid errors when passing floating-point numbers between jass and lua, the floating-point
numbers passed to lua through jass.hook are not of type number, but userdata. Also be aware of this when you need to
manipulate floating point numbers **precisely**.

```lua
	local hook = require 'jass.hook'
	function hook.CreateUnit(pid, uid, x, y, face, realCreateUnit)
		-- When CreateUnit is called in jass, it will be executed
		print('CreateUnit')
		print(type(x))
		return realCreateUnit(pid, uid, x, y, face)
	end
```

### jass.slk

The jass.slk library can read slk/w3* files inside the map when the map is running.

```lua
	local slk = require 'jass.slk'
	print(slk.ability.AHbz.Name)
```

You can also iterate over a table or an object (not recommended)

```lua
	local slk = require 'jass.slk'
	for k, v in pairs(slk.ability) do
		print(k, v)
	end
	for k, v in pairs(slk.ability.AHbz) do
		print(k, v)
	end
```

slk includes

* unit
* item
* destructable
* doodad
* ability
* buff
* upgrade
* misc

One-to-one correspondence with items in your object editor.

The index used to get the data, you can query it by Ctrl+D in the object editor

Note that the return value is always a string when accessed correctly. If you're getting the health of a unit, you may
need to use tonumber to convert it. Returns nil when the access is incorrect.

### jass.runtime

#### The jass.runtime library can obtain the information of the lua engine or modify part of the configuration of the lua engine when the map is running.

```lua
	local runtime = require 'jass.runtime'
```

##### runtime.console(default is false)

After the assignment is true, a cmd window will open, and the print and console.write functions can be output here

```lua
	runtime.console = true
```

##### runtime.version

Returns the version number of the current lua engine

```lua
	print(runtime.version)
```

##### runtime.error_handle

This function will be called when your lua script fails.

runtime.error_handle has a default value and is equivalent to the following function

```lua
	runtime.error_handle = function(msg)
		print("Error: ", msg, "\n")
	end
```

You can also make it output more information, such as the call stack when outputting an error

```lua
	runtime.error_handle = function(msg)
		print("---------------------------------------")
		print("              LUA ERROR!!              ")
		print("---------------------------------------")
		print(tostring(msg) .. "\n")
		print(debug.traceback())
		print("---------------------------------------")
	end
```

Note that the efficiency of the lua script will decrease after registering this function (even if no error occurs).

##### runtime.handle_level(default is 0)

The security level of the handle processed by the lua engine. The valid value is 0~2. Note, the higher the level, the
lower the efficiency and the higher the security.

###### 0: handle uses number directly, jass cannot understand your reference to this handle in lua, and will not protect this handle by increasing the reference count

```lua
	local t = jass.CreateTimer()
	print(t) -- 1048000
	type(t) -- "number"
```

###### 1: The handle is encapsulated in lightuserdata to ensure that the handle cannot be converted to an integer, and reference counting is also not supported

```lua
	local t = jass.CreateTimer()
	print(t) -- "handle: 0x10005D"
	type(t) -- "userdata"
	jass.TimerStart(t, 1, false, 0) -- ok
```

```lua
	local t = jass.CreateTimer()
	local h1 = jass.CreateTimer()
	jass.DestroyTimer(h1)
	jass.TimerStart(t, 1, false,
		function()
			local h2 = jass.CreateTimer()
			print(h1) -- "handle: 0x10005E"
			print(h2) -- "handle: 0x10005E"
		end
	)
```

###### 2: The handle is encapsulated in userdata, and lua will increase the reference count of the handle when it holds the handle. When lua releases the handle, it releases the handle's reference count.

```lua
	local t = jass.CreateTimer()
	local h1 = jass.CreateTimer()
	jass.DestroyTimer(h1)
	jass.TimerStart(t, 1, false,
		function()
			local h2 = jass.CreateTimer()
			print(h1) -- "handle: 0x10005E"
			print(h2) -- "handle: 0x10005F"
		end
	)
```

##### runtime.sleep(default is false)

There are 4 functions that contain sleep operations in common.j,
TriggerSleepAction/TriggerSyncReady/TriggerWaitForSound/SyncSelections. When this item is false, the lua engine will
ignore the calls of these 4 functions and give a runtime warning. When this is true, these 4 functions will be executed
correctly.

But please note that when this item is true, it will reduce the efficiency of the lua engine, even if you do not use
these 4 functions.

```lua
	local trg = jass.CreateTrigger()
	local a = 1
	jass.TriggerAddAction(trg, function()
		jass.TriggerSleepAction(0.2)
		print(a) -- 2
	end)
	jass.TriggerExecute(trg)
	a = 2
```

##### runtime.catch_crash(default is true)

When a call to jass.xxx/japi.xxx crashes, a lua error is generated and the crash is ignored. You can register
jass.runtime.error_handle to get this error. Note: Turning this on slightly increases runtime consumption (even if no
errors occur).

##### runtime.debugger

Start the debugger and listen on the specified port. Need to use `VSCode` and
install [Lua Debug](https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug).

```lua
	runtime.debugger = 4279
```

### jass.console

#### jass.console is related to the console

##### console.enable(default is false)

After the assignment is true, a cmd window will open, and the print and console.write functions can be output here

```lua
	console.enable = true
```

##### console.write

Convert the utf8 encoded string to ansi encoding and output it to the cmd window. If you need to output Chinese in
Warcraft, please use this function instead of print

##### console.read

Pass the input from the console into World of Warcraft (the encoding will be automatically converted)

After calling console.read for the first time, the user will be allowed to input in the console. After the input is
completed, press the Enter key to submit the input.

After the user submits, pass in a function f to call console.read, which will call the function f and pass in the user's
input as a parameter (which has been converted to utf8 encoding).

The recommended practice is to run console.read every 0.1 seconds, see the example below:

```lua
	local jass    = require 'jass.common'
	local console = require 'jass.console'

	console.write('Test Start...')

	--Start the timer and check the input every 0.1 seconds
	jass.TimerStart(jass.CreateTimer(), 0.1, true,
		function()

			--Check the user input in the CMD window, if the user has submitted input, the callback function (press the Enter key to submit the input). Otherwise, do nothing
			console.read(
				function(str)
					--The parameter is the user's input. It should be noted that this function call is asynchronous (after all, other players do not know what you entered)
					jass.DisplayTimedTextToPlayer(jass.Player(0), 0, 0, 60, 'Input:' .. str)
				end
			)
		end
	)
```

Note that console input is not synchronized.

### jass.debug

The jass.debug library can help you dig deeper into the internals of the lua engine.

* functiondef - Definition of jass.common or jass.japi function

```lua
	local jass = require 'jass.common'
	local dbg = require 'jass.debug'
	print(table.unpack(dbg.functiondef(jass.GetUnitX)))
```

* globaldef D- efinition of values in jass.globals

* handledef - The internal definition of the corresponding object of handle

* currentpos - The current location where jass is executed

* handlemax - The current largest handle of the jass virtual machine

* handlecount - The current handle number of the jass virtual machine

* h2i/i2h - The conversion of handle and integer, when your runtime.handle_level is not 0, you may need it

* handle_ref - Add a reference to handle

* handle_unref - Reduce handle references

* ~~gchash~~ (obsolete) Specify the gchash of a table, and gchash will determine the sort order of this table in other
  tables. By default, the sort order of lua's table is determined by random numbers. The random numbers generated by the
  player's lua are inconsistent, so the order of execution of the following code on different players is inconsistent,
  which may cause asynchronous disconnection

### jass.log

日志库

* path - Log output path
* level - Log level, only logs above the specified level will be output
* The log has 6 levels: trace、debug、info、warn、error、fatal

```lua
	local log = require 'jass.log'
	log.info('这是一行日志')
	log.error('这是一行', '日志')
```

### jass.message

* keyboard - A table, the keyboard code of Warcraft
* mouse - The mouse coordinates of the local player (game coordinates)
* button - The state of the local player skill button
* hook - The message callback of Warcraft, you can get some mouse and keyboard messages
* selection - Get the currently selected unit of the local player
* order_immediate - Issue local command, no target
* order_point - Issue local command, point target
* order_target - Issue local command, unit target
* order_enable_debug - After opening, the current local command will be printed on the console, which is used for debugging.

### jass.bignum

Large number library
