(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Qetd:function(n,t,e){"use strict";var i=Object.assign.bind(Object);n.exports=i,n.exports.default=n.exports},oDVF:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiCards",function(){return e("pWF/")}])},"pWF/":function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),r=e.n(i).a.createElement;t.default=function(){var n=Object(i.useState)([]),t=n[0],e=n[1];return Object(i.useEffect)((function(){fetch("/api").then((function(n){return n.json()})).then((function(n){return e(n)}))}),[]),t?r("div",null,t.map((function(n){return r("div",{id:n,style:{width:"300px",height:"300px",background:"gray",margin:"12px"}})}))):"loading"}}},[["oDVF",0,1]]]);