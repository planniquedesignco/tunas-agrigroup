(()=>{'use strict';
if(window.__tunasPolishLoaded)return;window.__tunasPolishLoaded=true;
const overlay=document.getElementById('tunasPageLoader');if(!overlay)return;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const growthTime=reduced?0:1350;
let pageReady=document.readyState==='complete',growthReady=reduced,leaving=false,closed=false;
function closeWhenReady(){if(leaving||closed||!pageReady||!growthReady)return;closed=true;overlay.classList.add('is-hidden');overlay.setAttribute('aria-hidden','true');}
// The plant completes its entire growth before the overlay can fade away.
setTimeout(()=>{growthReady=true;closeWhenReady();},growthTime);
if(!pageReady)window.addEventListener('load',()=>{pageReady=true;closeWhenReady();},{once:true});
setTimeout(()=>{pageReady=true;closeWhenReady();},6000);
window.addEventListener('pageshow',e=>{if(e.persisted){leaving=false;closed=true;overlay.classList.add('is-hidden');overlay.setAttribute('aria-hidden','true');}});
document.addEventListener('click',e=>{
const a=e.target.closest('a[href]');if(!a||leaving||reduced||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
let u;try{u=new URL(a.href,location.href)}catch{return}
if(u.origin!==location.origin||!/^https?:$/.test(u.protocol)||(u.pathname===location.pathname&&u.search===location.search))return;
if(!/(?:\/|\/index\.html|\/services\/?|\/services\/index\.html|\/contact\/?|\/contact\/index\.html)$/.test(u.pathname))return;
e.preventDefault();leaving=true;overlay.classList.remove('is-hidden');overlay.setAttribute('aria-hidden','false');
// Quick cover on departure; the destination page runs the complete plant animation once.
setTimeout(()=>location.assign(u.href),260);
},true);
})();
