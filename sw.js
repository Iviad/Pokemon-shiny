if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return n[e]||(r=new Promise(async r=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=r}else importScripts(e),r()})),r.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},r=(r,n)=>{Promise.all(r.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(r)};self.define=(r,s,i)=>{n[r]||(n[r]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return n;case"module":return c;default:return e(r)}})).then(e=>{const r=i(...e);return n.default||(n.default=r),n})}))}}define("./sw.js",["./workbox-2febe180"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"bundle.css",revision:"ac9d6bff75d8e9575041517dcf2b2a89"},{url:"bundle.js",revision:"ac782e3834b7a1a8ed741b415e68f112"},{url:"favicon.png",revision:"c8f26ae99b1a32a101924c83781a87a9"},{url:"html2canvas.min.js",revision:"07dfafa027eb2f5e81f234eeaa30ec16"},{url:"icon.png",revision:"c0e7522596d105b700d1d6d0cbbcd47c"},{url:"index.html",revision:"36e9b62b85e3c52ecc0e0cc18dfa6358"},{url:"pokemon_icon_000.png",revision:"b8fd366bba04e4f3157a3f1c5d579bc2"}],{}),e.registerRoute(/.*json$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*PogoAssets.*\.(?:png)$/,new e.CacheFirst({cacheName:"pm-shiny-cache--cdn-image",plugins:[new e.ExpirationPlugin({maxEntries:1e3,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
