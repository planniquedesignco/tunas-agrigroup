(()=>{'use strict';if(window.__tunasPolishLoaded)return;window.__tunasPolishLoaded=true;
const overlay=document.getElementById('tunasPageLoader');if(!overlay)return;
let leaving=false;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const key='tunasLeavingPage';let arriving=false;try{arriving=sessionStorage.getItem(key)==='yes';sessionStorage.removeItem(key)}catch(e){}
const hide=()=>{if(!leaving)overlay.classList.add('is-hidden')};
// Avoid repeating the loader on arrival after an animated departure.
if(arriving||reduce){hide()}else{setTimeout(hide,1400)}
window.addEventListener('load',()=>{if(arriving||reduce)hide();else setTimeout(hide,Math.max(0,1400-performance.now()))},{once:true});
setTimeout(hide,2300);window.addEventListener('pageshow',e=>{if(e.persisted){leaving=false;hide()}});
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||leaving||reduce||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.hasAttribute('download')||a.target==='_blank')return;
let u;try{u=new URL(a.href,location.href)}catch(e){return}if(u.origin!==location.origin||!/^https?:$/.test(u.protocol)||u.pathname===location.pathname&&u.search===location.search)return;
if(!/(?:\/|\/index\.html|\/services\/?|\/services\/index\.html|\/contact\/?|\/contact\/index\.html)$/.test(u.pathname))return;
e.preventDefault();leaving=true;overlay.classList.remove('is-hidden');try{sessionStorage.setItem(key,'yes')}catch(e){}setTimeout(()=>location.assign(u.href),680);
},true);
})();