import{g as m,r as d,o as c,c as _,b as o,t as h,n as b,e as a,w as r,F as v,d as s,_ as y,f as C}from"./app.0cb0958a.js";const D={class:"margin-b20"},A={class:""},E=s(" text-decoration: "),f={class:"green bold"},g={class:"margin-b20"},x=s("overline"),V=s("line-through"),F=s("underline"),k=s("none"),$={__name:"basic",setup(i){const t=m("none");return(p,e)=>{const n=d("el-button");return c(),_(v,null,[o("div",D,[o("span",A,[E,o("span",f,h(t.value),1)])]),o("div",g,[o("span",{style:b({"text-decoration":t.value})},"hello world",4)]),a(n,{type:"primary",onClick:e[0]||(e[0]=l=>t.value="overline")},{default:r(()=>[x]),_:1}),a(n,{type:"primary",onClick:e[1]||(e[1]=l=>t.value="line-through")},{default:r(()=>[V]),_:1}),a(n,{type:"primary",onClick:e[2]||(e[2]=l=>t.value="underline")},{default:r(()=>[F]),_:1}),a(n,{type:"primary",onClick:e[3]||(e[3]=l=>t.value="none")},{default:r(()=>[k]),_:1})],64)}}};var S=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const T={setup(){return{demos:{"../examples/decoration/basic.vue":S}}}},O=JSON.parse('{"title":"\u6587\u5B57\u88C5\u9970","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5\u53CAdemo\u6F14\u793A\uFF1A","slug":"\u7528\u6CD5\u53CAdemo\u6F14\u793A\uFF1A"}],"relativePath":"guide/decoration.md","lastUpdated":1680227888000}'),B=C("",4),N=o("p",null,"decoration/basic",-1);function w(i,t,p,e,n,l){const u=d("Demo");return c(),_("div",null,[B,a(u,{demos:e.demos,path:"decoration/basic",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22%22%3E%0A%20%20%20%20%20%20text-decoration%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7BstyleVal%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20%3Astyle%3D%22%7B'text-decoration'%3A%20styleVal%7D%22%3Ehello%20world%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'overline'%22%3Eoverline%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'line-through'%22%3Eline-through%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'underline'%22%3Eunderline%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'none'%22%3Enone%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20styleVal%20%3D%20ref('none')%0A%3C%2Fscript%3E"},{default:r(()=>[N]),_:1},8,["demos"])])}var j=y(T,[["render",w]]);export{O as __pageData,j as default};
