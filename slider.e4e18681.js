parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Nwn9":[function(require,module,exports) {
var e=1;function t(){l(e+=1)}function n(){l(e-=1)}function c(t){l(e=t)}function l(t){var n,c=document.getElementsByClassName("slider-item"),l=document.getElementsByClassName("slider-dots_item");for(t>c.length&&(e=1),t<1&&(e=c.length),n=0;n<c.length;n++)c[n].style.display="none";for(n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");c[e-1].style.display="block",l[e-1].className+=" active"}l(e),document.querySelector(".button-slayder .prev").addEventListener("click",n),document.querySelector(".button-slayder .next").addEventListener("click",t),document.querySelector(".item-1").addEventListener("click",c(1)),document.querySelector(".item-2").addEventListener("click",c(2)),document.querySelector(".item-3").addEventListener("click",c(3));
},{}]},{},["Nwn9"], null)
//# sourceMappingURL=/BarberShop-group-5/slider.e4e18681.js.map