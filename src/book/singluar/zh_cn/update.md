## 更新日志

> 2022/12

* 新的 | AI
* 新的 | audio
* 新的 | Buff.key
* 新的 | Buff.name
* 新的 | Buff.icon
* 新的 | Buff.visible
* 新的 | Buff.description
* 优化 | Game.worth*
* 优化 | 部分注释
* 优化 | 部分底层事件栈
* 优化 | we命令不再限制启动只作提醒
* 修复 | ability的hp需求等于hpCur时允许使用的问题
* 修复 | ability.leap Timer.destroy写法问题
* 修复 | order.targetXYZ可能数据丢失的问题

> 2022/11

* 新的 | Missile.scale
* 新的 | EVENT.Unit.BeforeAttack
* 新的 | EVENT.Unit.Be.BeforeAttack
* 新的 | EVENT.Ability.Casting
* 新的 | Unit.attackPoint
* 新的 | Unit.weaponSoundMode
* 新的 | Unit.weaponLength
* 新的 | Unit.weaponHeight
* 新的 | Unit.castAnimation
* 新的 | Unit.keepAnimation
* 新的 | Ability.coolingEnter
* 新的 | japi.DzAPI_Map_GetLastRecommendTime
* 新的 | japi.DzAPI_Map_GetLotteryUsedCount
* 新的 | japi.DzAPI_Map_GameResult_CommitData
* 新的 | japi.DzAPI_Map_IsMapTest
* 新的 | japi.IsTyping
* 删除 | Player.dead
* 删除 | Player.kill
* 删除 | Player.hurt
* 删除 | Player.damage
* 优化 | Server 现采用更优策略且合并数据
* 优化 | ability.lightning
* 优化 | ability.leap
* 优化 | 方形指针的贴图颜色引用
* 修复 | ability.crackFly、crit、lightningchain、split 事件数据错误的问题
* 修复 | 被动及无目标技能在特定情况下使打频定格的问题
* 修复 | 技能持续施法在特定情况无效的问题

> 2022/10

* 新的 | Player.worthRatio 财产获得率
    * ··· assets更新
    * ··· 自动与worth的+操作符联动
    * ··· 默认100%
* 新的 | EVENT.Unit.FeignDead 事件
    * ··· 现在能够复活的单位不会再触发死亡事件而是触发假死事件
* 新的 | Tpl.description
    * ··· 现支持字符串、字符串数组、函数
    * ··· 废弃了{}语法糖
* 新的 | colour 重构
    * ··· assets更新
* 新的 | sync.must
* 新的 | async.must
* 新的 | Frame.upperNode
* 新的 | Frame.lowerNodes
* 新的 | string.repeater
* 新的 | WEATHER_TYPE
    * ··· 增加分类
    * ··· 提示特性
* 新的 | Weather.period
* 新的 | Rect.weather
    * ··· 支持多天气
* 优化 | 所有音效的 duration 时长返回秒
* 优化 | 工具支持重复资源检测
* 优化 | 工具model命令现在对路径带有item_的模型缩放为2.00
* 优化 | japi 二次封装FPS
* 优化 | japi DzConvertWorldPosition采用一种更强的畸变
* 优化 | Image show 在特定情况时几率出现锁定视觉错误的问题
* 优化 | 微调了new指令Demo的例子代码
* 修复 | Frame 在某种布局修改情况下定位偏移的问题
* 修复 | colour.format 在containColor为nil时出错的问题
* 修复 | ability.reborn 在某些情况数据错误的问题

> 2022/09

* 新的 | math.slopeAngle
* 删除 | hot 不再支持自动 process

> 2022/08

* 新的 | FrameDisAdaptive
* 新的 | 工具命令 clean
* 新的 | string.fill
* 新的 | table.slice
* 优化 | table 数据对比逻辑
* 优化 | amphibious 数据对应数据
* 优化 | Unit moveType的非飞行记录
* 优化 | ServerSaveValue kv长度判断机制
* 优化 | enchant 反应目标机制
* 优化 | japi.Z 数据获取机制
* 优化 | Attack 动作时延
* 修复 | Unit moveType 一定几率设定无效的bug

> 2022/07

