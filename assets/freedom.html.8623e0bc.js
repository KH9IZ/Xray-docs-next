import{r as o,o as e,c as n,a as s,b as t,w as a,F as u,d as c,e as l}from"./app.68ac6f79.js";const p={},d=c('<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom" aria-hidden="true">#</a> Freedom</h1><p>Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>在目标地址为域名时, 配置相应的值, Freedom 的行为模式如下:</p>',6),r=s("li",null,[s("code",null,'"AsIs"'),l(": Freedom 通过系统 DNS 服务器解析获取 IP, 向此域名发出连接.")],-1),i=s("code",null,'"UseIP"',-1),q=l("、"),b=s("code",null,'"UseIPv4"',-1),m=l(" 和 "),h=s("code",null,'"UseIPv6"',-1),v=l(": Xray 使用 "),I=l("内置 DNS 服务器"),k=l(" 解析获取 IP, 向此域名发出连接. 默认值为 "),P=s("code",null,'"AsIs"',-1),f=l("。"),g={class:"custom-container tip"},y=s("p",{class:"custom-container-title"},"TIP 1",-1),j=l("当使用 "),F=s("code",null,'"UseIP"',-1),U=l(" 模式，并且 "),T=l("出站连接配置"),x=l(" 中指定了 "),_=s("code",null,"sendThrough",-1),A=l(" 时，Freedom 会根据 "),L=s("code",null,"sendThrough",-1),S=l(" 的值自动判断所需的 IP 类型，IPv4 或 IPv6。"),D=c('<div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>当使用 <code>&quot;UseIPv4&quot;</code> 或 <code>&quot;UseIPv6&quot;</code> 模式时，Freedom 会只使用对应的 IPv4 或 IPv6 地址。当 <code>sendThrough</code> 指定了不匹配的本地地址时，将导致连接失败。</p></div><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom 会强制将所有数据发送到指定地址（而不是 inbound 指定的地址）。</p><p>其值为一个字符串，样例：<code>&quot;127.0.0.1:80&quot;</code>，<code>&quot;:1234&quot;</code>。</p><p>当地址不指定时，如 <code>&quot;:443&quot;</code>，Freedom 不会修改原先的目标地址。 当端口为 <code>0</code> 时，如 <code>&quot;xray.com: 0&quot;</code>，Freedom 不会修改原先的端口。</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',6),C=l("用户等级，连接会使用这个用户等级对应的 "),N=l("本地策略"),O=l("。"),w=l("userLevel 的值, 对应 "),R=l("policy"),X=l(" 中 "),z=s("code",null,"level",-1),B=l(" 的值。 如不指定, 默认为 0。");p.render=function(c,l){const p=o("RouterLink");return e(),n(u,null,[d,s("ul",null,[r,s("li",null,[i,q,b,m,h,v,t(p,{to:"/en/config/dns.html"},{default:a((()=>[I])),_:1}),k,P,f])]),s("div",g,[y,s("p",null,[j,F,U,t(p,{to:"/en/config/outbound.html#outboundobject"},{default:a((()=>[T])),_:1}),x,_,A,L,S])]),D,s("p",null,[C,t(p,{to:"/en/config/policy.html#levelpolicyobject"},{default:a((()=>[N])),_:1}),O]),s("p",null,[w,t(p,{to:"/en/config/policy.html#policyobject"},{default:a((()=>[R])),_:1}),X,z,B])],64)};export default p;
