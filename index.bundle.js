(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>L});var a=t(81),i=t.n(a),r=t(645),o=t.n(r),c=t(667),d=t.n(c),s=new URL(t(12),t.b),l=new URL(t(446),t.b),u=new URL(t(551),t.b),p=new URL(t(317),t.b),m=new URL(t(260),t.b),h=new URL(t(945),t.b),g=new URL(t(277),t.b),v=o()(i()),f=d()(s),b=d()(l),x=d()(u),C=d()(p),y=d()(m),w=d()(h),E=d()(g);v.push([e.id,`:root {\n    --context-height: 90vh;\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\n.active {\n    background-color: rgb(139, 45, 45);\n    color: aliceblue;\n}\n\nbutton {\n    border: none;\n    min-width: 15vw;\n\n    box-shadow: 0px 3px 20px -1px rgb(63, 17, 17);\n\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    gap: 1vw;\n\n    /*border-bottom: 5px solid white;*/\n    overflow: hidden;\n    background-color: cadetblue;\n\n    height: 5vh;\n}\n\nfooter {\n    position:fixed;\n    left:0px;\n    bottom:0px;\n    height: 5vh;\n    width:100%;\n    background: yellowgreen;\n    box-shadow: 0px 0px 20px 10px rgb(63, 17, 17);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.6rem;\n    gap: 0.3rem;\n\n    overflow: hidden;\n\n }\n\n\n.home-background {    \n    background-image: url(${f});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    box-shadow: 0px 0px 20px 10px rgb(63, 17, 17);\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    opacity: 0.7;\n\n}\n\n.home-context {\n    display: flex;\n    min-width: 100vw;\n    min-width: var(--context-height);\n    flex-direction: column;\n    align-items: center;\n    padding-top: 5vh;\n}\n\n.home-textdiv {\n    display: flex;\n    max-width: 50vw;\n    flex-direction: column;\n    align-items: center;\n    gap: 1vh;\n    padding-top: 5vh;\n}\n\n.home-textdiv > p {\n    line-height: 1.5rem;\n}\n\n .menu-background {\n    background-image: url(${b});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    opacity: 0.7;\n\n\n }\n\n .menu-context {\n    display: flex;\n    min-width: 100vw;\n    min-width: var(--context-height);\n    flex-direction: column;\n    align-items: center;\n    padding-top: 5vh;\n}\n\n.menu-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: 25vw;\n    max-width: 70vw;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 5vh;\n    gap: 2vw;\n}\n\n.menu-content > p {\n    line-height: 1.5rem;\n}\n\n.menu-card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n \n\n p  {\n    color: white;\n }\n\n .context {\n    min-height: var(--context-height);\n }\n\n .card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 5px;\n    text-align: center;\n    min-width: 30vw;\n    min-height: 30vh;\n    background-color: rgba(255, 0, 0, 0.199);\n }\n\n .card > p {\n    color:antiquewhite\n }\n\n .card1 {\n    background-image: url(${x});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    min-height: 10vh;\n }\n .card2 {\n    background-image: url(${C});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    min-height: 10vh;\n }\n .card3 {\n    background-image: url(${y});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    min-height: 10vh;\n }\n .card4 {\n    background-image: url(${w});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    min-height: 10vh;\n }\n\n.contact-context {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-background {\n    background-image: url(${E});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    opacity: 0.7;\n\n\n }\n\n .map {\n    display: flex;\n    justify-content: center;\n }\n\n iframe {\n    min-width: 30vw;\n    min-height: 30vh;\n    border: 0;\n }`,""]);const L=v},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},o=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=i(m,a);a.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var c=t(r[o]);n[c].references--}for(var d=a(e,i),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},637:(e,n,t)=>{function a(){console.log("This is contact!")}t.d(n,{YT:()=>o,ZP:()=>a,bK:()=>r});const i=document.createElement("div");function r(){const e=document.querySelector("body"),n=document.createElement("p"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("iframe"),o=document.createElement("div");return n.textContent="Welcome contact!",r.loading="lazy",r.referrerPolicy="no-referrer-when-downgrade",r.allowFullscreen="",o.classList.add("contact-background"),o.classList.add("contact-background"),i.classList.add("contact-context"),r.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8803850504287!2d-74.0085157239728!3d40.742657471389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf145f41b1%3A0x5fb8be19d61f1784!2sCull%20%26%20Pistol!5e0!3m2!1sen!2str!4v1696171742625!5m2!1sen!2str",e.appendChild(i),i.appendChild(a),i.appendChild(o),a.appendChild(n),a.appendChild(t),t.appendChild(r),i}function o(){i.replaceChildren(),i.remove()}i.classList.add("context")},666:(e,n,t)=>{function a(){console.log("This is home!")}t.d(n,{YT:()=>o,ZP:()=>a,bK:()=>r});const i=document.createElement("div");function r(){const e=document.querySelector("body"),n=document.createElement("h1"),t=document.createElement("p"),a=document.createElement("div"),r=document.createElement("div");return n.textContent="Welcome to Cull&Pistol",t.textContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit.",a.classList.add("home-background"),i.classList.add("home-context"),r.classList.add("home-textdiv"),e.appendChild(i),i.appendChild(a),i.appendChild(r),r.appendChild(n),r.appendChild(t),i}function o(){i.replaceChildren(),i.remove()}i.classList.add("context")},83:(e,n,t)=>{function a(){console.log("This is menu!")}t.d(n,{YT:()=>o,ZP:()=>a,bK:()=>r});const i=document.createElement("div");function r(){const e=document.querySelector("body"),n=document.createElement("h1"),t=document.createElement("h1"),a=document.createElement("h1"),r=document.createElement("h1"),o=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),h=document.createElement("p"),g=document.createElement("p"),v=document.createElement("p"),f=document.createElement("p"),b=document.createElement("div"),x=document.createElement("div");n.textContent="Burger",h.textContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit.",t.textContent="Steak",g.textContent=" Cras accumsan tempor libero a vestibulum. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit.",a.textContent="Breakfast",v.textContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Vivamus consequat et erat ac aliquet. In sit amet lectus id massa fringilla tristique eget blandit velit.",r.textContent="Salad",f.textContent=" Proin aliquet ligula id aliquam efficitur. Etiam varius quam bibendum, congue ante eget, finibus sapien. Cras accumsan tempor libero a vestibulum. In sit amet lectus id massa fringilla tristique eget blandit velit.",b.classList.add("menu-background"),i.classList.add("menu-context"),x.classList.add("menu-content"),o.classList.add("card"),c.classList.add("card"),d.classList.add("card"),s.classList.add("card"),l.classList.add("card1"),u.classList.add("card2"),p.classList.add("card3"),m.classList.add("card4"),e.appendChild(i),i.appendChild(b),i.appendChild(x),o.appendChild(n),o.appendChild(h),o.appendChild(l),c.appendChild(t),c.appendChild(g),c.appendChild(u),d.appendChild(a),d.appendChild(v),d.appendChild(p),s.appendChild(r),s.appendChild(f),s.appendChild(m),x.appendChild(o),x.appendChild(c),x.appendChild(d),x.appendChild(s)}function o(){i.replaceChildren(),i.remove()}i.classList.add("context")},277:(e,n,t)=>{e.exports=t.p+"974d2b972b6656b5189c.jpg"},945:(e,n,t)=>{e.exports=t.p+"057bf8b0fa662c5935b5.jpg"},446:(e,n,t)=>{e.exports=t.p+"8dd059175ccc75871a2a.jpg"},12:(e,n,t)=>{e.exports=t.p+"09cc3855dc34bc5d757d.jpg"},317:(e,n,t)=>{e.exports=t.p+"eed23dfb0cf10e2938ed.jpg"},551:(e,n,t)=>{e.exports=t.p+"891a90ff767bc661eff3.jpg"},260:(e,n,t)=>{e.exports=t.p+"b27a0d00fec731e70b1e.jpg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),r=t(569),o=t.n(r),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var g=t(666),v=t(83),f=t(637);console.log("Hello, Hi, welcome!");const b=document.createElement("button"),x=document.createElement("button"),C=document.createElement("button"),y=document.createElement("header"),w=document.querySelector("body");b.textContent="HOME",C.classList.add("active"),x.textContent="MENU",C.textContent="CONTACT",y.appendChild(b),y.appendChild(x),y.appendChild(C);const E=document.createElement("p"),L=document.createElement("p"),k=document.createElement("footer");E.textContent="Created By MSaidG",L.textContent="Cull&Pistol © 2023 | All Rights Reserved",w.appendChild(y),w.appendChild(k),k.appendChild(E),k.appendChild(L);const q=document.querySelectorAll("button");(0,f.bK)(),b.addEventListener("click",(e=>{"active"!=e.target.classList.value&&((0,f.YT)(),(0,v.YT)(),document.querySelector(".active").classList.remove("active"),(0,g.bK)(),e.target.classList.add("active"))})),x.addEventListener("click",(e=>{"active"!=e.target.classList.value&&((0,g.YT)(),(0,f.YT)(),document.querySelector(".active").classList.remove("active"),(0,v.bK)(),e.target.classList.add("active"))})),C.addEventListener("click",(e=>{"active"!=e.target.classList.value&&((0,g.YT)(),(0,v.YT)(),document.querySelector(".active").classList.remove("active"),(0,f.bK)(),e.target.classList.add("active"))})),q.forEach((e=>{console.log(e.textContent)})),(0,g.ZP)(),(0,v.ZP)(),(0,f.ZP)()})()})();