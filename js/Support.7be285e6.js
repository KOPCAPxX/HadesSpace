"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[677],{52487:(e,r,a)=>{a.r(r),a.d(r,{default:()=>_});var t=a(66252),l=a(52946),n=a(20128),i=a(96535);const S={__name:"Support",setup(e){function r(e){const r={...e.Salvage},a={...e.Repair};r.SalvageHullPercent&&(r.SalvageHullPercent={RS:r.SalvageHullPercent[0],WS:r.SalvageHullPercent[1]},e.Salvage=r),a.RepairHullPointsPerSecond&&(a.RepairHullPointsPerSecond=a.RepairHullPointsPerSecond.map((e=>e*a.EffectDurationx10/10)),a.RepairHullPointsPerSecond_BLS=a.RepairHullPointsPerSecond_BLS.map((e=>e*a.EffectDurationx10BS/10)),a.RepairHullPointsPerSecond_WS=a.RepairHullPointsPerSecond_WS.map((e=>e*a.EffectDurationx10WS/10/i["default"].WhiteStar.TimeSlowdownFactor)),e.Repair=a);for(const[t,l]of Object.entries(e))if(l.Name.includes("Drone")){const r={...l};if(r?.drone?.modules){for(const e in r.drone.modules)e in r.drone.modules&&e in n.Z&&(r[e]={...n.Z[e]},delete r.drone.modules[e],delete r[e].FuelUseIncrease,delete r[e].BCCost);e[t]=r}}return e}return(e,a)=>((0,t.wg)(),(0,t.j4)(l.ZP,{type:"Support",portrait:"portrait_TurretLaser.png","post-filter":r}))}},o=S,_=o},96535:(e,r,a)=>{a.d(r,{default:()=>t});const t={YellowStar:{Name:"YellowStar",HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:4e3,SpeedModifierPct:300,Lifetime:0,NumPlayersWithAccess:0,IsHome:1,Star:"YellowStar",TID:"TID_YELLOW_STAR",TID_Description:"TID_YELLOW_STAR_DESCR",ConceptImage:"portrait_YellowStar",AppearanceModels:["Home_Star","Home_Star_1","Home_Star_2","Home_Star_3","Home_Star_4","Home_Star_5","Home_Star_6","Home_Star_7","Home_Star_8","Home_Star_9_P","Home_Star_10_P","Home_Star_11_P","Home_Star_12_P","Home_Star_13_P","Home_Star_14_P","Home_Star_15_P","Home_Star_16_P","Home_Star_17_P","Home_Star_18_P","Home_Star_19_P","Home_Star_20_P"],YSCommonVariations:9,SecurityRating:0,Icon:"star_yellow"},RedStar:{Name:"RedStar",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:[null,"Red_Star","Red_Star_1","Red_Star_2","Red_Star_3","Red_Star_4","Red_Star_5","Red_Star_6","Red_Star_7","Red_Star_8","Red_Star_9","Red_Star_10","Red_Star_11"],SecurityRating:0,Icon:"star_red",SupernovaFX:"RedStarExplode_FX",SupernovaFXSpawnTimeSec:3,FixedSector:[null,null,null,null,null,null,null,null,null,null,null,"TutorialRedStar","Mine_Risk0_Lv1"],HexGridSizeX:[0,1,1,1,2,2,2,2,2,2,2,2,2],HexGridSizeY:[1,1,1,2,2,2,2,2,2,2,3,3,3],HexGridMaxRadius:[1,1,1,2,2,3,3,3,3,3,3,3,3],HexCellEdgeSize:[1500,1650,2500,2e3,2500,2250,2300,2400,2600,2900,2300,2400,2600],SpeedModifierPct:250,Lifetime:600,NumPlayersWithAccess:[1,2,2,2,3,4,4,4,4,4,4,4,4],MaxBattleshipsPerPlayer:[1,1,2,2,2,3,3,3,3,3,3,3,3],Star:"RedStar",HydrogenSearchCost:[0,50,75,150,250,400,900,1400,1800,2500,3500,5e3,1e4],JumpCosts_T:[10,[5,5,20],[10,10,10,10,20],[20,20,20,20,80,80,120],[40,40,40,40,100,100,200],[100,100,100,100,300,300,600],[200,200,200,200,400,800,1200],[500,500,800,800,1500,1500,2e3],[750,750,1e3,1e3,1200,1200,1600],[1e3,1e3,2e3,2e3,5e3],[2e3,2e3,2e3,2e3,8e3],[2500,2500,2500,2500,1e4],[5e3,5e3,1e4,1e4,4e4]],JumpCosts_M:[10,[15,60],[20,80],[25,50,100],[30,60,200],[100,100,600],[200,200,800],[250,250,1e3],[500,500,2e3],[750,1e3,5e3],[1e3,2e3,8e3],[1500,3e3,1e4],[2e3,6e3,2e4]],JumpCosts_B:[10,[5,20],[10,10,40],[20,20,60,60,120],[50,50,160,160,250],[50,50,50,350,350,600,1e3],[100,100,100,600,1200,1800],[100,100,100,800,1500,1700,2500],[100,100,100,1e3,2e3,2e3,5e3],[100,100,100,5e3,15e3],[100,100,100,6e3,16e3],[250,250,250,7e3,18e3],[1e3,1e3,1e3,1e4,2e4]],HydroCostModifierPct:[50,50,50,120,150,200,250,250,250,250,250,250,500],CroidAmt:[0,0,4e3,1e4,2e4,5e4,75e3,1e5,15e4,225e3,3e5,4e5,5e5],CroidMinDist:[1,1,1,1,1,2,2,2,2,2,2,2,2],CroidMaxDist:3,MaxSectorDistanceToMaxPlanet:[3,3,3,2,2,2,2,2,2,2,2,2,2],NumMaxPlanets:[null,2,2,2,3,3,3,3,3,3,3,3,3],SharedMinPlanet:1,LowerPlanetsMinLevel:[null,1,1,1,2,3,3,4,4,5,6,6,7],LowerPlanetsMaxLevel:[null,1,1,1,2,3,3,4,4,5,6,6,7],MaxInfluenceLoss:[null,5,10,15,15,20,20,25,25,30,30,30,30],MaxInfluenceGain:[null,30,40,50,60,70,80,100,125,150,200,200,200],InterceptorsToSpawn:[null,null,null,null,1,2,2,3,1,1,1,1,1],DestroyersToSpawn:[null,null,null,null,null,null,4,4,4,4,5,5,5],HPBC:[null,null,null,null,null,null,null,[1,2],[1,2],[2,3],[2,3],[2,3],[2,3]],LPBC:[null,null,null,null,null,null,null,[1,1],[1,1],[1,1],[1,2],[1,2],[1,2]],DisableRSSearchDuringTutorial:1,WarnOnSRSPlacementMinNumNeighbors:3,SectorEnrichCooldownSecondsRS:300,SectorGenesisCooldownSecondsRS:300,PrivateRSEventClientDisplayMode:2,RSJoinInProgressWindowSec:180,RSPublicLateJoin_ClientCacheExpiry:30,RSPublicLateJoin_MinStarLevel:5,DRSArtifactBonus:100,MaxShipsInRSSector:50,RSEnrichMod:8,Influence:[null,[0,150],[80,500],[550,1500],[1100,3e3],[1900,6e3],[2900,11e3],[3900,18e3],[6900,26e3],[9900,36e3],[12400,8e4],[15e3,14e4],[17500,18e4]],RegularInfuenceRange:[null,[0,100],[100,400],[400,1200],[1200,2500],[2500,5e3],[5500,1e4],[1e4,16e3],[16e3,24e3],[24e3,34e3],[34e3,6e4],[6e4,12e4],[12e4,16e4]],InfluenceAwardThreshold:[null,[10,40],[30,80],[80,250],[100,500],[150,2e3],[400,3e3],[1e3,4e3],[1500,6e3],[2e3,8e3],[2400,9e3],[3e3,1e4],[4e3,12e3]],RSLevel:[2,7]},BlueStar:{Name:"BlueStar",TID:"TID_BLUE_STAR",TID_Description:"TID_BLUE_STAR_INFO",ConceptImage:"portrait_BlueStar",AppearanceModels:"Blue_Star",SecurityRating:2,Icon:"star_blue",SupernovaFX:"BlueStarExplode_FX",SupernovaFXSpawnTimeSec:3,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:1900,SpeedModifierPct:200,Lifetime:220,NumPlayersWithAccess:5,MaxBattleshipsPerPlayer:3,Star:"BlueStar",HydrogenSearchCost:750,CollapsePeriod:20,InitialCollapseAreaSize:14200,CycleEndTimes:[80,180,220],CycleEndCollapseAreaSize:[7e3,1600,0],StarSectorDPS:150,StarSectorNavpoints:3,StarSectorNavpointDistance:[1e3,1300],BlueStar_CRRewardWinLimit:1,BlueStar_CRRewardWinLimitPeriod:86400,BlueStar_HydroPctPerMatch:10,BlueStar_HydroPctPerPos:[100,60,25,10,0],BlueStar_MaxHydroPerDayPct:35,BlueStar_MaxHydroPerDayAbsolute:12e3,BlueStar_CreditPctPerPos:[100,60,30,0,0],BlueStar_RankedMatchesPerDay:3,BlueStar_Fragments:[12,8,5,3,0],BlueStar_SPFactor:25},GreenStar:{Name:"GreenStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",AppearanceModels:"Green_Star",SecurityRating:0,Icon:"star_yellow"},WhiteStar:{Name:"WhiteStar",TID:"TID_WHITE_STAR",TID_Description:"TID_WHITE_STAR_INFO",ConceptImage:"portrait_WhiteStar",AppearanceModels:["White_Star","White_Star_02"],SecurityRating:1,Icon:"star_white",TimeSlowdownFactor:600,PreparationTimeHours:12,SupernovaFX:"WhiteStarExplode_FX",SupernovaFXSpawnTimeSec:7,HexGridSizeX:3,HexGridSizeY:3,HexGridMaxRadius:3,HexCellEdgeSize:2500,SpeedModifierPct:130,Lifetime:720,Star:"WhiteStar",HQPlanetsPerBracket:4,LQPlanetsPerBracket:4,HAsteroidsClose:6,AstRefreshInfoDisp:[2,3,1200,3200],AstRefreshInfoClose:[4,2,400,6800],FleetDepartTimeInSeconds_WS:120,MaxWaypointsWS:5,SectorEnrichCooldownSecondsWS:0,SectorGenesisCooldownSecondsWS:0,WSMaxBSPerPlayer:1,WSMaxOtherPerPlayer:1,WSLostShipTimeCooldown:64800,WSDisbandCooldown:259200,WSJumpBSTimeCooldown:600,WSJumpOtherTimeCooldown:600,WSBucketSizes:10,DontAllowUseOfEnemyWSGate:1,BarrageMaxAdditionalEnemies_WS:4,WSShipXPCollectEnabled:0,WSShipMinXP:1e3,WSShipXPEventClientDisplayMode:0,WSShipEventTopBrackets:[3,20,200],WSShipEventCRRewards:[8e3,3e3,1e3],WSShipXPEventVersion:2,WSDistinctions:[22,21,20],WSDistinctionWins:[2,3,4]},OrangeStar:{Name:"OrangeStar",TID:"TID_TODO",TID_Description:"TID_TODO",ConceptImage:"portrait_YellowStar",AppearanceModels:"Orange_Star",SecurityRating:0,Icon:"star_yellow",HexGridSizeX:1,HexGridSizeY:1,HexGridMaxRadius:1,HexCellEdgeSize:2e3,Lifetime:900,MaxBattleshipsPerPlayer:3,Star:"OrangeStar",HydrogenSearchCost:500,NumMaxPlanets:1,MaxInfluenceLoss:15,MaxInfluenceGain:50,Players:[2],RegularInfuenceRange:[2900,4e3],InfluenceAwardThreshold:[500,1700]},RedStarLarge:{Name:"RedStarLarge",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:"Red_StarLarge",SecurityRating:0,Icon:"star_red"},QuantumStar:{Name:"QuantumStar",TID:"TID_QUANTUM_STAR",TID_Description:"TID_QUANTUM_STAR_INFO",ConceptImage:"portrait_EmptySpace",AppearanceModels:"Quantum_Star_1",Icon:"star_dark",HexGridSizeX:[3,2,2],HexGridSizeY:[0,0,2],HexGridMaxRadius:[0,-2,2],HexCellEdgeSize:[5e3,5e3,4e3],Lifetime:0,NumPlayersWithAccess:0,Star:"QuantumStar",CerbWaveSec:[300,900,1800],DarknessSec:[82800,255600,601200],NumBuildingDestroyers:[2,3],BuildingDestroyersTimes:[60,120]},DarkRedStar:{Name:"DarkRedStar",TID:"TID_RED_STAR",TID_Description:"TID_RED_STAR_INFO",ConceptImage:"portrait_RedStar",AppearanceModels:[null,"Red_Star","Red_Star_1","Red_Star_2","DRed_Star_3","DRed_Star_4","DRed_Star_5","DRed_Star_6","DRed_Star_7","DRed_Star_8","DRed_Star_9","DRed_Star_10","DRed_Star_11"],SecurityRating:0,Icon:"star_red_dark",SupernovaFX:"RedStarExplode_FX",SupernovaFXSpawnTimeSec:3,FixedSector:[null,null,null,null,null,null,null,null,null,null,null,"TutorialRedStar","Mine_Risk0_Lv1"],HexGridSizeX:[0,1,1,2,2,2,2,2,2,2,2,2,2],HexGridSizeY:[1,1,1,2,2,2,2,2,2,2,2,2,2],HexGridMaxRadius:[1,1,1,2,2,2,2,2,2,2,2,2,2],HexCellEdgeSize:[1500,1650,2500,2e3,2500,2250,2300,2600,3e3,3e3,3e3,3e3,3e3],SpeedModifierPct:250,Lifetime:600,NumPlayersWithAccess:1,MaxBattleshipsPerPlayer:[1,1,2,2,2,3,3,3,3,3,3,3,3],Star:"DarkRedStar",HydrogenSearchCost:[0,0,0,0,0,0,0,1400,1800,2500,3500,5e3,1e4],JumpCosts_T:[0,0,0,0,0,0,0,[500,500,800,800,1500,1500,2e3],[750,750,1e3,1e3,1200,1200,1600],[1e3,1e3,2e3,2e3,5e3],[2e3,2e3,2e3,2e3,8e3],[2500,2500,2500,2500,1e4],[5e3,5e3,1e4,1e4,4e4]],JumpCosts_M:[0,0,0,0,0,0,0,[250,250,1e3],[500,500,2e3],[750,1e3,5e3],[1e3,2e3,8e3],[1500,3e3,1e4],[2e3,6e3,2e4]],JumpCosts_B:[0,0,0,0,0,0,0,[100,100,100,800,1500,1700,2500],[100,100,100,1e3,2e3,2e3,5e3],[100,100,100,5e3,15e3],[100,100,100,6e3,16e3],[250,250,250,7e3,18e3],[1e3,1e3,1e3,1e4,2e4]],HydroCostModifierPct:[0,0,0,0,0,0,0,250,250,250,250,250,500],CroidAmt:[0,0,0,0,0,0,0,15e4,225e3,337500,45e4,6e5,75e4],CroidMinDist:[0,0,0,0,0,0,0,2,2,2,2,2,2],CroidMaxDist:[0,0,0,0,0,0,0,3,3,3,3,3,3],DestroyersToSpawn:[0,0,0,0,0,0,0,3,3,3,3,3,3],InterceptorsToSpawn:[0,0,0,0,0,0,0,3,1,1,1,1,1],MaxSectorDistanceToMaxPlanet:[0,0,0,0,0,0,0,3,3,3,3,3,3],NumMaxPlanets:[0,0,0,0,0,0,0,3,3,3,3,3,3],SharedMinPlanet:0,LowerPlanetsMinLevel:[0,0,0,0,0,0,0,5,6,7,8,9,10],LowerPlanetsMaxLevel:[0,0,0,0,0,0,0,6,7,8,9,10,11],MaxInfluenceLoss:[0,0,0,0,0,0,0,25,25,30,30,30,30],MaxInfluenceGain:[0,0,0,0,0,0,0,120,150,180,240,260,300],HPBC:[null,null,null,null,null,null,null,[1,2],[1,2],[2,3],[2,3],[2,3],[2,3]],LPBC:[null,null,null,null,null,null,null,[1,1],[1,1],[1,1],[1,2],[1,2],[1,2]],ArtifactDRSPoints:[null,null,null,null,null,null,null,1,2,4,6,10,20],DRSArtifactBonus:100,Influence:[0,0,0,0,0,0,0,[3900,21600],[6900,31200],[9900,43200],[12400,1e5],[15e3,17e4],[17500,22e4]],RegularInfuenceRange:[0,0,0,0,0,0,0,[1e4,19200],[16e3,28800],[24e3,40800],[34e3,72e3],[6e4,144e3],[12e4,192e3]],InfluenceAwardThreshold:[0,0,0,0,0,0,0,[480,2400],[580,2800],[680,3500],[780,4500],[880,5500],[1080,6500]]}}}}]);