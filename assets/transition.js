(()=>{
'use strict';
if(window.__tunasTransitionReady)return;
window.__tunasTransitionReady=true;
const overlay=document.createElement('div');
overlay.className='tunas-transition';
overlay.setAttribute('aria-hidden','true');
const assetRoot=new URL('transition.js',document.currentScript?.src||location.href);
const logo=new URL('tunas-logo.png',assetRoot);
overlay.innerHTML='<div class="tunas-transition-inner"><img class="tunas-transition-logo" alt="" src="'+logo.href+'"></div>';
document.body.appendChild(overlay);
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let navigating=false,hideTimer;
function show(){clearTimeout(hideTimer);overlay.classList.add('is-visible');overlay.setAttribute('aria-hidden','false')}
function hide(){clearTimeout(hideTimer);overlay.classList.remove('is-visible');overlay.setAttribute('aria-hidden','true')}
const key='tunas-transition-navigation';
let arriving=false;
try{arriving=sessionStorage.getItem(key)==='1';sessionStorage.removeItem(key)}catch(e){}
// One transition per navigation: play on departure, never replay on arrival.
if(!reduced&&!arriving){show();hideTimer=setTimeout(hide,850)}
window.addEventListener('load',()=>{if(!navigating)hideTimer=setTimeout(hide,arriving?0:Math.max(0,850-performance.now()))},{once:true});
setTimeout(()=>{if(!navigating)hide()},2500);
document.addEventListener('click',event=>{
 const a=event.target.closest('a[href]');
 if(!a||navigating||reduced||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
 let dest;try{dest=new URL(a.href,location.href)}catch{return}
 if(dest.origin!==location.origin||!['http:','https:','file:'].includes(dest.protocol)||dest.href===location.href||dest.pathname===location.pathname&&dest.search===location.search)return;
 if(!/(?:\/|\/index\.html|\/services\/?|\/services\/index\.html|\/contact\/?|\/contact\/index\.html)$/.test(dest.pathname))return;
 event.preventDefault();navigating=true;show();
 try{sessionStorage.setItem(key,'1')}catch(e){}
 setTimeout(()=>location.assign(dest.href),570);
});
window.addEventListener('pageshow',event=>{if(event.persisted){navigating=false;hide()}});
})();
