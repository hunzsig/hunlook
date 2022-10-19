## ydwe lua引擎使用說明

[來源 github/actboy168/jass2lua](https://github.com/actboy168/jass2lua/edit/master/lua-engine.md)

> 記住：bug止於有能之士

### 簡介

ydwe lua引擎(以下簡稱lua引擎)是一個嵌入到《魔獸爭霸III》(以下簡稱魔獸)中的一個插件，它可以讓魔獸可以執行lua並且調用魔獸的導出函數(在common.j內定義的函數)
，就像使用jass那樣。本說明假定你已經掌握了jass和lua的相關語法，有關語法的問題不再另行解釋。

### 入口

在jass內調用 `call Cheat("exec-lua: hello")`，這等價於在lua裏調用了 `require 'hello'` 。lua引擎已經把地圖內的文件加載到搜索路徑，所以地圖內的hello.lua將會得到執行。

### lua引擎對標準lua的修改

為了適合在魔獸內使用lua引擎對lua略有修改。

1. math.randomseed改為使用jass函數SetRandomSeed實現。
2. math.random改為使用jass函數GetRandomReal實現。
3. table元素隨機化種子依賴於魔獸內部的隨機種子。
4. 屏蔽了部分被認為不安全的函數

### 內置庫

lua引擎一共有12個內置庫，可以通過"require '庫名'"調用。

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

jass.common庫包含common.j內註冊的所有函數。 （不包括BJ）

```lua
	local jass = require 'jass.common'
	print(jass.GetHandleId(jass.Player(0)))
```

### jass.ai

jass.ai庫包含common.ai內註冊的所有函數。

```lua
	local jass = require 'jass.common'
	local ai = require 'jass.ai'
	print(ai.UnitAlive(jass.GetTriggerUnit()))
```

### jass.globals

jass.globals庫可以讓你訪問到jass內的全局變量。
> 你可以使用此庫訪問預設在大地圖的對象。

```lua
	local cg = require 'jass.globals'
    print(cg.udg_i) --獲取jass中定義的i整數
```

### jass.japi

jass.japi庫當前已經註冊的所有japi函數。（包含dz函數）

```lua
	local jass = require 'jass.common'
	local japi = require 'jass.japi'
	japi.EXDisplayChat(jass.Player(0), 0, "Hello!")
```

japi函數不同環境下可能會略有不同，你可以通過pairs遍曆當前的所有japi函數

```lua
	for k, v in pairs(require 'jass.japi') do
		print(k, v)
	end
```

### jass.hook

jass.hook庫可以對common.j內註冊的函數下鈎子。註：jass.common庫不會受到影響。

同時，為了避免jass和lua之間傳遞浮點數時産生誤差，通過jass.hook傳遞到lua中的浮點數，並不是number類型，而是userdata。當你需要**精確**地操縱浮點數時，也請註意這點。

```lua
	local hook = require 'jass.hook'
	function hook.CreateUnit(pid, uid, x, y, face, realCreateUnit)
		-- 當jass內調用CreateUnit時，就會被執行
		print('CreateUnit')
		print(type(x))
		return realCreateUnit(pid, uid, x, y, face)
	end
```

### jass.slk

jass.slk庫可以在地圖運行時讀取地圖內的slk/w3*文件。

```lua
	local slk = require 'jass.slk'
	print(slk.ability.AHbz.Name)
```

你也可以遍曆一個錶或者一個物體（不建議方式）

```lua
	local slk = require 'jass.slk'
	for k, v in pairs(slk.ability) do
		print(k, v)
	end
	for k, v in pairs(slk.ability.AHbz) do
		print(k, v)
	end
```

slk包含

* unit
* item
* destructable
* doodad
* ability
* buff
* upgrade
* misc

與你物體編輯器中的項目一一對應。

獲取數據時使用的索引你可以在物體編輯器中通過Ctrl+D來查詢到

註意，當訪問正確時返回值永遠是字符串。如果你獲取的是某個單位的生命值，你可能需要使用tonumber來進行轉換。當訪問不正確時將返回nil。

### jass.runtime

#### jass.runtime庫可以在地圖運行時獲取lua引擎的信息或修改lua引擎的部分配置。

```lua
	local runtime = require 'jass.runtime'
```

##### runtime.console(默認為false)

賦值為true後會打開一個cmd窗口，print與console.write函數可以輸出到這裏

```lua
	runtime.console = true
```

##### runtime.version

返回當前lua引擎的版本號

```lua
	print(runtime.version)
```

##### runtime.error_handle

當你的lua腳本出現錯誤時將會調用此函數。

runtime.error_handle有一個默認值，等價於以下函數

```lua
	runtime.error_handle = function(msg)
		print("Error: ", msg, "\n")
	end
```

你也可以讓它輸出更多的信息，比如輸出錯誤時的調用棧

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

註意，註冊此函數後lua腳本的效率會降低(即使並冇有發生錯誤)。

##### runtime.handle_level(默認為0)

lua引擎處理的handle的安全等級，有效值為0~2，註，等級越高，效率越低，安全性越高、

###### 0: handle直接使用number，jass無法了解你在lua中對這個handle的引用情況，也不會通過增加引用計數來保護這個handle

```lua
	local t = jass.CreateTimer()
	print(t) -- 1048000
	type(t) -- "number"
```

###### 1: handle封裝在lightuserdata中，保證handle不能和整數相互轉換，同樣不支持引用計數

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

###### 2: handle封裝在userdata中，lua持有該handle時將增加handle的引用計數。lua釋放handle時會釋放handle的引用計數。

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

##### runtime.sleep(默認為false)

common.j中包含sleep操作的函數有4個，TriggerSleepAction/TriggerSyncReady/TriggerWaitForSound/SyncSelections。當此項為false時，lua引擎會忽略這4個函數的調用，並給予運行時警告。當此項為true時，這4個函數將會得到正確的執行。

但請註意此項為true時將降低lua引擎的運行效率，即使你冇有使用這4個函數。

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

##### runtime.catch_crash(默認為true)

調用jass.xxx/japi.xxx發生崩潰時，會生産一個lua錯誤，並忽略這個崩潰。你可以註冊jass.runtime.error_handle來獲得這個錯誤。註：開啓此項會略微增加運行時消耗（即使冇有發生錯誤）。

##### runtime.debugger

啓動調試器並監聽指定端口。需要使用`VSCode`並安裝[Lua Debug](https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug)。

```lua
	runtime.debugger = 4279
```

### jass.console

#### jass.console與控製臺相關

##### console.enable(默認為false)

賦值為true後會打開一個cmd窗口，print與console.write函數可以輸出到這裏

```lua
	console.enable = true
```

##### console.write

將utf8編碼的字符串轉化為ansi編碼後輸出到cmd窗口中，如果你需要輸出魔獸中的中文，請使用該函數而不是print

##### console.read

將控製臺中的輸入傳入魔獸中(會自動轉換編碼)

首次調用console.read後將允許用戶在控製臺輸入，輸入完成後按回車鍵提交輸入。

用戶提交完成後，傳入一個函數f來調用console.read，將會調用函數f，並將用戶的輸入作為參數傳入(已轉換為utf8編碼)。

推薦的做法是每0.1秒運行一次console.read，見下麵的例子：

```lua
	local jass    = require 'jass.common'
	local console = require 'jass.console'

	console.write('測試開始...')

	--開啓計時器,每0.1秒檢查輸入
	jass.TimerStart(jass.CreateTimer(), 0.1, true,
		function()

			--檢查CMD窗口中的用戶輸入,如果用戶有提交了的輸入,則回調函數(按回車鍵提交輸入).否則不做任何動作
			console.read(
				function(str)
					--參數即為用戶的輸入.需要註意的是這個函數調用是不同步的(畢竟其他玩家不知道你輸入了什麼)
					jass.DisplayTimedTextToPlayer(jass.Player(0), 0, 0, 60, '你在控製臺中輸入了:' .. str)
				end
			)
		end
	)
```

需要註意的是控製臺輸入是不同步的。

### jass.debug

jass.debug庫能幫助你更深入地剖析lua引擎的內部機製。

* functiondef jass.common或者jass.japi函數的定義

```lua
	local jass = require 'jass.common'
	local dbg = require 'jass.debug'
	print(table.unpack(dbg.functiondef(jass.GetUnitX)))
```

* globaldef jass.globals內值的定義

* handledef handle對應對象的內部定義

* currentpos 當前jass執行到的位置

* handlemax jass虛擬機當前最大的handle

* handlecount jass虛擬機當前的handle數

* h2i/i2h handle和integer的轉換，當你runtime.handle_level不是0時，你可能會需要它

* handle_ref 增加handle的引用

* handle_unref 減少handle的引用

* ~~gchash~~（已廢棄） 指定一張table的gchash，gchash會決定了在其他table中這個table的排序次序
  在默認的情況下，lua對table的排序次序是由隨機數決定的，不同玩家的lua生成的隨機數不一緻，所以下麵的代碼在不同的玩家上執行的次序是不一緻的，這可能會引起不同步掉線

### jass.log

日誌庫

* path 日誌的輸出路徑
* level 日誌的等級，指定等級以上的日誌才會輸出
* 日誌有6個等級 trace、debug、info、warn、error、fatal

```lua
	local log = require 'jass.log'
	log.info('這是一行日誌')
	log.error('這是一行', '日誌')
```

### jass.message

* keyboard 一張錶，魔獸的鍵盤碼
* mouse 本地玩家的鼠標坐標(遊戲坐標)
* button 本地玩家技能按鈕的狀態
* hook 魔獸的消息回調，可以獲得部分鼠標和鍵盤消息
* selection 獲得本地玩家當前選中單位
* order_immediate 發佈本地命令，無目標
* order_point 發佈本地命令，點目標
* order_target 發佈本地命令，單位目標
* order_enable_debug 開啓後，會在控製臺打印當前的本地命令，調試用

### jass.bignum

大數庫
