import{c as o}from"./use-translate.0e71ed3e.js";import{t as c,w as m}from"./with-install.50e547fb.js";import{b as u}from"./constant.bdedcaa1.js";import{z as d,e as r,H as f,F as p}from"./vue-libs.4d090e76.js";const[b,a]=o("cell-group"),g={title:String,inset:Boolean,border:c};var h=d({name:b,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const n=()=>{var i;return r("div",f({class:[a({inset:e.inset}),{[u]:e.border&&!e.inset}]},l),[(i=t.default)==null?void 0:i.call(t)])},s=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(p,null,[s(),n()]):n()}});const O=m(h);export{O as C};