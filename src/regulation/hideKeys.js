// noinspection SpellCheckingInspection

export default {
    meta: [
        'TID',
        'TID_Description',
        'Icon',
        'Name',
        'Model',
    ],
    forceTitle: [
        'BarrageMaxAdditionalEnemies',
        'DPSRampTimes',
        'DPSRampTimes_BLS',
        'DPSRampTimesBS',
        'DPSRampTimes_WS',
    ],
    global: [
        'SpawnedShip',
        'NumMoons',
        'Hide',
        'InitialBlueprints',
        'DoNotAward',
        'ShipAIHandler',
        'AggressiveAI',
        'SpawnedShipOffsets',
        'RequiredPlanetLevel',
        'CanBeBuilt',
        'ScaleEffectsWithZoom',
        'TID_UPGRADE',
        'HideSelection',
        'MoonDistance',
        'MoonSize',
        'MinPlanetDistanceFromCenter',
        'MaxPlanetDistanceFromCenter',
        'AsteroidBeltAxis1Size',
        'AsteroidBeltAxis2Size',
        'TutorialUse',
        'Weight',
        'CrystalsWeight',
        'PlanetSize',
        'ColorR',
        'ColorG',
        'ColorB',
        'HexGridSizeX',
        'HexGridSizeY',
        'HexGridMaxRadius',
        'HexCellEdgeSize',
        'FixedSector',
        'TID_CUSTOM_TUT_SELECT',
        'HideModulesOnHUD',
        'GoalRushCostMultiplier',
        'SlotType',
        'WeaponEffectType',
        'WeaponFx',
        'ClientActivationFx',
        'ImpactFX',
        'DestroyedFX',
        'LaunchFX',
        'TID_INFO_SCREEN',
        'ModelScale',
        'ActivateFX',
        'ActivateFXStaysInPlace',
        'SustainedFX',
        'SpawnFx',
        'SustainedFX_Enemy',
        'BuildNotifMode',
        'ShowInStarLinks',
        'PrefabModel',
        'PrefabModel_BuildMenu',
        'StargateModel',
        'SupernovaFX',
        'SupernovaFXSpawnTimeSec',
        'GoogleID',
        'UnlockType',
        'GroupPriority',
        'ListGroupName',
        'BadgeGroupName',
        'ShowOnPlayerBadge',
        'PreviewLevel',
        'ActivationTargetFX',
        'SortLayer',
        'AllowBuildOnYS',
        'UISortOrder',
        'AppearanceModels',
        'PivotYOffset',
        'LinkDPSBoostPct', // перевёл в урон на парсере
        'SortOrder',
        'PSNID',
        'SpeedIncrPerTick',
        'IndependentLaserRampUp',
        'RSMoveCrossSectorCerbsAway',
        'PvPOnlyTargetPlayers',
        'AllowBuildOn',
        'CanBeRenamed',
        'RSEnrichMod',
        'UCReqMinRSLevel',
        'ApplyAOEDamageOnDestroy',
        'SingleTarget',
        'ShowDurationInTopSpot',
        'InitialModule',
        'InitialModuleLevels',

        // временно ?
        'BSPenaltyPerSec',
        'BSPenaltyPerSecOnSector',
        'AllowForWSEarlyAccess',
        'AllowForBLSEarlyAccess',
        'GenWSMods',
    ],
    byPath: [

        // SpaceBuildings
        'Shipyard.MaxPerSector',
        'BlueStarScanner.StarScannerType',
        'WarpLaneHub.OverrideMinAsteroidDistSquared',
        'ShortRangeScanner.CanScanSectors',

        // Cerberus
        /(Cerberus(\w+)|Dark(\w+)|(Dark)?Hydraling(\d))\.BuildCost/,
        /(Cerberus(\w+)|Hydraling(\d+)|Dark(\w+))\.NewModuleSlots/,
        /(Cerberus|Dark)Destroyer\.ApplyModuleOnDockedObjectDestroy/,
        /(Cerberus(\w+)|Hydraling(\d+)|Dark(\w+))\.OnDestroySpawnMinRadius/,
        /(Cerberus(\w+)|Hydraling(\d+)|Dark(\w+))\.OnDestroySpawnMaxRadius/,
        /Dark(\w+)\.BaseCerbShipDataIdx/,
        /HomeSystem(\d)\.ShipLevel/,

        // Ships
        /(Transport|Miner)\.HP/,
        /(Miner|Battleship|CorpFlagship)\.FuelUsePer5000Distance/,
        'Transport.MaxShipments',
        'Battleship.InitialModule',
        'Battleship.InitialModuleLevels',
        'Battleship.HydrogenCapacity',
        'CorpFlagship.DesignUpgradeTime',
        'CorpFlagship.BuildCost',

        // Ships.FlagmanModules
        /(Recoil|Immolation|EMPRocket|FlagshipWeaponModule|FlagshipDartBarrage|FlagshipShieldModule|FlagshipAreaShield|FlagshipDroneSwarm|FlagshipRocketCluster)\.RSLevel/,
        /(Recoil|Immolation|EMPRocket|FlagshipWeaponModule|FlagshipDartBarrage|FlagshipShieldModule|FlagshipAreaShield|FlagshipDroneSwarm|FlagshipRocketCluster)\.UnlockBlueprints/,
        'FlagshipDartBarrage.SingleTarget',
        'FlagshipDartBarrage.SingleTarget',
        'FlagshipDroneSwarm.NewModuleSlots',
        'FlagshipRocketCluster.MaxTargets',
        /(FlagshipDartBarrage|FlagshipAreaShield)\.(BuildCost|NewModuleSlots)/,

        // RedStar
        'RedStar.MaxSectorDistanceToMaxPlanet', // временно ?
        /(Dark)?RedStar\.Star/,
        /(Dark)?RedStar\.RSPublicLateJoin_ClientCacheExpiry/,
        /(Dark)?RedStar\.MaxGateBomberCoverage/,
        /(Dark)?RedStar\.DontAllowUseOfEnemyWSGate/,
        /(Dark)?RedStar\.DisableRSSearchDuringTutorial/,
        /(Dark)?RedStar\.WarnOnSRSPlacementMinNumNeighbors/,
        /(Dark)?RedStar\.PrivateRSEventClientDisplayMode/,
        /(Dark)?RedStar\.LowerPlanetsMaxLevel/,
        /(Dark)?RedStar\.MaxSectorDistanceToMaxPlanet/,
        /(Dark)?RedStar\.HPBC/,
        /(Dark)?RedStar\.LPBC/,
        /(Dark)?RedStar\.RSLevel/,
        /(Dark)?RedStar\.CroidMinDist/,
        /(Dark)?RedStar\.CroidMaxDist/,
        /(Dark)?RedStar\.SharedMinPlanet/,
        /(Dark)?RedStar\.MaxShipsInRSSector/,
        'RedStar.RSJoinInProgressWindowSec',
        'RedStar.DRSArtifactBonus',

        // YellowStar
        'yellow_star_sectors.AsteroidsMin',
        'yellow_star_sectors.NumBases',
        'Planets.FuelShipmentModifier',
        'YellowStar.NumPlayersWithAccess',
        'YellowStar.Star',
        'YellowStar.Lifetime',

        // BlueStar
        'BlueStar.Star',
        'BlueStar.StarSectorNavpointDistance',
        'BlueStar.HydrogenSearchCost',
        'BlueStar.MaxBattleshipsPerPlayer',
        'BlueStar.BlueStar_HydroPctPerMatch',
        'BlueStar.BlueStar_CRRewardWinLimit',
        'BlueStar.CollapsePeriod', // времено ?
        'BlueStar.CycleEndTimes',
        'BlueStar.CycleEndCollapseAreaSize',
        'BlueStar.BlueStar_MaxHydroPerDayAbsolute',
        'BlueStar.InitialCollapseAreaSize', // не так важно

        // WhiteStar
        'WhiteStar.Star',
        'WhiteStar.HQPlanetsPerBracket',
        'WhiteStar.LQPlanetsPerBracket',
        'WhiteStar.FleetDepartTimeInSeconds_WS',
        'WhiteStar.DontAllowUseOfEnemyWSGate',
        'WhiteStar.WSShipXPCollectEnabled',
        'WhiteStar.WSShipMinXP',
        'WhiteStar.WSShipXPEventClientDisplayMode',
        'WhiteStar.WSShipXPEventVersion',
        'WhiteStar.WSShipEventTopBrackets',
        'WhiteStar.WSShipEventCRRewards',
        'WhiteStar.SpeedModifierPct', // времено ?
        'WhiteStar.BarrageMaxAdditionalEnemies_WS',
        'WhiteStar.HAsteroidsClose',

        // Trade
        'ShipmentDrone.MiningPeriod',
        'ShipmentDrone.HP',
        'RelicDrone.MaxShipments',
        'RelicDrone.RelicLoadTicks',
        'RelicDrone.TurretSetupTime_WS', // там какое-то легаси, а новое значение не вижу откуда
        'Dispatch.APTPIOTTPYS',
        'Dispatch.APTPIOTTPWS',

        // Mining
        'HydroRocket.InitialBlueprints',
        'MineralStorageCapacity.FuelUseIncrease',
        'MassMining.FuelUseIncrease',
        'MiningDrone.JobCapacity',
        'BlastDrone.AttackPhaseMaxSpeed',
        'HydroStorageCapacity.FuelUseIncrease',

        // Weapons
        /(WeakBattery|GuardianBattery|InterceptorMBattery|ColossusLaser|DestroyerVengeance|BomberLauncher|PhoenixShield|DartBarrage)\.(UnlockPrice|UnlockBlueprints|UnlockTime|ShowWSInfo|Install|BCCost)/, // В небуле не неужно модулям церберов
        'PlayerRocketLauncher.MinEffectRadius',
        'ChainRay.MaxIncomingLinks', // хз что это

        // Shields
        'AlphaShield.ShieldStrengthPVE',
        'AlphaShield.ShieldStrengthPvP',
        'AreaShield.AreaShieldCoversOwnShip',

        // Support
        /^(?!Delta)(\w+)\.AdditionalWaypoint/,
        'Destiny.ReqEnemyShipsInSector',
        'Bond.PullShips',
        'Bond.BondMinPullVector',
        'Bond.BondMaxPullListSize',
        'Bond.BondWorksOnLoadingTransport',
        /((\w+)Drone|LaserTurret|DroneSquad)\.(BuildCost|DesignUpgradeCost|DesignUpgradeTime|NewModuleSlots)/,
        'RemoteBomb.SpeedPVE',
        'RemoteBomb.SpeedPVP',
        'LaserTurret.Speed',
        'LaserTurret.MaxPerRS',
        'DeltaRocket.PreventUseOnWsJumpgate',
        /^\w+\.Is\w+/,

        // Drone
        'DecoyDrone.HasTaunt',
    ],
};
