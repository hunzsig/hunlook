## Changelog

> 2022/12

* New | AI
* New | Buff.key
* New | Buff.name
* New | Buff.icon
* New | Buff.visible
* New | Buff.description
* Optimize | Game.worth*
* Optimize | Some comments
* Optimize | The we command is no longer limited to startup as a reminder
* Fix | The problem allowed when the capability hp requirement is equal to hpCur
* Fix | ability. The writing method of leap Timer. destroy
* Fix | order.targetXYZ Possible data loss

> 2022/11

* New | Missile.scale
* New | EVENT.Unit.BeforeAttack
* New | EVENT.Unit.Be.BeforeAttack
* New | EVENT.Ability.Casting
* New | Unit.attackPoint
* New | Unit.weaponSoundMode
* New | Unit.weaponLength
* New | Unit.weaponHeight
* New | Unit.castAnimation
* New | Unit.keepAnimation
* New | Ability.coolingEnter
* New | japi.DzAPI_Map_GetLastRecommendTime
* New | japi.DzAPI_Map_GetLotteryUsedCount
* New | japi.DzAPI_Map_GameResult_CommitData
* New | japi.DzAPI_Map_IsMapTest
* New | japi.IsTyping
* Remove | Player.dead
* Remove | Player.kill
* Remove | Player.hurt
* Remove | Player.damage
* Optimize | Server now adopt a better strategy and consolidate data
* Optimize | ability.lightning
* Optimize | ability.leap
* Optimize | Map Color Reference for Square Pointers
* Fix | ability.crackFly、crit、lightningchain、split wrong event data
* Fix | the problem that passive and non target skills can jam the attack animation under specific circumstances
* Fix | The problem that the continuous casting of the skill is invalid under specific circumstances

> 2022/10

* New | Player.worthRatio
    * ··· assets updated
    * ··· Automatic linkage with the + operator of word
    * ··· defend 100%
* New | EVENT.Unit.FeignDead
    * ··· Units that can now be revived will no longer trigger a Dead event, but will trigger a FeignDead event
* New | Tpl.description
    * ··· now supports string, string[] and function
    * ··· discards the {} syntax sugar
* New | colour refactoring
    * ··· assets updated
* New | sync.must
* New | async.must
* New | Frame.upperNode
* New | Frame.lowerNodes
* New | string.repeater
* New | WEATHER_TYPE
    * ··· add categories
    * ··· more tips
* New | Weather.period
* New | Rect.weather
    * ··· multi weathers
* Optimize | The duration of all sound effects returns seconds
* Optimize | Support duplicate assets detection
* Optimize | If there is item_ in the path name, the scale in the model command becomes 2.00
* Optimize | JAPI secondary packaging FPS
* Optimize | JAPI DzConvertWorldPosition uses a stronger distortion
* Optimize | Image show may have a problem of locking vision error under certain circumstances
* Optimize | The demo example code of the new instruction has been fine tuned
* Fix | The problem of positioning the offset of the frame when the layout is modified
* Fix | colour.format error when containColor is nil
* Fix | ability.reborn data error in some cases

> 2022/09

* New | math.slopeAngle
* Remove | Hot no longer supports automatic process

> 2022/08

* New | FrameDisAdaptive
* New | Tool Command: clean
* New | string.fill
* New | table.slice
* Optimize | table equal data comparison logic
* Optimize | data of amphibious
* Optimize | NoFly record of Unit moveType
* Optimize | ServerSaveValue KV length judging mechanism
* Optimize | enchant reaction
* Optimize | japi.Z data source
* Optimize | attack motion’s delay
* Fix | bug Unit moveType probability invalid set

> 2022/07

