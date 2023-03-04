## 狀態條

#### 自帶的四種模式狀態指示條，常用於單位血條

#### 如有調整需要，可不使用，改為自行實現

#### 此UI並不需要主動實例化，使用方法如下

```lua
--- 在遊戲配置中，必須啓用 enableScreen 的 FrameBarStateClass 類別
Game():enableScreen(FrameBarStateClass, true)

--- 在單位TPL配置中，需要為其配置狀態條的模式等各種情況
--- 默認為false，false為只有單位受傷才會顯示
--- 不建議全開啓
(Unit):barStateAlways(true)

--- 默認(1) 1簡模式 2左模式 3右模式 4上模式
(Unit):barStateMode(1)
 
--- 自定義條標記線間距（默認0，無效）
--- 最小100，數值不為百整則以floor規整
(Unit):barStateMarker(1000)
```
