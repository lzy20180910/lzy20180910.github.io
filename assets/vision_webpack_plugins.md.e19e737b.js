import{_ as s,c as a,o as n,U as l}from"./chunks/framework.6b6d2f85.js";const A=JSON.parse('{"title":"什么是plugins","description":"","frontmatter":{},"headers":[],"relativePath":"vision/webpack/plugins.md","lastUpdated":1699513056000}'),p={name:"vision/webpack/plugins.md"},e=l(`<h1 id="什么是plugins" tabindex="-1">什么是plugins <a class="header-anchor" href="#什么是plugins" aria-label="Permalink to &quot;什么是plugins&quot;">​</a></h1><p><code>plugins</code>即插件，<code>webpack</code>内它会像<code>vue</code>那样，对外暴露一些生命周期钩子，让你可以在这些生命周期内处理一些业务逻辑</p><h2 id="常用的plugins" tabindex="-1">常用的plugins <a class="header-anchor" href="#常用的plugins" aria-label="Permalink to &quot;常用的plugins&quot;">​</a></h2><h3 id="使用html-webpack-plugin和clean-webpack-plugin让打包更便捷" tabindex="-1">使用<code>html-webpack-plugin</code>和<code>clean-webpack-plugin</code>让打包更便捷 <a class="header-anchor" href="#使用html-webpack-plugin和clean-webpack-plugin让打包更便捷" aria-label="Permalink to &quot;使用\`html-webpack-plugin\`和\`clean-webpack-plugin\`让打包更便捷&quot;">​</a></h3><p>没有借助插件前，每次打包的时候都要手动删除<code>dist</code>文件夹，还得重新编写<code>index.html</code>文件，大大降低了开发效率，<code>html-webpack-plugin</code>和<code>clean-webpack-plugin</code>帮我们解决了这两个问题</p><h4 id="html-webpack-plugin" tabindex="-1">html-webpack-plugin <a class="header-anchor" href="#html-webpack-plugin" aria-label="Permalink to &quot;html-webpack-plugin&quot;">​</a></h4><p>作用：每次打包结束后会生成一个<code>index.html</code>文件。 在<code>webpack.config.js</code>配置文件中写如下代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// HtmlWebpackPlugin插件可以在webpack打包结束后，自动生成一个html文件，并把打包后的js引入到该文件中</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/index.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 指定模板文件，这样要在dist文件夹生成html文件时，会以这个src下的index.html作为模板，把打包好的js文件插入都里面，vue脚手架下打包后在dist文件夹下生成的index.html文件相信应该也是这样使用，以public文件夹下的index.html作为模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="clean-webpack-plugin" tabindex="-1">clean-webpack-plugin <a class="header-anchor" href="#clean-webpack-plugin" aria-label="Permalink to &quot;clean-webpack-plugin&quot;">​</a></h4><p>作用：每次打包之前先删除<code>dist</code>文件夹</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// CleanWebpackPlugin插件可以在webpack打包之前，先删除指定的文件夹（具体删除哪个根据new CleanWebpackPlugin([&#39;dist&#39;])时传入的参数决定）</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// 这个插件可以在webpack打包之前，先删除指定的文件夹，比如这里是指定删除dist文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,11),o=[e];function c(t,i,r,D,y,d){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
