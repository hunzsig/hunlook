## API大全

* [B]builtIn\blizzard.lua
* [L]**builtIn\console\build.lua**
```
JassRuntime.error_handle(msg)
print(...) JassConsole.write(...)
stack(...)
dump(value, description, nesting)
err(val)
```
* [L]**builtIn\console\dist.lua**
```
print(...)
stack(...)
dump(value, description, nesting)
err(val)
```
* [L]**builtIn\console\go.lua**
```
stack(...)
dump(value, description, nesting)
```
* [L]**builtIn\console\test.lua**
```
JassRuntime.error_handle(msg)
print(...) JassConsole.write(...)
tlen(table)
stack(...)
dump(value, description, nesting)
err(val)
```
* [L]**builtIn\echo.lua**
```
echo(msg, whichPlayer, duration, x, y)
```
* [L]**builtIn\engine.lua**
```
c2i(idChar)
i2c(id)
```
* [L]**builtIn\id.lua**
```
HL_ID_INIT()
```
* [L]**builtIn\initialization.lua**
```
```
* [B]const\abilityTarget.lua
* [L]**const\attribute.lua**
```
ATTR_CONFIGURATOR(conf)
```
* [B]const\cache.lua
* [B]const\damageSource.lua
* [B]const\event.lua
* [B]const\hero.lua
* [B]const\hotKey.lua
* [B]const\item.lua
* [B]const\keyboard.lua
* [B]const\monitor.lua
* [B]const\orderStr.lua
* [B]const\target.lua
* [B]const\unit.lua
* [L]**foundation\array.lua**
```
isArray(this)
Array()
```
* [L]**foundation\cache.lua**
```
hcache.exist(handle, key)
hcache.alloc(handle)
hcache.protect(handle)
hcache.protected(handle)
hcache.free(handle, key)
hcache.set(handle, key, value)
hcache.get(handle, key, default)
```
* [L]**foundation\color.lua**
```
hcolor.hex(str, color)
hcolor.mixed(str, color)
hcolor.gold(str)
hcolor.white(str)
hcolor.black(str)
hcolor.grey(str)
hcolor.greyDeep(str)
hcolor.redLight(str)
hcolor.red(str)
hcolor.greenLight(str)
hcolor.green(str)
hcolor.yellowLight(str)
hcolor.yellow(str)
hcolor.orangeLight(str)
hcolor.orange(str)
hcolor.skyLight(str)
hcolor.sky(str)
hcolor.seaLight(str)
hcolor.sea(str)
hcolor.purpleLight(str)
hcolor.purple(str)
hcolor.format(str, containColor, options)
```
* [L]**foundation\damaging.lua**
```
damaging.defined(key, callFunc)
```
* [L]**foundation\description.lua**
```
description.setPercentKey(keys)
description.isPercent(key)
description.noName(name)
description.attribute(attr, sep, indent)
description.attributeResearch(attr)
description.unitName(v)
description.unitTip(v)
description.unitUbertip(v)
description.heroName(v)
description.heroTip(v)
description.heroUbertip(v)
description.abilityName(v)
description.abilityTip(v)
description.abilityResearchtip(v)
description.abilityUbertip(v)
description.abilityResearchubertip(v)
description.itemName(v)
description.itemTip(v)
description.itemUbertip(v)
description.itemDescription(v)
description.buffEditorName(v)
description.buffTip(v)
description.buffUbertip(v)
description.upgradeName(v)
description.upgradeUbertip(v)
```
* [L]**foundation\math.lua**
```
math.random(n, m)
math.polarProjection(x, y, dist, angle)
math.round(decimal, n)
math.disparity(value1, value2)
math.numberFormat(value, n)
math.integerFormat(value)
math.angle(x1, y1, x2, y2)
math.distance(x1, y1, x2, y2)
math.getMaxDistanceInRect(w, h, deg)
math.date(timestamp)
```
* [L]**foundation\mbstring.lua**
```
mbstring.len(inputStr)
mbstring.split(str, size)
```
* [L]**foundation\string.lua**
```
getmetatable('').__index(str, i)
getmetatable('').__call(str, i, j)
string.vkey(t)
string.addslashes(s)
string.stripslashes(s)
string.explode(delimeter, str)
string.implode(delimeter, table)
string.split(str, size)
string.strpos(str, pattern)
string.findAllPos(str, pattern)
string.findCount(str, pattern)
string.random(n)
string.trim(str)
```
* [L]**foundation\table.lua**
```
table.section(n1, n2)
table.random(arr, n)
table.shuffle(arr)
table.reverse(arr)
table.repeater(params, qty)
table.clone(org)
copy(org1, res)
table.merge(...)
table.includes(arr, val)
table.delete(arr, val, qty)
table.value(arr, key)
table.obj2arr(obj, keyMap)
```
* [B]h-lua.lua
* [L]**lib\attribute.lua**
```
hattribute.setRelation(relation)
hattribute.set(whichUnit, during, data)
hattribute.get(whichUnit, attr, default)
hattribute.caleAttribute(damageSrc, isAdd, whichUnit, attr, times)
```
* [L]**lib\attributeSetter.lua**
```
hattributeSetter.getDecimalTemporaryStorage(whichUnit, attr)
hattributeSetter.setDecimalTemporaryStorage(whichUnit, attr, value)
hattributeSetter.relyRegister(whichUnit)
hattributeSetter.setUnitMaxLife(whichUnit, futureVal)
hattributeSetter.setUnitMaxMana(whichUnit, futureVal)
hattributeSetter.setUnitAttackWhite(whichUnit, futureVal, diff)
hattributeSetter.setUnitAttackGreen(whichUnit, futureVal)
hattributeSetter.setUnitAttackRange(whichUnit, futureVal)
hattributeSetter.setUnitAttackSpace(whichUnit, futureVal)
hattributeSetter.setUnitAttackSpeed(whichUnit, futureVal)
hattributeSetter.setUnitDefendWhite(whichUnit, futureVal)
hattributeSetter.setUnitDefendGreen(whichUnit, futureVal)
hattributeSetter.setUnitThree(whichUnit, futureVal, attr)
hattributeSetter.relation(whichUnit, attr, diff)
hattributeSetter.init(whichUnit)
hattributeSetter.isValType(field, valType)
hattributeSetter.setHandle(whichUnit, attr, opr, val, during)
```
* [L]**lib\award.lua**
```
haward.setShareRange(range)
haward.forUnit(whichUnit, exp, gold, lumber)
haward.forUnitExp(whichUnit, exp)
haward.forUnitGold(whichUnit, gold)
haward.forUnitLumber(whichUnit, lumber)
haward.forGroup(whichUnit, exp, gold, lumber)
haward.forGroupExp(whichUnit, exp)
haward.forGroupGold(whichUnit, gold)
haward.forGroupLumber(whichUnit, lumber)
haward.forPlayer(gold, lumber)
haward.forPlayerGold(gold)
haward.forPlayerLumber(lumber)
```
* [L]**lib\camera.lua**
```
hcamera.reset(whichPlayer, during)
hcamera.apply(whichPlayer, during, cameraSetup)
hcamera.toXY(whichPlayer, during, x, y)
hcamera.toUnit(whichPlayer, during, whichUnit)
hcamera.lock(whichPlayer, whichUnit)
hcamera.changeDistance(whichPlayer, diffDistance)
hcamera.shock(whichPlayer, whichType, during, scale)
```
* [L]**lib\cmd.lua**
```
hcmd(pattern, callFunc)
```
* [L]**lib\dialog.lua**
```
hdialog.hotkey(key)
hdialog.create(whichPlayer, options, action)
```
* [L]**lib\effect.lua**
```
heffect.destroy(e)
heffect.scale(e, x, y, z)
heffect.speed(e, spd)
heffect.xyz(model, x, y, z, duration)
heffect.attach(model, targetUnit, attach, duration)
```
* [L]**lib\enemy.lua**
```
henemy.set(name, color, playerIndexes, isShareSight)
henemy.getPlayer(createQty, teamNo)
henemy.isShareSight(teamNo)
henemy.create(options)
```
* [L]**lib\event.lua**
```
hevent.free(handle)
hevent.pool(conditionFunc, regEvent)
hevent.poolRed(handle, conditionAction, regEvent)
hevent.reaction(evt, ...)
hevent.setLastDamage(sourceUnit, targetUnit)
hevent.getUnitLastDamageSource(whichUnit)
hevent.getUnitLastDamageTarget(whichUnit)
hevent.getPlayerLastDamageTarget(whichPlayer)
hevent.data(handle, evt, init)
hevent.unregister(handle, evt, key)
hevent.register(handle, evt, ...)
hevent.trigger(handle, key, triggerData)
hevent.onBeAttackReady(whichUnit, callFunc)
hevent.onAttack(whichUnit, callFunc)
hevent.onBeAttack(whichUnit, callFunc)
hevent.onSkillStudy(whichUnit, callFunc)
hevent.onSkillReady(whichUnit, callFunc)
hevent.onSkillCast(whichUnit, callFunc)
hevent.onSkillStop(whichUnit, callFunc)
hevent.onSkillEffect(whichUnit, callFunc)
hevent.onSkillFinish(whichUnit, callFunc)
hevent.onItemUsed(whichUnit, callFunc)
hevent.onItemDrop(whichUnit, callFunc)
hevent.onItemGet(whichUnit, callFunc)
hevent.onItemPawn(whichUnit, callFunc)
hevent.onItemSell(whichUnit, callFunc)
hevent.onUnitSell(whichUnit, callFunc)
hevent.onItemDestroy(whichItem, callFunc)
hevent.onDamage(whichUnit, callFunc)
hevent.onBeDamage(whichUnit, callFunc)
hevent.onDead(whichUnit, callFunc)
hevent.onKill(whichUnit, callFunc)
hevent.onReborn(whichUnit, callFunc)
hevent.onExp(whichUnit, callFunc)
hevent.onLevelUp(whichUnit, callFunc)
hevent.onUpgradeStart(whichUnit, callFunc)
hevent.onUpgradeCancel(whichUnit, callFunc)
hevent.onUpgradeFinish(whichUnit, callFunc)
hevent.onEnterUnitRange(whichUnit, radius, callFunc)
hevent.onEnterRect(whichRect, callFunc)
hevent.onLeaveRect(whichRect, callFunc)
hevent.onConstructStart(whichPlayer, callFunc)
hevent.onConstructCancel(whichPlayer, callFunc)
hevent.onConstructFinish(whichPlayer, callFunc)
hevent.onChat(whichPlayer, pattern, callFunc)
hevent.onEsc(whichPlayer, callFunc)
hevent.onSelection(whichPlayer, qty, callFunc)
hevent.onDeSelection(whichPlayer, callFunc)
hevent.onPlayerLeave(callFunc)
hevent.onPlayerResourceChange(callFunc)
hevent.onPickHero(callFunc)
hevent.onDestructableDestroy(whichDestructable, callFunc)
hevent.onMapDestructableDestroy(callFunc)
hevent.onHoldOn(whichUnit, callFunc)
hevent.onStop(whichUnit, callFunc)
hevent.onUnitChangeOwner(whichPlayer, callFunc)
```
* [L]**lib\eventBinder.lua**
```
```
* [L]**lib\group.lua**
```
hgroup.forEach(whichGroup, action)
hgroup.count(whichGroup)
hgroup.includes(whichGroup, whichUnit)
hgroup.isEmpty(whichGroup)
hgroup.addUnit(whichGroup, whichUnit)
hgroup.removeUnit(whichGroup, whichUnit)
hgroup.createByXY(x, y, radius, filterFunc)
hgroup.createByUnit(u, radius, filterFunc)
hgroup.createByRect(r, filterFunc)
hgroup.getClosest(whichGroup, x, y)
hgroup.portal(whichGroup, x, y, eff, isFollow)
hgroup.animate(whichGroup, animate)
hgroup.clear(whichGroup, isDestroyUnit)
```
* [L]**lib\hero.lua**
```
hhero.getPrimary(whichHero)
hhero.getPrimaryLabel(whichHero)
hhero.getStrPlus(whichHero)
hhero.getAgiPlus(whichHero)
hhero.getIntPlus(whichHero)
hhero.getProperName(whichHero)
hhero.setPrevLevel(whichHero, lv)
hhero.getPrevLevel(whichHero)
hhero.getCurLevel(whichHero)
hhero.setCurLevel(whichHero, newLevel, showEffect)
hhero.getExp(whichHero)
hhero.getExpNeed(targetLevel)
hhero.getSkillPoints(whichHero)
hhero.setPlayerAllowQty(whichPlayer, max)
hhero.getPlayerAllowQty(whichPlayer)
hhero.setBornXY(x, y)
hhero.reborn(whichHero, delay, invulnerable, x, y)
hhero.buildSelector(options)
```
* [L]**lib\item.lua**
```
hitem.isDestroyed(whichItem)
hitem.x(it)
hitem.y(it)
hitem.z(it)
hitem.free(whichItem)
hitem.used(whichUnit, whichItem, triggerData)
hitem.destroy(it, delay)
hitem.destroyFromUnit(whichUnit)
hitem.getId(itOrId)
hitem.getName(itOrId)
hitem.getArt(itOrId)
hitem.getFile(itOrId)
hitem.getClass(itOrId)
hitem.getGoldCost(itOrId)
hitem.getLumberCost(itOrId)
hitem.getIsUsable(itOrId)
hitem.getIsPowerUp(itOrId)
hitem.getIsPerishable(itOrId)
hitem.getIsSellAble(itOrId)
hitem.getAttribute(itOrId)
hitem.getLevel(it)
hitem.getCharges(it)
hitem.setCharges(it, charges)
hitem.getEmptySlot(whichUnit)
hitem.forEach(whichUnit, action)
hitem.addProperty(whichUnit, itId, charges)
hitem.subProperty(whichUnit, itId, charges)
hitem.create(options)
hitem.give(origin, target)
hitem.pick(it, targetUnit)
hitem.copy(origin, target)
hitem.drop(origin, slot)
hitem.pickRect(u, x, y, w, h)
hitem.pickRound(u, x, y, r)
```
* [L]**lib\itemPool.lua**
```
hitemPool.poolName(poolName)
hitemPool.insert(poolName, whichItem)
hitemPool.delete(poolName, whichItem)
hitemPool.free(whichItem)
hitemPool.forEach(poolName, action)
```
* [L]**lib\japi.lua**
```
hjapi.echo(msg)
hjapi.has(method)
hjapi.exec(method, ...)
hjapi.DzAPI_Map_ChangeStoreItemCoolDown(...)
hjapi.DzAPI_Map_ChangeStoreItemCount(...)
hjapi.DzAPI_Map_GetActivityData()
hjapi.DzAPI_Map_GetGameStartTime()
hjapi.DzAPI_Map_GetGuildName(whichPlayer)
hjapi.DzAPI_Map_GetGuildRole(whichPlayer)
hjapi.DzAPI_Map_GetLadderLevel(whichPlayer)
hjapi.DzAPI_Map_GetLadderRank(whichPlayer)
hjapi.DzAPI_Map_GetMapConfig(key)
hjapi.DzAPI_Map_GetMapLevel(whichPlayer)
hjapi.DzAPI_Map_GetMapLevelRank(whichPlayer)
hjapi.DzAPI_Map_GetMatchType()
hjapi.DzAPI_Map_GetPlatformVIP(whichPlayer)
hjapi.DzAPI_Map_GetPublicArchive(whichPlayer, key)
hjapi.DzAPI_Map_GetServerArchiveDrop(whichPlayer, key)
hjapi.DzAPI_Map_GetServerArchiveEquip(whichPlayer, key)
hjapi.DzAPI_Map_GetServerValue(whichPlayer, key)
hjapi.DzAPI_Map_GetServerValueErrorCode(whichPlayer)
hjapi.GetPlayerServerValueSuccess(whichPlayer)
hjapi.DzAPI_Map_GetUserID(...)
hjapi.DzAPI_Map_HasMallItem(whichPlayer, key)
hjapi.DzAPI_Map_IsBlueVIP(whichPlayer)
hjapi.DzAPI_Map_IsRPGLadder()
hjapi.DzAPI_Map_IsRPGLobby()
hjapi.DzAPI_Map_IsRedVIP(whichPlayer)
hjapi.DzAPI_Map_Ladder_SetPlayerStat(whichPlayer, key, value)
hjapi.DzAPI_Map_Ladder_SubmitPlayerRank(whichPlayer, value)
hjapi.DzAPI_Map_Ladder_SetStat(whichPlayer, key, value)
hjapi.DzAPI_Map_Ladder_SubmitTitle(whichPlayer, value)
hjapi.DzAPI_Map_Ladder_SubmitPlayerExtraExp(whichPlayer, value)
hjapi.DzAPI_Map_MissionComplete(whichPlayer, key, value)
hjapi.DzAPI_Map_OrpgTrigger(whichPlayer, key)
hjapi.DzAPI_Map_SavePublicArchive(whichPlayer, key, value)
hjapi.DzAPI_Map_SaveServerValue(whichPlayer, key, value)
hjapi.DzAPI_Map_Stat_SetStat(whichPlayer, key, value)
hjapi.DzAPI_Map_Statistics(whichPlayer, eventKey, eventType, value)
hjapi.DzAPI_Map_ToggleStore(...)
hjapi.DzAPI_Map_UpdatePlayerHero(...)
hjapi.DzAPI_Map_UseConsumablesItem(whichPlayer, key)
hjapi.DzClickFrame(frameId)
hjapi.DzConvertWorldPosition(...)
hjapi.DzCreateFrame(frame, parent, id)
hjapi.DzCreateFrameByTagName(frameType, name, parent, template, id)
hjapi.FrameTag(fdfType, fdfName, parent)
hjapi.DzCreateSimpleFrame(frame, parent, id)
hjapi.DzDestroyFrame(frameId)
hjapi.DzDestructablePosition(d, x, y)
hjapi.DzEnableWideScreen(enable)
hjapi.DzExecuteFunc(funcName)
hjapi.DzFrameCageMouse(frame, enable)
hjapi.DzFrameClearAllPoints(frame)
hjapi.DzFrameEditBlackBorders(upperHeight, bottomHeight)
hjapi.DzFrameFindByName(name, id)
hjapi.DzFrameGetAlpha(frame)
hjapi.DzFrameGetChatMessage()
hjapi.DzFrameGetCommandBarButton(row, column)
hjapi.DzFrameGetEnable(frame)
hjapi.DzFrameGetHeight(frame)
hjapi.DzFrameGetHeroBarButton(buttonId)
hjapi.DzFrameGetHeroHPBar(buttonId)
hjapi.DzFrameGetHeroManaBar(buttonId)
hjapi.DzFrameGetItemBarButton(buttonId)
hjapi.DzFrameGetMinimap()
hjapi.DzFrameGetMinimapButton(buttonId)
hjapi.DzFrameGetName(frame)
hjapi.DzFrameGetParent(frame)
hjapi.DzFrameGetPortrait()
hjapi.DzFrameGetText(frame)
hjapi.DzFrameGetTextSizeLimit(frame)
hjapi.DzFrameGetTooltip()
hjapi.DzFrameGetTopMessage()
hjapi.DzFrameGetUnitMessage()
hjapi.DzFrameGetUpperButtonBarButton(buttonId)
hjapi.DzFrameGetValue(frame)
hjapi.DzFrameHideInterface()
hjapi.DzFrameSetAbsolutePoint(frame, point, x, y)
hjapi.DzFrameSetAllPoints(frame, relativeFrame)
hjapi.DzFrameSetAlpha(frame, alpha)
hjapi.DzFrameSetAnimate(frame, animId, autoCast)
hjapi.DzFrameSetAnimateOffset(frame, offset)
hjapi.DzFrameSetEnable(frame, enable)
hjapi.DzFrameSetFocus(frame, enable)
hjapi.DzFrameSetFont(frame, fileName, height, flag)
hjapi.DzFrameSetMinMaxValue(frame, minValue, maxValue)
hjapi.DzFrameSetModel(frame, modelFile, modelType, flag)
hjapi.DzFrameSetParent(frame, parent)
hjapi.DzFrameSetPoint(frame, point, relativeFrame, relativePoint, x, y)
hjapi.FrameRelation(frame, point, relativeFrame, relativePoint, x, y)
hjapi.DzFrameSetPriority(frame, priority)
hjapi.DzFrameSetScale(frame, scale)
hjapi.DzFrameSetScript(frame, eventId, funcName, sync)
hjapi.DzFrameSetScriptByCode(frame, eventId, funcHandle, sync)
hjapi.DzFrameSetSize(frame, w, h)
hjapi.DzFrameSetStepValue(frame, step)
hjapi.DzFrameSetText(frame, text)
hjapi.DzFrameSetTextAlignment(frame, align)
hjapi.DzFrameSetTextColor(frame, color)
hjapi.DzFrameSetTextSizeLimit(frame, limit)
hjapi.DzFrameSetTexture(frame, texture, flag)
hjapi.DzFrameSetTooltip(frame, tooltip)
hjapi.DzFrameSetUpdateCallback(funcName)
hjapi.DzFrameSetUpdateCallbackByCode(funcHandle)
hjapi.DzFrameSetValue(frame, value)
hjapi.DzFrameSetVertexColor(frame, vertexColor)
hjapi.DzFrameShow(frame, enable)
hjapi.DzGetClientHeight(...)
hjapi.DzGetClientWidth(...)
hjapi.DzGetColor(r, g, b, a)
hjapi.DzGetConvertWorldPositionX(...)
hjapi.DzGetConvertWorldPositionY(...)
hjapi.DzGetGameMode(...)
hjapi.DzGetGameUI()
hjapi.DzGetLocale()
hjapi.DzGetMouseFocus()
hjapi.DzGetMouseTerrainX()
hjapi.DzGetMouseTerrainY()
hjapi.DzGetMouseTerrainZ()
hjapi.DzGetMouseX()
hjapi.DzGetMouseXRelative()
hjapi.DzGetMouseY()
hjapi.DzGetMouseYRelative()
hjapi.DzGetPlayerInitGold(...)
hjapi.DzGetPlayerName(...)
hjapi.DzGetPlayerSelectedHero(...)
hjapi.DzGetTriggerKey()
hjapi.DzGetTriggerKeyPlayer()
hjapi.DzGetTriggerSyncData()
hjapi.DzGetTriggerSyncPlayer()
hjapi.DzGetTriggerUIEventFrame()
hjapi.DzGetTriggerUIEventPlayer()
hjapi.DzGetUnitNeededXP(whichUnit, level)
hjapi.DzGetUnitUnderMouse()
hjapi.DzGetWheelDelta()
hjapi.DzGetWindowHeight()
hjapi.DzGetWindowWidth()
hjapi.DzGetWindowX()
hjapi.DzGetWindowY()
hjapi.DzIsKeyDown(iKey)
hjapi.DzIsMouseOverUI()
hjapi.DzIsWindowActive()
hjapi.DzLoadToc(tocFilePath)
hjapi.DzOriginalUIAutoResetPoint(enable)
hjapi.DzSetCustomFovFix(value)
hjapi.DzSetMemory(address, value)
hjapi.DzSetMousePos(x, y)
hjapi.DzSetUnitID(whichUnit, id)
hjapi.DzSetUnitModel(whichUnit, model)
hjapi.DzSetUnitPosition(whichUnit, x, y)
hjapi.DzSetUnitTexture(whichUnit, path, texId)
hjapi.DzSetWar3MapMap(blp)
hjapi.DzSimpleFontStringFindByName(name, id)
hjapi.DzSimpleFrameFindByName(name, id)
hjapi.DzSimpleTextureFindByName(name, id)
hjapi.DzSyncBuffer(...)
hjapi.DzSyncData(prefix, data)
hjapi.DzSyncDataImmediately(prefix, data)
hjapi.DzTriggerRegisterKeyEvent(trig, key, status, sync, funcName)
hjapi.DzTriggerRegisterKeyEventByCode(trig, key, status, sync, funcHandle)
hjapi.DzTriggerRegisterMouseEvent(trig, btn, status, sync, funcName)
hjapi.DzTriggerRegisterMouseEventByCode(trig, btn, status, sync, funcHandle)
hjapi.DzTriggerRegisterMouseMoveEvent(trig, sync, funcName)
hjapi.DzTriggerRegisterMouseMoveEventByCode(trig, sync, funcHandle)
hjapi.DzTriggerRegisterMouseWheelEvent(trig, sync, funcName)
hjapi.DzTriggerRegisterMouseWheelEventByCode(trig, sync, funcHandle)
hjapi.DzTriggerRegisterSyncData(trig, prefix, server)
hjapi.DzTriggerRegisterWindowResizeEvent(trig, sync, funcName)
hjapi.DzTriggerRegisterWindowResizeEventByCode(trig, sync, funcHandle)
hjapi.DzUnitDisableAttack(...)
hjapi.DzUnitDisableInventory(...)
hjapi.DzUnitLearningSkill(...)
hjapi.DzUnitSilence(...)
hjapi.EXBlendButtonIcon(...)
hjapi.EXDclareButtonIcon(...)
hjapi.EXDisplayChat(...)
hjapi.EXEffectMatReset(effect)
hjapi.EXEffectMatRotateX(effect, angle)
hjapi.EXEffectMatRotateY(effect, angle)
hjapi.EXEffectMatRotateZ(effect, angle)
hjapi.EXEffectMatScale(effect, x, y, z)
hjapi.EXExecuteScript(script)
hjapi.EXGetAbilityDataInteger(abil, level, dataType)
hjapi.EXGetAbilityDataReal(abil, level, dataType)
hjapi.EXGetAbilityDataString(abil, level, dataType)
hjapi.EXGetAbilityId(abil)
hjapi.EXGetAbilityState(abil, stateType)
hjapi.EXGetAbilityString(...)
hjapi.EXGetBuffDataString(buffCode, dataType)
hjapi.EXGetEffectSize(effect)
hjapi.EXGetEffectX(effect)
hjapi.EXGetEffectY(effect)
hjapi.EXGetEffectZ(effect)
hjapi.EXGetEventDamageData(eddType)
hjapi.EXGetItemDataString(itemCode, dataType)
hjapi.EXGetUnitAbility(whichUnit, abilityID)
hjapi.EXGetUnitAbilityByIndex(whichUnit, index)
hjapi.EXGetUnitArrayString(...)
hjapi.EXGetUnitInteger(...)
hjapi.EXGetUnitReal(...)
hjapi.EXGetUnitString(...)
hjapi.EXPauseUnit(whichUnit, enable)
hjapi.UnitAddSwim(whichUnit)
hjapi.UnitRemoveSwim(whichUnit)
hjapi.EXSetAbilityAEmeDataA(...)
hjapi.EXSetAbilityDataInteger(...)
hjapi.EXSetAbilityDataReal(...)
hjapi.EXSetAbilityDataString(...)
hjapi.EXSetAbilityState(ability, stateType, value)
hjapi.EXSetAbilityString(...)
hjapi.EXSetBuffDataString(buffCode, dataType, value)
hjapi.EXSetEffectSize(e, size)
hjapi.EXSetEffectSpeed(e, speed)
hjapi.EXSetEffectXY(e, x, y)
hjapi.EXSetEffectZ(e, z)
hjapi.EXSetEventDamage(amount)
hjapi.EXSetItemDataString(itemCode, dataType, value)
hjapi.EXSetUnitArrayString(...)
hjapi.EXSetUnitCollisionType(enable, u, t)
hjapi.EXSetUnitFacing(u, angle)
hjapi.EXSetUnitInteger(...)
hjapi.EXSetUnitMoveType(u, t)
hjapi.EXSetUnitReal(...)
hjapi.EXSetUnitString(...)
hjapi.GetEventDamage()
hjapi.GetUnitState(whichUnit, state)
hjapi.RequestExtraBooleanData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6)
hjapi.RequestExtraIntegerData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6)
hjapi.RequestExtraRealData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6)
hjapi.RequestExtraStringData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6)
hjapi.SetUnitState(whichUnit, state, value)
hjapi.DzAPI_Map_IsPlatformVIP(whichPlayer)
hjapi.DzAPI_Map_Ladder_SubmitPlayerRank(whichPlayer, value)
hjapi.DzAPI_Map_Ladder_SubmitTitle(whichPlayer, value)
hjapi.DzAPI_Map_Ladder_SubmitPlayerExtraExp(whichPlayer, value)
hjapi.DzTriggerRegisterMallItemSyncData(trig)
hjapi.DzAPI_Map_Global_ChangeMsg(trig)
hjapi.DzAPI_Map_IsRPGQuickMatch()
hjapi.DzAPI_Map_GetMallItemCount(whichPlayer, key)
hjapi.DzAPI_Map_ConsumeMallItem(whichPlayer, key, value)
hjapi.DzAPI_Map_EnablePlatformSettings(whichPlayer, option, enable)
hjapi.DzAPI_Map_IsBuyReforged(whichPlayer)
hjapi.DzAPI_Map_PlayedGames(whichPlayer)
hjapi.DzAPI_Map_CommentCount(whichPlayer)
hjapi.DzAPI_Map_FriendCount(whichPlayer)
hjapi.DzAPI_Map_IsConnoisseur(whichPlayer)
hjapi.DzAPI_Map_IsBattleNetAccount(whichPlayer)
hjapi.DzAPI_Map_IsAuthor(whichPlayer)
hjapi.DzAPI_Map_CommentTotalCount()
hjapi.DzAPI_Map_CustomRanking(whichPlayer, id)
hjapi.DzAPI_Map_IsPlatformReturn(whichPlayer)
hjapi.DzAPI_Map_IsMapReturn(whichPlayer)
hjapi.DzAPI_Map_IsPlatformReturnUsed(whichPlayer)
hjapi.DzAPI_Map_IsMapReturnUsed(whichPlayer)
hjapi.DzAPI_Map_IsCollected(whichPlayer)
hjapi.DzAPI_Map_ContinuousCount(whichPlayer, id)
hjapi.DzAPI_Map_IsPlayer(whichPlayer)
hjapi.DzAPI_Map_MapsTotalPlayed(whichPlayer)
hjapi.DzAPI_Map_MapsLevel(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsumeGold(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsumeLumber(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsume_1_199(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsume_200_499(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsume_500_999(whichPlayer, mapId)
hjapi.DzAPI_Map_MapsConsume_1000(whichPlayer, mapId)
hjapi.DzAPI_Map_GetForumData(whichPlayer, data)
hjapi.DzAPI_Map_OpenMall(whichPlayer, key)
hjapi.GetFrameBorders()
hjapi.IsWideScreen()
hjapi.IsEventPhysicalDamage()
hjapi.IsEventAttackDamage()
hjapi.IsEventRangedDamage()
hjapi.IsEventDamageType(damageType)
hjapi.IsEventWeaponType(weaponType)
hjapi.IsEventAttackType(attackType)
hjapi.Z(x, y)
hjapi.PX(x)
hjapi.PY(y)
hjapi.RX(x)
hjapi.RY(y)
hjapi.MousePX()
hjapi.MousePY()
hjapi.MouseRX()
hjapi.MouseRY()
hjapi.InWindow(rx, ry)
hjapi.InWindowMouse()
```
* [L]**lib\lightning.lua**
```
hlightning.destroy(lightning, delay)
hlightning.xyz2xyz(lightningType, x1, y1, z1, x2, y2, z2, during)
hlightning.loc2loc(lightningType, loc1, loc2, during)
hlightning.unit2unit(lightningType, unit1, unit2, during)
```
* [L]**lib\modelTag.lua**
```
hmodelTag.char(char, modelAlias, bit)
hmodelTag.word(options)
hmodelTag.model(options)
```
* [L]**lib\monitor.lua**
```
hmonitor.create(key, frequency, action, ignoreFilter)
hmonitor.destroy(key)
hmonitor.isListening(key, obj)
hmonitor.listen(key, obj)
hmonitor.ignore(key, obj)
```
* [L]**lib\player.lua**
```
hplayer.isComputer(whichPlayer)
hplayer.isUser(whichPlayer)
hplayer.isPlaying(whichPlayer)
hplayer.isNeutral(whichPlayer)
hplayer.isBeDamaging(whichPlayer)
hplayer.isDamaging(whichPlayer)
hplayer.isMarking(whichPlayer)
hplayer.adjustPlayerState(delta, whichPlayer, whichPlayerState)
hplayer.setPlayerState(whichPlayer, whichPlayerState, value)
hplayer.forEach(action)
hplayer.index(whichPlayer)
hplayer.loc()
hplayer.setConvertRatio(ratio)
hplayer.getConvertRatio()
hplayer.getName(whichPlayer)
hplayer.setName(whichPlayer, name)
hplayer.getSelection(whichPlayer)
hplayer.getStatus(whichPlayer)
hplayer.setStatus(whichPlayer, status)
hplayer.getPrestige(whichPlayer)
hplayer.setPrestige(whichPlayer, prestige)
hplayer.getApm(whichPlayer)
hplayer.getRandomHero()
hplayer.hideUnit(whichPlayer)
hplayer.clearUnit(whichPlayer)
hplayer.defeat(whichPlayer, tips)
hplayer.victory(whichPlayer, tips)
hplayer.setIsShocking(whichPlayer, b)
hplayer.getIsShocking(whichPlayer)
hplayer.getDamage(whichPlayer)
hplayer.addDamage(whichPlayer, val)
hplayer.getBeDamage(whichPlayer)
hplayer.addBeDamage(whichPlayer, val)
hplayer.getKill(whichPlayer)
hplayer.addKill(whichPlayer, val)
hplayer.diffGoldRatio(whichPlayer, diff, during)
hplayer.setGoldRatio(whichPlayer, val, during)
hplayer.addGoldRatio(whichPlayer, val, during)
hplayer.subGoldRatio(whichPlayer, val, during)
hplayer.getGoldRatio(whichPlayer)
hplayer.diffLumberRatio(whichPlayer, diff, during)
hplayer.setLumberRatio(whichPlayer, val, during)
hplayer.addLumberRatio(whichPlayer, val, during)
hplayer.subLumberRatio(whichPlayer, val, during)
hplayer.getLumberRatio(whichPlayer)
hplayer.diffExpRatio(whichPlayer, diff, during)
hplayer.setExpRatio(whichPlayer, val, during)
hplayer.addExpRatio(whichPlayer, val, during)
hplayer.subExpRatio(whichPlayer, val, during)
hplayer.getExpRatio(whichPlayer)
hplayer.diffSellRatio(whichPlayer, diff, during)
hplayer.setSellRatio(whichPlayer, val, during)
hplayer.addSellRatio(whichPlayer, val, during)
hplayer.subSellRatio(whichPlayer, val, during)
hplayer.getSellRatio(whichPlayer)
hplayer.getTotalGold(whichPlayer)
hplayer.addTotalGold(whichPlayer, val)
hplayer.getTotalGoldCost(whichPlayer)
hplayer.addTotalGoldCost(whichPlayer, val)
hplayer.getTotalLumber(whichPlayer)
hplayer.addTotalLumber(whichPlayer, val)
hplayer.getTotalLumberCost(whichPlayer)
hplayer.addTotalLumberCost(whichPlayer, val)
hplayer.adjustGold(whichPlayer)
hplayer.adjustLumber(whichPlayer)
hplayer.getGold(whichPlayer)
hplayer.setGold(whichPlayer, gold, u)
hplayer.addGold(whichPlayer, gold, u)
hplayer.subGold(whichPlayer, gold, u)
hplayer.getLumber(whichPlayer)
hplayer.setLumber(whichPlayer, lumber, u)
hplayer.addLumber(whichPlayer, lumber, u)
hplayer.subLumber(whichPlayer, lumber, u)
hplayer.getFoodUsed(whichPlayer)
hplayer.setFoodUsed(whichPlayer, value)
hplayer.getFoodCap(whichPlayer)
hplayer.setFoodCap(whichPlayer, value)
hplayer.getFoodCapCeiling(whichPlayer)
hplayer.setFoodCapCeiling(whichPlayer, value)
```
* [L]**lib\quest.lua**
```
hquest.destroy(q, delay)
hquest.create(options)
hquest.flash()
hquest.setCompleted(q)
hquest.setFailed(q)
hquest.setDiscovered(q)
```
* [L]**lib\rect.lua**
```
hrect.alloc(r, name)
hrect.isInner(whichRect, x, y)
hrect.isBorder(whichRect, x, y)
hrect.isBorderPlayable(x, y)
hrect.isBorderCamera(x, y)
hrect.world()
hrect.camera()
hrect.playable()
hrect.create(x, y, w, h, name)
hrect.getName(whichRect)
hrect.getX(whichRect)
hrect.getY(whichRect)
hrect.getWidth(whichRect)
hrect.getHeight(whichRect)
hrect.getMinX(whichRect)
hrect.getMinY(whichRect)
hrect.getMaxX(whichRect)
hrect.getMaxY(whichRect)
hrect.destroy(whichRect, delay)
hrect.lock(options)
```
* [L]**lib\skill.lua**
```
hskill.getAttribute(abilityId)
hskill.addProperty(whichUnit, abilityId, level)
hskill.subProperty(whichUnit, abilityId, level)
hskill.getName(abilityId)
hskill.getLevel(whichUnit, abilityId)
hskill.setLevel(whichUnit, abilityId, level)
hskill.add(whichUnit, abilityId, level, during)
hskill.set(whichUnit, abilityId, level, during)
hskill.destroy(whichUnit, abilityId, delay)
hskill.forever(whichUnit, abilityId)
hskill.has(whichUnit, abilityId)
hskill.setCoolDown(whichUnit, abilityId, coolDown)
hskill.damage(options)
hskill.invulnerable(whichUnit, during, effect, attach)
```
* [L]**lib\slk.lua**
```
hslk.n2i(name)
hslk.i2v(id, ...)
hslk.n2v(name, ...)
hslk.classIds(class)
hslk.typeIds(t)
hslk.misc(...)
```
* [L]**lib\sound.lua**
```
hsound.voiceCreate(path, duration, is3D, channel, volume, pitch)
hsound.voice(s)
hsound.voice2Player(s, whichPlayer)
hsound.voice2Unit(s, volumePercent, u)
hsound.voice2XYZ(s, x, y, z)
hsound.voice2Rect(s, whichRect, during)
hsound.bgmStop(whichPlayer)
hsound.bgm(musicFileName, whichPlayer)
hsound.bgmVolume(percent, whichPlayer)
```
* [L]**lib\sync.lua**
```
hsync.key()
hsync.mix(key, array)
hsync.call(key, callback, array)
hsync.init()
hsync.send(key, array)
hsync.onSend(key, callback)
```
* [L]**lib\terrain.lua**
```
hterrain.type(x, y)
hterrain.isType(x, y, whichType)
hterrain.isBlighted(x, y)
hterrain.isWalkable(x, y)
hterrain.isWalkableFly(x, y)
hterrain.isWalkableWater(x, y)
hterrain.isWalkableAmphibious(x, y)
hterrain.isWalkableBlight(x, y)
hterrain.isWalkableBuild(x, y)
hterrain.isWalkablePeonHarvest(x, y)
hterrain.isWater(x, y)
hterrain.isGround(x, y)
```
* [L]**lib\textTag.lua**
```
htextTag.destroy(ttg, delay)
htextTag.create(msg, size, color, opacity, during)
htextTag.create2XY(x, y, msg, size, color, opacity, during, zOffset)
htextTag.create2Unit(u, msg, size, color, opacity, during, zOffset)
htextTag.getSize(ttg)
htextTag.getColor(ttg)
htextTag.getMsg(ttg)
htextTag.getOpacity(ttg)
htextTag.getDuring(ttg)
htextTag.setVelocity(ttg, xSpeed, ySpeed)
htextTag.style(ttg, showType, xSpeed, ySpeed)
```
* [L]**lib\texture.lua**
```
htexture.cinematicFilterGeneric(duration, bmode, tex, red0, green0, blue0, trans0, red1, green1, blue1, trans1)
htexture.mark(path, during, whichPlayer, red, green, blue)
```
* [L]**lib\time.lua**
```
Timer(isInterval, period, callFunc)
htime.penetrate(t, remain)
htime.clock()
htime.periodic(isInterval, period, callFunc)
htime.timeOfDay(modify)
htime.timeOfDayScale(modify)
htime.isNight()
htime.isDay()
htime.setTimeout(period, callFunc)
htime.setInterval(period, callFunc)
htime.gone()
htime.unix()
htime.date(timestamp)
```
* [L]**lib\unit.lua**
```
hunit.isDetected(whichUnit, whichPlayer)
hunit.isInvisible(whichUnit, whichPlayer)
hunit.isAttackAble(whichUnit)
hunit.isDead(whichUnit)
hunit.isAlive(whichUnit)
hunit.isPaused(whichUnit)
hunit.isHidden(whichUnit)
hunit.isSleeping(whichUnit)
hunit.isDestroyed(whichUnit)
hunit.isInvincible(whichUnit)
hunit.isHero(whichUnit)
hunit.isStructure(whichUnit)
hunit.isIllusion(whichUnit)
hunit.isGround(whichUnit)
hunit.isAir(whichUnit)
hunit.isMelee(whichUnit)
hunit.isRanged(whichUnit)
hunit.isSummoned(whichUnit)
hunit.isMechanical(whichUnit)
hunit.isAncient(whichUnit)
hunit.isSapper(whichUnit)
hunit.isEthereal(whichUnit)
hunit.isImmune(whichUnit)
hunit.isRace(whichUnit, whichRace)
hunit.isLocust(whichUnit)
hunit.isBeDamaging(whichUnit)
hunit.isDamaging(whichUnit)
hunit.isWater(whichUnit)
hunit.isFloor(whichUnit)
hunit.isUnit(whichUnit, otherUnit)
hunit.isEnemy(whichUnit, otherUnit)
hunit.isAlly(whichUnit, otherUnit)
hunit.isEnemyPlayer(whichUnit, whichPlayer)
hunit.isAllyPlayer(whichUnit, whichPlayer)
hunit.hasSlot(whichUnit, slotId)
hunit.hasItem(whichUnit, whichItemId)
hunit.getAvatar(uOrId)
hunit.getSight(uOrId)
hunit.getNSight(uOrId)
hunit.getAttackSides1(uOrId)
hunit.getMaxLife(u)
hunit.getCurLife(u)
hunit.setCurLife(u, val)
hunit.addCurLife(u, val)
hunit.subCurLife(u, val)
hunit.getMaxMana(u)
hunit.getCurMana(u)
hunit.setCurMana(u, val)
hunit.addCurMana(u, val)
hunit.subCurMana(u, val)
hunit.getCurLifePercent(u)
hunit.setCurLifePercent(u, val)
hunit.getCurManaPercent(u)
hunit.setCurManaPercent(u, val)
hunit.addExp(u, val, showEffect)
hunit.setPeriod(u, life)
hunit.getPeriod(u)
hunit.getPeriodRemain(u)
hunit.setCanFly(u)
hunit.getFlyHeight(u)
hunit.setFlyHeight(u, height, speed)
hunit.setFacing(u, facing)
hunit.getFacing(u)
hunit.show(u)
hunit.hide(u)
hunit.pause(u)
hunit.resume(u)
hunit.x(u)
hunit.y(u)
hunit.z(u)
hunit.h(u)
hunit.setInvulnerable(u, flag)
hunit.setAnimateSpeed(whichUnit, speed, during)
hunit.setRGBA(whichUnit, red, green, blue, opacity)
hunit.getOwner(whichUnit)
hunit.setOwner(whichUnit, ownerPlayer, changeColor)
hunit.portal(whichUnit, x, y, facing)
hunit.animate(whichUnit, animate)
hunit.embed(u, options)
hunit.create(options)
hunit.getId(uOrId)
hunit.getName(u)
hunit.getUserData(u)
hunit.setUserData(u, val, during)
hunit.setColor(u, color)
hunit.destroy(targetUnit, delay)
hunit.kill(targetUnit, delay)
hunit.exploded(targetUnit, delay)
```
* [L]**lib\weather.lua**
```
hweather.destroy(w, delay)
hweather.create(options)
```
* [L]**slk\pilot.lua**
```
_ability(_v)
_item(_v)
_unit(_v)
_buff(_v)
_upgrade(_v)
_destructable(_v)
_doodad(_v)
_attr(_v)
```
* [L]**slk\setter.lua**
```
F6V_A(v)
F6V_U(v)
F6V_I_CD(v)
F6V_I(v)
F6V_B(v)
F6V_UP(v)
F6V_DE(v)
F6V_DO(v)
```
* [L]**slk\slk.lua**
```
hslk_init()
hslk_cli_set(_v)
hslk_ability(_v)
hslk_ability_empty(_v)
hslk_unit(_v)
hslk_hero(_v)
hslk_item(_v)
hslk_buff(_v)
hslk_upgrade(_v)
hslk_destructable(_v)
hslk_doodad(_v)
```
* [B]slk\system.lua