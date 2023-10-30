/**
 * @GeneratedBy StarSectors.js runner
 * @OriginalFile raw/yellow_star_sectors.csv
 * @UsedFiles cerb_groups.csv, cerberus_stations.csv
 */

export default {
    Name: ["Start", "SL0_0", "SL0_1", "SL0_2", "SL0_3", "SL0_4", "SL1_0", "SL1_1", "SL1_2", "SL2_0", "SL2_1", "SL2_2", "SL3_0", "SL3_1", "SL3_2", "SL4_0", "SL4_1", "SL4_2", "SL5_0", "SL5_1", "SL5_2", "SL6_0", "SL6_1", "SL6_2", "SL7_0", "SL7_1", "SL7_2", "SL8_0", "SL8_1", "SL8_2", "SL9_0", "SL9_1", "SL9_2", "SL10_0", "SL10_1", "SL10_2"],
    MinScannerLevel: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10],
    Weight: [100, 100, 100, 100, 100, 100, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4],
    PlanetTypes: [["desert_lv1", "lava_lv1"], "water_lv1", null, null, "terran_lv1", null, "gas_lv1", null, null, "terran_lv2", null, null, "lava_lv2", null, null, "water_lv2", "gas_lv2", null, "desert_lv2", null, null, "lava_lv3", null, null, "desert_lv3", "water_lv3", null, "terran_lv3", null, null, "ice_variation1", null, null, "ice_variation2", null, null],
    MinPlanetDistanceFromCenter: [2000, 0, null, null, 0, null, 250, null, null, 500, null, null, 1000, null, null, 1000, 1000, null, 1000, null, null, 1000, null, null, 1000, 1000, null, 1000, null, null, 1000, null, null, 1000, null, null],
    MaxPlanetDistanceFromCenter: [2000, 200, null, null, 200, null, 1000, null, null, 1500, null, null, 2000, null, null, 2000, 2000, null, 2000, null, null, 2000, null, null, 2000, 2000, null, 2000, null, null, 2000, null, null, 2000, null, null],
    NumMoons: [[2, 1], 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    MoonDistance: [800, 1000, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    MoonSize: [100, 100, null, null, null, null, 105, null, null, 105, null, 105, 105, null, null, null, null, null, 110, 105, 105, 105, 105, 105, 105, 105, 105, null, null, null, null, null, null, null, null, null],
    AsteroidsMin: [3, 4, 3, 4, 3, 5, 5, 6, 5, 6, 7, 7, 8, 8, 8, 9, 7, 8, 10, 12, 12, 9, 9, 10, 11, 8, 9, 10, 10, 12, 11, 10, 9, 8, 12, 10],
    AsteroidsMax: [3, 4, 3, 4, 3, 5, 5, 6, 5, 6, 7, 7, 8, 8, 8, 9, 7, 8, 10, 12, 12, 9, 9, 10, 11, 8, 9, 10, 10, 12, 11, 10, 9, 8, 12, 10],
    HydrogenPerDay: [600, 500, 450, 300, 350, 300, 300, 250, 300, 350, 300, 300, 400, 400, 400, 400, 400, 400, 350, 350, 350, 400, 400, 400, 400, 400, 400, 500, 500, 600, 700, 800, 800, 1000, 1000, 1000],
    AsteroidBeltAxis1Size: [1600, 1600, 1600, 2500, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600, 1600],
    AsteroidBeltAxis2Size: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
    CerbGroup: [
        null,
        { Name: "YS1", NumSentinels: 1 },
        { Name: "YS2", NumSentinels: 2 },
        { Name: "YS3", NumGuardians: 1 },
        { Name: "YS4", NumSentinels: 3 },
        { Name: "YS5", NumGuardians: 2 },
        { Name: "YS6", NumSentinels: 1, NumGuardians: 2 },
        { Name: "YS7", NumSentinels: 1, NumGuardians: 1 },
        { Name: "YS8", NumSentinels: 4 },
        { Name: "YS9", NumSentinels: 3, NumGuardians: 2 },
        { Name: "YS_10", NumSentinels: 6 },
        { Name: "YS_11", NumSentinels: 8 },
        { Name: "YS_12", NumSentinels: 1, NumGuardians: 3 },
        { Name: "YS_13", NumSentinels: 1, NumGuardians: 4 },
        { Name: "YS_14", NumGuardians: 7 },
        { Name: "YS_10", NumSentinels: 6 },
        { Name: "YS_15", NumSentinels: 2, NumGuardians: 1 },
        { Name: "YS_16", NumSentinels: 5, NumGuardians: 1 },
        { Name: "YS_17", NumSentinels: 1, NumColossus: 1 },
        { Name: "YS3", NumGuardians: 1 },
        { Name: "YS9", NumSentinels: 3, NumGuardians: 2 },
        { Name: "YS_18", NumSentinels: 4, NumGuardians: 2 },
        { Name: "YS_19", NumSentinels: 5, NumGuardians: 3 },
        { Name: "YS_20", NumGuardians: 3 },
        { Name: "YS_21", NumSentinels: 4, NumColossus: 1 },
        { Name: "YS_22", NumSentinels: 5, NumColossus: 1 },
        { Name: "YS_23", NumSentinels: 6, NumGuardians: 5 },
        { Name: "YS_24", NumSentinels: 7, NumGuardians: 4 },
        { Name: "YS_25", NumSentinels: 8, NumGuardians: 6 },
        { Name: "YS_26", NumSentinels: 7, NumGuardians: 3 },
        { Name: "YS_27", NumSentinels: 8, NumGuardians: 2 },
        { Name: "YS_28", NumSentinels: 3, NumGuardians: 2, NumColossus: 1 },
        { Name: "YS_29", NumColossus: 2 },
        { Name: "YS_18", NumSentinels: 4, NumGuardians: 2 },
        { Name: "YS_30", NumSentinels: 6, NumGuardians: 1 },
        { Name: "YS_31", NumSentinels: 3, NumGuardians: 2, NumColossus: 2 },
    ],
    TutorialUse: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    BSAnomaly: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    NumBases: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 1, 0, 1, 0, 0, 2, 0, 0],
    BaseType: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { Name: "HomeSystem1", TID: "TID_CERB_STATION_HOME1", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 15000, MaxShield: 15000, DPS: 100, AttackRange: 1000, Model: "CerberusStation_DrkNeb", WeaponFx: "Gun_Projectile01_Weak", ShieldRegenPerMinute: 10, ShieldRegenTimeAfterDamage: 3600, MaxShips: 3, AwardXP: 1000 },
        null,
        null,
        null,
        { Name: "HomeSystem1", TID: "TID_CERB_STATION_HOME1", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 15000, MaxShield: 15000, DPS: 100, AttackRange: 1000, Model: "CerberusStation_DrkNeb", WeaponFx: "Gun_Projectile01_Weak", ShieldRegenPerMinute: 10, ShieldRegenTimeAfterDamage: 3600, MaxShips: 3, AwardXP: 1000 },
        null,
        null,
        null,
        null,
        { Name: "HomeSystem2", TID: "TID_CERB_STATION_HOME2", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 50000, MaxShield: 50000, DPS: 140, AttackRange: 1600, Model: "CerberusStation_DrkNeb_lv2", WeaponFx: "Gun_Projectile01", ShieldRegenPerMinute: 14, ShieldRegenTimeAfterDamage: 3600, MaxShips: 5, AwardXP: 3000 },
        { Name: "HomeSystem2", TID: "TID_CERB_STATION_HOME2", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 50000, MaxShield: 50000, DPS: 140, AttackRange: 1600, Model: "CerberusStation_DrkNeb_lv2", WeaponFx: "Gun_Projectile01", ShieldRegenPerMinute: 14, ShieldRegenTimeAfterDamage: 3600, MaxShips: 5, AwardXP: 3000 },
        null,
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        null,
        null,
        null,
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        null,
        null,
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        null,
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        null,
        null,
        { Name: "HomeSystem3", TID: "TID_CERB_STATION_HOME3", TID_Description: "TID_CERB_STATION_HOME_DESCR", ConceptImage: "portrait_CerberusStation", SpawnFleetIntervalSeconds: 86400, ShipToSpawn: "CerberusGuardian", ShipLevel: 0, MaxHP: 90000, MaxShield: 90000, DPS: 200, AttackRange: 2400, Model: "CerberusStation_DrkNeb_lv3", WeaponFx: "Gun_Projectile01_Strong", ShieldRegenPerMinute: 20, ShieldRegenTimeAfterDamage: 3600, MaxShips: 7, AwardXP: 5000 },
        null,
        null,
    ],
};
