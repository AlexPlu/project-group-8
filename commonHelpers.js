(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const y=document.querySelector(".menu-container"),l=document.querySelector(".mobile-menu-btn"),p=document.querySelector(".menu-button"),v=document.getElementById("menu-about"),g=document.getElementById("menu-yachts"),b=document.getElementById("menu-reviews");var r=()=>{var t=l.getAttribute("aria-expanded")==="true"||!1;l.setAttribute("aria-expanded",!t),y.classList.toggle("is-open");var o=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};l.addEventListener("click",r);p.addEventListener("click",r);v.addEventListener("click",r);g.addEventListener("click",r);b.addEventListener("click",r);document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("scrollToTopBtn"),o=!1;t.style.display="none",window.addEventListener("scroll",function(){var i=window.pageYOffset||document.documentElement.scrollTop;i>200?(o=!0,t.style.display="block"):o&&(t.style.display="none",o=!1)}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});function f(){var t=document.querySelector(".button-style");t.classList.add("hovered"),setTimeout(function(){t.classList.remove("hovered")},5e3)}setTimeout(f,8e3);setInterval(function(){f()},13e3);const a=document.getElementById("title"),m="Explore the High Seas with Our Luxury Yacht Rentals";let s=0;function d(){a.style.visibility="visible",a.innerHTML=m.slice(0,s),s++,s>m.length?(s=0,setTimeout(d,1e4)):setTimeout(d,100)}d();
//# sourceMappingURL=commonHelpers.js.map
