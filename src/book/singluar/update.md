## 更新日志

> 2022/07

* 新的 Array GC机制
* 新的 Cursor 种类
* 新的 logger 调试日志
* 优化 weaponMaterial 改为 weaponSound
* 优化 damage 事件反馈，改为数据引流及瞬断机制
* 优化 Image 现在支持随心尺寸
* 修复 sight 数据有几率偏移的bug
* 删除 base64
* 删除 Frame 系列的highlight方法，需要自定义引用
* 删除 attach型effect的重复判定，现在需要自行判减

> 2022/06

* 新的 Destructable替代Deco
* 新的 prop底层技术，绝不出错的数据沙盒封锁态
    * ··· 增加异步数据修改捕捉的允许
    * ··· 可以在prop中get、set、clear而不用再担心数据问题
* 新的 ability missile、leap、crackFly
    * ··· 回调函数转为point数据结构体
    * ··· missile效率精准度大大提升
    * ··· leap效率优化且可轻浮转弯参数
    * ··· crackFly效率优化且增加多维弹跳参数
* 新的 Bgm 音乐，改为分离异步式数据流
* 新的 Vcm 普遍音效，改为分离异步式数据流
* 新的 V3d 环绕音效，改为分离异步式数据流
* 新的 Camera 镜头，改为实时控制的分离异步式数据流
* 新的 Cursor 指针，现在封存隔离，可轻松自定义图案、安全区域
* 新的 Frame（包括子类），实现任意事件跟踪注册机制，可以自定义奇特事件
* 新的 FrameTooltips 默认展示机制，更人性化
* 新的 FrameLabel 新的尺寸和文字优化
* 新的 Game 新方法 worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新的 math 新方法 trunc、format、isNaN
* 新的 Image 类
* 新的 must 断言
* 优化 Buff，暴露时间修改接口
* 优化 Game 的 worthCompare 方法现在相等和无法判断会是不一样的返回值
* 优化 ttg
* 优化 prop 初始设定机制
* 优化 bj 参数
* 修复 Array 数据有几率错乱的问题。删除部分方法
* 废弃 所有的portal方法，改名为position
* 废弃 主要以Button为核心的大部分废物fdf
* 废弃 部分japi函数，并将之封存隔离

> 2022/05

* 新的 Attribute方法 增加cost、castChant、coolDown、coolDownSec
    * ···可用于动态修改任意技能属性
* 新的 Unit方法 stature（单位身材高度）
* 优化 FrameButton
* 优化 ability crashFly的功能，提升性能
* 修复 Unit punish判定有几率错误的问题

> 2022/04

* 新的附魔分离执行
* 新的事件反应编写器
* 新的伤害流执行
* 新的datum库
* 新的math库函数cale
* 新的table库函数rand
* 新的prop底层活力，支持全面解离数据流
* 新的Buff捕获器
* 新的Worth计算
* 优化run缓存命令
* 优化Item等级与Ability等级的绑定机制
* 优化流程过渡机制
* 修复工具在特定情况出错的bug
* 修复Player.alert bug
* 修复FrameLabel adaptive 辨识错误的问题
* 修复engine堆桟历史残留bug
* 修复prop在diff存在时有几率出现偏移的bug
* 增加方法coolingInstant
* 删除Game的introduction

> 2022/03

* 新增跳过资源的run方法
* 修复已知的bugs
* 修复部分事件对象错误的bug
* 修复工具在项目名为空时进入错误逻辑分支的bug

> 2022/02

* 新的预备事件Prop
* 工具精简化
* 优化attr的自动换算机制
* 修复异步数据可能出现索引偏移的bug

> 2022/01

* 新的字符串魔术方法
* 新的ttg库
* 优化Timer

> 2021/12

* 阶段性完结
* 测试并修复各种bugs
* 新命令 version

> 2021/11

* 结构化 UIKit
* 新命令 model run

> 2021/09 ~ 10

* 功能补充及优化重构
* 新增 Process

> 2021/05 ~ 09

* 大量功能补充
* bug补充

> 2021/05/01

* 立项
