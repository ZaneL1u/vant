import{c as j,h as u,i as E,d as $}from"./use-translate.7145ee20.js";import{n as d,t as L,m as P,w as B}from"./with-install.756837d9.js";import{I as D}from"./index.bea91046.js";import{z as k,D as f,P as C,C as U,x as N,J as R,e as a,j as q,U as A,A as z,q as F}from"./vue-libs.84e059bd.js";const[J,o]=j("image"),T={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var V=k({name:J,props:T,emits:["load","error"],setup(e,{emit:g,slots:n}){const i=f(!1),t=f(!0),l=f(),{$Lazyload:s}=C().proxy,x=U(()=>{const r={width:u(e.width),height:u(e.height)};return E(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});N(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},v=(r,c,y)=>y?y():a(D,{name:r,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),S=()=>{if(t.value&&e.showLoading)return a("div",{class:o("loading")},[v(e.loadingIcon,o("loading-icon"),n.loading)]);if(i.value&&e.showError)return a("div",{class:o("error")},[v(e.errorIcon,o("error-icon"),n.error)])},b=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?q(a("img",z({ref:l},r),null),[[A("lazy"),e.src]]):a("img",z({src:e.src,onLoad:m,onError:h},r),null)},w=({el:r})=>{const c=()=>{r===l.value&&t.value&&m()};l.value?c():F(c)},I=({el:r})=>{r===l.value&&!i.value&&h()};return s&&$&&(s.$on("loaded",w),s.$on("error",I),R(()=>{s.$off("loaded",w),s.$off("error",I)})),()=>{var r;return a("div",{class:o({round:e.round}),style:x.value},[b(),S(),(r=n.default)==null?void 0:r.call(n)])}}});const M=B(V);export{M as I};