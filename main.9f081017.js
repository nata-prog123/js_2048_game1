parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".game-field"),r=document.querySelector(".start"),t=document.querySelector(".message-start"),n=document.querySelector(".message-win"),o=document.querySelector(".message-over"),i=4,c=4,a=0,u=!0,s=0,f=[],d=[],l=!1;function v(){f=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var r=0;r<i;r++)for(var t=0;t<c;t++){var n=e.rows[r].cells[t],o=f[r][t];n.id=r.toString()+t.toString(),S(n,o)}y(),y()}function m(){for(var e=0;e<i;e++)for(var r=0;r<c;r++)if(0===f[e][r])return!0;return!1}function g(){for(var e=0;e<i-1;e++)for(var r=0;r<c-1;r++)if(f[e][r]===f[e][r+1]||0===f[e][r])return!0;for(var t=0;t<c-1;t++)for(var n=0;n<i-1;n++)if(f[n][t]===f[n+1][t]||0===f[n][t])return!0;return!1}function y(){if(m()&&u)for(var e=!1;!e;){var r=Math.floor(Math.random()*i),t=Math.floor(Math.random()*c);if(0===f[r][t]){f[r][t]=Math.random()<.9?2:4;var n=document.getElementById(r.toString()+t.toString());n.innerText="".concat(f[r][t]),n.classList.add("field-cell--".concat(f[r][t])),e=!0}}}function S(e,r){e.innerText="",e.classList.value="",e.classList.add("field-cell"),r>0&&(e.innerText=r,r<2048&&e.classList.add("field-cell--"+r.toString()),2048===r&&(e.classList.add("field-cell--"+r.toString()),n.classList.remove("hidden")))}function h(e){return e.filter(function(e){return 0!==e})}function L(e){for(var r=h(e),t=0;t<r.length;t++)r[t]===r[t+1]&&(r[t]*=2,r[t+1]=0,s+=r[t]);for(r=h(r);r.length<c;)r.push(0);return r}function w(){for(var e=0;e<i;e++){var r=f[e];r=L(r),f[e]=r;for(var t=0;t<c;t++){S(document.getElementById(e.toString()+t.toString()),f[e][t])}}}function p(){for(var e=0;e<i;e++){var r=f[e];r.reverse(),(r=L(r)).reverse(),f[e]=r;for(var t=0;t<c;t++){S(document.getElementById(e.toString()+t.toString()),f[e][t])}}}function q(){for(var e=0;e<c;e++){var r=[f[0][e],f[1][e],f[2][e],f[3][e]];r=L(r);for(var t=0;t<i;t++){f[t][e]=r[t],S(document.getElementById(t.toString()+e.toString()),f[t][e])}}}function E(){for(var e=0;e<c;e++){var r=[f[0][e],f[1][e],f[2][e],f[3][e]];r.reverse(),(r=L(r)).reverse();for(var t=0;t<i;t++){f[t][e]=r[t],S(document.getElementById(t.toString()+e.toString()),f[t][e])}}}r.addEventListener("click",function(){r.classList.value="",r.classList.add("button","restart"),r.innerText="Restart",t.classList.add("hidden"),o.classList.add("hidden"),document.querySelector(".game-score").innerText=0,s=0,u=!0,v()}),document.addEventListener("keyup",function(e){switch(e.code){case"ArrowLeft":a=s,d=f.map(function(e){return e.slice()}),w(),(l=f.every(function(e,r){return e.every(function(e,t){return e===d[r][t]})}))&&a===s?(y(),u=!1):u=!0,y(),g();break;case"ArrowRight":a=s,d=f.map(function(e){return e.slice()}),p(),(l=f.every(function(e,r){return e.every(function(e,t){return e===d[r][t]})}))&&a===s?(y(),u=!1):u=!0,y(),g();break;case"ArrowUp":a=s,q(),d=f.map(function(e){return e.slice()}),y(),(l=f.every(function(e,r){return e.every(function(e,t){return e===d[r][t]})}))&&a===s?(y(),u=!1):u=!0,g();break;case"ArrowDown":a=s,d=f.map(function(e){return e.slice()}),E(),(l=f.every(function(e,r){return e.every(function(e,t){return e===d[r][t]})}))&&a===s?(y(),u=!1):u=!0,y(),g()}g()||(o.classList.remove("hidden"),o.style.color="#f87474"),document.querySelector(".game-score").innerText=s});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9f081017.js.map