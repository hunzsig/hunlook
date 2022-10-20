## 更新日誌

> 2022/10

* 新登場 | string.repeater
* 新登場 | WEATHER_TYPE
    * ··· カテゴリーを追加
    * ··· ヒント特性
* 新登場 | Weather.period
* 新登場 | Rect.weather
    * ··· 多天気をサポート
* 最適化 | ツールは重複リソース検出をサポートする

> 2022/09

* 新的 | math.slopeAngle
* 削除 | hotは自動processをサポートしなくなりました

> 2022/08

* 新登場 | FrameDisAdaptive
* 新登場 | Tool Command: clean
* 新登場 | string.fill
* 新登場 | table.slice
* 最適化 | tableデータ比較ロジック
* 最適化 | amphibiousデータ対応データ
* 最適化 | Unit moveTypeの非飛行記録
* 最適化 | ServerSaveValue KV 長さ判断メカニズム
* 最適化 | enchant 反応目標メカニズム
* 最適化 | japi.Z データ取得メカニズム
* 最適化 | attack 動作の遅延
* 修理 | Unit moveType 一定確率設定が無効なバグ

> 2022/07

* 新登場 | Array GC メカニズム
* 新登場 | Cursor Type
* 新登場 | FrameTooltips
* 新登場 | logger
* 新登場 | table.wheel
* 新登場 | Frame.show
* 新登場 | Ability.worthCost
* 最適化 | weaponMaterial to weaponSound
* 最適化 | damage event feedback, changed to data drainage and instantaneous interruption mechanism
* 最適化 | Image now supports free size
* 最適化 | Unit the function of order Route cannot be interrupted for no reason now, and supports manual pause
* 修理 | sight a bug where the data has a chance of drifting
* 修理 | ItemTpl bug with wrong initial pawnable data
* 修理 | Image position init bug
* 削除 | base64
* 削除 | Unit stand
* 削除 | The highlight method of the Frame series now needs to be referenced by itself
* 削除 | The repeated judgment of attach-type effect now needs to be judged by itself
* 削除 | The underlying Dz Frame Set Parent no longer supports virtual setting only

> 2022/06

* 新登場 | Destructable replaces Deco
* 新登場 | The underlying technology of prop, the data sandbox blocking state that never goes wrong
    * ··· Added allow for asynchronous data modification capture
    * ··· You can get, set, and clear in prop without worrying about data problems
* 新登場 | ability missile、leap、crackFly
    * ··· The callback function is converted to a point data structure
    * ··· The efficiency and accuracy of missiles are greatly improved
    * ··· Leap efficiency Optimization and frivolous turning parameters
    * ··· Optimize crack Fly efficiency and increase multi-dimensional bounce parameters
* 新登場 | Bgm music split asynchronous data stream instead
* 新登場 | Vcm universal sound effects, split asynchronous data streams instead
* 新登場 | V3d surround sound, split asynchronous data stream instead
* 新登場 | Camera shots, instead of separate asynchronous data streams for real-time control
* 新登場 | Cursor pointer, now archived in isolation, easily customizable pattern, safe area
* 新登場 | Frame (including subclasses), implements any event tracking registration mechanism, and can customize peculiar
  events
* 新登場 | FrameTooltips default display mechanism, more humanized
* 新登場 | FrameLabel new size and text optimization
* 新登場 | Game new methods for worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新登場 | math new methods trunc、format、isNaN
* 新登場 | Image Class
* 新登場 | must Assertion
* 最適化 | Buff，exposure time modification interface
* 最適化 | Game's worthCompare methods are now equal and cannot be judged. The return value will be different
* 最適化 | ttg
* 最適化 | prop initial setting mechanism
* 最適化 | bj params
* 修理 | Array the data has the problem of probability disorder. Remove some methods
* 削除 | all portal methods are renamed position
* 削除 | most waste FDF with button as the core
* 削除 | part of the japi functions are sealed and isolated

> 2022/05

* 新登場 | Attribute methods: cost、castChant、coolDown、coolDownSec
    * ···It can be used to dynamically modify any skill attribute
* 新登場 | Unit method stature
* 最適化 | FrameButton
* 最適化 | ability crashFly
* 修理 | Unit punish bugs

> 2022/04

* 新登場 | Enchantment Separation Execution
* 新登場 | Event response writer
* 新登場 | Damage flow execution
* 新登場 | datum library
* 新登場 | math.cale
* 新登場 | table.rand
* 新登場 | The underlying vitality of prop supports comprehensive dissociation of data flow
* 新登場 | Buff catcher
* 新登場 | Worth calculation
* 新登場 | CoolingInstant`
* 最適化 | Run cache command
* 最適化 | Binding mechanism between Item level and Ability level
* 最適化 | Process transition mechanism
* 修理 | A bug where the tool fails in certain situations
* 修理 | Player.alert bug
* 修理 | FrameLabel adaptive identifying the wrong problem
* 修理 | Engine heap history residual bug
* 修理 | A bug where prop has a chance of being offset when diff exists
* 削除 | Game.introduction

> 2022/03

* 新登場 | リソースをスキップするrunメソッド
* 修理 | 既知のバグ
* 修理 | 一部のイベントオブジェクトのエラー
* 修理 | プロジェクト名がNULLの場合ツール入力エラー論理分岐のエラー

> 2022/02

* 新登場 | Preparatory Event Prop
* 最適化 | Tools
* 最適化 | Automatic conversion mechanism of attr
* 修理 | Asynchronous data may have index offset bug

> 2022/01

* 新登場 | String magic methods
* 新登場 | ttg lib
* 最適化 | Timer

> 2021/12

* 段階的終了
* 修理 | bugs
* 新登場 | command version

> 2021/11

* 構造化 | UIKit
* 新登場 | model run

> 2021/09 ~ 10

* 新登場 | Process
* 最適化 | Function addition and reconstruction

> 2021/05 ~ 09

* 新登場 | Lots of functional
* 修理 | bugs

> 2021/05/01

* 始める
