import{_ as i,o as t,c,F as _,L as p,M as b,x as e,a as d,C as n,z as A,N as B,D as E}from"./chunks/framework.10b5afdb.js";const g={},x=o=>(p("data-v-ca1a2bd1"),o=o(),b(),o),h=x(()=>e("div",{class:"div1"},[d(" 这个 div 较小"),e("br"),d("（宽度为 300px，高度为 100px）。 ")],-1)),v=x(()=>e("div",{class:"div2"},[d(" 这个 div 更大"),e("br"),d("（宽度也为 300px，高度为 100px，但多了内边距50px）。 ")],-1));function u(o,s){return t(),c(_,null,[h,v],64)}const C=i(g,[["render",u],["__scopeId","data-v-ca1a2bd1"]]),m=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));const z={},l=o=>(p("data-v-4a8cd2dd"),o=o(),b(),o),F=l(()=>e("div",{class:"div1"}," 现在两个 div 的大小相同！ ",-1)),f=l(()=>e("div",{class:"div2"}," Hooray! ",-1));function S(o,s){return t(),c(_,null,[F,f],64)}const D=i(z,[["render",S],["__scopeId","data-v-4a8cd2dd"]]),y=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),w={setup(){return{demos:Object.assign({"../examples/boxSizing/basic.vue":m,"../examples/boxSizing/borderBox.vue":y})}}},M=JSON.parse('{"title":"Box Sizing","description":"","frontmatter":{},"headers":[],"relativePath":"guide/boxSizing.md","lastUpdated":1680487526000}'),$=B('<h1 id="box-sizing" tabindex="-1">Box Sizing <a class="header-anchor" href="#box-sizing" aria-label="Permalink to &quot;Box Sizing&quot;">​</a></h1><p><code>box-sizing</code> 属性允许我们在元素的总宽度和高度中包括内边距（填充）和边框。<br><code>box-sizing</code> 的常用属性值：<br><code>content-box</code>：<code>padding</code>和<code>border</code>不被包含在定义的<code>width</code>和<code>height</code>之内。<br> 盒子的实际宽度=设置的<code>width</code>+<code>padding</code>+<code>border</code><br><code>border-box</code>：<code>padding</code>和<code>border</code>被包含在定义的<code>width</code>和<code>height</code>之内。<br> 盒子的实际宽度=设置的<code>width</code>（<code>padding</code>和<code>border</code>不会影响实际宽度）<br></p><h2 id="假如不指定-box-sizing-属性" tabindex="-1">假如不指定 <code>box-sizing</code> 属性 <a class="header-anchor" href="#假如不指定-box-sizing-属性" aria-label="Permalink to &quot;假如不指定 `box-sizing` 属性&quot;">​</a></h2><p>默认情况下，元素的宽度和高度是这样计算的：<br> width + padding + border = 元素的实际宽度<br> height + padding + border = 元素的实际高度<br> 下例中展示了两个有相同指定宽度和高度的 <code>&lt;div&gt;</code> 元素：</p>',4),T=e("p",null,"boxSizing/basic",-1),I=e("h2",{id:"如果使用-box-sizing-属性",tabindex:"-1"},[d("如果使用 "),e("code",null,"box-sizing"),d(" 属性 "),e("a",{class:"header-anchor",href:"#如果使用-box-sizing-属性","aria-label":'Permalink to "如果使用 `box-sizing` 属性"'},"​")],-1),P=e("p",null,[e("code",null,"box-sizing"),d(" 属性允许我们在元素的总宽度和高度中包括内边距和边框。"),e("br"),d(" 如果在元素上设置了 "),e("code",null,"box-sizing: border-box;"),d("，则宽度和高度会包括内边距和边框：")],-1),N=e("p",null,"boxSizing/borderBox",-1);function O(o,s,V,a,j,k){const r=E("Demo");return t(),c("div",null,[$,n(r,{demos:a.demos,path:"boxSizing/basic",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22div1%22%3E%0A%20%20%20%20%E8%BF%99%E4%B8%AA%20div%20%E8%BE%83%E5%B0%8F%3Cbr%3E%EF%BC%88%E5%AE%BD%E5%BA%A6%E4%B8%BA%20300px%EF%BC%8C%E9%AB%98%E5%BA%A6%E4%B8%BA%20100px%EF%BC%89%E3%80%82%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22div2%22%3E%0A%20%20%20%20%E8%BF%99%E4%B8%AA%20div%20%E6%9B%B4%E5%A4%A7%3Cbr%3E%EF%BC%88%E5%AE%BD%E5%BA%A6%E4%B9%9F%E4%B8%BA%20300px%EF%BC%8C%E9%AB%98%E5%BA%A6%E4%B8%BA%20100px%EF%BC%8C%E4%BD%86%E5%A4%9A%E4%BA%86%E5%86%85%E8%BE%B9%E8%B7%9D50px%EF%BC%89%E3%80%82%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.div1%20%7B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20border%3A%201px%20solid%20blue%3B%0A%20%20%20%20box-sizing%3A%20content-box%3B%0A%20%20%20%20margin-top%3A%2015px%3B%0A%7D%0A.div2%20%7B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20padding%3A%2050px%3B%0A%20%20%20%20border%3A%201px%20solid%20red%3B%0A%20%20%20%20box-sizing%3A%20content-box%3B%0A%20%20%20%20margin-top%3A%2015px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:A(()=>[T]),_:1},8,["demos"]),I,P,n(r,{demos:a.demos,path:"boxSizing/borderBox",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22div1%22%3E%0A%20%20%20%20%E7%8E%B0%E5%9C%A8%E4%B8%A4%E4%B8%AA%20div%20%E7%9A%84%E5%A4%A7%E5%B0%8F%E7%9B%B8%E5%90%8C%EF%BC%81%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22div2%22%3E%0A%20%20%20%20Hooray!%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.div1%20%7B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20border%3A%201px%20solid%20blue%3B%0A%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20margin-top%3A%2015px%3B%0A%7D%0A.div2%20%7B%0A%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20padding%3A%2050px%3B%0A%20%20%20%20border%3A%201px%20solid%20red%3B%0A%20%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20%20margin-top%3A%2015px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:A(()=>[N]),_:1},8,["demos"])])}const H=i(w,[["render",O]]);export{M as __pageData,H as default};
