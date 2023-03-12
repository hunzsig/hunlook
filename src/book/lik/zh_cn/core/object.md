## Object 对象

#### 所有门面一览

```text
Ability 技能
AbilityFunc 技能功能
AbilitySlot 技能栏
AbilityTpl 技能模版
AI 战略
Array 数组
AttackMode 攻击模式
Attribute 属性
AttributeFunc 属性功能
Aura 领域
Bgm 背景音乐
Buff 可操状态
Camera 镜头
Coordinate 座标
Corpse 消逝物
Cursor 指针
Destructable 可破坏物
Dialog 对话框
Effect 特效
EffectAttach 特效附着型
Enchant 附魔
Flow 流体
Frame 界面
FrameAnimate 界面动画
FrameBackdrop 界面背景
FrameBackdropTile 界面背景分型
FrameBalloon 界面气泡对话
FrameBar 界面条
FrameBarState 界面状态条
FrameBlock 界面空占
FrameButton 界面按钮
FrameCustom 界面自定义
frameDrag 界面拖拽
FrameHighLight 界面高亮
FrameLabel 界面词条
FrameList 界面列表
FrameMap 界面地图
FrameModel 界面模型
FrameText 界面文本
FrameTextarea 界面文本域
FrameToast 界面吐司信息
FrameToolTips 界面弹层
Game 游戏
Group 组
Image 图
Item 物品
ItemFunc 物品功能
ItemSlot 物品栏
ItemTpl 物品模版
Lightning 闪电效果
Monitor 监听器
Player 玩家
Pool 池
Procoss 流程
Quest 任务
Region 区域
Screen 荧屏
Server 服务器
Store 仓贮
Team 队伍
Timer 计时器
Tpl 模版
UIKit UI套件
Unit 单位
UnitFunc 单位功能
UnitTpl 单位模版
V3d 3D音效
Vcm 面板音效
Vwp 武器音效
WarehouseSlot 仓库栏
Weather 天气
```

#### 对象的毁灭管理

```lua
local u = Unit(...)
isDestory(u) -- 判断对象的存活态
destory(u) -- 毁灭对象
```

#### 对象的类型判断

```lua
local u = Unit(...)
if (isClass(u,UnitClass)) then
  -- 判断对象是否Unit
end
```

#### 对象的类型父类判断

```lua
local u = Unit(...)
if (instanceof(u, UnitTplClass)) then
  -- 判断对象是否继承自UnitTpl
end
```

#### 对象的继承关系

```lua
local u = Unit(...)
dump(classHierarchy(u)) -- table展示
print(classHierarchyString(u)) -- string展示
```