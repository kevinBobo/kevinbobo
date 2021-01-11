(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{519:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("原文链接 : https://www.jianshu.com/p/b6cfd0fae18a")]),a._v(" "),t("h2",{attrs:{id:"环境说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境说明")]),a._v(" "),t("ul",[t("li",[a._v("linux：centos7")]),a._v(" "),t("li",[a._v("docker"),t("br"),a._v(" "),t("code",[a._v("Docker version 1.13.1, build dded712/1.13.1")])]),a._v(" "),t("li",[a._v("rancher：v1.6.18")])]),a._v(" "),t("blockquote",[t("p",[a._v("本环境搭建需要先安装docker，docker安装这里不写了，大家自行百度吧。")])]),a._v(" "),t("h3",{attrs:{id:"创建mysql容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建MySQL容器")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("创建挂载目录")]),a._v(" "),t("p",[t("code",[a._v("mkdir -p /opt/datas/mysql/{datadir,conf.d,logs}")])])]),a._v(" "),t("li",[t("p",[a._v("创建mysql容器,设置密码123456")]),a._v(" "),t("div",{staticClass:"language-docker line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[a._v("docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("name mysqldb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("p 3306"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3306 \\\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("v /opt/datas/mysql/datadir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql \\\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("v /opt/datas/mysql/conf.d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/etc/mysql/conf.d \\\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("e MYSQL_ROOT_PASSWORD=123456 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("d mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("5.7 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("查询测试")]),a._v(" "),t("p",[t("code",[a._v('docker exec -it mysqldb mysql -p123456 -e "show databases;"')])]),a._v(" "),t("p",[a._v("返回如下信息说明mysql数据库初始化成功：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql: [Warning] Using a password on the command line interface can be insecure.\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cattle             |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+ \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("创建库并授权(库,用户,密码都为cattle)")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker exec -it mysqldb mysql -p123456 -e \"\n  create database if not exists cattle collate = 'utf8_general_ci' character set = 'utf8';\n  grant all on cattle.* to 'cattle'@'%' identified by 'cattle';\n  grant all on cattle.* to 'cattle'@'localhost' identified by 'cattle';\n  flush privileges;show databases;\" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("运行mysql容器，提示如下错误：")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-d409a1ed.png",alt:"image.png"}})]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("解决方法：关闭linux selinux  \n查看：[https://blog.csdn.net/lijiqidong/article/details/78482908](https://blog.csdn.net/lijiqidong/article/details/78482908)\n")])])]),t("h3",{attrs:{id:"创建rancher容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建rancher容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建rancher容器")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("运行rancher容器"),t("br"),a._v("\nmysql机器IP：mysql容器所在的机器IP")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -d --name rancher --link=mysqldb:db \\\n--restart=unless-stopped -p 8080:8080 -p 9345:9345 rancher/server:latest \\\n--db-host db --db-port 3306 --db-user cattle --db-pass cattle --db-name cattle \\\n--advertise-address mysql机器IP \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("等几分钟,当数据表创建超过100张时,可以打开浏览器访问rancher web管理页面了。"),t("br"),a._v("\n查询cattle数据库中表的数量，显示为109时安装完成")])]),a._v(" "),t("li",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"})])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('#查询cattle数据库中表的数量\ndocker exec -it mysqldb mysql -u"cattle" -h localhost -p"cattle" -e "use cattle;show tables;" |wc -l \n```\n')])])]),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-94ef0bc7.png",alt:"image.png"}})]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("cattle数据库\n")])])]),t("ul",[t("li",[a._v("rancher web管理页面"),t("br"),a._v("\n访问：http://主机IP:8080")])]),a._v(" "),t("h3",{attrs:{id:"添加主机-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加主机-节点","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加主机(节点)")]),a._v(" "),t("p",[a._v("基础架构——主机——添加主机(保存)——复制第5部代码，在需要管理的docker机器节点执行。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-f4abf20a.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("添加docker主机节点")]),a._v(" "),t("h3",{attrs:{id:"访问控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问控制","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问控制")]),a._v(" "),t("p",[a._v("系统管理--访问控制--开启访问控制")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.hacpai.com/file/2019/04/image-97f36394.png",alt:"image.png"}})])])},[],!1,null,null,null);s.default=n.exports}}]);