* New | Array GC
* New | Cursor Type
* New | FrameTooltips
* New | logger
* New | table.wheel
* New | Frame.show
* New | Ability.worthCost
* Optimize | weaponMaterial to weaponSound
* Optimize | damage event feedback, changed to data drainage and instantaneous interruption mechanism
* Optimize | Image now supports free size
* Optimize | Unit the function of order Route cannot be interrupted for no reason now, and supports manual pause
* Fix | sight a bug where the data has a chance of drifting
* Fix | ItemTpl bug with wrong initial pawnable data
* Fix | Image position init bug
* Remove | base64
* Remove | Unit stand
* Remove | The highlight method of the Frame series now needs to be referenced by itself
* Remove | The repeated judgment of attach-type effect now needs to be judged by itself
* Remove | The underlying Dz Frame Set Parent no longer supports virtual setting only

> 2022/06

* New | Destructable replaces Deco
* New | The underlying technology of prop, the data sandbox blocking state that never goes wrong
    * ··· Added allow for asynchronous data modification capture
    * ··· You can get, set, and clear in prop without worrying about data problems
* New | ability missile、leap、crackFly
    * ··· The callback function is converted to a point data structure
    * ··· The efficiency and accuracy of missiles are greatly improved
    * ··· Leap efficiency Optimize and frivolous turning parameters
    * ··· Optimize crack Fly efficiency and increase multi-dimensional bounce parameters
* New | Bgm music split asynchronous data stream instead
* New | Vcm universal sound effects, split asynchronous data streams instead
* New | V3d surround sound, split asynchronous data stream instead
* New | Camera shots, instead of separate asynchronous data streams for real-time control
* New | Cursor pointer, now archived in isolation, easily customizable pattern, safe area
* New | Frame (including subclasses), implements any event tracking registration mechanism, and can customize peculiar
  events
* New | FrameTooltips default display mechanism, more humanized
* New | FrameLabel new size and text optimization
* New | Game new methods for worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* New | math new methods trunc、format、isNaN
* New | Image Class
* New | must Assertion
* Optimize | Buff，exposure time modification interface
* Optimize | Game's worthCompare methods are now equal and cannot be judged. The return value will be different
* Optimize | ttg
* Optimize | prop initial setting mechanism
* Optimize | bj params
* Fix | Array the data has the problem of probability disorder. Remove some methods
* Remove | all portal methods are renamed position
* Remove | most waste FDF with button as the core
* Remove | part of the japi functions are sealed and isolated

> 2022/05

* New | Attribute methods: cost、castChant、coolDown、coolDownSec
    * ···It can be used to dynamically modify any skill attribute
* New | Unit method stature
* Optimize | FrameButton
* Optimize | ability crashFly
* Fix | Unit punish bugs

> 2022/04

* New | Enchantment Separation Execution
* New | Event response writer
* New | Damage flow execution
* New | datum library
* New | math.cale
* New | table.rand
* New | The underlying vitality of prop supports comprehensive dissociation of data flow
* New | Buff catcher
* New | Worth calculation
* New | CoolingInstant`
* Optimize | Run cache command
* Optimize | Binding mechanism between Item level and Ability level
* Optimize | Process transition mechanism
* Fix | A bug where the tool fails in certain situations
* Fix | Player.alert bug
* Fix | FrameLabel adaptive identifying the wrong problem
* Fix | Engine heap history residual bug
* Fix | A bug where prop has a chance of being offset when diff exists
* Remove | Game.introduction

> 2022/03

* New | skip the run method of the resource
* Fix | known bugs
* Fix | A bug that some event objects are wrong
* Fix | A bug where the tool entered the wrong logical branch when the project name was empty

> 2022/02

* New | Preparatory Event Prop
* Optimize | Tools
* Optimize | Automatic conversion mechanism of attr
* Fix | Asynchronous data may have index offset bug

> 2022/01

* New | String magic methods
* New | ttg lib
* Optimize | Timer

> 2021/12

* PhasedEnd
* Fix | bugs
* New | command version

> 2021/11

* Structured | UIKit
* New | model run

> 2021/09 ~ 10

* New | Process
* Optimize | Function addition and reconstruction

> 2021/05 ~ 09

* New | Lots of functional
* Fix | bugs

> 2021/05/01

* Start
