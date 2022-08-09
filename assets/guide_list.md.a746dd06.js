import{g as p,r,o as d,c as u,b as e,t as A,n as m,e as i,w as n,F as C,d as s,u as _,f as h}from"./app.096038b6.js";const g={class:"margin-b20"},b=s(" list-style-image: "),v={class:"green bold"},y={class:"margin-b20"},f=e("li",null,"Coffee",-1),F=e("li",null,"Tea",-1),B=e("li",null,"Coca Cola",-1),S=[f,F,B],T=s("\u5207\u6362\u56FE\u50CF\u5217\u8868\u9879\u6807\u8BB0"),$={__name:"listStyleImage",setup(D){const t=p(0),l=["../../.vitepress/public/icon1.png","../../.vitepress/public/icon2.png","../../.vitepress/public/icon3.png"];function o(){if(t.value>=2){t.value=0;return}t.value++}return(a,E)=>{const c=r("el-button");return d(),u(C,null,[e("div",g,[e("span",null,[b,e("span",v,"url('"+A(l[t.value])+"')",1)])]),e("div",y,[e("ul",{style:m({"list-style-image":`url(${l[t.value]})`})},S,4)]),i(c,{type:"primary",onClick:o},{default:n(()=>[T]),_:1})],64)}}};var x=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const w={class:"margin-b20"},k=s(" list-style-type: "),z={class:"green bold"},I={class:"margin-b20"},N=e("li",null,"Coffee",-1),O=e("li",null,"Tea",-1),V=e("li",null,"Coca Cola",-1),j=[N,O,V],M=s("\u5207\u6362\u5C5E\u6027\u503C"),P={__name:"listStyleType",setup(D){const t=p(0),l=["none","disc","circle","square","decimal","decimal-leading-zero","lower-alpha","upper-alpha","lower-roman","upper-roman"];function o(){if(t.value>=9){t.value=0;return}t.value++}return(a,E)=>{const c=r("el-button");return d(),u(C,null,[e("div",w,[e("span",null,[k,e("span",z,A(l[t.value]),1)])]),e("div",I,[e("ul",{style:m({"list-style-type":l[t.value]})},j,4)]),i(c,{type:"primary",onClick:o},{default:n(()=>[M]),_:1})],64)}}};var q=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const H=h('<h1 id="\u5217\u8868" tabindex="-1">\u5217\u8868 <a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a></h1><h2 id="html-\u5217\u8868\u548C-css-\u5217\u8868\u5C5E\u6027" tabindex="-1">HTML \u5217\u8868\u548C CSS \u5217\u8868\u5C5E\u6027 <a class="header-anchor" href="#html-\u5217\u8868\u548C-css-\u5217\u8868\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u5728 HTML \u4E2D\uFF0C\u5217\u8868\u4E3B\u8981\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A<br> \u65E0\u5E8F\u5217\u8868\uFF08<code>&lt;ul&gt;</code>\uFF09- \u5217\u8868\u9879\u7528\u7684\u662F\u9879\u76EE\u7B26\u53F7\u6807\u8BB0<br> \u6709\u5E8F\u5217\u8868\uFF08<code>&lt;ol&gt;</code>\uFF09- \u5217\u8868\u9879\u7528\u7684\u662F\u6570\u5B57\u6216\u5B57\u6BCD\u6807\u8BB0<br> CSS \u5217\u8868\u5C5E\u6027\u4F7F\u60A8\u53EF\u4EE5\uFF1A<br> \u4E3A\u6709\u5E8F\u5217\u8868\u548C\u65E0\u5E8F\u5217\u8868\u8BBE\u7F6E\u4E0D\u540C\u7684\u5217\u8868\u9879\u6807\u8BB0<br> \u5C06\u56FE\u50CF\u8BBE\u7F6E\u4E3A\u5217\u8868\u9879\u6807\u8BB0<br></p><h2 id="\u4E0D\u540C\u7684\u5217\u8868\u9879\u76EE\u6807\u8BB0" tabindex="-1">\u4E0D\u540C\u7684\u5217\u8868\u9879\u76EE\u6807\u8BB0 <a class="header-anchor" href="#\u4E0D\u540C\u7684\u5217\u8868\u9879\u76EE\u6807\u8BB0" aria-hidden="true">#</a></h2><p><code>list-style-type</code> \u5C5E\u6027\u7528\u6765\u6307\u5B9A\u5217\u8868\u9879\u6807\u8BB0\u7684\u7C7B\u578B<br><code>list-style-type</code> \u5C5E\u6027\u7684\u5E38\u7528\u5C5E\u6027\u503C\u53CA\u6548\u679C\u8BF4\u660E<br><code>none</code> \u4E0D\u4F7F\u7528\u4EFB\u4F55\u9879\u76EE\u7B26\u53F7<br><code>disc</code> \u9ED8\u8BA4\u503C\uFF0C\u5B9E\u5FC3\u5706<br><code>circle</code> \u7A7A\u5FC3\u5706<br><code>square</code> \u5B9E\u5FC3\u77E9\u5F62<br><code>decimal</code> \u6570\u5B571\u30012\u30013\u30014\u30015<br><code>decimal-leading-zero</code> \u4EE50\u6253\u5934\u7684\u6570\u5B57\uFF0C01\u300102\u300103\u300104\u300105<br><code>lower-alpha</code> \u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\uFF0Ca\u3001b\u3001c\u3001d\u3001e<br><code>upper-alpha</code> \u5927\u5199\u82F1\u6587\u5B57\u6BCD\uFF0CA\u3001B\u3001C\u3001D\u3001E<br><code>lower-roman</code> \u5C0F\u5199\u7F57\u9A6C\u6570\u5B57\uFF0C\u2170\u3001\u2171\u3001\u2172\u3001\u2173\u3001\u2174<br><code>upper-roman</code> \u5927\u5199\u7F57\u9A6C\u6570\u5B57\uFF0C\u2160\u3001\u2161\u3001\u2162\u3001\u2163\u3001\u2164<br></p>',5),L=e("p",null,"list/listStyleType",-1),J=e("h2",{id:"\u56FE\u50CF\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u8BB0",tabindex:"-1"},[s("\u56FE\u50CF\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u8BB0 "),e("a",{class:"header-anchor",href:"#\u56FE\u50CF\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u8BB0","aria-hidden":"true"},"#")],-1),R=e("p",null,[e("code",null,"list-style-image"),s(" \u5C5E\u6027\u5C06\u56FE\u50CF\u6307\u5B9A\u4E3A\u5217\u8868\u9879\u6807\u8BB0\uFF1A")],-1),G=e("p",null,"list/listStyleImage",-1),U=JSON.parse('{"title":"\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML \u5217\u8868\u548C CSS \u5217\u8868\u5C5E\u6027","slug":"html-\u5217\u8868\u548C-css-\u5217\u8868\u5C5E\u6027"},{"level":2,"title":"\u4E0D\u540C\u7684\u5217\u8868\u9879\u76EE\u6807\u8BB0","slug":"\u4E0D\u540C\u7684\u5217\u8868\u9879\u76EE\u6807\u8BB0"},{"level":2,"title":"\u56FE\u50CF\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u8BB0","slug":"\u56FE\u50CF\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u8BB0"}],"relativePath":"guide/list.md"}'),K={name:"guide/list.md"},W=Object.assign(K,{setup(D){const t={"../examples/list/listStyleImage.vue":x,"../examples/list/listStyleType.vue":q};return(l,o)=>{const a=r("Demo");return d(),u("div",null,[H,i(a,{demos:_(t),path:"list/listStyleType",source:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0D%0A%20%20%20%20%3Cspan%3E%0D%0A%20%20%20%20%20%20list-style-type%3A%20%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7Blist%5Bnum%5D%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0D%0A%20%20%20%20%3Cul%20%3Astyle%3D%22%7B'list-style-type'%3A%20list%5Bnum%5D%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cli%3ECoffee%3C%2Fli%3E%0D%0A%20%20%20%20%20%20%3Cli%3ETea%3C%2Fli%3E%0D%0A%20%20%20%20%20%20%3Cli%3ECoca%20Cola%3C%2Fli%3E%0D%0A%20%20%20%20%3C%2Ful%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22toggle%22%3E%E5%88%87%E6%8D%A2%E5%B1%9E%E6%80%A7%E5%80%BC%3C%2Fel-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20num%20%3D%20ref(0)%0D%0Aconst%20list%20%3D%20%5B%0D%0A%20%20'none'%2C%0D%0A%20%20'disc'%2C%0D%0A%20%20'circle'%2C%0D%0A%20%20'square'%2C%0D%0A%20%20'decimal'%2C%0D%0A%20%20'decimal-leading-zero'%2C%0D%0A%20%20'lower-alpha'%2C%0D%0A%20%20'upper-alpha'%2C%0D%0A%20%20'lower-roman'%2C%0D%0A%20%20'upper-roman'%0D%0A%5D%0D%0Afunction%20toggle()%20%7B%0D%0A%20%20if%20(num.value%20%3E%3D%209)%20%7B%0D%0A%20%20%20%20num.value%20%3D%200%0D%0A%20%20%20%20return%0D%0A%20%20%7D%0D%0A%20%20num.value%2B%2B%0D%0A%7D%0D%0A%3C%2Fscript%3E"},{default:n(()=>[L]),_:1},8,["demos"]),J,R,i(a,{demos:_(t),path:"list/listStyleImage",source:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0D%0A%20%20%20%20%3Cspan%3E%0D%0A%20%20%20%20%20%20list-style-image%3A%20%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3Eurl('%7B%7Blist%5Bnum%5D%7D%7D')%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0D%0A%20%20%20%20%3Cul%20%3Astyle%3D%22%7B'list-style-image'%3A%20%60url(%24%7Blist%5Bnum%5D%7D)%60%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cli%3ECoffee%3C%2Fli%3E%0D%0A%20%20%20%20%20%20%3Cli%3ETea%3C%2Fli%3E%0D%0A%20%20%20%20%20%20%3Cli%3ECoca%20Cola%3C%2Fli%3E%0D%0A%20%20%20%20%3C%2Ful%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22toggle%22%3E%E5%88%87%E6%8D%A2%E5%9B%BE%E5%83%8F%E5%88%97%E8%A1%A8%E9%A1%B9%E6%A0%87%E8%AE%B0%3C%2Fel-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20num%20%3D%20ref(0)%0D%0Aconst%20list%20%3D%20%5B%0D%0A%20%20'..%2F..%2F.vitepress%2Fpublic%2Ficon1.png'%2C%0D%0A%20%20'..%2F..%2F.vitepress%2Fpublic%2Ficon2.png'%2C%0D%0A%20%20'..%2F..%2F.vitepress%2Fpublic%2Ficon3.png'%0D%0A%5D%0D%0Afunction%20toggle()%20%7B%0D%0A%20%20if%20(num.value%20%3E%3D%202)%20%7B%0D%0A%20%20%20%20num.value%20%3D%200%0D%0A%20%20%20%20return%0D%0A%20%20%7D%0D%0A%20%20num.value%2B%2B%0D%0A%7D%0D%0A%3C%2Fscript%3E"},{default:n(()=>[G]),_:1},8,["demos"])])}}});export{U as __pageData,W as default};
