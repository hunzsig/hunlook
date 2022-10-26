## 更新日誌

> 2022/10

* 新的 | Frame.upperNode
* 新的 | Frame.lowerNodes
* 新的 | string.repeater
* 新的 | WEATHER_TYPE
  * ··· 增加分類
  * ··· 提示特性
* 新的 | Weather.period
* 新的 | Rect.weather
  * ··· 支援多天氣
* 最佳化 | 工具支援重複資源檢測
* 最佳化 | japi 二次封裝FPS
* 最佳化 | japi DzConvertWorldPosition採用一種更強的畸變
* 最佳化 | Image show 在特定情況時機率出現鎖定視覺錯誤的問題
* 修復 | Frame 在某種佈局修改情況下定位偏移的問題

> 2022/09

* 新的 | math.slopeAngle
* 刪除 | hot 不再支援自動 process

> 2022/08

* 新的 | FrameDisAdaptive
* 新的 | 工具命令 clean
* 新的 | string.fill
* 新的 | table.slice
* 最佳化 | table 資料對比邏輯
* 最佳化 | amphibious 資料對應資料
* 最佳化 | Unit moveType的非飛行記錄
* 最佳化 | ServerSaveValue kv長度判斷機製
* 最佳化 | enchant 反應目標機製
* 最佳化 | japi.Z 資料獲取機製
* 最佳化 | Attack 動作時延
* 修複 | Unit moveType 一定機率設定無效的bug

> 2022/07

* 新的 | Array GC機製
* 新的 | Cursor 種類
* 新的 | FrameTooltips 機製
* 新的 | logger 除錯日誌
* 新的 | table.wheel 輪偏
* 新的 | Frame.show
* 新的 | Ability.worthCost
* 最佳化 | weaponMaterial 改為 weaponSound
* 最佳化 | damage 事件反饋，改為資料引流及瞬斷機製
* 最佳化 | Image 現在支援隨心尺寸
* 最佳化 | Unit orderRoute的功能，現在不能被無端打斷，並支援手動暫停
* 修複 | sight 資料有機率偏移的bug
* 修複 | ItemTpl 初始pawnable資料錯誤的bug
* 修複 | Image position init bug
* 刪除 | base64
* 刪除 | Unit stand
* 刪除 | Frame 係列的highlight方法，現在需要自行引用
* 刪除 | attach型effect的重複判定，現在需要自行判別
* 刪除 | 底層的DzFrameSetParent，不再支援僅執行虛擬設定

> 2022/06

* 新的 | Destructable替代Deco
* 新的 | prop底層技術，絕不出錯的資料沙盒封鎖態
  * ··· 增加非同步資料修改捕捉的允許
  * ··· 可以在prop中get、set、clear而不用再擔心資料問題
* 新的 | ability missile、leap、crackFly
  * ··· 回撥函式轉為point資料結構體
  * ··· missile效率精準度大大提升
  * ··· leap效率最佳化且可輕浮轉彎引數
  * ··· crackFly效率最佳化且增加多維彈跳引數
* 新的 | Bgm 音樂，改為分離非同步式資料流
* 新的 | Vcm 普遍音效，改為分離非同步式資料流
* 新的 | V3d 環繞音效，改為分離非同步式資料流
* 新的 | Camera 鏡頭，改為實時控製的分離非同步式資料流
* 新的 | Cursor 指標，現在封存隔離，可輕鬆自定義圖案、安全區域
* 新的 | Frame（包括子類），實現任意事件跟蹤序號產生器製，可以自定義奇特事件
* 新的 | FrameTooltips 預設展示機製，更人性化
* 新的 | FrameLabel 新的尺寸和文字最佳化
* 新的 | Game 新方法 worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新的 | math 新方法 trunc、format、isNaN
* 新的 | Image 類
* 新的 | must 斷言
* 最佳化 | Buff，暴露時間修改介面
* 最佳化 | Game 的 worthCompare 方法現在相等和無法判斷會是不一樣的返回值
* 最佳化 | ttg
* 最佳化 | prop 初始設定機製
* 最佳化 | bj 引數
* 修複 | Array 資料有機率錯亂的問題。刪除部分方法
* 刪除 | 所有的portal方法，改名為position
* 刪除 | 主要以Button為核心的大部分廢物fdf
* 刪除 | 部分japi函式，並將之封存隔離

> 2022/05

* 新的 | Attribute方法 增加cost、castChant、coolDown、coolDownSec
  * ···可用於動態修改任意技能屬性
* 新的 | Unit方法 stature（單位身材高度）
* 最佳化 | FrameButton
* 最佳化 | ability crashFly的功能，提升效能
* 修複 | Unit punish判定有機率錯誤的問題

> 2022/04

* 新的 | 附魔分離執行
* 新的 | 事件反應編寫器
* 新的 | 傷害流執行
* 新的 | datum庫
* 新的 | math庫函式cale
* 新的 | table庫函式rand
* 新的 | prop底層活力，支援全麵解離資料流
* 新的 | Buff捕獲器
* 新的 | Worth計算
* 新的 | 方法coolingInstant
* 最佳化 | run快取命令
* 最佳化 | Item等級與Ability等級的繫結機製
* 最佳化 | 流程過渡機製
* 修複 | 工具在特定情況出錯的bug
* 修複 | Player.alert bug
* 修複 | FrameLabel adaptive 辨識錯誤的問題
* 修複 | engine堆桟曆史殘留bug
* 修複 | prop在diff存在時有機率出現偏移的bug
* 刪除 | Game的introduction

> 2022/03

* 新的 | 跳過資源的run方法
* 修複 | 已知的bugs
* 修複 | 部分事件物件錯誤的bug
* 修複 | 工具在專案名為空時進入錯誤邏輯分支的bug

> 2022/02

* 新的 | 預備事件Prop
* 最佳化 | 工具精簡化
* 最佳化 | attr的自動換算機製
* 修複 | 非同步資料可能出現索引偏移的bug

> 2022/01

* 新的 | 字串魔術方法
* 新的 | ttg庫
* 最佳化 | Timer

> 2021/12

* 新的 | 命令 version
* 最佳化 | 階段性完結
* 修複 | 各種bugs

> 2021/11

* 新的 | 命令 model run
* 最佳化 | 結構化UIKit

> 2021/09 ~ 10

* 新的 | Process
* 最佳化 | 功能補充及重構

> 2021/05 ~ 09

* 新的 | 大量功能補充
* 修複 | bugs

> 2021/05/01

* 立項
