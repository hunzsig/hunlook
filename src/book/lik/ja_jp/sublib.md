## 拡張ライブラリ

#### フレームワーク機能ライブラリ library はすべて強力ですが、いつも満足できないときがあります

#### プロジェクト構築後に独立してローカルコアライブラリ sublibrary を作成できます

#### sublibrary を使用することには多くのメリットがあり、sublibrary の外に書くことを強く推奨しない

* 自動ロード、ツールリンクに貼り合わせる
* 管理が容易で、メンテナンスコストを大幅に削減
* さまざまなプロジェクト間で容易に復刻できるようにするためのパス強制
* ルール適応、混同に対応した自動処理

#### 次に、Gameのための方法を拡張する過程を示します

```
demoという新しいプロジェクトを構築する
```

#### libraryのディレクトリ構造から、oopの下にclassがあることがわかる

#### classにはゲームオブジェクトの実装ソースgame.luaがある

```lua
参照libraryへのパス
lik\library\oop\class\game.lua

相対的にサブブレイブリーのパスを構築する
demo\sublibrary\oop\class\game.lua
```

#### classを参照すると、メソッドinfoCenterを追加できます

> この例はデフォルトnewの新規プロジェクトにすでに含まれています

```lua
---@type GameClass
local class = Class(GameClass)

---@param modify string|nil
---@return self|string
function class:infoCenter(modify)
    return self:prop("infoCenter", modify)
end
```

#### 既存の機能を拡張するほか、新規モジュールもサポートしており、自由に機能することができます
