## Object 物件

#### 所有門面一覽

```lua
Ability 技能
AbilityFunc 技能功能
AbilitySlot 技能欄
AbilityTpl 技能模版
AI 戰略
Array 陣列
AttackMode 攻擊模式
Attribute 屬性
AttributeFunc 屬性功能
Aura 領域
Bgm 背景音樂
Buff 可操狀態
Camera 鏡頭
Corpse 消逝物
Cursor 指標
Destructable 可破壞物
Dialog 對話方塊
Effect 特效
EffectAttach 特效附著型
Enchant 附魔
Flow 流體
Frame 介面
FrameAnimate 介面動畫
FrameBackdrop 介面背景
FrameBackdropTile 介面背景分型
FrameBalloon 介面氣泡對話
FrameBar 介面條
FrameBarState 介面狀態條
FrameBlock 介面空佔
FrameButton 介面按鈕
FrameCustom 介面自定義
frameDrag 介面拖拽
FrameHighLight 介面高亮
FrameLabel 介面詞條
FrameList 介面列表
FrameMap 介面地圖
FrameModel 介面模型
FrameText 介面文字
FrameTextarea 介面文字域
FrameToast 介面吐司資訊
FrameToolTips 介面彈層
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
Screen 熒屏
Server 伺服器
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

#### 物件的毀滅管理

```lua
local u = Unit(...)
isDestory(u) -- 判斷物件的存活態
destory(u) -- 毀滅物件
```

#### 物件的型別判斷

```lua
local u = Unit(...)
if (isClass(u,UnitClass)) then
  -- 判斷物件是否Unit
end
```

#### 物件的型別父類判斷

```lua
local u = Unit(...)
if (instanceof(u, UnitTplClass)) then
  -- 判斷物件是否繼承自UnitTpl
end
```

#### 物件的繼承關係

```lua
local u = Unit(...)
dump(classHierarchy(u)) -- table展示
print(classHierarchyString(u)) -- string展示
```
