## トースト情報

#### 泡が出ている簡単な情報ヒント

#### は使用せずに、自分で実現するように変更することができます

#### このUIは、次のような方法でアクティブにインスタンス化する必要はありません

```lua
--- ゲーム構成では、enableScreenのFrameToastClassカテゴリを有効にする必要があります
Game():enableScreen(FrameToastClass, true)

--- 単位TPL構成では、toastデータを構成する必要があります
--- stringを返さなければならないfunction
UnitTpl(''):toast(function(this) 
  return this:name() 
end)
```

#### Unitのほか、Itemもサポート

```lua
(ItemTpl):toast ...
```
