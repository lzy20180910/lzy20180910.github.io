import{f as _,D as o,o as c,c as p,x as e,a,t as h,a0 as v,C as s,z as m,F as g,_ as E}from"./chunks/framework.6b7ad340.js";const y={class:"margin-b20"},b={class:""},A={class:"green bold"},f={class:"margin-b20"},C={__name:"letterSpacing",setup(d){const t=_(0);return(u,n)=>{const i=o("el-input-number"),r=o("el-form-item");return c(),p(g,null,[e("div",y,[e("span",b,[a(" letter-spacing: "),e("span",A,h(t.value)+"px",1)])]),e("div",f,[e("p",{style:v({"letter-spacing":t.value+"px"})},"In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'",4)]),s(r,{label:"设置字母间距"},{default:m(()=>[s(i,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),min:0},null,8,["modelValue"])]),_:1})],64)}}},x=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),D={class:"margin-b20"},B={class:""},F={class:"green bold"},S={class:"margin-b20"},V={__name:"textIndent",setup(d){const t=_(0);return(u,n)=>{const i=o("el-input-number"),r=o("el-form-item");return c(),p(g,null,[e("div",D,[e("span",B,[a(" text-indent: "),e("span",F,h(t.value)+"px",1)])]),e("div",S,[e("p",{style:v({"text-indent":t.value+"px"})},"In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'",4)]),s(r,{label:"设置缩进"},{default:m(()=>[s(i,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),min:0},null,8,["modelValue"])]),_:1})],64)}}},I=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),$={setup(){return{demos:Object.assign({"../examples/textSpacing/letterSpacing.vue":x,"../examples/textSpacing/textIndent.vue":I})}}},M=JSON.parse('{"title":"文字间距测试1","description":"","frontmatter":{},"headers":[],"relativePath":"guide/textSpacing.md","lastUpdated":1680509302000}'),j=e("h1",{id:"文字间距测试1",tabindex:"-1"},[a("文字间距测试1 "),e("a",{class:"header-anchor",href:"#文字间距测试1","aria-label":'Permalink to "文字间距测试1"'},"​")],-1),k=e("h2",{id:"文字缩进",tabindex:"-1"},[a("文字缩进 "),e("a",{class:"header-anchor",href:"#文字缩进","aria-label":'Permalink to "文字缩进"'},"​")],-1),z=e("p",null,[e("code",null,"text-indent"),a(" 属性用于指定文本第一行的缩进：")],-1),O=e("p",null,"textSpacing/textIndent",-1),P=e("h2",{id:"字母间距",tabindex:"-1"},[a("字母间距 "),e("a",{class:"header-anchor",href:"#字母间距","aria-label":'Permalink to "字母间距"'},"​")],-1),w=e("p",null,[e("code",null,"letter-spacing"),a(" 属性用于指定文本中字符之间的间距。")],-1),N=e("p",null,"下例演示如何增加或减少字符之间的间距：",-1),W=e("p",null,"textSpacing/letterSpacing",-1);function T(d,t,u,n,i,r){const l=o("Demo");return c(),p("div",null,[j,k,z,s(l,{demos:n.demos,path:"textSpacing/textIndent",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22%22%3E%0A%20%20%20%20%20%20text-indent%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7BstyleVal%7D%7Dpx%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cp%20%3Astyle%3D%22%7B'text-indent'%3A%20styleVal%20%2B%20'px'%7D%22%3EIn%20my%20younger%20and%20more%20vulnerable%20years%20my%20father%20gave%20me%20some%20advice%20that%20I've%20been%20turning%20over%20in%20my%20mind%20ever%20since.%20'Whenever%20you%20feel%20like%20criticizing%20anyone%2C'%20he%20told%20me%2C%20'just%20remember%20that%20all%20the%20people%20in%20this%20world%20haven't%20had%20the%20advantages%20that%20you've%20had.'%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-form-item%20label%3D%22%E8%AE%BE%E7%BD%AE%E7%BC%A9%E8%BF%9B%22%3E%0A%20%20%20%20%3Cel-input-number%20v-model%3D%22styleVal%22%20%3Amin%3D%220%22%3E%3C%2Fel-input-number%3E%0A%20%20%3C%2Fel-form-item%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20styleVal%20%3D%20ref(0)%0A%3C%2Fscript%3E"},{default:m(()=>[O]),_:1},8,["demos"]),P,w,N,s(l,{demos:n.demos,path:"textSpacing/letterSpacing",source:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22%22%3E%0A%20%20%20%20%20%20letter-spacing%3A%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22green%20bold%22%3E%7B%7BstyleVal%7D%7Dpx%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22margin-b20%22%3E%0A%20%20%20%20%3Cp%20%3Astyle%3D%22%7B'letter-spacing'%3A%20styleVal%20%2B%20'px'%7D%22%3EIn%20my%20younger%20and%20more%20vulnerable%20years%20my%20father%20gave%20me%20some%20advice%20that%20I've%20been%20turning%20over%20in%20my%20mind%20ever%20since.%20'Whenever%20you%20feel%20like%20criticizing%20anyone%2C'%20he%20told%20me%2C%20'just%20remember%20that%20all%20the%20people%20in%20this%20world%20haven't%20had%20the%20advantages%20that%20you've%20had.'%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cel-form-item%20label%3D%22%E8%AE%BE%E7%BD%AE%E5%AD%97%E6%AF%8D%E9%97%B4%E8%B7%9D%22%3E%0A%20%20%20%20%3Cel-input-number%20v-model%3D%22styleVal%22%20%3Amin%3D%220%22%3E%3C%2Fel-input-number%3E%0A%20%20%3C%2Fel-form-item%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20styleVal%20%3D%20ref(0)%0A%3C%2Fscript%3E"},{default:m(()=>[W]),_:1},8,["demos"])])}const J=E($,[["render",T]]);export{M as __pageData,J as default};
