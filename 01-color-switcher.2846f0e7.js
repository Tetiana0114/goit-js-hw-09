!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(){var n,r;e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n="disabled",r=!0,t.startBtn.setAttribute(n,r),t.stopBtn.removeAttribute(n)})),t.stopBtn.addEventListener("click",(function(){var n,r;clearInterval(e),n="disabled",r=!0,t.stopBtn.setAttribute(n,r),t.startBtn.removeAttribute(n)}))}();
//# sourceMappingURL=01-color-switcher.2846f0e7.js.map