!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor=o(),n=setInterval(d,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}));var n=null;function d(){document.body.style.backgroundColor=o()}function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.e2350fa5.js.map