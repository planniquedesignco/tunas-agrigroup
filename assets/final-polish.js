(()=>{'use strict';
if(window.__tunasPolishLoaded)return;window.__tunasPolishLoaded=true;
const overlay=document.getElementById('tunasPageLoader');if(!overlay)return;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const duration=reduced?0:1850;
let pageReady=document.readyState==='complete',animationReady=reduced,leaving=false,closed=false;
const started=performance.now();
function closeWhenReady(){if(leaving||closed||!pageReady||!animationReady)return;closed=true;overlay.classList.add('is-hidden');overlay.setAttribute('aria-hidden','true');}
function finishAnimation(){animationReady=true;closeWhenReady();}
// Keep the complete plant-growth, leaf and vein animation visible before showing the page.
setTimeout(finishAnimation,Math.max(0,duration-(performance.now()-started)));
if(!pageReady)window.addEventListener('load',()=>{pageReady=true;closeWhenReady();},{once:true});
// Only a genuinely stalled page can bypass the normal wait.
setTimeout(()=>{pageReady=true;animationReady=true;closeWhenReady();},7000);
window.addEventListener('pageshow',e=>{if(e.persisted){leaving=false;closed=true;overlay.classList.add('is-hidden');overlay.setAttribute('aria-hidden','true');}});
document.addEventListener('click',e=>{
const a=e.target.closest('a[href]');if(!a||leaving||reduced||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
let u;try{u=new URL(a.href,location.href)}catch{return}
if(u.origin!==location.origin||!/^https?:$/.test(u.protocol)||u.pathname===location.pathname&&u.search===location.search)return;
if(!/(?:\/|\/index\.html|\/services\/?|\/services\/index\.html|\/contact\/?|\/contact\/index\.html)$/.test(u.pathname))return;
e.preventDefault();leaving=true;overlay.classList.remove('is-hidden');overlay.setAttribute('aria-hidden','false');
// Restart the SVG growth on each page change, rather than showing an incomplete frozen sprout.
const center=overlay.querySelector('.loader-center');if(center){center.style.animation='none';void center.offsetWidth;center.style.animation='';}
setTimeout(()=>location.assign(u.href),duration);
},true);
})();
