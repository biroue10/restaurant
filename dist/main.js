(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);"]),c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);"]),c.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.header{\n    display: flex;\n    background-color: #ffde73;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid burlywood;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\nul{\n    display: flex;\n}\nul li{\n    list-style: none;\n    padding: 10px;\n    text-transform: uppercase;\n    margin: 5px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-weight: 900;\n}\n.footer{\n    background-color: #ffde73;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: black;\n    width: 100%;\n    border-top: 1px solid burlywood;\n    padding: 20px;\n}\n.home{\n    height: 130vh;\n    margin: auto;\n    display: flex;\n    width: 90%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    padding: 10px;\n}\n.home div{\n    width: 80%;\n    text-align: center;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: #ffc60b;\n    margin: 10px;\n}\n.contact{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    height: 80vh;\n    border-radius: 10px;\n    background-color: #ffde73;\n    margin: 10px auto;\n    justify-content: center;\n}\n.contact div{\n    width: 50%;\n    text-align: center;\n    margin: 10px;\n    border-radius: 5px;\n    padding-top: 30px;\n    padding-bottom: 10px;\n    background-color: #ffc60b;\n}\n.menu{\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    margin: auto;\n    border-radius: 10px;\n    background-color: #ffde73;\n    margin: 10px auto;\n    align-items: center;\n    height: 160vh;\n    justify-content: center;\n    align-items: center;\n}\n.menu p {\n    width: 50%;\n    text-align: center;\n    padding-top: 1px;\n    padding-bottom: 1px;\n    border-radius: 10px;\n    font-family: 'Great Vibes', cursive;\n    font-size: 2rem;\n    cursor: pointer;\n}\n.home h1, .menu h1, .contact h1{\n    margin: 20px;\n    font-family: 'Tangerine', cursive;\n    text-transform: capitalize;\n    font-size: 4rem;\n}\n.home h3, .menu h3, .contact h3{\n    text-transform: uppercase;\n    margin-bottom: 10px;\n}\niframe{\n    width: 100%;\n}\nimg{\n    width: 100%;\n    padding: 10px;\n}\nbody {\n    background-color: #ffde73;\n}\nul li:hover{\n    text-decoration: underline;\n}\nfooter > p > p{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=n.p+"f4da94d04dc9d81f0e5b.jpg",g=n.p+"6f56a88ca77b2c31b2cd.jpg",y=n.p+"db01eb64f7889cad885d.jpg";function x(e,t,n,o){const r=document.createElement("div"),a=document.createElement("h3");a.textContent=e;const c=document.createElement("p");c.textContent=t;const i=document.createElement("p");i.textContent=n;const s=document.createElement("p");return s.textContent=o,r.append(a,c,i,s),r}const v=function(){const e=document.createElement("div");return e.append(function(){const e=document.createElement("div");return e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home"),e.classList.add("active");const t=document.createElement("h1"),n=document.createElement("div"),o=document.createElement("p");o.textContent="Etiam dapibus eget felis eget dictum. Duis dictum facilisis urna, id ultricies nunc lobortis a. Fusce eget augue vitae enim blandit egestas. Donec sed elit enim. Quisque magna enim, interdum in velit quis, consequat hendrerit ex. Sed tincidunt velit congue aliquet eleifend. Curabitur ultricies, erat vitae commodo commodo, tellus nisl vulputate nunc, id elementum dolor augue a lacus. Sed risus magna, viverra ac ligula quis, lobortis commodo diam. Fusce id luctus erat, et dapibus tortor. Fusce ut purus ipsum. Nam dignissim sem sit amet odio sodales, id maximus massa fermentum. Sed elit ligula, rhoncus id sollicitudin id, scelerisque vel arcu. Donec felis neque, condimentum quis lobortis vitae, bibendum accumsan sapien.";const r=document.createElement("h3");r.textContent="Who are we?",n.append(r,o);const a=document.createElement("div"),c=document.createElement("h3");c.textContent="Hours";const i=document.createElement("p");i.textContent="Sunday: 8am - 8pm";const s=document.createElement("p");s.textContent="Monday: 6am - 6pm";const d=document.createElement("p");d.textContent="Tuesday: 6am - 6pm";const l=document.createElement("p");l.textContent="Wednesday: 6am - 6pm";const u=document.createElement("p");u.textContent="Thursday: 6am - 10pm";const m=document.createElement("p");m.textContent="Friday: 6am - 10pm";const p=document.createElement("p");p.textContent="Saturday: 8am - 10pm",a.append(c,i,s,d,d,l,u,m,p);const f=document.createElement("div"),h=document.createElement("p"),g=document.createElement("p");h.textContent="123 Forest Drive, Forestville, Maine",g.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.94349687302!2d-7.557224000000001!3d33.59918390000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ccf77c009ce3%3A0x89bdfd73a580b00b!2sAmoud%20P%C3%A2tisserie%20A%C3%AFn%20Sebaa!5e0!3m2!1sfr!2sma!4v1688901444369!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';const y=document.createElement("h3");return y.textContent="Location",f.append(y,h,g),t.textContent="biroue isaac restaurant",e.append(t,n,a,f),e}()),e}(),function(){const e=document.createElement("div");return e.appendChild(function(){const e=new Image,t=new Image,n=new Image;e.src=h,t.src=g,n.src=y;const o=document.createElement("div"),r=document.createElement("h1");r.textContent="our menu",o.classList.add("menu");const a=document.createElement("p");a.textContent="Tacos de Lyon",a.appendChild(e);const c=document.createElement("p");c.textContent="Burger King",c.appendChild(t);const i=document.createElement("p");return i.textContent="Escalppe de Boeuf",i.appendChild(n),o.append(r,a,c,i),o}()),e}(),function(){const e=document.createElement("div");return e.textContent="",e.appendChild(function(){const e=document.createElement("h1");e.textContent="contacts info";const t=document.createElement("div");return t.classList.add("contact"),t.appendChild(e),t.appendChild(x("Mama Bear","Chef","555-555-5554","totallyRealEmail@notFake.com")),t.appendChild(x("Papa Bear","Manager","555-555-5555","perfectlyRealEmail@notFake.com")),t.appendChild(x("Baby Bear","Waiter","555-555-5556","totallyRealEmail@notFake.com")),t}()),e}()),e};!function(){document.getElementById("content").append(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("nav"),n=document.createElement("ul"),o=document.createElement("li");o.classList.add("element"),o.textContent="home";const r=document.createElement("li");r.classList.add("element"),r.textContent="menu";const a=document.createElement("li");return a.classList.add("element"),a.textContent="contact",n.append(o,r,a),t.appendChild(n),e.appendChild(t),e}(),v(),function(){const e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML="<p>Copyright &copy; <script>document.write(new Date().getFullYear())<\/script> BIROUE ISAAC All Rights Reserved</p>",e.classList.add("footer"),e.appendChild(t),e}());const e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".contact");t.parentElement.style.display="none",n.parentElement.style.display="none",e.parentElement.style.display="block",document.querySelectorAll(".element").forEach((function(o){o.addEventListener("click",(o=>{"home"===o.target.textContent?(t.parentElement.style.display="none",n.parentElement.style.display="none",e.parentElement.style.display="block"):"menu"===o.target.textContent?(e.parentElement.style.display="none",n.parentElement.style.display="none",t.parentElement.style.display="block"):"contact"===o.target.textContent&&(e.parentElement.style.display="none",t.parentElement.style.display="none",n.parentElement.style.display="block")}))}))}()})()})();