import{o as s,c as a,f as e}from"./app.096038b6.js";const l=e(`<h1 id="\u5C5E\u6027\u9009\u62E9\u5668" tabindex="-1">\u5C5E\u6027\u9009\u62E9\u5668 <a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u4E3A\u5E26\u6709\u7279\u5B9A\u5C5E\u6027\u7684 HTML \u5143\u7D20\u8BBE\u7F6E\u6837\u5F0F</p><h2 id="attribute-\u9009\u62E9\u5668" tabindex="-1"><code>[attribute]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><p><code>[attribute]</code> \u9009\u62E9\u5668\u7528\u4E8E\u9009\u53D6\u5E26\u6709\u6307\u5B9A\u5C5E\u6027\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u62E9\u6240\u6709\u5E26\u6709 <code>target</code> \u5C5E\u6027\u7684 <code>&lt;a&gt;</code> \u5143\u7D20\uFF1B<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute-value-\u9009\u62E9\u5668" tabindex="-1"><code>[attribute=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><p><code>[attribute=&quot;value&quot;]</code> \u9009\u62E9\u5668\u7528\u4E8E\u9009\u53D6\u5E26\u6709\u6307\u5B9A\u5C5E\u6027\u548C\u503C\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6\u6240\u6709\u5E26\u6709 <code>target=&quot;_blank&quot;</code> \u5C5E\u6027\u7684 <code>&lt;a&gt;</code> \u5143\u7D20\uFF1A<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute-value-\u9009\u62E9\u5668-1" tabindex="-1"><code>[attribute~=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668-1" aria-hidden="true">#</a></h2><p><code>[attribute~=&quot;value&quot;]</code> \u9009\u62E9\u5668\u9009\u53D6\u5C5E\u6027\u503C\u5305\u542B\u6307\u5B9A\u8BCD\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6 <code>title</code> \u5C5E\u6027\u5305\u542B <code>&quot;flower&quot;</code> \u5355\u8BCD\u7684\u6240\u6709\u5143\u7D20\uFF1A<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">~=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flower</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> solid yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4F1A\u5339\u914D\u4EE5\u4E0B\u5C5E\u6027\u7684\u5143\u7D20\uFF1Atitle=&quot;flower&quot;\u3001title=&quot;summer flower&quot; \u4EE5\u53CA title=&quot;flower new&quot;\uFF0C\u4F46\u4E0D\u5339\u914D\uFF1Atitle=&quot;my-flower&quot; \u6216 title=&quot;flowers&quot;\u3002</p><h2 id="attribute-value-\u9009\u62E9\u5668-2" tabindex="-1"><code>[attribute|=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668-2" aria-hidden="true">#</a></h2><p><code>[attribute|=&quot;value&quot;]</code> \u9009\u62E9\u5668\u7528\u4E8E\u9009\u53D6\u6307\u5B9A\u5C5E\u6027\u4EE5\u6307\u5B9A\u503C\u5F00\u5934\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6 <code>class</code> \u5C5E\u6027\u4EE5 <code>&quot;top&quot;</code> \u5F00\u5934\u7684\u6240\u6709\u5143\u7D20\uFF1A<br> \u6CE8\u91CA\uFF1A\u503C\u5FC5\u987B\u662F\u5B8C\u6574\u6216\u5355\u72EC\u7684\u5355\u8BCD\uFF0C\u6BD4\u5982 class=&quot;top&quot; \u6216\u8005\u540E\u8DDF\u8FDE\u5B57\u7B26\u7684\uFF0C\u6BD4\u5982 class=&quot;top-text&quot;\u3002<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">|=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute-value-\u9009\u62E9\u5668-3" tabindex="-1"><code>[attribute^=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668-3" aria-hidden="true">#</a></h2><p><code>[attribute^=&quot;value&quot;]</code> \u9009\u62E9\u5668\u7528\u4E8E\u9009\u53D6\u6307\u5B9A\u5C5E\u6027\u4EE5\u6307\u5B9A\u503C\u5F00\u5934\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6 <code>class</code> \u5C5E\u6027\u4EE5 <code>&quot;top&quot;</code> \u5F00\u5934\u7684\u6240\u6709\u5143\u7D20\uFF1A<br> \u8DDF\u4E0A\u9762\u7684\u9009\u62E9\u5668\u662F\u4E00\u6837\u7684\uFF0C\u533A\u522B\u662F\u4E0A\u9762\u7684\u503C\u5FC5\u987B\u662F\u5B8C\u6574\u6216\u5355\u72EC\u7684\u5355\u8BCD\uFF0C\u8FD9\u4E2A\u7684\u503C\u4E0D\u5FC5\u662F\u5B8C\u6574\u5355\u8BCD\uFF01<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute-value-\u9009\u62E9\u5668-4" tabindex="-1"><code>[attribute$=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668-4" aria-hidden="true">#</a></h2><p><code>[attribute$=&quot;value&quot;]</code> \u9009\u62E9\u5668\u7528\u4E8E\u9009\u53D6\u6307\u5B9A\u5C5E\u6027\u4EE5\u6307\u5B9A\u503C\u7ED3\u5C3E\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6 <code>class</code> \u5C5E\u6027\u4EE5 <code>&quot;test&quot;</code> \u7ED3\u5C3E\u7684\u6240\u6709\u5143\u7D20\uFF1A<br> \u63D0\u793A\uFF1A\u503C\u4E0D\u5FC5\u662F\u5B8C\u6574\u5355\u8BCD\uFF01<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">$=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="attribute-value-\u9009\u62E9\u5668-5" tabindex="-1"><code>[attribute*=&quot;value&quot;]</code> \u9009\u62E9\u5668 <a class="header-anchor" href="#attribute-value-\u9009\u62E9\u5668-5" aria-hidden="true">#</a></h2><p><code>[attribute*=&quot;value&quot;]</code> \u9009\u62E9\u5668\u9009\u53D6\u5C5E\u6027\u503C\u5305\u542B\u6307\u5B9A\u8BCD\u7684\u5143\u7D20\u3002<br> \u4E0B\u4F8B\u9009\u53D6 <code>class</code> \u5C5E\u6027\u5305\u542B <code>&quot;te&quot;</code> \u7684\u6240\u6709\u5143\u7D20\uFF1A<br> \u63D0\u793A\uFF1A\u503C\u4E0D\u5FC5\u662F\u5B8C\u6574\u5355\u8BCD\uFF01<br></p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">*=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">te</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> yellow</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,24),o=[l],u=JSON.parse('{"title":"\u5C5E\u6027\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"[attribute] \u9009\u62E9\u5668","slug":"attribute-\u9009\u62E9\u5668"},{"level":2,"title":"[attribute=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668"},{"level":2,"title":"[attribute~=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668-1"},{"level":2,"title":"[attribute|=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668-2"},{"level":2,"title":"[attribute^=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668-3"},{"level":2,"title":"[attribute$=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668-4"},{"level":2,"title":"[attribute*=\\"value\\"] \u9009\u62E9\u5668","slug":"attribute-value-\u9009\u62E9\u5668-5"}],"relativePath":"guide/selector.md"}'),t={name:"guide/selector.md"},D=Object.assign(t,{setup(n){return(p,c)=>(s(),a("div",null,o))}});export{u as __pageData,D as default};
