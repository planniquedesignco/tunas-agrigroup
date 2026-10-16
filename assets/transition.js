(()=>{'use strict';
const overlay=document.createElement('div');overlay.className='tunas-transition';overlay.setAttribute('role','status');overlay.setAttribute('aria-label','Loading Tunas Agri Group');overlay.innerHTML='<div class="tunas-transition-inner"><svg class="tunas-transition-symbol" viewBox="0 0 80 96" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="stem" d="M40 81V33"/><path class="leaf" d="M40 56C19 57 14 43 14 30c18 0 26 10 26 26Z"/><path class="leaf right" d="M40 42C40 21 53 13 68 12c0 17-10 30-28 30Z"/><path d="M29 83h22"/></svg><div class="tunas-transition-brand">TUNAS AGRI GROUP</div><div class="tunas-transition-caption">ROOTED IN PURPOSE · GROWING WITH VISION</div></div>';
document.body.appendChild(overlay);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let navigation=false, hideTimer;
function show(){clearTimeout(hideTimer);overlay.classList.remove('is-visible');void overlay.offsetWidth;overlay.classList.add('is-visible');overlay.setAttribute('aria-hidden','false')}
function hide(){if(navigation)return;overlay.classList.remove('is-visible');overlay.setAttribute('aria-hidden','true')}
// Show on EVERY page load, including refresh. The old version showed only once per tab.
if(!reduced){show();hideTimer=setTimeout(hide,1250);window.addEventListener('load',()=>{clearTimeout(hideTimer);hideTimer=setTimeout(hide,Math.max(450,1250-(performance.now()/1)))},{once:true});setTimeout(()=>{if(!navigation)hide()},3200)}
// Intercept internal page links, including local file previews.
document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||a.hasAttribute('download')||a.target&&a.target!=='_self'||reduced)return;
let dest;try{dest=new URL(a.href,location.href)}catch{return}
if(dest.origin!==location.origin||!['http:','https:','file:'].includes(dest.protocol)||dest.href===location.href||dest.pathname===location.pathname&&dest.search===location.search)return;
if(!/(?:\/|\/index\.html|\/services\/?|\/services\/index\.html|\/contact\/?|\/contact\/index\.html)$/.test(dest.pathname))return;
event.preventDefault();navigation=true;show();setTimeout(()=>location.assign(dest.href),750);
});
window.addEventListener('pageshow',e=>{if(e.persisted){navigation=false;hide()}});
})();
