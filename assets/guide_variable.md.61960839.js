import{_ as l,o as s,c,p as h,a as _,b as e,i as C,r as v,e as n,w as r,F as m,d as o,f as E}from"./app.a8354933.js";const B={},d=t=>(h("data-v-13f4a041"),t=t(),_(),t),g={class:"container"},S=d(()=>e("h2",null,"Welcome to Shanghai!",-1)),F=d(()=>e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China.",-1)),y=d(()=>e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China.",-1)),x=d(()=>e("p",null,[e("button",null,"Yes"),e("button",null,"No")],-1)),D=[S,F,y,x];function P(t,a){return s(),c("div",g,D)}var j=l(B,[["render",P],["__scopeId","data-v-13f4a041"]]),$=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const w={},u=t=>(h("data-v-167bc3cc"),t=t(),_(),t),k={class:"container"},I=u(()=>e("h2",null,"Welcome to Shanghai!",-1)),R=u(()=>e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China.",-1)),N=u(()=>e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China.",-1)),V=u(()=>e("p",null,[e("button",null,"Yes"),e("button",null,"No")],-1)),T=[I,R,N,V];function O(t,a){return s(),c("div",k,T)}var M=l(w,[["render",O],["__scopeId","data-v-167bc3cc"]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const Y=t=>(h("data-v-45773d34"),t=t(),_(),t),z=Y(()=>e("div",{class:"container",id:"var_container"},[e("h2",null,"Welcome to Shanghai!"),e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China."),e("p",null,"Shanghai is one of the four direct-administered municipalities of the People's Republic of China."),e("p",null,[e("button",null,"Yes"),e("button",null,"No")])],-1)),J=o("\u70B9\u51FB\u4FEE\u6539\u84DD\u8272\u53D8\u91CF\u4E3A\u7EFF\u8272"),q={__name:"jsSetVar",setup(t){let a=null;C(()=>{a=document.getElementById("var_container")});function A(){a.style.setProperty("--blue","green")}return(i,f)=>{const b=v("el-button");return s(),c(m,null,[z,n(b,{type:"primary",onClick:A},{default:r(()=>[J]),_:1})],64)}}};var G=l(q,[["__scopeId","data-v-45773d34"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const K={setup(){return{demos:{"../examples/variable/basic.vue":$,"../examples/variable/cover.vue":W,"../examples/variable/jsSetVar.vue":H}}}},le=JSON.parse('{"title":"\u53D8\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"var() \u51FD\u6570\u7684\u8BED\u6CD5","slug":"var-\u51FD\u6570\u7684\u8BED\u6CD5"},{"level":2,"title":"var() \u5982\u4F55\u5DE5\u4F5C","slug":"var-\u5982\u4F55\u5DE5\u4F5C"},{"level":2,"title":"\u4F7F\u7528 var() \u6709\u5982\u4E0B\u4F18\u52BF\uFF1A","slug":"\u4F7F\u7528-var-\u6709\u5982\u4E0B\u4F18\u52BF\uFF1A"},{"level":2,"title":"\u8986\u76D6\u53D8\u91CF","slug":"\u8986\u76D6\u53D8\u91CF"},{"level":2,"title":"\u4F7F\u7528 JavaScript \u66F4\u6539\u53D8\u91CF","slug":"\u4F7F\u7528-javascript-\u66F4\u6539\u53D8\u91CF"}],"relativePath":"guide/variable.md"}'),L=E(`<h1 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h1><p><code>var()</code> \u51FD\u6570\u7528\u4E8E\u63D2\u5165 <code>CSS</code> \u53D8\u91CF\u7684\u503C\u3002<br></p><h2 id="var-\u51FD\u6570\u7684\u8BED\u6CD5" tabindex="-1"><code>var()</code> \u51FD\u6570\u7684\u8BED\u6CD5 <a class="header-anchor" href="#var-\u51FD\u6570\u7684\u8BED\u6CD5" aria-hidden="true">#</a></h2><p><code>var()</code> \u51FD\u6570\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>\u503C</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">\u53D8\u91CF\u540D\uFF08\u4EE5\u4E24\u6761\u7834\u6298\u53F7\u5F00\u5934\uFF09\u3002</td></tr><tr><td>value</td><td style="text-align:center;">\u53D8\u91CF\u5BF9\u5E94\u7684\u503C\u3002</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u91CA\uFF1A\u53D8\u91CF\u540D\u79F0\u5FC5\u987B\u4EE5\u4E24\u4E2A\u7834\u6298\u53F7\uFF08--\uFF09\u5F00\u5934\uFF0C\u4E14\u533A\u5206\u5927\u5C0F\u5199\uFF01</p></div><h2 id="var-\u5982\u4F55\u5DE5\u4F5C" tabindex="-1"><code>var()</code> \u5982\u4F55\u5DE5\u4F5C <a class="header-anchor" href="#var-\u5982\u4F55\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF1A<code>CSS</code> \u53D8\u91CF\u53EF\u4EE5\u6709\u5168\u5C40\u6216\u5C40\u90E8\u4F5C\u7528\u57DF\u3002<br> \u5168\u5C40\u53D8\u91CF\u53EF\u4EE5\u5728\u6574\u4E2A\u6587\u6863\u4E2D\u8FDB\u884C\u8BBF\u95EE/\u4F7F\u7528\uFF0C\u800C\u5C40\u90E8\u53D8\u91CF\u53EA\u80FD\u5728\u58F0\u660E\u5B83\u7684\u9009\u62E9\u5668\u5185\u90E8\u4F7F\u7528\u3002<br> \u5982\u9700\u521B\u5EFA\u5177\u6709\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\uFF0C\u8BF7\u5728 <code>:root</code> \u9009\u62E9\u5668\u4E2D\u58F0\u660E\u5B83\u3002 <code>:root</code> \u9009\u62E9\u5668\u5339\u914D\u6587\u6863\u7684\u6839\u5143\u7D20\u3002<br> \u5982\u9700\u521B\u5EFA\u5177\u6709\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\uFF0C\u8BF7\u5728\u5C06\u8981\u4F7F\u7528\u5B83\u7684\u9009\u62E9\u5668\u4E2D\u58F0\u660E\u5B83\u3002<br> \u4E0B\u9762\u7684\u4F8B\u5B50\u58F0\u660E\u4E24\u4E2A\u53D8\u91CF\uFF08<code>--blue</code> \u548C <code>--white</code>\uFF09\uFF0C\u7136\u540E\u4F7F\u7528 <code>var()</code> \u51FD\u6570\u8C03\u7528\u81EA\u5B9A\u4E49\u53D8\u91CF\u7684\u503C\uFF1A<br></p>`,9),Q=e("p",null,"variable/basic",-1),U=e("h2",{id:"\u4F7F\u7528-var-\u6709\u5982\u4E0B\u4F18\u52BF\uFF1A",tabindex:"-1"},[o("\u4F7F\u7528 "),e("code",null,"var()"),o(" \u6709\u5982\u4E0B\u4F18\u52BF\uFF1A "),e("a",{class:"header-anchor",href:"#\u4F7F\u7528-var-\u6709\u5982\u4E0B\u4F18\u52BF\uFF1A","aria-hidden":"true"},"#")],-1),X=e("p",null,[o("1.\u4F7F\u4EE3\u7801\u66F4\u6613\u4E8E\u9605\u8BFB\uFF08\u66F4\u5BB9\u6613\u7406\u89E3\uFF09"),e("br"),o(" 2.\u4F7F\u4FEE\u6539\u989C\u8272\u503C\u66F4\u52A0\u5BB9\u6613")],-1),Z=e("h2",{id:"\u8986\u76D6\u53D8\u91CF",tabindex:"-1"},[o("\u8986\u76D6\u53D8\u91CF "),e("a",{class:"header-anchor",href:"#\u8986\u76D6\u53D8\u91CF","aria-hidden":"true"},"#")],-1),ee=e("p",null,[o("\u6709\u65F6\uFF0C\u6211\u4EEC\u5E0C\u671B\u53D8\u91CF\u4EC5\u5728\u9875\u9762\u7684\u7279\u5B9A\u90E8\u5206\u4E2D\u8FDB\u884C\u66F4\u6539"),e("br"),o(" \u5047\u8BBE\u6211\u4EEC\u60F3\u8981\u6309\u94AE\u5143\u7D20\u4F7F\u7528\u4E0D\u540C\u7684\u989C\u8272\u3002\u90A3\u4E48\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 button \u9009\u62E9\u5668\u5185\u91CD\u65B0\u58F0\u660E --blue \u53D8\u91CF\u3002\u5F53\u6211\u4EEC\u5728\u8FD9\u4E2A\u9009\u62E9\u5668\u4E2D\u4F7F\u7528 var(--blue) \u65F6\uFF0C\u5B83\u5C06\u4F7F\u7528\u6B64\u5904\u58F0\u660E\u7684\u5C40\u90E8 --blue \u53D8\u91CF\u503C\u3002")],-1),te=e("p",null,"variable/cover",-1),oe=e("h2",{id:"\u4F7F\u7528-javascript-\u66F4\u6539\u53D8\u91CF",tabindex:"-1"},[o("\u4F7F\u7528 JavaScript \u66F4\u6539\u53D8\u91CF "),e("a",{class:"header-anchor",href:"#\u4F7F\u7528-javascript-\u66F4\u6539\u53D8\u91CF","aria-hidden":"true"},"#")],-1),ae=e("p",null,[o("\u4E0B\u9762\u7684\u4F8B\u5B50\u901A\u8FC7"),e("code",null,"js"),o("\u7684\u65B9\u5F0F\u4FEE\u6539"),e("code",null,"--blue"),o("\u53D8\u91CF")],-1),ie=e("p",null,"variable/jsSetVar",-1);function ne(t,a,A,i,f,b){const p=v("Demo");return s(),c("div",null,[L,n(p,{demos:i.demos,path:"variable/basic",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Ch2%3EWelcome%20to%20Shanghai!%3C%2Fh2%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cbutton%3EYes%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3Cbutton%3ENo%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0Adiv%20%7B%0A%20%20--blue%3A%20%231e90ff%3B%0A%20%20--white%3A%20%23ffffff%3B%0A%7D%0A%0Ah2%20%7B%20border-bottom%3A%202px%20solid%20var(--blue)%3B%20%7D%0A%0A.container%20%7B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20padding%3A%2015px%3B%0A%7D%0A%0Abutton%20%7B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20border%3A%201px%20solid%20var(--blue)%3B%0A%20%20padding%3A%205px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:r(()=>[Q]),_:1},8,["demos"]),U,X,Z,ee,n(p,{demos:i.demos,path:"variable/cover",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Ch2%3EWelcome%20to%20Shanghai!%3C%2Fh2%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cbutton%3EYes%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3Cbutton%3ENo%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0Adiv%20%7B%0A%20%20--blue%3A%20%231e90ff%3B%0A%20%20--white%3A%20%23ffffff%3B%0A%7D%0A%0Ah2%20%7B%20border-bottom%3A%202px%20solid%20var(--blue)%3B%20%7D%0A%0A.container%20%7B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20padding%3A%2015px%3B%0A%7D%0A%0Abutton%20%7B%0A%20%20--blue%3A%20%23e91818%3B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20border%3A%201px%20solid%20var(--blue)%3B%0A%20%20padding%3A%205px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:r(()=>[te]),_:1},8,["demos"]),oe,ae,n(p,{demos:i.demos,path:"variable/jsSetVar",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22container%22%20id%3D%22var_container%22%3E%0A%20%20%20%20%3Ch2%3EWelcome%20to%20Shanghai!%3C%2Fh2%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EShanghai%20is%20one%20of%20the%20four%20direct-administered%20municipalities%20of%20the%20People's%20Republic%20of%20China.%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cbutton%3EYes%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3Cbutton%3ENo%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%0A%20%20%3Cel-button%20type%3D%22primary%22%20%40click%3D%22change%22%3E%E7%82%B9%E5%87%BB%E4%BF%AE%E6%94%B9%E8%93%9D%E8%89%B2%E5%8F%98%E9%87%8F%E4%B8%BA%E7%BB%BF%E8%89%B2%3C%2Fel-button%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20onMounted%20%7D%20from%20'vue'%0A%0Alet%20el%20%3D%20null%0AonMounted(()%20%3D%3E%20%7B%0A%20%20el%20%3D%20document.getElementById('var_container')%0A%7D)%0A%0Afunction%20change()%20%7B%0A%20%20el.style.setProperty('--blue'%2C%20'green')%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A%23var_container%20%7B%0A%20%20--blue%3A%20%231e90ff%3B%0A%20%20--white%3A%20%23ffffff%3B%0A%7D%0A%0Adiv%20%7B%20background-color%3A%20var(--blue)%3B%20%7D%0A%0Ah2%20%7B%20border-bottom%3A%202px%20solid%20var(--blue)%3B%20%7D%0A%0A.container%20%7B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20padding%3A%2015px%3B%0A%7D%0A%0Abutton%20%7B%0A%20%20background-color%3A%20var(--white)%3B%0A%20%20color%3A%20var(--blue)%3B%0A%20%20border%3A%201px%20solid%20var(--blue)%3B%0A%20%20padding%3A%205px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:r(()=>[ie]),_:1},8,["demos"])])}var se=l(K,[["render",ne]]);export{le as __pageData,se as default};
