(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{523:function(a,e,t){"use strict";t.r(e);var s=t(6),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"版本列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 版本列表")]),a._v(" "),t("p",[a._v("为了方便后期rancher的使用,我查询了rancher支持的版本\nrancher的官方网站\nhttps://rancher.com/docs/rancher/v1.6/en/hosts/#supported-docker-versions")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-ae0a167a.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"_1-挑选一个自己想使用的docker版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-挑选一个自己想使用的docker版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 挑选一个自己想使用的docker版本")]),a._v(" "),t("p",[a._v("进入liunx安装")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-2daac55d.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"_2-更改阿里云镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-更改阿里云镜像加速","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 更改阿里云镜像加速")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-b0121b28.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("参考阿里云的配置,请注册自己的阿里云账号")]),a._v(" "),t("h2",{attrs:{id:"日志的设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志的设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 日志的设置")]),a._v(" "),t("p",[a._v("1、新建/etc/docker/daemon.json，若有就不用新建了")]),a._v(" "),t("p",[a._v("2、添加log-dirver和log-opts参数，样例如下")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"log-driver":"json-file",\n  "log-opts":{ "max-size" :"100m","max-file":"1"}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("max-file=3，意味着一个容器有三个日志，分别是id+.json、id+1.json、id+2.json")]),a._v(" "),t("p",[a._v("3、重启")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl daemon-reload \nsudo systemctl restart docker\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);