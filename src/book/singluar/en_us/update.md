## Changelog

> 2022/09

* New math.slopeAngle
* Remove hot automatic process is no longer supported

> 2022/08

* New FrameDisAdaptive
* New Tool Command: clean
* New string.fill
* New table.slice
* Optimization table equal data comparison logic
* Optimization data of amphibious
* Optimization NoFly record of Unit moveType
* Optimization ServerSaveValue KV length judging mechanism
* Optimization enchant reaction
* Optimization japi.Z data source
* Optimization attack motion’s delay
* Fixed bug Unit moveType probability invalid set

> 2022/07

* New Array GC
* New Cursor Type
* New FrameTooltips
* New logger
* New table.wheel
* New Frame.show
* New Ability.worthCost
* Optimization weaponMaterial to weaponSound
* Optimization damage event feedback, changed to data drainage and instantaneous interruption mechanism
* Optimization Image now supports free size
* Optimization Unit the function of order Route cannot be interrupted for no reason now, and supports manual pause
* Fixed sight a bug where the data has a chance of drifting
* Fixed ItemTpl bug with wrong initial pawnable data
* Fixed Image position init bug
* Remove base64
* Remove Unit stand
* Remove The highlight method of the Frame series now needs to be referenced by itself
* Remove The repeated judgment of attach-type effect now needs to be judged by itself
* Remove The underlying Dz Frame Set Parent no longer supports virtual setting only

> 2022/06

* New Destructable replaces Deco
* New The underlying technology of prop, the data sandbox blocking state that never goes wrong
    * ··· Added allow for asynchronous data modification capture
    * ··· You can get, set, and clear in prop without worrying about data problems
* New ability missile、leap、crackFly
    * ··· The callback function is converted to a point data structure
    * ··· The efficiency and accuracy of missiles are greatly improved
    * ··· Leap efficiency Optimization and frivolous turning parameters
    * ··· Optimize crack Fly efficiency and increase multi-dimensional bounce parameters
* New Bgm music split asynchronous data stream instead
* New Vcm universal sound effects, split asynchronous data streams instead
* New V3d surround sound, split asynchronous data stream instead
* New Camera shots, instead of separate asynchronous data streams for real-time control
* New Cursor pointer, now archived in isolation, easily customizable pattern, safe area
* New Frame (including subclasses), implements any event tracking registration mechanism, and can customize peculiar
  events
* New FrameTooltips default display mechanism, more humanized
* New FrameLabel new size and text optimization
* New Game new methods for worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* New math new methods trunc、format、isNaN
* New Image Class
* New must Assertion
* Optimization Buff，exposure time modification interface
* Optimization Game's worthCompare methods are now equal and cannot be judged. The return value will be different
* Optimization ttg
* Optimization prop initial setting mechanism
* Optimization bj params
* Fixed Array the data has the problem of probability disorder. Remove some methods
* Remove all portal methods are renamed position
* Remove most waste FDF with button as the core
* Remove part of the japi functions are sealed and isolated

> 2022/05

* New Attribute methods: cost、castChant、coolDown、coolDownSec
    * ···It can be used to dynamically modify any skill attribute
* New Unit method stature
* Optimization FrameButton
* Optimization ability crashFly
* Fixed Unit punish bugs

> 2022/04

* New Enchantment Separation Execution
* New Event response writer
* New Damage flow execution
* New datum library
* New math.cale
* New table.rand
* New The underlying vitality of prop supports comprehensive dissociation of data flow
* New Buff catcher
* New Worth calculation
* New CoolingInstant`
* Optimization Run cache command
* Optimization Binding mechanism between Item level and Ability level
* Optimization Process transition mechanism
* Fixed A bug where the tool fails in certain situations
* Fixed Player.alert bug
* Fixed FrameLabel adaptive identifying the wrong problem
* Fixed Engine heap history residual bug
* Fixed A bug where prop has a chance of being offset when diff exists
* Remove Game.introduction

> 2022/03

* New skip the run method of the resource
* Fixed known bugs
* Fixed A bug that some event objects are wrong
* Fixed A bug where the tool entered the wrong logical branch when the project name was empty

> 2022/02

* New Preparatory Event Prop
* Optimization Tools
* Optimization Automatic conversion mechanism of attr
* Fixed Asynchronous data may have index offset bug

> 2022/01

* New String magic methods
* New ttg lib
* Optimization Timer

> 2021/12

* PhasedEnd
* Fixed bugs
* New command version

> 2021/11

* Structured UIKit
* New model run

> 2021/09 ~ 10

* New Process
* Optimization Function addition and reconstruction

> 2021/05 ~ 09

* New Lots of functional
* Fixed bugs

> 2021/05/01

* Start
