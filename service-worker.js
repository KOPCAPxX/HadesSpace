if(!self.define){let e,r={};const l=(l,i)=>(l=new URL(l+".js",i).href,r[l]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=r,document.head.appendChild(e)}else e=l,importScripts(l),r()})).then((()=>{let e=r[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let n={};const p=e=>l(e,s),u={module:{uri:s},exports:n,require:p};r[s]=Promise.all(i.map((e=>u[e]||p(e)))).then((e=>(a(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hades-space"}),self.skipWaiting(),e.precacheAndRoute([{url:"/HadesSpace/404.html",revision:"dec0e5853338d708b6f2602239bfa350"},{url:"/HadesSpace/CartographerRU/images/instruct1.png",revision:"3daeb2770a2eab92dd45e5f27f069a29"},{url:"/HadesSpace/CartographerRU/images/instruct2.png",revision:"d5e4d6d6b7f07d0ff221669cc1eaf5c3"},{url:"/HadesSpace/CartographerRU/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/HadesSpace/CartographerRU/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/HadesSpace/CartographerRU/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/HadesSpace/CartographerRU/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/HadesSpace/CartographerRU/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/HadesSpace/CartographerRU/index.html",revision:"967e7ae310782280782a85e74138ad17"},{url:"/HadesSpace/CartographerRU/leaflet.css",revision:"83499c88888e27f85435b14fc288e632"},{url:"/HadesSpace/CartographerRU/leaflet.js",revision:"762a6b64eba28bd621f2fc8aba9168d6"},{url:"/HadesSpace/CartographerRU/style.css",revision:"450fc463b8b1a349df717056fbb3e078"},{url:"/HadesSpace/css/952.00e32d41.css",revision:null},{url:"/HadesSpace/css/About.b04d93b0.css",revision:null},{url:"/HadesSpace/css/Achievements.0831eda4.css",revision:null},{url:"/HadesSpace/css/AllianceLevels.0831eda4.css",revision:null},{url:"/HadesSpace/css/BlueStar.0831eda4.css",revision:null},{url:"/HadesSpace/css/Cerberus.778d98c3.css",revision:null},{url:"/HadesSpace/css/Index.61a1a573.css",revision:null},{url:"/HadesSpace/css/Mining.0831eda4.css",revision:null},{url:"/HadesSpace/css/ModulesCalc.5f16addd.css",revision:null},{url:"/HadesSpace/css/PlanetsCalc.8f6c5794.css",revision:null},{url:"/HadesSpace/css/PlayerGoals.0831eda4.css",revision:null},{url:"/HadesSpace/css/RedStar.a57cdc96.css",revision:null},{url:"/HadesSpace/css/Shield.0831eda4.css",revision:null},{url:"/HadesSpace/css/Ships.86ea8754.css",revision:null},{url:"/HadesSpace/css/SpaceBuildings.0831eda4.css",revision:null},{url:"/HadesSpace/css/Support.0831eda4.css",revision:null},{url:"/HadesSpace/css/Trade.0831eda4.css",revision:null},{url:"/HadesSpace/css/Weapon.0831eda4.css",revision:null},{url:"/HadesSpace/css/WhiteStar.db64cad6.css",revision:null},{url:"/HadesSpace/css/YellowStar.1d46f004.css",revision:null},{url:"/HadesSpace/css/app.32c1d008.css",revision:null},{url:"/HadesSpace/favicon/150x150.png",revision:"7ac132d32e3760e93b81d305f4fd25ac"},{url:"/HadesSpace/favicon/16x16.png",revision:"bc0a3a9097013db0736970d421bc0516"},{url:"/HadesSpace/favicon/192x192.png",revision:"2416bdc39ec05133a5ec65109f01514f"},{url:"/HadesSpace/favicon/32x32.png",revision:"8c9e4de86ec33dbcbcb752440161a7d1"},{url:"/HadesSpace/favicon/512x512.png",revision:"1addb7269b39c6dece2e4f716d6a12f2"},{url:"/HadesSpace/favicon/apple-touch.png",revision:"969a2ad199640e64204cf322eb397e16"},{url:"/HadesSpace/favicon/favicon.png",revision:"59ab6640e691932b8197ec8bdad44229"},{url:"/HadesSpace/favicon/safari-pinned-tab.svg",revision:"f0139fcda368ab3f6bf4c4ce34583552"},{url:"/HadesSpace/img/AlphaBadge01.aaf854bd.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1.27f991aa.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv1_DrkNeb.49411826.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2.c798ffc1.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv2_DrkNeb.e1094597.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3.41c0a2c9.png",revision:null},{url:"/HadesSpace/img/AlphaDrone_lv3_DrkNeb.a41f708b.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra.d7af3bd6.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydra_DrkNeb.57dee29c.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1.bb18845c.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling1_DrkNeb.9e407e1c.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2.22ef566c.png",revision:null},{url:"/HadesSpace/img/Battleship_CerberusHydraling2_DrkNeb.9eda5f85.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_DrkNeb_lv1.9314dc99.png",revision:null},{url:"/HadesSpace/img/Battleship_Cerberus_lv1.d305e782.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv1.f38c0f34.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv2.804b6884.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv3.3c6b8f41.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv4.50e75299.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv5.5b257824.png",revision:null},{url:"/HadesSpace/img/Battleship_DrkNeb_lv6.37adf72c.png",revision:null},{url:"/HadesSpace/img/Battleship_lv1.a9c983f9.png",revision:null},{url:"/HadesSpace/img/Battleship_lv2.6c9cb279.png",revision:null},{url:"/HadesSpace/img/Battleship_lv3.7915ea44.png",revision:null},{url:"/HadesSpace/img/Battleship_lv4.498b350b.png",revision:null},{url:"/HadesSpace/img/Battleship_lv5.a45ff6ea.png",revision:null},{url:"/HadesSpace/img/Battleship_lv6.72df93e7.png",revision:null},{url:"/HadesSpace/img/BlackCitadel.c9cf0466.png",revision:null},{url:"/HadesSpace/img/CerberusStation.793dc304.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb.793dc304.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/img/CerberusStation_DrkNeb_lv3.9053d732.png",revision:null},{url:"/HadesSpace/img/CerberusStation_lv2.d65ed47c.png",revision:null},{url:"/HadesSpace/img/CerberusStation_lv3.9053d732.png",revision:null},{url:"/HadesSpace/img/Cerberus_Destroyer_DrkNeb_lv1.cca950a4.png",revision:null},{url:"/HadesSpace/img/Cerberus_Destroyer_lv1.35ddf7a2.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_Carrier.8d6c6fc9.png",revision:null},{url:"/HadesSpace/img/Cerberus_DrkNeb_Swarm_lv1.f5f449d7.png",revision:null},{url:"/HadesSpace/img/Cerberus_Swarm_lv1.3bec4210.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1.914e210a.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10.90b795c5.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv10_DrkNeb.642e161f.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv1_DrkNeb.0912a626.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2.72288a4c.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv2_DrkNeb.0f9603a5.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3.a8156624.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv3_DrkNeb.21ee85eb.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4.8a761994.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv4_DrkNeb.617259f3.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5.5f539430.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv5_DrkNeb.48dc4d84.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6.3dbb83ff.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv6_DrkNeb.2db5852b.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7.19781c8b.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv7_DrkNeb.be6b4d29.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8.3dab74b1.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv8_DrkNeb.e0dd48e1.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9.0bd45b63.png",revision:null},{url:"/HadesSpace/img/Corp_Flagship_lv9_DrkNeb.8b929415.png",revision:null},{url:"/HadesSpace/img/Distinction_Admiral.72cca942.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar1.575ba4a2.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar10.b4dcdc77.png",revision:null},{url:"/HadesSpace/img/Distinction_BlueStar50.103aa3e0.png",revision:null},{url:"/HadesSpace/img/Distinction_Emperor.72854902.png",revision:null},{url:"/HadesSpace/img/Distinction_Governer.ce1b09c7.png",revision:null},{url:"/HadesSpace/img/Distinction_WhiteStar1.396fc1f5.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus1_lv1.94cd35a6.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus2_lv1.58f35199.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3_DrkNeb_lv1.cca950a4.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus3_lv1.6414a30e.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus4_lv1.dc60a8a3.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus5_lv1.be53baac.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus6_lv1.7322224d.png",revision:null},{url:"/HadesSpace/img/Fighter_Cerberus_DrkNeb.7efc25cb.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus1_lv1.9bb5c76a.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus2_lv1.9290f909.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus3.59a1ee28.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus4_lv1.ed4d69d5.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus5_lv1.a2460c0b.png",revision:null},{url:"/HadesSpace/img/Fighter_DrkNeb_Cerberus6_lv1.d92c2516.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv1.db5acd0f.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv2.e3d576c6.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv4.41a993bd.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv5.4a2e5930.png",revision:null},{url:"/HadesSpace/img/Miner_DrkNeb_lv6.02cf6909.png",revision:null},{url:"/HadesSpace/img/Miner_lv1.0c18c064.png",revision:null},{url:"/HadesSpace/img/Miner_lv2.e2feedec.png",revision:null},{url:"/HadesSpace/img/Miner_lv3.fc359dc2.png",revision:null},{url:"/HadesSpace/img/Miner_lv4.6c383dd3.png",revision:null},{url:"/HadesSpace/img/Miner_lv5.57a244f9.png",revision:null},{url:"/HadesSpace/img/Miner_lv6.358a72f8.png",revision:null},{url:"/HadesSpace/img/Miner_lv6.a5896521.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv10.170d276a.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv2.9018e196.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv4.43c35729.png",revision:null},{url:"/HadesSpace/img/MiningDrone_DrkNeb_lv7.5284c3be.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv10.d93070bb.png",revision:null},{url:"/HadesSpace/img/MiningDrone_lv4-6.f2c09a10.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv1_DrkNeb.bf0e1948.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv2_DrkNeb.ad0679de.png",revision:null},{url:"/HadesSpace/img/RelicDrone_lv3_DrkNeb.f5402c9c.png",revision:null},{url:"/HadesSpace/img/RemoteBomb.1a71e1b9.png",revision:null},{url:"/HadesSpace/img/ResearchMagnify_Icon.8e5097e1.png",revision:null},{url:"/HadesSpace/img/ResearchStation.f3eacc10.png",revision:null},{url:"/HadesSpace/img/ShipmentDrone_lv1_DrkNeb.6fac1a15.png",revision:null},{url:"/HadesSpace/img/SpaceBuilding.76875c04.png",revision:null},{url:"/HadesSpace/img/TimeModulator.d347ba73.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv1.c5f31baf.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv2.7bdd3502.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv4.8c5f4d79.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv5.611d5f73.png",revision:null},{url:"/HadesSpace/img/Transport_DrkNeb_lv6.c5a76198.png",revision:null},{url:"/HadesSpace/img/Transport_lv1.714e7819.png",revision:null},{url:"/HadesSpace/img/Transport_lv2.9fd01882.png",revision:null},{url:"/HadesSpace/img/Transport_lv3.13b9e323.png",revision:null},{url:"/HadesSpace/img/Transport_lv4.33a1cd43.png",revision:null},{url:"/HadesSpace/img/Transport_lv5.6b637562.png",revision:null},{url:"/HadesSpace/img/Transport_lv6.926e51c5.png",revision:null},{url:"/HadesSpace/img/arrow.f223a946.svg",revision:null},{url:"/HadesSpace/img/art.20563834.png",revision:null},{url:"/HadesSpace/img/calc.ad6c3479.png",revision:null},{url:"/HadesSpace/img/close.6b363d37.svg",revision:null},{url:"/HadesSpace/img/github_logo.b7172519.png",revision:null},{url:"/HadesSpace/img/logo.d4b2677b.png",revision:null},{url:"/HadesSpace/img/menu.368c620f.svg",revision:null},{url:"/HadesSpace/img/news_Update01.4166e256.png",revision:null},{url:"/HadesSpace/img/news_Update02.19daf0d6.png",revision:null},{url:"/HadesSpace/img/outbound.62c4c954.svg",revision:null},{url:"/HadesSpace/img/planet.0c7f5afd.png",revision:null},{url:"/HadesSpace/img/planets-calc.73393e3a.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaDrone.4d1ef0b4.png",revision:null},{url:"/HadesSpace/img/portrait_AlphaRocket.d329eada.png",revision:null},{url:"/HadesSpace/img/portrait_Anomaly.b0b901d3.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids.faac7845.png",revision:null},{url:"/HadesSpace/img/portrait_Asteroids_cr.e5b2dd80.png",revision:null},{url:"/HadesSpace/img/portrait_Battleship.669e1f40.png",revision:null},{url:"/HadesSpace/img/portrait_BlueStar.863634dc.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusBomber.494e56d4.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusColossus.44aef0af.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusDestroyer.5b3b391c.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusHydra.3c165bb0.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusPhoenix.b317a46d.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStation.ea729e88.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusStorm.67347016.png",revision:null},{url:"/HadesSpace/img/portrait_CerberusSwarm.be212cd2.png",revision:null},{url:"/HadesSpace/img/portrait_CorpFlagship.a1ff8970.png",revision:null},{url:"/HadesSpace/img/portrait_DroneAreaShield.828abe30.png",revision:null},{url:"/HadesSpace/img/portrait_DyingPlanet.428747e1.png",revision:null},{url:"/HadesSpace/img/portrait_EmptySpace.856e2286.png",revision:null},{url:"/HadesSpace/img/portrait_Guardian.59056577.png",revision:null},{url:"/HadesSpace/img/portrait_Interceptor.ddacf2fc.png",revision:null},{url:"/HadesSpace/img/portrait_JumpGate.6cf43704.png",revision:null},{url:"/HadesSpace/img/portrait_Miner.903a4c36.png",revision:null},{url:"/HadesSpace/img/portrait_MiningDrone.6cde0288.png",revision:null},{url:"/HadesSpace/img/portrait_Planet.ff39d859.png",revision:null},{url:"/HadesSpace/img/portrait_PlanetWhiteStar.2eb63641.png",revision:null},{url:"/HadesSpace/img/portrait_RedStar.c8115e46.png",revision:null},{url:"/HadesSpace/img/portrait_RemoteBomb.1b6e36e2.png",revision:null},{url:"/HadesSpace/img/portrait_Sentinel.bb999e3e.png",revision:null},{url:"/HadesSpace/img/portrait_ShipmentDrone.7f9eeec5.png",revision:null},{url:"/HadesSpace/img/portrait_SpaceBuilding.1e0ef13e.png",revision:null},{url:"/HadesSpace/img/portrait_Transport.ba4c36cf.png",revision:null},{url:"/HadesSpace/img/portrait_TurretLaser.c15277e9.png",revision:null},{url:"/HadesSpace/img/portrait_Tutorial.fcf711b7.png",revision:null},{url:"/HadesSpace/img/portrait_WarpLane.53408e80.png",revision:null},{url:"/HadesSpace/img/portrait_WhiteStar.4a3799f0.png",revision:null},{url:"/HadesSpace/img/portrait_YellowStar.326cc44e.png",revision:null},{url:"/HadesSpace/img/redStarScanner.6efd8e9b.png",revision:null},{url:"/HadesSpace/img/relic.6752e037.png",revision:null},{url:"/HadesSpace/img/settings.067b9160.svg",revision:null},{url:"/HadesSpace/img/star_blue.6e921374.png",revision:null},{url:"/HadesSpace/img/star_red.df88105d.png",revision:null},{url:"/HadesSpace/img/star_white.8cb9eb30.png",revision:null},{url:"/HadesSpace/img/star_yellow.28f9b515.png",revision:null},{url:"/HadesSpace/index.html",revision:"34a7c49864375e32a23e288375287ec2"},{url:"/HadesSpace/js/136.0e4adc1b.js",revision:null},{url:"/HadesSpace/js/256.e37bf155.js",revision:null},{url:"/HadesSpace/js/278.a5fa9fb9.js",revision:null},{url:"/HadesSpace/js/400.90f5d676.js",revision:null},{url:"/HadesSpace/js/495.e53b73f3.js",revision:null},{url:"/HadesSpace/js/557.2774502b.js",revision:null},{url:"/HadesSpace/js/560.bbdea0bd.js",revision:null},{url:"/HadesSpace/js/561.99010bbd.js",revision:null},{url:"/HadesSpace/js/668.b42dc826.js",revision:null},{url:"/HadesSpace/js/785.f31887d3.js",revision:null},{url:"/HadesSpace/js/806.5c68abaf.js",revision:null},{url:"/HadesSpace/js/85.ec5e7d8a.js",revision:null},{url:"/HadesSpace/js/948.a26dcd78.js",revision:null},{url:"/HadesSpace/js/952.a9cd6376.js",revision:null},{url:"/HadesSpace/js/964.7b493af4.js",revision:null},{url:"/HadesSpace/js/988.5241486b.js",revision:null},{url:"/HadesSpace/js/About.d19f796c.js",revision:null},{url:"/HadesSpace/js/Achievements.3d0deb2f.js",revision:null},{url:"/HadesSpace/js/AllianceLevels.3ae006ee.js",revision:null},{url:"/HadesSpace/js/BlueStar.27a1957b.js",revision:null},{url:"/HadesSpace/js/Cerberus.828b73c0.js",revision:null},{url:"/HadesSpace/js/Index.d0e04371.js",revision:null},{url:"/HadesSpace/js/Mining.33c28532.js",revision:null},{url:"/HadesSpace/js/ModulesCalc.61721325.js",revision:null},{url:"/HadesSpace/js/PlanetsCalc.c5229994.js",revision:null},{url:"/HadesSpace/js/PlayerGoals.dcc81973.js",revision:null},{url:"/HadesSpace/js/RedStar.019627bf.js",revision:null},{url:"/HadesSpace/js/Shield.2f18573f.js",revision:null},{url:"/HadesSpace/js/Ships.560dd687.js",revision:null},{url:"/HadesSpace/js/SpaceBuildings.c72d24bc.js",revision:null},{url:"/HadesSpace/js/Support.e9ab721a.js",revision:null},{url:"/HadesSpace/js/Trade.3892d2a6.js",revision:null},{url:"/HadesSpace/js/Weapon.a24cf24b.js",revision:null},{url:"/HadesSpace/js/WhiteStar.9aa5210e.js",revision:null},{url:"/HadesSpace/js/YellowStar.689f57b2.js",revision:null},{url:"/HadesSpace/js/app.400c7ed9.js",revision:null},{url:"/HadesSpace/js/chunk-vendors.00c668dc.js",revision:null},{url:"/HadesSpace/manifest.json",revision:"334271836314703960297c9e634cf03d"},{url:"/HadesSpace/meta-image.png",revision:"ebb83cdcac2992bb6f891618c45cc2f0"},{url:"/HadesSpace/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