* 新的 | Array GC机制
* 新的 | Cursor 种类
* 新的 | FrameTooltips 机制
* 新的 | logger 调试日志
* 新的 | table.wheel 轮偏
* 新的 | Frame.show
* 新的 | Ability.worthCost
* 优化 | weaponMaterial 改为 weaponSound
* 优化 | damage 事件反馈，改为数据引流及瞬断机制
* 优化 | Image 现在支持随心尺寸
* 优化 | Unit orderRoute的功能，现在不能被无端打断，并支持手动暂停
* 修复 | sight 数据有几率偏移的bug
* 修复 | ItemTpl 初始pawnable数据错误的bug
* 修复 | Image position init bug
* 删除 | base64
* 删除 | Unit stand
* 删除 | Frame 系列的highlight方法，现在需要自行引用
* 删除 | attach型effect的重复判定，现在需要自行判别
* 删除 | 底层的DzFrameSetParent，不再支持仅执行虚拟设定

> 2022/06

* 新的 | Destructable替代Deco
* 新的 | prop底层技术，绝不出错的数据沙盒封锁态
    * ··· 增加异步数据修改捕捉的允许
    * ··· 可以在prop中get、set、clear而不用再担心数据问题
* 新的 | ability missile、leap、crackFly
    * ··· 回调函数转为point数据结构体
    * ··· missile效率精准度大大提升
    * ··· leap效率优化且可轻浮转弯参数
    * ··· crackFly效率优化且增加多维弹跳参数
* 新的 | Bgm 音乐，改为分离异步式数据流
* 新的 | Vcm 普遍音效，改为分离异步式数据流
* 新的 | V3d 环绕音效，改为分离异步式数据流
* 新的 | Camera 镜头，改为实时控制的分离异步式数据流
* 新的 | Cursor 指针，现在封存隔离，可轻松自定义图案、安全区域
* 新的 | Frame（包括子类），实现任意事件跟踪注册机制，可以自定义奇特事件
* 新的 | FrameTooltips 默认展示机制，更人性化
* 新的 | FrameLabel 新的尺寸和文字优化
* 新的 | Game 新方法 worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新的 | math 新方法 trunc、format、isNaN
* 新的 | Image 类
* 新的 | must 断言
* 优化 | Buff，暴露时间修改接口
* 优化 | Game 的 worthCompare 方法现在相等和无法判断会是不一样的返回值
* 优化 | ttg
* 优化 | prop 初始设定机制
* 优化 | bj 参数
* 修复 | Array 数据有几率错乱的问题。删除部分方法
* 删除 | 所有的portal方法，改名为position
* 删除 | 主要以Button为核心的大部分废物fdf
* 删除 | 部分japi函数，并将之封存隔离

> 2022/05

* 新的 | Attribute方法 增加cost、castChant、coolDown、coolDownSec
    * ···可用于动态修改任意技能属性
* 新的 | Unit方法 stature（单位身材高度）
* 优化 | FrameButton
* 优化 | ability crashFly的功能，提升性能
* 修复 | Unit punish判定有几率错误的问题

> 2022/04

* 新的 | 附魔分离执行
* 新的 | 事件反应编写器
* 新的 | 伤害流执行
* 新的 | datum库
* 新的 | math库函数cale
* 新的 | table库函数rand
* 新的 | prop底层活力，支持全面解离数据流
* 新的 | Buff捕获器
* 新的 | Worth计算
* 新的 | 方法coolingInstant
* 优化 | run缓存命令
* 优化 | Item等级与Ability等级的绑定机制
* 优化 | 流程过渡机制
* 修复 | 工具在特定情况出错的bug
* 修复 | Player.alert bug
* 修复 | FrameLabel adaptive 辨识错误的问题
* 修复 | engine堆桟历史残留bug
* 修复 | prop在diff存在时有几率出现偏移的bug
* 删除 | Game的introduction
* 删除 | 考虑到使用者能力有限，去除hot新增、删除的监听

> 2022/03

* 新的 | 跳过资源的run方法
* 修复 | 已知的bugs
* 修复 | 部分事件对象错误的bug
* 修复 | 工具在项目名为空时进入错误逻辑分支的bug

> 2022/02

* 新的 | 预备事件Prop
* 优化 | 工具精简化
* 优化 | attr的自动换算机制
* 修复 | 异步数据可能出现索引偏移的bug

> 2022/01

* 新的 | 字符串魔术方法
* 新的 | ttg库
* 优化 | Timer

> 2021/12

* 新的 | 命令 version
* 优化 | 阶段性完结
* 修复 | 各种bugs

> 2021/11

* 新的 | 命令 model run
* 优化 | 结构化UIKit

> 2021/09 ~ 10

* 新的 | Process
* 优化 | 功能补充及重构

> 2021/05 ~ 09

* 新的 | 大量功能补充
* 修复 | bugs

> 2021/05/01

* 立项
