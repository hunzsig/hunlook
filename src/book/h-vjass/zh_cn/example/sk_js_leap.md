## 技能 - 一刹

> 冲锋挥砍

```vb
if(skillid == [SKILL_ID])then
    call SetUnitAnimation( triggerUnit, "attack slam" )
    set loc = hevent.getTargetLoc()
    set bean = hAttrHuntBean.create()
    set bean.damage = 3 * hattr.getAttackPhysical(triggerUnit)
    set bean.fromUnit = triggerUnit
    set bean.huntEff = "Objects\\Spawnmodels\\Human\\HumanBlood\\BloodElfSpellThiefBlood.mdl"
    set bean.huntKind = "attack"
    set bean.huntType = "physicalwind"
    call hskill.leap(triggerUnit,loc,50,"Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageCaster.mdl",75,false,bean)
    call bean.destroy()
endif
```
