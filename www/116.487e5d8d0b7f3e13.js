"use strict";(self.webpackChunkTurningBrain=self.webpackChunkTurningBrain||[]).push([[116],{116:(y,d,a)=>{a.r(d),a.d(d,{DeviceWeb:()=>w});var s=a(861),v=a(726);class w extends v.Uw{getId(){var e=this;return(0,s.Z)(function*(){return{identifier:e.getUid()}})()}getInfo(){var e=this;return(0,s.Z)(function*(){if(typeof navigator>"u"||!navigator.userAgent)throw e.unavailable("Device API not available in this browser");const t=navigator.userAgent,n=e.parseUa(t);return{model:n.model,platform:"web",operatingSystem:n.operatingSystem,osVersion:n.osVersion,manufacturer:navigator.vendor,isVirtual:!1,webViewVersion:n.browserVersion}})()}getBatteryInfo(){var e=this;return(0,s.Z)(function*(){if(typeof navigator>"u"||!navigator.getBattery)throw e.unavailable("Device API not available in this browser");let t={};try{t=yield navigator.getBattery()}catch{}return{batteryLevel:t.level,isCharging:t.charging}})()}getLanguageCode(){return(0,s.Z)(function*(){return{value:navigator.language.split("-")[0].toLowerCase()}})()}getLanguageTag(){return(0,s.Z)(function*(){return{value:navigator.language}})()}parseUa(e){const t={},n=e.indexOf("(")+1;let c=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(c=e.indexOf(") Gecko"));const r=e.substring(n,c);if(-1!==e.indexOf("Android")){const i=r.replace("; wv","").split("; ").pop();i&&(t.model=i.split(" Build")[0]),t.osVersion=r.split("; ")[1]}else if(t.model=r.split("; ")[0],typeof navigator<"u"&&navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=r;else{const i=r.split("; ").pop();if(i){const o=i.replace(" like Mac OS X","").split(" ");t.osVersion=o[o.length-1].replace(/_/g,".")}}t.operatingSystem=/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"ios":/Win/.test(e)?"windows":/Mac/i.test(e)?"mac":"unknown";const g=!!window.ApplePaySession,m=!!window.chrome,h=/Firefox/.test(e),f=/Edg/.test(e),u=/FxiOS/.test(e),p=/CriOS/.test(e),x=/EdgiOS/.test(e);if(g||m&&!f||u||p||x){let i;i=u?"FxiOS":p?"CriOS":x?"EdgiOS":g?"Version":"Chrome";const o=e.split(" ");for(const l of o)if(l.includes(i)){const S=l.split("/")[1];t.browserVersion=S}}else if(h||f){const l=e.split("").reverse().join("").split("/")[0].split("").reverse().join("");t.browserVersion=l}return t}getUid(){if(typeof window<"u"&&window.localStorage){let e=window.localStorage.getItem("_capuid");return e||(e=this.uuid4(),window.localStorage.setItem("_capuid",e),e)}return this.uuid4()}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}}}]);