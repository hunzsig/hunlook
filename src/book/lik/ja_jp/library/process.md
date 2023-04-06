## Processプロセス管理

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
process:onStart(function(this)
    -- 霧の自動除去のデバッグ
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
end)
```

### nextメソッドを使用して、次のプロセスにジャンプ

```lua
-- 名前でプロセスstartを定義すると、ゲームが起動するときに自動的に実行されます
local process = Process("start")
-- プロセス本体
process:onStart(function(this)
    -- 霧の自動除去のデバッグ
    Game():fog(not DEBUGGING):mark(not DEBUGGING)
    -- nextを使用して次のフローにジャンプできます。ここでtestフローにジャンプします
    this:next("test")
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
process:onStart(function(this)
    echo("lik無敵")
end)
```

### オーバーコール

#### このプロセスが終了したときに何ができるか

```lua
local process = Process("test")
process:onOver(function(this)
    --- something
end)
```

### フロー内の気泡データ

#### 現在のプロセスでのみ有効なデータがあり、プロセスの終了時に手動で管理する必要があります。これは迅速ではありません

#### プロセスにはバブルデータが用意されています。これは簡単なテーブルで、プロセスの終了時に1次元データを自動的にクリーンアップすることができます

#### たとえば、ボス攻撃プレイヤーを作成するbossCondingというプロシージャがあります。

#### 流れがジャンプしたり終了したりすると、このボスは自動的に解消されるように、気泡にバインドすることができます

> このフレームワークでは、多次元データの処理など、必要に応じて必要な効果を独自に拡張することができるバブルデータの処理が非常に簡単です。

```lua
local process = Process("bossComing")
process
    :onStart(function(this)
        -- 作成boss
        local boss = Unit(TPL_UNIT.BOSS, Player(12), 0, 0, 0)
        -- 登録bubble
        local bubble = this:bubble()
        bubble.boss = boss
    end)
```

### プロセスのジャンプを手動で制御するコマンドを登録することもできます

> 下面是个例子，如敲入 -procテスト将会重置执行 テスト而敲入 -これを処理する将会重置当前流程

```lua
if (DEBUGGING) then
    --- プロセス管理
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
            print(p .. "プロセスがリセットされました")
            ProcessCurrent:over()
            proc:start()
        end
    end)
end
```
