### UI スイート

### UI スイート(Kit)こうぞう

```
└── my_kit - スイート名
    ├── assets -（*|·）リソースの配置
    │   ├── my.tga - 私の図
    │   ├── btn - マルチレベルディレクトリのサポート
    │   │   └── bag.tga - リュックサックのアイコン
    │   └── brun.mdx - サポートモデルなど
    ├── main.fdf -（·）追加のfdfはサポートされていますが、推奨されていません（main名でなければなりません）
    └── main.lua -（*）スイートスクリプトコード（main名でなければなりません）
```

### シンプルなスイート

```
local kit = 'lik_my'
local this = UIKit(kit)
--- スイート初期化リソース
this:onSetup(function()
    local stage = this:stage()
end)
--- スイートリフレッシュ設定（なし）
this:onRefresh(1, function()
    -- 毎秒何をする
end)
```

### スイートの機能拡張

```
local kit = 'lik_my'
--- キットに注記すると、emmyLuaプラグインは自動的にインデックス化されます
---@class MyUI1
local this = UIKit(kit)
function this:update()
    --- your codes
end

--- 他の呼び出しキットの拡張機能
UIKit('lik_my'):update()
```
