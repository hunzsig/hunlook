## JAPI

### 线上服务器环境自带一些JAPI，实装函数一览

> 如果你在其他平台没有下列函数，请自行解决
>
> 以下函数仅供参考，以平台提示为准

```lua
DzAPI_CommonFunc_GetARGBColorValue
DzAPI_CommonFunc_GetARGBColorValuePercent
DzAPI_CommonFunc_SetARGBColorValue
DzAPI_CommonFunc_SetARGBColorValuePercent
DzAPI_Map_ChangeStoreItemCoolDown
DzAPI_Map_ChangeStoreItemCount
DzAPI_Map_GameResult_CommitData
DzAPI_Map_GetActivityData
DzAPI_Map_GetGameStartTime
DzAPI_Map_GetGuildName
DzAPI_Map_GetGuildRole
DzAPI_Map_GetLadderLevel
DzAPI_Map_GetLadderRank
DzAPI_Map_GetMapConfig
DzAPI_Map_GetMapLevel
DzAPI_Map_GetMapLevelRank
DzAPI_Map_GetMatchType
DzAPI_Map_GetPlatformVIP
DzAPI_Map_GetPublicArchive
DzAPI_Map_GetServerArchiveDrop
DzAPI_Map_GetServerArchiveEquip
DzAPI_Map_GetServerValue
DzAPI_Map_GetServerValueErrorCode
DzAPI_Map_GetUserID
DzAPI_Map_HasMallItem
DzAPI_Map_IsBlueVIP
DzAPI_Map_IsRPGLadder
DzAPI_Map_IsRPGLobby
DzAPI_Map_IsRedVIP
DzAPI_Map_Ladder_SetPlayerStat
DzAPI_Map_Ladder_SetStat
DzAPI_Map_MissionComplete
DzAPI_Map_OrpgTrigger
DzAPI_Map_SavePublicArchive
DzAPI_Map_SaveServerValue
DzAPI_Map_Stat_SetStat
DzAPI_Map_Statistics
DzAPI_Map_ToggleStore
DzAPI_Map_UpdatePlayerHero
DzAPI_Map_UseConsumablesItem
DzAPI_UnitType_CountUnitTypeDataArrayAbilID
DzAPI_UnitType_CountUnitTypeDataArrayBoolean
DzAPI_UnitType_CountUnitTypeDataArrayItemID
DzAPI_UnitType_CountUnitTypeDataArrayReal
DzAPI_UnitType_CountUnitTypeDataArrayString
DzAPI_UnitType_CountUnitTypeDataArrayTechID
DzAPI_UnitType_CountUnitTypeDataArrayUnitID
DzAPI_UnitType_CountUnitTypeDataRequires
DzAPI_UnitType_CountUnitTypeDataRequiresamount
DzAPI_UnitType_GetEnum_PreventOrReguirePlace
DzAPI_UnitType_GetEnum_PreventOrReguirePlaceCheck
DzAPI_UnitType_GetEnum_Primary
DzAPI_UnitType_GetEnum_TargetTypeCheck
DzAPI_UnitType_GetEnum_TargetTypeSeries
DzAPI_UnitType_GetEnum_armor
DzAPI_UnitType_GetEnum_atkType
DzAPI_UnitType_GetEnum_buffType
DzAPI_UnitType_GetEnum_deathType
DzAPI_UnitType_GetEnum_defType
DzAPI_UnitType_GetEnum_movetp
DzAPI_UnitType_GetEnum_race
DzAPI_UnitType_GetEnum_regenType
DzAPI_UnitType_GetEnum_type
DzAPI_UnitType_GetEnum_typeCheck
DzAPI_UnitType_GetEnum_warpsOn
DzAPI_UnitType_GetEnum_weapTp
DzAPI_UnitType_GetEnum_weapType
DzAPI_UnitType_GetUnitTypeDataAbilID
DzAPI_UnitType_GetUnitTypeDataArrayAbilID
DzAPI_UnitType_GetUnitTypeDataArrayBoolean
DzAPI_UnitType_GetUnitTypeDataArrayItemID
DzAPI_UnitType_GetUnitTypeDataArrayReal
DzAPI_UnitType_GetUnitTypeDataArrayString
DzAPI_UnitType_GetUnitTypeDataArrayTechID
DzAPI_UnitType_GetUnitTypeDataArrayUnitID
DzAPI_UnitType_GetUnitTypeDataBoolean
DzAPI_UnitType_GetUnitTypeDataInt
DzAPI_UnitType_GetUnitTypeDataReal
DzAPI_UnitType_GetUnitTypeDataRequires
DzAPI_UnitType_GetUnitTypeDataRequiresamount
DzAPI_UnitType_GetUnitTypeDataString
DzAPI_UnitType_GettUnitTypeDataRequirescount
DzAPI_UnitType_ResizeUnitTypeDataArrayAbilID
DzAPI_UnitType_ResizeUnitTypeDataArrayBoolean
DzAPI_UnitType_ResizeUnitTypeDataArrayItemID
DzAPI_UnitType_ResizeUnitTypeDataArrayReal
DzAPI_UnitType_ResizeUnitTypeDataArrayString
DzAPI_UnitType_ResizeUnitTypeDataArrayTechID
DzAPI_UnitType_ResizeUnitTypeDataArrayUnitID
DzAPI_UnitType_ResizeUnitTypeDataRequires
DzAPI_UnitType_ResizeUnitTypeDataRequiresamount
DzAPI_UnitType_SetEnum_PreventOrReguirePlace
DzAPI_UnitType_SetEnum_PreventOrReguirePlaceModify
DzAPI_UnitType_SetEnum_Primary
DzAPI_UnitType_SetEnum_TargetTypeModify
DzAPI_UnitType_SetEnum_TargetTypeSeries
DzAPI_UnitType_SetEnum_armor
DzAPI_UnitType_SetEnum_atkType
DzAPI_UnitType_SetEnum_buffType
DzAPI_UnitType_SetEnum_deathType
DzAPI_UnitType_SetEnum_defType
DzAPI_UnitType_SetEnum_movetp
DzAPI_UnitType_SetEnum_race
DzAPI_UnitType_SetEnum_regenType
DzAPI_UnitType_SetEnum_type
DzAPI_UnitType_SetEnum_typeModify
DzAPI_UnitType_SetEnum_warpsOn
DzAPI_UnitType_SetEnum_weapTp
DzAPI_UnitType_SetEnum_weapType
DzAPI_UnitType_SetUnitTypeDataAbilID
DzAPI_UnitType_SetUnitTypeDataArrayAbilID
DzAPI_UnitType_SetUnitTypeDataArrayBoolean
DzAPI_UnitType_SetUnitTypeDataArrayItemID
DzAPI_UnitType_SetUnitTypeDataArrayReal
DzAPI_UnitType_SetUnitTypeDataArrayString
DzAPI_UnitType_SetUnitTypeDataArrayTechID
DzAPI_UnitType_SetUnitTypeDataArrayUnitID
DzAPI_UnitType_SetUnitTypeDataBoolean
DzAPI_UnitType_SetUnitTypeDataInt
DzAPI_UnitType_SetUnitTypeDataReal
DzAPI_UnitType_SetUnitTypeDataRequires
DzAPI_UnitType_SetUnitTypeDataRequiresamount
DzAPI_UnitType_SetUnitTypeDataString
DzAPI_UnitstateToInteger
DzClickFrame
DzConvertWorldPosition
DzCreateCommandButton
DzCreateFrame
DzCreateFrameByTagName
DzCreateSimpleFrame
DzDebugString
DzDestroyFrame
DzDestructablePosition
DzDotaInfo_IsPlayerRandom
DzDotaInfo_IsRepicked
DzDotaInfo_Item
DzDotaInfo_Item_HE
DzDotaInfo_Item_TM
DzEnableWideScreen
DzEvent_Building_Cancel
DzEvent_Building_Dead
DzEvent_Building_Finish
DzEvent_Building_Start
DzEvent_Hero_Dead
DzEvent_Hero_Level
DzEvent_Item_Drop
DzEvent_Item_Pickup
DzEvent_Item_Sell
DzEvent_Item_Use
DzEvent_Tech_Cancel
DzEvent_Tech_Finish
DzEvent_Tech_Start
DzEvent_Unit_Cancel
DzEvent_Unit_ChangeOwner
DzEvent_Unit_Dead
DzEvent_Unit_Finish
DzEvent_Unit_Hired
DzEvent_Unit_Start
DzExecuteFunc
DzFrameAddText
DzFrameCageMouse
DzFrameClearAllPoints
DzFrameEditBlackBorders
DzFrameFindByName
DzFrameGetAlpha
DzFrameGetChatMessage
DzFrameGetCommandBarButton
DzFrameGetEnable
DzFrameGetHeight
DzFrameGetHeroBarButton
DzFrameGetHeroHPBar
DzFrameGetHeroManaBar
DzFrameGetItemBarButton
DzFrameGetMinimap
DzFrameGetMinimapButton
DzFrameGetName
DzFrameGetParent
DzFrameGetPortrait
DzFrameGetText
DzFrameGetTextSizeLimit
DzFrameGetTooltip
DzFrameGetTopMessage
DzFrameGetUnitMessage
DzFrameGetUpperButtonBarButton
DzFrameGetValue
DzFrameHideInterface
DzFrameIsVisible
DzFrameSetAbsolutePoint
DzFrameSetAllPoints
DzFrameSetAlpha
DzFrameSetAnimate
DzFrameSetAnimateOffset
DzFrameSetEnable
DzFrameSetFocus
DzFrameSetFont
DzFrameSetMinMaxValue
DzFrameSetModel
DzFrameSetParent
DzFrameSetPoint
DzFrameSetPriority
DzFrameSetScale
DzFrameSetScript
DzFrameSetScriptByCode
DzFrameSetSize
DzFrameSetStepValue
DzFrameSetText
DzFrameSetTextAlignment
DzFrameSetTextColor
DzFrameSetTextSizeLimit
DzFrameSetTexture
DzFrameSetTooltip
DzFrameSetUpdateCallback
DzFrameSetUpdateCallbackByCode
DzFrameSetValue
DzFrameSetVertexColor
DzFrameShow
DzGetClientHeight
DzGetClientWidth
DzGetColor
DzGetConvertWorldPositionX
DzGetConvertWorldPositionY
DzGetGameMode
DzGetGameUI
DzGetLocale
DzGetMemoryCache
DzGetMouseFocus
DzGetMouseTerrainX
DzGetMouseTerrainY
DzGetMouseTerrainZ
DzGetMouseX
DzGetMouseXRelative
DzGetMouseY
DzGetMouseYRelative
DzGetPlayerInitGold
DzGetPlayerName
DzGetPlayerSelectedHero
DzGetPushContext
DzGetTriggerKey
DzGetTriggerKeyPlayer
DzGetTriggerSyncData
DzGetTriggerSyncPlayer
DzGetTriggerSyncPrefix
DzGetTriggerUIEventFrame
DzGetTriggerUIEventPlayer
DzGetUnitNeededXP
DzGetUnitUnderMouse
DzGetWheelDelta
DzGetWindowHeight
DzGetWindowWidth
DzGetWindowX
DzGetWindowY
DzIsKeyDown
DzIsMouseOverUI
DzIsWindowActive
DzLoadToc
DzOriginalUIAutoResetPoint
DzPlatform_GameStart
DzPlatform_HasGameOver
DzPlatform_HasGameOver_Player
DzSaveMemoryCache
DzSetCustomFovFix
DzSetMemory
DzSetMousePos
DzSetParams
DzSetUnitID
DzSetUnitModel
DzSetUnitPosition
DzSetUnitTexture
DzSetWar3MapMap
DzSimpleFontStringFindByName
DzSimpleFrameFindByName
DzSimpleFrameShow
DzSimpleTextureFindByName
DzSyncBuffer
DzSyncData
DzSyncDataImmediately
DzTriggerRegisterKeyEvent
DzTriggerRegisterKeyEventByCode
DzTriggerRegisterMouseEvent
DzTriggerRegisterMouseEventByCode
DzTriggerRegisterMouseMoveEvent
DzTriggerRegisterMouseMoveEventByCode
DzTriggerRegisterMouseWheelEvent
DzTriggerRegisterMouseWheelEventByCode
DzTriggerRegisterSyncData
DzTriggerRegisterWindowResizeEvent
DzTriggerRegisterWindowResizeEventByCode
DzUnitChangeAlpha
DzUnitDisableAttack
DzUnitDisableInventory
DzUnitLearningSkill
DzUnitSetCanSelect
DzUnitSetTargetable
DzUnitSilence
DzUpdateMinimap
EXBlendButtonIcon
EXDclareButtonIcon
EXDisplayChat
EXEffectMatReset
EXEffectMatRotateX
EXEffectMatRotateY
EXEffectMatRotateZ
EXEffectMatScale
EXExecuteScript
EXGetAbilityDataInteger
EXGetAbilityDataReal
EXGetAbilityDataString
EXGetAbilityId
EXGetAbilityState
EXGetAbilityString
EXGetBuffDataString
EXGetEffectSize
EXGetEffectX
EXGetEffectY
EXGetEffectZ
EXGetEventDamageData
EXGetItemDataString
EXGetUnitAbility
EXGetUnitAbilityByIndex
EXGetUnitArrayString
EXGetUnitInteger
EXGetUnitReal
EXGetUnitString
EXPauseUnit
EXSetAbilityAEmeDataA
EXSetAbilityDataInteger
EXSetAbilityDataReal
EXSetAbilityDataString
EXSetAbilityState
EXSetAbilityString
EXSetBuffDataString
EXSetEffectSize
EXSetEffectSpeed
EXSetEffectXY
EXSetEffectZ
EXSetEventDamage
EXSetItemDataString
EXSetUnitArrayString
EXSetUnitCollisionType
EXSetUnitFacing
EXSetUnitInteger
EXSetUnitMoveType
EXSetUnitReal
EXSetUnitString
GetEventDamage
GetUnitState
RequestExtraBooleanData
RequestExtraIntegerData
RequestExtraRealData
RequestExtraStringData
SetUnitState
```
