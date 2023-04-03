import{f as m,D as r,o as d,c as u,x as e,a,t as A,a0 as C,C as n,z as i,F as E,_ as b,U as g}from"./chunks/framework.6b7ad340.js";const h="/icon1.png",f="/icon2.png",D="/icon3.png",y={class:"margin-b20"},v={class:"green bold"},B={class:"margin-b20"},F=e("li",null,"Coffee",-1),S=e("li",null,"Tea",-1),T=e("li",null,"Coca Cola",-1),$=[F,S,T],x={__name:"listStyleImage",setup(c){const t=m(0),l=[h,f,D];function o(){if(t.value>=2){t.value=0;return}t.value++}return(_,p)=>{const s=r("el-button");return d(),u(E,null,[e("div",y,[e("span",null,[a(" list-style-image: "),e("span",v,"url('"+A(l[t.value])+"')",1)])]),e("div",B,[e("ul",{style:C({"list-style-image":`url(${l[t.value]})`})},$,4)]),n(s,{type:"primary",onClick:o},{default:i(()=>[a("切换图像列表项标记")]),_:1})],64)}}},k=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),q={class:"margin-b20"},P={class:"green bold"},w={class:"margin-b20"},z=e("li",null,"Coffee",-1),I=e("li",null,"Tea",-1),N=e("li",null,"Coca Cola",-1),O=[z,I,N],V={__name:"listStyleType",setup(c){const t=m(0),l=["none","disc","circle","square","decimal","decimal-leading-zero","lower-alpha","upper-alpha","lower-roman","upper-roman"];function o(){if(t.value>=9){t.value=0;return}t.value++}return(_,p)=>{const s=r("el-button");return d(),u(E,null,[e("div",q,[e("span",null,[a(" list-style-type: "),e("span",P,A(l[t.value]),1)])]),e("div",w,[e("ul",{style:C({"list-style-type":l[t.value]})},O,4)]),n(s,{type:"primary",onClick:o},{default:i(()=>[a("切换属性值")]),_:1})],64)}}},j=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),M={setup(){return{demos:Object.assign({"../examples/list/listStyleImage.vue":k,"../examples/list/listStyleType.vue":j})}}},Q=JSON.parse('{"title":"列表","description":"","frontmatter":{},"headers":[],"relativePath":"guide/list.md","lastUpdated":1680502928000}'),H=g('<h1 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h1><h2 id="html-列表和-css-列表属性" tabindex="-1">HTML 列表和 CSS 列表属性 <a class="header-anchor" href="#html-列表和-css-列表属性" aria-label="Permalink to &quot;HTML 列表和 CSS 列表属性&quot;">​</a></h2><p>在 HTML 中，列表主要有两种类型：<br> 无序列表（<code>&lt;ul&gt;</code>）- 列表项用的是项目符号标记<br> 有序列表（<code>&lt;ol&gt;</code>）- 列表项用的是数字或字母标记<br> CSS 列表属性使您可以：<br> 为有序列表和无序列表设置不同的列表项标记<br> 将图像设置为列表项标记<br></p><h2 id="不同的列表项目标记" tabindex="-1">不同的列表项目标记 <a class="header-anchor" href="#不同的列表项目标记" aria-label="Permalink to &quot;不同的列表项目标记&quot;">​</a></h2><p><code>list-style-type</code> 属性用来指定列表项标记的类型<br><code>list-style-type</code> 属性的常用属性值及效果说明<br><code>none</code> 不使用任何项目符号<br><code>disc</code> 默认值，实心圆<br><code>circle</code> 空心圆<br><code>square</code> 实心矩形<br><code>decimal</code> 数字1、2、3、4、5<br><code>decimal-leading-zero</code> 以0打头的数字，01、02、03、04、05<br><code>lower-alpha</code> 小写英文字母，a、b、c、d、e<br><code>upper-alpha</code> 大写英文字母，A、B、C、D、E<br><code>lower-roman</code> 小写罗马数字，ⅰ、ⅱ、ⅲ、ⅳ、ⅴ<br><code>upper-roman</code> 大写罗马数字，Ⅰ、Ⅱ、Ⅲ、Ⅳ、Ⅴ<br></p>',5),L=e("p",null,"list/listStyleType",-1),U=e("h2",{id:"图像作为列表项标记",tabindex:"-1"},[a("图像作为列表项标记 "),e("a",{class:"header-anchor",href:"#图像作为列表项标记","aria-label":'Permalink to "图像作为列表项标记"'},"​")],-1),J=e("p",null,[e("code",null,"list-style-image"),a(" 属性将图像指定为列表项标记：")],-1),R=e("p",null,"list/listStyleImage",-1);function G(c,t,l,o,_,p){const s=r("Demo");return d(),u("div",null,[H,n(s,{demos:o.demos,path:"list/listStyleType",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%3E%0A%20%20%20%20%20%20list-style-type%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7Blist%5Bnum%5D%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cul%20%3Astyle%3D%22%7B'list-style-type'%3A%20list%5Bnum%5D%7D%22%3E%0A%20%20%20%20%20%20%3Cli%3ECoffee%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%3ETea%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%3ECoca%20Cola%3C%2Fli%3E%0A%20%20%20%20%3C%2Ful%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22toggle%22%3E%E5%88%87%E6%8D%A2%E5%B1%9E%E6%80%A7%E5%80%BC%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20num%20%3D%20ref(0)%0Aconst%20list%20%3D%20%5B%0A%20%20'none'%2C%0A%20%20'disc'%2C%0A%20%20'circle'%2C%0A%20%20'square'%2C%0A%20%20'decimal'%2C%0A%20%20'decimal-leading-zero'%2C%0A%20%20'lower-alpha'%2C%0A%20%20'upper-alpha'%2C%0A%20%20'lower-roman'%2C%0A%20%20'upper-roman'%0A%5D%0Afunction%20toggle()%20%7B%0A%20%20if%20(num.value%20%3E%3D%209)%20%7B%0A%20%20%20%20num.value%20%3D%200%0A%20%20%20%20return%0A%20%20%7D%0A%20%20num.value%2B%2B%0A%7D%0A%3C%2Fscript%3E"},{default:i(()=>[L]),_:1},8,["demos"]),U,J,n(s,{demos:o.demos,path:"list/listStyleImage",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%3E%0A%20%20%20%20%20%20list-style-image%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3Eurl('%7B%7Blist%5Bnum%5D%7D%7D')%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cul%20%3Astyle%3D%22%7B'list-style-image'%3A%20%60url(%24%7Blist%5Bnum%5D%7D)%60%7D%22%3E%0A%20%20%20%20%20%20%3Cli%3ECoffee%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%3ETea%3C%2Fli%3E%0A%20%20%20%20%20%20%3Cli%3ECoca%20Cola%3C%2Fli%3E%0A%20%20%20%20%3C%2Ful%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22toggle%22%3E%E5%88%87%E6%8D%A2%E5%9B%BE%E5%83%8F%E5%88%97%E8%A1%A8%E9%A1%B9%E6%A0%87%E8%AE%B0%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%20%7D%20from%20'vue'%0Aimport%20icon1%20from%20'%2Ficon1.png'%0Aimport%20icon2%20from%20'%2Ficon2.png'%0Aimport%20icon3%20from%20'%2Ficon3.png'%0Aconst%20num%20%3D%20ref(0)%0Aconst%20list%20%3D%20%5Bicon1%2C%20icon2%2C%20icon3%5D%0A%0Afunction%20toggle()%20%7B%0A%20%20if%20(num.value%20%3E%3D%202)%20%7B%0A%20%20%20%20num.value%20%3D%200%0A%20%20%20%20return%0A%20%20%7D%0A%20%20num.value%2B%2B%0A%7D%0A%3C%2Fscript%3E"},{default:i(()=>[R]),_:1},8,["demos"])])}const W=b(M,[["render",G]]);export{Q as __pageData,W as default};
