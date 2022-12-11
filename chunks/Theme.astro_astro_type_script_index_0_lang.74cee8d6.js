function G(o,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function h(o){return function(t){if(Array.isArray(t))return m(t)}(o)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(o)||function(t,i){if(!!t){if(typeof t=="string")return m(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,i)}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(o,t){(t==null||t>o.length)&&(t=o.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=o[i];return e}var S,f,l,g,T,b=(S=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],f=function(){function o(e){var n=e.targetModal,r=e.triggers,a=r===void 0?[]:r,c=e.onShow,s=c===void 0?function(){}:c,d=e.onClose,u=d===void 0?function(){}:d,p=e.openTrigger,q=p===void 0?"data-micromodal-trigger":p,w=e.closeTrigger,j=w===void 0?"data-micromodal-close":w,E=e.openClass,K=E===void 0?"is-open":E,k=e.disableScroll,D=k!==void 0&&k,M=e.disableFocus,P=M!==void 0&&M,C=e.awaitCloseAnimation,$=C!==void 0&&C,L=e.awaitOpenAnimation,H=L!==void 0&&L,A=e.debugMode,R=A!==void 0&&A;(function(U,z){if(!(U instanceof z))throw new TypeError("Cannot call a class as a function")})(this,o),this.modal=document.getElementById(n),this.config={debugMode:R,disableScroll:D,openTrigger:q,closeTrigger:j,openClass:K,onShow:s,onClose:u,awaitCloseAnimation:$,awaitOpenAnimation:H,disableFocus:P},a.length>0&&this.registerTriggers.apply(this,h(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,i;return t=o,(i=[{key:"registerTriggers",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];r.filter(Boolean).forEach(function(c){c.addEventListener("click",function(s){return e.showModal(s)})})}},{key:"showModal",value:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function a(){e.modal.removeEventListener("animationend",a,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,n)}},{key:"closeModal",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,n=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",function a(){n.classList.remove(r),n.removeEventListener("animationend",a,!1)},!1)}else n.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var n=document.querySelector("body");switch(e){case"enable":Object.assign(n.style,{overflow:""});break;case"disable":Object.assign(n.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){e.keyCode===27&&this.closeModal(e),e.keyCode===9&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(S);return Array.apply(void 0,h(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var n=this.getFocusableNodes();if(n.length!==0){var r=n.filter(function(a){return!a.hasAttribute(e.config.closeTrigger)});r.length>0&&r[0].focus(),r.length===0&&n[0].focus()}}}},{key:"retainFocus",value:function(e){var n=this.getFocusableNodes();if(n.length!==0)if(n=n.filter(function(a){return a.offsetParent!==null}),this.modal.contains(document.activeElement)){var r=n.indexOf(document.activeElement);e.shiftKey&&r===0&&(n[n.length-1].focus(),e.preventDefault()),!e.shiftKey&&n.length>0&&r===n.length-1&&(n[0].focus(),e.preventDefault())}else n[0].focus()}}])&&G(t.prototype,i),o}(),l=null,g=function(o){if(!document.getElementById(o))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(o,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(o,'"></div>')),!1},T=function(o,t){if(function(e){e.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(o),!t)return!0;for(var i in t)g(i);return!0},{init:function(o){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},o),i=h(document.querySelectorAll("[".concat(t.openTrigger,"]"))),e=function(a,c){var s=[];return a.forEach(function(d){var u=d.attributes[c].value;s[u]===void 0&&(s[u]=[]),s[u].push(d)}),s}(i,t.openTrigger);if(t.debugMode!==!0||T(i,e)!==!1)for(var n in e){var r=e[n];t.targetModal=n,t.triggers=h(r),l=new f(t)}},show:function(o,t){var i=t||{};i.targetModal=o,i.debugMode===!0&&g(o)===!1||(l&&l.removeEventListeners(),(l=new f(i)).showModal())},close:function(o){o?l.closeModalById(o):l.closeModal()}});typeof window<"u"&&(window.MicroModal=b);const y="menu-modal",F=document.querySelector("#page-header"),x=document.documentElement,J=document.querySelector(`#${y} ul`),Q=document.querySelector("#open-nav-button"),V=document.querySelector("#close-nav-button"),W=()=>{b.show(y,{disableScroll:!0})},N=()=>{b.close(y)};Q.addEventListener("click",W);V.addEventListener("click",N);document.addEventListener("scroll",()=>{const o=x.clientHeight-x.scrollTop-F.offsetHeight;F.classList.toggle("fixed-header",o<0)});J.addEventListener("click",o=>{o.target.tagName==="A"&&N()});const v=["light","dark"],X=document.querySelector("#theme-switcher"),I=()=>document.documentElement.dataset.theme,O=()=>{const o=I(),t=v.indexOf(o);return v[(t+1)%v.length]},B=()=>{const o=I();document.querySelector(`#icon-theme-${o}`).classList.add("hidden");const t=O();document.querySelector(`#icon-theme-${t}`).classList.remove("hidden")};X.addEventListener("click",()=>{const o=O();document.documentElement.dataset.theme=o,localStorage.setItem("theme",o),B()});B();
