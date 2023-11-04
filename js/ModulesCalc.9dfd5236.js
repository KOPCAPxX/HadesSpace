"use strict";(self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[]).push([[752],{83238:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});var t=a(66252),n=a(3577),u=a(2262),s=a(70131),o=a(53151),c=a(39563),i=a(74694),d=a(52946),r=a(16798);const p=e=>((0,t.dD)("data-v-021a2e85"),e=e(),(0,t.Cn)(),e),y={class:"container"},k={class:"sections-input"},m=["onClick"],v={class:"levels"},_={class:"modal-module"},w={class:"title"},g={class:"reset-buttons"},D={class:"chars"},b=["onChange"],f=["selected","disabled"],C=p((()=>(0,t._)("li",null,[(0,t._)("br")],-1))),S={key:0},U=(0,t.aZ)({__name:"ModulesCalc",setup(e){const l=["UnlockPrice","UnlockTime"],a=["Trade","Mining","Weapon","Shield","Support","Drone"],{t:p}=(0,s.QT)(),U={actually:"CURRENT_LVL",plan:"PLAN_LVL"},L=(0,u.iH)({}),h=(0,u.iH)({actually:{},plan:{}}),z=(0,u.iH)(!1),H=(0,u.qj)({size:c.z.SMALL,title:p("TID_TECH_DLG_TITLE"),data:{module:{},maxLevel:0,get key(){return this.module.Name}}});let N;function T(e){N=e;for(const l of a)L.value[l]=e.provideGetterElements(((...e)=>I.apply(null,[l,...e])))}function j(e,l){return N.onChangeLvl(e,H.data.key,l)}function A(e,l){return N.isSelected(e,H.data.key,l)}function E(e,l){return N.isDisabled(e,H.data.key,l)}async function Y(e){z.value&&("all"==e.target.name?(j("actually",0),j("plan",0)):j("plan",0))}function K(e,l){return N.outputClasses(e,H.data.key,l)}function O(e,l){H.data.module=e,H.data.maxLevel=l,z.value=!0}function R(e,l){const a=l.total;return a.result["ReqBank"]=0,function(l,t){const n=e[l].UnlockPrice,u=Array.isArray(n)?n[t.plan[l]-1]:n;a.result.ReqBank=u>a.result.ReqBank?u:a.result.ReqBank}}function I(e,...[l,a,t]){const n=(0,d.VV)(e);return Object.entries(n).map((([e,u])=>{let s=1;for(const[,l]of Object.entries(u))Array.isArray(l)&&l.length>s&&(s=l.length);return t[e]=a(n[e],s),l[e]=u.TID,[u,s]}))}return(e,a)=>{const s=(0,t.Q2)("t");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",y,[(0,t.Wm)(i.Z,{input:h.value,"onUpdate:input":a[0]||(a[0]=e=>h.value=e),"stack-chars":l,"calc-total":R,"local-storage-key":"modulesCalc","title-key":"MODULES_CALC",onSetup:T},null,8,["input"]),(0,t._)("div",k,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(L.value,((e,l)=>((0,t.wg)(),(0,t.iD)("section",{key:l,class:"type"},[(0,t._)("h3",null,(0,n.zw)((0,u.SU)(N).format.key(l)),1),(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e,(([e,l])=>((0,t.wg)(),(0,t.iD)("li",{key:e.Name,class:"module"},[(0,t._)("div",{class:(0,n.C_)({mute:!h.value.plan[e.Name]}),onClick:()=>O(e,l)},[(0,t.Wm)(o.Z,{name:e.Icon,dir:"game/Modules"},null,8,["name"]),(0,t._)("div",v,[(0,t._)("span",null,(0,n.zw)(h.value.actually[e.Name]?h.value.actually[e.Name]:""),1),(0,t._)("span",null,(0,n.zw)(h.value.plan[e.Name]&&h.value.plan[e.Name]!=h.value.actually[e.Name]?h.value.plan[e.Name]:""),1)])],10,m)])))),128))])])))),128))])]),(0,t.Wm)(c.Z,(0,t.dG)({open:z.value,"onUpdate:open":a[1]||(a[1]=e=>z.value=e)},H),{body:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t._)("div",w,[(0,t._)("div",null,[(0,t._)("h2",null,(0,n.zw)(e.$t(H.data.module.TID)),1),(0,t._)("div",g,[(0,t._)("button",{name:"plan",class:"button yellow",onClick:Y},(0,n.zw)(e.$t("RESET_PLAN")),1),(0,t._)("button",{name:"all",class:"button red",onClick:Y},(0,n.zw)(e.$t("RESET_ALL")),1)])]),(0,t.Wm)(o.Z,{name:H.data.module.Icon,dir:"game/Modules"},null,8,["name"])]),(0,t._)("ul",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(h.value),(e=>((0,t.wg)(),(0,t.iD)("li",{key:e,class:"input"},[(0,t.wy)((0,t._)("span",null,null,512),[[s,U[e]]]),(0,t._)("select",{class:"select-lvl",onChange:l=>j(e,l.target.value)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(H.data.maxLevel+1,((l,a)=>((0,t.wg)(),(0,t.iD)("option",{key:l,selected:A(e,a),disabled:E(e,a)},(0,n.zw)(a),9,f)))),128))],40,b)])))),128)),C,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys((0,u.SU)(N).output.plan[H.data.key]||{}),(e=>((0,t.wg)(),(0,t.iD)("li",{key:e,class:(0,n.C_)({output:!0,"sub-chars":"object"==typeof(0,u.SU)(N).output.plan?.[H.data.key]?.[e]})},[(0,t._)("b",null,(0,n.zw)((0,u.SU)(N).format.key(e)),1),(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(h.value),(l=>((0,t.wg)(),(0,t.iD)("span",{key:l,class:(0,n.C_)({...K(l,e),[(0,u.SU)(r.Z)(e)]:!0,"stats-style":"actually"==l&&!K(l,e).none})},["object"===typeof(0,u.SU)(N).output[l]?.[H.data.key]?.[e]?((0,t.wg)(),(0,t.iD)("ul",S,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys((0,u.SU)(N).output[l][H.data.key][e]||{}),(l=>((0,t.wg)(),(0,t.iD)("li",{key:l,class:"output"},[(0,t._)("b",null,(0,n.zw)((0,u.SU)(N).format.key(l)),1),(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(h.value),(a=>((0,t.wg)(),(0,t.iD)("span",{key:a,class:(0,n.C_)(K(a,l))},(0,n.zw)((0,u.SU)(N).format.value(l,(0,u.SU)(N).output[a]?.[H.data.key]?.[e]?.[l])),3)))),128))])])))),128))])):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t.Uk)((0,n.zw)((0,u.SU)(N).format.value(e,(0,u.SU)(N).output[l]?.[H.data.key]?.[e])),1)],64))],2)))),128))])],2)))),128))])])])),_:1},16,["open"])])}}});var L=a(83744);const h=(0,L.Z)(U,[["__scopeId","data-v-021a2e85"]]),z=h}}]);