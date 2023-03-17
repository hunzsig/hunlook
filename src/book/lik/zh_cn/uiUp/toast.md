## 吐司信息

#### 一种冒泡的简单信息提示

#### 可不使用，改为自行实现

#### 此UI并不需要主动实例化，使用方法如下

```lua
--- 在游戏配置中，必须启用 enableScreen 的 FrameToastClass 类别
Game():enableScreen(FrameToastClass, true)

--- 在单位TPL配置中，需要为其配置toast数据
--- 一个必须返回 string 的 function
UnitTpl(''):toast(function(this) 
  return this:name() 
end)
```

#### 除了Unit外，Item也支持

```lua
(ItemTpl):toast ...
```