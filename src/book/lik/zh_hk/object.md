## Object 對象

#### 所有門面一覽

```lua
Ability 技能
AbilityFunc 技能功能
AbilitySlot 技能欄
AbilityTpl 技能模版
AI 戰略
Array 數組
AttackMode 攻擊模式
Attribute 屬性
AttributeFunc 屬性功能
Aura 領域
Bgm 背景音樂
Buff 可操狀態
Camera 鏡頭
Corpse 屍體
Cursor 指針
Destructable 可破壞物
Dialog 對話框
Effect 特效
EffectAttach 特效附着型
Enchant 附魔
Flow 流體
Frame 界面
FrameAnimate 界面動畫
FrameBackdrop 界面背景
FrameBackdropTile 界面背景分型
FrameBar 界面條
FrameBarState 界面狀態條
FrameBlock 界面空佔
FrameButton 界面按鈕
FrameCustom 界面自定義
frameDrag 界面拖拽
FrameHighLight 界面高亮
FrameLabel 界面詞條
FrameList 界面列表
FrameMap 界面地圖
FrameModel 界面模型
FramePop 界面氣泡
FrameText 界面文本
FrameTextarea 界面文本域
FrameToolTips 界面彈層
Game 遊戲
Group 組
Image 圖
Item 物品
ItemFunc 物品功能
ItemSlot 物品欄
ItemTpl 物品模版
Lightning 閃電效果
Matrix 矩陣
Monitor 監聽器
Player 玩家
Procoss 流程
Quest 任務
Rect 區域
Server 服務器
Store 倉貯
Team 隊伍
Timer 計時器
Tpl 模版
UIKit UI套件
Unit 單位
UnitFunc 單位功能
UnitTpl 單位模版
V3d 3D音效
Vcm 面板音效
Vector2 二維向量 
Vector3 三維向量
Vwp 武器音效
WarehouseSlot 倉庫欄
Weather 天氣
```

#### 對象的毀滅管理

```lua
local u = Unit(...)
isDestory(u) -- 判斷對象的存活態
destory(u) -- 毀滅對象
```
