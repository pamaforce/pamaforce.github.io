import{a as c,g as Pe,h as V,a2 as J,e as Ke,al as je,af as We,am as Q,an as Ue,ao as _e,w as ee,z as $,b as Xe,B as qe,k as Ye,q as Ge,v as Ze,o as d,c as x,E as v,F as te,n as y,u as t,C as j,s as N,l as w,m as B,D as W,K as ae,y as Je,a8 as Qe,ak as et,N as tt,t as U,x as at,G as Se}from"./index.368b2d91.js";import{K as ot,g as Ce,c as st,y as nt,d as oe,r as Ie,A as lt,L as rt,s as it,z as ut,u as Ee,V as dt,m as ct,j as pt,M as ze,E as L,_ as ft,i as vt,w as mt}from"./base.96266e0f.js";import{m as yt,U as se}from"./typescript.b74ad383.js";const ht=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),bt=["class","style"],gt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:l}=o,a=c(()=>((l==null?void 0:l.value)||[]).concat(bt)),i=Pe();return i?c(()=>{var p;return ot(Object.entries((p=i.proxy)==null?void 0:p.$attrs).filter(([r])=>!a.value.includes(r)&&!(m&&gt.test(r))))}):c(()=>({}))};function wt(o){const m=V();function l(){if(o.value==null)return;const{selectionStart:i,selectionEnd:p,value:r}=o.value;if(i==null||p==null)return;const g=r.slice(0,Math.max(0,i)),u=r.slice(Math.max(0,p));m.value={selectionStart:i,selectionEnd:p,value:r,beforeTxt:g,afterTxt:u}}function a(){if(o.value==null||m.value==null)return;const{value:i}=o.value,{beforeTxt:p,afterTxt:r,selectionStart:g}=m.value;if(p==null||r==null||g==null)return;let u=i.length;if(i.endsWith(r))u=i.length-r.length;else if(i.startsWith(p))u=p.length;else{const h=p[g-1],S=i.indexOf(h,g-1);S!==-1&&(u=S+1)}o.value.setSelectionRange(u,u)}return[l,a]}let b;const St=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const m=window.getComputedStyle(o),l=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),i=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(r=>`${r}:${m.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:l}}function ke(o,m=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:i,borderSize:p,boxSizing:r,contextStyle:g}=It(o);b.setAttribute("style",`${g};${St}`),b.value=o.value||o.placeholder||"";let u=b.scrollHeight;const h={};r==="border-box"?u=u+p:r==="content-box"&&(u=u-i),b.value="";const S=b.scrollHeight-i;if(Ce(m)){let f=S*m;r==="border-box"&&(f=f+i+p),u=Math.max(f,u),h.minHeight=`${f}px`}if(Ce(l)){let f=S*l;r==="border-box"&&(f=f+i+p),u=Math.min(f,u)}return h.height=`${u}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const Et=st({id:{type:String,default:void 0},size:nt,disabled:Boolean,modelValue:{type:oe([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:oe([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie,default:""},prefixIcon:{type:Ie,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:oe([Object,Array,String]),default:()=>yt({})}}),zt={[se]:o=>J(o),input:o=>J(o),change:o=>J(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},kt=["role"],Pt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],$t=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Nt={name:"ElInput",inheritAttrs:!1},Vt=Ke({...Nt,props:Et,emits:zt,setup(o,{expose:m,emit:l}){const a=o,i={suffix:"append",prefix:"prepend"},p=Pe(),r=je(),g=We(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),h=xt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=lt(),{inputId:ne}=rt(a,{formItemContext:f}),$e=it(),z=ut(),s=Ee("input"),le=Ee("textarea"),D=Q(),k=Q(),A=V(!1),_=V(!1),T=V(!1),O=V(!1),re=V(),X=Q(a.inputStyle),F=c(()=>D.value||k.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),M=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>M.value&&dt[M.value]),Ne=c(()=>O.value?Ue:_e),Ve=c(()=>[r.style,a.inputStyle]),de=c(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=c(()=>ct(a.modelValue)?"":String(a.modelValue)),R=c(()=>a.clearable&&!z.value&&!a.readonly&&!!C.value&&(A.value||_.value)),q=c(()=>a.showPassword&&!z.value&&!a.readonly&&!!C.value&&(!!C.value||A.value)),P=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),Y=c(()=>Array.from(C.value).length),Ae=c(()=>!!P.value&&Y.value>Number(h.value.maxlength)),Te=c(()=>!!g.suffix||!!a.suffixIcon||R.value||a.showPassword||P.value||!!M.value&&ie.value),[Fe,Me]=wt(D);pt(k,e=>{if(!P.value||a.resize!=="both")return;const n=e[0],{width:I}=n.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const H=()=>{const{type:e,autosize:n}=a;if(!(!vt||e!=="textarea"))if(n){const I=Se(n)?n.minRows:void 0,E=Se(n)?n.maxRows:void 0;X.value={...ke(k.value,I,E)}}else X.value={minHeight:ke(k.value).minHeight}},K=()=>{const e=F.value;!e||e.value===C.value||(e.value=C.value)},ce=e=>{const{el:n}=p.vnode;if(!n)return;const E=Array.from(n.querySelectorAll(`.${s.e(e)}`)).find(He=>He.parentNode===n);if(!E)return;const we=i[e];g[we]?E.style.transform=`translateX(${e==="suffix"?"-":""}${n.querySelector(`.${s.be("group",we)}`).offsetWidth}px)`:E.removeAttribute("style")},G=()=>{ce("prefix"),ce("suffix")},Z=async e=>{Fe();let{value:n}=e.target;a.formatter&&(n=a.parser?a.parser(n):n,n=a.formatter(n)),!T.value&&n!==C.value&&(l(se,n),l("input",n),await $(),K(),Me())},pe=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),T.value=!0},ve=e=>{var n;l("compositionupdate",e);const I=(n=e.target)==null?void 0:n.value,E=I[I.length-1]||"";T.value=!ht(E)},me=e=>{l("compositionend",e),T.value&&(T.value=!1,Z(e))},Be=()=>{O.value=!O.value,ye()},ye=async()=>{var e;await $(),(e=F.value)==null||e.focus()},Le=()=>{var e;return(e=F.value)==null?void 0:e.blur()},he=e=>{A.value=!0,l("focus",e)},be=e=>{var n;A.value=!1,l("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(I=>ze()))},De=e=>{_.value=!1,l("mouseleave",e)},Oe=e=>{_.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},Re=()=>{var e;(e=F.value)==null||e.select()},xe=()=>{l(se,""),l("change",""),l("clear"),l("input","")};return ee(()=>a.modelValue,()=>{var e;$(()=>H()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(n=>ze()))}),ee(C,()=>K()),ee(()=>a.type,async()=>{await $(),K(),H(),G()}),Xe(async()=>{!a.formatter&&a.parser,K(),G(),await $(),H()}),qe(async()=>{await $(),G()}),m({input:D,textarea:k,ref:F,textareaStyle:de,autosize:Ye(a,"autosize"),focus:ye,blur:Le,select:Re,clear:xe,resizeTextarea:H}),(e,n)=>Ge((d(),x("div",ae(t(u),{class:[e.type==="textarea"?t(le).b():t(s).b(),t(s).m(t($e)),t(s).is("disabled",t(z)),t(s).is("exceed",t(Ae)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(R)&&t(q)},e.$attrs.class],style:t(Ve),role:e.containerRole,onMouseenter:Oe,onMouseleave:De}),[v(" input "),e.type!=="textarea"?(d(),x(te,{key:0},[v(" prepend slot "),e.$slots.prepend?(d(),x("div",{key:0,class:y(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):v("v-if",!0),N("div",{class:y([t(s).e("wrapper"),t(s).is("focus",A.value)])},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),x("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(d(),w(W(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),N("input",ae({id:t(ne),ref_key:"input",ref:D,class:t(s).e("inner")},t(h),{type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:Z,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,Pt),v(" suffix slot "),t(Te)?(d(),x("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(R)||!t(q)||!t(P)?(d(),x(te,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(d(),w(W(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(R)?(d(),w(t(L),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:et(t(tt),["prevent"]),onClick:xe},{default:B(()=>[Je(t(Qe))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(q)?(d(),w(t(L),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Be},{default:B(()=>[(d(),w(W(t(Ne))))]),_:1},8,["class"])):v("v-if",!0),t(P)?(d(),x("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},U(t(Y))+" / "+U(t(h).maxlength),3)],2)):v("v-if",!0),t(M)&&t(ue)&&t(ie)?(d(),w(t(L),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(M)==="validating")])},{default:B(()=>[(d(),w(W(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(d(),x("div",{key:1,class:y(t(s).be("group","append"))},[j(e.$slots,"append")],2)):v("v-if",!0)],64)):(d(),x(te,{key:1},[v(" textarea "),N("textarea",ae({id:t(ne),ref_key:"textarea",ref:k,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:Z,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,$t),t(P)?(d(),x("span",{key:0,style:at(re.value),class:y(t(s).e("count"))},U(t(Y))+" / "+U(t(h).maxlength),7)):v("v-if",!0)],64))],16,kt)),[[Ze,e.type!=="hidden"]])}});var At=ft(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Bt=mt(At);export{Bt as E};
