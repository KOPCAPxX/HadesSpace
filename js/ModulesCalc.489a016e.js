"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[752],{6750:(t,e,l)=>{l.d(e,{Z:()=>m,V:()=>i});var a=l(6252);function n(t,e,l,n,s,o){const u=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)(u,{"title-loc-key":s.locKey,"content-args":{data:s.data,iconDir:"game/Modules"},portrait:{src:s.img,alt:`${l.type} modules`}},null,8,["title-loc-key","content-args","portrait"])}var s=l(7346),o=l(128),u=l(2022);const c=(0,u.Z)(o.Z,{filter:([,t])=>!t.Hide,sort:([,t],[,e])=>t.AwardLevel-e.AwardLevel}),i=t=>(0,u.Z)(c,{filter:([,e])=>e.SlotType===t}),p={components:{Page:s.Z},props:{type:{type:String,requested:!0,default:null},portrait:{type:String,requested:!0,default:null},postFilter:{type:Function,requested:!1,default:t=>t}},data(){return{data:this.postFilter(i(this.type)),img:l(7181)(`./${this.portrait}.png`),locKey:`TYPE_MOD_${this.type.toUpperCase()}`}}};var d=l(3744);const r=(0,d.Z)(p,[["render",n]]),m=r},4362:(t,e,l)=>{l.r(e),l.d(e,{default:()=>R});var a=l(6252),n=l(3577);const s=t=>((0,a.dD)("data-v-32b053ca"),t=t(),(0,a.Cn)(),t),o={class:"container"},u={class:"sections-input"},c=["onClick"],i={class:"levels"},p={class:"modal-module"},d={class:"title"},r={class:"reset-buttons"},m={class:"chars"},y=["onChange"],k=["selected","disabled"],h=s((()=>(0,a._)("br",null,null,-1))),g={key:0};function _(t,e,l,s,_,w){const v=(0,a.up)("calculator"),C=(0,a.up)("Icon"),D=(0,a.up)("modal"),b=(0,a.Q2)("t");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",o,[(0,a.Wm)(v,{input:t.input,"onUpdate:input":e[0]||(e[0]=e=>t.input=e),"stack-chars":t.stackChars,"calc-total":t.calcTotal,"local-storage-key":"modulesCalc","title-key":"MODULES_CALC",onSetup:t.setupCalculator},null,8,["input","stack-chars","calc-total","onSetup"]),(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.modules,((e,l)=>((0,a.wg)(),(0,a.iD)("section",{key:l,class:"type"},[(0,a._)("h3",null,(0,n.zw)(t.format.key(l)),1),(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,(([e,l])=>((0,a.wg)(),(0,a.iD)("li",{key:e.Name,class:"module"},[(0,a._)("div",{class:(0,n.C_)({mute:!t.input.plan[e.Name]}),onClick:()=>t.openModuleInfo(e,l)},[(0,a.Wm)(C,{name:e.Icon,dir:"game/Modules"},null,8,["name"]),(0,a._)("div",i,[(0,a._)("span",null,(0,n.zw)(t.input.actually[e.Name]?t.input.actually[e.Name]:""),1),(0,a._)("span",null,(0,n.zw)(t.input.plan[e.Name]&&t.input.plan[e.Name]!=t.input.actually[e.Name]?t.input.plan[e.Name]:""),1)])],10,c)])))),128))])])))),128))])]),(0,a.Wm)(D,(0,a.dG)({open:t.openModal,"onUpdate:open":e[3]||(e[3]=e=>t.openModal=e)},t.modalOpts),{body:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("div",d,[(0,a._)("div",null,[(0,a._)("h2",null,(0,n.zw)(t.$t(t.modalOpts.data.module.TID)),1),(0,a._)("div",r,[(0,a._)("button",{name:"plan",class:"button yellow",onClick:e[1]||(e[1]=(...e)=>t.onReset&&t.onReset(...e))},(0,n.zw)(t.$t("RESET_PLAN")),1),(0,a._)("button",{name:"all",class:"button red",onClick:e[2]||(e[2]=(...e)=>t.onReset&&t.onReset(...e))},(0,n.zw)(t.$t("RESET_ALL")),1)])]),(0,a.Wm)(C,{name:t.modalOpts.data.module.Icon,dir:"game/Modules"},null,8,["name"])]),(0,a._)("ul",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(t.input),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"input"},[(0,a.wy)((0,a._)("span",null,null,512),[[b,t.inputLocKeys[e]]]),(0,a._)("select",{class:"select-lvl",onChange:l=>t.onChangeLvl(e,l.target.value)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.modalOpts.data.maxLevel+1,((l,s)=>((0,a.wg)(),(0,a.iD)("option",{key:l,selected:t.isSelected(e,s),disabled:t.isDisabled(e,s)},(0,n.zw)(s),9,k)))),128))],40,y)])))),128)),h,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(t.calc.output.plan[t.modalOpts.data.key]||{}),(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,n.C_)({output:!0,"sub-chars":"object"==typeof t.calc.output.plan?.[t.modalOpts.data.key]?.[e]})},[(0,a._)("b",null,(0,n.zw)(t.format.key(e)),1),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(t.input),(l=>((0,a.wg)(),(0,a.iD)("span",{key:l,class:(0,n.C_)(t.outputClasses(l,e))},["object"===typeof t.calc.output[l]?.[t.modalOpts.data.key]?.[e]?((0,a.wg)(),(0,a.iD)("ul",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(t.calc.output[l][t.modalOpts.data.key][e]||{}),(l=>((0,a.wg)(),(0,a.iD)("li",{key:l,class:"output"},[(0,a._)("b",null,(0,n.zw)(t.format.key(l)),1),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(t.input),(s=>((0,a.wg)(),(0,a.iD)("span",{key:s,class:(0,n.C_)(t.outputClasses(s,l))},(0,n.zw)(t.format.value(l,t.calc.output[s]?.[t.modalOpts.data.key]?.[e]?.[l])),3)))),128))])])))),128))])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,n.zw)(t.format.value(e,t.calc.output[l]?.[t.modalOpts.data.key]?.[e])),1)],64))],2)))),128))])],2)))),128))])])])),_:1},16,["open"])])}var w=l(3952),v=l(139),C=l(6785),D=l(885),b=l(9114),f=l(6750);const L=["UnlockPrice","UnlockTime"],O=["Trade","Mining","Weapon","Shield","Support"],M=(0,a.aZ)({name:"ModulesCalc",components:{Icon:w.Z,Modal:v.Z,Calculator:C.Z},data(){return{inputLocKeys:{actually:"CURRENT_LVL",plan:"PLAN_LVL"},format:{key:t=>(0,b.Z)(t,this.$route.name),value:(t,e)=>(0,D.Z)(t,e,null)},types:O,stackChars:L,modules:{},calc:{},input:{actually:{},plan:{}},resetConfirm:()=>new Promise((()=>null)),openModal:!1,modalOpts:{size:v.z.SMALL,title:this.$t("TID_TECH_DLG_TITLE"),data:{module:{},maxLevel:0,get key(){return this.module.Name}}}}},methods:{setupCalculator(t){this.calc=t;for(const e of O)this.modules[e]=t.provideGetterElements(((...t)=>T.apply(null,[e,...t])))},onChangeLvl(t,e){return this.calc.onChangeLvl(t,this.modalOpts.data.key,e)},isSelected(t,e){return this.calc.isSelected(t,this.modalOpts.data.key,e)},isDisabled(t,e){return this.calc.isDisabled(t,this.modalOpts.data.key,e)},async onReset(t){this.openModal&&("all"==t.target.name?(this.onChangeLvl("actually",0),this.onChangeLvl("plan",0)):this.onChangeLvl("plan",0))},outputClasses(t,e){return this.calc.outputClasses(t,this.modalOpts.data.key,e)},openModuleInfo(t,e){this.modalOpts.data.module=t,this.modalOpts.data.maxLevel=e,this.openModal=!0},calcTotal(t,e){const l=e.total;return l.result["ReqBank"]=0,function(e,a){const n=t[e].UnlockPrice,s=Array.isArray(n)?n[a.plan[e]-1]:n;l.result.ReqBank=s>l.result.ReqBank?s:l.result.ReqBank}}}});function T(t,...[e,l,a]){const n=(0,f.V)(t);return Object.entries(n).map((([t,s])=>{let o=1;for(const[,e]of Object.entries(s))Array.isArray(e)&&e.length>o&&(o=e.length);return a[t]=l(n[t],o),e[t]=s.TID,[s,o]}))}var S=l(3744);const z=(0,S.Z)(M,[["render",_],["__scopeId","data-v-32b053ca"]]),R=z}}]);