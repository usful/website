export default ({ body }) => {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Usful ❤ 2017</title>
      <meta name="description" content="Usful">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    
      <link rel="shortcut icon" href="/public/logo-color.png" type="image/png">
      <link rel="stylesheet" type="text/css" href="/css/reset.css">
      <link rel="stylesheet" type="text/css" href="/css/main.css">
      <link rel="stylesheet" type="text/css" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
      <link href="//fonts.googleapis.com/css?family=Adamina" rel="stylesheet">
      <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyC_KpWQ7HaLV8nyw8OaoLUr0K8kUAMepl4"></script>
      <!-- Global Site Tag (gtag.js) - Google Analytics -->
      <script async src="//www.googletagmanager.com/gtag/js?id=UA-57226902-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
      </script>
    </head>
    <body>
      <div id="root">${body}</div>
      <script>!function(e){function __webpack_require__(r){if(_[r])return _[r].exports;var n=_[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var r=window.webpackJsonp;window.webpackJsonp=function(_,t,o){for(var c,i,a,u=0,p=[];u<_.length;u++)i=_[u],n[i]&&p.push(n[i][0]),n[i]=0;for(c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);for(r&&r(_,t,o);p.length;)p.shift()();if(o)for(u=0;u<o.length;u++)a=__webpack_require__(__webpack_require__.s=o[u]);return a};var _={},n={2:0};__webpack_require__.e=function(e){function onScriptComplete(){o.onerror=o.onload=null,clearTimeout(c);var r=n[e];0!==r&&(r&&r[1](new Error("Loading chunk "+e+" failed.")),n[e]=void 0)}var r=n[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var _=new Promise(function(_,t){r=n[e]=[_,t]});r[2]=_;var t=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.timeout=12e4,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.src=__webpack_require__.p+""+{0:"bf75ff5f00729a94a92b",1:"96fc8a52c47e20415eb5"}[e]+".js";var c=setTimeout(onScriptComplete,12e4);return o.onerror=o.onload=onScriptComplete,t.appendChild(o),_},__webpack_require__.m=e,__webpack_require__.c=_,__webpack_require__.d=function(e,r,_){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:_})},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__.oe=function(e){throw console.error(e),e}}([]);</script>
      <script src="/js/index_bundle.96fc8a52c47e20415eb5.js" type="text/javascript"></script>
      <script src="/js/index_bundle.bf75ff5f00729a94a92b.js" type="text/javascript"></script>
    </html>
  `;
}