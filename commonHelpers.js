import{e as m}from"./assets/bi_x-octagon-d7cc0955.js";import{f as y,i as h}from"./assets/vendor-e76d23d4.js";let s,a;function C(e){a=setInterval(()=>{const t=Date.now(),o=e.getTime()-t;if(o<=0)clearInterval(a),d({days:0,hours:0,minutes:0,seconds:0});else{const{days:n,hours:i,minutes:c,seconds:u}=S(o);d({days:n,hours:i,minutes:c,seconds:u})}},1e3)}function d({days:e,hours:t,minutes:o,seconds:n}){document.querySelector("[data-days]").textContent=r(e),document.querySelector("[data-hours]").textContent=r(t),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(n)}function r(e){return e<10?`0${e}`:e}function S(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:f}}document.querySelector("#startButton").disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];console.log(e[0]),t&&t.getTime()>Date.now()?(s=t,document.querySelector("#startButton").disabled=!1):(s=null,document.querySelector("#startButton").disabled=!0,h.error({title:"Error",titleColor:"#ffffff",message:"Please choose a date in the future",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040",iconUrl:m,iconColor:"#ffffff"}),clearInterval(a),d({days:0,hours:0,minutes:0,seconds:0}))}};y("#datetime-picker",p);document.querySelector("#startButton").addEventListener("click",()=>{s&&(C(s),document.querySelector("#datetime-picker").disabled=!0)});
//# sourceMappingURL=commonHelpers.js.map