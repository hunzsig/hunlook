### デバッグ & 印刷

> **すべての**デバッグ、-rパッケージ化後、自動的に失効し、安心して使用できる
>
> デバッグごとに**I/Oブロック**が発生し、大量に使用するとカートンが発生します

### 簡単なデバッグ

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
print("こんにちは，世界！")
```

### 詳細なデバッグ

```lua
dump({
    "こんにちは",
    string = "世界",
    table = {
        1, 3, 5,
        7, 9, 72
    }
})
```

![Print](https://gitlab.com/h-document/singluar/-/raw/main/images/print.png)

### トレースデバッグ

```lua
stack()
```

### 強制デバッグ

> mustはブール式を判断し、成立しない場合はプログラムがエラーやトレースのスローを直接中止する

```lua
must(isObject（whichUnit，"Unit) -- 単位が<Unit>であるかどうかを判断する
must(instanceof（whichButton，"Frame"）-- ボタンが<子Frame>であるかどうかを判断する
```

### ファイルログ

> loggerは自動的に分刻みで、デバッグ魔獣カタログにデータを保存します

```lua
logger("message")
```

### オンラインの注意事項

> テストバージョンを使用してオンラインにするとデバッグが有効になります。オンラインバージョンをパッケージ化してプラットフォームをアップロードしてください [参照](https://singluar-fans.hunzsig.org/?p=other&n=pt)