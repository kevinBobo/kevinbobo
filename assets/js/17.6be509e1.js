(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{520:function(e,a,t){"use strict";t.r(a);var s=t(6),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"_1-运行confluence容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行confluence容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 运行confluence容器")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d --name confluence -p 8090:8090  --link mysql --user root:root cptactionhank/atlassian-confluence:latest\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果没有安装mysql,可以参考"),t("RouterLink",{attrs:{to:"/views/devOps/2019/[https://blog.kevinbobo.top/views/devOps/2019/docker部署mysql完全手册.html#_1-1从mysql命令行客户端连接到mysql](https://blog.kevinbobo.top/views/devOps/2019/docker部署mysql完全手册.html#_1-1从mysql命令行客户端连接到mysql)"}},[e._v("docker部署mysql完全手册")])],1),e._v(" "),t("blockquote",[t("p",[e._v("注意: mysql8.0+可能引起未知异常错误,最好使用mysql:5.7,可以阅读"),t("a",{attrs:{href:"https://confluence.atlassian.com/doc/supported-platforms-207488198.html#SupportedPlatforms-Databases",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方排错手册"),t("OutboundLink")],1),e._v("来查看confluence版本所需要的mysql版本")])]),e._v(" "),t("h3",{attrs:{id:"_1-1-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-初始化","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 初始化")]),e._v(" "),t("p",[e._v("访问"),t("a",{attrs:{href:"http://host-to-server:8090/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ip:8090/"),t("OutboundLink")],1),e._v(" 就可以看到Confluence的初始化和配置页面。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kevinbobo/oss@master/zVyF6Y.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_1-2-选择语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-选择语言","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 选择语言")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kevinbobo/oss@master/C2YT1b.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_1-3-获取使用lience"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-获取使用lience","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 获取使用lience")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kevinbobo/oss@master/A6fMsG.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_1-4-下载破解包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-下载破解包","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.4 下载破解包")]),e._v(" "),t("p",[e._v("链接:https://pan.baidu.com/s/1CVcgum0YMokhaXNeSzFu9Q  密码:6zdp")]),e._v(" "),t("h2",{attrs:{id:"_2-破解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-破解","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 破解")]),e._v(" "),t("h3",{attrs:{id:"_2-1-进入confluence容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-进入confluence容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 进入confluence容器")]),e._v(" "),t("p",[t("code",[e._v("docker exec -it confluence /bin/sh")])]),e._v(" "),t("h2",{attrs:{id:"_2-2-备份要替换的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-备份要替换的文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 备份要替换的文件")]),e._v(" "),t("p",[e._v("用下载的文件替换atlassian-extras-decoder-v2-3.x.jar/atlassian-universal-plugin-manager-plugin-2.22.x.jar文件（该文件下载到/opt下，替换前必须做之前的文件备份，方便回退）")]),e._v(" "),t("p",[e._v("备份要替换的文件")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mv /opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.3.0.jar /mnt/\nmv /opt/atlassian/confluence/confluence/WEB-INF/atlassian-bundled-plugins/atlassian-universal-plugin-manager-plugin-2.22.5.jar /mnt\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2-3-替换破解文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-替换破解文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 替换破解文件")]),e._v(" "),t("p",[e._v("将下载的破解文件替换对应的jar")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker cp atlassian-extras-decoder-v2-3.2.jar confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/\n\ndocker cp atlassian-universal-plugin-manager-plugin-2.22.jar confluence:/opt/atlassian/confluence/confluence/WEB-INF/atlassian-bundled-plugins/\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-4-重新启动confluence容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-重新启动confluence容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.4 重新启动confluence容器")]),e._v(" "),t("p",[e._v("然后继续访问"),t("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fip%3A8090",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ip:8090"),t("OutboundLink")],1),e._v("，接着注册confluence的key")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/kevinbobo/oss@master/2jIkPf.png",alt:""}})])])},[],!1,null,null,null);a.default=n.exports}}]);