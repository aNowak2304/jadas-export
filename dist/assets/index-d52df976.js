(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=document.querySelector(".nav-content"),i=document.querySelector(".burger-btn");document.querySelector(".burger-active");const u=document.querySelectorAll(".nav__item");document.querySelector(".dropdown-content");document.querySelectorAll(".dropdown");document.querySelector(".contact__btn");document.querySelector("#email");document.querySelector("#message");const n=document.getElementById("message");document.querySelector(".error-email");document.querySelector(".error-msg");document.querySelector(".popup");n.addEventListener("input",a);a();function a(){n.style.height="auto",n.style.height=n.scrollHeight+"px"}const m=()=>{i.classList.toggle("burger-active"),l.classList.toggle("nav--active"),u.forEach(r=>{r.addEventListener("click",()=>{l.classList.remove("nav--active"),i.classList.remove("burger-active")})})};document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".nav-desktop"),o=document.querySelector(".nav-mobile");function c(){window.scrollY>=1&&window.innerWidth>992?r.classList.add("nav-background"):window.scrollY>=1&&window.innerWidth<992?o.classList.add("nav-background"):(r.classList.remove("nav-background"),o.classList.remove("nav-background"))}window.addEventListener("scroll",c)});i.addEventListener("click",m);
