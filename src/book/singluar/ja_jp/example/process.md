## Processプロセス管理

> グローバル熱更新hotLoaderに支えられて、Processの効能は天際を突破するほど強くなった
>
> Processを使ってゲームの流れを記述し、いつでもロールバックテスト、ジャンプテストを行うことができます

### まずプロジェクトにプロセスを書くためのプロセスディレクトリを新規作成します。たとえば、process

```
└── project_demo - プロジェクトディレクトリ
    └── scripts
        └── process - プロジェクトプロセスコード
            └── start.lua -- プロセスはstartで開始
```

初期プロセスで簡単なことを書くことができます。一般的には入り口としてしか使われていないので、

```lua
local process = Process("start")
process.onStart(function(this)
    -- 霧の自動除去のデバッグ
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
end)
```

### nextメソッドを使用して、次のプロセスにジャンプ

```lua
-- 名前でプロセスstartを定義すると、ゲームが起動するときに自動的に実行されます
local process = Process("start")
-- プロセス本体
process.onStart(function(this)
    -- 霧の自動除去のデバッグ
    Game().fog(not DEBUGGING).mark(not DEBUGGING)
    -- nextを使用して次のフローにジャンプできます。ここでtestフローにジャンプします
    this.next("test")
end)
```

### そしてtestプロセスを構築しています

```
└── project_demo - プロジェクトディレクトリ
    └── scripts
        └── process - プロジェクトプロセスコード
            ├── start.lua -- プロセスはstartで開始
            └── test.lua -- testフロー
```

このtest.luaの中に一言響く

```lua
local process = Process("test")
process.onStart(function(this)
    echo("singluar無敵")
end)
```

### プロセス内のリソース管理

> 一般的な局所変数は無視でき、管理しなければよい
>
> しかし、例えばボス攻撃プレイヤーを作成するbossComingというプロセスがあります。
>
> stageにバインドしてコールバックを終了すると削除することができます
>
> これにより、このボスはプロセスがジャンプしたりリセットされたりすると、自動的に消滅します

```lua
local process = Process("bossComing")
process
    .onStart(function(this)
        -- 作成boss
        local boss = TPL_UNIT.BOSS.create(Player(12), 0, 0, 0)
        -- 登録stage
        this.stage("boss", boss)
    end)
    .onOver(function(this)
        -- やっつけるboss
        this.stage("boss").destroy()
    end)
```

### プロセスのジャンプを手動で制御するコマンドを登録することもできます

> 次に例を示します：-proc testを入力すると、実行testがリセットされます
>
> 次の例では：-proc thisを入力すると、現在のプロセスがリセットされます

```lua
if (DEBUGGING) then
    --- プロセス管理
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
            print(p .. "プロセスがリセットされました")
            proc.start()
        end
    end)
end
```
