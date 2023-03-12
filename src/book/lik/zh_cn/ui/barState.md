## 状态条

#### 自带的四种模式状态指示条，常用于单位血条

#### 如有调整需要，可不使用，改为自行实现

#### 此UI并不需要主动实例化，使用方法如下

```lua
--- 在游戏配置中，必须启用 enableScreen 的 FrameBarStateClass 类别
Game():enableScreen(FrameBarStateClass, true)

--- 在单位TPL配置中，需要为其配置状态条的模式等各种情况
--- 默认为false，false为只有单位受伤才会显示
--- 不建议全开启
(Unit):barStateAlways(true)

--- 默认(1) 1简模式 2左模式 3右模式 4上模式
(Unit):barStateMode(1)
 
--- 自定义条标记线间距（默认0，无效）
--- 最小100，数值不为百整则以floor规整
(Unit):barStateMarker(1000)
```