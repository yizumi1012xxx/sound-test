import{j as c,R as a,a as d}from"./vendor.af2c69bb.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};f();var p="/sound-test/assets/logo.ecc203fb.svg";const o=c.exports.jsx,l=c.exports.jsxs;function m(){const s=()=>{Notification.requestPermission()},n=()=>{new Notification("test")},i=()=>{new Notification("test").addEventListener("show",()=>{new Audio("x.mp3").play()})};return o("div",{className:"App",children:l("header",{className:"App-header",children:[o("img",{src:p,className:"App-logo",alt:"logo"}),l("p",{children:["\u901A\u77E5\u8A2D\u5B9A\uFF1A",Notification.permission]}),o("button",{onClick:s,children:"\u901A\u77E5\u3092\u8A31\u53EF\u3059\u308B"}),o("button",{onClick:n,children:"\u901A\u77E5\u3059\u308B\uFF08\u97F3\u306A\u3057\uFF09"}),o("button",{onClick:i,children:"\u901A\u77E5\u3059\u308B\uFF08\u97F3\u3042\u308A\uFF09"})]})})}a.render(o(d.StrictMode,{children:o(m,{})}),document.getElementById("root"));