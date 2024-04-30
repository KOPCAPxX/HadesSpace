import{a as j,s as z}from"./sec2str-rZxYAVsG.js";import{d as I,aN as R,aO as F,a as S,o as i,b as u,f as s,F as D,B as V,A as B,t as v,_ as E,i as h,r as C,w as k,K as N,aP as b,L as G,aG as J,J as x,e as y,h as H,aB as K,p as W,q,z as T,y as Y,u as P,N as O}from"./index-CmXw3tmE.js";const Q={class:"pagination"},X=["onClick"],A=2,Z=I({__name:"Pagination",props:R({maxPage:{}},{modelValue:{default:1,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const r=d,a=F(d,"modelValue",{set(t){return t<1&&(t=1),t>r.maxPage&&(t=r.maxPage),t}}),c=S(()=>{let t=Math.max(a.value-A,1),l=Math.min(a.value+A,r.maxPage);return l-t+1<5&&(t===1?l=Math.min(r.maxPage,t+4):l===r.maxPage&&(t=Math.max(1,l-4))),Array.from({length:l-t+1},(m,p)=>t+p)});return(t,l)=>(i(),u("ul",Q,[s("li",{class:"arrow prev",onClick:l[0]||(l[0]=m=>a.value=a.value-1)}),(i(!0),u(D,null,V(c.value,m=>(i(),u("li",{key:m,class:B({selected:m===t.$props.modelValue}),onClick:p=>a.value=m},v(m),11,X))),128)),s("li",{class:"arrow next",onClick:l[1]||(l[1]=m=>a.value=a.value+1)})]))}}),L=E(Z,[["__scopeId","data-v-2bf6673e"]]),ee=d=>(W("data-v-a8cdb687"),d=d(),q(),d),se={class:"label"},te={key:0},ae={key:1},le=ee(()=>s("div",{class:"arrow"},null,-1)),oe={key:0,class:"multiselect_list"},ne=["onClick"],ie=["checked"],ue={class:"label"},de=I({__name:"MultiSelect",props:R({options:{},displayField:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const r=d,a=F(d,"modelValue"),c=h(!1),t=h(),l=h(),m=S(()=>r.options.filter(e=>{var o,g;return(g=e[r.displayField])==null?void 0:g.toLowerCase().includes((o=l.value)==null?void 0:o.toLowerCase())}));function p(){var e;c.value=!c.value,c.value&&(l.value="",(e=t.value)==null||e.focus())}function f(e){a.value.includes(e)?a.value.splice(a.value.indexOf(e),1):a.value.push(e)}function w(){a.value=[]}return(e,o)=>{const g=C("t"),$=C("click-outside");return k((i(),u("div",{class:B(["multiselect",{__active:c.value}])},[N(e.$slots,"default",{selected:a.value,toggleDropdown:p},()=>[s("button",{class:"multiselect_btn",onClick:p},[k(s("input",{ref_key:"filterInput",ref:t,"onUpdate:modelValue":o[0]||(o[0]=_=>l.value=_),type:"text",onClick:o[1]||(o[1]=b(()=>{},["stop"]))},null,512),[[G,l.value]]),k(s("div",se,[N(e.$slots,"label",{},()=>[a.value.length?(i(),u("p",te,v(e.$t("SELECTED",[a.value.length])),1)):k((i(),u("p",ae,null,512)),[[g,"SELECT"]])],!0)],512),[[J,!c.value]]),c.value?x("",!0):(i(),u("div",{key:0,class:"clear",onClick:b(w,["stop"])})),le])],!0),y(K,{name:"list"},{default:H(()=>[c.value?(i(),u("ul",oe,[(i(!0),u(D,null,V(m.value,(_,n)=>(i(),u("li",{key:n,onClick:$e=>f(_)},[s("input",{type:"checkbox",checked:e.$props.modelValue.includes(_)},null,8,ie),s("span",ue,v(_[e.$props.displayField]),1)],8,ne))),128))])):x("",!0)]),_:1})],2)),[[$,()=>c.value=!1]])}}}),re=E(de,[["__scopeId","data-v-a8cdb687"]]),M=d=>(W("data-v-16eb64ae"),d=d(),q(),d),ce={class:"filters"},pe={class:"label"},me={class:"list"},ve={class:"corp-names"},_e=M(()=>s("span",{class:"vs-icon"},null,-1)),fe={class:"score"},he=M(()=>s("span",null," - ",-1)),ge={key:0},Pe={key:1},ke=M(()=>s("div",{class:"footer"},[s("div",{class:"content"},[s("p",null,[O("Powered by "),s("a",{href:"https://compendium.mentalisit.myds.me/ws/docs",target:"_blank"},"compendium.mentalisit.myds.me"),O(" API ")])])],-1)),U="https://compendium.mentalisit.myds.me/ws/",we=I({__name:"WSMatches",setup(d){const r=new URL("matches",U),a=new URL("corps",U),c=new Date,t=h(),l=h([]),m=S(()=>{var e;return(((e=t.value)==null?void 0:e.matches)||[]).map(o=>({...o,DateEnded:new Date(o.DateEnded)}))}),p=h(1),f=h([]);r.searchParams.set("limit","50"),T(p,()=>{window.scrollTo({top:0,behavior:"smooth"}),r.searchParams.set("page",p.value.toString()),w()},{immediate:!0}),T(f,()=>{f.value.length==0?r.searchParams.delete("filter"):r.searchParams.set("filter",JSON.stringify({corp:f.value})),p.value=1,w()},{deep:!0}),Y(async()=>{l.value=await fetch(a).then(e=>e.json()).then(e=>e.matches)});async function w(){t.value=await fetch(r).then(e=>e.json())}return(e,o)=>{var $,_;const g=C("t");return i(),u("div",null,[s("div",ce,[s("div",null,[k(s("p",pe,null,512),[[g,"TID_OTHER_PLAYER_INFO_PAGE_CORP_SECTION"]]),y(re,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=n=>f.value=n),options:l.value,"display-field":"Name"},null,8,["modelValue","options"])])]),y(L,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=n=>p.value=n),"max-page":(($=t.value)==null?void 0:$.MaxPage)||1},null,8,["modelValue","max-page"]),s("ul",me,[(i(!0),u(D,null,V(m.value,n=>(i(),u("li",{key:n.MatchId},[s("div",null,[s("p",ve,[s("span",null,v(n.Corporation1Name),1),_e,s("span",null,v(n.Corporation2Name),1)]),s("p",fe,[s("span",null,v(n.Corporation1Score),1),he,s("span",null,v(n.Corporation2Score),1)]),n.DateEnded-P(c)>0?(i(),u("p",ge,[s("span",null,v(e.$t("TID_WS_PREPARATION_ENDS_IN",[P(j)((n.DateEnded-P(c))/1e3)])),1)])):(i(),u("p",Pe,[s("span",null,v(e.$t("TID_WS_ENDED"))+" "+v(`(${e.$t("TID_SOCIAL_TIMESTAMP",[P(z)((P(c)-n.DateEnded)/1e3)])})`),1)]))])]))),128))]),y(L,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=n=>p.value=n),"max-page":((_=t.value)==null?void 0:_.MaxPage)||1},null,8,["modelValue","max-page"]),ke])}}}),Ie=E(we,[["__scopeId","data-v-16eb64ae"]]);export{Ie as default};
