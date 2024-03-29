## Object

#### Module Functions

```text
limiter Write limit
modifier Differential execution
normalizer Read Normalization
preposition Preprocessing
superposition Superposition execution
```

#### List of all facades

```text
Ability
AbilityFunc
AbilitySlot
AbilityTpl
AI
Array
AttackMode
Attribute
AttributeFunc
Aura
Bgm
Buff
Camera
Coordinate
Cursor
Destructable
Dialog
Effect
EffectAttach
Enchant
Flow
FogModifier
Frame
FrameAnimate
FrameBackdrop
FrameBackdropTile
FrameBar
FrameBlock
FrameButton
FrameCustom
frameDrag
FrameHighLight
FrameLabel
FrameModel
FrameTextBlock
FrameText
FrameTextarea
FrameToolTips
Game
Group
Image
Item
ItemFunc
ItemSlot
ItemTpl
Lightning
Monitor
Player
Pool
Procoss
Quest
Region
Server
Store
Team
Timer
Tpl
UIKit
Unit
UnitFunc
UnitTpl
V3d
Vcm
Vwp
WarehouseSlot
Weather
```

#### Destruction management of objects

```lua
local u = Unit(...)
isDestory(u) -- Judge the survival status of the object
destory(u) -- Destory object
```

#### Object type judgment

```lua
local u = Unit(...)
if (isClass(u,UnitClass)) then
  -- Judge whether the object is Unit
end
```

#### Object type parent class judgment

```lua
local u = Unit(...)
if (instanceof(u, UnitTplClass)) then
  -- Determine whether the object inherits from UnitTpl
end
```

#### Inheritance relationship of object

```lua
local u = Unit(...)
dump(classHierarchy(u)) -- Table display
print(classHierarchyString(u)) -- String display
```

