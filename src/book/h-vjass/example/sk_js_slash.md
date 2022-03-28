## 技能 - 无影斩

> 类似无敌斩

```vjass
if(skillid == [SKILL_ID])then
    call SetUnitVertexColorBJ( triggerUnit, 100, 100, 100, 75.00 )
    set bean = hAttrHuntBean.create()
    set bean.damage = hattr.getAttackPhysical(triggerUnit)
    set bean.fromUnit = triggerUnit
    set bean.huntEff = "Objects\\Spawnmodels\\Human\\HumanBlood\\BloodElfSpellThiefBlood.mdl"
    set bean.huntKind = "attack"
    set bean.huntType = "physicalwind"
    call hskill.shuttleToUnit(triggerUnit,hevent.getTargetUnit(),300,20,30,5,50,null,"attack",'A06K',bean)
    call bean.destroy()
endif
```
