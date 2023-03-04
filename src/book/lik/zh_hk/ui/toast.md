## 吐司信息

#### 一種冒泡的簡單信息提示

#### 可不使用，改為自行實現

#### 此UI並不需要主動實例化，使用方法如下

```lua
--- 在遊戲配置中，必須啓用 enableScreen 的 FrameToastClass 類別
Game():enableScreen(FrameToastClass, true)

--- 在單位TPL配置中，需要為其配置toast數據
--- 一個必須返回 string 的 function
UnitTpl(''):toast(function(this) 
  return this:name() 
end)
```

#### 除了Unit外，Item也支持

```lua
(ItemTpl):toast ...
```
