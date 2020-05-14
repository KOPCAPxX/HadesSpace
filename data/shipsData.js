// generated by e:\projects\HadesStarData\generateGameData.js
// at Thu May 14 2020

let data = {
  Transport: {
    Name: "Transport",
    TID: "TID_SHIP_TRANSPORT",
    TID_Description: "TID_SHIP_TRANSPORT_DESCR",
    Model: ["Transport_lv1", "Transport_lv2", "Transport_lv3", "Transport_lv4", "Transport_lv5", "Transport_lv6"],
    NewModuleSlots: ["Trade", "Trade", "Support!Trade", "Trade", "Trade", "Trade"],
    BuildCost: [250, 1000, 8000, 20000, 50000, 60000],
    DesignUpgradeCost: [0, 10000, 60000, 300000, 1000000, 7000000],
    DesignUpgradeTime: [0, 28800, 86400, 259200, 604800, 864000],
    JobCapacity: [1, 2, 3, 4, 5, 8],
    Speed: 576,
    FuelUsePer5000Distance: [1.8, 2.4, 6, 8, 10, 11],
    JumpFuelCosts: [15, 25, 50, 75, 100, 120],
    WhiteStarScore: [1, 500, 1000, 1500, 2000, 2200],
    maxLevel: 6,
  },
  Miner: {
    Name: "Miner",
    TID: "TID_SHIP_MINER",
    TID_Description: "TID_SHIP_MINER_DESCR",
    Model: ["Miner_lv1", "Miner_lv2", "Miner_lv3", "Miner_lv4", "Miner_lv5", "Miner_lv6"],
    NewModuleSlots: ["Mining", "Mining", "Support", "Mining", "Mining", "Mining"],
    BuildCost: [500, 1000, 10000, 30000, 60000, 100000],
    DesignUpgradeCost: [0, 5000, 50000, 250000, 800000, 6000000],
    DesignUpgradeTime: [0, 14400, 86400, 259200, 604800, 864000],
    NumSectorsToMine: [1, 2, 3, 4, 5, 6],
    HydrogenCapacity: [50, 250, 600, 1200, 2000, 2500],
    MiningPeriod: [1000, 800, 500, 250, 100, 75],
    Speed: 432,
    JumpFuelCosts: [5, 10, 15, 20, 25, 40],
    WhiteStarScore: [1, 500, 1000, 2000, 4000, 8000],
    maxLevel: 6,
  },
  Battleship: {
    Name: "Battleship",
    TID: "TID_SHIP_BATTLESHIP",
    TID_Description: "TID_SHIP_BATTLESHIP_DESCR",
    Model: ["Battleship_lv1", "Battleship_lv2", "Battleship_lv3", "Battleship_lv4", "Battleship_lv5", "Battleship_lv6"],
    NewModuleSlots: ["Weapon!Shield", "Support", "Support", "Support", "Support", "Support"],
    BuildCost: [750, 1500, 20000, 60000, 120000, 150000],
    DesignUpgradeCost: [0, 10000, 80000, 400000, 1500000, 8000000],
    DesignUpgradeTime: [0, 28800, 86400, 259200, 604800, 864000],
    HP: [4200, 5000, 6000, 7500, 9000, 9500],
    HealRate: [5, 4, 3.25, 2.5, 2.5, 2.63],
    Speed: 600,
    FuelUsePer5000Distance: [2.8, 4.2, 12, 24, 40, 44],
    JumpFuelCosts: [20, 50, 80, 120, 200, 240],
    WhiteStarScore: [1, 500, 2000, 4000, 7000, 8000],
    BSScore: [1, 10000, 25000, 40000, 50000, 60000],
    maxLevel: 6,
  },
  CerberusSentinel: {
    Name: "CerberusSentinel",
    TID: "TID_SHIP_CERB_FIGHTER",
    TID_Description: "TID_SHIP_CERB_FIGHTER_DESCR",
    Model: "Fighter_Cerberus2_lv1",
    HP: 750,
    Speed: 300,
    InfluencePoints: 10,
    maxLevel: 1,
    Battery: 6,
  },
  CerberusGuardian: {
    Name: "CerberusGuardian",
    TID: "TID_SHIP_CERB_SECTOR_GUARDIAN",
    TID_Description: "TID_SHIP_CERB_SECTOR_GUARDIAN_DESCR",
    Model: "Fighter_Cerberus1_lv1",
    HP: 7000,
    Speed: 330,
    InfluencePoints: 20,
    maxLevel: 1,
    GuardianBattery: 1,
  },
  CerberusColossus: {
    Name: "CerberusColossus",
    TID: "TID_SHIP_CERB_COLOSSUS",
    TID_Description: "TID_SHIP_CERB_COLOSSUS_DESCR",
    Model: "Battleship_Cerberus_lv1",
    HP: 40000,
    Speed: 360,
    InfluencePoints: 150,
    maxLevel: 1,
    ColossusLaser: 1,
    Salvage: 12,
    PassiveShield: 10,
  },
  CerberusInterceptor: {
    Name: "CerberusInterceptor",
    TID: "TID_SHIP_CERB_INTERCEPTOR",
    TID_Description: "TID_SHIP_CERB_INTERCEPTOR_DESCR",
    Model: "Fighter_Cerberus3_lv1",
    HP: 8000,
    Speed: 660,
    InfluencePoints: 40,
    maxLevel: 1,
    InterceptorMBattery: 1,
  },
  CerberusDestroyer: {
    Name: "CerberusDestroyer",
    TID: "TID_SHIP_CERB_DESTROYER",
    TID_Description: "TID_SHIP_CERB_DESTROYER_DESCR",
    Model: "Cerberus_Destroyer_lv1",
    HP: 10000,
    Speed: 360,
    DockedObjectDestroyTime: 180,
    InfluencePoints: 80,
    maxLevel: 1,
    DestroyerVengeance: 1,
  },
  CerberusPhoenix: {
    Name: "CerberusPhoenix",
    TID: "TID_SHIP_CERB_PHOENIX",
    TID_Description: "TID_SHIP_CERB_PHOENIX_DESCR",
    Model: "Fighter_Cerberus4_lv1",
    HP: 45000,
    Speed: 270,
    OnDestroySpawnCount: 3,
    InfluencePoints: 180,
    maxLevel: 1,
    DualLaser: 5,
    PhoenixShield: 1,
  },
  AlphaDrone: {
    Name: "AlphaDrone",
    TID: "TID_SHIP_ALPHA_DRONE",
    TID_Description: "TID_SHIP_ALPHA_DRONE_DESCR",
    Model: ["AlphaDrone_lv1", "AlphaDrone_lv2", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3", "AlphaDrone_lv3"],
    HP: [400, 1200, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 10000, 12000, 14000],
    InitialModule: "Battery",
    InitialModuleLevels: 2,
    Speed: 1050,
    maxLevel: 12,
  },
  ShipmentDrone: {
    Name: "ShipmentDrone",
    TID: "TID_SHIP_SHIPMENT_DRONE",
    TID_Description: "TID_SHIP_SHIPMENT_DRONE_DESCR",
    Model: "ShipmentDrone_lv1",
    Speed: 1320,
    MaxPerStarSystem: 8,
    maxLevel: 1,
  },
  TutBattleship: {
    Name: "TutBattleship",
    TID: "TID_SHIP_BATTLESHIP",
    TID_Description: "TID_SHIP_BATTLESHIP_DESCR",
    Model: "Battleship_lv3",
    NewModuleSlots: "Weapon",
    BuildCost: 0,
    DesignUpgradeCost: 0,
    DesignUpgradeTime: 0,
    HP: 6000,
    InitialModule: "WeakBattery",
    InitialModuleLevels: 0,
    HydrogenCapacity: 0,
    Speed: 600,
    FuelUsePer5000Distance: 0,
    JumpFuelCosts: 0,
    ShipAIHandler: 9,
    AIUpdateIntervalSeconds: 4,
    WhiteStarScore: 0,
    maxLevel: 1,
  },
  MiningDrone: {
    Name: "MiningDrone",
    TID: "TID_SHIP_MINING_DRONE",
    TID_Description: "TID_SHIP_MINING_DRONE_DESCR",
    Model: ["MiningDrone_lv1", "MiningDrone_lv2", "MiningDrone_lv3", "MiningDrone_lv4", "MiningDrone_lv5", "MiningDrone_lv6", "MiningDrone_lv7", "MiningDrone_lv8", "MiningDrone_lv9", "MiningDrone_lv10"],
    HydrogenCapacity: [140, 160, 180, 200, 220, 250, 280, 310, 350, 400],
    Speed: 1200,
    MaxPerStarSystem: 50,
    maxLevel: 10,
  },
  CerberusBomber: {
    Name: "CerberusBomber",
    TID: "TID_SHIP_CERBERUS_BOMBER",
    TID_Description: "TID_SHIP_CERBERUS_BOMBER_DESCR",
    Model: "Fighter_Cerberus5_lv1",
    HP: 48000,
    MiningPeriod: 80,
    Speed: 240,
    InfluencePoints: 200,
    maxLevel: 1,
    BomberLauncher: 1,
  },
  BlueStarBot: {
    Name: "BlueStarBot",
    TID: "TID_SHIP_BATTLESHIP",
    TID_Description: "TID_SHIP_BATTLESHIP_DESCR",
    Model: ["Battleship_lv1", "Battleship_lv2", "Battleship_lv3", "Battleship_lv4", "Battleship_lv5"],
    NewModuleSlots: ["Weapon!Shield", "Support", "Support", "Support", "Support"],
    HP: [4200, 5000, 6000, 7500, 9000],
    InitialModule: "WeakBattery",
    InitialModuleLevels: 0,
    HydrogenCapacity: 0,
    Speed: 600,
    ShipAIHandler: 12,
    AIUpdateIntervalSeconds: 5,
    maxLevel: 5,
  },
  CerberusStorm: {
    Name: "CerberusStorm",
    TID: "TID_SHIP_STORM",
    TID_Description: "TID_SHIP_STORM_DESCR",
    Model: "Fighter_Cerberus6_lv1",
    HP: 40000,
    Speed: 36,
    InfluencePoints: 150,
    maxLevel: 1,
    DartBarrage: 1,
  },
  CerberusGhosts: {
    Name: "CerberusGhosts",
    TID: "TID_SHIP_CERB_GHOSTS",
    TID_Description: "TID_SHIP_CERB_GHOSTS_DESCR",
    Model: "Cerberus_Swarm_lv1",
    HP: 200,
    Speed: 900,
    InfluencePoints: 0,
    maxLevel: 1,
    Battery: 3,
    NumToSpawn: 15,
    SpawnDelay: 40,
    RadiusMax: 90,
    MoveUpdateSec: 5,
    GhostSpawnSecs: "90!80!70!65!60!60!60!50!50!45!45!45!40!40!35!35!35!30",
  },
  CorpFlagship: {
    Name: "CorpFlagship",
    TID: "TID_CORP_FLAGSHIP",
    TID_Description: "TID_CORP_FLAGSHIP_DESCR",
    Model: ["Corp_Flagship_lv1", "Corp_Flagship_lv2", "Corp_Flagship_lv3", "Corp_Flagship_lv4", "Corp_Flagship_lv5", "Corp_Flagship_lv5", "Corp_Flagship_lv6", "Corp_Flagship_lv6", "Corp_Flagship_lv7", "Corp_Flagship_lv7", "Corp_Flagship_lv8", "Corp_Flagship_lv8", "Corp_Flagship_lv9", "Corp_Flagship_lv9", "Corp_Flagship_lv10"],
    DesignUpgradeCost: [200000, 600000, 2000000, 5000000, 20000000, 40000000, 60000000, 80000000, 100000000, 140000000, 180000000, 220000000, 260000000, 300000000, 350000000],
    HP: [5000, 5500, 6050, 6650, 7300, 8000, 8800, 9700, 10700, 11800, 13000, 14200, 15600, 17500, 20000],
    Speed: 480,
    WhiteStarScore: [5000, 10000, 15000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000],
    maxLevel: 15,
    Battery: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12],
    Immolation: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    Recoil: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    Stealth: [0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    EMPRocket: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8],
  },
};

let byTypes = {
  player: ["Transport", "Miner", "Battleship", "CorpFlagship"],
  cerberus: ["CerberusSentinel", "CerberusGuardian", "CerberusInterceptor", "CerberusColossus", "CerberusDestroyer", "CerberusBomber", "CerberusPhoenix", "CerberusStorm", "CerberusGhosts"],
  drones: ["ShipmentDrone", "MiningDrone", "AlphaDrone"],
  notregistered: ["TutBattleship", "BlueStarBot"],
};

export { data, byTypes };
