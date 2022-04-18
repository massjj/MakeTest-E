"use strict";(()=>{var x=Object.defineProperty;var a=(y,v)=>x(y,"name",{value:v,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2486],{76745:(y,v,w)=>{w.d(v,{Z:()=>t});function m(i){const r=document.createElement("pre");return r.style.width="1px",r.style.height="1px",r.style.position="fixed",r.style.top="5px",r.textContent=i,r}a(m,"createNode");function f(i){if("clipboard"in navigator)return navigator.clipboard.writeText(i.textContent);const r=getSelection();if(r==null)return Promise.reject(new Error);r.removeAllRanges();const s=document.createRange();return s.selectNodeContents(i),r.addRange(s),document.execCommand("copy"),r.removeAllRanges(),Promise.resolve()}a(f,"copyNode");function b(i){if("clipboard"in navigator)return navigator.clipboard.writeText(i);const r=document.body;if(!r)return Promise.reject(new Error);const s=m(i);return r.appendChild(s),f(s),r.removeChild(s),Promise.resolve()}a(b,"copyText");function d(i){const r=i.getAttribute("for"),s=i.getAttribute("value");function o(){i.dispatchEvent(new CustomEvent("clipboard-copy",{bubbles:!0}))}if(a(o,"trigger"),s)b(s).then(o);else if(r){const l="getRootNode"in Element.prototype?i.getRootNode():i.ownerDocument;if(!(l instanceof Document||"ShadowRoot"in window&&l instanceof ShadowRoot))return;const h=l.getElementById(r);h&&u(h).then(o)}}a(d,"copy");function u(i){return i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?b(i.value):i instanceof HTMLAnchorElement&&i.hasAttribute("href")?b(i.href):f(i)}a(u,"copyTarget");function E(i){const r=i.currentTarget;r instanceof HTMLElement&&d(r)}a(E,"clicked");function p(i){if(i.key===" "||i.key==="Enter"){const r=i.currentTarget;r instanceof HTMLElement&&(i.preventDefault(),d(r))}}a(p,"keydown");function c(i){i.currentTarget.addEventListener("keydown",p)}a(c,"focused");function n(i){i.currentTarget.removeEventListener("keydown",p)}a(n,"blurred");class e extends HTMLElement{constructor(){super();this.addEventListener("click",E),this.addEventListener("focus",c),this.addEventListener("blur",n)}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","button")}get value(){return this.getAttribute("value")||""}set value(r){this.setAttribute("value",r)}}a(e,"ClipboardCopyElement"),window.customElements.get("clipboard-copy")||(window.ClipboardCopyElement=e,window.customElements.define("clipboard-copy",e));const t=e},13002:(y,v,w)=>{w.d(v,{Z:()=>c});class m extends HTMLElement{constructor(){super();this.currentQuery=null,this.filter=null,this.debounceInputChange=p(()=>f(this,!0)),this.boundFilterResults=()=>{f(this,!1)}}static get observedAttributes(){return["aria-owns"]}attributeChangedCallback(e,t){t&&e==="aria-owns"&&f(this,!1)}connectedCallback(){const e=this.input;!e||(e.setAttribute("autocomplete","off"),e.setAttribute("spellcheck","false"),e.addEventListener("focus",this.boundFilterResults),e.addEventListener("change",this.boundFilterResults),e.addEventListener("input",this.debounceInputChange))}disconnectedCallback(){const e=this.input;!e||(e.removeEventListener("focus",this.boundFilterResults),e.removeEventListener("change",this.boundFilterResults),e.removeEventListener("input",this.debounceInputChange))}get input(){const e=this.querySelector("input");return e instanceof HTMLInputElement?e:null}reset(){const e=this.input;e&&(e.value="",e.dispatchEvent(new Event("change",{bubbles:!0})))}}a(m,"FilterInputElement");async function f(n,e=!1){const t=n.input;if(!t)return;const i=t.value.trim(),r=n.getAttribute("aria-owns");if(!r)return;const s=document.getElementById(r);if(!s)return;const o=s.hasAttribute("data-filter-list")?s:s.querySelector("[data-filter-list]");if(!o||(n.dispatchEvent(new CustomEvent("filter-input-start",{bubbles:!0})),e&&n.currentQuery===i))return;n.currentQuery=i;const l=n.filter||b,h=o.childElementCount;let g=0,A=!1;for(const L of Array.from(o.children)){if(!(L instanceof HTMLElement))continue;const T=d(L),_=l(L,T,i);_.hideNew===!0&&(A=_.hideNew),L.hidden=!_.match,_.match&&g++}const k=s.querySelector("[data-filter-new-item]"),C=!!k&&i.length>0&&!A;k instanceof HTMLElement&&(k.hidden=!C,C&&u(k,i)),E(s,g>0||C),n.dispatchEvent(new CustomEvent("filter-input-updated",{bubbles:!0,detail:{count:g,total:h}}))}a(f,"filterResults");function b(n,e,t){return{match:e.toLowerCase().indexOf(t.toLowerCase())!==-1,hideNew:e===t}}a(b,"matchSubstring");function d(n){return((n.querySelector("[data-filter-item-text]")||n).textContent||"").trim()}a(d,"getText");function u(n,e){const t=n.querySelector("[data-filter-new-item-text]");t&&(t.textContent=e);const i=n.querySelector("[data-filter-new-item-value]");(i instanceof HTMLInputElement||i instanceof HTMLButtonElement)&&(i.value=e)}a(u,"updateNewItem");function E(n,e){const t=n.querySelector("[data-filter-empty-state]");t instanceof HTMLElement&&(t.hidden=e)}a(E,"toggleBlankslate");function p(n){let e;return function(){clearTimeout(e),e=setTimeout(()=>{clearTimeout(e),n()},300)}}a(p,"debounce");const c=m;window.customElements.get("filter-input")||(window.FilterInputElement=m,window.customElements.define("filter-input",m))},88309:(y,v,w)=>{w.d(v,{Z:()=>p});const m=new WeakMap;class f extends HTMLElement{constructor(){super();const n=d.bind(null,this,!0),e={currentQuery:null,oninput:E(n),fetch:n,controller:null};m.set(this,e)}static get observedAttributes(){return["src"]}attributeChangedCallback(n,e){e&&n==="src"&&d(this,!1)}connectedCallback(){const n=this.input;if(!n)return;n.setAttribute("autocomplete","off"),n.setAttribute("spellcheck","false");const e=m.get(this);!e||(n.addEventListener("focus",e.fetch),n.addEventListener("change",e.fetch),n.addEventListener("input",e.oninput))}disconnectedCallback(){const n=this.input;if(!n)return;const e=m.get(this);!e||(n.removeEventListener("focus",e.fetch),n.removeEventListener("change",e.fetch),n.removeEventListener("input",e.oninput))}get input(){const n=this.querySelector("input, textarea");return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null}get src(){return this.getAttribute("src")||""}set src(n){this.setAttribute("src",n)}}a(f,"RemoteInputElement");function b(){return"AbortController"in window?new AbortController:{signal:null,abort(){}}}a(b,"makeAbortController");async function d(c,n){const e=c.input;if(!e)return;const t=m.get(c);if(!t)return;const i=e.value;if(n&&t.currentQuery===i)return;t.currentQuery=i;const r=c.src;if(!r)return;const s=document.getElementById(c.getAttribute("aria-owns")||"");if(!s)return;const o=new URL(r,window.location.href),l=new URLSearchParams(o.search);l.append(c.getAttribute("param")||"q",i),o.search=l.toString(),t.controller?t.controller.abort():(c.dispatchEvent(new CustomEvent("loadstart")),c.setAttribute("loading","")),t.controller=b();let h,g="";try{h=await u(c,o.toString(),{signal:t.controller.signal,credentials:"same-origin",headers:{accept:"text/fragment+html"}}),g=await h.text(),c.removeAttribute("loading"),t.controller=null}catch(A){A.name!=="AbortError"&&(c.removeAttribute("loading"),t.controller=null);return}h&&h.ok?(s.innerHTML=g,c.dispatchEvent(new CustomEvent("remote-input-success",{bubbles:!0}))):c.dispatchEvent(new CustomEvent("remote-input-error",{bubbles:!0}))}a(d,"fetchResults");async function u(c,n,e){try{const t=await fetch(n,e);return c.dispatchEvent(new CustomEvent("load")),c.dispatchEvent(new CustomEvent("loadend")),t}catch(t){throw t.name!=="AbortError"&&(c.dispatchEvent(new CustomEvent("error")),c.dispatchEvent(new CustomEvent("loadend"))),t}}a(u,"fetchWithNetworkEvents");function E(c){let n;return function(){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),c()},300)}}a(E,"debounce");const p=f;window.customElements.get("remote-input")||(window.RemoteInputElement=f,window.customElements.define("remote-input",f))},29501:(y,v,w)=>{w.d(v,{Z:()=>f});function m(d){return Array.from(d.querySelectorAll('[role="tablist"] [role="tab"]')).filter(u=>u instanceof HTMLElement&&u.closest(d.tagName)===d)}a(m,"getTabs");class f extends HTMLElement{constructor(){super();this.addEventListener("keydown",u=>{const E=u.target;if(!(E instanceof HTMLElement)||E.closest(this.tagName)!==this||E.getAttribute("role")!=="tab"&&!E.closest('[role="tablist"]'))return;const p=m(this),c=p.indexOf(p.find(n=>n.matches('[aria-selected="true"]')));if(u.code==="ArrowRight"){let n=c+1;n>=p.length&&(n=0),b(this,n)}else if(u.code==="ArrowLeft"){let n=c-1;n<0&&(n=p.length-1),b(this,n)}else u.code==="Home"?(b(this,0),u.preventDefault()):u.code==="End"&&(b(this,p.length-1),u.preventDefault())}),this.addEventListener("click",u=>{const E=m(this);if(!(u.target instanceof Element)||u.target.closest(this.tagName)!==this)return;const p=u.target.closest('[role="tab"]');if(!(p instanceof HTMLElement)||!p.closest('[role="tablist"]'))return;const c=E.indexOf(p);b(this,c)})}connectedCallback(){for(const u of m(this))u.hasAttribute("aria-selected")||u.setAttribute("aria-selected","false"),u.hasAttribute("tabindex")||(u.getAttribute("aria-selected")==="true"?u.setAttribute("tabindex","0"):u.setAttribute("tabindex","-1"))}}a(f,"TabContainerElement");function b(d,u){const E=m(d),p=Array.from(d.querySelectorAll('[role="tabpanel"]')).filter(t=>t.closest(d.tagName)===d),c=E[u],n=p[u];if(!!d.dispatchEvent(new CustomEvent("tab-container-change",{bubbles:!0,cancelable:!0,detail:{relatedTarget:n}}))){for(const t of E)t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1");for(const t of p)t.hidden=!0,!t.hasAttribute("tabindex")&&!t.hasAttribute("data-tab-container-no-tabstop")&&t.setAttribute("tabindex","0");c.setAttribute("aria-selected","true"),c.setAttribute("tabindex","0"),c.focus(),n.hidden=!1,d.dispatchEvent(new CustomEvent("tab-container-changed",{bubbles:!0,detail:{relatedTarget:n}}))}}a(b,"selectTab"),window.customElements.get("tab-container")||(window.TabContainerElement=f,window.customElements.define("tab-container",f))},46481:(y,v,w)=>{w.d(v,{Z:()=>i});var m=w(10160);class f extends CustomEvent{constructor(s,o){super(s,o);this.relatedTarget=o.relatedTarget}}a(f,"AutocompleteEvent");function b(r,s=0){let o;return function(...l){clearTimeout(o),o=window.setTimeout(()=>{clearTimeout(o),r(...l)},s)}}a(b,"debounce");const d=new WeakMap;function u(r,s){const o=new XMLHttpRequest;return o.open("GET",s,!0),o.setRequestHeader("Accept","text/fragment+html"),E(r,o)}a(u,"fragment");function E(r,s){const o=d.get(r);o&&o.abort(),d.set(r,s);const l=a(()=>d.delete(r),"clear"),h=p(s);return h.then(l,l),h}a(E,"request");function p(r){return new Promise((s,o)=>{r.onload=function(){r.status>=200&&r.status<300?s(r.responseText):o(new Error(r.responseText))},r.onerror=o,r.send()})}a(p,"send");const c=window.testScreenReaderDelay||100;class n{constructor(s,o,l,h=!1){var g;if(this.container=s,this.input=o,this.results=l,this.combobox=new m.Z(o,l),this.feedback=document.getElementById(`${this.results.id}-feedback`),this.autoselectEnabled=h,this.clearButton=document.getElementById(`${this.input.id||this.input.name}-clear`),this.clientOptions=l.querySelectorAll("[role=option]"),this.feedback&&(this.feedback.setAttribute("aria-live","polite"),this.feedback.setAttribute("aria-atomic","true")),this.clearButton&&!this.clearButton.getAttribute("aria-label")){const A=document.querySelector(`label[for="${this.input.name}"]`);this.clearButton.setAttribute("aria-label","clear:"),this.clearButton.setAttribute("aria-labelledby",`${this.clearButton.id} ${(A==null?void 0:A.id)||""}`)}this.input.getAttribute("aria-expanded")||this.input.setAttribute("aria-expanded","false"),this.results.hidden=!0,this.results.setAttribute("aria-label","results"),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("spellcheck","false"),this.interactingWithList=!1,this.onInputChange=b(this.onInputChange.bind(this),300),this.onResultsMouseDown=this.onResultsMouseDown.bind(this),this.onInputBlur=this.onInputBlur.bind(this),this.onInputFocus=this.onInputFocus.bind(this),this.onKeydown=this.onKeydown.bind(this),this.onCommit=this.onCommit.bind(this),this.handleClear=this.handleClear.bind(this),this.input.addEventListener("keydown",this.onKeydown),this.input.addEventListener("focus",this.onInputFocus),this.input.addEventListener("blur",this.onInputBlur),this.input.addEventListener("input",this.onInputChange),this.results.addEventListener("mousedown",this.onResultsMouseDown),this.results.addEventListener("combobox-commit",this.onCommit),(g=this.clearButton)===null||g===void 0||g.addEventListener("click",this.handleClear)}destroy(){this.input.removeEventListener("keydown",this.onKeydown),this.input.removeEventListener("focus",this.onInputFocus),this.input.removeEventListener("blur",this.onInputBlur),this.input.removeEventListener("input",this.onInputChange),this.results.removeEventListener("mousedown",this.onResultsMouseDown),this.results.removeEventListener("combobox-commit",this.onCommit)}handleClear(s){s.preventDefault(),this.input.getAttribute("aria-expanded")==="true"&&(this.input.setAttribute("aria-expanded","false"),this.updateFeedbackForScreenReaders("Results hidden.")),this.input.value="",this.container.value="",this.input.focus(),this.input.dispatchEvent(new Event("change")),this.container.open=!1}onKeydown(s){if(s.key==="Enter"&&this.container.open&&this.autoselectEnabled){const o=this.results.children[0];o&&(s.stopPropagation(),s.preventDefault(),this.onCommit({target:o}))}if(s.key==="Escape"&&this.container.open)this.container.open=!1,s.stopPropagation(),s.preventDefault();else if(s.altKey&&s.key==="ArrowUp"&&this.container.open)this.container.open=!1,s.stopPropagation(),s.preventDefault();else if(s.altKey&&s.key==="ArrowDown"&&!this.container.open){if(!this.input.value.trim())return;this.container.open=!0,s.stopPropagation(),s.preventDefault()}}onInputFocus(){this.fetchResults()}onInputBlur(){if(this.interactingWithList){this.interactingWithList=!1;return}this.container.open=!1}onCommit({target:s}){const o=s;if(!(o instanceof HTMLElement)||(this.container.open=!1,o instanceof HTMLAnchorElement))return;const l=o.getAttribute("data-autocomplete-value")||o.textContent;this.updateFeedbackForScreenReaders(`${o.textContent||""} selected.`),this.container.value=l,l||this.updateFeedbackForScreenReaders("Results hidden.")}onResultsMouseDown(){this.interactingWithList=!0}onInputChange(){this.feedback&&this.feedback.innerHTML&&(this.feedback.innerHTML=""),this.container.removeAttribute("value"),this.fetchResults()}identifyOptions(){let s=0;for(const o of this.results.querySelectorAll('[role="option"]:not([id])'))o.id=`${this.results.id}-option-${s++}`}updateFeedbackForScreenReaders(s){setTimeout(()=>{this.feedback&&(this.feedback.innerHTML=s)},c)}fetchResults(){const s=this.input.value.trim();if(!s){this.container.open=!1;return}const o=this.container.src;if(!o)return;const l=new URL(o,window.location.href),h=new URLSearchParams(l.search.slice(1));h.append("q",s),l.search=h.toString(),this.container.dispatchEvent(new CustomEvent("loadstart")),u(this.input,l.toString()).then(g=>{this.results.innerHTML=g,this.identifyOptions();const A=this.results.querySelectorAll('[role="option"]'),k=!!A.length,C=A.length,[L]=A,T=L==null?void 0:L.textContent;this.autoselectEnabled&&T?this.updateFeedbackForScreenReaders(`${C} results. ${T} is the top result: Press Enter to activate.`):this.updateFeedbackForScreenReaders(`${C||"No"} results.`),this.container.open=k,this.container.dispatchEvent(new CustomEvent("load")),this.container.dispatchEvent(new CustomEvent("loadend"))}).catch(()=>{this.container.dispatchEvent(new CustomEvent("error")),this.container.dispatchEvent(new CustomEvent("loadend"))})}open(){!this.results.hidden||(this.combobox.start(),this.results.hidden=!1)}close(){this.results.hidden||(this.combobox.stop(),this.results.hidden=!0)}}a(n,"Autocomplete");const e=new WeakMap;class t extends HTMLElement{connectedCallback(){const s=this.getAttribute("for");if(!s)return;const o=this.querySelector("input"),l=document.getElementById(s);if(!(o instanceof HTMLInputElement)||!l)return;const h=this.getAttribute("data-autoselect")==="true";e.set(this,new n(this,o,l,h)),l.setAttribute("role","listbox")}disconnectedCallback(){const s=e.get(this);s&&(s.destroy(),e.delete(this))}get src(){return this.getAttribute("src")||""}set src(s){this.setAttribute("src",s)}get value(){return this.getAttribute("value")||""}set value(s){this.setAttribute("value",s)}get open(){return this.hasAttribute("open")}set open(s){s?this.setAttribute("open",""):this.removeAttribute("open")}static get observedAttributes(){return["open","value"]}attributeChangedCallback(s,o,l){if(o===l)return;const h=e.get(this);if(!!h)switch(s){case"open":l===null?h.close():h.open();break;case"value":l!==null&&(h.input.value=l),this.dispatchEvent(new f("auto-complete-change",{bubbles:!0,relatedTarget:h.input}));break}}}a(t,"AutocompleteElement"),window.customElements.get("auto-complete")||(window.AutocompleteElement=t,window.customElements.define("auto-complete",t));const i=t},10160:(y,v,w)=>{w.d(v,{Z:()=>f});const m=!!navigator.userAgent.match(/Macintosh/);class f{constructor(i,r){this.input=i,this.list=r,this.isComposing=!1,r.id||(r.id=`combobox-${Math.random().toString().slice(2,6)}`),this.keyboardEventHandler=s=>b(s,this),this.compositionEventHandler=s=>c(s,this),this.inputHandler=this.clearSelection.bind(this),i.setAttribute("role","combobox"),i.setAttribute("aria-controls",r.id),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-autocomplete","list"),i.setAttribute("aria-haspopup","listbox")}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute("role"),this.input.removeAttribute("aria-controls"),this.input.removeAttribute("aria-expanded"),this.input.removeAttribute("aria-autocomplete"),this.input.removeAttribute("aria-haspopup")}start(){this.input.setAttribute("aria-expanded","true"),this.input.addEventListener("compositionstart",this.compositionEventHandler),this.input.addEventListener("compositionend",this.compositionEventHandler),this.input.addEventListener("input",this.inputHandler),this.input.addEventListener("keydown",this.keyboardEventHandler),this.list.addEventListener("click",d)}stop(){this.clearSelection(),this.input.setAttribute("aria-expanded","false"),this.input.removeEventListener("compositionstart",this.compositionEventHandler),this.input.removeEventListener("compositionend",this.compositionEventHandler),this.input.removeEventListener("input",this.inputHandler),this.input.removeEventListener("keydown",this.keyboardEventHandler),this.list.removeEventListener("click",d)}navigate(i=1){const r=Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(p)[0],s=Array.from(this.list.querySelectorAll('[role="option"]')).filter(p),o=s.indexOf(r);if(o===s.length-1&&i===1||o===0&&i===-1){this.clearSelection(),this.input.focus();return}let l=i===1?0:s.length-1;if(r&&o>=0){const g=o+i;g>=0&&g<s.length&&(l=g)}const h=s[l];if(!!h)for(const g of s)h===g?(this.input.setAttribute("aria-activedescendant",h.id),h.setAttribute("aria-selected","true"),n(this.list,h)):g.setAttribute("aria-selected","false")}clearSelection(){this.input.removeAttribute("aria-activedescendant");for(const i of this.list.querySelectorAll('[aria-selected="true"]'))i.setAttribute("aria-selected","false")}}a(f,"Combobox");function b(t,i){if(!(t.shiftKey||t.metaKey||t.altKey)&&!(!m&&t.ctrlKey)&&!i.isComposing)switch(t.key){case"Enter":case"Tab":u(i.input,i.list)&&t.preventDefault();break;case"Escape":i.clearSelection();break;case"ArrowDown":i.navigate(1),t.preventDefault();break;case"ArrowUp":i.navigate(-1),t.preventDefault();break;case"n":m&&t.ctrlKey&&(i.navigate(1),t.preventDefault());break;case"p":m&&t.ctrlKey&&(i.navigate(-1),t.preventDefault());break;default:if(t.ctrlKey)break;i.clearSelection()}}a(b,"keyboardBindings");function d(t){if(!(t.target instanceof Element))return;const i=t.target.closest('[role="option"]');!i||i.getAttribute("aria-disabled")!=="true"&&E(i)}a(d,"commitWithElement");function u(t,i){const r=i.querySelector('[aria-selected="true"]');return r?(r.getAttribute("aria-disabled")==="true"||r.click(),!0):!1}a(u,"commit");function E(t){t.dispatchEvent(new CustomEvent("combobox-commit",{bubbles:!0}))}a(E,"fireCommitEvent");function p(t){return!t.hidden&&!(t instanceof HTMLInputElement&&t.type==="hidden")&&(t.offsetWidth>0||t.offsetHeight>0)}a(p,"visible");function c(t,i){i.isComposing=t.type==="compositionstart",!!document.getElementById(i.input.getAttribute("aria-controls")||"")&&i.clearSelection()}a(c,"trackComposition");function n(t,i){e(t,i)||(t.scrollTop=i.offsetTop)}a(n,"scrollTo");function e(t,i){const r=t.scrollTop,s=r+t.clientHeight,o=i.offsetTop,l=o+i.clientHeight;return o>=r&&l<=s}a(e,"inViewport")},27034:(y,v,w)=>{w.d(v,{Z:()=>c});const m=new WeakMap,f=new IntersectionObserver(n=>{for(const e of n)if(e.isIntersecting){const{target:t}=e;if(f.unobserve(t),!(t instanceof c))return;t.loading==="lazy"&&d(t)}},{rootMargin:"0px 0px 256px 0px",threshold:.01});function b(){return new Promise(n=>setTimeout(n,0))}a(b,"task");async function d(n){return f.unobserve(n),u(n).then(function(e){const t=document.createElement("template");t.innerHTML=e;const i=document.importNode(t.content,!0);!n.dispatchEvent(new CustomEvent("include-fragment-replace",{cancelable:!0,detail:{fragment:i}}))||(n.replaceWith(i),n.dispatchEvent(new CustomEvent("include-fragment-replaced")))},function(){n.classList.add("is-error")})}a(d,"handleData");function u(n){const e=n.src;let t=m.get(n);return t&&t.src===e?t.data:(e?t=E(n):t=Promise.reject(new Error("missing src")),m.set(n,{src:e,data:t}),t)}a(u,"getData");function E(n){return b().then(()=>(n.dispatchEvent(new Event("loadstart")),n.fetch(n.request()))).then(e=>{if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);const t=e.headers.get("Content-Type");if(!p(n.accept)&&(!t||!t.includes(n.accept?n.accept:"text/html")))throw new Error(`Failed to load resource: expected ${n.accept||"text/html"} but was ${t}`);return e.text()}).then(e=>(b().then(()=>{n.dispatchEvent(new Event("load")),n.dispatchEvent(new Event("loadend"))}),e),e=>{throw b().then(()=>{n.dispatchEvent(new Event("error")),n.dispatchEvent(new Event("loadend"))}),e})}a(E,"fetchDataWithEvents");function p(n){return n&&!!n.split(",").find(e=>e.match(/^\s*\*\/\*/))}a(p,"isWildcard");class c extends HTMLElement{static get observedAttributes(){return["src","loading"]}get src(){const e=this.getAttribute("src");if(e){const t=this.ownerDocument.createElement("a");return t.href=e,t.href}else return""}set src(e){this.setAttribute("src",e)}get loading(){return this.getAttribute("loading")==="lazy"?"lazy":"eager"}set loading(e){this.setAttribute("loading",e)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",e)}get data(){return u(this)}attributeChangedCallback(e,t){e==="src"?this.isConnected&&this.loading==="eager"&&d(this):e==="loading"&&this.isConnected&&t!=="eager"&&this.loading==="eager"&&d(this)}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`
      <style> 
        :host {
          display: block;
        }
      </style>
      <slot></slot>`}connectedCallback(){this.src&&this.loading==="eager"&&d(this),this.loading==="lazy"&&f.observe(this)}request(){const e=this.src;if(!e)throw new Error("missing src");return new Request(e,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"text/html"}})}load(){return u(this)}fetch(e){return fetch(e)}}a(c,"IncludeFragmentElement"),window.customElements.get("include-fragment")||(window.IncludeFragmentElement=c,window.customElements.define("include-fragment",c))}}]);})();

//# sourceMappingURL=2486-ed41056d2481.js.map