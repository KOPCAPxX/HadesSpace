"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[142],{52578:(e,t,a)=>{a.d(t,{Z:()=>R});var r=a(66252),o=a(3577),n=a(49963);const i=e=>((0,r.dD)("data-v-3eae0739"),e=e(),(0,r.Cn)(),e),S={class:"container"},_={class:"title"},I=i((()=>(0,r._)("div",null,null,-1))),l=[I],D=["href"];function T(e,t,a,i,I,T){const c=(0,r.up)("v-data"),s=(0,r.Q2)("t");return(0,r.wg)(),(0,r.iD)("div",S,[Object.keys(a.args.data).length>1?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",_,[(0,r._)("h2",null,(0,o.zw)(e.$t("CONTENT")),1),(0,r._)("div",{class:(0,o.C_)(["hamburger-icon",{opened:I.contentOpened}]),onClick:t[0]||(t[0]=e=>I.contentOpened=!I.contentOpened)},l,2)]),I.contentOpened?((0,r.wg)(),(0,r.j4)(n.W3,{key:0,tag:"ol",class:"list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.args.data,(({Name:e,TID:t})=>((0,r.wg)(),(0,r.iD)("li",{key:e},[(0,r.wy)((0,r._)("a",{href:`#${e}`},null,8,D),[[s,t]])])))),128))])),_:1})):(0,r.kq)("",!0)],64)):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.args.data,((e,t)=>((0,r.wg)(),(0,r.j4)(c,{key:t,data:e,"table-opts":a.args.tableOpts,"icon-dir":a.args.iconDir},null,8,["data","table-opts","icon-dir"])))),128))])}var c=a(64557);const s={components:{VData:c.Z},props:{args:{type:Object,required:!0}},data(){return{contentOpened:!1}}};var d=a(83744);const u=(0,d.Z)(s,[["render",T],["__scopeId","data-v-3eae0739"]]),R=u},78558:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(66252),o=a(3577);const n={class:"portrait-container"},i=["src","alt"],S={class:"topic"};function _(e,t,a,_,I,l){const D=(0,r.up)("Head"),T=(0,r.up)("v-content");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(D,null,{default:(0,r.w5)((()=>[(0,r._)("title",null,(0,o.zw)(I.title),1)])),_:1}),(0,r._)("div",n,[a.portrait?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"portrait",src:a.portrait.src,alt:a.portrait.alt},null,8,i)):(0,r.kq)("",!0),(0,r._)("h1",S,(0,o.zw)(I.title),1)]),(0,r.WI)(e.$slots,"default",{},void 0,!0),(0,r.Wm)(T,{args:a.contentArgs},null,8,["args"])])}var I=a(21232),l=a(52578);const D={components:{Head:I.Fb,VContent:l.Z},props:{contentArgs:{type:Object,requested:!0,default:()=>({})},titleLocKey:{type:String,requested:!0,default:null},portrait:{type:Object,requested:!1,default:null,validator:e=>["src","alt"].every((t=>t in e))}},data(){return{title:this.$t(this.titleLocKey)}}};var T=a(83744);const c=(0,T.Z)(D,[["render",_],["__scopeId","data-v-3776eae5"]]),s=c},85491:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var r=a(66252);function o(e,t,a,o,n,i){const S=(0,r.up)("Page");return(0,r.wg)(),(0,r.j4)(S,{"title-loc-key":"TID_PRODUCTION_DLG_STATIONS","content-args":{data:n.data,iconDir:"game/SpaceBuildings"},portrait:{src:n.img,alt:"spacebuildings"}},null,8,["content-args","portrait"])}var n=a(78558),i=a(5092),S=a(92022),_=a(51131);_.Z.WarpLaneHub.Model=new i.Z("WarpLane"),_.Z.TimeModulator.Model=new i.Z("TimeModulator");const I={components:{Page:n.Z},data(){return{data:(0,S.Z)(_.Z,{filter:([e,t])=>!e.startsWith("#")&&t?.CanBeBuilt||t?.AllowBuildOnYS||t?.AllowBuildOnDS}),img:a(96246)}}};var l=a(83744);const D=(0,l.Z)(I,[["render",o]]),T=D},51131:(e,t,a)=>{a.d(t,{Z:()=>r});const r={Shipyard:{Name:"Shipyard",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_SHIPYARD",TID_Description:"TID_BUILDING_SHIPYARD_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHIPYARD_DESCR",TID_UPGRADE:"TID_BLD_SHIPYARD_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_SHIPYARD",ConceptImage:"portrait_SpaceBuilding",Model:"shipyard",RequiredPlanetLevel:1,Cost:[800,1e3,5e3,2e4,8e4,2e5,5e5,1e6,2e6,5e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,ShipyardCapacity:[4,5,7,8,10,12,13,14,15,16],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[5,60,1800,3600,28800,86400,172800,259200,345600,432e3]},ShortRangeScanner:{Name:"ShortRangeScanner",CanBeBuilt:1,CanCancelBuild:1,CancelBuildRefundPct:90,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,MoveHydrogenCostPerSector:500,AllowMoveInSameSectorOnly:1,TID:"TID_BUILDING_SHORT_RANGE_SCANNER",TID_Description:"TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_SHORT_RANGE_SCANNER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"radar",RequiredPlanetLevel:3,Cost:[500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockCost:[2500,1e4,2e4,4e4,8e4,15e4,3e5,6e5,1e6,2e6,3e6,4e6],SectorUnlockTime:[3600,28800,57600,86400,129600,172800,259200,345600,432e3,518400,604800,604800],RequiresEmptySector:0,MaxPerSector:1,CanScanSectors:1,BuildNotifMode:2,ConstructionTime:[60,14400,43200,86400,86400,86400,86400,86400,86400,86400,86400,86400]},RedStarScanner:{Name:"RedStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_REDSTAR_SCANNER",TID_Description:"TID_BUILDING_REDSTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_REDSTAR_SCANNER_INFO",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_MISSION_BUILDING",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:4,Cost:[1e3,2e3,2e4,6e4,12e4,25e4,1e6,2e6,4e6,8e6,12e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:0,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[3,1800,14400,86400,172800,259200,345600,432e3,518400,604800,864e3]},ResearchStation:{Name:"ResearchStation",CanBeBuilt:1,MoveHydrogenCostPerSector:200,TID:"TID_BUILDING_RESEARCH",TID_Description:"TID_BUILDING_RESEARCH_DESCR",TID_INFO_SCREEN:"TID_BUILDING_RESEARCH_INFO",TID_UPGRADE:"TID_BLD_RESEARCH_STATION_UPGRADE",TID_CUSTOM_TUT_SELECT:"TID_TUT_SELECT_RESEARCH_STATION",ConceptImage:"portrait_SpaceBuilding",Model:"ResearchStation",RequiredPlanetLevel:5,Cost:1e3,ResearchSlots:4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:5},DiplomacyCenter:{Name:"DiplomacyCenter",CanBeBuilt:1,SeparateBuildingPerLevel:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_DIPLOMACY_CENTER",TID_Description:"TID_BUILDING_DIPLOMACY_CENTER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_DIPLOMACY_CENTER_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"embassy",RequiredPlanetLevel:7,Cost:[25e3,5e5,4e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:3,MaxPerSector:1,StargateModel:"JumpGate",BuildNotifMode:3,ShowInStarLinks:1,ConstructionTime:[28800,432e3,864e3]},TradingStation:{Name:"TradingStation",CanBeBuilt:1,CanBeRenamed:1,MoveHydrogenCostPerSector:3e3,TID:"TID_BUILDING_TRADINGSTATION",TID_Description:"TID_BUILDING_TRADINGSTATION_DESCR",TID_INFO_SCREEN:"TID_BUILDING_TRADINGSTATION_DESCR",ConceptImage:"portrait_SpaceBuilding",Model:"trade_station",RequiredPlanetLevel:13,Cost:[6e4,12e4,25e4,5e5,1e6,2e6,3e6,4e6,6e6,8e6],TotalShipmentCRPerDay:[5e3,7e3,9800,13720,19208,26891,37647,52705,73787,103301],RequiresEmptySector:1,MaxOnOwnSolarSystem:3,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[86400,172800,345600,432e3,518400,604800,691200,777600,864e3,950400]},WarpLaneHub:{Name:"WarpLaneHub",CanBeBuilt:1,SeparateBuildingPerLevel:1,AllowAdditionalBuildingsAtMaxLevel:1,BuyInPairs:1,MoveHydrogenCostPerSector:2e3,TID:"TID_BUILDING_WARPLANE_HUB",TID_Description:"TID_BUILDING_WARPLANE_HUB_DESCR",TID_INFO_SCREEN:"TID_BUILDING_WARPLANE_HUB_INFO",ConceptImage:"portrait_WarpLane",PrefabModel:"warpLaneHub",PrefabModel_BuildMenu:"warpLaneHub_BuildIcon",RequiredPlanetLevel:12,Cost:[5e4,5e4,1e5,1e5,2e5,2e5,4e5,4e5,8e5,8e5,15e5,15e5,3e6,3e6,5e6,5e6,6e6,6e6,7e6,7e6,8e6,8e6],RequiresEmptySector:0,MaxOnOwnSolarSystem:24,MaxPerSector:8,IsWarpLane:1,OverrideMinAsteroidDistSquared:1e6,BuildNotifMode:1,ConstructionTime:[43200,43200,86400,86400,172800,172800,259200,259200,345600,345600,432e3,432e3,518400,518400,604800,604800,691200,691200,777600,777600,864e3,864e3]},Stargate:{Name:"Stargate",CanBeBuilt:0,TID:"TID_BUILDING_STARGATE",TID_Description:"TID_BUILDING_STARGATE_DESCR",TID_INFO_SCREEN:"TID_BUILDING_STARGATE_DESCR",ConceptImage:"portrait_JumpGate",IsStargate:1,RequiresEmptySector:0,OverrideMinAsteroidDistSquared:1e6,StargateModel:"JumpGate"},OrangeStarScanner:{Name:"OrangeStarScanner",CanBeBuilt:0,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_ORANGESTAR_SCANNER",TID_Description:"TID_BUILDING_ORANGESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_ORANGESTAR_SCANNER_INFO",ConceptImage:"portrait_JumpGate",Model:"redStarScanner",RequiredPlanetLevel:5,Cost:4e4,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",ConstructionTime:86400},WhiteStarScanner:{Name:"WhiteStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_WHITESTAR_SCANNER",TID_Description:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BLD_WHITESTAR_SCANNER_DESCR",TID_UPGRADE:"TID_BLD_REDSTAR_UPGRADE",ConceptImage:"portrait_JumpGate",Model:"whiteStarScanner",RequiredPlanetLevel:10,Cost:25e3,RequiresEmptySector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,StargateModel:"JumpGateWhiteStar",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:1},TimeModulator:{Name:"TimeModulator",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,AllowMoveInSameSectorOnly:1,TID:"TID_BLD_TIME_MODULATOR",TID_Description:"TID_BLD_TIME_MODULATOR_DESCR",TID_INFO_SCREEN:"TID_BLD_TIME_MODULATOR_INFO",ConceptImage:"portrait_SpaceBuilding",PrefabModel:"timeModulator",PrefabModel_BuildMenu:"timeModulator_BuildIcon",RequiredPlanetLevel:6,Cost:[1e3,4e3,1e4,3e4,1e5,2e5,4e5,6e5,8e5,1e6,2e6,3e6,4e6,5e6,6e6,7e6],TimeSpeedupFactor:[15e3,17500,2e4,22500,25e3,27500,3e4,32500,35e3,37500,4e4,42500,45e3,5e4,55e3,6e4],TimeSpeedupMaxSeconds:600,TimeSpeedupRegenPerDay:1200,RequiresStarSector:1,MaxOnOwnSolarSystem:1,MaxPerSector:1,BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:[600,3600,28800,172800,345600,432e3,518400,604800,691200,777600,864e3,864e3,864e3,864e3,864e3,864e3],Model:"TimeModulator"},BlueStarScanner:{Name:"BlueStarScanner",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BUILDING_BLUESTAR_SCANNER",TID_Description:"TID_BUILDING_BLUESTAR_SCANNER_DESCR",TID_INFO_SCREEN:"TID_BUILDING_BLUESTAR_SCANNER_INFO",TID_UPGRADE:"TID_BUILDING_BLUESTAR_SCANNER_INFO",ConceptImage:"portrait_Anomaly",Model:"blueStarScanner",RequiredPlanetLevel:9,Cost:2e4,RequiresEmptySector:0,MaxOnOwnSolarSystem:1,MaxPerSector:1,StarScannerType:1,StargateModel:"JumpGate",BuildNotifMode:1,ShowInStarLinks:1,ConstructionTime:3},ShipmentRelay:{Name:"ShipmentRelay",CanBeBuilt:1,MoveHydrogenCostPerSector:1e3,TID:"TID_BLD_RELAY",TID_Description:"TID_BLD_RELAY_DESCR",TID_INFO_SCREEN:"TID_BLD_RELAY_INFO",ConceptImage:"portrait_SpaceBuilding",Model:"shipmentRelay",RequiredPlanetLevel:10,Cost:[1e4,25e3,5e4,1e5,2e5,4e5,6e5,1e6,4e6,8e6],MaxOnOwnSolarSystem:1,MaxPerSector:1,TeleportShipmentsPerHr:[4,5,7,9,12,16,22,30,42,60],TeleportShipmentsDurationHr:[4,5,6,8,10,12,16,17,20,24],TeleportShipmentActivationFragments:[5,4,4,4,4,4,4,3,3,3],FragmentCapacity:[5,10,15,20,25,30,35,40,45,50],TeleportShipmentMaxSectors:[1,2,3,4,5,6,8,11,14,18],TSHydroCost:[50,100,250,500,750,1e3,2e3,3e3,4e3,5e3],BuildNotifMode:0,ShowInStarLinks:1,ConstructionTime:[14400,86400,172800,259200,345600,432e3,518400,604800,691200,777600]},DSS:{Name:"DSS",CanBeBuilt:0}}}}]);