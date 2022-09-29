var oi=Object.defineProperty;var ai=(n,e,t)=>e in n?oi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var M=(n,e,t)=>(ai(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ee(){}function At(n){return n()}function Lt(){return Object.create(null)}function oe(n){n.forEach(At)}function ui(n){return typeof n=="function"}function Ge(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function di(n){return Object.keys(n).length===0}function ci(n,...e){if(n==null)return ee;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function hi(n,e,t){n.$$.on_destroy.push(ci(e,t))}function a(n,e){n.appendChild(e)}function ne(n,e,t){n.insertBefore(e,t||null)}function Z(n){n.parentNode.removeChild(n)}function x(n){return document.createElement(n)}function re(n){return document.createTextNode(n)}function v(){return re(" ")}function A(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function fi(n){return function(e){return e.preventDefault(),n.call(this,e)}}function C(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function gi(n){return Array.from(n.childNodes)}function $e(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let _e;function ve(n){_e=n}function pi(){if(!_e)throw new Error("Function called outside component initialization");return _e}function mi(n){pi().$$.on_mount.push(n)}const pe=[],k=[],De=[],He=[],vi=Promise.resolve();let Xe=!1;function wi(){Xe||(Xe=!0,vi.then(Nt))}function Ye(n){De.push(n)}function O(n){He.push(n)}const Ve=new Set;let Ie=0;function Nt(){const n=_e;do{for(;Ie<pe.length;){const e=pe[Ie];Ie++,ve(e),_i(e.$$)}for(ve(null),pe.length=0,Ie=0;k.length;)k.pop()();for(let e=0;e<De.length;e+=1){const t=De[e];Ve.has(t)||(Ve.add(t),t())}De.length=0}while(pe.length);for(;He.length;)He.pop()();Xe=!1,Ve.clear(),ve(n)}function _i(n){if(n.fragment!==null){n.update(),oe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ye)}}const Me=new Set;let se;function bi(){se={r:0,c:[],p:se}}function xi(){se.r||oe(se.c),se=se.p}function $(n,e){n&&n.i&&(Me.delete(n),n.i(e))}function L(n,e,t,s){if(n&&n.o){if(Me.has(n))return;Me.add(n),se.c.push(()=>{Me.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function j(n,e,t){const s=n.$$.props[e];s!==void 0&&(n.$$.bound[s]=t,t(n.$$.ctx[s]))}function V(n){n&&n.c()}function W(n,e,t,s){const{fragment:i,on_mount:r,on_destroy:l,after_update:o}=n.$$;i&&i.m(e,t),s||Ye(()=>{const h=r.map(At).filter(ui);l?l.push(...h):oe(h),n.$$.on_mount=[]}),o.forEach(Ye)}function R(n,e){const t=n.$$;t.fragment!==null&&(oe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function yi(n,e){n.$$.dirty[0]===-1&&(pe.push(n),wi(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ot(n,e,t,s,i,r,l,o=[-1]){const h=_e;ve(n);const u=n.$$={fragment:null,ctx:null,props:r,update:ee,not_equal:i,bound:Lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:Lt(),dirty:o,skip_bound:!1,root:e.target||h.$$.root};l&&l(u.root);let y=!1;if(u.ctx=t?t(n,e.props||{},(_,b,...I)=>{const E=I.length?I[0]:b;return u.ctx&&i(u.ctx[_],u.ctx[_]=E)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](E),y&&yi(n,_)),b}):[],u.update(),y=!0,oe(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const _=gi(e.target);u.fragment&&u.fragment.l(_),_.forEach(Z)}else u.fragment&&u.fragment.c();e.intro&&$(n.$$.fragment),W(n,e.target,e.anchor,e.customElement),Nt()}ve(h)}class jt{$destroy(){R(this,1),this.$destroy=ee}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!di(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class Vt{constructor(...e){this.v=e}_makeThis(){return new this.__proto__.constructor(new Array(this.v.length).fill(0))}map(e){const t=this._makeThis();for(var s=0;s<this.v.length;s++)t.v[s]=e(this.v[s],s);return t}zipMap(e,t){return this.map((s,i)=>t(s,e.v[i],i))}reduce(e,t){let s=t;for(var i=0;i<this.v.length;i++)s=e(s,this.v[i],i);return s}zipReduce(e,t,s){return this.reduce((i,r,l)=>t(i,r,e.v[l],l),s)}copy(){return this.map(e=>e)}add(e){return this.zipMap(e,(t,s)=>t+s)}sub(e){return this.zipMap(e,(t,s)=>t-s)}mult(e){return this.zipMap(e,(t,s)=>t*s)}div(e){return this.zipMap(e,(t,s)=>t/s)}addS(e){return this.map(t=>t+e)}subS(e){return this.map(t=>t-e)}multS(e){return this.map(t=>t*e)}divS(e){return this.map(t=>t/e)}dot(e){return this.zipReduce(e,(t,s,i)=>t+s*i,0)}sqrMagnitude(){return this.dot(this)}magnitude(){return Math.sqrt(this.dot(this))}normalized(){return this.divS(this.magnitude())}inverted(){return this.multS(-1)}lerp(e,t){return this.multS(1-t).add(e.multS(t))}toArray(){return this.v.slice()}multM(e){return this.map((t,s)=>{let i=0;for(let r=0;r<e.rows;r++)i+=t*e.at(r,s);return i})}}class m extends Vt{constructor(e,t){super(e,t)}get x(){return this.v[0]}get y(){return this.v[1]}set x(e){this.v[0]=e}set y(e){this.v[1]=e}}class qt extends Vt{constructor(e,t,s){super(e,t,s)}get x(){return this.v[0]}get y(){return this.v[1]}get z(){return this.v[2]}set x(e){this.v[0]=e}set y(e){this.v[1]=e}set z(e){this.v[2]=e}}class Si{constructor(...e){this.v=e}_makeThis(){return this.__proto__.constructor(new Array(this.v.length).fill(0))}map(e){const t=this._makeThis();for(var s=0;s<this.v.length;s++)t.v[s]=e(this.v[s],s);return t}zipMap(e,t){return this.map((s,i)=>t(s,e.v[i],i))}reduce(e,t){let s=t;for(var i=0;i<this.v.length;i++)s=e(s,this.v[i],i);return s}zipReduce(e,t,s){return this.reduce((i,r,l)=>t(i,r,e.v[l],l),s)}copy(){return this.map(e=>e)}add(e){return this.zipMap(e,(t,s)=>t+s)}sub(e){return this.zipMap(e,(t,s)=>t-s)}mult(e){return this.zipMap(e,(t,s)=>t*s)}div(e){return this.zipMap(e,(t,s)=>t/s)}addS(e){return this.map(t=>t+e)}subS(e){return this.map(t=>t-e)}multS(e){return this.map(t=>t*e)}divS(e){return this.map(t=>t/e)}dot(e){return this.zipReduce(e,(t,s,i)=>t+s*i,0)}sqrMagnitude(){return this.dot(this)}magnitude(){return Math.sqrt(this.dot(this))}normalized(){return this.divS(this.magnitude())}inverted(){return this.multS(-1)}lerp(e,t){return this.multS(1-t).add(e.multS(t))}toArray(){return this.v.slice()}multM(e){return this.map((t,s)=>{let i=0;for(let r=0;r<e.rows;r++)i+=t*e.at(r,s);return i})}}class Ei extends Si{constructor(e,t,s,i){super(e,t,s,i)}get x(){return this.v[0]}get y(){return this.v[1]}get z(){return this.v[2]}get w(){return this.v[3]}set x(e){this.v[0]=e}set y(e){this.v[1]=e}set z(e){this.v[2]=e}set w(e){this.v[3]=e}}function Ci(n,e,t){return Math.min(Math.max(n,e),t)}class w{constructor(e,t,s,i=1){this.v=new Ei(e,t,s,i)}static get black(){return new w(0,0,0)}static get white(){return new w(1,1,1)}static get red(){return new w(1,0,0)}static get green(){return new w(0,1,0)}static get blue(){return new w(0,0,1)}static hex(e){if(typeof e=="number")return new w((e>>8*2&255)/255,(e>>8*1&255)/255,(e>>8*0&255)/255);if(!e.startsWith("#")||e.length!==7&&e.length!==9)throw new Error("invalid color string");let t=new Array((e.length-1)/2);for(let s=0;s<(e.length-1)/2;s++)t[s]=parseInt(e.substring(2*s+1,2*s+3),16)/255;return new w(t[0],t[1],t[2],t==null?void 0:t[3])}static hsl(e,t,s){}static vec(e){return new w(e.x,e.y,e.z,e.w)}hexComponent(e){return Math.floor(Ci(e,0,1)*255).toString(16).padStart(2,"0")}toRgbString(e=this.a!==1){return`rgb${e?"a":""}(${Math.floor(this.r*255)}, ${Math.floor(this.g*255)}, ${Math.floor(this.b*255)}${e?", "+Math.floor(this.a*255):""})`}toHexString(e=this.a!==1){return`#${this.hexComponent(this.r)}${this.hexComponent(this.g)}${this.hexComponent(this.b)}${e?this.hexComponent(this.a):""}`}toString(){return this.toHexString()}toVec(){return this.v.copy()}toArray(){return this.v.toArray()}mix(e,t=.5){const s=new w(0,0,0,0);return s.v=this.v.multS(t).add(e.v.multS(1-t)),s}withAlpha(e){const t=this.clone();return t.a=e,t}get r(){return this.v.x}get g(){return this.v.y}get b(){return this.v.z}get a(){return this.v.w}set r(e){this.v.x=e}set g(e){this.v.y=e}set b(e){this.v.z=e}set a(e){this.v.w=e}clone(){return new w(this.r,this.g,this.b,this.a)}}class ke{constructor(e){this.element=e,this.ctx=this.element.getContext("2d"),this.plugins=[]}static fromParent(e){const t=document.createElement("canvas");return e.appendChild(t),new ke(t)}addPlugin(e){this.plugins.push(e)}clear(){this.ctx.clearRect(0,0,this.element.width,this.element.height)}beginDraw(){this.plugins.forEach(e=>e.beforeDrawBegin(this))}endDraw(){this.plugins.forEach(e=>e.afterDrawEnd(this))}draw(e){e(this.ctx)}drawLine(e,t,s={}){var i,r,l,o;this.ctx.lineWidth=(i=s.width)!==null&&i!==void 0?i:10,this.ctx.strokeStyle=(l=(r=s.color)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:w.red.toString(),this.ctx.lineCap=(o=s.cap)!==null&&o!==void 0?o:"butt",this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}drawRect(e,t,s={}){var i,r,l,o;this.ctx.beginPath(),this.ctx.rect(e.x,e.y,t.x,t.y),s.fill!==!1&&(this.ctx.fillStyle=(r=(i=s.color)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:w.green.toString(),this.ctx.fill()),s.borderWidth>0&&(this.ctx.strokeStyle=(o=(l=s.borderColor)===null||l===void 0?void 0:l.toString())!==null&&o!==void 0?o:w.red.toString(),this.ctx.lineWidth=s.borderWidth,this.ctx.stroke())}drawCircle(e,t,s={}){var i,r,l,o;this.ctx.beginPath(),this.ctx.arc(e.x,e.y,t,0,Math.PI*2),s.fill!==!1&&(this.ctx.fillStyle=(r=(i=s.color)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:w.green.toString(),this.ctx.fill()),s.borderWidth>0&&(this.ctx.strokeStyle=(o=(l=s.borderColor)===null||l===void 0?void 0:l.toString())!==null&&o!==void 0?o:w.red.toString(),this.ctx.lineWidth=s.borderWidth,this.ctx.stroke())}drawPoly(e,t={}){var s,i,r,l;if(e.length<2){console.error(`invalid vertex count for polygon: ${e.length}`);return}this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y);for(let o=1;o<e.length;o++)this.ctx.lineTo(e[o].x,e[o].y);t.closed===!0&&this.ctx.closePath(),t.fill!==!1&&(this.ctx.fillStyle=(i=(s=t.color)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:w.green.toString(),this.ctx.fill()),t.borderWidth>0&&(this.ctx.strokeStyle=(l=(r=t.borderColor)===null||r===void 0?void 0:r.toString())!==null&&l!==void 0?l:w.red.toString(),this.ctx.lineWidth=t.borderWidth,this.ctx.stroke())}drawBezier(e,t={}){}drawText(e,t,s={}){var i,r,l,o,h,u;this.ctx.fillStyle=(r=(i=s.color)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:w.white.toString(),this.ctx.textAlign=(l=s.align)!==null&&l!==void 0?l:"left",this.ctx.font=`${(o=s.size)!==null&&o!==void 0?o:50}px ${(h=s.font)!==null&&h!==void 0?h:"Arial"}`,this.ctx.textBaseline=(u=s.baseLine)!==null&&u!==void 0?u:"top",s.debug&&this.ctx.measureText(e),this.ctx.fillText(e,t.x,t.y,s.maxWidth)}drawImage(e,t,s=new m(e.width,e.height),i){i?this.ctx.drawImage(e,i.start.x,i.start.y,i.dim.x,i.dim.y,t.x,t.y,s.x,s.y):this.ctx.drawImage(e,t.x,t.y,s.x,s.y)}translate(e){this.ctx.translate(e.x,e.y)}scale(e,t){t&&this.translate(t),this.ctx.scale(e.x,e.y),t&&this.translate(t.inverted())}rotate(e,t){t&&this.translate(t),this.ctx.rotate(e),t&&this.translate(t.inverted())}resetTransform(){this.ctx.resetTransform()}saveCtx(){this.ctx.save()}restoreCtx(){this.ctx.restore()}screenToWorld(e){const t=this.ctx.getTransform().inverse();return new m(t.a*e.x+t.c*e.y+t.e,t.b*e.x+t.d*e.y+t.f)}worldToScreen(e){const t=this.ctx.getTransform();return new m(t.a*e.x+t.c*e.y+t.e,t.b*e.x+t.d*e.y+t.f)}clipRect(e,t){this.clip(s=>s.rect(e.x,e.y,t.x,t.y))}clipCircle(e,t){this.clip(s=>s.arc(e.x,e.y,t,0,Math.PI*2))}clip(e){this.ctx.beginPath(),e(this.ctx),this.ctx.clip()}getImageData(e,t=new m(1,1)){return this.ctx.getImageData(e.x,e.y,t.x,t.y)}createImageData(e){return this.ctx.createImageData(e.x,e.y)}putImageData(e,t){this.ctx.putImageData(e,t.x,t.y)}getPixel(e){console.error("todo")}}class Pi{constructor(e,t=s=>{}){this.onResize=t,this.element=e}}class Ii extends Pi{constructor(e,t){super(e,t),new ResizeObserver(i=>{let r=new m(this.element.width,this.element.height);for(const l of i)this.element.width=l.contentRect.width,this.element.height=l.contentRect.height;this.onResize(new m(this.element.width,this.element.height),r)}).observe(this.element)}}class Ft extends Ii{constructor(e,t){super(e,t),e.style.width="100%",e.style.height="100%"}}const de=[];function Wt(n,e=ee){let t;const s=new Set;function i(o){if(Ge(n,o)&&(n=o,t)){const h=!de.length;for(const u of s)u[1](),de.push(u,n);if(h){for(let u=0;u<de.length;u+=2)de[u][0](de[u+1]);de.length=0}}}function r(o){i(o(n))}function l(o,h=ee){const u=[o,h];return s.add(u),s.size===1&&(t=e(i)||ee),o(n),()=>{s.delete(u),s.size===0&&(t(),t=null)}}return{set:i,update:r,subscribe:l}}class Di{constructor(e,t){M(this,"id");M(this,"pos");M(this,"lastPos");M(this,"data",{});this.pos=e,this.id=t,this.lastPos=e.copy()}setPos(e){this.pos=e}delta(){let e=this.pos.sub(this.lastPos);return this.lastPos=this.pos,e}}const ce=class{constructor(e){M(this,"parent");M(this,"pointers");M(this,"down",()=>{});M(this,"move",()=>{});M(this,"up",()=>{});this.parent=e,this.pointers=new Map,this.parent.addEventListener("touchstart",t=>{this.beginPointer(this.fromList(t.changedTouches))},{passive:!1}),this.parent.addEventListener("touchmove",t=>{t.preventDefault(),this.movePointer(this.fromList(t.changedTouches))},{passive:!1}),this.parent.addEventListener("touchend",t=>{this.removePointer(this.fromList(t.changedTouches))},{passive:!1}),this.parent.addEventListener("touchcancel",t=>{this.removePointer(this.fromList(t.changedTouches))}),this.parent.addEventListener("mousedown",t=>{this.beginPointer([{id:ce.POINTER_ID,pos:new m(t.clientX,t.clientY)}])},{passive:!1}),this.parent.addEventListener("mousemove",t=>{this.movePointer([{id:ce.POINTER_ID,pos:new m(t.clientX,t.clientY)}])},{passive:!1}),this.parent.addEventListener("mouseup",t=>{this.removePointer([{id:ce.POINTER_ID,pos:new m(t.clientX,t.clientY)}])},{passive:!1}),this.parent.addEventListener("mouseleave",t=>{this.removePointer([{id:ce.POINTER_ID,pos:new m(t.clientX,t.clientY)}])})}fromList(e){return new Array(e.length).fill(0).map((t,s)=>({id:e[s].identifier,pos:new m(e[s].clientX,e[s].clientY)}))}beginPointer(e){e.forEach(t=>{this.pointers.set(t.id,new Di(t.pos,t.id))}),this.down(e,this.pointers)}movePointer(e){e.forEach(t=>{var s;(s=this.pointers.get(t.id))==null||s.setPos(t.pos)}),this.move(e)}removePointer(e){e.forEach(t=>{this.pointers.delete(t.id)}),this.up(e,this.pointers)}};let ze=ce;M(ze,"POINTER_ID",-1);let d={editingCircle:{radius:50,mass:1},running:!0,traceFreq:20,drawTraces:!0,traceWidth:1/2,world:{restetution:1,motionEnabledStore:Wt(!1),motionEnabled:!1,gravity:25,velocity:25,airDensity:10},selectedStore:Wt(void 0),stepsPerFrame:10},me=200,P,be,Te,Ht=0,q,Xt=0,S,Yt=new m(0,0),we=new m(0,0);function Be(){return Xt}function Bt(){be.clear()}function Gt(){if(S){let n=F.findIndex(e=>e===S);F.splice(n,1),d.selectedStore.set(void 0),S=void 0}}const Mi={"2-object-collision":()=>{let n=100,e=window.innerHeight/4,t=new m(n,window.innerHeight/2-e),s=new m(n,window.innerHeight/2+e),i=new m(window.innerWidth/2,window.innerHeight/2),r=new le(t,d.editingCircle.radius,d.editingCircle.mass);r.vel=i.sub(t);let l=new le(s,d.editingCircle.radius,d.editingCircle.mass);return l.vel=i.sub(s),[r,l]}};function Kt(n){F=Mi[n](),S=void 0}function Ut(n){be=ke.fromParent(n),P=ke.fromParent(n),new Ft(P.element),new Ft(be.element),Te=new ze(P.element),Te.down=(s,i)=>{let r=new m(window.innerWidth,window.innerHeight).subS(me/2);s.forEach(l=>{if(l.pos.sub(r).magnitude()<d.editingCircle.radius&&(q={pos:r.copy(),pointer:l.id}),S&&S.pos.add(S.vel.divS(10)).sub(l.pos).magnitude()<S.radius){i.get(l.id).data.draggingVel=S;return}F.forEach(o=>{o.pos.sub(l.pos).magnitude()<o.radius&&(i.get(l.id).data.dragging=o)})})},Te.up=s=>{s.forEach(i=>{q&&q.pointer===i.id&&(Qt()&&F.push(new le(q.pos,d.editingCircle.radius,d.editingCircle.mass)),q=void 0)})},P.element.addEventListener("click",s=>{let i=new m(s.clientX,s.clientY);for(const r of F)if(r.pos.sub(i).magnitude()<r.radius){S=r,d.selectedStore.set(S);return}d.selectedStore.set(void 0),S=void 0});let e=Date.now()/1e3;const t=()=>{const s=Date.now()/1e3,i=s-e;zi(i),requestAnimationFrame(t),e=s,Xt=1/i};requestAnimationFrame(t)}function Jt(){if(d.world.motionEnabled)d.world.motionEnabledStore.set(!1),d.world.motionEnabled=!1;else{if(!("DeviceMotionEvent"in window)){alert("DeviceMotionEvent not supported");return}DeviceMotionEvent.requestPermission().then(n=>{if(n!=="granted"){alert("permission for DeviceMotionEvent not granted");return}d.world.motionEnabledStore.set(!0),d.world.motionEnabled=!0,window.addEventListener("devicemotion",e=>{let t=new qt(e.accelerationIncludingGravity.x,e.accelerationIncludingGravity.y,e.accelerationIncludingGravity.z),s=new qt(e.acceleration.x,e.acceleration.y,e.acceleration.z),i=t.sub(s);Yt=new m(i.y,i.x).multS(-20*d.world.gravity),we=new m(s.y,s.x).multS(-2*d.world.velocity)})})}}function Qt(){for(const n of F)if(n.pos.sub(q.pos).magnitude()<n.radius+d.editingCircle.radius)return!1;return!0}const Le=class{constructor(e,t,s){M(this,"id",Le.id++);M(this,"pos");M(this,"oldPos");M(this,"vel");M(this,"radius");M(this,"mass");this.pos=e,this.vel=new m(0,0),this.radius=t,this.mass=s}get impulse(){return this.vel.multS(this.mass)}set impulse(e){this.vel=e.divS(this.mass)}update(e,t){let s=this.pos.add(this.vel.multS(e)),i=this.vel.copy();t.forEach(h=>{P.drawCircle(h.position,10,{color:w.blue}),P.drawLine(h.position,h.position.add(h.normal.multS(20)));const u=s.sub(h.position);let y=1/this.mass,_=1/h.other.mass,b=h.other.vel.sub(this.vel).dot(h.normal),I=d.world.restetution,E=-(1+I)*b/(y+_);i=this.vel.sub(h.normal.multS(E*y)),s=Le.reflect(u,h.normal).add(h.position)}),this.oldPos=this.pos,this.pos=s,this.vel=i;let r=d.world.airDensity*1e-6,l=.47,o=this.vel.magnitude()*(-r*l*this.radius);this.vel=this.vel.add(this.vel.multS(e*o)),d.world.motionEnabled&&(this.vel=this.vel.add(Yt.multS(e)),this.vel=this.vel.add(we))}static reflect(e,t){return e.sub(t.multS(2*e.dot(t)))}getAllCollisions(e,t,s){return[...this.getCollisions(this.pos,e),...this.getWallCollision(s,this.pos)]}getCollisions(e,t){let s=[];return t.forEach(i=>{if(i!==this&&i.pos.sub(e).magnitude()<i.radius+this.radius){let r=i.pos.sub(e).normalized(),l=e.lerp(i.pos,this.radius/(this.radius+i.radius)).add(r.multS(-this.radius));s.push({normal:r,position:l,other:{vel:i.vel.copy(),mass:i.mass}})}}),s}getWallCollision(e,t){let s=[],i=this.getOvershoot(t,e),r=i.map(l=>-Math.sign(l));if(r.x!==0){r=new m(r.x,0);let l=t.sub(i);s.push({normal:r,position:l,other:{vel:new m(0,0),mass:Number.POSITIVE_INFINITY}})}if(r.y!==0){r=new m(0,r.y);let l=t.sub(i);s.push({normal:r,position:l,other:{vel:new m(0,0),mass:Number.POSITIVE_INFINITY}})}return s}getOvershoot(e,t){let s=this.outsideRect(e,t);return new m(s.left?e.x-this.radius:s.right?e.x-t.x+this.radius:0,s.top?e.y-this.radius:s.bottom?e.y-t.y+this.radius:0)}outsideRect(e,t){let s=e.x-this.radius<0,i=e.x+this.radius>t.x,r=e.y-this.radius<0,l=e.y+this.radius>t.y;return{genral:s||i||r||l,x:s||i,y:r||l,left:s,right:i,top:r,bottom:l}}lateUpdate(e){}draw(e,t){if(e.drawCircle(this.pos,this.radius),!d.running){let s=this.pos,i=s.add(this.vel.divS(10));e.drawLine(s,i,{cap:"round",width:12,color:w.white})}}bgDraw(e,t){if(d.drawTraces){let s=1/d.traceFreq;Ht%s<d.traceWidth*s&&t.drawLine(this.oldPos,this.pos,{width:2})}}};let le=Le;M(le,"id",0);let F=[];function zi(n){P.clear(),P.beginDraw();const e=new m(window.innerWidth,window.innerHeight),t=new m(e.x-me,e.y);if(d.running){we=we.divS(d.stepsPerFrame);for(let i=0;i<d.stepsPerFrame;i++){let r=n/d.stepsPerFrame,l=F.map(o=>o.getAllCollisions(F,r,t));F.forEach((o,h)=>o.update(r,l[h])),F.forEach(o=>o.bgDraw(P,be)),Ht+=r}}F.forEach(i=>i.draw(P,be)),we=new m(0,0),P.drawRect(new m(e.x-me,0),new m(me,e.y),{color:w.hex("#111111")});let s=e.subS(me/2);if(P.drawCircle(s,d.editingCircle.radius),q&&P.drawCircle(q.pos,d.editingCircle.radius,{color:Qt()?w.hex("#005500"):w.hex("#333333")}),S)if(P.drawCircle(S.pos,S.radius+10,{borderColor:w.red,borderWidth:3,fill:!1}),d.running)P.drawLine(S.pos,S.pos.add(S.vel.divS(10)),{width:12,cap:"round",color:w.white}),P.drawLine(S.pos,S.pos.add(S.vel.divS(10)),{width:8,cap:"round",color:w.hex("#23393d")});else{let i=S.pos,r=i.add(S.vel.divS(10));P.drawLine(i,r,{cap:"round",width:12,color:w.white}),P.drawCircle(r,20,{color:w.white})}Te.pointers.forEach(i=>{const r=i.delta();if(P.drawCircle(i.pos,10,{color:w.hex("#555555")}),q&&q.pointer===i.id&&(q.pos=q.pos.add(r)),i.data.dragging){let l=i.data.dragging;d.running?l.vel=r.divS(n):l.pos=l.pos.add(r)}if(i.data.draggingVel){let l=i.data.draggingVel;l.vel=l.vel.add(r.multS(10))}}),P.endDraw()}const N=Object.freeze(Object.defineProperty({__proto__:null,init:Ut,settings:d,getFramerate:Be,clearPaper:Bt,enableMotion:Jt,removeSelected:Gt,useExperiment:Kt,CircleObject:le},Symbol.toStringTag,{value:"Module"}));function Ti(n){var _;let e,t,s,i,r,l,o=((_=n[2])!=null?_:"")+"",h,u,y;return{c(){e=x("div"),t=x("div"),s=re(n[1]),i=re(`:
        `),r=x("input"),l=v(),h=re(o),C(r,"type","number"),r.value=n[0],C(r,"class","svelte-121lgjv"),C(t,"class","label svelte-121lgjv"),C(e,"class","slider")},m(b,I){ne(b,e,I),a(e,t),a(t,s),a(t,i),a(t,r),n[10](r),a(t,l),a(t,h),u||(y=[A(r,"input",n[11]),A(e,"pointerdown",n[4]),A(e,"pointermove",fi(n[6])),A(e,"pointerup",n[5]),A(e,"pointercancel",n[5]),A(e,"pointerleave",n[5])],u=!0)},p(b,[I]){var E;I&2&&$e(s,b[1]),I&1&&r.value!==b[0]&&(r.value=b[0]),I&4&&o!==(o=((E=b[2])!=null?E:"")+"")&&$e(h,o)},i:ee,o:ee,d(b){b&&Z(e),n[10](null),u=!1,oe(y)}}}function $i(n,e,t){let{label:s}=e,{value:i}=e,{min:r=void 0}=e,{max:l=void 0}=e,{step:o=1}=e,{unit:h=void 0}=e,u,y;function _(g){g.currentTarget.setPointerCapture(g.pointerId),y=g.clientX}function b(g){y=void 0}function I(g){if(y!==void 0){let p=g.clientX-y;t(0,i+=p*o*(g.shiftKey?10:1)/(g.ctrlKey?10:1)),t(0,i=Math.round(i/o)*o),r!==void 0&&t(0,i=Math.max(i,r)),l!==void 0&&t(0,i=Math.min(i,l)),y=g.clientX}}function E(g){k[g?"unshift":"push"](()=>{u=g,t(3,u)})}const Y=g=>{t(0,i=parseFloat(g.currentTarget.value)),isNaN(i)&&t(0,i=0)};return n.$$set=g=>{"label"in g&&t(1,s=g.label),"value"in g&&t(0,i=g.value),"min"in g&&t(7,r=g.min),"max"in g&&t(8,l=g.max),"step"in g&&t(9,o=g.step),"unit"in g&&t(2,h=g.unit)},[i,s,h,u,_,b,I,r,l,o,E,Y]}class H extends jt{constructor(e){super(),Ot(this,e,$i,Ti,Ge,{label:1,value:0,min:7,max:8,step:9,unit:2})}}function Rt(n){let e,t,s,i,r,l,o,h,u,y,_,b;function I(p){n[19](p)}let E={label:"radius",min:10,max:100,step:1};n[3].radius!==void 0&&(E.value=n[3].radius),s=new H({props:E}),k.push(()=>j(s,"value",I));function Y(p){n[20](p)}let g={label:"mass",min:1};return n[3].mass!==void 0&&(g.value=n[3].mass),l=new H({props:g}),k.push(()=>j(l,"value",Y)),{c(){e=x("hr"),t=v(),V(s.$$.fragment),r=v(),V(l.$$.fragment),h=v(),u=x("div"),u.textContent="delete selected",C(u,"class","btn svelte-ogc81v")},m(p,z){ne(p,e,z),ne(p,t,z),W(s,p,z),ne(p,r,z),W(l,p,z),ne(p,h,z),ne(p,u,z),y=!0,_||(b=A(u,"click",n[21]),_=!0)},p(p,z){const te={};!i&&z&8&&(i=!0,te.value=p[3].radius,O(()=>i=!1)),s.$set(te);const ie={};!o&&z&8&&(o=!0,ie.value=p[3].mass,O(()=>o=!1)),l.$set(ie)},i(p){y||($(s.$$.fragment,p),$(l.$$.fragment,p),y=!0)},o(p){L(s.$$.fragment,p),L(l.$$.fragment,p),y=!1},d(p){p&&Z(e),p&&Z(t),R(s,p),p&&Z(r),R(l,p),p&&Z(h),p&&Z(u),_=!1,b()}}}function ki(n){let e,t,s,i,r,l,o,h,u,y,_,b,I,E,Y,g,p,z,te,ie,ae,xe,X,f,Ke,B,qe,Ue,Je,Qe,ye,Ze,G,Fe,et,K,We,tt,it,nt,Se,st,U,Re,rt,he,lt,ot,at,Ee,ut,fe,Ce=n[4]?"disable":"enable",Ae,dt,J,Ne,ct,Q,Oe,ht,ft,gt,Pe,pt,ge,mt,ue,je,vt;function Zt(c){n[8](c)}let wt={label:"steps",min:1,max:1e3,step:1};n[0].settings.stepsPerFrame!==void 0&&(wt.value=n[0].settings.stepsPerFrame),g=new H({props:wt}),k.push(()=>j(g,"value",Zt));function ei(c){n[9](c)}let _t={label:"restetution",min:0,max:1,step:.01};n[0].settings.world.restetution!==void 0&&(_t.value=n[0].settings.world.restetution),X=new H({props:_t}),k.push(()=>j(X,"value",ei));function ti(c){n[10](c)}let bt={label:"density",min:0,max:100,step:.1};n[0].settings.world.airDensity!==void 0&&(bt.value=n[0].settings.world.airDensity),B=new H({props:bt}),k.push(()=>j(B,"value",ti));function ii(c){n[11](c)}let xt={label:"radius",min:10,max:100,step:1};n[0].settings.editingCircle.radius!==void 0&&(xt.value=n[0].settings.editingCircle.radius),G=new H({props:xt}),k.push(()=>j(G,"value",ii));function ni(c){n[12](c)}let yt={label:"mass",min:1};n[0].settings.editingCircle.mass!==void 0&&(yt.value=n[0].settings.editingCircle.mass),K=new H({props:yt}),k.push(()=>j(K,"value",ni));function si(c){n[13](c)}let St={label:"draw freq",min:1,max:60,step:1,unit:"Hz"};n[0].settings.traceFreq!==void 0&&(St.value=n[0].settings.traceFreq),U=new H({props:St}),k.push(()=>j(U,"value",si));function ri(c){n[16](c)}let Et={label:"gravity",min:0,max:100,step:1};n[0].settings.world.gravity!==void 0&&(Et.value=n[0].settings.world.gravity),J=new H({props:Et}),k.push(()=>j(J,"value",ri));function li(c){n[17](c)}let Ct={label:"velocity",min:0,max:100,step:1};n[0].settings.world.velocity!==void 0&&(Ct.value=n[0].settings.world.velocity),Q=new H({props:Ct}),k.push(()=>j(Q,"value",li));let D=n[3]&&Rt(n);return{c(){e=x("div"),t=x("div"),s=v(),i=x("div"),r=x("div"),r.textContent="Simulation",l=v(),o=x("div"),h=re("fps: "),u=re(n[2]),y=v(),_=x("div"),b=x("label"),b.textContent="running:",I=v(),E=x("input"),Y=v(),V(g.$$.fragment),z=v(),te=x("hr"),ie=v(),ae=x("div"),ae.textContent="World",xe=v(),V(X.$$.fragment),Ke=v(),V(B.$$.fragment),Ue=v(),Je=x("hr"),Qe=v(),ye=x("div"),ye.textContent="Object",Ze=v(),V(G.$$.fragment),et=v(),V(K.$$.fragment),tt=v(),it=x("hr"),nt=v(),Se=x("div"),Se.textContent="Paper",st=v(),V(U.$$.fragment),rt=v(),he=x("div"),he.textContent="clear",lt=v(),ot=x("hr"),at=v(),Ee=x("div"),Ee.textContent="Device Motion",ut=v(),fe=x("div"),Ae=re(Ce),dt=v(),V(J.$$.fragment),ct=v(),V(Q.$$.fragment),ht=v(),ft=x("hr"),gt=v(),Pe=x("div"),Pe.textContent="Experiments",pt=v(),ge=x("div"),ge.textContent="2 Object Collision",mt=v(),D&&D.c(),C(t,"class","canvas-container svelte-ogc81v"),C(r,"class","heading svelte-ogc81v"),C(b,"for","check-running"),C(b,"class","btn svelte-ogc81v"),C(E,"type","checkbox"),C(E,"id","check-running"),C(_,"class","running svelte-ogc81v"),C(ae,"class","heading svelte-ogc81v"),C(ye,"class","heading svelte-ogc81v"),C(Se,"class","heading svelte-ogc81v"),C(he,"class","btn svelte-ogc81v"),C(Ee,"class","heading svelte-ogc81v"),C(fe,"class","btn svelte-ogc81v"),C(Pe,"class","heading svelte-ogc81v"),C(ge,"class","btn svelte-ogc81v"),C(i,"class","ui svelte-ogc81v"),C(e,"class","container svelte-ogc81v")},m(c,T){ne(c,e,T),a(e,t),n[6](t),a(e,s),a(e,i),a(i,r),a(i,l),a(i,o),a(o,h),a(o,u),a(i,y),a(i,_),a(_,b),a(_,I),a(_,E),E.checked=n[0].settings.running,a(i,Y),W(g,i,null),a(i,z),a(i,te),a(i,ie),a(i,ae),a(i,xe),W(X,i,null),a(i,Ke),W(B,i,null),a(i,Ue),a(i,Je),a(i,Qe),a(i,ye),a(i,Ze),W(G,i,null),a(i,et),W(K,i,null),a(i,tt),a(i,it),a(i,nt),a(i,Se),a(i,st),W(U,i,null),a(i,rt),a(i,he),a(i,lt),a(i,ot),a(i,at),a(i,Ee),a(i,ut),a(i,fe),a(fe,Ae),a(i,dt),W(J,i,null),a(i,ct),W(Q,i,null),a(i,ht),a(i,ft),a(i,gt),a(i,Pe),a(i,pt),a(i,ge),a(i,mt),D&&D.m(i,null),ue=!0,je||(vt=[A(E,"change",n[7]),A(he,"click",n[14]),A(fe,"click",n[15]),A(ge,"click",n[18])],je=!0)},p(c,[T]){(!ue||T&4)&&$e(u,c[2]),T&1&&(E.checked=c[0].settings.running);const Pt={};!p&&T&1&&(p=!0,Pt.value=c[0].settings.stepsPerFrame,O(()=>p=!1)),g.$set(Pt);const It={};!f&&T&1&&(f=!0,It.value=c[0].settings.world.restetution,O(()=>f=!1)),X.$set(It);const Dt={};!qe&&T&1&&(qe=!0,Dt.value=c[0].settings.world.airDensity,O(()=>qe=!1)),B.$set(Dt);const Mt={};!Fe&&T&1&&(Fe=!0,Mt.value=c[0].settings.editingCircle.radius,O(()=>Fe=!1)),G.$set(Mt);const zt={};!We&&T&1&&(We=!0,zt.value=c[0].settings.editingCircle.mass,O(()=>We=!1)),K.$set(zt);const Tt={};!Re&&T&1&&(Re=!0,Tt.value=c[0].settings.traceFreq,O(()=>Re=!1)),U.$set(Tt),(!ue||T&16)&&Ce!==(Ce=c[4]?"disable":"enable")&&$e(Ae,Ce);const $t={};!Ne&&T&1&&(Ne=!0,$t.value=c[0].settings.world.gravity,O(()=>Ne=!1)),J.$set($t);const kt={};!Oe&&T&1&&(Oe=!0,kt.value=c[0].settings.world.velocity,O(()=>Oe=!1)),Q.$set(kt),c[3]?D?(D.p(c,T),T&8&&$(D,1)):(D=Rt(c),D.c(),$(D,1),D.m(i,null)):D&&(bi(),L(D,1,1,()=>{D=null}),xi())},i(c){ue||($(g.$$.fragment,c),$(X.$$.fragment,c),$(B.$$.fragment,c),$(G.$$.fragment,c),$(K.$$.fragment,c),$(U.$$.fragment,c),$(J.$$.fragment,c),$(Q.$$.fragment,c),$(D),ue=!0)},o(c){L(g.$$.fragment,c),L(X.$$.fragment,c),L(B.$$.fragment,c),L(G.$$.fragment,c),L(K.$$.fragment,c),L(U.$$.fragment,c),L(J.$$.fragment,c),L(Q.$$.fragment,c),L(D),ue=!1},d(c){c&&Z(e),n[6](null),R(g),R(X),R(B),R(G),R(K),R(U),R(J),R(Q),D&&D.d(),je=!1,oe(vt)}}}function Li(n,e,t){let s,i,r=Be().toFixed(),l=d.world.motionEnabledStore;hi(n,l,f=>t(4,s=f)),setInterval(f=>t(2,r=Be().toFixed()),100);let o;d.selectedStore.subscribe(f=>{t(3,o=f)}),mi(()=>{Ut(i)});function h(f){k[f?"unshift":"push"](()=>{i=f,t(1,i)})}function u(){d.running=this.checked,t(0,N)}function y(f){n.$$.not_equal(d.stepsPerFrame,f)&&(d.stepsPerFrame=f,t(0,N))}function _(f){n.$$.not_equal(d.world.restetution,f)&&(d.world.restetution=f,t(0,N))}function b(f){n.$$.not_equal(d.world.airDensity,f)&&(d.world.airDensity=f,t(0,N))}function I(f){n.$$.not_equal(d.editingCircle.radius,f)&&(d.editingCircle.radius=f,t(0,N))}function E(f){n.$$.not_equal(d.editingCircle.mass,f)&&(d.editingCircle.mass=f,t(0,N))}function Y(f){n.$$.not_equal(d.traceFreq,f)&&(d.traceFreq=f,t(0,N))}const g=f=>Bt(),p=f=>Jt();function z(f){n.$$.not_equal(d.world.gravity,f)&&(d.world.gravity=f,t(0,N))}function te(f){n.$$.not_equal(d.world.velocity,f)&&(d.world.velocity=f,t(0,N))}const ie=f=>Kt("2-object-collision");function ae(f){n.$$.not_equal(o.radius,f)&&(o.radius=f,t(3,o))}function xe(f){n.$$.not_equal(o.mass,f)&&(o.mass=f,t(3,o))}return[N,i,r,o,s,l,h,u,y,_,b,I,E,Y,g,p,z,te,ie,ae,xe,f=>Gt()]}class qi extends jt{constructor(e){super(),Ot(this,e,Li,ki,Ge,{})}}new qi({target:document.getElementById("app")});
