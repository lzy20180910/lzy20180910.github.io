import{_ as t,f as E,D as e,o as A,c,x as s,a,t as F,a0 as u,C as r,z as y,F as d,R as g,S as _}from"./chunks/framework.6b6d2f85.js";const m="/navsprites.gif";const v=n=>(g("data-v-b093fd83"),n=n(),_(),n),b={class:"margin-b20"},f=v(()=>s("div",null,"navsprites.gif:",-1)),h=["src"],q={class:"margin-b20"},x={class:"green bold"},S={class:"margin-b20"},k={__name:"basic",setup(n){const C=E(0),l=E(m),p=["0","-91","-181"];function o(){if(C.value>=2){C.value=0;return}C.value++}return(i,D)=>{const B=e("el-button");return A(),c(d,null,[s("div",b,[f,s("img",{src:l.value,alt:""},null,8,h)]),s("div",q,[s("span",null,[a(" background: "),s("span",x,"url("+F(l.value)+") "+F(p[C.value])+"px 0",1)])]),s("div",S,[s("div",{style:u({background:`url(${l.value}) ${p[C.value]}px 0`}),class:"imageSprite"},null,4)]),r(B,{type:"primary",onClick:o},{default:y(()=>[a("切换图像精灵")]),_:1})],64)}}},$=t(k,[["__scopeId","data-v-b093fd83"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),I={setup(){return{demos:Object.assign({"../examples/imageSprite/basic.vue":U})}}},M=JSON.parse('{"title":"图像精灵","description":"","frontmatter":{},"headers":[],"relativePath":"guide/imageSprite.md","lastUpdated":1699513056000}'),N=s("h1",{id:"图像精灵",tabindex:"-1"},[a("图像精灵 "),s("a",{class:"header-anchor",href:"#图像精灵","aria-label":'Permalink to "图像精灵"'},"​")],-1),O=s("p",null,[a("图像精灵是单个图像中包含的图像集合。"),s("br")],-1),P=s("p",null,[a("包含许多图像的网页可能需要很长时间才能加载，同时会生成多个服务器请求。"),s("br")],-1),j=s("p",null,[a("使用图像精灵将减少服务器请求的数量并节约带宽。"),s("br")],-1),w=s("h2",{id:"用法及demo演示",tabindex:"-1"},[a("用法及demo演示 "),s("a",{class:"header-anchor",href:"#用法及demo演示","aria-label":'Permalink to "用法及demo演示"'},"​")],-1),z=s("p",null,"通过设置偏移量来显示不同的图标",-1),V=s("p",null,"imageSprite/basic",-1);function T(n,C,l,p,o,i){const D=e("Demo");return A(),c("div",null,[N,O,P,j,w,z,r(D,{demos:p.demos,path:"imageSprite/basic",source:"%3Cdiv%20class%3D%22language-vue%22%3E%3Cbutton%20title%3D%22Copy%20Code%22%20class%3D%22copy%22%3E%3C%2Fbutton%3E%3Cspan%20class%3D%22lang%22%3Evue%3C%2Fspan%3E%3Cpre%20v-pre%20class%3D%22shiki%20material-theme-palenight%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Emargin-b20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Enavsprites.gif%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eimg%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3Asrc%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3EimgUrl%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ealt%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Emargin-b20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%20%20background%3A%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Egreen%20bold%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eurl(%7B%7BimgUrl%7D%7D)%20%7B%7Blist%5Bnum%5D%7D%7Dpx%200%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Emargin-b20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%3Astyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%7B%26%2339%3Bbackground%26%2339%3B%3A%20%60url(%24%7BimgUrl%7D)%20%24%7Blist%5Bnum%5D%7Dpx%200%60%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3EimageSprite%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Eprimary%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%88%87%E6%8D%A2%E5%9B%BE%E5%83%8F%E7%B2%BE%E7%81%B5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eel-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20navsprites%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E%2Fnavsprites.gif%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20num%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20imgUrl%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E(navsprites)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20list%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E0%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E-91%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3E-181%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Efunction%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2382AAFF%22%3Etoggle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Eif%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Enum%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Enum%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E0%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%3B%20font-style%3A%20italic%22%3Ereturn%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Enum%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2B%2B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EimageSprite%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ewidth%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E44px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E44px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Edisplay%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20inline-block%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%0A%3C%2Fdiv%3E"},{default:y(()=>[V]),_:1},8,["demos"])])}const R=t(I,[["render",T]]);export{M as __pageData,R as default};