## Object 對象

#### 所有門面一覽

```text
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
Coordinate 座標
Corpse 消逝物
Cursor 指針
Destructable 可破壞物
Dialog 對話框
Effect 特效
EffectAttach 特效附着型
Enchant 附魔
Flow 流體
FogModifier 可見度修正器
Frame 界面
FrameAnimate 界面動畫
FrameBackdrop 界面背景
FrameBackdropTile 界面背景分型
FrameBalloon 界面氣泡對話
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
FrameText 界面文本
FrameTextarea 界面文本域
FrameToast 界面吐司信息
FrameToolTips 界面彈層
Game 遊戲
Group 組
Image 圖
Item 物品
ItemFunc 物品功能
ItemSlot 物品欄
ItemTpl 物品模版
Lightning 閃電效果
Monitor 監聽器
Player 玩家
Pool 池
Procoss 流程
Quest 任務
Region 區域
Screen 熒屏
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

#### 對象的類型判斷

```lua
local u = Unit(...)
if (isClass(u,UnitClass)) then
  -- 判斷對象是否Unit
end
```

#### 對象的類型父類判斷

```lua
local u = Unit(...)
if (instanceof(u, UnitTplClass)) then
  -- 判斷對象是否繼承自UnitTpl
end
```

#### 對象的繼承關係

```lua
local u = Unit(...)
dump(classHierarchy(u)) -- table展示
print(classHierarchyString(u)) -- string展示
```
