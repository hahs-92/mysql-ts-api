(()=>{"use strict";var t={752:function(t,n,e){var i=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,c)}u((i=i.apply(t,n||[])).next())}))},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.App=void 0;const r=o(e(860));n.App=class{constructor(t){this.app=(0,r.default)(),this.port=t,this.settings()}settings(){this.app.set("port",this.port)}listen(){return i(this,void 0,void 0,(function*(){yield this.app.listen(this.app.get("port")),console.log(`Server listening in port: ${this.app.get("port")}`)}))}}},607:function(t,n,e){var i=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,c)}u((i=i.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=e(752),r=process.env.PORT||3006;!function(){i(this,void 0,void 0,(function*(){new o.App(r).listen()}))}()},860:t=>{t.exports=require("express")}},n={};!function e(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return t[i].call(r.exports,r,r.exports,e),r.exports}(607)})();