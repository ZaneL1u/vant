import{c as x,f as W,e as j,v as X,a as Z}from"./use-translate.94d81043.js";import{n as S,t as V,c as T,b as ee,w as ae}from"./with-install.dd5596ee.js";import{A as R,x as w,e as n,F as te,H as le,D as A,y as oe,q as se,j as E,v as y,r as re,o as ne,c as ue,w as de,C as F}from"./vue-libs.84c45047.js";import{u as ce}from"./use-expose.771ababc.js";import{A as U,a as ie,b as me}from"./index.esm.23c6809c.js";import{C as M}from"./index.b5574021.js";import{F as he}from"./index.433414e7.js";import{F as g}from"./index.d546301d.js";import{P as fe}from"./index.00b48509.js";import{T as B}from"./function-call.a4a9c07c.js";import{B as L}from"./index.84df32bd.js";import{S as ve}from"./index.c3cce590.js";import"./Picker.a386e4b2.js";import"./constant.80c6de18.js";import"./index.a750e74d.js";import"./use-touch.109c1035.js";import"./index.e68bded9.js";import"./use-route.7c55373a.js";import"./index.63869abe.js";import"./use-id.e5fd672f.js";import"./interceptor.e76ee8d4.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./mount-component.725b707e.js";const[De,I]=x("address-edit-detail"),N=x("address-edit")[2];var Ce=R({name:De,props:{show:Boolean,rows:S,value:String,rules:Array,focused:Boolean,maxlength:S,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,{emit:l}){const h=w(),f=()=>e.focused&&e.searchResult&&e.showSearchResult,t=u=>{l("selectSearch",u),l("input",`${u.address||""} ${u.name||""}`.trim())},i=()=>{if(!f())return;const{searchResult:u}=e;return u.map(d=>n(M,{clickable:!0,key:(d.name||"")+(d.address||""),icon:"location-o",title:d.name,label:d.address,class:I("search-item"),border:!1,onClick:()=>t(d)},null))},m=u=>l("blur",u),p=u=>l("focus",u),D=u=>l("input",u);return()=>{if(e.show)return n(te,null,[n(g,{autosize:!0,clearable:!0,ref:h,class:I(),rows:e.rows,type:"textarea",rules:e.rules,label:N("addressDetail"),border:!f(),maxlength:e.maxlength,modelValue:e.value,placeholder:N("addressDetail"),onBlur:m,onFocus:p,"onUpdate:modelValue":D},null),i()])}}});const[ge,v,s]=x("address-edit"),$={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,postalCode:"",addressDetail:""},we=e=>/^\d{6}$/.test(e),pe={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:V,showDetail:V,showDelete:Boolean,showPostal:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:S,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:T(1),detailMaxlength:T(200),areaColumnsPlaceholder:ee(),addressInfo:{type:Object,default:()=>j({},$)},telValidator:{type:Function,default:X},postalValidator:{type:Function,default:we}};var be=R({name:ge,props:pe,emits:["save","focus","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,{emit:l,slots:h}){const f=w(),t=le({}),i=w(!1),m=w(!1),p=A(()=>W(e.areaList)&&Object.keys(e.areaList).length),D=A(()=>{const{province:a,city:r,county:o,areaCode:c}=t;if(c){const b=[a,r,o];return a&&a===r&&b.splice(1,1),b.filter(Boolean).join("/")}return""}),u=A(()=>{var a;return((a=e.searchResult)==null?void 0:a.length)&&m.value}),d=a=>{m.value=a==="addressDetail",l("focus",a)},C=A(()=>{const{validator:a,telValidator:r,postalValidator:o}=e,c=(b,Q)=>({validator:P=>{if(a){const k=a(b,P);if(k)return k}return P?!0:Q}});return{name:[c("name",s("nameEmpty"))],tel:[c("tel",s("telInvalid")),{validator:r,message:s("telInvalid")}],areaCode:[c("areaCode",s("areaEmpty"))],addressDetail:[c("addressDetail",s("addressEmpty"))],postalCode:[c("addressDetail",s("postalEmpty")),{validator:o,message:s("postalEmpty")}]}}),O=()=>l("save",t),z=a=>{t.addressDetail=a,l("changeDetail",a)},_=a=>{t.province=a[0].text,t.city=a[1].text,t.county=a[2].text},H=({selectedValues:a,selectedOptions:r})=>{a.some(o=>o===U)?B(s("areaEmpty")):(i.value=!1,_(r),l("changeArea",r))},q=()=>l("delete",t),G=a=>{t.areaCode=a||""},Y=()=>{setTimeout(()=>{m.value=!1})},J=a=>{t.addressDetail=a},K=()=>{if(e.showSetDefault){const a={"right-icon":()=>n(ve,{modelValue:t.isDefault,"onUpdate:modelValue":r=>t.isDefault=r,onChange:r=>l("changeDefault",r)},null)};return E(n(M,{center:!0,title:s("defaultAddress"),class:v("default")},a),[[y,!u.value]])}};return ce({setAreaCode:G,setAddressDetail:J}),oe(()=>e.addressInfo,a=>{j(t,$,a),se(()=>{var o;const r=(o=f.value)==null?void 0:o.getSelectedOptions();r&&r.every(c=>c&&c.value!==U)&&_(r)})},{deep:!0,immediate:!0}),()=>{const{disableArea:a}=e;return n(he,{class:v(),onSubmit:O},{default:()=>{var r;return[n("div",{class:v("fields")},[n(g,{modelValue:t.name,"onUpdate:modelValue":o=>t.name=o,clearable:!0,label:s("name"),rules:C.value.name,placeholder:s("name"),onFocus:()=>d("name")},null),n(g,{modelValue:t.tel,"onUpdate:modelValue":o=>t.tel=o,clearable:!0,type:"tel",label:s("tel"),rules:C.value.tel,maxlength:e.telMaxlength,placeholder:s("tel"),onFocus:()=>d("tel")},null),E(n(g,{readonly:!0,label:s("area"),"is-link":!a,modelValue:D.value,rules:C.value.areaCode,placeholder:e.areaPlaceholder||s("area"),onFocus:()=>d("areaCode"),onClick:()=>{l("clickArea"),i.value=!a}},null),[[y,e.showArea]]),n(Ce,{show:e.showDetail,rows:e.detailRows,rules:C.value.addressDetail,value:t.addressDetail,focused:m.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:Y,onFocus:()=>d("addressDetail"),onInput:z,onSelectSearch:o=>l("selectSearch",o)},null),e.showPostal&&E(n(g,{modelValue:t.postalCode,"onUpdate:modelValue":o=>t.postalCode=o,type:"tel",rules:C.value.postalCode,label:s("postal"),maxlength:"6",placeholder:s("postal"),onFocus:()=>d("postalCode")},null),[[y,!u.value]]),(r=h.default)==null?void 0:r.call(h)]),K(),E(n("div",{class:v("buttons")},[n(L,{block:!0,round:!0,type:"primary",text:e.saveButtonText||s("save"),class:v("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&n(L,{block:!0,round:!0,class:v("button"),loading:e.isDeleting,text:e.deleteButtonText||s("delete"),onClick:q},null)]),[[y,!u.value]]),n(fe,{show:i.value,"onUpdate:show":o=>i.value=o,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[n(ie,{modelValue:t.areaCode,"onUpdate:modelValue":o=>t.areaCode=o,ref:f,loading:!p.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:H,onCancel:()=>{i.value=!1}},null)]})]}})}}});const Ae=ae(be);const Je=R({setup(e){const l=Z({"zh-CN":{areaColumnsPlaceholder:["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],searchResult:[{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3G\u5EA7"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3H\u5EA7",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),h=w([]),f=()=>B(l("save")),t=()=>B(l("delete")),i=m=>{h.value=m?l("searchResult"):[]};return(m,p)=>{const D=re("demo-block");return ne(),ue(D,{title:F(l)("basicUsage")},{default:de(()=>[n(F(Ae),{"area-list":F(me),"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":h.value,"area-columns-placeholder":F(l)("areaColumnsPlaceholder"),onSave:f,onDelete:t,onChangeDetail:i},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{Je as default};