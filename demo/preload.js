!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){var n=o(1),a=o(3),r=o(2),i={};i.connectorLoad=n,i.imageLoad=a,i.cssLoad=r,window.Preload=i},function(e,t,o){var n=function(e){"use strict";this.opts={isDebug:!1,connector:null,completeLoad:function(){}},this.params={_createXHR:null,id:0,count:0,head:document.getElementsByTagName("head")[0]};for(var t in e)this.opts[t]=e[t];this._init()};n.prototype={_init:function(){var e=this,t=e.opts,o=e.params;null!=t.connector&&(o._createXHR=e.getXHR(),o.count=Object.getOwnPropertyNames(t.connector).length,e._getData())},_getData:function(){var e=this,t=e.opts;e.params;for(var o in t.connector)t.connector[o].url||e.throwIf(o+"队列URL不存在"),t.connector[o].jsonp?e.asynGetData(t.connector[o]):e.syncGetData(t.connector[o])},syncGetData:function(e){var t=this,o=this.params,n=e.url||"",a=e.type.toLocaleUpperCase(),r=e.data||{},i=t.getTimeOut(e.loadingOverTime,e.loadingOverTimeCB);"GET"!==a&&"POST"!==a&&(a="GET"),o._createXHR.onreadystatechange=function(){4==o._createXHR.readyState&&(clearTimeout(i),o._createXHR.status>=200&&o._createXHR.status<300||304===o._createXHR.status?e.success(o._createXHR.responseText):(t.throwIf("对"+n+"请求失败，状态码为："+o._createXHR.status),e.error(o._createXHR)),t.isCompleteAllLoad())},o._createXHR.open(a,"POST"==a?n:n+"?"+t.getQueryString(r),e.async||!0),o._createXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o._createXHR.send("POST"==a?t.getQueryString(r):null)},asynGetData:function(e){var t=this,o=this.params,n=e.url||"",a=e.loadingOverTime||12,r=e.loadingOverTimeCB||function(){},i=t.getTimeOut(a,r),s=document.createElement("script");s.src=n,o.head.appendChild(s),s.onload=function(){clearTimeout(i),o.head.removeChild(s),t.isCompleteAllLoad()}},getXHR:function(){return"undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:void throwIf("only Support IE9+")},getTimeOut:function(e,t){return setTimeout(function(){t()},1e3*e)},throwIf:function(e){var t=this.opts,e=e||"未知错误";return t.isDebug?void alert(e):void 0},getQueryString:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},isCompleteAllLoad:function(){var e=this,t=e.opts,o=e.params;++o.id>=o.count&&t.completeLoad()}},e.exports=n},function(e,t,o){var n=function(e){"use strict";this.opts={isDebug:!1,sources:null};for(var t in e)this.opts[t]=e[t];this._init()};n.prototype={_init:function(){var e=this;e.opts,e.params;e.loadCss()},_initData:function(){var e=this,t=e.opts,o=e.params;o.linkNote.rel="stylesheet";for(var n in t.sources){var a=t.sources[n].tag;"head"==a||"body"==a?o.linkLocal.push(a):o.linkLocal.push("head");var r=t.sources[n].callback||function(){};o.linkCB.push(r);var i=t.sources[n].media||"all";o.linkMedia.push(i)}},loadCss:function(){var e=this,t=e.opts;e.params;for(var o in t.sources){var n=document.createElement("link");n.rel="stylesheet";var a=t.sources[o].tag;if(a="body"==a?document.body:document.head,n.href=t.sources[o].href,n.media=t.sources[o].media||"all",a.appendChild(n),t.sources[o].callback&&(n.addEventListener&&n.addEventListener("load",t.sources[o].callback),n.attachEvent&&n.attachEvent("onload",t.sources[o].callback),"isApplicationInstalled"in navigator))for(var r=n.href,o=sheets.length;o--;)if(sheets[o].href===r)return t.sources[o].callback()}}},e.exports=n},function(e,t,o){var n=function(e){"use strict";this.opts={isDebug:!1,sources:null,progress:function(){},completeLoad:function(){},config:{timeOut:e.loadingOverTime||15,timeOutCB:e.loadingOverTimeCB||function(){}}},this.params={echetotal:0,echelon:[],echelonlen:[],echeloncb:[],id:0,flag:0,allowType:["jpg","jpeg","png","gif"],total:0,completedCount:0,imgNode:[],imgNodePSrc:[],audioNode:[],audioNodePSrc:[]};for(var t in e)this.opts[t]=e[t];this._init()};n.prototype={_init:function(){var e=this,t=(e.opts,e.params);e._initData(),e._load(t.echelon[0],t.echeloncb[0],t.echelonlen)},_initData:function(){var e=this,t=e.opts,o=e.params;if(null!==t.sources){o.echetotal=Object.getOwnPropertyNames(t.sources).length;for(var n in t.sources){for(var a=0,r=t.sources[n].source.length;r>a;a++)o.echelon.push(t.sources[n].source[a]);o.echelonlen.push(t.sources[n].source.length),o.echeloncb.push("undefined"==typeof t.sources[n].callback?null:t.sources[n].callback)}for(var n=1,r=o.echelonlen.length;r>n;n++)o.echelonlen[n]=o.echelonlen[n-1]+o.echelonlen[n];o.total=o.echelon.length,o.imgNode=document.getElementsByTagName("img");for(var n=0,r=o.imgNode.length;r>n;n++)o.imgNode[n].attributes.pSrc&&(o.imgNodePSrc[n]=o.imgNode[n].attributes.pSrc.value);o.audioNode=document.getElementsByTagName("audio");for(var n=0,r=o.audioNode.length;r>n;n++)o.audioNode[n].attributes.pSrc&&(o.audioNodePSrc[n]=o.audioNode[n].attributes.pSrc.value)}},_load:function(e,t,o){var n=this,a=n.opts,r=n.params;if(r.id>=o[r.flag]&&(null!=r.echeloncb[r.flag]&&r.echeloncb[r.flag](),++r.flag),r.id>=r.total)return void a.completeLoad();if(n.isImg(e)){var i=new Image,s=setTimeout(function(){a.config.timeOutCB()},1e3*a.config.timeOut);i.src=e,i.onload=function(){clearTimeout(s),a.progress(++r.completedCount,r.total);for(var i=0,c=r.imgNodePSrc.length;c>i;i++)if(r.imgNodePSrc[i]==e){r.imgNode[i].src=r.imgNodePSrc[i];break}n._load(r.echelon[++r.id],t,o)},i.onerror=function(){a.progress(++r.completedCount,r.total),n._load(r.echelon[++r.id],t,o)}}else n.throwIf("使用未允许类型图片或非图片类型"),a.progress(++r.completedCount,r.total),n._load(r.echelon[++r.id],t,o)},isImg:function(e){for(var t=this,o=(t.opts,t.params),n=e.split(".").pop(),a=0,r=o.allowType.length;r>a;a++)if(n==o.allowType[a])return!0;return!1},throwIf:function(e){var t=this.opts,e=e||"未知错误";return t.isDebug?void alert(e):void 0}},e.exports=n}]);