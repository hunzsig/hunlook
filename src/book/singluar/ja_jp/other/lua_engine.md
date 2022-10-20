## ydwe luaエンジン使用説明

[来源 github/actboy168/jass2lua](https://github.com/actboy168/jass2lua/edit/master/lua-engine.md)

> 覚えておいて：バグは有能な人に止まる

### 概要

ydwe luaエンジン（以下、luaエンジン）は、『魔獣争覇III』（以下、魔獣）に組み込まれたプラグインであり、魔獣がluaを実行し、魔獣の導出関数（common.j内で定義された関数）を呼び出すことができる
ああ、jassを使うように。この説明では、jassとluaの関連文法を把握していると仮定して、文法に関する問題は別に説明しません。

### エントリ

jass内で` call Cheat("exec-lua:hello")を呼び出します。これはlua内で` require'hello'`を呼び出したのと等価です。luaエンジンは地図内のファイルを検索パスにロードしているので、地図内のhello.luaは実行されます。

### 標準luaに対するluaエンジンの変更点

魔獣内でのluaエンジンの使用に適したluaの若干の修正。

1.math.randomseedをjass関数SetRandomSeedを使用して実装するように変更しました。
2.math.randomをjass関数GetRandomRealを使用して実装するように変更しました。
3.table要素ランダム化種子は魔獣内部のランダム種子に依存する。
4.安全ではないと思われる一部の関数がブロックされている

### 組み込みライブラリ

luaエンジンには12個の内蔵ライブラリがあり、「require'ライブラリ名'」で呼び出すことができます。

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

jass.commonライブラリにはcommonが含まれています。jに登録されているすべての関数。（BJを除く）

```lua
	local jass = require 'jass.common'
	print(jass.GetHandleId(jass.Player(0)))
```

### jass.ai

jass.aiライブラリには、common.aiに登録されているすべての関数が含まれています。

```lua
	local jass = require 'jass.common'
	local ai = require 'jass.ai'
	print(ai.UnitAlive(jass.GetTriggerUnit()))
```

### jass.globals

jass.globalsライブラリでは、jass内のグローバル変数にアクセスできます。
> このライブラリを使用して、大マップにプリセットされたオブジェクトにアクセスできます。

```lua
	local cg = require 'jass.globals'
    print(cg.udg_i) --jassで定義されているi整数を取得する
```

### jass.japi

jass.japiライブラリに現在登録されているすべてのjapi関数。（dz関数を含む）

```lua
	local jass = require 'jass.common'
	local japi = require 'jass.japi'
	japi.EXDisplayChat(jass.Player(0), 0, "Hello!")
```

japi関数は環境によって少し異なる場合があります。現在のすべてのjapi関数をpairs経由で巡回することができます

```lua
	for k, v in pairs(require 'jass.japi') do
		print(k, v)
	end
```

### jass.hook

jass.hookライブラリは、common.j内に登録されている関数のフックを外すことができます。注意：jass.commonライブラリは影響を受けません。

同時に、jassとluaとの間で浮動小数点を伝達する際に誤差が生じるのを避けるために、jass.hookがluaに渡す浮動小数点数は、numberタイプではなくuserdataです。浮動小数点数を正確に**操作する必要がある場合も注意してください。

```lua
	local hook = require 'jass.hook'
	function hook.CreateUnit(pid, uid, x, y, face, realCreateUnit)
		-- jass内でCreateUnitを呼び出すと実行される
		print('CreateUnit')
		print(type(x))
		return realCreateUnit(pid, uid, x, y, face)
	end
```

### jass.slk

jass.slkライブラリは、地図の実行時に地図内のslk/w3*ファイルを読み込むことができる。

```lua
	local slk = require 'jass.slk'
	print(slk.ability.AHbz.Name)
```

時計や物体を巡回することもできます（推奨されていません）

```lua
	local slk = require 'jass.slk'
	for k, v in pairs(slk.ability) do
		print(k, v)
	end
	for k, v in pairs(slk.ability.AHbz) do
		print(k, v)
	end
```

slkは、

* unit
* item
* destructable
* doodad
* ability
* buff
* upgrade
* misc


あなたのオブジェクトエディタの項目に対応しています。

データを取得する際に使用するインデックスは、オブジェクトエディタでCtrl+Dで調べることができます。

アクセスが正しい場合、戻り値は常に文字列であることに注意してください。単位のライフ値を取得している場合は、変換にtonumberを使用する必要があるかもしれません。アクセスが正しくない場合はnilを返します。

### jass.runtime

#### jass.runtimeライブラリは、地図の実行時にluaエンジンの情報を取得したり、luaエンジンの構成の一部を変更したりすることができます。

```lua
	local runtime = require 'jass.runtime'
```

##### runtime.console(デフォルトはfalse)

trueに割り当てるとcmdウィンドウが開き、printとconsole.write関数はここに出力できます

```lua
	runtime.console = true
```

##### runtime.version

現在のluaエンジンのバージョン番号を返します

```lua
	print(runtime.version)
```

##### runtime.error_handle

この関数は、luaスクリプトにエラーが発生した場合に呼び出されます。

runtime.error_handleには次の関数と同等のデフォルト値があります。

```lua
	runtime.error_handle = function(msg)
		print("Error: ", msg, "\n")
	end
```

エラー出力時の呼び出しスタックなど、より多くの情報を出力させることもできます

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

注意：この関数を登録すると、エラーが発生していなくてもluaスクリプトの効率が低下します。

##### runtime.handle_level(デフォルトは0です)

luaエンジン処理のhandleのセキュリティレベルは、有効値が0 ~ 2であり、注、レベルが高いほど、効率が低く、安全性が高く、

###### 0: handleはnumberを直接使用しています。jassはあなたがluaでこのhandleを参照していることを理解することができませんし、参照カウントを増やすことでこのhandleを保護することもできません

```lua
	local t = jass.CreateTimer()
	print(t) -- 1048000
	type(t) -- "number"
```

###### 1: handleはlightuserdataにカプセル化され、handleが整数と相互変換できないことを保証し、参照数もサポートしていない

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

###### 2: handleはuserdataにカプセル化され、luaがhandleを保持するとhandleの参照数が増加します。luaがhandleを解放するとhandleの参照数が解放されます。

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

##### runtime.sleep(默认为false)

common.jにsleep操作を含む関数は4つあり、TriggerSleepAction/TriggerSyncReady/TriggerWaitForSound/SyncSelections。この項目がfalseの場合、luaエンジンはこの4つの関数の呼び出しを無視し、ランタイム警告を与えます。この項目がtrueの場合、この4つの関数は正しく実行されます。

ただし、この項目がtrueの場合は、この4つの関数を使用していなくてもluaエンジンの実行効率が低下することに注意してください。

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

##### runtime.catch_crash(默认为true)

jass.xxx/japi.xxxを呼び出してクラッシュが発生すると、luaエラーが生成され、このクラッシュは無視されます。jass.runtimeに登録できます。error_handleはこのエラーを取得します。メモ：このオプションをオンにすると、エラーが発生していなくても、実行時の消費量が少し増加します。
##### runtime.debugger

デバッガを起動し、指定したポートをリスニングします。` VSCode `を使用してインストールする必要があります[Lua Debug](https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug)。

```lua
	runtime.debugger = 4279
```

### jass.console

#### jass.consoleコンソール関連

##### console.enable(デフォルトはfalse)

trueに割り当てるとcmdウィンドウが開き、printとconsole.write関数はここに出力できます

```lua
	console.enable = true
```

##### console.write

utf 8で符号化された文字列をansi符号化に変換してcmdウィンドウに出力します。魔獣の中の中国語を出力する必要がある場合は、printではなくこの関数を使用してください

##### console.read

コンソールからの入力を魔獣に渡す（コードが自動的に変換される）

console.readを最初に呼び出すと、ユーザーはコンソールに入力でき、入力が完了したらEnterキーを押して入力をコミットできます。

ユーザのコミットが完了すると、console.readを呼び出す関数fが渡され、関数fが呼び出され、ユーザの入力がパラメータとして渡されます（utf 8符号化に変換されました）。

推奨する方法は、0.1秒ごとにconsole.readを実行することです。次の例を参照してください。

```lua
	local jass    = require 'jass.common'
	local console = require 'jass.console'

	console.write('テスト開始...')

	--タイマーをオンにし、0.1秒ごとに入力をチェック
	jass.TimerStart(jass.CreateTimer(), 0.1, true,
		function()

			--CMDウィンドウのユーザー入力をチェックし、ユーザーがコミットした入力があればコールバック関数（コールバックキーを押して入力をコミット）を押します。そうでなければ何もしません
			console.read(
				function(str)
					--パラメータはユーザーの入力です。この関数呼び出しは同期されていないことに注意してください（結局、他のプレイヤーはあなたが何を入力したか分からない）
					jass.DisplayTimedTextToPlayer(jass.Player(0), 0, 0, 60, '你在控制台中输入了:' .. str)
				end
			)
		end
	)
```

コンソール入力が非同期であることに注意してください。

### jass.debug

jass.debugライブラリは、luaエンジンの内部メカニズムをより深く分析するのに役立ちます。

*functiondef jass.commonまたはjass.japi関数の定義

```lua
	local jass = require 'jass.common'
	local dbg = require 'jass.debug'
	print(table.unpack(dbg.functiondef(jass.GetUnitX)))
```

* globaldef jass.globals内值的定义

* handledef handle対応オブジェクトの内部定義

* 現在のjass実行先

* handlemax jass仮想マシンの現在最大のhandle

* handlecount jass仮想マシンの現在のhandle数

* runtime.handle _levelが0でない場合、必要になる可能性があります

* handle_ref handleの参照を追加

* handle_unref handleの参照を減らす

* ~~gchash~~（破棄）テーブルのgchashを指定すると、gchashは他のテーブルにおけるこのテーブルのソート順を決定します

デフォルトでは、luaのtableに対するソート順序は乱数によって決定され、プレイヤーのluaによって生成される乱数は一致しないため、次のコードはプレイヤーによって実行される順序が一致しないため、非同期ドロップを引き起こす可能性があります

### jass.log

ログ・ライブラリ

*pathログの出力パス
*レベルを指定したレベル以上のログが出力されるlevelログのレベル
*ログには6段階のtrace、debug、info、warn、error、fatalがあります

```lua
	local log = require 'jass.log'
	log.info('これはログの行です')
	log.error('これは一行です', 'ログ')
```

### jass.message

* keyboard表、魔獣のキーボードコード
* mouseネイティブプレイヤーのマウス座標（ゲーム座標）
* buttonローカルプレイヤースキルボタンの状態
* hook魔獣のメッセージコールバックにより、マウスとキーボードの一部のメッセージを得ることができます
*ローカルプレイヤーの現在選択されている単位を選択
* order_immediateターゲットなしでローカルコマンドを発行
* order_pointローカルコマンドを発行し、ポイントターゲット
* order_targetはローカルコマンドを発行し、単位ターゲット
* order_enable_debugがオンになると、コンソールに現在のローカルコマンドが印刷され、デバッグ用

### jass.bignum

だいすうライブラリ
