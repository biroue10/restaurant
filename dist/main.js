(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.header{\n    display: flex;\n    background-color: #ffde73;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\nul{\n    display: flex;\n}\nul li{\n    list-style: none;\n    padding: 10px;\n    text-transform: uppercase;\n    border: 1px solid white;\n    margin: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-weight: 900;\n}\n.footer{\n    background-color: #ffde73;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: black;\n    height: 6vh;\n    width: 100%;\n}\n.home{\n    height: 160vh;\n    border: 1px solid #c16a08;\n    margin: auto;\n    display: flex;\n    width: 90%;\n    flex-direction: column;\n    align-items: center;\n    /* justify-content: center; */\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border-radius: 10px;\n    background-color: #ffde73;\n}\n.home div{\n    border: 5px solid #c16a08;\n    width: 80%;\n    text-align: center;\n    margin: 50px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 10px;\n    background-color: #ffc60b;\n    margin: auto;\n}\n.contact{\n    border: 1px solid #c16a08;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    height: 100vh;\n    border-radius: 10px;\n    background-color: #ffde73;\n    margin: 10px auto;\n\n}\n.contact div{\n    border: 5px solid #c16a08;\n    width: 50%;\n    text-align: center;\n    margin: 50px;\n    border-radius: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: #ffc60b;\n}\n.menu{\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    margin: auto;\n    border: 1px solid #c16a08;\n    height: 100vh;\n    border-radius: 10px;\n    background-color: #ffde73;\n    margin: 10px auto;\n    align-items: center;\n}\n.menu p {\n    border: 5px solid #c16a08;\n    width: 50%;\n    text-align: center;\n    margin: 50px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 10px;\n    background-color: #ffc60b;\n}\n.home h1, .menu h1, .contact h1{\n    text-transform: uppercase;\n    border: 1px solid #ffde73;\n    margin: 50px;\n}\n.home h3, .menu h3, .contact h3{\n    text-transform: uppercase;\n    margin-bottom: 10px;\n}\niframe{\n    width: 100%;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=r(u,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),p=n(589),m=n.n(p),u=n(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;function h(e,t,n,o){const r=document.createElement("div"),a=document.createElement("h3");a.textContent=e;const c=document.createElement("p");c.textContent=t;const i=document.createElement("p");i.textContent=n;const d=document.createElement("p");return d.textContent=o,r.append(a,c,i,d),r}const x=function(){const e=document.createElement("div");return e.append(function(){const e=document.createElement("div");return e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home"),e.classList.add("active");const t=document.createElement("h1"),n=document.createElement("div"),o=document.createElement("p");o.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";const r=document.createElement("h3");r.textContent="Who are we?",n.append(r,o);const a=document.createElement("div"),c=document.createElement("h3");c.textContent="Hours";const i=document.createElement("p");i.textContent="Sunday: 8am - 8pm";const d=document.createElement("p");d.textContent="Monday: 6am - 6pm";const s=document.createElement("p");s.textContent="Tuesday: 6am - 6pm";const l=document.createElement("p");l.textContent="Wednesday: 6am - 6pm";const p=document.createElement("p");p.textContent="Thursday: 6am - 10pm";const m=document.createElement("p");m.textContent="Friday: 6am - 10pm";const u=document.createElement("p");u.textContent="Saturday: 8am - 10pm",a.append(c,i,d,s,s,l,p,m,u);const f=document.createElement("div"),h=document.createElement("p");h.textContent="123 Forest Drive, Forestville, Maine";const x=document.createElement("div");x.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.94349687302!2d-7.557224000000001!3d33.59918390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ccf77c009ce3%3A0x89bdfd73a580b00b!2sAmoud%20P%C3%A2tisserie%20A%C3%AFn%20Sebaa!5e0!3m2!1sfr!2sma!4v1688901444369!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';const y=document.createElement("h3");return y.textContent="Location",f.append(y,h,x),t.textContent="biroue isaac restaurant",e.append(t,n,a,f),e}()),e}(),function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="our menu",e.classList.add("menu");const n=document.createElement("p");n.textContent="this is the first paragraphe";const o=document.createElement("p");o.textContent="this is the second paragraphe";const r=document.createElement("p");return r.textContent="this is the third paragraphe",e.append(t,n,o,r),e}()),e}(),function(){const e=document.createElement("div");return e.textContent="",e.appendChild(function(){const e=document.createElement("h1");e.textContent="contacts info";const t=document.createElement("div");return t.classList.add("contact"),t.appendChild(e),t.appendChild(h("Mama Bear","Chef","555-555-5554","totallyRealEmail@notFake.com")),t.appendChild(h("Papa Bear","Manager","555-555-5555","perfectlyRealEmail@notFake.com")),t.appendChild(h("Baby Bear","Waiter","555-555-5556","totallyRealEmail@notFake.com")),t}()),e}()),e};!function(){document.getElementById("content").append(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("nav"),n=document.createElement("ul"),o=document.createElement("li");o.classList.add("element"),o.textContent="home";const r=document.createElement("li");r.classList.add("element"),r.textContent="menu";const a=document.createElement("li");return a.classList.add("element"),a.textContent="contact",n.append(o,r,a),t.appendChild(n),e.appendChild(t),e}(),x(),function(){const e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML="<p>Copyright &copy; <script>document.write(new Date().getFullYear())<\/script> BIROUE ISAAC All Rights Reserved</p>",e.classList.add("footer"),e.appendChild(t),e}());const e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".contact");t.parentElement.style.display="none",n.parentElement.style.display="none",e.parentElement.style.display="block",document.querySelectorAll(".element").forEach((function(o){o.addEventListener("click",(o=>{"home"===o.target.textContent?(t.parentElement.style.display="none",n.parentElement.style.display="none",e.parentElement.style.display="block"):"menu"===o.target.textContent?(e.parentElement.style.display="none",n.parentElement.style.display="none",t.parentElement.style.display="block"):"contact"===o.target.textContent&&(e.parentElement.style.display="none",t.parentElement.style.display="none",n.parentElement.style.display="block")}))}))}()})()})();