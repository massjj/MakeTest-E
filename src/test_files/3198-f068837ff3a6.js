(()=>{var Zc=Object.defineProperty;var v=(zr,Oi)=>Zc(zr,"name",{value:Oi,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[3198],{23198:()=>{/*! For license information please see main.js.LICENSE.txt */(()=>{var zr={804:(de,ge,ye)=>{"use strict";var tt=ye(191),Ze=ye(516),ht=ye(458),rt=ye(981);(de.exports=function(ze,De){var Ae,st,pt,Je,mt;return arguments.length<2||typeof ze!="string"?(Je=De,De=ze,ze=null):Je=arguments[2],ze==null?(Ae=pt=!0,st=!1):(Ae=rt.call(ze,"c"),st=rt.call(ze,"e"),pt=rt.call(ze,"w")),mt={value:De,configurable:Ae,enumerable:st,writable:pt},Je?tt(Ze(Je),mt):mt}).gs=function(ze,De,Ae){var st,pt,Je,mt;return typeof ze!="string"?(Je=Ae,Ae=De,De=ze,ze=null):Je=arguments[3],De==null?De=void 0:ht(De)?Ae==null?Ae=void 0:ht(Ae)||(Je=Ae,Ae=void 0):(Je=De,De=Ae=void 0),ze==null?(st=!0,pt=!1):(st=rt.call(ze,"c"),pt=rt.call(ze,"e")),mt={get:De,set:Ae,configurable:st,enumerable:pt},Je?tt(Ze(Je),mt):mt}},430:de=>{"use strict";de.exports=function(){}},191:(de,ge,ye)=>{"use strict";de.exports=ye(560)()?Object.assign:ye(346)},560:de=>{"use strict";de.exports=function(){var ge,ye=Object.assign;return typeof ye=="function"&&(ye(ge={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),ge.foo+ge.bar+ge.trzy==="razdwatrzy")}},346:(de,ge,ye)=>{"use strict";var tt=ye(103),Ze=ye(745),ht=Math.max;de.exports=function(rt,ze){var De,Ae,st,pt=ht(arguments.length,2);for(rt=Object(Ze(rt)),st=v(function(Je){try{rt[Je]=ze[Je]}catch(mt){De||(De=mt)}},"o"),Ae=1;Ae<pt;++Ae)tt(ze=arguments[Ae]).forEach(st);if(De!==void 0)throw De;return rt}},458:de=>{"use strict";de.exports=function(ge){return typeof ge=="function"}},914:(de,ge,ye)=>{"use strict";var tt=ye(430)();de.exports=function(Ze){return Ze!==tt&&Ze!==null}},103:(de,ge,ye)=>{"use strict";de.exports=ye(446)()?Object.keys:ye(137)},446:de=>{"use strict";de.exports=function(){try{return Object.keys("primitive"),!0}catch{return!1}}},137:(de,ge,ye)=>{"use strict";var tt=ye(914),Ze=Object.keys;de.exports=function(ht){return Ze(tt(ht)?Object(ht):ht)}},516:(de,ge,ye)=>{"use strict";var tt=ye(914),Ze=Array.prototype.forEach,ht=Object.create,rt=v(function(ze,De){var Ae;for(Ae in ze)De[Ae]=ze[Ae]},"a");de.exports=function(ze){var De=ht(null);return Ze.call(arguments,function(Ae){tt(Ae)&&rt(Object(Ae),De)}),De}},290:de=>{"use strict";de.exports=function(ge){if(typeof ge!="function")throw new TypeError(ge+" is not a function");return ge}},745:(de,ge,ye)=>{"use strict";var tt=ye(914);de.exports=function(Ze){if(!tt(Ze))throw new TypeError("Cannot use null or undefined");return Ze}},981:(de,ge,ye)=>{"use strict";de.exports=ye(591)()?String.prototype.contains:ye(42)},591:de=>{"use strict";var ge="razdwatrzy";de.exports=function(){return typeof ge.contains=="function"&&ge.contains("dwa")===!0&&ge.contains("foo")===!1}},42:de=>{"use strict";var ge=String.prototype.indexOf;de.exports=function(ye){return ge.call(this,ye,arguments[1])>-1}},370:(de,ge,ye)=>{"use strict";var tt,Ze,ht,rt,ze,De,Ae,st=ye(804),pt=ye(290),Je=Function.prototype.apply,mt=Function.prototype.call,Or=Object.create,ga=Object.defineProperty,Fr=Object.defineProperties,Fi=Object.prototype.hasOwnProperty,Bi={configurable:!0,enumerable:!1,writable:!0};Ze=v(function(je,Ce){var Oe,ft;return pt(Ce),ft=this,tt.call(this,je,Oe=v(function(){ht.call(ft,je,Oe),Je.call(Ce,this,arguments)},"n")),Oe.__eeOnceListener__=Ce,this},"r"),ze={on:tt=v(function(je,Ce){var Oe;return pt(Ce),Fi.call(this,"__ee__")?Oe=this.__ee__:(Oe=Bi.value=Or(null),ga(this,"__ee__",Bi),Bi.value=null),Oe[je]?typeof Oe[je]=="object"?Oe[je].push(Ce):Oe[je]=[Oe[je],Ce]:Oe[je]=Ce,this},"i"),once:Ze,off:ht=v(function(je,Ce){var Oe,ft,gt,yt;if(pt(Ce),!Fi.call(this,"__ee__"))return this;if(!(Oe=this.__ee__)[je])return this;if(typeof(ft=Oe[je])=="object")for(yt=0;gt=ft[yt];++yt)gt!==Ce&&gt.__eeOnceListener__!==Ce||(ft.length===2?Oe[je]=ft[yt?0:1]:ft.splice(yt,1));else ft!==Ce&&ft.__eeOnceListener__!==Ce||delete Oe[je];return this},"s"),emit:rt=v(function(je){var Ce,Oe,ft,gt,yt;if(Fi.call(this,"__ee__")&&(gt=this.__ee__[je]))if(typeof gt=="object"){for(Oe=arguments.length,yt=new Array(Oe-1),Ce=1;Ce<Oe;++Ce)yt[Ce-1]=arguments[Ce];for(gt=gt.slice(),Ce=0;ft=gt[Ce];++Ce)Je.call(ft,this,yt)}else switch(arguments.length){case 1:mt.call(gt,this);break;case 2:mt.call(gt,this,arguments[1]);break;case 3:mt.call(gt,this,arguments[1],arguments[2]);break;default:for(Oe=arguments.length,yt=new Array(Oe-1),Ce=1;Ce<Oe;++Ce)yt[Ce-1]=arguments[Ce];Je.call(gt,this,yt)}},"a")},De={on:st(tt),once:st(Ze),off:st(ht),emit:st(rt)},Ae=Fr({},De),de.exports=ge=v(function(je){return je==null?Or(Ae):Fr(Object(je),De)},"e"),ge.methods=ze},66:()=>{}},Oi={};function Bt(de){var ge=Oi[de];if(ge!==void 0)return ge.exports;var ye=Oi[de]={exports:{}};return zr[de](ye,ye.exports,Bt),ye.exports}v(Bt,"n"),Bt.n=de=>{var ge=de&&de.__esModule?()=>de.default:()=>de;return Bt.d(ge,{a:ge}),ge},Bt.d=(de,ge)=>{for(var ye in ge)Bt.o(ge,ye)&&!Bt.o(de,ye)&&Object.defineProperty(de,ye,{enumerable:!0,get:ge[ye]})},Bt.o=(de,ge)=>Object.prototype.hasOwnProperty.call(de,ge),(()=>{"use strict";const va="300 es";class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}v(nn,"L");const nt=[];for(let r=0;r<256;r++)nt[r]=(r<16?"0":"")+r.toString(16);const Br=Math.PI/180,Hr=180/Math.PI;function Ht(){const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(nt[255&r]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]+"-"+nt[255&e]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[63&t|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[255&n]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toUpperCase()}v(Ht,"P");function _t(r,e,t){return Math.max(e,Math.min(t,r))}v(_t,"I");function Ur(r,e,t){return(1-t)*r+t*e}v(Ur,"D");function xa(r){return(r&r-1)==0&&r!==0}v(xa,"N");function Ll(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}v(Ll,"z");class Y{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}v(Y,"O"),Y.prototype.isVector2=!0;class $e{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],p=n[5],f=n[8],g=i[0],m=i[3],x=i[6],_=i[1],w=i[4],M=i[7],A=i[2],E=i[5],S=i[8];return s[0]=a*g+o*_+l*A,s[3]=a*m+o*w+l*E,s[6]=a*x+o*M+l*S,s[1]=h*g+c*_+d*A,s[4]=h*m+c*w+d*E,s[7]=h*x+c*M+d*S,s[2]=u*g+p*_+f*A,s[5]=u*m+p*w+f*E,s[8]=u*x+p*M+f*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-n*s*c+n*o*l+i*s*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*s,p=h*s-a*l,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return e[0]=d*g,e[1]=(i*h-c*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(c*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-h*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],h=i[4],c=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*h,i[6]=t*o+n*c,i[1]=-n*s+t*l,i[4]=-n*a+t*h,i[7]=-n*o+t*c,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}v($e,"F");let Cn;$e.prototype.isMatrix3=!0;class yn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Cn.width=e.width,Cn.height=e.height;const n=Cn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}v(yn,"H");let Al=0;class Ke extends nn{constructor(e=Ke.DEFAULT_IMAGE,t=Ke.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,h=1,c=3e3){super(),Object.defineProperty(this,"id",{value:Al++}),this.uuid=Ht(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Ht()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Gr(i[a].image)):s.push(Gr(i[a]))}else s=Gr(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}v(Ke,"G");function Gr(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?yn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}v(Gr,"V"),Ke.DEFAULT_IMAGE=void 0,Ke.DEFAULT_MAPPING=300,Ke.prototype.isTexture=!0;class Re{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(h+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,M=(p+1)/2,A=(x+1)/2,E=(c+u)/4,S=(d+g)/4,R=(f+m)/4;return w>M&&w>A?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=S/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=R/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-g)/_,this.z=(u-c)/_,this.w=Math.acos((h+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}v(Re,"k"),Re.prototype.isVector4=!0;class rn extends nn{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Re(0,0,e,t),this.scissorTest=!1,this.viewport=new Re(0,0,e,t),n=n||{},this.texture=new Ke(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}v(rn,"W"),rn.prototype.isWebGLRenderTarget=!0,class extends rn{constructor(r,e,t){super(r,e,t),this.samples=4}copy(r){return super.copy.call(this,r),this.samples=r.samples,this}}.prototype.isWebGLMultisampleRenderTarget=!0;class at{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],h=n[i+1],c=n[i+2],d=n[i+3];const u=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(d!==g||l!==u||h!==p||c!==f){let m=1-o;const x=l*u+h*p+c*f+d*g,_=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const A=Math.sqrt(w),E=Math.atan2(A,x*_);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const M=o*_;if(l=l*m+u*M,h=h*m+p*M,c=c*m+f*M,d=d*m+g*M,m===1-o){const A=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=A,h*=A,c*=A,d*=A}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],h=n[i+2],c=n[i+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+c*d+l*p-h*u,e[t+1]=l*f+c*u+h*d-o*p,e[t+2]=h*f+c*p+o*u-l*d,e[t+3]=c*f-o*d-l*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"YZX":this._x=u*c*d+h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d-u*p*f;break;case"XZY":this._x=u*c*d-h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+h)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-h)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=n*c+a*o+i*h-s*l,this._y=i*c+a*l+s*o-n*h,this._z=s*c+a*h+n*l-i*o,this._w=a*c-n*o-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}v(at,"j"),at.prototype.isQuaternion=!0;class y{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=l*t+a*i-o*n,c=l*n+o*t-s*i,d=l*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=h*l+u*-s+c*-o-d*-a,this.y=c*l+u*-a+d*-s-h*-o,this.z=d*l+u*-o+h*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}v(y,"q"),y.prototype.isVector3=!0;const Vr=new y,ya=new at;class bt{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.length;l<h;l+=3){const c=e[l],d=e[l+1],u=e[l+2];c<t&&(t=c),d<n&&(n=d),u<i&&(i=u),c>s&&(s=c),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.count;l<h;l++){const c=e.getX(l),d=e.getY(l),u=e.getZ(l);c<t&&(t=c),d<n&&(n=d),u<i&&(i=u),c>s&&(s=c),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new y),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new y),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox),kr.applyMatrix4(e.matrixWorld),this.union(kr));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new y),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(si),Hi.subVectors(this.max,si),Rn.subVectors(e.a,si),Pn.subVectors(e.b,si),In.subVectors(e.c,si),sn.subVectors(Pn,Rn),an.subVectors(In,Pn),_n.subVectors(Rn,In);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-_n.z,_n.y,sn.z,0,-sn.x,an.z,0,-an.x,_n.z,0,-_n.x,-sn.y,sn.x,0,-an.y,an.x,0,-_n.y,_n.x,0];return!!Wr(t,Rn,Pn,In,Hi)&&(t=[1,0,0,0,1,0,0,0,1],!!Wr(t,Rn,Pn,In,Hi)&&(Ui.crossVectors(sn,an),t=[Ui.x,Ui.y,Ui.z],Wr(t,Rn,Pn,In,Hi)))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new y),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=.5*this.getSize(ri).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}v(bt,"Z"),bt.prototype.isBox3=!0;const qt=[new y,new y,new y,new y,new y,new y,new y,new y],ri=new y,kr=new bt,Rn=new y,Pn=new y,In=new y,sn=new y,an=new y,_n=new y,si=new y,Hi=new y,Ui=new y,bn=new y;function Wr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bn.fromArray(r,s);const o=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),l=e.dot(bn),h=t.dot(bn),c=n.dot(bn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}v(Wr,"ht");const Cl=new bt,_a=new y,jr=new y,qr=new y;class wn{constructor(e=new y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new y),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new bt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){qr.subVectors(e,this.center);const t=qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.add(qr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return jr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_a.copy(e.center).add(jr)),this.expandByPoint(_a.copy(e.center).sub(jr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}v(wn,"mt");const Xt=new y,Xr=new y,Gi=new y,on=new y,Yr=new y,Vi=new y,Zr=new y;class ln{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new y),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new y),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.direction).multiplyScalar(t).add(this.origin),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Xr);const s=.5*e.distanceTo(t),a=-this.direction.dot(Gi),o=on.dot(this.direction),l=-on.dot(Gi),h=on.lengthSq(),c=Math.abs(1-a*a);let d,u,p,f;if(c>0)if(d=a*l-o,u=a*o-l,f=s*c,d>=0)if(u>=-f)if(u<=f){const g=1/c;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+h):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+h):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+h);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Gi).multiplyScalar(u).add(Xr),p}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),i=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),n>a||s>i?null:((s>n||n!=n)&&(n=s),(a<i||i!=i)&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,i,s){Yr.subVectors(t,e),Vi.subVectors(n,e),Zr.crossVectors(Yr,Vi);let a,o=this.direction.dot(Zr);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}on.subVectors(this.origin,e);const l=a*this.direction.dot(Vi.crossVectors(on,Vi));if(l<0)return null;const h=a*this.direction.dot(Yr.cross(on));if(h<0||l+h>o)return null;const c=-a*on.dot(Zr);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}v(ln,"bt");class ue{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,h,c,d,u,p,f,g,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=h,x[6]=c,x[10]=d,x[14]=u,x[3]=p,x[7]=f,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),a=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*c,p=a*d,f=o*c,g=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=p+f*h,t[5]=u-g*h,t[9]=-o*l,t[2]=g-u*h,t[6]=f+p*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,p=l*d,f=h*c,g=h*d;t[0]=u+g*o,t[4]=f*o-p,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-f,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,p=l*d,f=h*c,g=h*d;t[0]=u-g*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*c,t[9]=g-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,p=a*d,f=o*c,g=o*d;t[0]=l*c,t[4]=f*h-p,t[8]=u*h+g,t[1]=l*d,t[5]=g*h+u,t[9]=p*h-f,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*h,f=o*l,g=o*h;t[0]=l*c,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){const u=a*l,p=a*h,f=o*l,g=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+g,t[5]=a*c,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*c,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rl,e,Pl)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),hn.crossVectors(n,wt),hn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),hn.crossVectors(n,wt)),hn.normalize(),ki.crossVectors(wt,hn),i[0]=hn.x,i[4]=ki.x,i[8]=wt.x,i[1]=hn.y,i[5]=ki.y,i[9]=wt.y,i[2]=hn.z,i[6]=ki.z,i[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],p=n[13],f=n[2],g=n[6],m=n[10],x=n[14],_=n[3],w=n[7],M=n[11],A=n[15],E=i[0],S=i[4],R=i[8],F=i[12],P=i[1],D=i[5],z=i[9],N=i[13],H=i[2],V=i[6],$=i[10],re=i[14],J=i[3],K=i[7],ne=i[11],L=i[15];return s[0]=a*E+o*P+l*H+h*J,s[4]=a*S+o*D+l*V+h*K,s[8]=a*R+o*z+l*$+h*ne,s[12]=a*F+o*N+l*re+h*L,s[1]=c*E+d*P+u*H+p*J,s[5]=c*S+d*D+u*V+p*K,s[9]=c*R+d*z+u*$+p*ne,s[13]=c*F+d*N+u*re+p*L,s[2]=f*E+g*P+m*H+x*J,s[6]=f*S+g*D+m*V+x*K,s[10]=f*R+g*z+m*$+x*ne,s[14]=f*F+g*N+m*re+x*L,s[3]=_*E+w*P+M*H+A*J,s[7]=_*S+w*D+M*V+A*K,s[11]=_*R+w*z+M*$+A*ne,s[15]=_*F+w*N+M*re+A*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-i*h*d-s*o*u+n*h*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*h*u+s*a*u-i*a*p+i*h*c-s*l*c)+e[11]*(+t*h*d-t*o*p-s*a*d+n*a*p+s*o*c-n*h*c)+e[15]*(-i*o*c-t*l*d+t*o*u+i*a*d-n*a*u+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],x=e[15],_=d*m*h-g*u*h+g*l*p-o*m*p-d*l*x+o*u*x,w=f*u*h-c*m*h-f*l*p+a*m*p+c*l*x-a*u*x,M=c*g*h-f*d*h+f*o*p-a*g*p-c*o*x+a*d*x,A=f*d*l-c*g*l-f*o*u+a*g*u+c*o*m-a*d*m,E=t*_+n*w+i*M+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=_*S,e[1]=(g*u*s-d*m*s-g*i*p+n*m*p+d*i*x-n*u*x)*S,e[2]=(o*m*s-g*l*s+g*i*h-n*m*h-o*i*x+n*l*x)*S,e[3]=(d*l*s-o*u*s-d*i*h+n*u*h+o*i*p-n*l*p)*S,e[4]=w*S,e[5]=(c*m*s-f*u*s+f*i*p-t*m*p-c*i*x+t*u*x)*S,e[6]=(f*l*s-a*m*s-f*i*h+t*m*h+a*i*x-t*l*x)*S,e[7]=(a*u*s-c*l*s+c*i*h-t*u*h-a*i*p+t*l*p)*S,e[8]=M*S,e[9]=(f*d*s-c*g*s-f*n*p+t*g*p+c*n*x-t*d*x)*S,e[10]=(a*g*s-f*o*s+f*n*h-t*g*h-a*n*x+t*o*x)*S,e[11]=(c*o*s-a*d*s-c*n*h+t*d*h+a*n*p-t*o*p)*S,e[12]=A*S,e[13]=(c*g*i-f*d*i+f*n*u-t*g*u-c*n*m+t*d*m)*S,e[14]=(f*o*i-a*g*i-f*n*l+t*g*l+a*n*m-t*o*m)*S,e[15]=(a*d*i-c*o*i+c*n*l-t*d*l-a*n*u+t*o*u)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,c*o+n,c*l-i*a,0,h*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,d=o+o,u=s*h,p=s*c,f=s*d,g=a*c,m=a*d,x=o*d,_=l*h,w=l*c,M=l*d,A=n.x,E=n.y,S=n.z;return i[0]=(1-(g+x))*A,i[1]=(p+M)*A,i[2]=(f-w)*A,i[3]=0,i[4]=(p-M)*E,i[5]=(1-(u+x))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(f+w)*S,i[9]=(m-_)*S,i[10]=(1-(u+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Dn.set(i[0],i[1],i[2]).length();const a=Dn.set(i[4],i[5],i[6]).length(),o=Dn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rt.copy(this);const l=1/s,h=1/a,c=1/o;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=h,Rt.elements[5]*=h,Rt.elements[6]*=h,Rt.elements[8]*=c,Rt.elements[9]*=c,Rt.elements[10]*=c,t.setFromRotationMatrix(Rt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),h=2*s/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),h=1/(n-i),c=1/(a-s),d=(t+e)*l,u=(n+i)*h,p=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}v(ue,"Mt"),ue.prototype.isMatrix4=!0;const Dn=new y,Rt=new ue,Rl=new y(0,0,0),Pl=new y(1,1,1),hn=new y,ki=new y,wt=new y,ba=new ue,wa=new at;class cn{constructor(e=0,t=0,n=0,i=cn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],h=i[5],c=i[9],d=i[2],u=i[6],p=i[10];switch(t=t||this._order){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new y(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}v(cn,"Dt"),cn.prototype.isEuler=!0,cn.DefaultOrder="XYZ",cn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jr{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}v(Jr,"Nt");let Il=0;const Ma=new y,Nn=new at,Yt=new ue,Wi=new y,ai=new y,Dl=new y,Nl=new at,Sa=new y(1,0,0),Ea=new y(0,1,0),Ta=new y(0,0,1),zl={type:"added"},La={type:"removed"};class Se extends nn{constructor(){super(),Object.defineProperty(this,"id",{value:Il++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DefaultUp.clone();const e=new y,t=new cn,n=new at,i=new y(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new $e}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Se.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(Sa,e)}rotateY(e){return this.rotateOnAxis(Ea,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sa,e)}translateY(e){return this.translateOnAxis(Ea,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(ai,Wi,this.up):Yt.lookAt(Wi,ai,this.up),this.quaternion.setFromRotationMatrix(Yt),i&&(Yt.extractRotation(i.matrixWorld),Nn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(La)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(La)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new y),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new at),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,e,Dl),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new y),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ai,Nl,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new y),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(v(s,"r"),i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}v(Se,"Yt"),Se.DefaultUp=new y(0,1,0),Se.DefaultMatrixAutoUpdate=!0,Se.prototype.isObject3D=!0;const Qr=new y,Ol=new y,Fl=new $e;class Pt{constructor(e=new y(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qr.subVectors(n,t).cross(Ol.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new y),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new y);const n=e.delta(Qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new y),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fl.getNormalMatrix(e),i=this.coplanarPoint(Qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}v(Pt,"Kt"),Pt.prototype.isPlane=!0;const It=new y,Zt=new y,$r=new y,Jt=new y,zn=new y,On=new y,Aa=new y,Kr=new y,es=new y,ts=new y;class ke{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new y),i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){It.subVectors(i,t),Zt.subVectors(n,t),$r.subVectors(e,t);const a=It.dot(It),o=It.dot(Zt),l=It.dot($r),h=Zt.dot(Zt),c=Zt.dot($r),d=a*h-o*o;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new y),d===0)return s.set(-2,-1,-1);const u=1/d,p=(h*l-o*c)*u,f=(a*c-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Jt),l.set(0,0),l.addScaledVector(s,Jt.x),l.addScaledVector(a,Jt.y),l.addScaledVector(o,Jt.z),l}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),Zt.subVectors(e,t),It.cross(Zt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),.5*It.cross(Zt).length()}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new y),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ke.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Pt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ke.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ke.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ke.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ke.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new y);const n=this.a,i=this.b,s=this.c;let a,o;zn.subVectors(i,n),On.subVectors(s,n),Kr.subVectors(e,n);const l=zn.dot(Kr),h=On.dot(Kr);if(l<=0&&h<=0)return t.copy(n);es.subVectors(e,i);const c=zn.dot(es),d=On.dot(es);if(c>=0&&d<=c)return t.copy(i);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(zn,a);ts.subVectors(e,s);const p=zn.dot(ts),f=On.dot(ts);if(f>=0&&p<=f)return t.copy(s);const g=p*h-l*f;if(g<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(n).addScaledVector(On,o);const m=c*f-p*d;if(m<=0&&d-c>=0&&p-f>=0)return Aa.subVectors(s,i),o=(d-c)/(d-c+(p-f)),t.copy(i).addScaledVector(Aa,o);const x=1/(m+g+u);return a=g*x,o=u*x,t.copy(n).addScaledVector(zn,a).addScaledVector(On,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}v(ke,"he");let Bl=0;function qe(){Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Ht(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}v(qe,"ue"),qe.prototype=Object.assign(Object.create(nn.prototype),{constructor:qe,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(const e in r){const t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1;continue}const n=this[e];n!==void 0?n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}},toJSON:function(r){const e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(v(n,"i"),t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==0&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),e){const i=n(r.textures),s=n(r.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const e=r.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(qe.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});const Ca={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},ji={h:0,s:0,l:0};function ns(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}v(ns,"fe");function is(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}v(is,"ge");function rs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}v(rs,"ve");class le{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=(e%(i=1)+i)%i,t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}var i;return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}v(t,"e");let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,h=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,h)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Ca[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const h=(a+s)/2;if(a===s)o=0,l=0;else{const c=s-a;switch(l=h<=.5?c/(s+a):c/(2-s-a),s){case t:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-t)/c+2;break;case i:o=(t-n)/c+4}o/=6}return e.h=o,e.s=l,e.l=h,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(ji);const n=Ur(Dt.h,ji.h,t),i=Ur(Dt.s,ji.s,t),s=Ur(Dt.l,ji.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}v(le,"xe"),le.NAMES=Ca,le.prototype.isColor=!0,le.prototype.r=1,le.prototype.g=1,le.prototype.b=1;class Tt extends qe{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}v(Tt,"ye"),Tt.prototype.isMeshBasicMaterial=!0;const Ne=new y,qi=new Y;class Ve{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new le),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Y),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new y),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Re),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ne.fromBufferAttribute(this,t),Ne.applyMatrix3(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.applyMatrix4(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.applyNormalMatrix(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.transformDirection(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}v(Ve,"be"),Ve.prototype.isBufferAttribute=!0;class ss extends Ve{constructor(e,t,n){super(new Uint16Array(e),t,n)}}v(ss,"Me");class as extends Ve{constructor(e,t,n){super(new Uint32Array(e),t,n)}}v(as,"Se"),class extends Ve{constructor(r,e,t){super(new Uint16Array(r),e,t)}}.prototype.isFloat16BufferAttribute=!0;class ve extends Ve{constructor(e,t,n){super(new Float32Array(e),t,n)}}v(ve,"Ee");function Ra(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}v(Ra,"Te");let Hl=0;const Ut=new ue,os=new Se,Fn=new y,Mt=new bt,oi=new bt,et=new y;class be extends nn{constructor(){super(),Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ra(e)>65535?as:ss)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new y,1/0);if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];oi.setFromBufferAttribute(o),this.morphTargetsRelative?(et.addVectors(Mt.min,oi.min),Mt.expandByPoint(et),et.addVectors(Mt.max,oi.max),Mt.expandByPoint(et)):(Mt.expandByPoint(oi.min),Mt.expandByPoint(oi.max))}Mt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)et.fromBufferAttribute(o,h),l&&(Fn.fromBufferAttribute(e,h),et.add(Fn)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ve(new Float32Array(4*o),4));const l=t.tangent.array,h=[],c=[];for(let P=0;P<o;P++)h[P]=new y,c[P]=new y;const d=new y,u=new y,p=new y,f=new Y,g=new Y,m=new Y,x=new y,_=new y;function w(P,D,z){d.fromArray(i,3*P),u.fromArray(i,3*D),p.fromArray(i,3*z),f.fromArray(a,2*P),g.fromArray(a,2*D),m.fromArray(a,2*z),u.sub(d),p.sub(d),g.sub(f),m.sub(f);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(N),_.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(N),h[P].add(x),h[D].add(x),h[z].add(x),c[P].add(_),c[D].add(_),c[z].add(_))}v(w,"x");let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let P=0,D=M.length;P<D;++P){const z=M[P],N=z.start;for(let H=N,V=N+z.count;H<V;H+=3)w(n[H+0],n[H+1],n[H+2])}const A=new y,E=new y,S=new y,R=new y;function F(P){S.fromArray(s,3*P),R.copy(S);const D=h[P];A.copy(D),A.sub(S.multiplyScalar(S.dot(D))).normalize(),E.crossVectors(R,D);const z=E.dot(c[P])<0?-1:1;l[4*P]=A.x,l[4*P+1]=A.y,l[4*P+2]=A.z,l[4*P+3]=z}v(F,"S");for(let P=0,D=M.length;P<D;++P){const z=M[P],N=z.start;for(let H=N,V=N+z.count;H<V;H+=3)F(n[H+0]),F(n[H+1]),F(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new y,s=new y,a=new y,o=new y,l=new y,h=new y,c=new y,d=new y;if(e)for(let u=0,p=e.count;u<p;u+=3){const f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),c.subVectors(a,s),d.subVectors(i,s),c.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(c),l.add(c),h.add(c),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),d.subVectors(i,s),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],o=a.array,l=a.itemSize*t,h=Math.min(o.length,s.length-l);for(let c=0,d=l;c<h;c++,d++)s[d]=o[c]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=l[g]*c;for(let x=0;x<c;x++)u[f++]=h[p++]}return new Ve(u,c,d)}if(v(e,"t"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new be,n=this.index.array,i=this.attributes;for(const o in i){const l=e(i[o],n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,d=h.length;c<d;c++){const u=e(h[c],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new be().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],d=s[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}v(be,"Ne"),be.prototype.isBufferGeometry=!0;const Pa=new ue,Bn=new ln,ls=new wn,un=new y,dn=new y,pn=new y,hs=new y,cs=new y,us=new y,Xi=new y,Yi=new y,Zi=new y,Ji=new Y,Qi=new Y,$i=new Y,ds=new y,Ki=new y;class Xe extends Se{constructor(e=new be,t=new Tt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),e.ray.intersectsSphere(ls)===!1)||(Pa.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(Pa),n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,h=n.morphAttributes.position,c=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,p=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,m=p.length;g<m;g++){const x=p[g],_=i[x.materialIndex];for(let w=Math.max(x.start,f.start),M=Math.min(x.start+x.count,f.start+f.count);w<M;w+=3){const A=o.getX(w),E=o.getX(w+1),S=o.getX(w+2);a=er(this,_,e,Bn,l,h,c,d,u,A,E,S),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else for(let g=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);g<m;g+=3){const x=o.getX(g),_=o.getX(g+1),w=o.getX(g+2);a=er(this,i,e,Bn,l,h,c,d,u,x,_,w),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let g=0,m=p.length;g<m;g++){const x=p[g],_=i[x.materialIndex];for(let w=Math.max(x.start,f.start),M=Math.min(x.start+x.count,f.start+f.count);w<M;w+=3)a=er(this,_,e,Bn,l,h,c,d,u,w,w+1,w+2),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=x.materialIndex,t.push(a))}else for(let g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);g<m;g+=3)a=er(this,i,e,Bn,l,h,c,d,u,g,g+1,g+2),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}v(Xe,"Ke");function er(r,e,t,n,i,s,a,o,l,h,c,d){un.fromBufferAttribute(i,h),dn.fromBufferAttribute(i,c),pn.fromBufferAttribute(i,d);const u=r.morphTargetInfluences;if(e.morphTargets&&s&&u){Xi.set(0,0,0),Yi.set(0,0,0),Zi.set(0,0,0);for(let f=0,g=s.length;f<g;f++){const m=u[f],x=s[f];m!==0&&(hs.fromBufferAttribute(x,h),cs.fromBufferAttribute(x,c),us.fromBufferAttribute(x,d),a?(Xi.addScaledVector(hs,m),Yi.addScaledVector(cs,m),Zi.addScaledVector(us,m)):(Xi.addScaledVector(hs.sub(un),m),Yi.addScaledVector(cs.sub(dn),m),Zi.addScaledVector(us.sub(pn),m)))}un.add(Xi),dn.add(Yi),pn.add(Zi)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(h,un),r.boneTransform(c,dn),r.boneTransform(d,pn));const p=function(f,g,m,x,_,w,M,A){let E;if(E=g.side===1?x.intersectTriangle(M,w,_,!0,A):x.intersectTriangle(_,w,M,g.side!==2,A),E===null)return null;Ki.copy(A),Ki.applyMatrix4(f.matrixWorld);const S=m.ray.origin.distanceTo(Ki);return S<m.near||S>m.far?null:{distance:S,point:Ki.clone(),object:f}}(r,e,t,n,un,dn,pn,ds);if(p){o&&(Ji.fromBufferAttribute(o,h),Qi.fromBufferAttribute(o,c),$i.fromBufferAttribute(o,d),p.uv=ke.getUV(ds,un,dn,pn,Ji,Qi,$i,new Y)),l&&(Ji.fromBufferAttribute(l,h),Qi.fromBufferAttribute(l,c),$i.fromBufferAttribute(l,d),p.uv2=ke.getUV(ds,un,dn,pn,Ji,Qi,$i,new Y));const f={a:h,b:c,c:d,normal:new y,materialIndex:0};ke.getNormal(un,dn,pn,f.normal),p.face=f}return p}v(er,"$e"),Xe.prototype.isMesh=!0;class li extends be{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],c=[],d=[];let u=0,p=0;function f(g,m,x,_,w,M,A,E,S,R,F){const P=M/S,D=A/R,z=M/2,N=A/2,H=E/2,V=S+1,$=R+1;let re=0,J=0;const K=new y;for(let ne=0;ne<$;ne++){const L=ne*D-N;for(let C=0;C<V;C++){const Q=C*P-z;K[g]=Q*_,K[m]=L*w,K[x]=H,h.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[x]=E>0?1:-1,c.push(K.x,K.y,K.z),d.push(C/S),d.push(1-ne/R),re+=1}}for(let ne=0;ne<R;ne++)for(let L=0;L<S;L++){const C=u+L+V*ne,Q=u+L+V*(ne+1),W=u+(L+1)+V*(ne+1),X=u+(L+1)+V*ne;l.push(C,Q,X),l.push(Q,W,X),J+=6}o.addGroup(p,J,F),p+=J,u+=re}v(f,"p"),f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(d,2))}}v(li,"tn");function Hn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}v(Hn,"en");function ot(r){const e={};for(let t=0;t<r.length;t++){const n=Hn(r[t]);for(const i in n)e[i]=n[i]}return e}v(ot,"nn");const Ul={clone:Hn,merge:ot};class Qt extends qe{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}v(Qt,"sn"),Qt.prototype.isShaderMaterial=!0;class tr extends Se{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new y),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}v(tr,"an"),tr.prototype.isCamera=!0;class ct extends tr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Hr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Br*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Hr*Math.atan(Math.tan(.5*Br*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*Br*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}v(ct,"on"),ct.prototype.isPerspectiveCamera=!0;const Un=90;class nr extends Se{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const i=new ct(Un,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new y(1,0,0)),this.add(i);const s=new ct(Un,1,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new y(-1,0,0)),this.add(s);const a=new ct(Un,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new y(0,1,0)),this.add(a);const o=new ct(Un,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new y(0,-1,0)),this.add(o);const l=new ct(Un,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new y(0,0,1)),this.add(l);const h=new ct(Un,1,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new y(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,h]=this.children,c=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(d),e.xr.enabled=c}}v(nr,"hn");class hi extends Ke{constructor(e,t,n,i,s,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,s,a,o=o!==void 0?o:1022,l,h,c),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}v(hi,"cn"),hi.prototype.isCubeTexture=!0;class ps extends rn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new hi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=1023,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={tEquirect:{value:null}},i=`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,s=`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,a=new li(5,5,5),o=new Qt({name:"CubemapFromEquirect",uniforms:Hn(n),vertexShader:i,fragmentShader:s,side:1,blending:0});o.uniforms.tEquirect.value=t;const l=new Xe(a,o),h=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new nr(1,10,this).update(e,l),t.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}v(ps,"un"),ps.prototype.isWebGLCubeRenderTarget=!0;class ms extends Ke{constructor(e,t,n,i,s,a,o,l,h,c,d,u){super(null,a,o,l,h,c,i,s,d,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=h!==void 0?h:1003,this.minFilter=c!==void 0?c:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}v(ms,"dn"),ms.prototype.isDataTexture=!0;const Gn=new wn,ir=new y;class ci{constructor(e=new Pt,t=new Pt,n=new Pt,i=new Pt,s=new Pt,a=new Pt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],h=n[5],c=n[6],d=n[7],u=n[8],p=n[9],f=n[10],g=n[11],m=n[12],x=n[13],_=n[14],w=n[15];return t[0].setComponents(o-i,d-l,g-u,w-m).normalize(),t[1].setComponents(o+i,d+l,g+u,w+m).normalize(),t[2].setComponents(o+s,d+h,g+p,w+x).normalize(),t[3].setComponents(o-s,d-h,g-p,w-x).normalize(),t[4].setComponents(o-a,d-c,g-f,w-_).normalize(),t[5].setComponents(o+a,d+c,g+f,w+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}v(ci,"fn");function Ia(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return v(i,"r"),{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}v(Ia,"gn");function Gl(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a===void 0?n.set(i,function(o,l){const h=o.array,c=o.usage,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,h,c),o.onUploadCallback();let u=5126;return h instanceof Float32Array?u=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?o.isFloat16BufferAttribute?t?u=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):u=5123:h instanceof Int16Array?u=5122:h instanceof Uint32Array?u=5125:h instanceof Int32Array?u=5124:h instanceof Int8Array?u=5120:h instanceof Uint8Array&&(u=5121),{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version}}(i,s)):a.version<i.version&&(function(o,l,h){const c=l.array,d=l.updateRange;r.bindBuffer(h,o),d.count===-1?r.bufferSubData(h,0,c):(t?r.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):r.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1)}(a.buffer,i,s),a.version=i.version)}}}v(Gl,"vn");class Da extends be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,c=l+1,d=e/o,u=t/l,p=[],f=[],g=[],m=[];for(let x=0;x<c;x++){const _=x*u-a;for(let w=0;w<h;w++){const M=w*d-s;f.push(M,-_,0),g.push(0,0,1),m.push(w/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<o;_++){const w=_+h*x,M=_+h*(x+1),A=_+1+h*(x+1),E=_+1+h*x;p.push(w,M,E),p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(m,2))}}v(Da,"xn");const we={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float fogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmissionmap_fragment:`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,transmissionmap_pars_fragment:`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,normal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,normal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`},ie={common:{diffuse:{value:new le(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new $e},uv2Transform:{value:new $e},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new $e}},sprite:{diffuse:{value:new le(15658734)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new $e}}},Gt={basic:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new le(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:ot([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:ot([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new le(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:ot([ie.points,ie.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:ot([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:ot([ie.common,ie.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:we.normal_vert,fragmentShader:we.normal_frag},sprite:{uniforms:ot([ie.sprite,ie.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:ot([ie.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:ot([ie.common,ie.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:ot([ie.lights,ie.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};function Vl(r,e,t,n,i){const s=new le(0);let a,o,l=0,h=null,c=0,d=null;function u(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,i)}return v(u,"d"),{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),l=f,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,u(s,l)},render:function(p,f,g,m){let x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=e.get(x));const _=r.xr,w=_.getSession&&_.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?u(s,l):x&&x.isColor&&(u(x,1),m=!0),(r.autoClear||m)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(o===void 0&&(o=new Xe(new li(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Hn(Gt.cube.uniforms),vertexShader:Gt.cube.vertexShader,fragmentShader:Gt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(M,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=x,o.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,h===x&&c===x.version&&d===r.toneMapping||(o.material.needsUpdate=!0,h=x,c=x.version,d=r.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new Xe(new Da(2,2),new Qt({name:"BackgroundMaterial",uniforms:Hn(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),h===x&&c===x.version&&d===r.toneMapping||(a.material.needsUpdate=!0,h=x,c=x.version,d=r.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}}}v(Vl,"bn");function kl(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=u(null);let h=l;function c(M){return n.isWebGL2?r.bindVertexArray(M):s.bindVertexArrayOES(M)}v(c,"c");function d(M){return n.isWebGL2?r.deleteVertexArray(M):s.deleteVertexArrayOES(M)}v(d,"u");function u(M){const A=[],E=[],S=[];for(let R=0;R<i;R++)A[R]=0,E[R]=0,S[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:E,attributeDivisors:S,object:M,attributes:{},index:null}}v(u,"d");function p(){const M=h.newAttributes;for(let A=0,E=M.length;A<E;A++)M[A]=0}v(p,"p");function f(M){g(M,0)}v(f,"m");function g(M,A){const E=h.newAttributes,S=h.enabledAttributes,R=h.attributeDivisors;E[M]=1,S[M]===0&&(r.enableVertexAttribArray(M),S[M]=1),R[M]!==A&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,A),R[M]=A)}v(g,"f");function m(){const M=h.newAttributes,A=h.enabledAttributes;for(let E=0,S=A.length;E<S;E++)A[E]!==M[E]&&(r.disableVertexAttribArray(E),A[E]=0)}v(m,"g");function x(M,A,E,S,R,F){n.isWebGL2!==!0||E!==5124&&E!==5125?r.vertexAttribPointer(M,A,E,S,R,F):r.vertexAttribIPointer(M,A,E,R,F)}v(x,"v");function _(){w(),h!==l&&(h=l,c(h.object))}v(_,"x");function w(){l.geometry=null,l.program=null,l.wireframe=!1}return v(w,"y"),{setup:function(M,A,E,S,R){let F=!1;if(a){const P=function(D,z,N){const H=N.wireframe===!0;let V=o[D.id];V===void 0&&(V={},o[D.id]=V);let $=V[z.id];$===void 0&&($={},V[z.id]=$);let re=$[H];return re===void 0&&(re=u(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),$[H]=re),re}(S,E,A);h!==P&&(h=P,c(h.object)),F=function(D,z){const N=h.attributes,H=D.attributes;let V=0;for(const $ in H){const re=N[$],J=H[$];if(re===void 0||re.attribute!==J||re.data!==J.data)return!0;V++}return h.attributesNum!==V||h.index!==z}(S,R),F&&function(D,z){const N={},H=D.attributes;let V=0;for(const $ in H){const re=H[$],J={};J.attribute=re,re.data&&(J.data=re.data),N[$]=J,V++}h.attributes=N,h.attributesNum=V,h.index=z}(S,R)}else{const P=A.wireframe===!0;h.geometry===S.id&&h.program===E.id&&h.wireframe===P||(h.geometry=S.id,h.program=E.id,h.wireframe=P,F=!0)}M.isInstancedMesh===!0&&(F=!0),R!==null&&t.update(R,34963),F&&(function(P,D,z,N){if(n.isWebGL2===!1&&(P.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const H=N.attributes,V=z.getAttributes(),$=D.defaultAttributeValues;for(const re in V){const J=V[re];if(J>=0){const K=H[re];if(K!==void 0){const ne=K.normalized,L=K.itemSize,C=t.get(K);if(C===void 0)continue;const Q=C.buffer,W=C.type,X=C.bytesPerElement;if(K.isInterleavedBufferAttribute){const ee=K.data,he=ee.stride,T=K.offset;ee&&ee.isInstancedInterleavedBuffer?(g(J,ee.meshPerAttribute),N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)):f(J),r.bindBuffer(34962,Q),x(J,L,W,ne,he*X,T*X)}else K.isInstancedBufferAttribute?(g(J,K.meshPerAttribute),N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)):f(J),r.bindBuffer(34962,Q),x(J,L,W,ne,0,0)}else if(re==="instanceMatrix"){const ne=t.get(P.instanceMatrix);if(ne===void 0)continue;const L=ne.buffer,C=ne.type;g(J+0,1),g(J+1,1),g(J+2,1),g(J+3,1),r.bindBuffer(34962,L),r.vertexAttribPointer(J+0,4,C,!1,64,0),r.vertexAttribPointer(J+1,4,C,!1,64,16),r.vertexAttribPointer(J+2,4,C,!1,64,32),r.vertexAttribPointer(J+3,4,C,!1,64,48)}else if(re==="instanceColor"){const ne=t.get(P.instanceColor);if(ne===void 0)continue;const L=ne.buffer,C=ne.type;g(J,1),r.bindBuffer(34962,L),r.vertexAttribPointer(J,3,C,!1,12,0)}else if($!==void 0){const ne=$[re];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(J,ne);break;case 3:r.vertexAttrib3fv(J,ne);break;case 4:r.vertexAttrib4fv(J,ne);break;default:r.vertexAttrib1fv(J,ne)}}}}m()}(M,A,E,S),R!==null&&r.bindBuffer(34963,t.get(R).buffer))},reset:_,resetDefaultState:w,dispose:function(){_();for(const M in o){const A=o[M];for(const E in A){const S=A[E];for(const R in S)d(S[R].object),delete S[R];delete A[E]}delete o[M]}},releaseStatesOfGeometry:function(M){if(o[M.id]===void 0)return;const A=o[M.id];for(const E in A){const S=A[E];for(const R in S)d(S[R].object),delete S[R];delete A[E]}delete o[M.id]},releaseStatesOfProgram:function(M){for(const A in o){const E=o[A];if(E[M.id]===void 0)continue;const S=E[M.id];for(const R in S)d(S[R].object),delete S[R];delete E[M.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:m}}v(kl,"Mn");function Wl(r,e,t,n){const i=n.isWebGL2;let s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(i)h=r,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](s,a,o,l),t.update(o,s,l)}}v(Wl,"Sn");function jl(r,e,t){let n;function i(w){if(w==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}v(i,"r");const s=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),c=r.getParameter(35660),d=r.getParameter(3379),u=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),g=r.getParameter(36348),m=r.getParameter(36349),x=c>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:x&&_,maxSamples:s?r.getParameter(36183):0}}v(jl,"En");function ql(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Pt,o=new $e,l={value:null,needsUpdate:!1};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}v(h,"h");function c(d,u,p,f){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,f!==!0||m===null){const x=p+4*g,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,M=p;w!==g;++w,M+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}v(c,"c"),this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const f=d.length!==0||u||n!==0||i;return i=u,t=c(d,p,0),n=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,h()},this.setState=function(d,u,p){const f=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=r.get(d);if(!i||f===null||f.length===0||s&&!m)s?c(null):h();else{const _=s?0:n,w=4*_;let M=x.clippingState||null;l.value=M,M=c(f,u,w,p);for(let A=0;A!==w;++A)M[A]=t[A];x.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}}}v(ql,"Tn");function Xl(r){let e=new WeakMap;function t(i,s){return s===303?i.mapping=301:s===304&&(i.mapping=302),i}v(t,"n");function n(i){const s=i.target;s.removeEventListener("dispose",n);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return v(n,"i"),{get:function(i){if(i&&i.isTexture){const s=i.mapping;if(s===303||s===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const a=i.image;if(a&&a.height>0){const o=r.getRenderTarget(),l=new ps(a.height/2);return l.fromEquirectangularTexture(r,i),e.set(i,l),r.setRenderTarget(o),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}v(Xl,"Ln");function Yl(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return v(t,"n"),{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}v(Yl,"An");function Zl(r,e,t,n){const i={},s=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete i[h.id];const c=s.get(h);c&&(e.remove(c),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}v(a,"a");function o(l){const h=[],c=l.index,d=l.attributes.position;let u=0;if(c!==null){const g=c.array;u=c.version;for(let m=0,x=g.length;m<x;m+=3){const _=g[m+0],w=g[m+1],M=g[m+2];h.push(_,w,w,M,M,_)}}else{const g=d.array;u=d.version;for(let m=0,x=g.length/3-1;m<x;m+=3){const _=m+0,w=m+1,M=m+2;h.push(_,w,w,M,M,_)}}const p=new(Ra(h)>65535?as:ss)(h,1);p.version=u;const f=s.get(l);f&&e.remove(f),s.set(l,p)}return v(o,"o"),{get:function(l,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h},update:function(l){const h=l.attributes;for(const d in h)e.update(h[d],34962);const c=l.morphAttributes;for(const d in c){const u=c[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],34962)}},getWireframeAttribute:function(l){const h=s.get(l);if(h){const c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}v(Zl,"Cn");function Jl(r,e,t,n){const i=n.isWebGL2;let s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){r.drawElements(s,h,a,l*o),t.update(h,s,1)},this.renderInstances=function(l,h,c){if(c===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,h,a,l*o,c),t.update(h,s,c)}}v(Jl,"Rn");function Ql(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}v(Ql,"Pn");function $l(r,e){return r[0]-e[0]}v($l,"In");function Kl(r,e){return Math.abs(e[1])-Math.abs(r[1])}v(Kl,"Dn");function eh(r){const e={},t=new Float32Array(8),n=[];for(let i=0;i<8;i++)n[i]=[i,0];return{update:function(i,s,a,o){const l=i.morphTargetInfluences,h=l===void 0?0:l.length;let c=e[s.id];if(c===void 0){c=[];for(let g=0;g<h;g++)c[g]=[g,0];e[s.id]=c}for(let g=0;g<h;g++){const m=c[g];m[0]=g,m[1]=l[g]}c.sort(Kl);for(let g=0;g<8;g++)g<h&&c[g][1]?(n[g][0]=c[g][0],n[g][1]=c[g][1]):(n[g][0]=Number.MAX_SAFE_INTEGER,n[g][1]=0);n.sort($l);const d=a.morphTargets&&s.morphAttributes.position,u=a.morphNormals&&s.morphAttributes.normal;let p=0;for(let g=0;g<8;g++){const m=n[g],x=m[0],_=m[1];x!==Number.MAX_SAFE_INTEGER&&_?(d&&s.getAttribute("morphTarget"+g)!==d[x]&&s.setAttribute("morphTarget"+g,d[x]),u&&s.getAttribute("morphNormal"+g)!==u[x]&&s.setAttribute("morphNormal"+g,u[x]),t[g]=_,p+=_):(d&&s.hasAttribute("morphTarget"+g)===!0&&s.deleteAttribute("morphTarget"+g),u&&s.hasAttribute("morphNormal"+g)===!0&&s.deleteAttribute("morphNormal"+g),t[g]=0)}const f=s.morphTargetsRelative?1:1-p;o.getUniforms().setValue(r,"morphTargetBaseInfluence",f),o.getUniforms().setValue(r,"morphTargetInfluences",t)}}}v(eh,"Nn");function th(r,e,t,n){let i=new WeakMap;function s(a){const o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return v(s,"s"),{update:function(a){const o=n.render.frame,l=a.geometry,h=e.get(a,l);return i.get(h)!==o&&(e.update(h),i.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h},dispose:function(){i=new WeakMap}}}v(th,"zn"),Gt.physical={uniforms:ot([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new le(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};class fs extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}v(fs,"On"),fs.prototype.isDataTexture2DArray=!0;class gs extends Ke{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}v(gs,"Fn"),gs.prototype.isDataTexture3D=!0;const Na=new Ke,nh=new fs,ih=new gs,za=new hi,Oa=[],Fa=[],Ba=new Float32Array(16),Ha=new Float32Array(9),Ua=new Float32Array(4);function Vn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Oa[i];if(s===void 0&&(s=new Float32Array(i),Oa[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}v(Vn,"Xn");function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}v(ut,"Yn");function lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}v(lt,"Zn");function Ga(r,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}v(Ga,"Jn");function rh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}v(rh,"Qn");function sh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}v(sh,"Kn");function ah(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}v(ah,"$n");function oh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}v(oh,"ti");function lh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ut(t,n))return;Ua.set(n),r.uniformMatrix2fv(this.addr,!1,Ua),lt(t,n)}}v(lh,"ei");function hh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ut(t,n))return;Ha.set(n),r.uniformMatrix3fv(this.addr,!1,Ha),lt(t,n)}}v(hh,"ni");function ch(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ut(t,n))return;Ba.set(n),r.uniformMatrix4fv(this.addr,!1,Ba),lt(t,n)}}v(ch,"ii");function uh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}v(uh,"ri");function dh(r,e){const t=this.cache;ut(t,e)||(r.uniform2iv(this.addr,e),lt(t,e))}v(dh,"si");function ph(r,e){const t=this.cache;ut(t,e)||(r.uniform3iv(this.addr,e),lt(t,e))}v(ph,"ai");function mh(r,e){const t=this.cache;ut(t,e)||(r.uniform4iv(this.addr,e),lt(t,e))}v(mh,"oi");function fh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}v(fh,"li");function gh(r,e){const t=this.cache;ut(t,e)||(r.uniform2uiv(this.addr,e),lt(t,e))}v(gh,"hi");function vh(r,e){const t=this.cache;ut(t,e)||(r.uniform3uiv(this.addr,e),lt(t,e))}v(vh,"ci");function xh(r,e){const t=this.cache;ut(t,e)||(r.uniform4uiv(this.addr,e),lt(t,e))}v(xh,"ui");function yh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Na,i)}v(yh,"di");function _h(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ih,i)}v(_h,"pi");function bh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||za,i)}v(bh,"mi");function wh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nh,i)}v(wh,"fi");function Mh(r,e){r.uniform1fv(this.addr,e)}v(Mh,"gi");function Sh(r,e){const t=Vn(e,this.size,2);r.uniform2fv(this.addr,t)}v(Sh,"vi");function Eh(r,e){const t=Vn(e,this.size,3);r.uniform3fv(this.addr,t)}v(Eh,"xi");function Th(r,e){const t=Vn(e,this.size,4);r.uniform4fv(this.addr,t)}v(Th,"yi");function Lh(r,e){const t=Vn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}v(Lh,"_i");function Ah(r,e){const t=Vn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}v(Ah,"wi");function Ch(r,e){const t=Vn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}v(Ch,"bi");function Rh(r,e){r.uniform1iv(this.addr,e)}v(Rh,"Mi");function Ph(r,e){r.uniform2iv(this.addr,e)}v(Ph,"Si");function Ih(r,e){r.uniform3iv(this.addr,e)}v(Ih,"Ei");function Dh(r,e){r.uniform4iv(this.addr,e)}v(Dh,"Ti");function Nh(r,e){r.uniform1uiv(this.addr,e)}v(Nh,"Li");function zh(r,e){r.uniform2uiv(this.addr,e)}v(zh,"Ai");function Oh(r,e){r.uniform3uiv(this.addr,e)}v(Oh,"Ci");function Fh(r,e){r.uniform4uiv(this.addr,e)}v(Fh,"Ri");function Bh(r,e,t){const n=e.length,i=Ga(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Na,i[s])}v(Bh,"Pi");function Hh(r,e,t){const n=e.length,i=Ga(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||za,i[s])}v(Hh,"Ii");function Uh(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return rh;case 35664:return sh;case 35665:return ah;case 35666:return oh;case 35674:return lh;case 35675:return hh;case 35676:return ch;case 5124:case 35670:return uh;case 35667:case 35671:return dh;case 35668:case 35672:return ph;case 35669:case 35673:return mh;case 5125:return fh;case 36294:return gh;case 36295:return vh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return yh;case 35679:case 36299:case 36307:return _h;case 35680:case 36300:case 36308:case 36293:return bh;case 36289:case 36303:case 36311:case 36292:return wh}}(e.type)}v(Uh,"Di");function Va(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Mh;case 35664:return Sh;case 35665:return Eh;case 35666:return Th;case 35674:return Lh;case 35675:return Ah;case 35676:return Ch;case 5124:case 35670:return Rh;case 35667:case 35671:return Ph;case 35668:case 35672:return Ih;case 35669:case 35673:return Dh;case 5125:return Nh;case 36294:return zh;case 36295:return Oh;case 36296:return Fh;case 35678:case 36198:case 36298:case 36306:case 35682:return Bh;case 35680:case 36300:case 36308:case 36293:return Hh}}(e.type)}v(Va,"Ni");function ka(r){this.id=r,this.seq=[],this.map={}}v(ka,"zi"),Va.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),lt(e,r)},ka.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const vs=/(\w+)(\])?(\[|\.)?/g;function Wa(r,e){r.seq.push(e),r.map[e.id]=e}v(Wa,"Fi");function Gh(r,e,t){const n=r.name,i=n.length;for(vs.lastIndex=0;;){const s=vs.exec(n),a=vs.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===i){Wa(t,h===void 0?new Uh(o,r,e):new Va(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new ka(o),Wa(t,c)),t=c}}}v(Gh,"Bi");function mn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n);Gh(i,r.getUniformLocation(e,i.name),this)}}v(mn,"Hi");function ja(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}v(ja,"Ui"),mn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)},mn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)},mn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}},mn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};let Vh=0;function qa(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}v(qa,"Vi");function Xa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+function(s){const a=s.split(`
`);for(let o=0;o<a.length;o++)a[o]=o+1+": "+a[o];return a.join(`
`)}(r.getShaderSource(e))}v(Xa,"ki");function ui(r,e){const t=qa(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}v(ui,"Wi");function kh(r,e){const t=qa(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}v(kh,"ji");function Wh(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}v(Wh,"qi");function di(r){return r!==""}v(di,"Xi");function Ya(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}v(Ya,"Yi");function Za(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}v(Za,"Zi");const jh=/^[ \t]*#include +<([\w\d./]+)>/gm;function xs(r){return r.replace(jh,qh)}v(xs,"Qi");function qh(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xs(t)}v(qh,"Ki");const Xh=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(r){return r.replace(Yh,Qa).replace(Xh,Zh)}v(Ja,"er");function Zh(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Qa(0,e,t,n)}v(Zh,"nr");function Qa(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}v(Qa,"ir");function $a(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}v($a,"rr");function Jh(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(R){let F="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===1?F="SHADOWMAP_TYPE_PCF":R.shadowMapType===2?F="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===3&&(F="SHADOWMAP_TYPE_VSM"),F}(t),h=function(R){let F="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case 301:case 302:F="ENVMAP_TYPE_CUBE";break;case 306:case 307:F="ENVMAP_TYPE_CUBE_UV"}return F}(t),c=function(R){let F="ENVMAP_MODE_REFLECTION";if(R.envMap)switch(R.envMapMode){case 302:case 307:F="ENVMAP_MODE_REFRACTION"}return F}(t),d=function(R){let F="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case 0:F="ENVMAP_BLENDING_MULTIPLY";break;case 1:F="ENVMAP_BLENDING_MIX";break;case 2:F="ENVMAP_BLENDING_ADD"}return F}(t),u=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":function(R){return[R.extensionDerivatives||R.envMapCubeUV||R.bumpMap||R.tangentSpaceNormalMap||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}(t),f=function(R){const F=[];for(const P in R){const D=R[P];D!==!1&&F.push("#define "+P+" "+D)}return F.join(`
`)}(s),g=i.createProgram();let m,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[f].filter(di).join(`
`),m.length>0&&(m+=`
`),x=[p,f].filter(di).join(`
`),x.length>0&&(x+=`
`)):(m=[$a(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),x=[p,$a(t),"#define SHADER_NAME "+t.shaderName,f,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?we.tonemapping_pars_fragment:"",t.toneMapping!==0?Wh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",we.encodings_pars_fragment,t.map?ui("mapTexelToLinear",t.mapEncoding):"",t.matcap?ui("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ui("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ui("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?ui("lightMapTexelToLinear",t.lightMapEncoding):"",kh("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),a=xs(a),a=Ya(a,t),a=Za(a,t),o=xs(o),o=Ya(o,t),o=Za(o,t),a=Ja(a),o=Ja(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===va?"":"out highp vec4 pc_fragColor;",t.glslVersion===va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=_+x+o,M=ja(i,35633,_+m+a),A=ja(i,35632,w);if(i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(M).trim(),P=i.getShaderInfoLog(A).trim();let D=!0,z=!0;if(i.getProgramParameter(g,35714)===!1){D=!1;const N=Xa(i,M,"vertex"),H=Xa(i,A,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(g,35715),"gl.getProgramInfoLog",R,N,H)}else R!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",R):F!==""&&P!==""||(z=!1);z&&(this.diagnostics={runnable:D,programLog:R,vertexShader:{log:F,prefix:m},fragmentShader:{log:P,prefix:x}})}let E,S;return i.deleteShader(M),i.deleteShader(A),this.getUniforms=function(){return E===void 0&&(E=new mn(i,g)),E},this.getAttributes=function(){return S===void 0&&(S=function(R,F){const P={},D=R.getProgramParameter(F,35721);for(let z=0;z<D;z++){const N=R.getActiveAttrib(F,z).name;P[N]=R.getAttribLocation(F,N)}return P}(i,g)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Vh++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}v(Jh,"sr");function Qh(r,e,t,n,i,s){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,h=n.floatVertexTextures,c=n.maxVertexUniforms,d=n.vertexTextures;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(m){let x;return m&&m.isTexture?x=m.encoding:m&&m.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),x=m.texture.encoding):x=3e3,x}return v(g,"f"),{getParameters:function(m,x,_,w,M){const A=w.fog,E=m.isMeshStandardMaterial?w.environment:null,S=e.get(m.envMap||E),R=p[m.type],F=M.isSkinnedMesh?function(N){const H=N.skeleton.bones;if(h)return 1024;{const V=c,$=Math.floor((V-20)/4),re=Math.min($,H.length);return re<H.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+H.length+" bones. This GPU supports "+re+"."),0):re}}(M):0;let P,D;if(m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead.")),R){const N=Gt[R];P=N.vertexShader,D=N.fragmentShader}else P=m.vertexShader,D=m.fragmentShader;const z=r.getRenderTarget();return{isWebGL2:o,shaderID:R,shaderName:m.type,vertexShader:P,fragmentShader:D,defines:m.defines,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,instancing:M.isInstancedMesh===!0,instancingColor:M.isInstancedMesh===!0&&M.instanceColor!==null,supportsVertexTextures:d,outputEncoding:z!==null?g(z.texture):r.outputEncoding,map:!!m.map,mapEncoding:g(m.map),matcap:!!m.matcap,matcapEncoding:g(m.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:g(S),envMapCubeUV:!!S&&(S.mapping===306||S.mapping===307),lightMap:!!m.lightMap,lightMapEncoding:g(m.lightMap),aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,emissiveMapEncoding:g(m.emissiveMap),bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,clearcoatMap:!!m.clearcoatMap,clearcoatRoughnessMap:!!m.clearcoatRoughnessMap,clearcoatNormalMap:!!m.clearcoatNormalMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,alphaMap:!!m.alphaMap,gradientMap:!!m.gradientMap,sheen:!!m.sheen,transmissionMap:!!m.transmissionMap,combine:m.combine,vertexTangents:m.normalMap&&m.vertexTangents,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&M.geometry&&M.geometry.attributes.color&&M.geometry.attributes.color.itemSize===4,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.displacementMap||m.transmissionMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.transmissionMap||!m.displacementMap),fog:!!A,useFog:m.fog,fogExp2:A&&A.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:l,skinning:m.skinning&&F>0,maxBones:F,useVertexTexture:h,morphTargets:m.morphTargets,morphNormals:m.morphNormals,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:m.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,alphaTest:m.alphaTest,doubleSided:m.side===2,flipSided:m.side===1,depthPacking:m.depthPacking!==void 0&&m.depthPacking,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){const x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.fragmentShader),x.push(m.vertexShader)),m.defines!==void 0)for(const _ in m.defines)x.push(_),x.push(m.defines[_]);if(m.isRawShaderMaterial===!1){for(let _=0;_<f.length;_++)x.push(m[f[_]]);x.push(r.outputEncoding),x.push(r.gammaFactor)}return x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){const x=p[m.type];let _;if(x){const w=Gt[x];_=Ul.clone(w.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,x){let _;for(let w=0,M=a.length;w<M;w++){const A=a[w];if(A.cacheKey===x){_=A,++_.usedTimes;break}}return _===void 0&&(_=new Jh(r,x,m,i),a.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){const x=a.indexOf(m);a[x]=a[a.length-1],a.pop(),m.destroy()}},programs:a}}v(Qh,"ar");function $h(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}v($h,"or");function Kh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}v(Kh,"lr");function ec(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}v(ec,"hr");function Ka(r){const e=[];let t=0;const n=[],i=[],s={id:-1};function a(o,l,h,c,d,u){let p=e[t];const f=r.get(h);return p===void 0?(p={id:o.id,object:o,geometry:l,material:h,program:f.program||s,groupOrder:c,renderOrder:o.renderOrder,z:d,group:u},e[t]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=h,p.program=f.program||s,p.groupOrder=c,p.renderOrder=o.renderOrder,p.z=d,p.group=u),t++,p}return v(a,"a"),{opaque:n,transparent:i,init:function(){t=0,n.length=0,i.length=0},push:function(o,l,h,c,d,u){const p=a(o,l,h,c,d,u);(h.transparent===!0?i:n).push(p)},unshift:function(o,l,h,c,d,u){const p=a(o,l,h,c,d,u);(h.transparent===!0?i:n).unshift(p)},finish:function(){for(let o=t,l=e.length;o<l;o++){const h=e[o];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.program=null,h.group=null}},sort:function(o,l){n.length>1&&n.sort(o||Kh),i.length>1&&i.sort(l||ec)}}}v(Ka,"cr");function tc(r){let e=new WeakMap;return{get:function(t,n){let i;return e.has(t)===!1?(i=new Ka(r),e.set(t,[i])):n>=e.get(t).length?(i=new Ka(r),e.get(t).push(i)):i=e.get(t)[n],i},dispose:function(){e=new WeakMap}}}v(tc,"ur");function nc(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new y,color:new le};break;case"SpotLight":t={position:new y,direction:new y,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new y,halfWidth:new y,halfHeight:new y}}return r[e.id]=t,t}}}v(nc,"dr");let ic=0;function rc(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}v(rc,"mr");function sc(r,e){const t=new nc,n=function(){const l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)i.probe.push(new y);const s=new y,a=new ue,o=new ue;return{setup:function(l){let h=0,c=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let u=0,p=0,f=0,g=0,m=0,x=0,_=0,w=0;l.sort(rc);for(let A=0,E=l.length;A<E;A++){const S=l[A],R=S.color,F=S.intensity,P=S.distance,D=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=R.r*F,c+=R.g*F,d+=R.b*F;else if(S.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(S.sh.coefficients[z],F);else if(S.isDirectionalLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const N=S.shadow,H=n.get(S);H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.directionalShadow[u]=H,i.directionalShadowMap[u]=D,i.directionalShadowMatrix[u]=S.shadow.matrix,x++}i.directional[u]=z,u++}else if(S.isSpotLight){const z=t.get(S);if(z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(R).multiplyScalar(F),z.distance=P,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,S.castShadow){const N=S.shadow,H=n.get(S);H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.spotShadow[f]=H,i.spotShadowMap[f]=D,i.spotShadowMatrix[f]=S.shadow.matrix,w++}i.spot[f]=z,f++}else if(S.isRectAreaLight){const z=t.get(S);z.color.copy(R).multiplyScalar(F),z.halfWidth.set(.5*S.width,0,0),z.halfHeight.set(0,.5*S.height,0),i.rectArea[g]=z,g++}else if(S.isPointLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const N=S.shadow,H=n.get(S);H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,H.shadowCameraNear=N.camera.near,H.shadowCameraFar=N.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=S.shadow.matrix,_++}i.point[p]=z,p++}else if(S.isHemisphereLight){const z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(F),z.groundColor.copy(S.groundColor).multiplyScalar(F),i.hemi[m]=z,m++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=c,i.ambient[2]=d;const M=i.hash;M.directionalLength===u&&M.pointLength===p&&M.spotLength===f&&M.rectAreaLength===g&&M.hemiLength===m&&M.numDirectionalShadows===x&&M.numPointShadows===_&&M.numSpotShadows===w||(i.directional.length=u,i.spot.length=f,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=w,M.directionalLength=u,M.pointLength=p,M.spotLength=f,M.rectAreaLength=g,M.hemiLength=m,M.numDirectionalShadows=x,M.numPointShadows=_,M.numSpotShadows=w,i.version=ic++)},setupView:function(l,h){let c=0,d=0,u=0,p=0,f=0;const g=h.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const _=l[m];if(_.isDirectionalLight){const w=i.directional[c];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),c++}else if(_.isSpotLight){const w=i.spot[u];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(_.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),w.halfWidth.set(.5*_.width,0,0),w.halfHeight.set(0,.5*_.height,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),f++}}},state:i}}v(sc,"fr");function eo(r,e){const t=new sc(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(){t.setup(n)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}v(eo,"gr");function ac(r,e){let t=new WeakMap;return{get:function(n,i=0){let s;return t.has(n)===!1?(s=new eo(r,e),t.set(n,[s])):i>=t.get(n).length?(s=new eo(r,e),t.get(n).push(s)):s=t.get(n)[i],s},dispose:function(){t=new WeakMap}}}v(ac,"vr");class ys extends qe{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}v(ys,"xr"),ys.prototype.isMeshDepthMaterial=!0;class _s extends qe{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new y,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}v(_s,"yr");function to(r,e,t){let n=new ci;const i=new Y,s=new Y,a=new Re,o=[],l=[],h={},c=t.maxTextureSize,d={0:1,1:0,2:2},u=new Qt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const f=new be;f.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xe(f,u),m=this;function x(E,S){const R=e.update(g);u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(S,null,R,u,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(S,null,R,p,g,null)}v(x,"_");function _(E,S,R){const F=E<<0|S<<1|R<<2;let P=o[F];return P===void 0&&(P=new ys({depthPacking:3201,morphTargets:E,skinning:S}),o[F]=P),P}v(_,"w");function w(E,S,R){const F=E<<0|S<<1|R<<2;let P=l[F];return P===void 0&&(P=new _s({morphTargets:E,skinning:S}),l[F]=P),P}v(w,"b");function M(E,S,R,F,P,D,z){let N=null,H=_,V=E.customDepthMaterial;if(F.isPointLight===!0&&(H=w,V=E.customDistanceMaterial),V===void 0){let $=!1;R.morphTargets===!0&&($=S.morphAttributes&&S.morphAttributes.position&&S.morphAttributes.position.length>0);let re=!1;E.isSkinnedMesh===!0&&(R.skinning===!0?re=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",E)),N=H($,re,E.isInstancedMesh===!0)}else N=V;if(r.localClippingEnabled&&R.clipShadows===!0&&R.clippingPlanes.length!==0){const $=N.uuid,re=R.uuid;let J=h[$];J===void 0&&(J={},h[$]=J);let K=J[re];K===void 0&&(K=N.clone(),J[re]=K),N=K}return N.visible=R.visible,N.wireframe=R.wireframe,N.side=z===3?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:d[R.side],N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(F.matrixWorld),N.nearDistance=P,N.farDistance=D),N}v(M,"M");function A(E,S,R,F,P){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const z=e.update(E),N=E.material;if(Array.isArray(N)){const H=z.groups;for(let V=0,$=H.length;V<$;V++){const re=H[V],J=N[re.materialIndex];if(J&&J.visible){const K=M(E,z,J,F,R.near,R.far,P);r.renderBufferDirect(R,null,z,K,E,re)}}}else if(N.visible){const H=M(E,z,N,F,R.near,R.far,P);r.renderBufferDirect(R,null,z,H,E,null)}}const D=E.children;for(let z=0,N=D.length;z<N;z++)A(D[z],S,R,F,P)}v(A,"S"),this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(E,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const F=r.getRenderTarget(),P=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let N=0,H=E.length;N<H;N++){const V=E[N],$=V.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const re=$.getFrameExtents();if(i.multiply(re),s.copy($.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/re.x),i.x=s.x*re.x,$.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/re.y),i.y=s.y*re.y,$.mapSize.y=s.y)),$.map===null&&!$.isPointLightShadow&&this.type===3){const K={minFilter:1006,magFilter:1006,format:1023};$.map=new rn(i.x,i.y,K),$.map.texture.name=V.name+".shadowMap",$.mapPass=new rn(i.x,i.y,K),$.camera.updateProjectionMatrix()}if($.map===null){const K={minFilter:1003,magFilter:1003,format:1023};$.map=new rn(i.x,i.y,K),$.map.texture.name=V.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const J=$.getViewportCount();for(let K=0;K<J;K++){const ne=$.getViewport(K);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),z.viewport(a),$.updateMatrices(V,K),n=$.getFrustum(),A(S,R,$.camera,V,this.type)}$.isPointLightShadow||this.type!==3||x($,R),$.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(F,P,D)}}v(to,"_r");function oc(r,e,t){const n=t.isWebGL2,i=new function(){let T=!1;const I=new Re;let B=null;const k=new Re(0,0,0,0);return{setMask:function(G){B===G||T||(r.colorMask(G,G,G,G),B=G)},setLocked:function(G){T=G},setClear:function(G,U,se,ae,oe){oe===!0&&(G*=ae,U*=ae,se*=ae),I.set(G,U,se,ae),k.equals(I)===!1&&(r.clearColor(G,U,se,ae),k.copy(I))},reset:function(){T=!1,B=null,k.set(-1,0,0,0)}}},s=new function(){let T=!1,I=null,B=null,k=null;return{setTest:function(G){G?K(2929):ne(2929)},setMask:function(G){I===G||T||(r.depthMask(G),I=G)},setFunc:function(G){if(B!==G){if(G)switch(G){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);B=G}},setLocked:function(G){T=G},setClear:function(G){k!==G&&(r.clearDepth(G),k=G)},reset:function(){T=!1,I=null,B=null,k=null}}},a=new function(){let T=!1,I=null,B=null,k=null,G=null,U=null,se=null,ae=null,oe=null;return{setTest:function(ce){T||(ce?K(2960):ne(2960))},setMask:function(ce){I===ce||T||(r.stencilMask(ce),I=ce)},setFunc:function(ce,pe,Ue){B===ce&&k===pe&&G===Ue||(r.stencilFunc(ce,pe,Ue),B=ce,k=pe,G=Ue)},setOp:function(ce,pe,Ue){U===ce&&se===pe&&ae===Ue||(r.stencilOp(ce,pe,Ue),U=ce,se=pe,ae=Ue)},setLocked:function(ce){T=ce},setClear:function(ce){oe!==ce&&(r.clearStencil(ce),oe=ce)},reset:function(){T=!1,I=null,B=null,k=null,G=null,U=null,se=null,ae=null,oe=null}}};let o={},l=null,h={},c=null,d=!1,u=null,p=null,f=null,g=null,m=null,x=null,_=null,w=!1,M=null,A=null,E=null,S=null,R=null;const F=r.getParameter(35661);let P=!1,D=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(z)[1]),P=D>=1):z.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),P=D>=2);let N=null,H={};const V=new Re(0,0,r.canvas.width,r.canvas.height),$=new Re(0,0,r.canvas.width,r.canvas.height);function re(T,I,B){const k=new Uint8Array(4),G=r.createTexture();r.bindTexture(T,G),r.texParameteri(T,10241,9728),r.texParameteri(T,10240,9728);for(let U=0;U<B;U++)r.texImage2D(I+U,0,6408,1,1,0,6408,5121,k);return G}v(re,"N");const J={};function K(T){o[T]!==!0&&(r.enable(T),o[T]=!0)}v(K,"O");function ne(T){o[T]!==!1&&(r.disable(T),o[T]=!1)}v(ne,"F"),J[3553]=re(3553,3553,1),J[34067]=re(34067,34069,6),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(2929),s.setFunc(3),W(!1),X(1),K(2884),Q(0);const L={[100]:32774,101:32778,102:32779};if(n)L[103]=32775,L[104]=32776;else{const T=e.get("EXT_blend_minmax");T!==null&&(L[103]=T.MIN_EXT,L[104]=T.MAX_EXT)}const C={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function Q(T,I,B,k,G,U,se,ae){if(T!==0){if(d===!1&&(K(3042),d=!0),T===5)G=G||I,U=U||B,se=se||k,I===p&&G===m||(r.blendEquationSeparate(L[I],L[G]),p=I,m=G),B===f&&k===g&&U===x&&se===_||(r.blendFuncSeparate(C[B],C[k],C[U],C[se]),f=B,g=k,x=U,_=se),u=T,w=null;else if(T!==u||ae!==w){if(p===100&&m===100||(r.blendEquation(32774),p=100,m=100),ae)switch(T){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,0,769,771);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}else switch(T){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFunc(0,769);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}f=null,g=null,x=null,_=null,u=T,w=ae}}else d===!0&&(ne(3042),d=!1)}v(Q,"U");function W(T){M!==T&&(T?r.frontFace(2304):r.frontFace(2305),M=T)}v(W,"G");function X(T){T!==0?(K(2884),T!==A&&(T===1?r.cullFace(1029):T===2?r.cullFace(1028):r.cullFace(1032))):ne(2884),A=T}v(X,"V");function ee(T,I,B){T?(K(32823),S===I&&R===B||(r.polygonOffset(I,B),S=I,R=B)):ne(32823)}v(ee,"W");function he(T){T===void 0&&(T=33984+F-1),N!==T&&(r.activeTexture(T),N=T)}return v(he,"j"),{buffers:{color:i,depth:s,stencil:a},enable:K,disable:ne,bindFramebuffer:function(T,I){I===null&&l!==null&&(I=l),h[T]!==I&&(r.bindFramebuffer(T,I),h[T]=I,n&&(T===36009&&(h[36160]=I),T===36160&&(h[36009]=I)))},bindXRFramebuffer:function(T){T!==l&&(r.bindFramebuffer(36160,T),l=T)},useProgram:function(T){return c!==T&&(r.useProgram(T),c=T,!0)},setBlending:Q,setMaterial:function(T,I){T.side===2?ne(2884):K(2884);let B=T.side===1;I&&(B=!B),W(B),T.blending===1&&T.transparent===!1?Q(0):Q(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),i.setMask(T.colorWrite);const k=T.stencilWrite;a.setTest(k),k&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ee(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?K(32926):ne(32926)},setFlipSided:W,setCullFace:X,setLineWidth:function(T){T!==E&&(P&&r.lineWidth(T),E=T)},setPolygonOffset:ee,setScissorTest:function(T){T?K(3089):ne(3089)},activeTexture:he,bindTexture:function(T,I){N===null&&he();let B=H[N];B===void 0&&(B={type:void 0,texture:void 0},H[N]=B),B.type===T&&B.texture===I||(r.bindTexture(T,I||J[T]),B.type=T,B.texture=I)},unbindTexture:function(){const T=H[N];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},scissor:function(T){V.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),V.copy(T))},viewport:function(T){$.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),$.copy(T))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},N=null,H={},l=null,h={},c=null,d=!1,u=null,p=null,f=null,g=null,m=null,x=null,_=null,w=!1,M=null,A=null,E=null,S=null,R=null,V.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}v(oc,"wr");function lc(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,h=i.maxCubemapSize,c=i.maxTextureSize,d=i.maxSamples,u=new WeakMap;let p,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return f?new OffscreenCanvas(L,C):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}v(g,"C");function m(L,C,Q,W){let X=1;if((L.width>W||L.height>W)&&(X=W/Math.max(L.width,L.height)),X<1||C===!0){if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const ee=C?Ll:Math.floor,he=ee(X*L.width),T=ee(X*L.height);p===void 0&&(p=g(he,T));const I=Q?g(he,T):p;return I.width=he,I.height=T,I.getContext("2d").drawImage(L,0,0,he,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+he+"x"+T+")."),I}return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L}return L}v(m,"R");function x(L){return xa(L.width)&&xa(L.height)}v(x,"P");function _(L,C){return L.generateMipmaps&&C&&L.minFilter!==1003&&L.minFilter!==1006}v(_,"I");function w(L,C,Q,W){r.generateMipmap(L),n.get(C).__maxMipLevel=Math.log2(Math.max(Q,W))}v(w,"D");function M(L,C,Q){if(o===!1)return C;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let W=C;return C===6403&&(Q===5126&&(W=33326),Q===5131&&(W=33325),Q===5121&&(W=33321)),C===6407&&(Q===5126&&(W=34837),Q===5131&&(W=34843),Q===5121&&(W=32849)),C===6408&&(Q===5126&&(W=34836),Q===5131&&(W=34842),Q===5121&&(W=32856)),W!==33325&&W!==33326&&W!==34842&&W!==34836||e.get("EXT_color_buffer_float"),W}v(M,"O");function A(L){return L===1003||L===1004||L===1005?9728:9729}v(A,"F");function E(L){const C=L.target;C.removeEventListener("dispose",E),function(Q){const W=n.get(Q);W.__webglInit!==void 0&&(r.deleteTexture(W.__webglTexture),n.remove(Q))}(C),C.isVideoTexture&&u.delete(C),a.memory.textures--}v(E,"B");function S(L){const C=L.target;C.removeEventListener("dispose",S),function(Q){const W=Q.texture,X=n.get(Q),ee=n.get(W);if(Q){if(ee.__webglTexture!==void 0&&r.deleteTexture(ee.__webglTexture),Q.depthTexture&&Q.depthTexture.dispose(),Q.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)r.deleteFramebuffer(X.__webglFramebuffer[he]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[he]);else r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&r.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer);n.remove(W),n.remove(Q)}}(C),a.memory.textures--}v(S,"H");let R=0;function F(L,C){const Q=n.get(L);if(L.isVideoTexture&&function(W){const X=a.render.frame;u.get(W)!==X&&(u.set(W,X),W.update())}(L),L.version>0&&Q.__version!==L.version){const W=L.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(W.complete!==!1)return void V(Q,L,C);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+C),t.bindTexture(3553,Q.__webglTexture)}v(F,"G");function P(L,C){const Q=n.get(L);L.version>0&&Q.__version!==L.version?function(W,X,ee){if(X.image.length!==6)return;H(W,X),t.activeTexture(33984+ee),t.bindTexture(34067,W.__webglTexture),r.pixelStorei(37440,X.flipY),r.pixelStorei(37441,X.premultiplyAlpha),r.pixelStorei(3317,X.unpackAlignment),r.pixelStorei(37443,0);const he=X&&(X.isCompressedTexture||X.image[0].isCompressedTexture),T=X.image[0]&&X.image[0].isDataTexture,I=[];for(let oe=0;oe<6;oe++)I[oe]=he||T?T?X.image[oe].image:X.image[oe]:m(X.image[oe],!1,!0,h);const B=I[0],k=x(B)||o,G=s.convert(X.format),U=s.convert(X.type),se=M(X.internalFormat,G,U);let ae;if(N(34067,X,k),he){for(let oe=0;oe<6;oe++){ae=I[oe].mipmaps;for(let ce=0;ce<ae.length;ce++){const pe=ae[ce];X.format!==1023&&X.format!==1022?G!==null?t.compressedTexImage2D(34069+oe,ce,se,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+oe,ce,se,pe.width,pe.height,0,G,U,pe.data)}}W.__maxMipLevel=ae.length-1}else{ae=X.mipmaps;for(let oe=0;oe<6;oe++)if(T){t.texImage2D(34069+oe,0,se,I[oe].width,I[oe].height,0,G,U,I[oe].data);for(let ce=0;ce<ae.length;ce++){const pe=ae[ce].image[oe].image;t.texImage2D(34069+oe,ce+1,se,pe.width,pe.height,0,G,U,pe.data)}}else{t.texImage2D(34069+oe,0,se,G,U,I[oe]);for(let ce=0;ce<ae.length;ce++){const pe=ae[ce];t.texImage2D(34069+oe,ce+1,se,G,U,pe.image[oe])}}W.__maxMipLevel=ae.length}_(X,k)&&w(34067,X,B.width,B.height),W.__version=X.version,X.onUpdate&&X.onUpdate(X)}(Q,L,C):(t.activeTexture(33984+C),t.bindTexture(34067,Q.__webglTexture))}v(P,"V");const D={[1e3]:10497,[1001]:33071,[1002]:33648},z={[1003]:9728,1004:9984,1005:9986,[1006]:9729,1007:9985,1008:9987};function N(L,C,Q){if(Q?(r.texParameteri(L,10242,D[C.wrapS]),r.texParameteri(L,10243,D[C.wrapT]),L!==32879&&L!==35866||r.texParameteri(L,32882,D[C.wrapR]),r.texParameteri(L,10240,z[C.magFilter]),r.texParameteri(L,10241,z[C.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),L!==32879&&L!==35866||r.texParameteri(L,32882,33071),C.wrapS===1001&&C.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,A(C.magFilter)),r.texParameteri(L,10241,A(C.minFilter)),C.minFilter!==1003&&C.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(C.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}v(N,"j");function H(L,C){L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E),L.__webglTexture=r.createTexture(),a.memory.textures++)}v(H,"q");function V(L,C,Q){let W=3553;C.isDataTexture2DArray&&(W=35866),C.isDataTexture3D&&(W=32879),H(L,C),t.activeTexture(33984+Q),t.bindTexture(W,L.__webglTexture),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const X=function(U){return!o&&(U.wrapS!==1001||U.wrapT!==1001||U.minFilter!==1003&&U.minFilter!==1006)}(C)&&x(C.image)===!1,ee=m(C.image,X,!1,c),he=x(ee)||o,T=s.convert(C.format);let I,B=s.convert(C.type),k=M(C.internalFormat,T,B);N(W,C,he);const G=C.mipmaps;if(C.isDepthTexture)k=6402,o?k=C.type===1015?36012:C.type===1014?33190:C.type===1020?35056:33189:C.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===1026&&k===6402&&C.type!==1012&&C.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=1012,B=s.convert(C.type)),C.format===1027&&k===6402&&(k=34041,C.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=1020,B=s.convert(C.type))),t.texImage2D(3553,0,k,ee.width,ee.height,0,T,B,null);else if(C.isDataTexture)if(G.length>0&&he){for(let U=0,se=G.length;U<se;U++)I=G[U],t.texImage2D(3553,U,k,I.width,I.height,0,T,B,I.data);C.generateMipmaps=!1,L.__maxMipLevel=G.length-1}else t.texImage2D(3553,0,k,ee.width,ee.height,0,T,B,ee.data),L.__maxMipLevel=0;else if(C.isCompressedTexture){for(let U=0,se=G.length;U<se;U++)I=G[U],C.format!==1023&&C.format!==1022?T!==null?t.compressedTexImage2D(3553,U,k,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,U,k,I.width,I.height,0,T,B,I.data);L.__maxMipLevel=G.length-1}else if(C.isDataTexture2DArray)t.texImage3D(35866,0,k,ee.width,ee.height,ee.depth,0,T,B,ee.data),L.__maxMipLevel=0;else if(C.isDataTexture3D)t.texImage3D(32879,0,k,ee.width,ee.height,ee.depth,0,T,B,ee.data),L.__maxMipLevel=0;else if(G.length>0&&he){for(let U=0,se=G.length;U<se;U++)I=G[U],t.texImage2D(3553,U,k,T,B,I);C.generateMipmaps=!1,L.__maxMipLevel=G.length-1}else t.texImage2D(3553,0,k,T,B,ee),L.__maxMipLevel=0;_(C,he)&&w(W,C,ee.width,ee.height),L.__version=C.version,C.onUpdate&&C.onUpdate(C)}v(V,"X");function $(L,C,Q,W){const X=C.texture,ee=s.convert(X.format),he=s.convert(X.type),T=M(X.internalFormat,ee,he);W===32879||W===35866?t.texImage3D(W,0,T,C.width,C.height,C.depth,0,ee,he,null):t.texImage2D(W,0,T,C.width,C.height,0,ee,he,null),t.bindFramebuffer(36160,L),r.framebufferTexture2D(36160,Q,W,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}v($,"Y");function re(L,C,Q){if(r.bindRenderbuffer(36161,L),C.depthBuffer&&!C.stencilBuffer){let W=33189;if(Q){const X=C.depthTexture;X&&X.isDepthTexture&&(X.type===1015?W=36012:X.type===1014&&(W=33190));const ee=J(C);r.renderbufferStorageMultisample(36161,ee,W,C.width,C.height)}else r.renderbufferStorage(36161,W,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(C.depthBuffer&&C.stencilBuffer){if(Q){const W=J(C);r.renderbufferStorageMultisample(36161,W,35056,C.width,C.height)}else r.renderbufferStorage(36161,34041,C.width,C.height);r.framebufferRenderbuffer(36160,33306,36161,L)}else{const W=C.texture,X=s.convert(W.format),ee=s.convert(W.type),he=M(W.internalFormat,X,ee);if(Q){const T=J(C);r.renderbufferStorageMultisample(36161,T,he,C.width,C.height)}else r.renderbufferStorage(36161,he,C.width,C.height)}r.bindRenderbuffer(36161,null)}v(re,"Z");function J(L){return o&&L.isWebGLMultisampleRenderTarget?Math.min(d,L.samples):0}v(J,"J");let K=!1,ne=!1;this.allocateTextureUnit=function(){const L=R;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),R+=1,L},this.resetTextureUnits=function(){R=0},this.setTexture2D=F,this.setTexture2DArray=function(L,C){const Q=n.get(L);L.version>0&&Q.__version!==L.version?V(Q,L,C):(t.activeTexture(33984+C),t.bindTexture(35866,Q.__webglTexture))},this.setTexture3D=function(L,C){const Q=n.get(L);L.version>0&&Q.__version!==L.version?V(Q,L,C):(t.activeTexture(33984+C),t.bindTexture(32879,Q.__webglTexture))},this.setTextureCube=P,this.setupRenderTarget=function(L){const C=L.texture,Q=n.get(L),W=n.get(C);L.addEventListener("dispose",S),W.__webglTexture=r.createTexture(),W.__version=C.version,a.memory.textures++;const X=L.isWebGLCubeRenderTarget===!0,ee=L.isWebGLMultisampleRenderTarget===!0,he=C.isDataTexture3D||C.isDataTexture2DArray,T=x(L)||o;if(!o||C.format!==1022||C.type!==1015&&C.type!==1016||(C.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),X){Q.__webglFramebuffer=[];for(let I=0;I<6;I++)Q.__webglFramebuffer[I]=r.createFramebuffer()}else if(Q.__webglFramebuffer=r.createFramebuffer(),ee)if(o){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,Q.__webglColorRenderbuffer);const I=s.convert(C.format),B=s.convert(C.type),k=M(C.internalFormat,I,B),G=J(L);r.renderbufferStorageMultisample(36161,G,k,L.width,L.height),t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,Q.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),re(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(X){t.bindTexture(34067,W.__webglTexture),N(34067,C,T);for(let I=0;I<6;I++)$(Q.__webglFramebuffer[I],L,36064,34069+I);_(C,T)&&w(34067,C,L.width,L.height),t.bindTexture(34067,null)}else{let I=3553;he&&(o?I=C.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(I,W.__webglTexture),N(I,C,T),$(Q.__webglFramebuffer,L,36064,I),_(C,T)&&w(3553,C,L.width,L.height),t.bindTexture(3553,null)}L.depthBuffer&&function(I){const B=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");(function(G,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,G),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),F(U.depthTexture,0);const se=n.get(U.depthTexture).__webglTexture;if(U.depthTexture.format===1026)r.framebufferTexture2D(36160,36096,3553,se,0);else{if(U.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");r.framebufferTexture2D(36160,33306,3553,se,0)}})(B.__webglFramebuffer,I)}else if(k){B.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(36160,B.__webglFramebuffer[G]),B.__webglDepthbuffer[G]=r.createRenderbuffer(),re(B.__webglDepthbuffer[G],I,!1)}else t.bindFramebuffer(36160,B.__webglFramebuffer),B.__webglDepthbuffer=r.createRenderbuffer(),re(B.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}(L)},this.updateRenderTargetMipmap=function(L){const C=L.texture;if(_(C,x(L)||o)){const Q=L.isWebGLCubeRenderTarget?34067:3553,W=n.get(C).__webglTexture;t.bindTexture(Q,W),w(Q,C,L.width,L.height),t.bindTexture(Q,null)}},this.updateMultisampleRenderTarget=function(L){if(L.isWebGLMultisampleRenderTarget)if(o){const C=L.width,Q=L.height;let W=16384;L.depthBuffer&&(W|=256),L.stencilBuffer&&(W|=1024);const X=n.get(L);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer),r.blitFramebuffer(0,0,C,Q,0,0,C,Q,W,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(L,C){L&&L.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),L=L.texture),F(L,C)},this.safeSetTextureCube=function(L,C){L&&L.isWebGLCubeRenderTarget&&(ne===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ne=!0),L=L.texture),P(L,C)}}v(lc,"br");function hc(r,e,t){const n=t.isWebGL2;return{convert:function(i){let s;if(i===1009)return 5121;if(i===1017)return 32819;if(i===1018)return 32820;if(i===1019)return 33635;if(i===1010)return 5120;if(i===1011)return 5122;if(i===1012)return 5123;if(i===1013)return 5124;if(i===1014)return 5125;if(i===1015)return 5126;if(i===1016)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return 6406;if(i===1022)return 6407;if(i===1023)return 6408;if(i===1024)return 6409;if(i===1025)return 6410;if(i===1026)return 6402;if(i===1027)return 34041;if(i===1028)return 6403;if(i===1029)return 36244;if(i===1030)return 33319;if(i===1031)return 33320;if(i===1032)return 36248;if(i===1033)return 36249;if(i===33776||i===33777||i===33778||i===33779){if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===37492||i===37496)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(i===37492)return s.COMPRESSED_RGB8_ETC2;if(i===37496)return s.COMPRESSED_RGBA8_ETC2_EAC}return i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821||i===37840||i===37841||i===37842||i===37843||i===37844||i===37845||i===37846||i===37847||i===37848||i===37849||i===37850||i===37851||i===37852||i===37853?(s=e.get("WEBGL_compressed_texture_astc"),s!==null?i:null):i===36492?(s=e.get("EXT_texture_compression_bptc"),s!==null?i:null):i===1020?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}v(hc,"Mr"),_s.prototype.isMeshDistanceMaterial=!0;class bs extends ct{constructor(e=[]){super(),this.cameras=e}}v(bs,"Sr"),bs.prototype.isArrayCamera=!0;class vt extends Se{constructor(){super(),this.type="Group"}}v(vt,"Er"),vt.prototype.isGroup=!0;const cc={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cc))),h&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n);if(h.joints[g.jointName]===void 0){const _=new vt;_.matrixAutoUpdate=!1,_.visible=!1,h.joints[g.jointName]=_,h.add(_)}const x=h.joints[g.jointName];m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;h.inputState.pinching&&u>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}}v(rr,"Lr");class no extends nn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",h=null;const c=[],d=new Map,u=new ct;u.layers.enable(1),u.viewport=new Re;const p=new ct;p.layers.enable(2),p.viewport=new Re;const f=[u,p],g=new bs;g.layers.enable(1),g.layers.enable(2);let m=null,x=null;function _(P){const D=d.get(P.inputSource);D&&D.dispatchEvent({type:P.type,data:P.inputSource})}v(_,"v");function w(){d.forEach(function(P,D){P.disconnect(D)}),d.clear(),m=null,x=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}v(w,"x");function M(P){const D=s.inputSources;for(let z=0;z<c.length;z++)d.set(D[z],c[z]);for(let z=0;z<P.removed.length;z++){const N=P.removed[z],H=d.get(N);H&&(H.dispatchEvent({type:"disconnected",data:N}),d.delete(N))}for(let z=0;z<P.added.length;z++){const N=P.added[z],H=d.get(N);H&&H.dispatchEvent({type:"connected",data:N})}}v(M,"y"),this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let D=c[P];return D===void 0&&(D=new rr,c[P]=D),D.getTargetRaySpace()},this.getControllerGrip=function(P){let D=c[P];return D===void 0&&(D=new rr,c[P]=D),D.getGripSpace()},this.getHand=function(P){let D=c[P];return D===void 0&&(D=new rr,c[P]=D),D.getHandSpace()},this.setFramebufferScaleFactor=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){l=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){s.addEventListener("select",_),s.addEventListener("selectstart",_),s.addEventListener("selectend",_),s.addEventListener("squeeze",_),s.addEventListener("squeezestart",_),s.addEventListener("squeezeend",_),s.addEventListener("end",w),s.addEventListener("inputsourceschange",M);const D=t.getContextAttributes();D.xrCompatible!==!0&&await t.makeXRCompatible();const z={antialias:D.antialias,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a},N=new XRWebGLLayer(s,t,z);s.updateRenderState({baseLayer:N}),o=await s.requestReferenceSpace(l),F.setContext(s),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const A=new y,E=new y;function S(P,D){D===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(D.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}v(S,"b"),this.getCamera=function(P){g.near=p.near=u.near=P.near,g.far=p.far=u.far=P.far,m===g.near&&x===g.far||(s.updateRenderState({depthNear:g.near,depthFar:g.far}),m=g.near,x=g.far);const D=P.parent,z=g.cameras;S(g,D);for(let H=0;H<z.length;H++)S(z[H],D);P.matrixWorld.copy(g.matrixWorld),P.matrix.copy(g.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const N=P.children;for(let H=0,V=N.length;H<V;H++)N[H].updateMatrixWorld(!0);return z.length===2?function(H,V,$){A.setFromMatrixPosition(V.matrixWorld),E.setFromMatrixPosition($.matrixWorld);const re=A.distanceTo(E),J=V.projectionMatrix.elements,K=$.projectionMatrix.elements,ne=J[14]/(J[10]-1),L=J[14]/(J[10]+1),C=(J[9]+1)/J[5],Q=(J[9]-1)/J[5],W=(J[8]-1)/J[0],X=(K[8]+1)/K[0],ee=ne*W,he=ne*X,T=re/(-W+X),I=T*-W;V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(I),H.translateZ(T),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const B=ne+T,k=L+T,G=ee-I,U=he+(re-I),se=C*L/k*B,ae=Q*L/k*B;H.projectionMatrix.makePerspective(G,U,se,ae,B,k)}(g,u,p):g.projectionMatrix.copy(u.projectionMatrix),g};let R=null;const F=new Ia;F.setAnimationLoop(function(P,D){if(h=D.getViewerPose(o),h!==null){const N=h.views,H=s.renderState.baseLayer;i.bindXRFramebuffer(H.framebuffer);let V=!1;N.length!==g.cameras.length&&(g.cameras.length=0,V=!0);for(let $=0;$<N.length;$++){const re=N[$],J=H.getViewport(re),K=f[$];K.matrix.fromArray(re.transform.matrix),K.projectionMatrix.fromArray(re.projectionMatrix),K.viewport.set(J.x,J.y,J.width,J.height),$===0&&g.matrix.copy(K.matrix),V===!0&&g.cameras.push(K)}}const z=s.inputSources;for(let N=0;N<c.length;N++){const H=c[N],V=z[N];H.update(V,D,o)}R&&R(P,D)}),this.setAnimationLoop=function(P){R=P},this.dispose=function(){}}}v(no,"Ar");function uc(r){function e(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.specularMap&&(n.specularMap.value=i.specularMap);const s=r.get(i).envMap;if(s){n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s._needsFlipEnvMap?-1:1,n.reflectivity.value=i.reflectivity,n.refractionRatio.value=i.refractionRatio;const l=r.get(s).__maxMipLevel;l!==void 0&&(n.maxMipLevel.value=l)}let a,o;i.lightMap&&(n.lightMap.value=i.lightMap,n.lightMapIntensity.value=i.lightMapIntensity),i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap&&(a=i.clearcoatRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}v(e,"e");function t(n,i){n.roughness.value=i.roughness,n.metalness.value=i.metalness,i.roughnessMap&&(n.roughnessMap.value=i.roughnessMap),i.metalnessMap&&(n.metalnessMap.value=i.metalnessMap),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===1&&(n.bumpScale.value*=-1)),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===1&&n.normalScale.value.negate()),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),r.get(i).envMap&&(n.envMapIntensity.value=i.envMapIntensity)}return v(t,"n"),{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,s,a){i.isMeshBasicMaterial?e(n,i):i.isMeshLambertMaterial?(e(n,i),function(o,l){l.emissiveMap&&(o.emissiveMap.value=l.emissiveMap)}(n,i)):i.isMeshToonMaterial?(e(n,i),function(o,l){l.gradientMap&&(o.gradientMap.value=l.gradientMap),l.emissiveMap&&(o.emissiveMap.value=l.emissiveMap),l.bumpMap&&(o.bumpMap.value=l.bumpMap,o.bumpScale.value=l.bumpScale,l.side===1&&(o.bumpScale.value*=-1)),l.normalMap&&(o.normalMap.value=l.normalMap,o.normalScale.value.copy(l.normalScale),l.side===1&&o.normalScale.value.negate()),l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias)}(n,i)):i.isMeshPhongMaterial?(e(n,i),function(o,l){o.specular.value.copy(l.specular),o.shininess.value=Math.max(l.shininess,1e-4),l.emissiveMap&&(o.emissiveMap.value=l.emissiveMap),l.bumpMap&&(o.bumpMap.value=l.bumpMap,o.bumpScale.value=l.bumpScale,l.side===1&&(o.bumpScale.value*=-1)),l.normalMap&&(o.normalMap.value=l.normalMap,o.normalScale.value.copy(l.normalScale),l.side===1&&o.normalScale.value.negate()),l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias)}(n,i)):i.isMeshStandardMaterial?(e(n,i),i.isMeshPhysicalMaterial?function(o,l){t(o,l),o.reflectivity.value=l.reflectivity,o.clearcoat.value=l.clearcoat,o.clearcoatRoughness.value=l.clearcoatRoughness,l.sheen&&o.sheen.value.copy(l.sheen),l.clearcoatMap&&(o.clearcoatMap.value=l.clearcoatMap),l.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap),l.clearcoatNormalMap&&(o.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),o.clearcoatNormalMap.value=l.clearcoatNormalMap,l.side===1&&o.clearcoatNormalScale.value.negate()),o.transmission.value=l.transmission,l.transmissionMap&&(o.transmissionMap.value=l.transmissionMap)}(n,i):t(n,i)):i.isMeshMatcapMaterial?(e(n,i),function(o,l){l.matcap&&(o.matcap.value=l.matcap),l.bumpMap&&(o.bumpMap.value=l.bumpMap,o.bumpScale.value=l.bumpScale,l.side===1&&(o.bumpScale.value*=-1)),l.normalMap&&(o.normalMap.value=l.normalMap,o.normalScale.value.copy(l.normalScale),l.side===1&&o.normalScale.value.negate()),l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias)}(n,i)):i.isMeshDepthMaterial?(e(n,i),function(o,l){l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias)}(n,i)):i.isMeshDistanceMaterial?(e(n,i),function(o,l){l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias),o.referencePosition.value.copy(l.referencePosition),o.nearDistance.value=l.nearDistance,o.farDistance.value=l.farDistance}(n,i)):i.isMeshNormalMaterial?(e(n,i),function(o,l){l.bumpMap&&(o.bumpMap.value=l.bumpMap,o.bumpScale.value=l.bumpScale,l.side===1&&(o.bumpScale.value*=-1)),l.normalMap&&(o.normalMap.value=l.normalMap,o.normalScale.value.copy(l.normalScale),l.side===1&&o.normalScale.value.negate()),l.displacementMap&&(o.displacementMap.value=l.displacementMap,o.displacementScale.value=l.displacementScale,o.displacementBias.value=l.displacementBias)}(n,i)):i.isLineBasicMaterial?(function(o,l){o.diffuse.value.copy(l.color),o.opacity.value=l.opacity}(n,i),i.isLineDashedMaterial&&function(o,l){o.dashSize.value=l.dashSize,o.totalSize.value=l.dashSize+l.gapSize,o.scale.value=l.scale}(n,i)):i.isPointsMaterial?function(o,l,h,c){let d;o.diffuse.value.copy(l.color),o.opacity.value=l.opacity,o.size.value=l.size*h,o.scale.value=.5*c,l.map&&(o.map.value=l.map),l.alphaMap&&(o.alphaMap.value=l.alphaMap),l.map?d=l.map:l.alphaMap&&(d=l.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),o.uvTransform.value.copy(d.matrix))}(n,i,s,a):i.isSpriteMaterial?function(o,l){let h;o.diffuse.value.copy(l.color),o.opacity.value=l.opacity,o.rotation.value=l.rotation,l.map&&(o.map.value=l.map),l.alphaMap&&(o.alphaMap.value=l.alphaMap),l.map?h=l.map:l.alphaMap&&(h=l.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),o.uvTransform.value.copy(h.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}v(uc,"Cr");function Ie(r){const e=(r=r||{}).canvas!==void 0?r.canvas:function(){const b=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return b.style.display="block",b}(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0&&r.alpha,i=r.depth===void 0||r.depth,s=r.stencil===void 0||r.stencil,a=r.antialias!==void 0&&r.antialias,o=r.premultipliedAlpha===void 0||r.premultipliedAlpha,l=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,h=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat;let d=null,u=null;const p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const g=this;let m=!1,x=0,_=0,w=null,M=-1,A=null;const E=new Re,S=new Re;let R=null,F=e.width,P=e.height,D=1,z=null,N=null;const H=new Re(0,0,F,P),V=new Re(0,0,F,P);let $=!1;const re=new ci;let J=!1,K=!1;const ne=new ue,L=new y,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return w===null?D:1}v(Q,"j");let W,X,ee,he,T,I,B,k,G,U,se,ae,oe,ce,pe,Ue,kt,Wt,Ni,zi,xt,it,Z=t;function fl(b,q){for(let O=0;O<b.length;O++){const j=b[O],te=e.getContext(j,q);if(te!==null)return te}return null}v(fl,"gt");try{const b={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if(e.addEventListener("webglcontextlost",vl,!1),e.addEventListener("webglcontextrestored",xl,!1),Z===null){const q=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&q.shift(),Z=fl(q,b),Z===null)throw fl(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function gl(){W=new Yl(Z),X=new jl(Z,W,r),W.init(X),xt=new hc(Z,W,X),ee=new oc(Z,W,X),he=new Ql(Z),T=new $h,I=new lc(Z,W,ee,T,X,xt,he),B=new Xl(g),k=new Gl(Z,X),it=new kl(Z,W,k,X),G=new Zl(Z,k,he,it),U=new th(Z,G,k,he),Wt=new eh(Z),pe=new ql(T),se=new Qh(g,B,W,X,it,pe),ae=new uc(T),oe=new tc(T),ce=new ac(W,X),kt=new Vl(g,B,ee,U,o),Ue=new to(g,U,X),Ni=new Wl(Z,W,he,X),zi=new Jl(Z,W,he,X),he.programs=se.programs,g.capabilities=X,g.extensions=W,g.properties=T,g.renderLists=oe,g.shadowMap=Ue,g.state=ee,g.info=he}v(gl,"vt"),gl();const Ft=new no(g,Z);function vl(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}v(vl,"yt");function xl(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const b=he.autoReset,q=Ue.enabled,O=Ue.autoUpdate,j=Ue.needsUpdate,te=Ue.type;gl(),he.autoReset=b,Ue.enabled=q,Ue.autoUpdate=O,Ue.needsUpdate=j,Ue.type=te}v(xl,"_t");function yl(b){const q=b.target;q.removeEventListener("dispose",yl),function(O){(function(j){const te=T.get(j).programs;te!==void 0&&te.forEach(function(_e){se.releaseProgram(_e)})})(O),T.remove(O)}(q)}v(yl,"wt"),this.xr=Ft,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const b=W.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=W.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(b){b!==void 0&&(D=b,this.setSize(F,P,!1))},this.getSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),b=new Y),b.set(F,P)},this.setSize=function(b,q,O){Ft.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(F=b,P=q,e.width=Math.floor(b*D),e.height=Math.floor(q*D),O!==!1&&(e.style.width=b+"px",e.style.height=q+"px"),this.setViewport(0,0,b,q))},this.getDrawingBufferSize=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),b=new Y),b.set(F*D,P*D).floor()},this.setDrawingBufferSize=function(b,q,O){F=b,P=q,D=O,e.width=Math.floor(b*O),e.height=Math.floor(q*O),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),b=new Re),b.copy(E)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,q,O,j){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,q,O,j),ee.viewport(E.copy(H).multiplyScalar(D).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,q,O,j){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,q,O,j),ee.scissor(S.copy(V).multiplyScalar(D).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){ee.setScissorTest($=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),b=new le),b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b,q,O){let j=0;(b===void 0||b)&&(j|=16384),(q===void 0||q)&&(j|=256),(O===void 0||O)&&(j|=1024),Z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vl,!1),e.removeEventListener("webglcontextrestored",xl,!1),oe.dispose(),ce.dispose(),T.dispose(),B.dispose(),U.dispose(),it.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",_l),Ft.removeEventListener("sessionend",bl),En.stop()},this.renderBufferImmediate=function(b,q){it.initAttributes();const O=T.get(b);b.hasPositions&&!O.position&&(O.position=Z.createBuffer()),b.hasNormals&&!O.normal&&(O.normal=Z.createBuffer()),b.hasUvs&&!O.uv&&(O.uv=Z.createBuffer()),b.hasColors&&!O.color&&(O.color=Z.createBuffer());const j=q.getAttributes();b.hasPositions&&(Z.bindBuffer(34962,O.position),Z.bufferData(34962,b.positionArray,35048),it.enableAttribute(j.position),Z.vertexAttribPointer(j.position,3,5126,!1,0,0)),b.hasNormals&&(Z.bindBuffer(34962,O.normal),Z.bufferData(34962,b.normalArray,35048),it.enableAttribute(j.normal),Z.vertexAttribPointer(j.normal,3,5126,!1,0,0)),b.hasUvs&&(Z.bindBuffer(34962,O.uv),Z.bufferData(34962,b.uvArray,35048),it.enableAttribute(j.uv),Z.vertexAttribPointer(j.uv,2,5126,!1,0,0)),b.hasColors&&(Z.bindBuffer(34962,O.color),Z.bufferData(34962,b.colorArray,35048),it.enableAttribute(j.color),Z.vertexAttribPointer(j.color,3,5126,!1,0,0)),it.disableUnusedAttributes(),Z.drawArrays(4,0,b.count),b.count=0},this.renderBufferDirect=function(b,q,O,j,te,_e){q===null&&(q=C);const fe=te.isMesh&&te.matrixWorld.determinant()<0,Me=Tl(b,q,j,te);ee.setMaterial(j,fe);let Te=O.index;const xe=O.attributes.position;if(Te===null){if(xe===void 0||xe.count===0)return}else if(Te.count===0)return;let Le,me=1;j.wireframe===!0&&(Te=G.getWireframeAttribute(O),me=2),(j.morphTargets||j.morphNormals)&&Wt.update(te,O,j,Me),it.setup(te,j,Me,O,Te);let Fe=Ni;Te!==null&&(Le=k.get(Te),Fe=zi,Fe.setIndex(Le));const jt=Te!==null?Te.count:xe.count,Ge=O.drawRange.start*me,Tn=O.drawRange.count*me,Qe=_e!==null?_e.start*me:0,Ln=_e!==null?_e.count*me:1/0,dt=Math.max(Ge,Qe),Et=Math.min(jt,Ge+Tn,Qe+Ln)-1,Ye=Math.max(0,Et-dt+1);if(Ye!==0){if(te.isMesh)j.wireframe===!0?(ee.setLineWidth(j.wireframeLinewidth*Q()),Fe.setMode(1)):Fe.setMode(4);else if(te.isLine){let An=j.linewidth;An===void 0&&(An=1),ee.setLineWidth(An*Q()),te.isLineSegments?Fe.setMode(1):te.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else te.isPoints?Fe.setMode(0):te.isSprite&&Fe.setMode(4);if(te.isInstancedMesh)Fe.renderInstances(dt,Ye,te.count);else if(O.isInstancedBufferGeometry){const An=Math.min(O.instanceCount,O._maxInstanceCount);Fe.renderInstances(dt,Ye,An)}else Fe.render(dt,Ye)}},this.compile=function(b,q){u=ce.get(b),u.init(),b.traverseVisible(function(O){O.isLight&&O.layers.test(q.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights(),b.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let te=0;te<j.length;te++)ma(j[te],b,O);else ma(j,b,O)})};let pa=null;function _l(){En.stop()}v(_l,"St");function bl(){En.start()}v(bl,"Et");const En=new Ia;function wl(b,q,O,j){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||re.intersectsSprite(b)){j&&L.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const _e=U.update(b),fe=b.material;fe.visible&&d.push(b,_e,fe,O,L.z,null)}}else if(b.isImmediateRenderObject)j&&L.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne),d.push(b,null,b.material,O,L.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==he.render.frame&&(b.skeleton.update(),b.skeleton.frame=he.render.frame),!b.frustumCulled||re.intersectsObject(b))){j&&L.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const _e=U.update(b),fe=b.material;if(Array.isArray(fe)){const Me=_e.groups;for(let Te=0,xe=Me.length;Te<xe;Te++){const Le=Me[Te],me=fe[Le.materialIndex];me&&me.visible&&d.push(b,_e,me,O,L.z,Le)}}else fe.visible&&d.push(b,_e,fe,O,L.z,null)}}const te=b.children;for(let _e=0,fe=te.length;_e<fe;_e++)wl(te[_e],q,O,j)}v(wl,"Lt");function Ml(b,q,O){const j=q.isScene===!0?q.overrideMaterial:null;for(let te=0,_e=b.length;te<_e;te++){const fe=b[te],Me=fe.object,Te=fe.geometry,xe=j===null?fe.material:j,Le=fe.group;if(O.isArrayCamera){const me=O.cameras;for(let Fe=0,jt=me.length;Fe<jt;Fe++){const Ge=me[Fe];Me.layers.test(Ge.layers)&&(ee.viewport(E.copy(Ge.viewport)),u.setupLightsView(Ge),Sl(Me,q,Ge,Te,xe,Le))}}else Sl(Me,q,O,Te,xe,Le)}}v(Ml,"At");function Sl(b,q,O,j,te,_e){if(b.onBeforeRender(g,q,O,j,te,_e),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),b.isImmediateRenderObject){const fe=Tl(O,q,te,b);ee.setMaterial(te),it.reset(),function(Me,Te){Me.render(function(xe){g.renderBufferImmediate(xe,Te)})}(b,fe)}else g.renderBufferDirect(O,q,j,te,b,_e);b.onAfterRender(g,q,O,j,te,_e)}v(Sl,"Ct");function ma(b,q,O){q.isScene!==!0&&(q=C);const j=T.get(b),te=u.state.lights,_e=u.state.shadowsArray,fe=te.state.version,Me=se.getParameters(b,te.state,_e,q,O),Te=se.getProgramCacheKey(Me);let xe=j.programs;j.environment=b.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=B.get(b.envMap||j.environment),xe===void 0&&(b.addEventListener("dispose",yl),xe=new Map,j.programs=xe);let Le=xe.get(Te);if(Le!==void 0){if(j.currentProgram===Le&&j.lightsStateVersion===fe)return El(b,Me),Le}else Me.uniforms=se.getUniforms(b),b.onBuild(Me,g),b.onBeforeCompile(Me,g),Le=se.acquireProgram(Me,Te),xe.set(Te,Le),j.uniforms=Me.uniforms;const me=j.uniforms;(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(me.clippingPlanes=pe.uniform),El(b,Me),j.needsLights=function(Ge){return Ge.isMeshLambertMaterial||Ge.isMeshToonMaterial||Ge.isMeshPhongMaterial||Ge.isMeshStandardMaterial||Ge.isShadowMaterial||Ge.isShaderMaterial&&Ge.lights===!0}(b),j.lightsStateVersion=fe,j.needsLights&&(me.ambientLightColor.value=te.state.ambient,me.lightProbe.value=te.state.probe,me.directionalLights.value=te.state.directional,me.directionalLightShadows.value=te.state.directionalShadow,me.spotLights.value=te.state.spot,me.spotLightShadows.value=te.state.spotShadow,me.rectAreaLights.value=te.state.rectArea,me.ltc_1.value=te.state.rectAreaLTC1,me.ltc_2.value=te.state.rectAreaLTC2,me.pointLights.value=te.state.point,me.pointLightShadows.value=te.state.pointShadow,me.hemisphereLights.value=te.state.hemi,me.directionalShadowMap.value=te.state.directionalShadowMap,me.directionalShadowMatrix.value=te.state.directionalShadowMatrix,me.spotShadowMap.value=te.state.spotShadowMap,me.spotShadowMatrix.value=te.state.spotShadowMatrix,me.pointShadowMap.value=te.state.pointShadowMap,me.pointShadowMatrix.value=te.state.pointShadowMatrix);const Fe=Le.getUniforms(),jt=mn.seqWithValue(Fe.seq,me);return j.currentProgram=Le,j.uniformsList=jt,Le}v(ma,"Rt");function El(b,q){const O=T.get(b);O.outputEncoding=q.outputEncoding,O.instancing=q.instancing,O.numClippingPlanes=q.numClippingPlanes,O.numIntersection=q.numClipIntersection,O.vertexAlphas=q.vertexAlphas}v(El,"Pt");function Tl(b,q,O,j){q.isScene!==!0&&(q=C),I.resetTextureUnits();const te=q.fog,_e=O.isMeshStandardMaterial?q.environment:null,fe=w===null?g.outputEncoding:w.texture.encoding,Me=B.get(O.envMap||_e),Te=O.vertexColors===!0&&j.geometry&&j.geometry.attributes.color&&j.geometry.attributes.color.itemSize===4,xe=T.get(O),Le=u.state.lights;if(J===!0&&(K===!0||b!==A)){const Ye=b===A&&O.id===M;pe.setState(O,b,Ye)}let me=!1;O.version===xe.__version?xe.needsLights&&xe.lightsStateVersion!==Le.state.version||xe.outputEncoding!==fe||j.isInstancedMesh&&xe.instancing===!1?me=!0:j.isInstancedMesh||xe.instancing!==!0?xe.envMap!==Me||O.fog&&xe.fog!==te?me=!0:xe.numClippingPlanes===void 0||xe.numClippingPlanes===pe.numPlanes&&xe.numIntersection===pe.numIntersection?xe.vertexAlphas!==Te&&(me=!0):me=!0:me=!0:(me=!0,xe.__version=O.version);let Fe=xe.currentProgram;me===!0&&(Fe=ma(O,q,j));let jt=!1,Ge=!1,Tn=!1;const Qe=Fe.getUniforms(),Ln=xe.uniforms;if(ee.useProgram(Fe.program)&&(jt=!0,Ge=!0,Tn=!0),O.id!==M&&(M=O.id,Ge=!0),jt||A!==b){if(Qe.setValue(Z,"projectionMatrix",b.projectionMatrix),X.logarithmicDepthBuffer&&Qe.setValue(Z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),A!==b&&(A=b,Ge=!0,Tn=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ye=Qe.map.cameraPosition;Ye!==void 0&&Ye.setValue(Z,L.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Qe.setValue(Z,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||O.skinning)&&Qe.setValue(Z,"viewMatrix",b.matrixWorldInverse)}if(O.skinning){Qe.setOptional(Z,j,"bindMatrix"),Qe.setOptional(Z,j,"bindMatrixInverse");const Ye=j.skeleton;if(Ye){const An=Ye.bones;if(X.floatVertexTextures){if(Ye.boneTexture===null){let tn=Math.sqrt(4*An.length);tn=function(Yc){return Math.pow(2,Math.ceil(Math.log(Yc)/Math.LN2))}(tn),tn=Math.max(tn,4);const fa=new Float32Array(tn*tn*4);fa.set(Ye.boneMatrices);const Xc=new ms(fa,tn,tn,1023,1015);Ye.boneMatrices=fa,Ye.boneTexture=Xc,Ye.boneTextureSize=tn}Qe.setValue(Z,"boneTexture",Ye.boneTexture,I),Qe.setValue(Z,"boneTextureSize",Ye.boneTextureSize)}else Qe.setOptional(Z,Ye,"boneMatrices")}}var dt,Et;return(Ge||xe.receiveShadow!==j.receiveShadow)&&(xe.receiveShadow=j.receiveShadow,Qe.setValue(Z,"receiveShadow",j.receiveShadow)),Ge&&(Qe.setValue(Z,"toneMappingExposure",g.toneMappingExposure),xe.needsLights&&(Et=Tn,(dt=Ln).ambientLightColor.needsUpdate=Et,dt.lightProbe.needsUpdate=Et,dt.directionalLights.needsUpdate=Et,dt.directionalLightShadows.needsUpdate=Et,dt.pointLights.needsUpdate=Et,dt.pointLightShadows.needsUpdate=Et,dt.spotLights.needsUpdate=Et,dt.spotLightShadows.needsUpdate=Et,dt.rectAreaLights.needsUpdate=Et,dt.hemisphereLights.needsUpdate=Et),te&&O.fog&&ae.refreshFogUniforms(Ln,te),ae.refreshMaterialUniforms(Ln,O,D,P),mn.upload(Z,xe.uniformsList,Ln,I)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(mn.upload(Z,xe.uniformsList,Ln,I),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Qe.setValue(Z,"center",j.center),Qe.setValue(Z,"modelViewMatrix",j.modelViewMatrix),Qe.setValue(Z,"normalMatrix",j.normalMatrix),Qe.setValue(Z,"modelMatrix",j.matrixWorld),Fe}v(Tl,"It"),En.setAnimationLoop(function(b){pa&&pa(b)}),typeof window!="undefined"&&En.setContext(window),this.setAnimationLoop=function(b){pa=b,Ft.setAnimationLoop(b),b===null?En.stop():En.start()},Ft.addEventListener("sessionstart",_l),Ft.addEventListener("sessionend",bl),this.render=function(b,q){let O,j;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),O=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),j=arguments[3]),q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(m===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(q=Ft.getCamera(q)),b.isScene===!0&&b.onBeforeRender(g,b,q,O||w),u=ce.get(b,f.length),u.init(),f.push(u),ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re.setFromProjectionMatrix(ne),K=this.localClippingEnabled,J=pe.init(this.clippingPlanes,K,q),d=oe.get(b,p.length),d.init(),p.push(d),wl(b,q,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(z,N),J===!0&&pe.beginShadows();const te=u.state.shadowsArray;Ue.render(te,b,q),u.setupLights(),u.setupLightsView(q),J===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),O!==void 0&&this.setRenderTarget(O),kt.render(d,b,q,j);const _e=d.opaque,fe=d.transparent;_e.length>0&&Ml(_e,b,q),fe.length>0&&Ml(fe,b,q),w!==null&&(I.updateRenderTargetMipmap(w),I.updateMultisampleRenderTarget(w)),b.isScene===!0&&b.onAfterRender(g,b,q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1),it.resetDefaultState(),M=-1,A=null,f.pop(),u=f.length>0?f[f.length-1]:null,p.pop(),d=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTarget=function(b,q=0,O=0){w=b,x=q,_=O,b&&T.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b);let j=null,te=!1,_e=!1;if(b){const fe=b.texture;(fe.isDataTexture3D||fe.isDataTexture2DArray)&&(_e=!0);const Me=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(j=Me[q],te=!0):j=b.isWebGLMultisampleRenderTarget?T.get(b).__webglMultisampledFramebuffer:Me,E.copy(b.viewport),S.copy(b.scissor),R=b.scissorTest}else E.copy(H).multiplyScalar(D).floor(),S.copy(V).multiplyScalar(D).floor(),R=$;if(ee.bindFramebuffer(36160,j),ee.viewport(E),ee.scissor(S),ee.setScissorTest(R),te){const fe=T.get(b.texture);Z.framebufferTexture2D(36160,36064,34069+q,fe.__webglTexture,O)}else if(_e){const fe=T.get(b.texture),Me=q||0;Z.framebufferTextureLayer(36160,36064,fe.__webglTexture,O||0,Me)}},this.readRenderTargetPixels=function(b,q,O,j,te,_e,fe){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){ee.bindFramebuffer(36160,Me);try{const Te=b.texture,xe=Te.format,Le=Te.type;if(xe!==1023&&xt.convert(xe)!==Z.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const me=Le===1016&&(W.has("EXT_color_buffer_half_float")||X.isWebGL2&&W.has("EXT_color_buffer_float"));if(!(Le===1009||xt.convert(Le)===Z.getParameter(35738)||Le===1015&&(X.isWebGL2||W.has("OES_texture_float")||W.has("WEBGL_color_buffer_float"))||me))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z.checkFramebufferStatus(36160)===36053?q>=0&&q<=b.width-j&&O>=0&&O<=b.height-te&&Z.readPixels(q,O,j,te,xt.convert(xe),xt.convert(Le),_e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Te=w!==null?T.get(w).__webglFramebuffer:null;ee.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(b,q,O=0){const j=Math.pow(2,-O),te=Math.floor(q.image.width*j),_e=Math.floor(q.image.height*j),fe=xt.convert(q.format);I.setTexture2D(q,0),Z.copyTexImage2D(3553,O,fe,b.x,b.y,te,_e,0),ee.unbindTexture()},this.copyTextureToTexture=function(b,q,O,j=0){const te=q.image.width,_e=q.image.height,fe=xt.convert(O.format),Me=xt.convert(O.type);I.setTexture2D(O,0),Z.pixelStorei(37440,O.flipY),Z.pixelStorei(37441,O.premultiplyAlpha),Z.pixelStorei(3317,O.unpackAlignment),q.isDataTexture?Z.texSubImage2D(3553,j,b.x,b.y,te,_e,fe,Me,q.image.data):q.isCompressedTexture?Z.compressedTexSubImage2D(3553,j,b.x,b.y,q.mipmaps[0].width,q.mipmaps[0].height,fe,q.mipmaps[0].data):Z.texSubImage2D(3553,j,b.x,b.y,fe,Me,q.image),j===0&&O.generateMipmaps&&Z.generateMipmap(3553),ee.unbindTexture()},this.copyTextureToTexture3D=function(b,q,O,j,te=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const{width:_e,height:fe,data:Me}=O.image,Te=xt.convert(j.format),xe=xt.convert(j.type);let Le;if(j.isDataTexture3D)I.setTexture3D(j,0),Le=32879;else{if(!j.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");I.setTexture2DArray(j,0),Le=35866}Z.pixelStorei(37440,j.flipY),Z.pixelStorei(37441,j.premultiplyAlpha),Z.pixelStorei(3317,j.unpackAlignment);const me=Z.getParameter(3314),Fe=Z.getParameter(32878),jt=Z.getParameter(3316),Ge=Z.getParameter(3315),Tn=Z.getParameter(32877);Z.pixelStorei(3314,_e),Z.pixelStorei(32878,fe),Z.pixelStorei(3316,b.min.x),Z.pixelStorei(3315,b.min.y),Z.pixelStorei(32877,b.min.z),Z.texSubImage3D(Le,te,q.x,q.y,q.z,b.max.x-b.min.x+1,b.max.y-b.min.y+1,b.max.z-b.min.z+1,Te,xe,Me),Z.pixelStorei(3314,me),Z.pixelStorei(32878,Fe),Z.pixelStorei(3316,jt),Z.pixelStorei(3315,Ge),Z.pixelStorei(32877,Tn),te===0&&j.generateMipmaps&&Z.generateMipmap(Le),ee.unbindTexture()},this.initTexture=function(b){I.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){x=0,_=0,w=null,ee.reset(),it.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}v(Ie,"Rr"),class extends Ie{}.prototype.isWebGL1Renderer=!0;class sr{constructor(e,t=25e-5){this.name="",this.color=new le(e),this.density=t}clone(){return new sr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}v(sr,"Pr"),sr.prototype.isFogExp2=!0;class ar{constructor(e,t=1,n=1e3){this.name="",this.color=new le(e),this.near=t,this.far=n}clone(){return new ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}v(ar,"Ir"),ar.prototype.isFog=!0;class or extends Se{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}v(or,"Dr"),or.prototype.isScene=!0;class fn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new fn(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}v(fn,"Nr"),fn.prototype.isInterleavedBuffer=!0;const We=new y;class kn{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ve(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}v(kn,"Or"),kn.prototype.isInterleavedBufferAttribute=!0;class ws extends qe{constructor(e){super(),this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}v(ws,"Fr");let Wn;ws.prototype.isSpriteMaterial=!0;const pi=new y,jn=new y,qn=new y,Xn=new Y,mi=new Y,io=new ue,lr=new y,fi=new y,hr=new y,ro=new Y,Ms=new Y,so=new Y;function cr(r,e,t,n,i,s){Xn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(mi.x=s*Xn.x-i*Xn.y,mi.y=i*Xn.x+s*Xn.y):mi.copy(Xn),r.copy(e),r.x+=mi.x,r.y+=mi.y,r.applyMatrix4(io)}v(cr,"Qr"),class extends Se{constructor(r){if(super(),this.type="Sprite",Wn===void 0){Wn=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),t=new fn(e,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new kn(t,3,0,!1)),Wn.setAttribute("uv",new kn(t,2,3,!1))}this.geometry=Wn,this.material=r!==void 0?r:new ws,this.center=new Y(.5,.5)}raycast(r,e){r.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),io.copy(r.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(r.camera.matrixWorldInverse,this.matrixWorld),qn.setFromMatrixPosition(this.modelViewMatrix),r.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-qn.z);const t=this.material.rotation;let n,i;t!==0&&(i=Math.cos(t),n=Math.sin(t));const s=this.center;cr(lr.set(-.5,-.5,0),qn,s,jn,n,i),cr(fi.set(.5,-.5,0),qn,s,jn,n,i),cr(hr.set(.5,.5,0),qn,s,jn,n,i),ro.set(0,0),Ms.set(1,0),so.set(1,1);let a=r.ray.intersectTriangle(lr,fi,hr,!1,pi);if(a===null&&(cr(fi.set(-.5,.5,0),qn,s,jn,n,i),Ms.set(0,1),a=r.ray.intersectTriangle(lr,hr,fi,!1,pi),a===null))return;const o=r.ray.origin.distanceTo(pi);o<r.near||o>r.far||e.push({distance:o,point:pi.clone(),uv:ke.getUV(pi,lr,fi,hr,ro,Ms,so,new Y),face:null,object:this})}copy(r){return super.copy(r),r.center!==void 0&&this.center.copy(r.center),this.material=r.material,this}}.prototype.isSprite=!0;const ao=new y,oo=new Re,lo=new Re,dc=new y,ho=new ue;class Ss extends Xe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Re,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;oo.fromBufferAttribute(i.attributes.skinIndex,e),lo.fromBufferAttribute(i.attributes.skinWeight,e),ao.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=lo.getComponent(s);if(a!==0){const o=oo.getComponent(s);ho.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(dc.copy(ao).applyMatrix4(ho),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}v(Ss,"is"),Ss.prototype.isSkinnedMesh=!0,class extends Se{constructor(){super(),this.type="Bone"}}.prototype.isBone=!0;const co=new ue,uo=new ue,ur=[],gi=new Xe;class vi extends Xe{constructor(e,t,n){super(e,t),this.instanceMatrix=new Ve(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(gi.geometry=this.geometry,gi.material=this.material,gi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,co),uo.multiplyMatrices(n,co),gi.matrixWorld=uo,gi.raycast(e,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=s,l.object=this,t.push(l)}ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ve(new Float32Array(3*this.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}v(vi,"ls"),vi.prototype.isInstancedMesh=!0;class $t extends qe{constructor(e){super(),this.type="LineBasicMaterial",this.color=new le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}v($t,"hs"),$t.prototype.isLineBasicMaterial=!0;const po=new y,mo=new y,fo=new ue,Es=new ln,dr=new wn;class pr extends Se{constructor(e=new be,t=new $t){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)po.fromBufferAttribute(t,i-1),mo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=po.distanceTo(mo);e.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;fo.copy(i).invert(),Es.copy(e.ray).applyMatrix4(fo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new y,c=new y,d=new y,u=new y,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,g=n.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;m<x;m+=p){const _=f.getX(m),w=f.getX(m+1);if(h.fromBufferAttribute(g,_),c.fromBufferAttribute(g,w),Es.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(u);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count)-1;m<x;m+=p){if(h.fromBufferAttribute(g,m),c.fromBufferAttribute(g,m+1),Es.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}v(pr,"fs"),pr.prototype.isLine=!0;const go=new y,vo=new y;class Yn extends pr{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)go.fromBufferAttribute(t,i),vo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+go.distanceTo(vo);e.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}v(Yn,"xs"),Yn.prototype.isLineSegments=!0,class extends pr{constructor(r,e){super(r,e),this.type="LineLoop"}}.prototype.isLineLoop=!0;class gn extends qe{constructor(e){super(),this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}v(gn,"ys"),gn.prototype.isPointsMaterial=!0;const xo=new ue,Ts=new ln,mr=new wn,fr=new y;class Zn extends Se{constructor(e=new be,t=new gn){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;xo.copy(i).invert(),Ts.copy(e.ray).applyMatrix4(xo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const h=n.index,c=n.attributes.position;if(h!==null)for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++){const p=h.getX(d);fr.fromBufferAttribute(c,p),yo(fr,p,l,i,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++)fr.fromBufferAttribute(c,d),yo(fr,d,l,i,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}v(Zn,"Ss");function yo(r,e,t,n,i,s,a){const o=Ts.distanceSqToPoint(r);if(o<t){const l=new y;Ts.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}v(yo,"Es"),Zn.prototype.isPoints=!0,class extends Ke{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.format=a!==void 0?a:1022,this.minFilter=s!==void 0?s:1006,this.magFilter=i!==void 0?i:1006,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(v(function c(){h.needsUpdate=!0,r.requestVideoFrameCallback(c)},"e"))}clone(){return new this.constructor(this.image).copy(this)}update(){const r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}.prototype.isVideoTexture=!0,class extends Ke{constructor(r,e,t,n,i,s,a,o,l,h,c,d){super(null,s,a,o,l,h,n,i,c,d),this.image={width:e,height:t},this.mipmaps=r,this.flipY=!1,this.generateMipmaps=!1}}.prototype.isCompressedTexture=!0,class extends Ke{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.needsUpdate=!0}}.prototype.isCanvasTexture=!0,class extends Ke{constructor(r,e,t,n,i,s,a,o,l,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&h===1026&&(t=1012),t===void 0&&h===1027&&(t=1020),super(null,n,i,s,a,o,h,t,l),this.image={width:r,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1}}.prototype.isDepthTexture=!0;class Ls extends be{constructor(e=1,t=8,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],h=new y,c=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*i;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}}v(Ls,"Ts");class As extends be{constructor(e=1,t=1,n=1,i=8,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const c=[],d=[],u=[],p=[];let f=0;const g=[],m=n/2;let x=0;function _(w){const M=f,A=new Y,E=new y;let S=0;const R=w===!0?e:t,F=w===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*F,0),u.push(0,F,0),p.push(.5,.5),f++;const P=f;for(let D=0;D<=i;D++){const z=D/i*l+o,N=Math.cos(z),H=Math.sin(z);E.x=R*H,E.y=m*F,E.z=R*N,d.push(E.x,E.y,E.z),u.push(0,F,0),A.x=.5*N+.5,A.y=.5*H*F+.5,p.push(A.x,A.y),f++}for(let D=0;D<i;D++){const z=M+D,N=P+D;w===!0?c.push(N,N+1,z):c.push(N+1,N,z),S+=3}h.addGroup(x,S,w===!0?1:2),x+=S}v(_,"v"),function(){const w=new y,M=new y;let A=0;const E=(t-e)/n;for(let S=0;S<=s;S++){const R=[],F=S/s,P=F*(t-e)+e;for(let D=0;D<=i;D++){const z=D/i,N=z*l+o,H=Math.sin(N),V=Math.cos(N);M.x=P*H,M.y=-F*n+m,M.z=P*V,d.push(M.x,M.y,M.z),w.set(H,E,V).normalize(),u.push(w.x,w.y,w.z),p.push(z,1-F),R.push(f++)}g.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){const F=g[R][S],P=g[R+1][S],D=g[R+1][S+1],z=g[R][S+1];c.push(F,P,z),c.push(P,D,z),A+=6}h.addGroup(x,A,0),x+=A}(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(p,2))}}v(As,"Ls"),new y,new y,new y,new ke;function _o(r,e,t,n,i){let s,a;if(i===function(o,l,h,c){let d=0;for(let u=l,p=h-c;u<h;u+=c)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Mo(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Mo(s,r[s],r[s+1],a);return a&&gr(a,a.next)&&(_i(a),a=a.next),a}v(_o,"As");function vn(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!gr(n,n.next)&&He(n.prev,n,n.next)!==0)n=n.next;else{if(_i(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}v(vn,"Cs");function xi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(c,d,u,p){let f=c;do f.z===null&&(f.z=Cs(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(g){let m,x,_,w,M,A,E,S,R=1;do{for(x=g,g=null,M=null,A=0;x;){for(A++,_=x,E=0,m=0;m<R&&(E++,_=_.nextZ,_);m++);for(S=R;E>0||S>0&&_;)E!==0&&(S===0||!_||x.z<=_.z)?(w=x,x=x.nextZ,E--):(w=_,_=_.nextZ,S--),M?M.nextZ=w:g=w,w.prevZ=M,M=w;x=_}M.nextZ=null,R*=2}while(A>1)}(f)}(r,n,i,s);let o,l,h=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?mc(r,n,i,s):pc(r))e.push(o.i/t),e.push(r.i/t),e.push(l.i/t),_i(r),r=l.next,h=l.next;else if((r=l)===h){a?a===1?xi(r=fc(vn(r),e,t),e,t,n,i,s,2):a===2&&gc(r,e,t,n,i,s):xi(vn(r),e,t,n,i,s,1);break}}v(xi,"Rs");function pc(r){const e=r.prev,t=r,n=r.next;if(He(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Jn(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&He(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}v(pc,"Ps");function mc(r,e,t,n){const i=r.prev,s=r,a=r.next;if(He(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,h=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,c=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,d=Cs(o,l,e,t,n),u=Cs(h,c,e,t,n);let p=r.prevZ,f=r.nextZ;for(;p&&p.z>=d&&f&&f.z<=u;){if(p!==r.prev&&p!==r.next&&Jn(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&He(p.prev,p,p.next)>=0||(p=p.prevZ,f!==r.prev&&f!==r.next&&Jn(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&He(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=d;){if(p!==r.prev&&p!==r.next&&Jn(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=u;){if(f!==r.prev&&f!==r.next&&Jn(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&He(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}v(mc,"Is");function fc(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!gr(i,s)&&bo(i,n,n.next,s)&&yi(i,s)&&yi(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),_i(n),_i(n.next),n=r=s),n=n.next}while(n!==r);return vn(n)}v(fc,"Ds");function gc(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bc(a,o)){let l=wo(a,o);return a=vn(a,a.next),l=vn(l,l.next),xi(a,e,t,n,i,s),void xi(l,e,t,n,i,s)}o=o.next}a=a.next}while(a!==r)}v(gc,"Ns");function vc(r,e){return r.x-e.x}v(vc,"zs");function xc(r,e){if(e=function(t,n){let i=n;const s=t.x,a=t.y;let o,l=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){const f=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(f<=s&&f>l){if(l=f,f===s){if(a===i.y)return i;if(a===i.next.y)return i.next}o=i.x<i.next.x?i:i.next}}i=i.next}while(i!==n);if(!o)return null;if(s===l)return o;const h=o,c=o.x,d=o.y;let u,p=1/0;i=o;do s>=i.x&&i.x>=c&&s!==i.x&&Jn(a<d?s:l,a,c,d,a<d?l:s,a,i.x,i.y)&&(u=Math.abs(a-i.y)/(s-i.x),yi(i,t)&&(u<p||u===p&&(i.x>o.x||i.x===o.x&&yc(o,i)))&&(o=i,p=u)),i=i.next;while(i!==h);return o}(r,e)){const t=wo(e,r);vn(e,e.next),vn(t,t.next)}}v(xc,"Os");function yc(r,e){return He(r.prev,r,e.prev)<0&&He(e.next,r,r.next)<0}v(yc,"Fs");function Cs(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*i)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}v(Cs,"Bs");function _c(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}v(_c,"Hs");function Jn(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}v(Jn,"Us");function bc(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&bo(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(yi(r,e)&&yi(e,r)&&function(t,n){let i=t,s=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(He(r.prev,r,e.prev)||He(r,e.prev,e))||gr(r,e)&&He(r.prev,r,r.next)>0&&He(e.prev,e,e.next)>0)}v(bc,"Gs");function He(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}v(He,"Vs");function gr(r,e){return r.x===e.x&&r.y===e.y}v(gr,"ks");function bo(r,e,t,n){const i=xr(He(r,e,t)),s=xr(He(r,e,n)),a=xr(He(t,n,r)),o=xr(He(t,n,e));return i!==s&&a!==o||!(i!==0||!vr(r,t,e))||!(s!==0||!vr(r,n,e))||!(a!==0||!vr(t,r,n))||!(o!==0||!vr(t,e,n))}v(bo,"Ws");function vr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}v(vr,"js");function xr(r){return r>0?1:r<0?-1:0}v(xr,"qs");function yi(r,e){return He(r.prev,r,r.next)<0?He(r,e,r.next)>=0&&He(r,r.prev,e)>=0:He(r,e,r.prev)<0||He(r,r.next,e)<0}v(yi,"Xs");function wo(r,e){const t=new Rs(r.i,r.x,r.y),n=new Rs(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}v(wo,"Ys");function Mo(r,e,t,n){const i=new Rs(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}v(Mo,"Zs");function _i(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}v(_i,"Js");function Rs(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}v(Rs,"Qs");class Kt{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return Kt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];So(e),Eo(n,e);let a=e.length;t.forEach(So);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Eo(n,t[l]);const o=function(l,h,c){c=c||2;const d=h&&h.length,u=d?h[0]*c:l.length;let p=_o(l,0,u,c,!0);const f=[];if(!p||p.next===p.prev)return f;let g,m,x,_,w,M,A;if(d&&(p=function(E,S,R,F){const P=[];let D,z,N,H,V;for(D=0,z=S.length;D<z;D++)N=S[D]*F,H=D<z-1?S[D+1]*F:E.length,V=_o(E,N,H,F,!1),V===V.next&&(V.steiner=!0),P.push(_c(V));for(P.sort(vc),D=0;D<P.length;D++)xc(P[D],R),R=vn(R,R.next);return R}(l,h,p,c)),l.length>80*c){g=x=l[0],m=_=l[1];for(let E=c;E<u;E+=c)w=l[E],M=l[E+1],w<g&&(g=w),M<m&&(m=M),w>x&&(x=w),M>_&&(_=M);A=Math.max(x-g,_-m),A=A!==0?1/A:0}return xi(p,f,c,g,m,A),f}(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}v(Kt,"Ks");function So(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}v(So,"$s");function Eo(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}v(Eo,"ta");class bi extends be{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:100,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:6,f=t.bevelSize!==void 0?t.bevelSize:p-2,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:wc;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let w,M,A,E,S,R=!1;x&&(w=x.getSpacedPoints(c),R=!0,u=!1,M=x.computeFrenetFrames(c,!1),A=new y,E=new y,S=new y),u||(m=0,p=0,f=0,g=0);const F=o.extractPoints(h);let P=F.shape;const D=F.holes;if(!Kt.isClockWise(P)){P=P.reverse();for(let I=0,B=D.length;I<B;I++){const k=D[I];Kt.isClockWise(k)&&(D[I]=k.reverse())}}const z=Kt.triangulateShape(P,D),N=P;for(let I=0,B=D.length;I<B;I++){const k=D[I];P=P.concat(k)}function H(I,B,k){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().multiplyScalar(k).add(I)}v(H,"L");const V=P.length,$=z.length;function re(I,B,k){let G,U,se;const ae=I.x-B.x,oe=I.y-B.y,ce=k.x-I.x,pe=k.y-I.y,Ue=ae*ae+oe*oe,kt=ae*pe-oe*ce;if(Math.abs(kt)>Number.EPSILON){const Wt=Math.sqrt(Ue),Ni=Math.sqrt(ce*ce+pe*pe),zi=B.x-oe/Wt,xt=B.y+ae/Wt,it=((k.x-pe/Ni-zi)*pe-(k.y+ce/Ni-xt)*ce)/(ae*pe-oe*ce);G=zi+ae*it-I.x,U=xt+oe*it-I.y;const Z=G*G+U*U;if(Z<=2)return new Y(G,U);se=Math.sqrt(Z/2)}else{let Wt=!1;ae>Number.EPSILON?ce>Number.EPSILON&&(Wt=!0):ae<-Number.EPSILON?ce<-Number.EPSILON&&(Wt=!0):Math.sign(oe)===Math.sign(pe)&&(Wt=!0),Wt?(G=-oe,U=ae,se=Math.sqrt(Ue)):(G=ae,U=oe,se=Math.sqrt(Ue/2))}return new Y(G/se,U/se)}v(re,"R");const J=[];for(let I=0,B=N.length,k=B-1,G=I+1;I<B;I++,k++,G++)k===B&&(k=0),G===B&&(G=0),J[I]=re(N[I],N[k],N[G]);const K=[];let ne,L=J.concat();for(let I=0,B=D.length;I<B;I++){const k=D[I];ne=[];for(let G=0,U=k.length,se=U-1,ae=G+1;G<U;G++,se++,ae++)se===U&&(se=0),ae===U&&(ae=0),ne[G]=re(k[G],k[se],k[ae]);K.push(ne),L=L.concat(ne)}for(let I=0;I<m;I++){const B=I/m,k=p*Math.cos(B*Math.PI/2),G=f*Math.sin(B*Math.PI/2)+g;for(let U=0,se=N.length;U<se;U++){const ae=H(N[U],J[U],G);W(ae.x,ae.y,-k)}for(let U=0,se=D.length;U<se;U++){const ae=D[U];ne=K[U];for(let oe=0,ce=ae.length;oe<ce;oe++){const pe=H(ae[oe],ne[oe],G);W(pe.x,pe.y,-k)}}}const C=f+g;for(let I=0;I<V;I++){const B=u?H(P[I],L[I],C):P[I];R?(E.copy(M.normals[0]).multiplyScalar(B.x),A.copy(M.binormals[0]).multiplyScalar(B.y),S.copy(w[0]).add(E).add(A),W(S.x,S.y,S.z)):W(B.x,B.y,0)}for(let I=1;I<=c;I++)for(let B=0;B<V;B++){const k=u?H(P[B],L[B],C):P[B];R?(E.copy(M.normals[I]).multiplyScalar(k.x),A.copy(M.binormals[I]).multiplyScalar(k.y),S.copy(w[I]).add(E).add(A),W(S.x,S.y,S.z)):W(k.x,k.y,d/c*I)}for(let I=m-1;I>=0;I--){const B=I/m,k=p*Math.cos(B*Math.PI/2),G=f*Math.sin(B*Math.PI/2)+g;for(let U=0,se=N.length;U<se;U++){const ae=H(N[U],J[U],G);W(ae.x,ae.y,d+k)}for(let U=0,se=D.length;U<se;U++){const ae=D[U];ne=K[U];for(let oe=0,ce=ae.length;oe<ce;oe++){const pe=H(ae[oe],ne[oe],G);R?W(pe.x,pe.y+w[c-1].y,w[c-1].x+k):W(pe.x,pe.y,d+k)}}}function Q(I,B){let k=I.length;for(;--k>=0;){const G=k;let U=k-1;U<0&&(U=I.length-1);for(let se=0,ae=c+2*m;se<ae;se++){const oe=V*se,ce=V*(se+1);ee(B+G+oe,B+U+oe,B+U+ce,B+G+ce)}}}v(Q,"F");function W(I,B,k){l.push(I),l.push(B),l.push(k)}v(W,"B");function X(I,B,k){he(I),he(B),he(k);const G=i.length/3,U=_.generateTopUV(n,i,G-3,G-2,G-1);T(U[0]),T(U[1]),T(U[2])}v(X,"H");function ee(I,B,k,G){he(I),he(B),he(G),he(B),he(k),he(G);const U=i.length/3,se=_.generateSideWallUV(n,i,U-6,U-3,U-2,U-1);T(se[0]),T(se[1]),T(se[3]),T(se[1]),T(se[2]),T(se[3])}v(ee,"U");function he(I){i.push(l[3*I+0]),i.push(l[3*I+1]),i.push(l[3*I+2])}v(he,"G");function T(I){s.push(I.x),s.push(I.y)}v(T,"V"),function(){const I=i.length/3;if(u){let B=0,k=V*B;for(let G=0;G<$;G++){const U=z[G];X(U[2]+k,U[1]+k,U[0]+k)}B=c+2*m,k=V*B;for(let G=0;G<$;G++){const U=z[G];X(U[0]+k,U[1]+k,U[2]+k)}}else{for(let B=0;B<$;B++){const k=z[B];X(k[2],k[1],k[0])}for(let B=0;B<$;B++){const k=z[B];X(k[0]+V*c,k[1]+V*c,k[2]+V*c)}}n.addGroup(I,i.length/3-I,0)}(),function(){const I=i.length/3;let B=0;Q(N,B),B+=N.length;for(let k=0,G=D.length;k<G;k++){const U=D[k];Q(U,B),B+=U.length}n.addGroup(I,i.length/3-I,1)}()}v(a,"s"),this.setAttribute("position",new ve(i,3)),this.setAttribute("uv",new ve(s,2)),this.computeVertexNormals()}toJSON(){const e=be.prototype.toJSON.call(this);return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){const o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}}v(bi,"ea");const wc={generateTopUV:function(r,e,t,n,i){const s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],h=e[3*i],c=e[3*i+1];return[new Y(s,a),new Y(o,l),new Y(h,c)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*n],c=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],x=e[3*s+2];return Math.abs(o-c)<.01?[new Y(a,1-l),new Y(h,1-d),new Y(u,1-f),new Y(g,1-x)]:[new Y(o,1-l),new Y(c,1-d),new Y(p,1-f),new Y(m,1-x)]}};class To extends be{constructor(e=.5,t=1,n=8,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);const o=[],l=[],h=[],c=[];let d=e;const u=(t-e)/(i=Math.max(1,i)),p=new y,f=new Y;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const x=s+m/n*a;p.x=d*Math.cos(x),p.y=d*Math.sin(x),l.push(p.x,p.y,p.z),h.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,c.push(f.x,f.y)}d+=u}for(let g=0;g<i;g++){const m=g*(n+1);for(let x=0;x<n;x++){const _=x+m,w=_,M=_+n+1,A=_+n+2,E=_+1;o.push(w,M,E),o.push(M,A,E)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(c,2))}}v(To,"ia");class Lo extends be{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){const d=i.length/3,u=c.extractPoints(t);let p=u.shape;const f=u.holes;Kt.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=f.length;m<x;m++){const _=f[m];Kt.isClockWise(_)===!0&&(f[m]=_.reverse())}const g=Kt.triangulateShape(p,f);for(let m=0,x=f.length;m<x;m++){const _=f[m];p=p.concat(_)}for(let m=0,x=p.length;m<x;m++){const _=p[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,x=g.length;m<x;m++){const _=g[m],w=_[0]+d,M=_[1]+d,A=_[2]+d;n.push(w,M,A),l+=3}}v(h,"l"),this.setIndex(n),this.setAttribute("position",new ve(i,3)),this.setAttribute("normal",new ve(s,3)),this.setAttribute("uv",new ve(a,2))}toJSON(){const e=be.prototype.toJSON.call(this);return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}}v(Lo,"ra");class Ps extends be{constructor(e=1,t=8,n=6,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const c=[],d=new y,u=new y,p=[],f=[],g=[],m=[];for(let x=0;x<=n;x++){const _=[],w=x/n;let M=0;x==0&&a==0?M=.5/t:x==n&&l==Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;d.x=-e*Math.cos(i+E*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(i+E*s)*Math.sin(a+w*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(E+M,1-w),_.push(h++)}c.push(_)}for(let x=0;x<n;x++)for(let _=0;_<t;_++){const w=c[x][_+1],M=c[x][_],A=c[x+1][_],E=c[x+1][_+1];(x!==0||a>0)&&p.push(w,M,E),(x!==n-1||l<Math.PI)&&p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(m,2))}}v(Ps,"sa");class Is extends be{constructor(e,t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new y,l=new y,h=new Y;let c=new y;const d=[],u=[],p=[],f=[];function g(m){c=e.getPointAt(m/t,c);const x=a.normals[m],_=a.binormals[m];for(let w=0;w<=i;w++){const M=w/i*Math.PI*2,A=Math.sin(M),E=-Math.cos(M);l.x=E*x.x+A*_.x,l.y=E*x.y+A*_.y,l.z=E*x.z+A*_.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+n*l.x,o.y=c.y+n*l.y,o.z=c.z+n*l.z,d.push(o.x,o.y,o.z)}}v(g,"m"),function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let x=0;x<=i;x++)h.x=m/t,h.y=x/i,p.push(h.x,h.y)}(),function(){for(let m=1;m<=t;m++)for(let x=1;x<=i;x++){const _=(i+1)*(m-1)+(x-1),w=(i+1)*m+(x-1),M=(i+1)*m+x,A=(i+1)*(m-1)+x;f.push(_,w,A),f.push(w,M,A)}}()}(),this.setIndex(f),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(p,2))}toJSON(){const e=be.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}v(Is,"aa"),class extends qe{constructor(r){super(),this.type="ShadowMaterial",this.color=new le(0),this.transparent=!0,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this}}.prototype.isShadowMaterial=!0,class extends Qt{constructor(r){super(r),this.type="RawShaderMaterial"}}.prototype.isRawShaderMaterial=!0;class wi extends qe{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}v(wi,"oa"),wi.prototype.isMeshStandardMaterial=!0,class extends wi{constructor(r){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=_t(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(r)}copy(r){return super.copy(r),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=r.clearcoat,this.clearcoatMap=r.clearcoatMap,this.clearcoatRoughness=r.clearcoatRoughness,this.clearcoatRoughnessMap=r.clearcoatRoughnessMap,this.clearcoatNormalMap=r.clearcoatNormalMap,this.clearcoatNormalScale.copy(r.clearcoatNormalScale),this.reflectivity=r.reflectivity,r.sheen?this.sheen=(this.sheen||new le).copy(r.sheen):this.sheen=null,this.transmission=r.transmission,this.transmissionMap=r.transmissionMap,this}}.prototype.isMeshPhysicalMaterial=!0;class Ds extends qe{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}v(Ds,"la"),Ds.prototype.isMeshPhongMaterial=!0,class extends qe{constructor(r){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.gradientMap=r.gradientMap,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.skinning=r.skinning,this.morphTargets=r.morphTargets,this.morphNormals=r.morphNormals,this}}.prototype.isMeshToonMaterial=!0,class extends qe{constructor(r){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.skinning=r.skinning,this.morphTargets=r.morphTargets,this.morphNormals=r.morphNormals,this.flatShading=r.flatShading,this}}.prototype.isMeshNormalMaterial=!0,class extends qe{constructor(r){super(),this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(r)}copy(r){return super.copy(r),this.color.copy(r.color),this.map=r.map,this.lightMap=r.lightMap,this.lightMapIntensity=r.lightMapIntensity,this.aoMap=r.aoMap,this.aoMapIntensity=r.aoMapIntensity,this.emissive.copy(r.emissive),this.emissiveMap=r.emissiveMap,this.emissiveIntensity=r.emissiveIntensity,this.specularMap=r.specularMap,this.alphaMap=r.alphaMap,this.envMap=r.envMap,this.combine=r.combine,this.reflectivity=r.reflectivity,this.refractionRatio=r.refractionRatio,this.wireframe=r.wireframe,this.wireframeLinewidth=r.wireframeLinewidth,this.wireframeLinecap=r.wireframeLinecap,this.wireframeLinejoin=r.wireframeLinejoin,this.skinning=r.skinning,this.morphTargets=r.morphTargets,this.morphNormals=r.morphNormals,this}}.prototype.isMeshLambertMaterial=!0,class extends qe{constructor(r){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(r)}copy(r){return super.copy(r),this.defines={MATCAP:""},this.color.copy(r.color),this.matcap=r.matcap,this.map=r.map,this.bumpMap=r.bumpMap,this.bumpScale=r.bumpScale,this.normalMap=r.normalMap,this.normalMapType=r.normalMapType,this.normalScale.copy(r.normalScale),this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this.alphaMap=r.alphaMap,this.skinning=r.skinning,this.morphTargets=r.morphTargets,this.morphNormals=r.morphNormals,this.flatShading=r.flatShading,this}}.prototype.isMeshMatcapMaterial=!0,class extends $t{constructor(r){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(r)}copy(r){return super.copy(r),this.scale=r.scale,this.dashSize=r.dashSize,this.gapSize=r.gapSize,this}}.prototype.isLineDashedMaterial=!0;const Be={arraySlice:function(r,e,t){return Be.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){const e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const h=s.tracks[l],c=h.getValueSize(),d=[],u=[];for(let p=0;p<h.times.length;++p){const f=h.times[p]*i;if(!(f<t||f>=n)){d.push(h.times[p]);for(let g=0;g<c;++g)u.push(h.values[p*c+g])}}d.length!==0&&(h.times=Be.convertArray(d,h.times.constructor),h.values=Be.convertArray(u,h.values.constructor),a.push(h))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const h=r.tracks.find(function(x){return x.name===o.name&&x.ValueTypeName===l});if(h===void 0)continue;let c=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=d/3);let u=0;const p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const f=o.times.length-1;let g;if(s<=o.times[0]){const x=c,_=d-c;g=Be.arraySlice(o.values,x,_)}else if(s>=o.times[f]){const x=f*d+c,_=x+d-c;g=Be.arraySlice(o.values,x,_)}else{const x=o.createInterpolant(),_=c,w=d-c;x.evaluate(s),g=Be.arraySlice(x.resultBuffer,_,w)}l==="quaternion"&&new at().fromArray(g).normalize().conjugate().toArray(g);const m=h.times.length;for(let x=0;x<m;++x){const _=x*p+u;if(l==="quaternion")at.multiplyQuaternionsFlat(h.values,_,g,0,h.values,_);else{const w=p-2*u;for(let M=0;M<w;++M)h.values[_+M]-=g[M]}}}return r.blendMode=2501,r}};class en{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}v(en,"ca"),en.prototype.beforeStart_=en.prototype.copySampleValue_,en.prototype.afterEnd_=en.prototype.copySampleValue_;class Ao extends en{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=.5*(n-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,x=-u*m+2*u*g-u*f,_=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,w=(-1-p)*m+(1.5+p)*g+.5*f,M=p*m-p*g;for(let A=0;A!==o;++A)s[A]=x*a[c+A]+_*a[h+A]+w*a[l+A]+M*a[d+A];return s}}v(Ao,"ua");class Ns extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(n-t)/(i-t),d=1-c;for(let u=0;u!==o;++u)s[u]=a[h+u]*d+a[l+u]*c;return s}}v(Ns,"da");class Co extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}v(Co,"pa");class Nt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Be.convertArray(t,this.TimeBufferType),this.values=Be.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Be.convertArray(e.times,Array),values:Be.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ns(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Be.arraySlice(n,s,a),this.values=Be.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Be.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Be.arraySlice(this.times),t=Be.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(i)l=!0;else{const c=o*n,d=c-n,u=c+n;for(let p=0;p!==n;++p){const f=t[c+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[c+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=Be.arraySlice(e,0,a),this.values=Be.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Be.arraySlice(this.times,0),t=Be.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}v(Nt,"ma"),Nt.prototype.TimeBufferType=Float32Array,Nt.prototype.ValueBufferType=Float32Array,Nt.prototype.DefaultInterpolation=2301;class Mn extends Nt{}v(Mn,"fa"),Mn.prototype.ValueTypeName="bool",Mn.prototype.ValueBufferType=Array,Mn.prototype.DefaultInterpolation=2300,Mn.prototype.InterpolantFactoryMethodLinear=void 0,Mn.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Nt{}v(zs,"ga"),zs.prototype.ValueTypeName="color";class Mi extends Nt{}v(Mi,"va"),Mi.prototype.ValueTypeName="number";class Ro extends en{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let c=h+o;h!==c;h+=4)at.slerpFlat(s,0,a,h-o,a,h,l);return s}}v(Ro,"xa");class Qn extends Nt{InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}}v(Qn,"ya"),Qn.prototype.ValueTypeName="quaternion",Qn.prototype.DefaultInterpolation=2301,Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class Sn extends Nt{}v(Sn,"_a"),Sn.prototype.ValueTypeName="string",Sn.prototype.ValueBufferType=Array,Sn.prototype.DefaultInterpolation=2300,Sn.prototype.InterpolantFactoryMethodLinear=void 0,Sn.prototype.InterpolantFactoryMethodSmooth=void 0;class Si extends Nt{}v(Si,"wa"),Si.prototype.ValueTypeName="vector";class Os{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Mc(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Nt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const c=Be.getKeyframeOrder(l);l=Be.sortedArray(l,1,c),h=Be.sortedArray(h,1,c),i||l[0]!==0||(l.push(s),h.push(h[0])),a.push(new Mi(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(s);if(c&&c.length>1){const d=c[1];let u=i[d];u||(i[d]=u=[]),u.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=v(function(c,d,u,p,f){if(u.length!==0){const g=[],m=[];Be.flattenJSON(u,g,m,p),g.length!==0&&f.push(new c(d,g,m))}},"n"),i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(d&&d.length!==0)if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let f=0;f<d[p].morphTargets.length;f++)u[d[p].morphTargets[f]]=-1;for(const f in u){const g=[],m=[];for(let x=0;x!==d[p].morphTargets.length;++x){const _=d[p];g.push(_.time),m.push(_.morphTarget===f?1:0)}i.push(new Mi(".morphTargetInfluence["+f+"]",g,m))}l=u.length*(a||1)}else{const u=".bones["+t[c].name+"]";n(Si,u+".position",d,"pos",i),n(Qn,u+".quaternion",d,"rot",i),n(Si,u+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}v(Os,"ba");function Mc(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return zs;case"quaternion":return Qn;case"bool":case"boolean":return Mn;case"string":return Sn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){const t=[],n=[];Be.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}v(Mc,"Ma");const $n={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Sc=new class{constructor(r,e,t){const n=this;let i,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=r,this.onProgress=e,this.onError=t,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return i?i(h):h},this.setURLModifier=function(h){return i=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){const c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){const u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null}}};class Vt{constructor(e){this.manager=e!==void 0?e:Sc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}v(Vt,"Ta");const zt={};class Fs extends Vt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$n.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(zt[e]!==void 0)return void zt[e].push({onLoad:t,onProgress:n,onError:i});const o=e.match(/^data:(.*?)(;base64)?,(.*)$/);let l;if(o){const h=o[1],c=!!o[2];let d=o[3];d=decodeURIComponent(d),c&&(d=atob(d));try{let u;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const f=new Uint8Array(d.length);for(let m=0;m<d.length;m++)f[m]=d.charCodeAt(m);u=p==="blob"?new Blob([f.buffer],{type:h}):f.buffer;break;case"document":u=new DOMParser().parseFromString(d,h);break;case"json":u=JSON.parse(d);break;default:u=d}setTimeout(function(){t&&t(u),s.manager.itemEnd(e)},0)}catch(u){setTimeout(function(){i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{zt[e]=[],zt[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(h){const c=this.response,d=zt[e];if(delete zt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),$n.add(e,c);for(let u=0,p=d.length;u<p;u++){const f=d[u];f.onLoad&&f.onLoad(c)}s.manager.itemEnd(e)}else{for(let u=0,p=d.length;u<p;u++){const f=d[u];f.onError&&f.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(h){const c=zt[e];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onProgress&&p.onProgress(h)}},!1),l.addEventListener("error",function(h){const c=zt[e];delete zt[e];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onError&&p.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(h){const c=zt[e];delete zt[e];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onError&&p.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)l.setRequestHeader(h,this.requestHeader[h]);l.send(null)}return s.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}v(Fs,"Aa");class Bs extends Vt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$n.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1),$n.add(e,this),t&&t(this),s.manager.itemEnd(e)}v(l,"o");function h(c){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1),i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}return v(h,"l"),o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}v(Bs,"Ca");class Po extends Vt{constructor(e){super(e)}load(e,t,n,i){const s=new hi,a=new Bs(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(h){a.load(e[h],function(c){s.images[h]=c,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}v(l,"o");for(let h=0;h<e.length;++h)l(h);return s}}v(Po,"Ra");class Hs extends Vt{constructor(e){super(e)}load(e,t,n,i){const s=new Ke,a=new Bs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?1022:1023,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}v(Hs,"Pa");class St{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;a=t||e*n[s-1];let o,l=0,h=s-1;for(;l<=h;)if(i=Math.floor(l+(h-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){h=i;break}h=i-1}if(i=h,n[i]===a)return i/(s-1);const c=n[i];return(i+(a-c)/(n[i+1]-c))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Y:new y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new y,i=[],s=[],a=[],o=new y,l=new ue;for(let p=0;p<=e;p++){const f=p/e;i[p]=this.getTangentAt(f,new y),i[p].normalize()}s[0]=new y,a[0]=new y;let h=Number.MAX_VALUE;const c=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(_t(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(_t(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}v(St,"Ia");class Ei extends St{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Y,i=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=h-this.aY;l=u*c-p*d+this.aX,h=u*d+p*c+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}v(Ei,"Da"),Ei.prototype.isEllipseCurve=!0;class Us extends Ei{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}v(Us,"Na");function Gs(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return v(i,"r"),{initCatmullRom:function(s,a,o,l,h){i(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,i(a,o,u,p)},calc:function(s){const a=s*s;return r+e*s+t*a+n*(a*s)}}}v(Gs,"za"),Us.prototype.isArcCurve=!0;const yr=new y,Vs=new Gs,ks=new Gs,Ws=new Gs;class js extends St{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/s)+1)*s:c===0&&h===s-1&&(h=s-2,c=1),this.closed||h>0?o=i[(h-1)%s]:(yr.subVectors(i[0],i[1]).add(i[0]),o=yr);const d=i[h%s],u=i[(h+1)%s];if(this.closed||h+2<s?l=i[(h+2)%s]:(yr.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(o.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Vs.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,g,m),ks.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,g,m),Ws.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),ks.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),Ws.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(Vs.calc(c),ks.calc(c),Ws.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}v(js,"Ua");function Io(r,e,t,n,i){const s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}v(Io,"Ga");function Ti(r,e,t,n){return function(i,s){const a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}v(Ti,"Va");function Li(r,e,t,n,i){return function(s,a){const o=1-s;return o*o*o*a}(r,e)+function(s,a){const o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}v(Li,"ka"),js.prototype.isCatmullRomCurve3=!0;class _r extends St{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,i.x,s.x,a.x,o.x),Li(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}v(_r,"Wa"),_r.prototype.isCubicBezierCurve=!0;class Ai extends St{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Li(e,i.x,s.x,a.x,o.x),Li(e,i.y,s.y,a.y,o.y),Li(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}v(Ai,"ja"),Ai.prototype.isCubicBezierCurve3=!0;class Ci extends St{constructor(e=new Y,t=new Y){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}v(Ci,"qa"),Ci.prototype.isLineCurve=!0;class br extends St{constructor(e=new Y,t=new Y,n=new Y){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ti(e,i.x,s.x,a.x),Ti(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}v(br,"Xa"),br.prototype.isQuadraticBezierCurve=!0;class qs extends St{constructor(e=new y,t=new y,n=new y){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ti(e,i.x,s.x,a.x),Ti(e,i.y,s.y,a.y),Ti(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}v(qs,"Ya"),qs.prototype.isQuadraticBezierCurve3=!0;class wr extends St{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],h=i[a],c=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Io(o,l.x,h.x,c.x,d.x),Io(o,l.y,h.y,c.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}v(wr,"Za"),wr.prototype.isSplineCurve=!0;var Ec=Object.freeze({__proto__:null,ArcCurve:Us,CatmullRomCurve3:js,CubicBezierCurve:_r,CubicBezierCurve3:Ai,EllipseCurve:Ei,LineCurve:Ci,LineCurve3:class extends St{constructor(r=new y,e=new y){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=r,this.v2=e}getPoint(r,e=new y){const t=e;return r===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(r).add(this.v1)),t}getPointAt(r,e){return this.getPoint(r,e)}copy(r){return super.copy(r),this.v1.copy(r.v1),this.v2.copy(r.v2),this}toJSON(){const r=super.toJSON();return r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this}},QuadraticBezierCurve:br,QuadraticBezierCurve3:qs,SplineCurve:wr});class Do extends St{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ci(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,a=this.curves[i],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ec[i.type]().fromJSON(i))}return this}}v(Do,"Qa");class Mr extends Do{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ci(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new br(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new _r(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const h=new Ei(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}v(Mr,"Ka");class Sr extends Mr{constructor(e){super(e),this.uuid=Ht(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mr().fromJSON(i))}return this}}v(Sr,"$a");class Ot extends Se{constructor(e,t=1){super(),this.type="Light",this.color=new le(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}v(Ot,"to"),Ot.prototype.isLight=!0,class extends Ot{constructor(r,e,t){super(r,t),this.type="HemisphereLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.groundColor=new le(e)}copy(r){return Ot.prototype.copy.call(this,r),this.groundColor.copy(r.groundColor),this}}.prototype.isHemisphereLight=!0;const No=new ue,zo=new y,Oo=new y;class Er{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),Oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oo),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}v(Er,"ro");class Xs extends Er{constructor(){super(new ct(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*Hr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}v(Xs,"so"),Xs.prototype.isSpotLightShadow=!0;class Tr extends Ot{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Xs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}v(Tr,"ao"),Tr.prototype.isSpotLight=!0;const Fo=new ue,Ri=new y,Ys=new y;class Zs extends Er{constructor(){super(new ct(90,1,.5,500)),this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new y(1,0,0),new y(-1,0,0),new y(0,0,1),new y(0,0,-1),new y(0,1,0),new y(0,-1,0)],this._cubeUps=[new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,0,1),new y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),Ys.copy(n.position),Ys.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ys),n.updateMatrixWorld(),i.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo)}}v(Zs,"co"),Zs.prototype.isPointLightShadow=!0,class extends Ot{constructor(r,e,t=0,n=1){super(r,e),this.type="PointLight",this.distance=t,this.decay=n,this.shadow=new Zs}get power(){return 4*this.intensity*Math.PI}set power(r){this.intensity=r/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(r){return super.copy(r),this.distance=r.distance,this.decay=r.decay,this.shadow=r.shadow.clone(),this}}.prototype.isPointLight=!0;class Js extends tr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}v(Js,"uo"),Js.prototype.isOrthographicCamera=!0;class Qs extends Er{constructor(){super(new Js(-5,5,5,-5,.5,500))}}v(Qs,"po"),Qs.prototype.isDirectionalLightShadow=!0;class $s extends Ot{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Se.DefaultUp),this.updateMatrix(),this.target=new Se,this.shadow=new Qs}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}v($s,"mo"),$s.prototype.isDirectionalLight=!0;class Ks extends Ot{constructor(e,t){super(e,t),this.type="AmbientLight"}}v(Ks,"fo"),Ks.prototype.isAmbientLight=!0,class extends Ot{constructor(r,e,t=10,n=10){super(r,e),this.type="RectAreaLight",this.width=t,this.height=n}copy(r){return super.copy(r),this.width=r.width,this.height=r.height,this}toJSON(r){const e=super.toJSON(r);return e.object.width=this.width,e.object.height=this.height,e}}.prototype.isRectAreaLight=!0;class ea{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new y)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],n*s*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}v(ea,"go"),ea.prototype.isSphericalHarmonics3=!0;class Lr extends Ot{constructor(e=new ea,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}v(Lr,"vo"),Lr.prototype.isLightProbe=!0,class extends be{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(r){return super.copy(r),this.instanceCount=r.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const r=super.toJSON(this);return r.instanceCount=this.instanceCount,r.isInstancedBufferGeometry=!0,r}}.prototype.isInstancedBufferGeometry=!0;class ta extends Ve{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}v(ta,"xo"),ta.prototype.isInstancedBufferAttribute=!0,class extends Vt{constructor(r){super(r),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,n){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);const i=this,s=$n.get(r);if(s!==void 0)return i.manager.itemStart(r),setTimeout(function(){e&&e(s),i.manager.itemEnd(r)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){$n.add(r,o),e&&e(o),i.manager.itemEnd(r)}).catch(function(o){n&&n(o),i.manager.itemError(r),i.manager.itemEnd(r)}),i.manager.itemStart(r)}}.prototype.isImageBitmapLoader=!0;let na;class Bo extends Vt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Fs(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);(na===void 0&&(na=new(window.AudioContext||window.webkitAudioContext)),na).decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}v(Bo,"_o"),class extends Lr{constructor(r,e,t=1){super(void 0,t);const n=new le().set(r),i=new le().set(e),s=new y(n.r,n.g,n.b),a=new y(i.r,i.g,i.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}}.prototype.isHemisphereLightProbe=!0,class extends Lr{constructor(r,e=1){super(void 0,e);const t=new le().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}}.prototype.isAmbientLightProbe=!0;class Ho{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}v(Ho,"wo");function Uo(){return(typeof performance=="undefined"?Date:performance).now()}v(Uo,"bo");class Go{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){at.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;at.multiplyQuaternionsFlat(e,a,e,t,e,n),at.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}v(Go,"Mo");const Tc=new RegExp("[\\[\\]\\.:\\/]","g"),ia="[^\\[\\]\\.:\\/]",Lc="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Ac=/((?:WC+[\/:])*)/.source.replace("WC",ia),Cc=/(WCOD+)?/.source.replace("WCOD",Lc),Rc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ia),Pc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ia),Ic=new RegExp("^"+Ac+Cc+Rc+Pc+"$"),Dc=["material","materials","bones"];class Ee{constructor(e,t,n){this.path=t,this.parsedPath=n||Ee.parseTrackName(t),this.node=Ee.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ee.Composite(e,t,n):new Ee(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tc,"")}static parseTrackName(e){const t=Ic.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Dc.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=v(function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},"n"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ee.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}v(Ee,"Do"),Ee.Composite=class{constructor(r,e,t){const n=t||Ee.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray],Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vo{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let h=0;h!==a;++h){const c=s[h].createInterpolant(null);o[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,h=o.sampleValues;return l[0]=s,l[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case 2501:for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulateAdditive(o);break;case 2500:default:for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===2202;if(e===0)return s===-1?i:a&&(1&s)==1?t-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&s)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}v(Vo,"No"),class extends nn{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){const t=r._localRoot||this._root,n=r._clip.tracks,i=n.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName;let h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==i;++c){const d=n[c],u=d.name;let p=h[u];if(p!==void 0)s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}const f=e&&e._propertyBindings[c].binding.parsedPath;p=new Go(Ee.create(t,u,f),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[c]=p}a[c].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){const t=(r._localRoot||this._root).uuid,n=r._clip.uuid,i=this._actionsByClip[n];this._bindAction(r,i&&i.knownActions[0]),this._addInactiveAction(r,n,t)}const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){const e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){const n=this._actions,i=this._actionsByClip;let s=i[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,i[e]=s;else{const a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=n.length,n.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){const e=this._actions,t=e[e.length-1],n=r._cacheIndex;t._cacheIndex=n,e[n]=t,e.pop(),r._cacheIndex=null;const i=r._clip.uuid,s=this._actionsByClip,a=s[i],o=a.knownActions,l=o[o.length-1],h=r._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[i],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){const e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){const i=e[t];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(r){const e=this._actions,t=r._cacheIndex,n=this._nActiveActions++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackAction(r){const e=this._actions,t=r._cacheIndex,n=--this._nActiveActions,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_addInactiveBinding(r,e,t){const n=this._bindingsByRootAndName,i=this._bindings;let s=n[e];s===void 0&&(s={},n[e]=s),s[t]=r,r._cacheIndex=i.length,i.push(r)}_removeInactiveBinding(r){const e=this._bindings,t=r.binding,n=t.rootNode.uuid,i=t.path,s=this._bindingsByRootAndName,a=s[n],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[i],Object.keys(a).length===0&&delete s[n]}_lendBinding(r){const e=this._bindings,t=r._cacheIndex,n=this._nActiveBindings++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackBinding(r){const e=this._bindings,t=r._cacheIndex,n=--this._nActiveBindings,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_lendControlInterpolant(){const r=this._controlInterpolants,e=this._nActiveControlInterpolants++;let t=r[e];return t===void 0&&(t=new Ns(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){const e=this._controlInterpolants,t=r.__cacheIndex,n=--this._nActiveControlInterpolants,i=e[n];r.__cacheIndex=n,e[n]=r,i.__cacheIndex=t,e[t]=i}clipAction(r,e,t){const n=e||this._root,i=n.uuid;let s=typeof r=="string"?Os.findByName(n,r):r;const a=s!==null?s.uuid:r,o=this._actionsByClip[a];let l=null;if(t===void 0&&(t=s!==null?s.blendMode:2500),o!==void 0){const c=o.actionByRoot[i];if(c!==void 0&&c.blendMode===t)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const h=new Vo(this,s,e,t);return this._bindAction(h,l),this._addInactiveAction(h,a,i),h}existingAction(r,e){const t=e||this._root,n=t.uuid,i=typeof r=="string"?Os.findByName(t,r):r,s=i?i.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;const e=this._actions,t=this._nActiveActions,n=this.time+=r,i=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(n,r,i,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){const e=this._actions,t=r.uuid,n=this._actionsByClip,i=n[t];if(i!==void 0){const s=i.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[t]}}uncacheRoot(r){const e=r.uuid,t=this._actionsByClip;for(const i in t){const s=t[i].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[e];if(n!==void 0)for(const i in n){const s=n[i];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){const t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}}.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Ar{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Ar(this.value.clone===void 0?this.value:this.value.clone())}}v(Ar,"zo"),class extends fn{constructor(r,e,t=1){super(r,e),this.meshPerAttribute=t||1}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){const e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){const e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}.prototype.isInstancedInterleavedBuffer=!0;class ra{constructor(e,t,n=0,i=1/0){this.ray=new ln(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return sa(e,this,n,t),n.sort(ko),n}intersectObjects(e,t=!1,n=[]){for(let i=0,s=e.length;i<s;i++)sa(e[i],this,n,t);return n.sort(ko),n}}v(ra,"Oo");function ko(r,e){return r.distance-e.distance}v(ko,"Fo");function sa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)sa(i[s],e,t,!0)}}v(sa,"Bo");const Wo=new Y;class Kn{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new Y),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new Y),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new Y),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new Y),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wo.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}v(Kn,"Uo"),Kn.prototype.isBox2=!0,class extends Se{constructor(r){super(),this.material=r,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}.prototype.isImmediateRenderObject=!0;const xn=new y,Cr=new ue,aa=new ue;function jo(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,jo(r.children[t]));return e}v(jo,"Wo");const Nc=new Float32Array(1);new Int32Array(Nc.buffer),Math.pow(2,8);const qo=[.125,.215,.35,.446,.526,.582],zc=5+qo.length,Oc=new Tt({side:1,depthWrite:!1,depthTest:!1}),{_lodPlanes:Jc,_sizeLods:Qc,_sigmas:$c}=(new Xe(new li,Oc),Fc());function Fc(){const r=[],e=[],t=[];let n=8;for(let i=0;i<zc;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>4?a=qo[i-8+4-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,h=1+o/2,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,f=2,g=1,m=new Float32Array(p*u*d),x=new Float32Array(f*u*d),_=new Float32Array(g*u*d);for(let M=0;M<d;M++){const A=M%3*2/3-1,E=M>2?0:-1,S=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];m.set(S,p*u*M),x.set(c,f*u*M);const R=[M,M,M,M,M,M];_.set(R,g*u*M)}const w=new be;w.setAttribute("position",new Ve(m,p)),w.setAttribute("uv",new Ve(x,f)),w.setAttribute("faceIndex",new Ve(_,g)),r.push(w),n>4&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}v(Fc,"Ko"),Math.sqrt(5),St.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(St.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r},Mr.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)},class extends Yn{constructor(r=10,e=10,t=4473924,n=8947848){t=new le(t),n=new le(n);const i=e/2,s=r/e,a=r/2,o=[],l=[];for(let c=0,d=0,u=-a;c<=e;c++,u+=s){o.push(-a,0,u,a,0,u),o.push(u,0,-a,u,0,a);const p=c===i?t:n;p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3}const h=new be;h.setAttribute("position",new ve(o,3)),h.setAttribute("color",new ve(l,3)),super(h,new $t({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},class extends Yn{constructor(r){const e=jo(r),t=new be,n=[],i=[],s=new le(0,0,1),a=new le(0,1,0);for(let o=0;o<e.length;o++){const l=e[o];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(s.r,s.g,s.b),i.push(a.r,a.g,a.b))}t.setAttribute("position",new ve(n,3)),t.setAttribute("color",new ve(i,3)),super(t,new $t({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){const e=this.bones,t=this.geometry,n=t.getAttribute("position");aa.copy(this.root.matrixWorld).invert();for(let i=0,s=0;i<e.length;i++){const a=e[i];a.parent&&a.parent.isBone&&(Cr.multiplyMatrices(aa,a.matrixWorld),xn.setFromMatrixPosition(Cr),n.setXYZ(s,xn.x,xn.y,xn.z),Cr.multiplyMatrices(aa,a.parent.matrixWorld),xn.setFromMatrixPosition(Cr),n.setXYZ(s+1,xn.x,xn.y,xn.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}}.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Vt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}.extractUrlBase(r)},Vt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Kn.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)},Kn.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Kn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},Kn.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)},bt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)},bt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},bt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},bt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},bt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)},wn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ci.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)},$e.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},$e.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},$e.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},$e.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)},$e.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},$e.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},ue.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)},ue.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)},ue.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new y().setFromMatrixColumn(this,3)},ue.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)},ue.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ue.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ue.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ue.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ue.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)},ue.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ue.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ue.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ue.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ue.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ue.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ue.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)},ue.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ue.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)},ue.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()},Pt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)},at.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)},at.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},ln.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)},ln.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)},ln.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)},ke.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},ke.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)},ke.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)},ke.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)},ke.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)},ke.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ke.getBarycoord(r,e,t,n,i)},ke.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ke.getNormal(r,e,t,n)},Sr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)},Sr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new bi(this,r)},Sr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Lo(this,r)},Y.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},Y.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},y.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},y.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},y.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)},y.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)},y.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)},y.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)},y.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},y.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)},y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Re.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)},Re.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Se.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)},Se.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Se.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)},Se.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Se.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(Se.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Xe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Xe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Ss.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},ct.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)},Object.defineProperties(Ot.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}}),Object.defineProperties(Ve.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),Ve.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this},Ve.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ve.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},be.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)},be.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Ve(arguments[1],arguments[2])))},be.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)},be.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},be.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},be.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)},be.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)},Object.defineProperties(be.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),fn.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this},fn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},bi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},bi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},bi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},or.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Ar.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(qe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new le}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}}),Object.defineProperties(Qt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}}),Ie.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)},Ie.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)},Ie.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ie.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ie.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ie.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ie.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ie.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ie.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ie.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ie.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ie.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ie.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ie.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ie.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)},Ie.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ie.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ie.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ie.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ie.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ie.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ie.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ie.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ie.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ie.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ie.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(to.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(rn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}}),class extends Se{constructor(r){super(),this.type="Audio",this.listener=r,this.context=r.context,this.gain=this.context.createGain(),this.gain.connect(r.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(r){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=r,this.connect(),this}setMediaElementSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(r),this.connect(),this}setMediaStreamSource(r){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(r),this.connect(),this}setBuffer(r){return this.buffer=r,this.sourceType="buffer",this.autoplay&&this.play(),this}play(r=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+r;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].connect(this.filters[r]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let r=1,e=this.filters.length;r<e;r++)this.filters[r-1].disconnect(this.filters[r]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(r){return r||(r=[]),this._connected===!0?(this.disconnect(),this.filters=r.slice(),this.connect()):this.filters=r.slice(),this}setDetune(r){if(this.detune=r,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(r){return this.setFilters(r?[r]:[])}setPlaybackRate(r){if(this.hasPlaybackControl!==!1)return this.playbackRate=r,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(r){if(this.hasPlaybackControl!==!1)return this.loop=r,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(r){return this.loopStart=r,this}setLoopEnd(r){return this.loopEnd=r,this}getVolume(){return this.gain.gain.value}setVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}}.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Bo().load(r,function(t){e.setBuffer(t)}),this},nr.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)},nr.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)},yn.crossOrigin=void 0,yn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Hs;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},yn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Po;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s},yn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},yn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"128"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="128");const Bc=/^[og]\s*(.+)?/,Hc=/^mtllib /,Uc=/^usemtl /,Gc=/^usemap /,Xo=new y,oa=new y,Yo=new y,Zo=new y,Lt=new y;function Vc(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1)return this.object.name=e,void(this.object.fromDeclaration=t!==!1);const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const h={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseNormalIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseUVIndex:function(e,t){const n=parseInt(e,10);return 2*(n>=0?n-1:n+t/2)},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Xo.fromArray(i,e),oa.fromArray(i,t),Yo.fromArray(i,n),Lt.subVectors(Yo,oa),Zo.subVectors(Xo,oa),Lt.cross(Zo),Lt.normalize(),s.push(Lt.x,Lt.y,Lt.z),s.push(Lt.x,Lt.y,Lt.z),s.push(Lt.x,Lt.y,Lt.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,a,o,l,h){const c=this.vertices.length;let d=this.parseVertexIndex(e,c),u=this.parseVertexIndex(t,c),p=this.parseVertexIndex(n,c);if(this.addVertex(d,u,p),this.addColor(d,u,p),o!==void 0&&o!==""){const f=this.normals.length;d=this.parseNormalIndex(o,f),u=this.parseNormalIndex(l,f),p=this.parseNormalIndex(h,f),this.addNormal(d,u,p)}else this.addFaceNormal(d,u,p);if(i!==void 0&&i!==""){const f=this.uvs.length;d=this.parseUVIndex(i,f),u=this.parseUVIndex(s,f),p=this.parseUVIndex(a,f),this.addUV(d,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}v(Vc,"ll");class Jo extends Vt{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,a=new Fs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Vc;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i="",s="",a=0,o=[];const l=typeof"".trimLeft=="function";for(let c=0,d=n.length;c<d;c++)if(i=n[c],i=l?i.trimLeft():i.trim(),a=i.length,a!==0&&(s=i.charAt(0),s!=="#"))if(s==="v"){const u=i.split(/\s+/);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?t.colors.push(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]))}}else if(s==="f"){const u=i.substr(1).trim().split(/\s+/),p=[];for(let g=0,m=u.length;g<m;g++){const x=u[g];if(x.length>0){const _=x.split("/");p.push(_)}}const f=p[0];for(let g=1,m=p.length-1;g<m;g++){const x=p[g],_=p[g+1];t.addFace(f[0],x[0],_[0],f[1],x[1],_[1],f[2],x[2],_[2])}}else if(s==="l"){const u=i.substring(1).trim().split(" ");let p=[];const f=[];if(i.indexOf("/")===-1)p=u;else for(let g=0,m=u.length;g<m;g++){const x=u[g].split("/");x[0]!==""&&p.push(x[0]),x[1]!==""&&f.push(x[1])}t.addLineGeometry(p,f)}else if(s==="p"){const u=i.substr(1).trim().split(" ");t.addPointGeometry(u)}else if((o=Bc.exec(i))!==null){const u=(" "+o[0].substr(1).trim()).substr(1);t.startObject(u)}else if(Uc.test(i))t.object.startMaterial(i.substring(7).trim(),t.materialLibraries);else if(Hc.test(i))t.materialLibraries.push(i.substring(7).trim());else if(Gc.test(i))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(o=i.split(" "),o.length>1){const p=o[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(i==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+i+'"')}t.finalize();const h=new vt;if(h.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let c=0,d=t.objects.length;c<d;c++){const u=t.objects[c],p=u.geometry,f=u.materials,g=p.type==="Line",m=p.type==="Points";let x=!1;if(p.vertices.length===0)continue;const _=new be;_.setAttribute("position",new ve(p.vertices,3)),p.normals.length>0&&_.setAttribute("normal",new ve(p.normals,3)),p.colors.length>0&&(x=!0,_.setAttribute("color",new ve(p.colors,3))),p.hasUVIndices===!0&&_.setAttribute("uv",new ve(p.uvs,2));const w=[];for(let A=0,E=f.length;A<E;A++){const S=f[A],R=S.name+"_"+S.smooth+"_"+x;let F=t.materials[R];if(this.materials!==null)if(F=this.materials.create(S.name),!g||!F||F instanceof $t){if(m&&F&&!(F instanceof gn)){const P=new gn({size:10,sizeAttenuation:!1});qe.prototype.copy.call(P,F),P.color.copy(F.color),P.map=F.map,F=P}}else{const P=new $t;qe.prototype.copy.call(P,F),P.color.copy(F.color),F=P}F===void 0&&(F=g?new $t:m?new gn({size:1,sizeAttenuation:!1}):new Ds,F.name=S.name,F.flatShading=!S.smooth,F.vertexColors=x,t.materials[R]=F),w.push(F)}let M;if(w.length>1){for(let A=0,E=f.length;A<E;A++){const S=f[A];_.addGroup(S.groupStart,S.groupCount,A)}M=g?new Yn(_,w):m?new Zn(_,w):new Xe(_,w)}else M=g?new Yn(_,w[0]):m?new Zn(_,w[0]):new Xe(_,w[0]);M.name=u.name,h.add(M)}else if(t.vertices.length>0){const c=new gn({size:1,sizeAttenuation:!1}),d=new be;d.setAttribute("position",new ve(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(d.setAttribute("color",new ve(t.colors,3)),c.vertexColors=!0);const u=new Zn(d,c);h.add(u)}return h}}v(Jo,"hl");const ei=60,Rr=25,la=new cn(.3,4.6,.05),Pi=".js-webgl-globe",Qo=".js-webgl-globe-data",$o="PR_OPENED",Ko="PR_MERGED",el="CUSTOM",Pr=16777215,tl=2197759,nl=16018366,ti="PAUSE",ni="RESUME";var kc=Bt(370);const At=Bt.n(kc)()(new class{}().prototype),Pe={},Wc=new y,Ii=Math.PI/180,jc=180/Math.PI,{abs:Kc}=Math;function Ir(r){return r*Ii}v(Ir,"Rl");function il(r){return r*jc}v(il,"Pl");function rl(r,e,t){const n=t||new ue;n.identity(),n.makeRotationY(e),n.multiply(r.matrix),r.matrix.copy(n),r.rotation.setFromRotationMatrix(r.matrix)}v(rl,"Il");function ii(r){r instanceof Xe&&(r.geometry&&r.geometry.dispose(),r.material&&(r.material.map&&r.material.map.dispose(),r.material.lightMap&&r.material.lightMap.dispose(),r.material.bumpMap&&r.material.bumpMap.dispose(),r.material.normalMap&&r.material.normalMap.dispose(),r.material.specularMap&&r.material.specularMap.dispose(),r.material.envMap&&r.material.envMap.dispose(),r.material.emissiveMap&&r.material.emissiveMap.dispose(),r.material.metalnessMap&&r.material.metalnessMap.dispose(),r.material.roughnessMap&&r.material.roughnessMap.dispose(),r.material.dispose()))}v(ii,"Dl");function ha(r,e){for(let t=r.children.length-1;t>=0;t--){const n=r.children[t];ha(n,e),typeof e=="function"&&e(n)}}v(ha,"Nl");function qc(r,e,t,n){r=Ir(r),e=Ir(e),t=Ir(t);const i=(n=Ir(n))-e,s=Math.cos(t)*Math.cos(i),a=Math.cos(t)*Math.sin(i),o=Math.atan2(Math.sin(r)+Math.sin(t),Math.sqrt((Math.cos(r)+s)*(Math.cos(r)+s)+a*a)),l=e+Math.atan2(a,Math.cos(r)+s);return[il(o),il(l)]}v(qc,"zl");function Ct(r,e,t,n){n=n||new y;const i=(90-r)*Ii,s=(e+180)*Ii;return n.set(-t*Math.sin(i)*Math.cos(s),t*Math.cos(i),t*Math.sin(i)*Math.sin(s)),n}v(Ct,"Ol");function ca(){this.array=null}v(ca,"Fl");class sl{constructor(e){this.props=e,this.init()}init(){const{radius:e,detail:t=50,renderer:n,shadowPoint:i,highlightPoint:s,highlightColor:a,frontHighlightColor:o=3555965,waterColor:l=857395,landColorFront:h=16777215,shadowDist:c,highlightDist:d,frontPoint:u}=this.props,p=new Ps(e,t,t),f=new wi({color:l,metalness:0,roughness:.9});this.uniforms=[],f.onBeforeCompile=m=>{m.uniforms.shadowDist={value:c},m.uniforms.highlightDist={value:d},m.uniforms.shadowPoint={value:new y().copy(i)},m.uniforms.highlightPoint={value:new y().copy(s)},m.uniforms.frontPoint={value:new y().copy(u)},m.uniforms.highlightColor={value:new le(a)},m.uniforms.frontHighlightColor={value:new le(o)},m.vertexShader=`#define GLSLIFY 1
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec3 vWorldPosition;

void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	// # include <worldpos_vertex>
    vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;
	vWorldPosition = worldPosition.xyz;
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m.fragmentShader=`#define GLSLIFY 1
#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float shadowDist;
uniform float highlightDist;
uniform vec3 shadowPoint;
uniform vec3 highlightPoint;
uniform vec3 frontPoint;
uniform vec3 highlightColor;
uniform vec3 frontHighlightColor;

varying vec3 vWorldPosition;

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#ifdef USE_MAP

		vec4 texelColor = texture2D( map, vUv );
		texelColor = mapTexelToLinear( texelColor );
		
		#ifndef IS_FILL
			diffuseColor *= texelColor;
		#endif

	#endif
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

    float dist;
	float distZ;

    // highlights
	#ifdef USE_HIGHLIGHT
		dist = distance(vWorldPosition, highlightPoint);
		distZ = distance(vWorldPosition.z, 0.0);
		outgoingLight = mix(highlightColor, outgoingLight, smoothstep(0.0, highlightDist, dist) * smoothstep(0.0, 3.0, pow(distZ, 0.5)));
        outgoingLight = mix(outgoingLight * 2.0, outgoingLight, smoothstep(0.0, 12.0, distZ));
	#endif

    // front hightlight
    #ifdef USE_FRONT_HIGHLIGHT
        dist = distance(vWorldPosition * vec3(0.875, 0.5, 1.0), frontPoint);
        outgoingLight = mix(frontHighlightColor * 1.6, outgoingLight, smoothstep(0.0, 15.0, dist));
    #endif

    // shadows
    dist = distance(vWorldPosition, shadowPoint);
	outgoingLight = mix(outgoingLight * 0.01, outgoingLight, smoothstep(0.0, shadowDist, dist));
    // shadow debug
	// outgoingLight = mix(vec3(1.0, 0.0, 0.0), outgoingLight, smoothstep(0.0, shadowDist, dist));

	#ifdef IS_FILL
		outgoingLight = mix(outgoingLight, outgoingLight * 0.5, 1.0 - texelColor.g * 1.5);
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,this.uniforms.push(m.uniforms)},f.defines={USE_HIGHLIGHT:1,USE_HIGHLIGHT_ALT:1,USE_FRONT_HIGHLIGHT:1,DITHERING:1},this.mesh=new vt;const g=new Xe(p,f);g.renderOrder=1,this.mesh.add(g),this.meshFill=g,this.materials=[f]}setShadowPoint(e){this.uniforms&&this.uniforms.forEach(t=>{t.shadowPoint.value.copy(e)})}setHighlightPoint(e){this.uniforms&&this.uniforms.forEach(t=>{t.highlightPoint.value.copy(e)})}setFrontPoint(e){this.uniforms&&this.uniforms.forEach(t=>{t.frontPoint.value.copy(e)})}setShadowDist(e){this.uniforms&&this.uniforms.forEach(t=>{t.shadowDist.value=e})}setHighlightDist(e){this.uniforms&&this.uniforms.forEach(t=>{t.highlightDist.value=e})}dispose(){this.mesh=null,this.materials=null,this.uniforms=null,this.meshFill=null}}v(sl,"Bl");const{abs:eu}=Math;function Di(r,e,t,n,i){return s=function(o,l,h){return(o-l)/(h-l)||0}(r,e,t),(i-(a=n))*s+a;var s,a}v(Di,"Ul");function ua(r,e,t){return Math.max(e,Math.min(r,t))}v(ua,"Gl");function Dr({lat:r,lon:e}){const t=!isNaN(r)&&r>=-90&&r<=90,n=!isNaN(e)&&e>=-180&&e<=180;return t&&n}v(Dr,"Vl");class al{constructor(e){this.props=e,this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handlePause=this.handlePause.bind(this),this.handleResume=this.handleResume.bind(this),this.init()}init(){this.dragging=!1,this.mouse=new Y(.5,.5),this.lastMouse=new Y(.5,.5),this.target=new y(0,0),this.matrix=new ue,this.velocity=new Y,this.autoRotationSpeedScalar=1,this.autoRotationSpeedScalarTarget=1,this.addListeners(),At.on(ti,this.handlePause),At.on(ni,this.handleResume)}addListeners(){const{domElement:e}=this.props,{isMobile:t}=Pe;this.removeListeners();const n={capture:!1,passive:!0};e.addEventListener("mousedown",this.handleMouseDown,n),e.addEventListener("mousemove",this.handleMouseMove,n),e.addEventListener("mouseup",this.handleMouseUp,n),e.addEventListener("mouseout",this.handleMouseOut,n),e.addEventListener("mouseleave",this.handleMouseOut,n),e.addEventListener("touchstart",this.handleTouchStart,n),e.addEventListener("touchmove",this.handleTouchMove,n),e.addEventListener("touchend",this.handleTouchEnd,n),e.addEventListener("touchcancel",this.handleTouchEnd,n)}removeListeners(){const{domElement:e}=this.props,{isMobile:t}=Pe;e.removeEventListener("mousedown",this.handleMouseDown),e.removeEventListener("mousemove",this.handleMouseMove),e.removeEventListener("mouseup",this.handleMouseUp),e.removeEventListener("mouseout",this.handleMouseOut),e.removeEventListener("mouseleave",this.handleMouseOut),e.removeEventListener("touchstart",this.handleTouchStart),e.removeEventListener("touchmove",this.handleTouchMove),e.removeEventListener("touchend",this.handleTouchEnd),e.removeEventListener("touchcancel",this.handleTouchEnd)}setMouse(e){const{width:t,height:n}=Pe.parentNode.getBoundingClientRect();this.mouse.x=e.clientX/t*2-1,this.mouse.y=-e.clientY/n*2+1}setDragging(e){this.dragging=e;const{setDraggingCallback:t}=this.props;t&&typeof t=="function"&&t(e)}handlePause(){this.removeListeners()}handleResume(){this.addListeners()}handleMouseDown(e){this.setMouse(e),this.setDragging(!0)}handleMouseMove(e){this.setMouse(e)}handleMouseUp(e){this.setMouse(e),this.setDragging(!1)}handleMouseOut(){this.setDragging(!1)}handleTouchStart(e){this.setMouse(e.changedTouches[0]),this.lastMouse.copy(this.mouse),this.setDragging(!0)}handleTouchMove(e){this.setMouse(e.changedTouches[0])}handleTouchEnd(e){this.setMouse(e.changedTouches[0]),this.setDragging(!1)}update(e=.01){let t=0,n=0;const{object:i,objectContainer:s,rotateSpeed:a,autoRotationSpeed:o,easing:l=.1,maxRotationX:h=.3}=this.props;this.dragging&&(t=this.mouse.x-this.lastMouse.x,n=this.mouse.y-this.lastMouse.y,this.target.y=ua(this.target.y-n,-h,.6*h)),s.rotation.x+=(this.target.y+la.x-s.rotation.x)*l,this.target.x+=(t-this.target.x)*l,rl(i,this.target.x*a,this.matrix),this.dragging||rl(i,e*o*this.autoRotationSpeedScalar,this.matrix),this.autoRotationSpeedScalar+=.05*(this.autoRotationSpeedScalarTarget-this.autoRotationSpeedScalar),this.lastMouse.copy(this.mouse),this.velocity.set(t,n)}dispose(){this.removeListeners(),At.off(ti,this.handlePause),At.off(ni,this.handleResume),this.dragging=null,this.mouse=null,this.lastMouse=null,this.target=null,this.matrix=null,this.velocity=null,this.autoRotationSpeedScalar=null,this.autoRotationSpeedScalarTarget=null}}v(al,"kl");class ol{constructor(e){this.props=e,this.init()}init(){const{maxAmount:e=1e3,data:t=[],radius:n=1,camera:i,maxIndexDistance:s,visibleIndex:a,colors:{openPrColor:o,openPrParticleColor:l}}=this.props,{pixelRatio:h,spikeRadius:c=.06}=Pe;this.mesh=new vt;const d=new Tt({color:65280,visible:!1}),u=new li(.75,1,.75);u.translate(0,.5,0),u.rotateX(-Math.PI/2);const p=new vi(u,d,e);this.mesh.add(p);const f=new Tt({color:o,transparent:!0,opacity:.4,alphaTest:.05,blending:2});f.onBeforeCompile=V=>{V.uniforms.cameraPosition={value:i.position},V.uniforms.radius={value:n},V.uniforms.visibleIndex={value:a},V.uniforms.maxIndexDistance={value:s},V.uniforms.highlightIndex={value:-9999},V.vertexShader=`#define GLSLIFY 1
#include <common>

uniform float visibleIndex;
uniform float maxIndexDistance;

attribute float index;

varying float vScale;
varying float vIndex;

#ifndef PI
#define PI 3.141592653589793
#endif

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

void main() {
	vIndex = index;

	vec3 pos = position;

	float scale = sineInOut(clamp(smoothstep(maxIndexDistance, 0.0, distance(index, visibleIndex)), 0., 1.));
	pos.z *= scale;
	vScale = scale;

	vec3 transformed = vec3( pos );
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
}`,V.fragmentShader=`#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;

#include <common>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float highlightIndex;

varying float vScale;
varying float vIndex;

void main() {
	if(vScale <= 0.01){
		discard;
		return;
	}

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <alphatest_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	reflectedLight.indirectDiffuse += vec3( 1.0 );
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	vec3 rgb = outgoingLight.rgb;
	float alpha = diffuseColor.a;

	// highlight when mouse is over
	if(highlightIndex == vIndex){
		rgb = vec3(1.0);
		alpha = 1.0;
	}

	gl_FragColor = vec4( rgb, alpha );
}`,this.spikeUniforms=V.uniforms};const g=[],m=[];for(let V=0;V<e;V++)g.push(V),m.push(V);const x=new As(c*h,c*h,1,6,1,!1);x.setAttribute("index",new ta(new Float32Array(g),1)),x.translate(0,.5,0),x.rotateX(-Math.PI/2);const _=new vi(x,f,e);this.mesh.add(_);const w=new be,M=[],A=[],E=new le(l),S=new vt,R=this.getDensities(),{densityValues:F,minDensity:P,maxDensity:D}=R;let z=0;for(let V=0;V<e;V++){const $=t[V],{gop:re}=$,J={lon:+re.lon,lat:+re.lat};if(!Dr(J))continue;Ct(J.lat,J.lon,n,S.position);const K=F[z++];S.scale.z=Di(K,P,D,.05*n,.2*n),S.lookAt(Wc),S.updateMatrix(),_.setMatrixAt(V,S.matrix),p.setMatrixAt(V,S.matrix),Ct(J.lat,J.lon,n+S.scale.z+.25,S.position),M.push(S.position.x,S.position.y,S.position.z),A.push(E.r,E.g,E.b)}w.setAttribute("position",new ve(M,3).onUpload(ca)),w.setAttribute("color",new ve(A,3).onUpload(ca)),w.setAttribute("index",new ve(m,1).onUpload(ca));const N=new gn({alphaTest:.05,size:.8,depthWrite:!1});N.onBeforeCompile=V=>{V.uniforms.cameraPosition={value:i.position},V.uniforms.radius={value:n},V.uniforms.visibleIndex={value:a},V.uniforms.maxIndexDistance={value:s},V.vertexShader=`#define GLSLIFY 1
uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float time;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float speed;

attribute float index;
attribute vec3 curveStart;
attribute vec3 curveCtrl1;
attribute vec3 curveCtrl2;
attribute vec3 curveEnd;
attribute float timeOffset;

varying float vAlpha;

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, float t) {
  vec3 E = mix(A, B, t);
  vec3 F = mix(B, C, t);
  vec3 G = mix(C, D, t);

  vec3 H = mix(E, F, t);
  vec3 I = mix(F, G, t);

  vec3 P = mix(H, I, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  
  vec3 P = mix(A3, B3, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  
  vec3 P = mix(A4, B4, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, vec3 G, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);
  vec3 F1 = mix(F, G, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);
  vec3 E2 = mix(E1, F1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);
  vec3 D3 = mix(D2, E2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  vec3 C4 = mix(C3, D3, t);

  vec3 A5 = mix(A4, B4, t);
  vec3 B5 = mix(B4, C4, t);
  
  vec3 P = mix(A5, B5, t);

  return P;
}

void main() {    
	#include <color_vertex>

	// animate along curve and loop
	float t = quarticInOut(fract((time * speed + timeOffset)));

	vec3 pos = position;

	#ifdef USE_CURVE
		pos =  bezier(curveStart, curveCtrl1, curveCtrl2, curveEnd, t);
	#endif

	vec3 transformed = vec3( pos );

	// visible near visibleIndex
	float dist = distance(index, visibleIndex);
	vAlpha = smoothstep(maxIndexDistance * 0.75, 0.0, dist); // show after lines draw in (* 0.75)

	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V.fragmentShader=`#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;

varying vec3 vViewPosition;
varying float vAlpha;

#define V0 vec3(0.0)

void main() {
	if(vAlpha <= 0.05){
		discard;
		return;
	}

	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>	

	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a * vAlpha );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,this.particleUniforms=V.uniforms};const H=new Zn(w,N);this.mesh.add(H),this.materials=[f,N],this.spikes=_,this.spikeIntersects=p,this.particles=H,this.spikes.renderOrder=3,this.particles.renderOrder=4}getDensities(){const{data:e,maxAmount:t=1e3,radius:n}=this.props,i=new y,s=[],a=[];for(let h=0;h<t;h++){const c=e[h],{gop:d}=c,u={lon:+d.lon,lat:+d.lat};u&&Dr(u)&&(Ct(u.lat,u.lon,n,i),s.push(new y().copy(i)),a.push(0))}s.forEach((h,c)=>{s.forEach((d,u)=>{c!==u&&h.distanceTo(d)<=10&&a[c]++})});let o=99999,l=-1;return a.forEach(h=>{h<o?o=h:h>l&&(l=h)}),{densityValues:a,minDensity:o,maxDensity:l}}setHighlightIndex(e){this.spikeUniforms&&this.spikeUniforms.highlightIndex.value!==e&&(this.spikeUniforms.highlightIndex.value=e)}update(e){if(this.spikeUniforms&&this.particleUniforms){const{maxAmount:t,maxIndexDistance:n}=this.props;this.spikeUniforms&&(this.spikeUniforms.visibleIndex.value=e),this.particleUniforms&&(this.particleUniforms.visibleIndex.value=e);const i=ua(e-n|0,0,t),s=2*n|0,a=ua(i+s,0,t);this.spikes.count=a,this.particles.geometry.setDrawRange(i,s)}}dispose(){this.mesh&&ha(this.mesh,ii),this.mesh&&this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.props=null,this.mesh=null,this.spikeUniforms=null,this.particleUniforms=null,this.materials=null,this.spikes=null,this.particles=null}}v(ol,"Wl");class ll{constructor(e){this.props=e,this.init()}init(){const{data:e,radius:t=1,camera:n,maxAmount:i=e.length,maxIndexDistance:s,visibleIndex:a,colors:o}=this.props,{parentNode:l,lineWidth:h,pixelRatio:c}=Pe;this.mesh=new vt,this.isAnimating=[],this.animatingLandingsOut=[],this.landings=[],this.lineMeshes=[],this.lineHitMeshes=[],this.highlightedMesh,this.colors=o,this.landingGeo=new Ls(.35,8),this.TUBE_RADIUS_SEGMENTS=3,this.HIT_DETAIL_FRACTION=4,this.DATA_INCREMENT_SPEED=1.5,this.PAUSE_LENGTH_FACTOR=2,this.MIN_PAUSE=3e3,this.visibleIndex=0,this.lineAnimationSpeed=600;const d=new y,u=new y;this.tubeMaterial=new Tt({blending:2,opacity:.95,transparent:!0,color:this.colors.mergedPrColor}),this.highlightMaterial=new Tt({opacity:1,transparent:!1,color:this.colors.mergedPrColorHighlight}),this.hiddenMaterial=new Tt({visible:!1});for(let g=0;g<i;g++){const{gop:m,gm:x}=e[g],_={lat:+m.lat,lon:+m.lon},w={lat:+x.lat,lon:+x.lon};if(!Dr(_)||!Dr(w))continue;const M=Ct(_.lat,_.lon,t),A=Ct(w.lat,w.lon,t),E=M.distanceTo(A);if(E>1.5){let S;S=Di(E,0,2*t,1,E>1.85*t?3.25:E>1.4*t?2.3:1.5);const R=qc(_.lat,_.lon,w.lat,w.lon),F=Ct(R[0],R[1],t*S);d.copy(F),u.copy(F);const P=Di(E,10,30,.2,.15),D=Di(E,10,30,.8,.85);S=Di(E,0,2*t,1,1.7);const z=new Ai(M,d,u,A);z.getPoint(P,d),z.getPoint(D,u),d.multiplyScalar(S),u.multiplyScalar(S);const N=new Ai(M,d,u,A),H=Ct(w.lat,w.lon,t+g/1e4),V=Ct(w.lat,w.lon,t+5);this.landings.push({pos:H,lookAt:V});const $=20+parseInt(N.getLength()),re=new Is(N,$,.08,this.TUBE_RADIUS_SEGMENTS,!1),J=new Is(N,parseInt($/this.HIT_DETAIL_FRACTION),.6,this.TUBE_RADIUS_SEGMENTS,!1);re.setDrawRange(0,0),J.setDrawRange(0,0);const K=new Xe(re,this.tubeMaterial),ne=new Xe(J,this.hiddenMaterial);ne.name="lineMesh",K.userData={dataIndex:g},ne.userData={dataIndex:g,lineMeshIndex:this.lineMeshes.length},this.lineMeshes.push(K),this.lineHitMeshes.push(ne)}}const{width:p,height:f}=l.getBoundingClientRect()}resetHighlight(){this.highlightedMesh!=null&&(this.highlightedMesh.material=this.tubeMaterial,this.highlightedMesh=null)}setHighlightObject(e){const t=parseInt(e.userData.lineMeshIndex),n=this.lineMeshes[t];n!=this.highlightedMesh&&(n.material=this.highlightMaterial,this.resetHighlight(),this.highlightedMesh=n)}update(e=.01,t){let n=parseInt(this.visibleIndex+e*this.DATA_INCREMENT_SPEED);n>=this.lineMeshes.length&&(n=0,this.visibleIndex=0),n>this.visibleIndex&&this.isAnimating.push(this.animatedObjectForIndex(n));let i=[],s=[];for(const a of this.isAnimating){const o=a.line.geometry.index.count,l=a.line.geometry.drawRange.count+e*this.lineAnimationSpeed;let h=a.line.geometry.drawRange.start+e*this.lineAnimationSpeed;if(l>=o&&h<o&&this.animateLandingIn(a),l>=o*this.PAUSE_LENGTH_FACTOR+this.MIN_PAUSE&&h<o){if(a.line==this.highlightedMesh){i.push(a);continue}h=this.TUBE_RADIUS_SEGMENTS*Math.ceil(h/this.TUBE_RADIUS_SEGMENTS);const c=this.TUBE_RADIUS_SEGMENTS*Math.ceil(h/this.HIT_DETAIL_FRACTION/this.TUBE_RADIUS_SEGMENTS);a.line.geometry.setDrawRange(h,l),a.lineHit.geometry.setDrawRange(c,l/this.HIT_DETAIL_FRACTION),i.push(a)}else h<o?(a.line.geometry.setDrawRange(0,l),a.lineHit.geometry.setDrawRange(0,l/this.HIT_DETAIL_FRACTION),i.push(a)):this.endAnimation(a)}for(let a=0;a<this.animatingLandingsOut.length;a++)this.animateLandingOut(this.animatingLandingsOut[a])&&s.push(this.animatingLandingsOut[a]);this.isAnimating=i,this.animatingLandingsOut=s,this.visibleIndex=this.visibleIndex+e*this.DATA_INCREMENT_SPEED}endAnimation(e){e.line.geometry.setDrawRange(0,0),e.lineHit.geometry.setDrawRange(0,0),this.mesh.remove(e.line),this.mesh.remove(e.lineHit),e.line=null,e.lineHit=null,this.animatingLandingsOut.push(e)}animateLandingIn(e){if(e.dot.scale.x>.99)return e.dotFade==null?void 0:(e.dotFade.material.opacity=0,this.mesh.remove(e.dotFade),ii(e.dotFade),void(e.dotFade=null));const t=e.dot.scale.x+.06*(1-e.dot.scale.x);e.dot.scale.set(t,t,1);const n=e.dotFade.scale.x+.06*(1-e.dotFade.scale.x);e.dotFade.scale.set(n,n,1),e.dotFade.material.opacity=1-n}animateLandingOut(e){if(e.dot.scale.x<.01)return this.mesh.remove(e.dot),e.dot=null,ii(e.dot),e.dotFade!=null&&(this.mesh.remove(e.dotFade),ii(e.dotFade),e.dotFade=null),!1;const t=e.dot.scale.x-.15*e.dot.scale.x;return e.dot.scale.set(t,t,1),!0}animatedObjectForIndex(e){const t=this.lineMeshes[e];this.mesh.add(t);const n=this.lineHitMeshes[e];this.mesh.add(n);const i=this.landingFromPositionData(this.landings[e]);this.mesh.add(i);const s=this.fadingLandingMeshFromMesh(i);return this.mesh.add(s),{line:t,lineHit:n,dot:i,dotFade:s}}landingFromPositionData(e){const t=new Xe(this.landingGeo,this.tubeMaterial);return t.position.set(e.pos.x,e.pos.y,e.pos.z),t.lookAt(e.lookAt.x,e.lookAt.y,e.lookAt.z),t.scale.set(0,0,1),t}fadingLandingMeshFromMesh(e){const t=e.clone();return t.geometry=new To(1.55,1.8,16),t.material=new Tt({color:this.colors.mergedPrColor,blending:2,transparent:!0,opacity:0,alphaTest:.02,visible:!0}),t.scale.set(0,0,1),t.renderOrder=5,t}dispose(){this.mesh&&ha(this.mesh,ii),this.mesh&&this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null}}v(ll,"jl");function Nr(){const r=navigator.connection;r===void 0||r.effectiveType!=="slow-2g"&&r.effectiveType!=="2g"?function(){hl();const e=document.querySelector(Pi);if(!e)return;const t=window.innerWidth<=500?".js-globe-fallback-video-small":".js-globe-fallback-video",n=e.querySelector(t);n.removeAttribute("hidden"),n.play()}():function(){hl();const e=document.querySelector(Pi);e&&e.querySelector(".js-globe-fallback-image").removeAttribute("hidden")}()}v(Nr,"ql");function hl(){const r=document.querySelector(Pi);if(!r||!r.hasChildNodes())return;const e=r.parentNode;e&&e.classList.remove("home-globe-container-webgl");const t=r.querySelector(".js-webgl-globe-loading");t&&r.removeChild(t);const n=r.querySelector(".js-globe-canvas");n&&r.removeChild(n);const i=r.querySelector(".js-globe-popup");i&&r.removeChild(i)}v(hl,"Xl");class cl{constructor(e){this.props=e,this.init(),this.now=new Date,this.cardHeader="",this.units={day:864e5,hour:36e5,minute:6e4,second:1e3},this.cardOffset={x:10,y:16}}init(){const e=document.querySelector(this.props.parentSelector||"body"),{basePath:t,imagePath:n}=Pe;this.isVisible=!1,this.element=function(i,s,a){i=i||"div";const o=document.createElement(i);return s&&s.forEach(l=>{o.classList.add(l)}),a&&(o.innerHTML=a),o}("div",["data-info","position-absolute","top-0","left-0","rounded","text-mono","f6","py-3","pl-2","pr-5","z-3","js-globe-popup","text-white","d-none"],`
      <a class='js-globe-popover-card no-underline d-flex flex-row flex-items-start'>

        <div class='pr-2 pt-1 pl-2'>
          <img src='${t}${n}pull-request-icon.svg' aria-hidden='true' class='js-globe-popup-icon-pr' loading='lazy'>
          <img src='${t}${n}north-star.svg' aria-hidden='true' class='js-globe-popup-icon-acv mt-n1 d-none' width='24' loading='lazy'>
        </div>

        <div>
          <div class='f4 color-text-white js-globe-popover-header'>#34234 facebook/react</div>
          <div style='color: #959da5' class='js-globe-popover-body'></div>
        </div>

      </a>
    `),this.element.style.maxWidth="450px",this.element.style.backgroundColor="rgba(0,0,0, 0.4)",this.element.style.backdropFilter="blur(10px)",this.element.style.webkitBackdropFilter="blur(10px)",e.appendChild(this.element),this.card=this.element.querySelector(".js-globe-popover-card"),this.header=this.card.querySelector(".js-globe-popover-header"),this.body=this.card.querySelector(".js-globe-popover-body")}update(e,t){const n=e.x+t.x+this.cardOffset.x,i=e.y+t.y+this.cardOffset.y,s=this.element.getBoundingClientRect(),a=Math.min(n,window.innerWidth-s.width-this.cardOffset.x),o=i+s.height,l=e.y-s.height-this.cardOffset.y/2+t.y,h=o>window.innerHeight+t.y?l:i;this.element.style.transform=`translate(${a}px, ${h}px)`}setInfo(e){const{user_opened_location:t,user_merged_location:n,language:i,type:s,header:a,body:o,name_with_owner:l,pr_id:h,time:c,url:d}=e,u=`#${h} ${l}`;if(this.cardHeader==u||this.cardHeader==a)return;this.cardHeader=u;const p=this.shouldShowTime(c)?this.relativeTime(c):"";d!==null&&(this.card.href=d),s===Ko?(this.header.textContent=u,this.body.textContent="",this.body.insertAdjacentHTML("beforeend",`Opened in ${t},
merged ${p} in ${n}`),i!==null&&this.body.prepend(i,this.colorDotForLanguage(i)),this.showPRIcon()):s===$o?(this.header.textContent=u,this.body.textContent="",this.body.insertAdjacentHTML("beforeend",`Opened ${p} in ${t}`),i!==null&&this.body.prepend(i,this.colorDotForLanguage(i)),this.showPRIcon()):s===el&&(this.header.textContent=a,this.body.innerText=o,this.showGHIcon())}relativeTime(e){const t=new Date(e).toISOString();return`<time-ago datetime="${t}">${t}</time-ago>`}shouldShowTime(e){return e!==null&&this.now-e<this.units.day}showPRIcon(){document.querySelector(".js-globe-popup-icon-pr").classList.remove("d-none"),document.querySelector(".js-globe-popup-icon-acv").classList.add("d-none")}showGHIcon(){document.querySelector(".js-globe-popup-icon-pr").classList.add("d-none"),document.querySelector(".js-globe-popup-icon-acv").classList.remove("d-none")}show(){if(this.isVisible==1)return;const{domElement:e,controls:t}=this.props;e.classList.add("cursor-pointer"),this.element.classList.remove("d-none"),this.element.classList.add("d-block"),t.autoRotationSpeedScalarTarget=0,this.isVisible=!0}hide(){if(this.isVisible==0)return;const{domElement:e,controls:t}=this.props;e.classList.remove("cursor-pointer"),this.element.classList.remove("d-block"),this.element.classList.add("d-none"),t.autoRotationSpeedScalarTarget=1,this.isVisible=!1}dispose(){this.element&&this.element.parentNode&&document.body.removeChild(this.element),this.element=null,this.props=null,this.icon=null,this.dataElement=null,this.openedLocationElement=null,this.mergedLocationElement=null,this.languageElement=null}colorDotForLanguage(e){const t=document.createElement("span");return t.style.color=this.colorForLanguage(e),t.textContent=" \u2022 ",t}colorForLanguage(e){return{ActionScript:"#882B0F",AMPL:"#E6EFBB","API Blueprint":"#2ACCA8","Apollo Guidance Computer":"#0B3D91",AppleScript:"#101F1F",Arc:"#aa2afe","ASP.NET":"#9400ff",Assembly:"#6E4C13",Batchfile:"#C1F12E",C:"#555555","C#":"#178600","C++":"#f34b7d",Clojure:"#db5855",CoffeeScript:"#244776",ColdFusion:"#ed2cd6","ColdFusion CFC":"#ed2cd6","Common Lisp":"#3fb68b","Component Pascal":"#B0CE4E",Crystal:"#000100",CSON:"#244776",CSS:"#563d7c",Dart:"#00B4AB",Dockerfile:"#384d54",EJS:"#a91e50",Elixir:"#6e4a7e",Elm:"#60B5CC","Emacs Lisp":"#c065db",EmberScript:"#FFF4F3",EQ:"#a78649",Erlang:"#B83998","Game Maker Language":"#71b417",GAML:"#FFC766",Glyph:"#c1ac7f",Go:"#00ADD8",GraphQL:"#e10098",Haml:"#ece2a9",Handlebars:"#f7931e",Harbour:"#0e60e3",Haskell:"#5e5086",HTML:"#e34c26",J:"#9EEDFF",Java:"#b07219",JavaScript:"#f1e05a",Julia:"#a270ba",Kotlin:"#F18E33",Less:"#1d365d",Lex:"#DBCA00",LLVM:"#185619",Lua:"#000080",Makefile:"#427819",Markdown:"#083fa1",MATLAB:"#e16737",Mercury:"#ff2b2b",Metal:"#8f14e9",Nim:"#ffc200",Nix:"#7e7eff",NumPy:"#9C8AF9","Objective-C":"#438eff","Objective-C++":"#6866fb",Pan:"#cc0000",Pascal:"#E3F171",Pawn:"#dbb284",Perl:"#0298c3",PHP:"#4F5D95",PLSQL:"#dad8d8",PostScript:"#da291c",PowerBuilder:"#8f0f8d",PowerShell:"#012456",Prisma:"#0c344b",Processing:"#0096D8",Puppet:"#302B6D",Python:"#3572A5",R:"#198CE7",Reason:"#ff5847",Ruby:"#701516",Rust:"#dea584",Sass:"#a53b70",Scala:"#c22d40",Scheme:"#1e4aec",SCSS:"#c6538c",Shell:"#89e051",Svelte:"#ff3e00",SVG:"#ff9900",Swift:"#ffac45","TI Program":"#A0AA87",Turing:"#cf142b",Twig:"#c1d026",TypeScript:"#2b7489",Uno:"#9933cc",UnrealScript:"#a54c4d",Vala:"#fbe5cd","Vim script":"#199f4b","Visual Basic .NET":"#945db7",Vue:"#41586f",wdl:"#42f1f4",WebAssembly:"#04133b",YAML:"#cb171e"}[e]}}v(cl,"Yl");class ul{constructor(e){this.handleResize=this.handleResize.bind(this),this.handlePause=this.handlePause.bind(this),this.handleResume=this.handleResume.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.setDragging=this.setDragging.bind(this),this.update=this.update.bind(this),this.hasLoaded=!1,this.initBase(e||document.body),this.initScene(),this.addListeners(),At.on(ti,this.handlePause),At.on(ni,this.handleResume)}initBase(e){const{width:t,height:n,x:i,y:s}=Pe.parentNode.getBoundingClientRect();this.parentNodeRect={width:t,height:n,x:i,y:s},this.scene=new or,this.camera=new ct(20,t/n,170,260),this.renderer=new Ie({powerPreference:"high-performance",alpha:!0,preserveDrawingBuffer:!1}),this.then=Date.now()/1e3,this.fpsWarnings=0,this.fpsWarningThreshold=50,this.fpsTarget=60,this.fpsEmergencyThreshold=12,this.fpsTargetSensitivity=.875,this.fpsStorage=[],this.worldDotRows=200,this.worldDotSize=.095,this.renderQuality=4,this.renderer.setPixelRatio(Pe.pixelRatio||1),this.renderer.setSize(t,n),e.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("webgl-canvas"),this.renderer.domElement.classList.add("js-globe-canvas");const a=new Ks(16777215,.8);this.scene.add(a),this.parentContainer=new vt,this.parentContainer.name="parentContainer";let o=la;const l=new Date().getTimezoneOffset()||0;o.y=la.y+Math.PI*(l/720),this.parentContainer.rotation.copy(o),this.scene.add(this.parentContainer),this.haloContainer=new vt,this.haloContainer.name="haloContainer",this.scene.add(this.haloContainer),this.container=new vt,this.container.name="container",this.parentContainer.add(this.container),this.camera.position.set(0,0,220),this.scene.add(this.camera),this.clock=new Ho,this.mouse=new y(0,0,.5),this.mouseScreenPos=new Y(-9999,-9999),this.raycaster=new ra,this.raycaster.far=260,this.paused=!1,this.canvasOffset={x:0,y:0},this.updateCanvasOffset(),this.highlightMaterial=new Tt({opacity:1,transparent:!1,color:Pr}),this.handleResize(),this.startUpdating()}initScene(){const{isMobile:e,globeRadius:t=Rr,assets:{textures:{globeDiffuse:n,globeAlpha:i}}}=Pe;this.radius=t,this.light0=new Tr(tl,12,120,.3,0,1.1),this.light1=new $s(11124735,3),this.light3=new Tr(nl,5,75,.5,0,1.25),this.light0.target=this.parentContainer,this.light1.target=this.parentContainer,this.light3.target=this.parentContainer,this.scene.add(this.light0,this.light1,this.light3),this.positionContainer(),this.shadowPoint=new y().copy(this.parentContainer.position).add(new y(.7*this.radius,.3*-this.radius,this.radius)),this.highlightPoint=new y().copy(this.parentContainer.position).add(new y(1.5*-this.radius,1.5*-this.radius,0)),this.frontPoint=new y().copy(this.parentContainer.position).add(new y(0,0,this.radius));const s=new sl({radius:this.radius,detail:55,renderer:this.renderer,shadowPoint:this.shadowPoint,shadowDist:1.5*this.radius,highlightPoint:this.highlightPoint,highlightColor:5339494,highlightDist:5,frontPoint:this.frontPoint,frontHighlightColor:2569853,waterColor:1513012,landColorFront:Pr,landColorBack:Pr});this.container.add(s.mesh),this.globe=s;const a=new Ps(Rr,45,45),o=new Qt({uniforms:{c:{type:"f",value:.7},p:{type:"f",value:15},glowColor:{type:"c",value:new le(1844322)},viewVector:{type:"v3",value:new y(0,0,220)}},vertexShader:`#define GLSLIFY 1
uniform vec3 viewVector;
uniform float c;
uniform float p;
varying float intensity;
varying float intensityA;
void main() 
{
  vec3 vNormal = normalize( normalMatrix * normal );
  vec3 vNormel = normalize( normalMatrix * viewVector );
  intensity = pow( c - dot(vNormal, vNormel), p );
  intensityA = pow( 0.63 - dot(vNormal, vNormel), p );
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fragmentShader:`#define GLSLIFY 1
uniform vec3 glowColor;
varying float intensity;
varying float intensityA;
void main()
{
  gl_FragColor = vec4( glowColor * intensity, 1.0 * intensityA );
}`,side:1,blending:2,transparent:!0,dithering:!0}),l=new Xe(a,o);l.scale.multiplyScalar(1.15),l.rotateX(.03*Math.PI),l.rotateY(.03*Math.PI),l.renderOrder=3,this.haloContainer.add(l),this.dragging=!1,this.rotationSpeed=.05,this.raycastIndex=0,this.raycastTrigger=10,this.raycastTargets=[],this.intersectTests=[],this.controls=new al({object:this.container,objectContainer:this.parentContainer,domElement:this.renderer.domElement,setDraggingCallback:this.setDragging,rotateSpeed:e?1.5:3,autoRotationSpeed:this.rotationSpeed,easing:.12,maxRotationX:.5,camera:this.camera})}initDataObjects(e){const t={openPrColor:tl,openPrParticleColor:6137337,mergedPrColor:nl,mergedPrColorHighlight:Pr},{isMobile:n,assets:{textures:{worldMap:i}}}=Pe;this.buildWorldGeometry(),this.addArcticCodeVault(),this.maxAmount=e.length,this.maxIndexDistance=ei,this.indexIncrementSpeed=15,this.visibleIndex=ei,this.openPrEntity=new ol({data:e,maxAmount:this.maxAmount,radius:this.radius,camera:this.camera,maxIndexDistance:this.maxIndexDistance,indexIncrementSpeed:this.indexIncrementSpeed,visibleIndex:this.visibleIndex,colors:t}),this.mergedPrEntity=new ll({data:e,maxAmount:this.maxAmount,radius:this.radius,camera:this.camera,maxIndexDistance:this.maxIndexDistance,visibleIndex:this.visibleIndex,colors:t,mouse:this.mouse});const{width:s,height:a}=Pe.parentNode.getBoundingClientRect(),o=850/a*1;this.containerScale=o,this.dataInfo=new cl({parentSelector:Qo,domElement:this.renderer.domElement,controls:this.controls}),this.dataItem={},this.intersectTests.push(this.globe.meshFill),this.intersectTests.push(this.openPrEntity.spikeIntersects),this.intersectTests.push(...this.mergedPrEntity.lineHitMeshes),this.intersects=[]}monitorFps(){if(this.renderQuality==1)return;const e=Date.now()/1e3,t=e-this.then;this.then=e;const n=parseInt(1/t+.5);this.fpsStorage.push(n),this.fpsStorage.length>10&&this.fpsStorage.shift();const i=this.fpsStorage.reduce((s,a)=>s+a)/this.fpsStorage.length;i<this.fpsTarget*this.fpsTargetSensitivity&&this.fpsStorage.length>9?(this.fpsWarnings++,this.fpsWarnings>this.fpsWarningThreshold&&(this.renderQuality=Math.max(this.renderQuality-1,1),this.fpsWarnings=0,this.updateRenderQuality(),this.fpsStorage=[])):this.fpsStorage.length>9&&i<this.fpsEmergencyThreshold?(this.renderQuality=1,this.initPerformanceEmergency()):this.fpsWarnings=0}updateRenderQuality(){this.renderQuality==4?this.initRegularQuality():this.renderQuality==3?this.initMediumQuality():this.renderQuality==2?this.initLowQuality():this.renderQuality==1&&this.initLowestQuality()}initRegularQuality(){this.renderer.setPixelRatio(Pe.pixelRatio||1),this.indexIncrementSpeed=15,this.raycastTrigger=10}initMediumQuality(){this.renderer.setPixelRatio(Math.min(Pe.pixelRatio,1.85)),this.indexIncrementSpeed=13,this.raycastTrigger=12}initLowQuality(){this.renderer.setPixelRatio(Math.min(Pe.pixelRatio,1.5)),this.indexIncrementSpeed=10,this.raycastTrigger=14,this.worldDotRows=180,this.worldDotSize=.1,this.resetWorldMap(),this.buildWorldGeometry()}initLowestQuality(){this.renderer.setPixelRatio(1),this.indexIncrementSpeed=5,this.raycastTrigger=16,this.worldDotRows=140,this.worldDotSize=.1,this.resetWorldMap(),this.buildWorldGeometry()}initPerformanceEmergency(){this.dispose(),Nr()}buildWorldGeometry(){const{assets:{textures:{worldMap:e}}}=Pe,t=new Se,n=this.getImageData(e.image),i=[],s=this.worldDotRows;for(let h=-90;h<=90;h+=180/s){const c=Math.cos(Math.abs(h)*Ii)*Rr*Math.PI*2*2;for(let d=0;d<c;d++){const u=360*d/c-180;if(!this.visibilityForCoordinate(u,h,n))continue;const p=Ct(h,u,this.radius);t.position.set(p.x,p.y,p.z);const f=Ct(h,u,this.radius+5);t.lookAt(f.x,f.y,f.z),t.updateMatrix(),i.push(t.matrix.clone())}}const a=new Ls(this.worldDotSize,5),o=new wi({color:3818644,metalness:0,roughness:.9,transparent:!0,alphaTest:.02});o.onBeforeCompile=function(h){h.fragmentShader=h.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );",`
        gl_FragColor = vec4( outgoingLight, diffuseColor.a );
        if (gl_FragCoord.z > 0.51) {
          gl_FragColor.a = 1.0 + ( 0.51 - gl_FragCoord.z ) * 17.0;
        }
      `)};const l=new vi(a,o,i.length);for(let h=0;h<i.length;h++)l.setMatrixAt(h,i[h]);l.renderOrder=3,this.worldMesh=l,this.container.add(l)}resetWorldMap(){this.container.remove(this.worldMesh),ii(this.worldMesh),this.dotMesh=null}addArcticCodeVault(){new As(.075,.075,1.5,8),this.vaultMaterial=new Tt({blending:2,opacity:.9,transparent:!0,color:4299263}),this.vaultIsHighlighted=!1;const e=Ct(78.14,15.26,this.radius),t=Ct(78.14,15.26,this.radius+5),{basePath:n,imagePath:i}=Pe,s=`${n}${i}flag.obj`;new Jo().load(s,a=>{a.position.set(e.x,e.y,e.z),a.lookAt(t.x,t.y,t.z),a.rotateX(90*Ii),a.scale.set(.1,.1,.1),a.renderOrder=3;for(const o of a.children)o.material=this.vaultMaterial,o.name="arcticCodeVault",this.arcticCodeVaultMesh=o,this.intersectTests.push(this.arcticCodeVaultMesh);this.container.add(a)})}highlightArcticCodeVault(){if(this.vaultIsHighlighted)return;this.arcticCodeVaultMesh.material=this.highlightMaterial,this.vaultIsHighlighted=!0;const e=document.querySelector(".js-globe-aurora");if(e===null)return;e.play(),e.hidden=!1;const t=e.getAnimations();for(const n of t)return void n.reverse();e.animate([{opacity:0},{opacity:1}],{fill:"both",duration:1600,easing:"ease-in-out"})}resetArcticCodeVaultHighlight(){if(!this.vaultIsHighlighted)return;this.arcticCodeVaultMesh.material=this.vaultMaterial,this.vaultIsHighlighted=!1;const e=document.querySelector(".js-globe-aurora");if(e===null)return;const t=e.getAnimations();e.getAnimations();for(const n of t)return void n.reverse();e.animate([{opacity:1},{opacity:0}],{fill:"both",duration:1600,easing:"ease-in"}),e.pause()}visibilityForCoordinate(e,t,n){const i=4*n.width,s=parseInt((e+180)/360*n.width+.5),a=n.height-parseInt((t+90)/180*n.height-.5),o=parseInt(i*(a-1)+4*s)+3;return n.data[o]>90}getImageData(e){const t=document.createElement("canvas").getContext("2d");return t.canvas.width=e.width,t.canvas.height=e.height,t.drawImage(e,0,0,e.width,e.height),t.getImageData(0,0,e.width,e.height)}addListeners(){const e={capture:!1,passive:!0};window.addEventListener("resize",this.handleResize,e),window.addEventListener("orientationchange",this.handleResize,e),new IntersectionObserver(t=>{for(const n of t)n.isIntersecting||this.paused?n.isIntersecting&&this.paused&&(this.paused=!1,At.emit(ni)):(this.paused=!0,At.emit(ti))}).observe(this.renderer.domElement),this.handleClick=t=>{this.dataItem===null||this.dataItem.url===null||this.shouldCancelClick(t)||window.open(this.dataItem.url,"_blank")},this.renderer.domElement.addEventListener("mouseup",this.handleClick,e),this.handleMouseDown=t=>{this.resetInteractionIntention(t)},this.renderer.domElement.addEventListener("mousedown",this.handleMouseDown,e),this.handleTouchStart=t=>{const n=t.changedTouches[0];this.handleMouseMove(n),this.resetInteractionIntention(n),t.preventDefault()},this.renderer.domElement.addEventListener("touchstart",this.handleTouchStart,{capture:!1}),this.handleTouchMove=t=>{this.shouldCancelClick(t.changedTouches[0])&&(this.mouse={x:-9999,y:-9999},t.preventDefault())},this.renderer.domElement.addEventListener("touchmove",this.handleTouchMove,{capture:!1}),this.renderer.domElement.addEventListener("mousemove",this.handleMouseMove,e)}removeListeners(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("orientationchange",this.handleResize),this.renderer.domElement.removeEventListener("mousemove",this.handleMouseMove),this.renderer.domElement.removeEventListener("mouseup",this.handleClick),this.renderer.domElement.removeEventListener("mousedown",this.handleMouseDown),this.renderer.domElement.removeEventListener("touchstart",this.handleTouchStart),this.renderer.domElement.removeEventListener("touchmove",this.handleTouchMove)}updateCanvasOffset(){const e=document.querySelector(Qo).getBoundingClientRect(),t=document.querySelector(Pi).getBoundingClientRect();this.canvasOffset={x:t.x-e.x,y:t.y-e.y}}resetInteractionIntention(e){this.mouseDownPos={x:e.clientX,y:e.clientY}}shouldCancelClick(e){const t=Math.abs(e.clientX-this.mouseDownPos.x);return Math.abs(e.clientY-this.mouseDownPos.y)>2||t>2}positionContainer(){const{isMobile:e}=Pe,{height:t}=this.parentNodeRect,n=850/t*1;this.containerScale=n,e?this.parentContainer.position.set(0,0,0):(this.parentContainer.scale.set(n,n,n),this.parentContainer.position.set(0,0,0),this.haloContainer.scale.set(n,n,n)),this.haloContainer.position.set(0,0,-10),this.positionLights(n)}positionLights(e=1){this.light0&&(this.light0.position.set(this.parentContainer.position.x-2.5*this.radius,80,-40).multiplyScalar(e),this.light0.distance=120*e),this.light1&&this.light1.position.set(this.parentContainer.position.x-50,this.parentContainer.position.y+30,10).multiplyScalar(e),this.light2&&(this.light2.position.set(this.parentContainer.position.x-25,0,100).multiplyScalar(e),this.light2.distance=150*e),this.light3&&(this.light3.position.set(this.parentContainer.position.x+this.radius,this.radius,2*this.radius).multiplyScalar(e),this.light3.distance=75*e)}handlePause(){this.stopUpdating(),this.clock.stop()}handleResume(){this.clock.start(),this.startUpdating()}handleResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{const{width:e,height:t,x:n,y:i}=Pe.parentNode.getBoundingClientRect();this.parentNodeRect={width:e,height:t,x:n,y:i},this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.positionContainer();const s=850/t*1,a=this.radius*s;this.shadowPoint.copy(this.parentContainer.position).add(new y(.7*a,.3*-a,a)),this.globe.setShadowPoint(this.shadowPoint),this.highlightPoint.copy(this.parentContainer.position).add(new y(1.5*-a,1.5*-a,0)),this.globe.setHighlightPoint(this.highlightPoint),this.frontPoint=new y().copy(this.parentContainer.position).add(new y(0,0,a)),this.globe.setFrontPoint(this.frontPoint),this.globe.setShadowDist(1.5*a),this.globe.setHighlightDist(5*s),this.updateCanvasOffset()},150)}handleMouseMove(e){const{width:t,height:n,x:i,y:s}=this.parentNodeRect,a=e.clientX-i,o=e.clientY-s;this.mouse.x=a/t*2-1,this.mouse.y=-o/n*2+1,this.mouseScreenPos.set(a,o)}startUpdating(){this.stopUpdating(),this.update()}stopUpdating(){cancelAnimationFrame(this.rafID)}setDragging(e=!0){this.dragging=e}setDataInfo(e){if(!this.dataInfo||this.dataItem==e)return;this.dataItem=e;const{uol:t,uml:n,l:i,type:s,body:a,header:o,nwo:l,pr:h,ma:c,oa:d}=e;let u=c||d;u&&(u=u.replace(" ","T"),u=u.includes("Z")?u:u.concat("-08:00"),u=Date.parse(u)),l&&h&&(this.dataItem.url=`https://github.com/${l}/pull/${h}`),this.dataInfo.setInfo({user_opened_location:t,user_merged_location:n,language:i,name_with_owner:l,pr_id:h,time:u,type:s,body:a,header:o,url:this.dataItem.url})}testForDataIntersection(){const{mouse:e,raycaster:t,camera:n}=this;this.intersects.length=0,function(i,s,a,o,l,h=!1){(o=o||new ra).setFromCamera(i,s);const c=o.intersectObjects(a,h,l);c.length>0&&c[0]}(e,n,this.intersectTests,t,this.intersects),this.intersects.length&&this.intersects[0].object===this.globe.meshFill&&(this.intersects.length=0)}transitionIn(){return new Promise(()=>{this.container.add(this.openPrEntity.mesh),this.container.add(this.mergedPrEntity.mesh)})}handleUpdate(){if(this.monitorFps(),this.clock===null)return;const e=this.clock.getDelta();if(this.controls&&this.controls.update(e),this.visibleIndex+=e*this.indexIncrementSpeed,this.visibleIndex>=this.maxAmount-ei&&(this.visibleIndex=ei),this.openPrEntity&&this.openPrEntity.update(this.visibleIndex),this.mergedPrEntity&&this.mergedPrEntity.update(e,this.visibleIndex),!this.dataInfo)return void this.render();const{raycaster:t,camera:n,mouseScreenPos:i}=this;let s,a=!1;if(this.raycastIndex%this.raycastTrigger==0){if(this.testForDataIntersection(),this.intersects.length){this.radius,this.containerScale;for(let o=0;o<this.intersects.length&&!a;o++){const{instanceId:l,object:h}=this.intersects[o];if(h.name==="lineMesh"){s=this.setMergedPrEntityDataItem(h),a=!0;break}if(h===this.openPrEntity.spikeIntersects&&this.shouldShowOpenPrEntity(l)){s=this.setOpenPrEntityDataItem(l),a=!0;break}if(h.name==="arcticCodeVault"){s={header:"Arctic Code Vault",body:`Svalbard \u2022 Cold storage of the work of 3,466,573 open source developers. For safe keeping.
Learn more \u2192`,type:el,url:"https://archiveprogram.github.com"},this.highlightArcticCodeVault(),a=!0;break}}}a&&s?(this.setDataInfo(s),this.dataInfo.show()):(this.dataInfo.hide(),this.openPrEntity.setHighlightIndex(-9999),this.mergedPrEntity.resetHighlight(),this.resetArcticCodeVaultHighlight(),this.dataItem=null,Pe.isMobile&&(this.mouse={x:-9999,y:-9999}))}this.dragging&&(this.dataInfo.hide(),this.openPrEntity.setHighlightIndex(-9999),this.mergedPrEntity.resetHighlight(),this.resetArcticCodeVaultHighlight()),this.dataInfo.isVisible&&this.dataInfo.update(i,this.canvasOffset),this.raycastIndex++,this.raycastIndex>=this.raycastTrigger&&(this.raycastIndex=0),this.render()}update(){this.handleUpdate(),this.hasLoaded||this.sceneDidLoad(),this.rafID=requestAnimationFrame(this.update)}render(){this.renderer.render(this.scene,this.camera)}shouldShowMergedPrEntity(e,t){const n=e.geometry.attributes.index.array[t];return n>=this.visibleIndex-this.maxIndexDistance&&n<=this.visibleIndex+this.maxIndexDistance}sceneDidLoad(){this.hasLoaded=!0;const e=document.querySelector(".js-webgl-globe-loading");if(!e)return;const t={fill:"both",duration:600,easing:"ease"};this.renderer.domElement.animate([{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],t),e.animate([{opacity:1,transform:"scale(0.8)"},{opacity:0,transform:"scale(1)"}],t).addEventListener("finish",()=>{e.remove()})}setMergedPrEntityDataItem(e){this.mergedPrEntity.setHighlightObject(e),this.openPrEntity.setHighlightIndex(-9999);const t=this.mergedPrEntity.props.data[parseInt(e.userData.dataIndex)];return t.type=Ko,t}shouldShowOpenPrEntity(e){return e>=this.visibleIndex-this.maxIndexDistance&&e<=this.visibleIndex+this.maxIndexDistance}setOpenPrEntityDataItem(e){this.openPrEntity.setHighlightIndex(e),this.mergedPrEntity.resetHighlight();const t=this.openPrEntity.props.data[e];return t.type=$o,t}dispose(){this.stopUpdating(),this.removeListeners(),At.off(ti,this.handlePause),At.off(ni,this.handleResume),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.controls&&this.controls.dispose(),this.globe&&this.globe.dispose(),this.openPrEntity&&this.openPrEntity.dispose(),this.mergedPrEntity&&this.mergedPrEntity.dispose(),this.dataInfo&&this.dataInfo.dispose(),this.scene=null,this.camera=null,this.renderer=null,this.parentContainer=null,this.container=null,this.clock=null,this.mouse=null,this.mouseScreenPos=null,this.raycaster=null,this.paused=null,this.radius=null,this.light0=null,this.light1=null,this.light2=null,this.light3=null,this.shadowPoint=null,this.highlightPoint=null,this.frontPoint=null,this.globe=null,this.dragging=null,this.rotationSpeed=null,this.raycastIndex=null,this.raycastTrigger=null,this.raycastTargets=null,this.intersectTests=null,this.controls=null,this.maxAmount=null,this.maxIndexDistance=null,this.indexIncrementSpeed=null,this.visibleIndex=null,this.openPrEntity=null}}v(ul,"Zl");class dl{constructor(){this.reset()}reset(){clearInterval(this.interval),this.loadInfo={},this.assets={}}load(e,t){return this.reset(),this.progressCallback=t,new Promise(n=>{if(!e.length)return void n(null);const i=[];e.forEach(s=>{Object.prototype.toString.call(s.url)!=="[object Array]"&&(s.url.indexOf(".png")>-1||s.url.indexOf(".jpg")>-1||s.url.indexOf(".jpeg")>-1||s.url.indexOf(".gif")>-1?(this.assets.textures=this.assets.textures||{},i.push(this.loadTexture(s))):s.url.indexOf(".json")>-1&&s.type===0&&(this.assets.data=this.assets.data||{},i.push(this.loadData(s))))}),this.interval=setInterval(this.update,1e3/30),Promise.all(i).then(()=>{n({assets:this.assets,loader:this})})})}loadData(e){this.loadInfo[e.id]={loaded:0,total:0};const t=new XMLHttpRequest;let n=!1;return new Promise((i,s)=>{const a=v(()=>{n=!0,this.assets.data[e.id]=null,this.loadInfo[e.id].loaded=this.loadInfo[e.id].total=1,s(new Error("loadData error"))},"s");t.addEventListener("progress",o=>{this.loadInfo[e.id].loaded=o.loaded,this.loadInfo[e.id].total=o.total}),t.overrideMimeType("application/json"),t.open("GET",e.url,!0),t.onreadystatechange=()=>{t.readyState===4&&t.status===200?(this.assets.data[e.id]=JSON.parse(t.responseText),this.loadInfo[e.id].loaded=this.loadInfo[e.id].total,i(this.assets.data[e.id])):t.status!==404||n||a()},t.onerror=a,t.send()})}loadTexture(e){const t=new Hs;return this.loadInfo[e.id]={loaded:0,total:0},new Promise((n,i)=>{t.load(e.url,s=>{this.loadInfo[e.id].loaded=this.loadInfo[e.id].total,this.assets.textures[e.id]=s,n()},s=>{this.loadInfo[e.id].loaded=s.loaded,this.loadInfo[e.id].total=s.total},s=>{i(s)})})}update(){if(typeof this.progressCallback=="function"){let e=0,t=0;for(const n in this.loadInfo)this.loadInfo[n].loaded&&(e+=this.loadInfo[n].loaded),this.loadInfo[n].total&&(t+=this.loadInfo[n].total);this.progressCallback&&this.progressCallback(e,t)}}dispose(){clearInterval(this.interval),this.interval=null,this.loadInfo=null,this.assets=null,this.progressCallback=null}}v(dl,"Jl");async function pl(r=""){const e=await fetch(r,{method:"GET",mode:"no-cors"});if(e.status!==200)throw new Error(`WebGL Globe: Failed to load data.json (status: ${e.status})`);return e.json()}v(pl,"Ql");class ml{constructor(e){this.init=this.init.bind(this),this.handleVisibilityChange=this.handleVisibilityChange.bind(this),function(t){for(const[n,i]of Object.entries(t))Pe[n]=i}({app:this,env:"production",isMobile:/iPhone|iPad|iPod|Android|BlackBerry|BB10/i.test(navigator.userAgent),pixelRatio:window.devicePixelRatio||1,...e})}loadAssets(){const{basePath:e,imagePath:t}=Pe,n=[{url:`${e}${t}map.png`,id:"worldMap"}],i=new dl;return new Promise((s,a)=>{i.load(n).then(({assets:o})=>{s(o),i.dispose()}).catch(o=>a(o))})}async loadData(){try{const e=await pl(`${Pe.dataPath}data.json`);if(!e||e.length===0)throw new Error("WebGL Globe: data.json response was empty");return e}catch{return await this.loadFallbackData()}}async loadFallbackData(){try{const e=await pl(`${Pe.dataPath}fallback.json`);if(!e||e.length===0)throw new Error("WebGL Globe: fallback.json response was empty");return e}catch(e){throw new Error(e)}}filterData(e){const t=[];for(let s=0;s<e.length;s++){const a=e[s],o=a.gop,l=a.gm;(o||l)&&(a.gop=o||l,a.gm=l||o,a.uol=a.uol||a.uml,a.uml=a.uml||a.uol,a.gop.lat&&a.gop.lon&&a.gm.lat&&a.gm.lon&&(a.oa||a.ma)&&t.splice(Math.floor(Math.random()*t.length),0,a))}const n=t.slice(t.length-ei,t.length),i=t.slice(0,ei);return n.concat(t,i)}trackPageVisibility(){let e,t;document.hidden!==void 0?(e="hidden",t="visibilitychange"):document.msHidden!==void 0?(e="msHidden",t="msvisibilitychange"):document.webkitHidden!==void 0&&(e="webkitHidden",t="webkitvisibilitychange"),this.documentHidden=e,this.visibilityChange=t,document.addEventListener(t,this.handleVisibilityChange,!1)}init(){return new Promise((e,t)=>{this.loadAssets().then(n=>{Pe.assets=n;const{parentNode:i=document.body}=Pe;this.loadData().then(s=>{Pe.data=this.filterData(s),this.webglController=new ul(i),this.webglController.initDataObjects(Pe.data),this.webglController.transitionIn(1.5,.6),this.trackPageVisibility(),e()}).catch(s=>{Nr(),t(s)})}).catch(n=>{t(n)})})}handleVisibilityChange(){document[this.documentHidden]?At.emit(ti):At.emit(ni)}get renderer(){return this.webglController?this.webglController.renderer:null}get canvas(){return this.webglController?this.webglController.renderer.domElement:null}dispose(){document.removeEventListener(this.visibilityChange,this.handleVisibilityChange),this.webglController.dispose(),this.webglController=null,this.visibilityChange=null,this.documentHidden=null,Object.keys(Pe).forEach(e=>{delete Pe[e]})}}v(ml,"Kl");let da;Bt(66),async function(){if(await(document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(s=>{document.addEventListener("DOMContentLoaded",()=>{s()})})),da=document.querySelector(Pi),!da)return;if(!function(){const s=document.createElement("canvas");return(s.getContext("webgl")||s.getContext("webgl2")||s.getContext("experimental-webgl"))instanceof WebGLRenderingContext}())return Nr();let r="webgl-globe/",e="images/";const t=`${r}data/`,n=document.head.querySelector("link[rel=assets]");n===null||n.href.includes("localhost")||n.href==="/"||(r=n.href,e="images/modules/site/home/globe/");const i=new ml({basePath:r,imagePath:e,dataPath:t,parentNode:da,globeRadius:Rr,lineWidth:1.5,spikeRadius:.06});i.init().then(()=>{i.canvas.addEventListener("webglcontextlost",Nr,!1)})}()})()})()}}]);})();

//# sourceMappingURL=3198-af029d1e7b00.js.map