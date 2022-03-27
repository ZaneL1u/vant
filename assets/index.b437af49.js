import{c as N,i as t}from"./use-translate.d627ebf3.js";import{n as a,m as x,w as z}from"./with-install.9724bc72.js";import{T as B}from"./index.73eea5d7.js";import{I}from"./index.0b323c1e.js";import{z as $,e as i,h as p}from"./vue-libs.bf80eadf.js";const[D,c]=N("card"),O={tag:String,num:a,desc:String,thumb:String,title:String,price:a,centered:Boolean,lazyLoad:Boolean,currency:x("\xA5"),thumbLink:String,originPrice:a};var V=$({name:D,props:O,emits:["click-thumb"],setup(r,{slots:e,emit:o}){const f=()=>{if(e.title)return e.title();if(r.title)return i("div",{class:[c("title"),"van-multi-ellipsis--l2"]},[r.title])},b=()=>{if(e.tag||r.tag)return i("div",{class:c("tag")},[e.tag?e.tag():i(B,{mark:!0,type:"danger"},{default:()=>[r.tag]})])},v=()=>e.thumb?e.thumb():i(I,{src:r.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:r.lazyLoad},null),l=()=>{if(e.thumb||r.thumb)return i("a",{href:r.thumbLink,class:c("thumb"),onClick:n=>o("click-thumb",n)},[v(),b()])},P=()=>{if(e.desc)return e.desc();if(r.desc)return i("div",{class:[c("desc"),"van-ellipsis"]},[r.desc])},T=()=>{const n=r.price.toString().split(".");return i("div",null,[i("span",{class:c("price-currency")},[r.currency]),i("span",{class:c("price-integer")},[n[0]]),p("."),i("span",{class:c("price-decimal")},[n[1]])])};return()=>{var d,g,h;const n=e.num||t(r.num),m=e.price||t(r.price),u=e["origin-price"]||t(r.originPrice),y=n||m||u||e.bottom,k=m&&i("div",{class:c("price")},[e.price?e.price():T()]),w=u&&i("div",{class:c("origin-price")},[e["origin-price"]?e["origin-price"]():`${r.currency} ${r.originPrice}`]),S=n&&i("div",{class:c("num")},[e.num?e.num():`x${r.num}`]),C=e.footer&&i("div",{class:c("footer")},[e.footer()]),L=y&&i("div",{class:c("bottom")},[(d=e["price-top"])==null?void 0:d.call(e),k,w,S,(g=e.bottom)==null?void 0:g.call(e)]);return i("div",{class:c()},[i("div",{class:c("header")},[l(),i("div",{class:c("content",{centered:r.centered})},[i("div",null,[f(),P(),(h=e.tags)==null?void 0:h.call(e)]),L])]),C])}}});const E=z(V);export{E as C};
