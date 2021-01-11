/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "668e7f2a5b4d98b77e3b9605b080425e"
  },
  {
    "url": "assets/css/0.styles.de94988a.css",
    "revision": "00fdc500fa875f060e47f3afa710e022"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4efcdf61.js",
    "revision": "ab8331e36a850a4c316bff134783b25e"
  },
  {
    "url": "assets/js/10.e1a0e570.js",
    "revision": "614d778c95b2cf4594fdb0d854319744"
  },
  {
    "url": "assets/js/11.b2db74b6.js",
    "revision": "fce6025d874eb0f9eba2ddc53fea641e"
  },
  {
    "url": "assets/js/12.6b50b747.js",
    "revision": "39a56f7b01266a08cb3106693d86304c"
  },
  {
    "url": "assets/js/13.3e93290f.js",
    "revision": "dec131c68028308daf0270baa980a48c"
  },
  {
    "url": "assets/js/14.cc247400.js",
    "revision": "5e9eb5fb06582ef7b789bf69c8db13a2"
  },
  {
    "url": "assets/js/15.86c8050e.js",
    "revision": "1d50aafd5119ad166c4f02936eb4b17d"
  },
  {
    "url": "assets/js/16.34ab9af6.js",
    "revision": "00ed70ca39ef7f3889fcf3b6406c5403"
  },
  {
    "url": "assets/js/17.6be509e1.js",
    "revision": "760d97630da687ef921e3cb205b512c9"
  },
  {
    "url": "assets/js/18.b00736f7.js",
    "revision": "45ad1dbe54e6c51f5aefb0042d573f0b"
  },
  {
    "url": "assets/js/19.8740778f.js",
    "revision": "677c23659371e61b3b4fbe0ff2d21569"
  },
  {
    "url": "assets/js/20.c42310fd.js",
    "revision": "6e5567187509d24e28b66fd83e6a5b73"
  },
  {
    "url": "assets/js/21.be6a5f86.js",
    "revision": "09b2341c7ba8d4a36a39770d47f56e84"
  },
  {
    "url": "assets/js/22.b69ef320.js",
    "revision": "c50816c16bf642d6779adfee244a2ab3"
  },
  {
    "url": "assets/js/23.fc628cc6.js",
    "revision": "6f093b603f2e7956bc6ff8dd89dca3a9"
  },
  {
    "url": "assets/js/24.7e548385.js",
    "revision": "27c35fd7fe52571eda6534cad783e86d"
  },
  {
    "url": "assets/js/25.11a8dc77.js",
    "revision": "062152576586176022e94b91e2a3d49f"
  },
  {
    "url": "assets/js/3.a124c22a.js",
    "revision": "97e6d91ba1efe38d99e7b61dbadce275"
  },
  {
    "url": "assets/js/4.06147c2a.js",
    "revision": "b966e7246f970d93797567fb2ca77797"
  },
  {
    "url": "assets/js/5.a08dcacc.js",
    "revision": "1f90e59a1b0143e06f63affe127a9026"
  },
  {
    "url": "assets/js/6.b5a6575a.js",
    "revision": "9ddd5b2338f9ceae780bfa5fbaeae6b2"
  },
  {
    "url": "assets/js/7.4f7198a6.js",
    "revision": "48df0028ad7501ec016fd530942a993a"
  },
  {
    "url": "assets/js/8.2a4114cd.js",
    "revision": "5dc4999ca9e24932e1e3f8bf45099c84"
  },
  {
    "url": "assets/js/9.2a88cae0.js",
    "revision": "c216dc0495f6bca612ace1c655eefe19"
  },
  {
    "url": "assets/js/app.a5d7cac8.js",
    "revision": "a9c827e87dd7714a4408d8739465780c"
  },
  {
    "url": "bg.png",
    "revision": "e60b42325cd2d6ee889724419d444731"
  },
  {
    "url": "categories/devOps/index.html",
    "revision": "158c44e92b30fa864385ec6944b06395"
  },
  {
    "url": "categories/index.html",
    "revision": "17092dee94f18b9c2f46be5037ca21d7"
  },
  {
    "url": "categories/issue/index.html",
    "revision": "ec657830d8bb7340a06eb698753db791"
  },
  {
    "url": "categories/java/index.html",
    "revision": "06a8483d178a62fea9aa8761892a1e9f"
  },
  {
    "url": "categories/mac/index.html",
    "revision": "5939cfb8ea84d4ebda18d4a0cd43933c"
  },
  {
    "url": "head.png",
    "revision": "8477843814635c1714d6d252986b0361"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6fb948cb3c07e93a659e32904f14948f"
  },
  {
    "url": "tag/api/index.html",
    "revision": "4de32ee886a3e7b7642a7f5c6d85e288"
  },
  {
    "url": "tag/confluence/index.html",
    "revision": "06612a64b1a1ddb7c742ffc9a07de788"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "af2ac7027097a94e656ff7b6e3d167b4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bcde73e43f50bb58bda0b0086109c204"
  },
  {
    "url": "tag/index.html",
    "revision": "8287a766c724994268c503314865dcdf"
  },
  {
    "url": "tag/issue/index.html",
    "revision": "f05a7ecec50c2d25ea3ff191af85d569"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3aa37badce2f68d19d99f6f5bb485dbc"
  },
  {
    "url": "tag/jdk/index.html",
    "revision": "93954cea16682bdc9adff406ac6828cd"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "1c7fa33e201c54e4da87c9943cef0361"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c5e37ba3ccd2bb25af74477a69913072"
  },
  {
    "url": "tag/mac/index.html",
    "revision": "584d90b8f7fcfb4a5b4baa9919202ec5"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "71d1876e63615f297c60c0c165437613"
  },
  {
    "url": "tag/rancher/index.html",
    "revision": "45f124661d908657f5c5c1e2316ab9e3"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "c6f06f8319769255fde8ded99b6e1abf"
  },
  {
    "url": "tag/vagrant/index.html",
    "revision": "e5d188ae459336931466623ca14436f3"
  },
  {
    "url": "tag/vbox/index.html",
    "revision": "630a1b8883c3e33942f83d9c0c20bd87"
  },
  {
    "url": "tag/vm/index.html",
    "revision": "1c8ae27ad56b7727aa282e3ce9af15c8"
  },
  {
    "url": "tag/内核/index.html",
    "revision": "3b9c81a1a9a65ddf0eef95d2ade793af"
  },
  {
    "url": "tag/前后端分离/index.html",
    "revision": "c2fa699355e662dffd1c764514798dfb"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "d9489cdd888a8944f25810f77319005e"
  },
  {
    "url": "tag/防火墙/index.html",
    "revision": "54320dec1d57b2b364dd67dbf463c971"
  },
  {
    "url": "timeline/index.html",
    "revision": "c126ee0378bec865ddf96dbe1fd1f133"
  },
  {
    "url": "views/devOps/2018/linux上jdk8和快速安装和配置.html",
    "revision": "24691b937fafda7ade790e52bc7d0073"
  },
  {
    "url": "views/devOps/2019/centos6yum方式升级内核.html",
    "revision": "ff16f3db32db940f32b328e5b1e28f9f"
  },
  {
    "url": "views/devOps/2019/centos关闭防火墙命令.html",
    "revision": "21b5694f9ce6cb49a15bebf6b4880c58"
  },
  {
    "url": "views/devOps/2019/dockerrancher搭建.html",
    "revision": "542404dcf86e0af4ca8344a60772ada6"
  },
  {
    "url": "views/devOps/2019/docker部署confluence并破解.html",
    "revision": "c5c95091123fb69eb0df16377eb3eba6"
  },
  {
    "url": "views/devOps/2019/docker部署mysql完全手册.html",
    "revision": "b55bcea5bcf944988d17ce4a4bea98a6"
  },
  {
    "url": "views/devOps/2019/Vmware虚拟机设置固定IP地址.html",
    "revision": "cccc838026b449b85002576df74eb6d7"
  },
  {
    "url": "views/devOps/2019/持续集成与容器管理.html",
    "revision": "63e362c42ae9997c8dbcbd6f5c023732"
  },
  {
    "url": "views/devOps/2019/通过官方脚本快速安装docker和关于docker日志的配置.html",
    "revision": "c881f823985593e154ececa14fe2282c"
  },
  {
    "url": "views/issue/2019/前后端跨域问题解决.html",
    "revision": "8436fe546c022b70f4ef6d09552044b7"
  },
  {
    "url": "views/java/2019/如何生成漂亮的静态文档说明页.html",
    "revision": "50cf246558f7f2746381b334b20256d2"
  },
  {
    "url": "views/mac/2018/vbox和vagrant在mac上快速搭建虚拟机.html",
    "revision": "40065f30af62afbe30059e769fdee4ab"
  },
  {
    "url": "views/mac/2019/如何设置mac的端口映射转发.html",
    "revision": "f863b38aed3c1123e2ad319af34776e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
