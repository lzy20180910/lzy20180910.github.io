import{f as m,D as d,o as c,c as p,x as o,a,t as b,a0 as C,C as l,z as r,F as y,_ as v,U as D}from"./chunks/framework.6b7ad340.js";const h={class:"margin-b20"},A={class:""},E={class:"green bold"},f={class:"margin-b20"},g={__name:"basic",setup(i){const t=m("none");return(u,e)=>{const n=d("el-button");return c(),p(y,null,[o("div",h,[o("span",A,[a(" text-decoration: "),o("span",E,b(t.value),1)])]),o("div",f,[o("span",{style:C({"text-decoration":t.value})},"hello world",4)]),l(n,{type:"primary",onClick:e[0]||(e[0]=s=>t.value="overline")},{default:r(()=>[a("overline")]),_:1}),l(n,{type:"primary",onClick:e[1]||(e[1]=s=>t.value="line-through")},{default:r(()=>[a("line-through")]),_:1}),l(n,{type:"primary",onClick:e[2]||(e[2]=s=>t.value="underline")},{default:r(()=>[a("underline")]),_:1}),l(n,{type:"primary",onClick:e[3]||(e[3]=s=>t.value="none")},{default:r(()=>[a("none")]),_:1})],64)}}},x=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),V={setup(){return{demos:Object.assign({"../examples/decoration/basic.vue":x})}}},T=JSON.parse('{"title":"文字装饰","description":"","frontmatter":{},"headers":[],"relativePath":"guide/decoration.md","lastUpdated":1680502928000}'),F=D("",4),k=o("p",null,"decoration/basic",-1);function S(i,t,u,e,n,s){const _=d("Demo");return c(),p("div",null,[F,l(_,{demos:e.demos,path:"decoration/basic",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22%22%3E%0A%20%20%20%20%20%20text-decoration%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7BstyleVal%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20%3Astyle%3D%22%7B'text-decoration'%3A%20styleVal%7D%22%3Ehello%20world%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'overline'%22%3Eoverline%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'line-through'%22%3Eline-through%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'underline'%22%3Eunderline%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'none'%22%3Enone%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20styleVal%20%3D%20ref('none')%0A%3C%2Fscript%3E"},{default:r(()=>[k]),_:1},8,["demos"])])}const B=v(V,[["render",S]]);export{T as __pageData,B as default};