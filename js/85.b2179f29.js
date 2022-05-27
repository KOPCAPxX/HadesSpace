"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[85],{66801:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(85888);function r(e){const t=e.split(".").reduce(((e,t)=>e[t]),i.Z);return{filter:([e])=>t.includes(e),sort:([e],[a])=>t.indexOf(e)-t.indexOf(a)}}},85888:(e,t,a)=>{a.d(t,{Z:()=>i});const i={capital_ships:{player:["Transport","Miner","Battleship","CorpFlagship"],cerberus:["CerberusSentinel","CerberusGuardian","CerberusInterceptor","CerberusColossus","CerberusDestroyer","CerberusBomber","CerberusPhoenix","CerberusStorm","CerberusGhosts","CerberusHydra","Hydraling1","Hydraling2","CerberusCarrier"]},planets:{yellowstar:["desert_lv1","lava_lv1","water_lv1","terran_lv1","gas_lv1","terran_lv2","lava_lv2","water_lv2","gas_lv2","desert_lv2","lava_lv3","desert_lv3","water_lv3","terran_lv3","ice_variation1","ice_variation2"],redstar:["destroyed01","destroyed02","destroyed03","destroyed04","destroyed05","destroyed06","destroyed07","destroyed08","destroyed09","destroyed10"],whitestar:["whitestar1","whitestar2","whitestar_l1"]},spacebuildings:{player:["Shipyard","ShortRangeScanner","RedStarScanner","ResearchStation","DiplomacyCenter","TradingStation","WarpLaneHub","WhiteStarScanner","TimeModulator","BlueStarScanner","ShipmentRelay"]},player_goals:{all:["SalvageArtifacts","DestroySentinels","DestroyGuardians","DestroyColossus","DestroyInterceptor","DestroyPhoenix","ReachInfluence","MineHydrogenInRS","UploadHydroRS","EMPPEnemyShips","RepairOtherPlayerShips","UseAlphaRocket","EntrustArtifacts","UseDestinyNoSanct","DeliverShipmentsBatch","UseShipmentComputer","UseTradeBoostOrBurst","UseShipmentDrone","UseCrunch","UseSalvage","UseShipmentBeam","UseBlastShield","UseMiningDrone","UseGenesis","UseOffload","EarnFragments","WinBSWithEMP1","WinBSWithEMP2","WinBSWithEMP3","WinBSWithRepair1","WinBSWithRepair2","WinBSWithRepair3","WinBSWithTimeWarp","WinBSWithStealth1","WinBSWithStealth2","WinBSWithFortify1","WinBSWithFortify2","WinBSWithSalvage1","WinBSWithSalvage2","WinBSWithSupress1","WinBSWithSupress2","WinBSWithImpulse1","WinBSWithImpulse2","WinBSWithAlphaRocket1","WinBSWithAlphaRocket2","WinBSWithDestiny","WinBSWithVengeance","WinBSWithDeltaRocket","WinBSWithBarrier","WinBSWithAlphaDrone","WinBSWithBond","WinBSWithOmegaRocket"],fixed:["MineHydrogenInRS","SalvageArtifacts","ReachInfluence","DeliverShipmentsBatch","EarnFragments","DestroySentinels","DestroyGuardians","DestroyColossus","DestroyInterceptor","DestroyPhoenix","UploadHydroRS","UseCrunch","UseMiningDrone","UseGenesis","UseBlastShield","EMPPEnemyShips","RepairOtherPlayerShips","UseAlphaRocket","EntrustArtifacts","UseDestinyNoSanct","UseSalvage","UseShipmentComputer","UseTradeBoostOrBurst","UseShipmentDrone","UseShipmentBeam","UseOffload","WinBSWithModule"]}}},45715:(e,t,a)=>{a.d(t,{Z:()=>i});const i={Transport:{Name:"Transport",TID:"TID_SHIP_TRANSPORT",TID_Description:"TID_SHIP_TRANSPORT_DESCR",TID_INFO_SCREEN:"TID_SHIP_TRANSPORT_INFO",TID_UPGRADE:"TID_UPGRADE_TRANSPORT_DESIGN",ConceptImage:"portrait_Transport",Model:["Transport_lv1","Transport_lv2","Transport_lv3","Transport_lv4","Transport_lv5","Transport_lv6"],ModelScale:100,IsCombatShip:0,CanBeBuilt:1,NewModuleSlots:["Trade","Trade",["Support","Trade"],"Trade","Trade","Trade"],BuildCost:[250,1e3,8e3,2e4,5e4,6e4],DesignUpgradeCost:[0,1e4,6e4,3e5,1e6,7e6],DesignUpgradeTime:[0,28800,86400,259200,604800,864e3],RequiredPlanetLevel:1,HP:1,JobCapacity:[1,2,3,4,5,8],Speed:96,FuelUsePer5000Distance:[9,12,30,40,50,55],JumpFuelCosts:[15,25,50,75,100,120],WhiteStarScore:[1,500,1e3,1500,2e3,2200],CUnitShipmentScaleY:693,CUnitShipmentSpacingY:303,CShipmentSizeMin:1,CShipmentSizeMax:4,MaxShipments:8},Miner:{Name:"Miner",TID:"TID_SHIP_MINER",TID_Description:"TID_SHIP_MINER_DESCR",TID_INFO_SCREEN:"TID_SHIP_MINER_INFO",TID_UPGRADE:"TID_UPGRADE_MINER_DESIGN",ConceptImage:"portrait_Miner",Model:["Miner_lv1","Miner_lv2","Miner_lv3","Miner_lv4","Miner_lv5","Miner_lv6"],ModelScale:100,IsCombatShip:0,CanBeBuilt:1,NewModuleSlots:["Mining","Mining","Support","Mining","Mining","Mining"],BuildCost:[500,1e3,1e4,3e4,6e4,1e5],DesignUpgradeCost:[0,5e3,5e4,25e4,8e5,6e6],DesignUpgradeTime:[0,14400,86400,259200,604800,864e3],RequiredPlanetLevel:2,HP:1,NumSectorsToMine:[1,2,3,4,5,6],HydrogenCapacity:[50,250,600,1200,2e3,2500],MiningPeriod:[1e3,800,500,250,100,75],Speed:72,FuelUsePer5000Distance:0,JumpFuelCosts:[5,10,15,20,25,40],WhiteStarScore:[1,500,1e3,2e3,4e3,8e3]},Battleship:{Name:"Battleship",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",TID_INFO_SCREEN:"TID_SHIP_BATTLESHIP_DESCR",TID_UPGRADE:"TID_UPGRADE_BS_DESIGN",ConceptImage:"portrait_Battleship",Model:["Battleship_lv1","Battleship_lv2","Battleship_lv3","Battleship_lv4","Battleship_lv5","Battleship_lv6"],ModelScale:100,IsCombatShip:1,CanBeBuilt:1,NewModuleSlots:["Weapon","Shield","Support","Support","Support","Support","Support"],BuildCost:[750,1500,2e4,6e4,12e4,15e4],DesignUpgradeCost:[0,1e4,8e4,4e5,15e5,8e6],DesignUpgradeTime:[0,28800,86400,259200,604800,864e3],RequiredPlanetLevel:3,HP:[4200,5e3,6e3,7500,9e3,9500],HealRate:[1e3,800,650,500,500,526],HydrogenCapacity:0,Speed:100,FuelUsePer5000Distance:[14,21,60,120,200,220],JumpFuelCosts:[20,50,80,120,200,240],WhiteStarScore:[1,500,2e3,4e3,7e3,8e3],BSScore:[420,500,600,750,900,950],BSPenaltyPerSec:[500,1e3,2e3,4e3,6e3,7e3],modules:[{Name:"WeakBattery",TID:"TID_MODULE_WEAK_BATTERY",TID_Description:"TID_MODULE_WEAK_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Weak_Battery_Icon",InitialBlueprints:1,HideSelection:1,DoNotAward:1,UnlockBlueprints:1,UnlockPrice:0,UnlockTime:0,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Weak",EffectRadius:1200,DPS:80,BCCost:0,BSScore:1e3,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_1"}]},CerberusSentinel:{Name:"CerberusSentinel",TID:"TID_SHIP_CERB_FIGHTER",TID_Description:"TID_SHIP_CERB_FIGHTER_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_FIGHTER_DESCR",ConceptImage:"portrait_Sentinel",Model:"Fighter_Cerberus2_lv1",ModelScale:95,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:750,Speed:50,ShipAIHandler:4,AIUpdateIntervalSeconds:14,AggressiveAI:0,InfluencePoints:10,BSPenaltyPerSec:1500,HideModulesOnHUD:1,modules:[{level:6,Name:"Battery",TID:"TID_MODULE_BATTERY",TID_Description:"TID_MODULE_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Battery_Icon",UnlockBlueprints:4e3,UnlockPrice:1e5,UnlockTime:259200,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1200,DPS:210,FuelUseIncrease:30,BCCost:1e4,WhiteStarScore:375,BSScore:900,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_1"}]},CerberusGuardian:{Name:"CerberusGuardian",TID:"TID_SHIP_CERB_SECTOR_GUARDIAN",TID_Description:"TID_SHIP_CERB_SECTOR_GUARDIAN_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_SECTOR_GUARDIAN_DESCR",ConceptImage:"portrait_Guardian",Model:"Fighter_Cerberus1_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:7e3,Speed:55,ShipAIHandler:4,AIUpdateIntervalSeconds:8,AggressiveAI:1,InfluencePoints:20,BSPenaltyPerSec:400,HideModulesOnHUD:1,modules:[{Name:"GuardianBattery",TID:"TID_MODULE_WEAK_BATTERY",TID_Description:"TID_MODULE_WEAK_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Battery_Icon",InitialBlueprints:1,Hide:1,DoNotAward:1,UnlockBlueprints:1,UnlockPrice:0,UnlockTime:0,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Weak",EffectRadius:1200,DPS:60,BCCost:0,WhiteStarScore:0}]},CerberusColossus:{Name:"CerberusColossus",TID:"TID_SHIP_CERB_COLOSSUS",TID_Description:"TID_SHIP_CERB_COLOSSUS_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_COLOSSUS_DESCR",ConceptImage:"portrait_CerberusColossus",Model:"Battleship_Cerberus_lv1",ModelScale:105,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:["Weapon","Support","Shield"],BuildCost:0,RequiredPlanetLevel:0,HP:4e4,Speed:60,ShipAIHandler:4,AIUpdateIntervalSeconds:20,AggressiveAI:1,InfluencePoints:150,BSPenaltyPerSec:1200,modules:[{Name:"ColossusLaser",TID:"TID_MODULE_LASER",TID_Description:"TID_MODULE_LASER_DESCR",AwardLevel:1,Icon:"Mod_Laser_Icon",Hide:1,DoNotAward:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"beam",EffectRadius:1200,DPS:110,MaxDPS:270,MaxDPSTime:45,MaxDPSTimeWS:27e3,MaxDPSTimeBS:90},{level:12,Name:"Salvage",TID:"TID_MODULE_SALVAGE",TID_Description:"TID_MODULE_SALVAGE_DESCR",AwardLevel:3,Icon:"Mod_Salvage_Icon",UnlockBlueprints:2e4,UnlockPrice:8e6,UnlockTime:864e3,SlotType:"Support",ActivationType:"Passive",ActivateFX:"Salvage_activate",ScaleEffectsWithZoom:1,SalvageHullPercent:[24,27,24],FuelUseIncrease:160,BCCost:32500,WhiteStarScore:700,BSScore:1e3,BSOnly:1,TID_Artifact:"TID_TRADEITEM_ARTIFACT_SUPPORT_5"},{level:10,Name:"PassiveShield",TID:"TID_MODULE_PASSIVE_SHIELD",TID_Description:"TID_MODULE_PASSIVE_SHIELD_DESCR",AwardLevel:2,Icon:"Mod_PassiveShield_Icon",UnlockBlueprints:2e4,UnlockPrice:5e6,UnlockTime:604800,SlotType:"Shield",ActivationType:"Passive",ClientActivationFx:"Shield_ChargeUp",SustainedFX:"PassiveShield_Sustained",ScaleEffectsWithZoom:1,ShieldStrength:16e3,ShieldRegenDelay:72,TimeToFullyRegen:144,FuelUseIncrease:330,BCCost:28e3,WhiteStarScore:1e3,BSScore:1500,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_3"}]},CerberusInterceptor:{Name:"CerberusInterceptor",TID:"TID_SHIP_CERB_INTERCEPTOR",TID_Description:"TID_SHIP_CERB_INTERCEPTOR_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_INTERCEPTOR_DESCR",ConceptImage:"portrait_Interceptor",Model:"Fighter_Cerberus3_lv1",ModelScale:105,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:8e3,Speed:110,ShipAIHandler:5,AIUpdateIntervalSeconds:15,AggressiveAI:1,InfluencePoints:40,BSPenaltyPerSec:800,modules:[{Name:"InterceptorMBattery",TID:"TID_MODULE_MASS_BATTERY",TID_Description:"TID_MODULE_MASS_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_MassBattery_Icon",Hide:1,DoNotAward:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1200,DPS:90,MaxTargets:4}]},CerberusDestroyer:{Name:"CerberusDestroyer",TID:"TID_SHIP_CERB_DESTROYER",TID_Description:"TID_SHIP_CERB_DESTROYER_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_DESTROYER_DESCR",ConceptImage:"portrait_CerberusDestroyer",Model:"Cerberus_Destroyer_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Support",BuildCost:0,RequiredPlanetLevel:0,HP:1e4,Speed:60,ShipAIHandler:6,DockedObjectDestroyTime:180,ApplyModuleOnDockedObjectDestroy:1,AIUpdateIntervalSeconds:20,AggressiveAI:1,InfluencePoints:80,modules:[{Name:"DestroyerVengeance",TID:"TID_MODULE_VENGEANCE",TID_Description:"TID_MODULE_VENGEANCE_DESCR",AwardLevel:0,Icon:"Mod_Vengeance_Icon",Hide:1,HideSelection:1,UnlockBlueprints:0,UnlockPrice:0,UnlockTime:0,SlotType:"Support",ActivationType:"Passive",ActivateFX:"Destiny_activate",ActivateFXStaysInPlace:1,EffectRadius:1e3,AOEDamage:4e3,ApplyAOEDamageOnDestroy:1,FuelUseIncrease:0,BCCost:0}]},CerberusPhoenix:{Name:"CerberusPhoenix",TID:"TID_SHIP_CERB_PHOENIX",TID_Description:"TID_SHIP_CERB_PHOENIX_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_PHOENIX_DESCR",ConceptImage:"portrait_CerberusPhoenix",Model:"Fighter_Cerberus4_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:["Weapon","Shield"],BuildCost:0,RequiredPlanetLevel:0,HP:45e3,Speed:45,ShipAIHandler:7,AIUpdateIntervalSeconds:10,AggressiveAI:1,InfluencePoints:180,BSPenaltyPerSec:1e3,OnDestroySpawn:"CerberusSentinel",OnDestroySpawnCount:3,OnDestroySpawnMinRadius:300,OnDestroySpawnMaxRadius:600,SpawnFx:"SentinelSpawn_Fx",modules:[{level:5,Name:"DualLaser",TID:"TID_MODULE_DUAL_LASER",TID_Description:"TID_MODULE_DUAL_LASER_DESCR",AwardLevel:3,Icon:"Mod_DualLaser_Icon",UnlockBlueprints:250,UnlockPrice:2e5,UnlockTime:345600,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"beam",EffectRadius:1200,DPS:120,MaxDPS:450,MaxDPSTime:45,MaxDPSTime_BS:30,MaxTargets:2,FuelUseIncrease:70,BCCost:15e3,WhiteStarScore:250,BSScore:800,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_4",MaxDPSTimeWS:27e3},{Name:"PhoenixShield",TID:"TID_MODULE_AREA_SHIELD",TID_Description:"TID_MODULE_AREA_SHIELD_DESCR_CERB",AwardLevel:0,Icon:"Mod_AreaShieldRed_Icon",Hide:1,DoNotAward:1,UnlockBlueprints:0,UnlockPrice:0,UnlockTime:0,SlotType:"Shield",ActivationType:"Activated",SustainedFX:"AreaShieldEnemy_Sustained",ActivationDelay:300,EffectRadius:2e3,EffectDurationx10:18e3,ShieldStrength:22e3,IsAreaShield:1,ActivationDelayWS:18e4,EffectDurationx10WS:108e5,ActivationDelayBS:600,EffectDurationx10BS:36e3}]},TutBattleship:{Name:"TutBattleship",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",TID_INFO_SCREEN:"TID_SHIP_BATTLESHIP_DESCR",TID_UPGRADE:"TID_UPGRADE_BS_DESIGN",ConceptImage:"portrait_Battleship",Model:"Battleship_lv3",ModelScale:100,IsCombatShip:1,IsDrone:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,DesignUpgradeCost:0,DesignUpgradeTime:0,RequiredPlanetLevel:0,HP:6e3,HydrogenCapacity:0,Speed:100,FuelUsePer5000Distance:0,JumpFuelCosts:0,ShipAIHandler:9,AIUpdateIntervalSeconds:4,WhiteStarScore:0,modules:[{Name:"WeakBattery",TID:"TID_MODULE_WEAK_BATTERY",TID_Description:"TID_MODULE_WEAK_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Weak_Battery_Icon",InitialBlueprints:1,HideSelection:1,DoNotAward:1,UnlockBlueprints:1,UnlockPrice:0,UnlockTime:0,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Weak",EffectRadius:1200,DPS:80,BCCost:0,BSScore:1e3,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_1"}]},CerberusBomber:{Name:"CerberusBomber",TID:"TID_SHIP_CERBERUS_BOMBER",TID_Description:"TID_SHIP_CERBERUS_BOMBER_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERBERUS_BOMBER_DESCR",ConceptImage:"portrait_CerberusBomber",Model:"Fighter_Cerberus5_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:48e3,MiningPeriod:80,Speed:40,ShipAIHandler:11,AIUpdateIntervalSeconds:2,AggressiveAI:1,InfluencePoints:200,BSPenaltyPerSec:1500,BSPenaltyPerSecOnSector:250,modules:[{Name:"BomberLauncher",TID:"TID_MODULE_ROCKET_LAUNCHER",TID_Description:"TID_MODULE_ROCKET_LAUNCHER_DESCR",AwardLevel:0,Icon:"Mod_BomberRocket_Icon",InitialBlueprints:0,Hide:1,DoNotAward:1,SlotType:"Weapon",ActivationType:"Activated",WeaponEffectType:"projectile",WeaponFx:"BomberRocket",ActivateFX:"BomberLauncher_activate",ScaleEffectsWithZoom:1,ActivationDelay:20,BCCost:0,StopCountdownOnDisable:1,projectile:{Name:"BomberRocket",TID:"TID_MODULE_ROCKET_LAUNCHER",TID_Description:"TID_BOMBER_ROCKET_DESCR",Speed:90,HP:1e3,Damage:4e3,DamageWhenNeutralized:1250,DamageRange:1200,DamageRangeWhenNeutralized:800,AdditionalWaypoint:0,Model:"projectiles/BomberRocket",ImpactFX:"projectiles/BomberRocketHit_FX",DestroyedFX:"projectiles/OmegaRocketDeath_FX"},ActivationDelayWS:12e3,ActivationDelayBS:40}]},BlueStarBot:{Name:"BlueStarBot",TID:"TID_SHIP_BATTLESHIP",TID_Description:"TID_SHIP_BATTLESHIP_DESCR",TID_INFO_SCREEN:"TID_SHIP_BATTLESHIP_DESCR",TID_UPGRADE:"TID_UPGRADE_BS_DESIGN",ConceptImage:"portrait_Battleship",Model:["Battleship_lv1","Battleship_lv2","Battleship_lv3","Battleship_lv4","Battleship_lv5"],ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:["Weapon","Shield","Support","Support","Support","Support"],HP:[4200,5e3,6e3,7500,9e3],HydrogenCapacity:0,Speed:100,ShipAIHandler:12,AIUpdateIntervalSeconds:5,BSPenaltyPerSec:[500,1e3,1500,3e3,5e3],modules:[{Name:"WeakBattery",TID:"TID_MODULE_WEAK_BATTERY",TID_Description:"TID_MODULE_WEAK_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Weak_Battery_Icon",InitialBlueprints:1,HideSelection:1,DoNotAward:1,UnlockBlueprints:1,UnlockPrice:0,UnlockTime:0,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Weak",EffectRadius:1200,DPS:80,BCCost:0,BSScore:1e3,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_1"}]},CerberusStorm:{Name:"CerberusStorm",TID:"TID_SHIP_STORM",TID_Description:"TID_SHIP_STORM_DESCR",TID_INFO_SCREEN:"TID_SHIP_STORM_DESCR",ConceptImage:"portrait_CerberusStorm",Model:"Fighter_Cerberus6_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:4e4,Speed:6,ShipAIHandler:13,InfluencePoints:150,RadialMoveRadius:1600,modules:[{Name:"DartBarrage",TID:"TID_MODULE_DART_BARRAGE",TID_Description:"TID_MODULE_DART_BARRAGE_DESCR",AwardLevel:0,Icon:"Mod_DartBarrage_Icon",InitialBlueprints:0,Hide:1,DoNotAward:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"projectile",WeaponFx:"DartBarrage",ActivateFX:"BomberLauncher_activate",ScaleEffectsWithZoom:1,ActivationDelay:5,EffectRadius:2500,MaxTargets:16,StopCountdownOnDisable:1,projectile:{Name:"DartBarrage",TID:"TID_DART_MISSILE",TID_Description:"TID_DART_MISSILE_DESCR",Speed:300,HP:350,Damage:2500,DamageRange:800,AdditionalWaypoint:0,Model:"projectiles/DartRocket",ImpactFX:"projectiles/DartRocketHit_FX",DestroyedFX:"projectiles/DartRocketDeath_FX",LaunchFX:"projectiles/AlphaRocketLaunch_FX"},ActivationDelayWS:3e3,ActivationDelayBS:10}]},CerberusGhosts:{Name:"CerberusGhosts",TID:"TID_SHIP_CERB_GHOSTS",TID_Description:"TID_SHIP_CERB_GHOSTS_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_GHOSTS_DESCR",ConceptImage:"portrait_CerberusSwarm",Model:"Cerberus_Swarm_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:200,Speed:150,InfluencePoints:0,HideModulesOnHUD:1,modules:[{level:3,Name:"Battery",TID:"TID_MODULE_BATTERY",TID_Description:"TID_MODULE_BATTERY_DESCR",AwardLevel:0,Icon:"Mod_Battery_Icon",UnlockBlueprints:50,UnlockPrice:12500,UnlockTime:14400,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1200,DPS:140,FuelUseIncrease:8,BCCost:2500,WhiteStarScore:75,BSScore:600,TID_Artifact:"TID_TRADEITEM_ARTIFACT_COMBAT_1"}],shipSpawners:{Name:"Ghosts",TID:"TID_GHOST_SPAWNER",TID_Description:"TID_GHOST_SPAWNER_DESCR",ConceptImage:"portrait_CerberusSwarm",ModelToSpawn:"CerberusGhosts",NumToSpawn:14,SpawnDelay:40,RadiusMin:80,RadiusMax:900,SpawnFx:"SentinelSpawn_Fx",MoveUpdateSec:5},GhostSpawnSecs:[[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30],[90,80,70,65,60,60,60,50,50,45,45,45,40,40,35,35,35,30]]},CorpFlagship:{Name:"CorpFlagship",TID:"TID_CORP_FLAGSHIP",TID_Description:"TID_CORP_FLAGSHIP_DESCR",TID_INFO_SCREEN:"TID_CORP_FLAGSHIP_DESCR",ConceptImage:"portrait_CorpFlagship",Model:["Corp_Flagship_lv1","Corp_Flagship_lv2","Corp_Flagship_lv3","Corp_Flagship_lv4","Corp_Flagship_lv5","Corp_Flagship_lv5","Corp_Flagship_lv6","Corp_Flagship_lv6","Corp_Flagship_lv7","Corp_Flagship_lv7","Corp_Flagship_lv8","Corp_Flagship_lv8","Corp_Flagship_lv9","Corp_Flagship_lv9","Corp_Flagship_lv10"],ModelScale:100,IsCombatShip:1,CanBeBuilt:0,BuildCost:0,DesignUpgradeCost:[2e5,6e5,2e6,5e6,2e7,4e7,6e7,8e7,1e8,14e7,18e7,22e7,26e7,3e8,35e7],DesignUpgradeTime:0,RequiredPlanetLevel:0,HP:[5e3,5500,6050,6650,7300,8e3,8800,9700,10700,11800,13e3,14200,15600,17500,2e4],Speed:80,FuelUsePer5000Distance:100,JumpFuelCosts:1e3,WhiteStarScore:[5e3,1e4,15e3,2e4,3e4,4e4,5e4,6e4,7e4,8e4,9e4,1e5,11e4,12e4,13e4],modules:{Battery:[1,2,3,4,5,6,7,8,9,10,10,11,11,12,12],Immolation:[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Recoil:[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],Stealth:[0,0,0,12,12,12,12,12,12,12,12,12,12,12,12],EMPRocket:[0,0,0,0,0,1,2,3,4,5,6,7,8,8,8],FlagshipDartBarrage:[0,0,0,0,0,0,0,0,0,1,1,1,2,2,3],FlagshipAreaShield:[0,0,0,0,0,0,0,1,1,1,2,2,2,3,3]}},Hydraling2:{Name:"Hydraling2",TID:"TID_SHIP_CERB_HYDRA_2",TID_Description:"TID_SHIP_CERB_HYDRA_2_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_HYDRA_2_DESCR",ConceptImage:"portrait_CerberusHydra",Model:"Battleship_CerberusHydraling2",ModelScale:150,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,HP:2e4,Speed:100,ShipAIHandler:4,AIUpdateIntervalSeconds:20,AggressiveAI:1,InfluencePoints:100,EMPResist:80,modules:[{Name:"HydraBarrage",TID:"TID_MODULE_HYDRA_BARRAGE",TID_Description:"TID_MODULE_HYDRA_BARRAGE_DESCR",AwardLevel:0,Icon:"Mod_Barrage_Icon",Hide:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1400,DPS:40,AdditionalDPSPerTargetInRange:200}]},Hydraling1:{Name:"Hydraling1",TID:"TID_SHIP_CERB_HYDRA_1",TID_Description:"TID_SHIP_CERB_HYDRA_1_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_HYDRA_1_DESCR",ConceptImage:"portrait_CerberusHydra",Model:"Battleship_CerberusHydraling1",ModelScale:150,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,HP:45e3,Speed:100,ShipAIHandler:4,AIUpdateIntervalSeconds:20,AggressiveAI:1,InfluencePoints:200,OnDestroySpawn:"Hydraling2",OnDestroySpawnCount:2,OnDestroySpawnMinRadius:300,OnDestroySpawnMaxRadius:600,SpawnFx:"SentinelSpawn_Fx",EMPResist:80,modules:[{level:2,Name:"HydraBarrage",TID:"TID_MODULE_HYDRA_BARRAGE",TID_Description:"TID_MODULE_HYDRA_BARRAGE_DESCR",AwardLevel:0,Icon:"Mod_Barrage_Icon",Hide:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1400,DPS:60,AdditionalDPSPerTargetInRange:300}]},CerberusHydra:{Name:"CerberusHydra",TID:"TID_SHIP_CERB_HYDRA",TID_Description:"TID_SHIP_CERB_HYDRA_DESCR",TID_INFO_SCREEN:"TID_SHIP_CERB_HYDRA_DESCR",ConceptImage:"portrait_CerberusHydra",Model:"Battleship_CerberusHydra",ModelScale:200,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:12e4,Speed:80,ShipAIHandler:4,AIUpdateIntervalSeconds:20,AggressiveAI:1,InfluencePoints:500,OnDestroySpawn:"Hydraling1",OnDestroySpawnCount:2,OnDestroySpawnMinRadius:300,OnDestroySpawnMaxRadius:600,SpawnFx:"SentinelSpawn_Fx",EMPResist:80,modules:[{level:3,Name:"HydraBarrage",TID:"TID_MODULE_HYDRA_BARRAGE",TID_Description:"TID_MODULE_HYDRA_BARRAGE_DESCR",AwardLevel:0,Icon:"Mod_Barrage_Icon",Hide:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"bullets",WeaponFx:"Gun_Projectile01_Strong",EffectRadius:1400,DPS:120,AdditionalDPSPerTargetInRange:500}]},CerberusStormBLS:{Name:"CerberusStormBLS",TID:"TID_SHIP_STORM",TID_Description:"TID_SHIP_STORM_DESCR",TID_INFO_SCREEN:"TID_SHIP_STORM_DESCR",ConceptImage:"portrait_CerberusStorm",Model:"Fighter_Cerberus6_lv1",ModelScale:100,IsCombatShip:1,CanBeBuilt:0,NewModuleSlots:"Weapon",BuildCost:0,RequiredPlanetLevel:0,HP:4e4,Speed:6,ShipAIHandler:13,InfluencePoints:150,RadialMoveRadius:1200,modules:[{Name:"DartBarrage",TID:"TID_MODULE_DART_BARRAGE",TID_Description:"TID_MODULE_DART_BARRAGE_DESCR",AwardLevel:0,Icon:"Mod_DartBarrage_Icon",InitialBlueprints:0,Hide:1,DoNotAward:1,SlotType:"Weapon",ActivationType:"Passive",WeaponEffectType:"projectile",WeaponFx:"DartBarrage",ActivateFX:"BomberLauncher_activate",ScaleEffectsWithZoom:1,ActivationDelay:5,EffectRadius:2500,MaxTargets:16,StopCountdownOnDisable:1,projectile:{Name:"DartBarrage",TID:"TID_DART_MISSILE",TID_Description:"TID_DART_MISSILE_DESCR",Speed:300,HP:350,Damage:2500,DamageRange:800,AdditionalWaypoint:0,Model:"projectiles/DartRocket",ImpactFX:"projectiles/DartRocketHit_FX",DestroyedFX:"projectiles/DartRocketDeath_FX",LaunchFX:"projectiles/AlphaRocketLaunch_FX"},ActivationDelayWS:3e3,ActivationDelayBS:10}]}}}}]);