import{f as u,D as i,o as p,c as d,x as a,a as s,t as f,W as b,C as r,z as n,F as C,_ as y,N as D}from"./chunks/framework.10b5afdb.js";const A={class:"margin-b20"},E={class:""},v={class:"green bold"},x={class:"margin-b20"},h={__name:"basic",setup(c){const t=u("none");return(m,e)=>{const o=i("el-button");return p(),d(C,null,[a("div",A,[a("span",E,[s(" text-transform: "),a("span",v,f(t.value),1)])]),a("div",x,[a("span",{style:b({"text-transform":t.value})},"hello world",4)]),r(o,{type:"primary",onClick:e[0]||(e[0]=l=>t.value="uppercase")},{default:n(()=>[s("uppercase")]),_:1}),r(o,{type:"primary",onClick:e[1]||(e[1]=l=>t.value="lowercase")},{default:n(()=>[s("lowercase")]),_:1}),r(o,{type:"primary",onClick:e[2]||(e[2]=l=>t.value="capitalize")},{default:n(()=>[s("capitalize")]),_:1}),r(o,{type:"primary",onClick:e[3]||(e[3]=l=>t.value="none")},{default:n(()=>[s("none")]),_:1})],64)}}},g=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),V={setup(){return{demos:Object.assign({"../examples/textTransform/basic.vue":g})}}},$=JSON.parse('{"title":"文本转换","description":"","frontmatter":{},"headers":[],"relativePath":"guide/textTransform.md","lastUpdated":1680487526000}'),F=D("",4),T=a("p",null,"textTransform/basic",-1);function k(c,t,m,e,o,l){const _=i("Demo");return p(),d("div",null,[F,r(_,{demos:e.demos,path:"textTransform/basic",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22%22%3E%0A%20%20%20%20%20%20text-transform%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7BstyleVal%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20%3Astyle%3D%22%7B'text-transform'%3A%20styleVal%7D%22%3Ehello%20world%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'uppercase'%22%3Euppercase%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'lowercase'%22%3Elowercase%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'capitalize'%22%3Ecapitalize%3C%2Fel-button%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22styleVal%20%3D%20'none'%22%3Enone%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20styleVal%20%3D%20ref('none')%0A%3C%2Fscript%3E"},{default:n(()=>[T]),_:1},8,["demos"])])}const w=y(V,[["render",k]]);export{$ as __pageData,w as default};
