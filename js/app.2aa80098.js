(function(e){function t(t){for(var n,o,l=t[0],a=t[1],s=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);p&&p(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,l=1;l<c.length;l++){var a=c[l];0!==i[a]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=a;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"019c":function(e,t,c){e.exports=c.p+"img/exit.847afc9b.svg"},bf35:function(e,t,c){"use strict";c("d3d7")},cd49:function(e,t,c){"use strict";c.r(t);var n,i=c("7a23");c("14d9");(function(e){e[e["Empty"]=0]="Empty",e[e["Red"]=1]="Red",e[e["Green"]=2]="Green",e[e["Yellow"]=4]="Yellow",e[e["Blue"]=8]="Blue",e[e["Orange"]=16]="Orange",e[e["One"]=32]="One",e[e["Two"]=64]="Two",e[e["Three"]=128]="Three",e[e["Four"]=256]="Four",e[e["Five"]=512]="Five",e[e["Six"]=1024]="Six"})(n||(n={}));class r{constructor(){this.colors=[n.Red,n.Blue,n.Orange,n.Green,n.Yellow],this.values=[n.One,n.Two,n.Three,n.Four,n.Five,n.Six],this.generateBag=()=>{const e=[];for(let t=0;t<this.colors.length;t++)for(let c=0;c<10;c++){const c=this.colors[t],n=this.values[Math.floor(6*Math.random())];e.push(n|c)}return this.shuffle(e)},this.shuffleMap=e=>{const t=this.shuffle(this.colors),c=this.shuffle(this.values),i=[];for(let n=0;n<t.length;n++)i[this.colors[n]]=t[n];for(let n=0;n<c.length;n++)i[this.values[n]]=c[n];i[n.Empty]=n.Empty;for(let n=0;n<e.length;n++)e[n]=i[e[n]];return e},this.shuffle=e=>e.slice().sort(()=>Math.random()-.5)}}var o=c("019c"),l=c.n(o),a=c("f584"),s=c.n(a),p=c("ce60"),u=c.n(p);class b{constructor(){this.mode="pick",this.actions=[],this.canPick=e=>"pick"===this.mode&&!this.actions.some(t=>"pick"===t.mode&&t.public===e)}}class d{constructor(e=n.Empty,t=!1){this.type=e,this.placed=t,this.active=!1}}var f=Object(i["h"])({__name:"dice",props:{dice:{}},setup(e){return(e,t)=>(Object(i["j"])(),Object(i["e"])("div",{class:Object(i["i"])(`dice ${e.dice.placed?"":"empty"} ${e.dice.active?"active":""} die-color-${e.dice.type%Object(i["m"])(n).One} die-value-${Math.floor(e.dice.type/Object(i["m"])(n).One)}`)},null,2))}});const h=f;var v=h;class j{markActive(e,t){const c=e.some(e=>e.placed);c?e.forEach((c,i)=>{if(c.active=!1,c.placed)return;const r=this.getNeighbors(e,i);r.every(e=>!e.placed)||(c.type&t)===c.type&&(r.some(e=>(e.type&t)>n.Empty)||(c.active=!0))}):e.forEach((c,i)=>{if((c.type&t)!==c.type)return;const r=this.getNeighbors(e,i);r.some(e=>(e.type&t)>n.Empty)||(c.active=i<5||i>=15||i%5<1||i%5>=4)})}getNeighbors(e,t){const c=[];return t-5>=0&&c.push(t-5),t-1>=0&&t%5!==0&&c.push(t-1),t+1<e.length&&t%5!==4&&c.push(t+1),t+5<e.length&&c.push(t+5),c.map(t=>e[t])}clearActive(e){e.forEach(e=>e.active=!1)}}class m{constructor(){this.public=[],this.private=[],this.central=[]}}const O={class:"main"},g={class:"toolbar"},y=Object(i["f"])("img",{alt:"exit",src:l.a},null,-1),k=[y],w=["onClick"],x={class:"dice-grid board"},_=["onClick"],E=["onClick"],P={class:"toolbar"},M=Object(i["f"])("img",{src:s.a,alt:"confirm"},null,-1),C=[M],S=Object(i["f"])("img",{src:u.a,alt:"undo"},null,-1),T=[S];var F=Object(i["h"])({__name:"grid",props:{map:{}},setup(e){const t=e;const c=new r,o=new j;let l=[];const a=Object(i["k"])(new m),s=Object(i["k"])(new b),p=()=>{l=c.generateBag(),a.central=t.map.map(e=>new d(e)),a.private=l.splice(0,10).map(e=>new d(e,!0)),u()},u=()=>{a.public=l.splice(0,3).map(e=>new d(e,!0)),s.mode="pick",s.actions=[]},f=(e,t)=>{if(!s.canPick(t))return;const c=t?a.public[e]:a.private[e];c.placed&&(c.active=!0,s.actions.push({mode:"pick",public:t,number:e}),s.mode="place",o.markActive(a.central,c.type))},h=e=>{if(!a.central[e].active)return;const t=s.actions[s.actions.length-1];s.actions.push({mode:"place",number:e,public:t.public});const c=t.public?a.public[t.number]:a.private[t.number];a.central[e].placed=!0,a.central[e].type=c.type,c.active=!1,c.placed=!1,c.type=n.Empty,o.clearActive(a.central),s.mode="pick"},y=()=>{s.mode="pick",o.clearActive(a.central);const e=s.actions.pop();if("pick"===e.mode){const t=e.public?a.public[e.number]:a.private[e.number];return void(t.active=!1)}const c=s.actions.pop(),n=c.public?a.public[c.number]:a.private[c.number];n.placed=!0,n.type=a.central[e.number].type,a.central[e.number].placed=!1,a.central[e.number].type=t.map[e.number]};return p(),(e,t)=>(Object(i["j"])(),Object(i["e"])("div",O,[Object(i["f"])("div",g,[Object(i["f"])("div",{class:"btn-exit",onClick:t[0]||(t[0]=()=>p())},k)]),Object(i["f"])("div",{class:Object(i["i"])(["dice-grid",""+(s.canPick(!1)?"":"grid-disabled")])},[(Object(i["j"])(!0),Object(i["e"])(i["a"],null,Object(i["l"])(a.private,(e,t)=>(Object(i["j"])(),Object(i["e"])("div",{key:t,onClick:()=>f(t,!1)},[Object(i["g"])(v,{dice:e},null,8,["dice"])],8,w))),128))],2),Object(i["f"])("div",x,[(Object(i["j"])(!0),Object(i["e"])(i["a"],null,Object(i["l"])(a.central,(e,t)=>(Object(i["j"])(),Object(i["e"])("div",{key:t,onClick:()=>h(t)},[Object(i["g"])(v,{dice:e},null,8,["dice"])],8,_))),128))]),Object(i["f"])("div",{class:Object(i["i"])(["dice-grid",""+(s.canPick(!0)?"":"grid-disabled")])},[(Object(i["j"])(!0),Object(i["e"])(i["a"],null,Object(i["l"])(a.public,(e,t)=>(Object(i["j"])(),Object(i["e"])("div",{key:t,onClick:()=>f(t,!0)},[Object(i["g"])(v,{dice:e},null,8,["dice"])],8,E))),128))],2),Object(i["f"])("div",P,[4===s.actions.length?(Object(i["j"])(),Object(i["e"])("div",{key:0,class:"btn-yes",onClick:t[1]||(t[1]=()=>u())},C)):Object(i["d"])("",!0),s.actions.length>0?(Object(i["j"])(),Object(i["e"])("div",{key:1,class:"btn-no",onClick:t[2]||(t[2]=()=>y())},T)):Object(i["d"])("",!0)])]))}});const A=F;var B=A,$=Object(i["h"])({__name:"app",setup(e){const t=new r,c=t.shuffleMap([256,128,16,64,1024,32,2,1,4,256,0,64,8,128,0,0,0,512,0,0]);return(e,t)=>(Object(i["j"])(),Object(i["c"])(B,{map:Object(i["m"])(c)},null,8,["map"]))}});c("bf35");const G=$;var N=G;Object(i["b"])(N).mount("#app")},ce60:function(e,t,c){e.exports=c.p+"img/undo.313309a4.svg"},d3d7:function(e,t,c){},f584:function(e,t,c){e.exports=c.p+"img/confirm.84f13676.svg"}});
//# sourceMappingURL=app.2aa80098.js.map