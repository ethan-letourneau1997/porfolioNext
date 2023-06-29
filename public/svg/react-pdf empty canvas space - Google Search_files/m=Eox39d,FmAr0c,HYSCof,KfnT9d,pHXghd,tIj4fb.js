this._s=this._s||{};(function(_){var window=this;
try{
_.m("FmAr0c");
var HXf=function(a){_.on.call(this,a.Ka)};_.A(HXf,_.on);HXf.wb=_.on.wb;HXf.Fa=_.on.Fa;HXf.prototype.q5c=function(){};_.qn(_.a5a,HXf);
_.n();
}catch(e){_._DumpException(e)}
try{
_.m("yGxLoc");
_.IXf=new _.ln(_.b5a);
_.n();
}catch(e){_._DumpException(e)}
try{
_.m("Eox39d");
var KXf=function(a){_.y.call(this,a.Ka);this.wa=a.service.ykf;this.wa.q5c(this.getRoot().el())};_.A(KXf,_.y);KXf.Fa=function(){return{service:{ykf:_.IXf}}};KXf.prototype.oa=function(a){null==_.LXf||_.LXf.k3e(a.data,this)};KXf.prototype.ka=function(){null==_.LXf||_.LXf.eae(this)};_.K(KXf.prototype,"MdxpAb",function(){return this.ka});_.K(KXf.prototype,"VVjTpc",function(){return this.oa});_.Q(_.c5a,KXf);
_.n();
}catch(e){_._DumpException(e)}
try{
_.WRf=new Map;_.XRf=new Map;_.YRf=new _.sm;
}catch(e){_._DumpException(e)}
try{
var $Rf,aSf;_.ZRf=function(a,b){b=void 0===b?!1:b;var c=_.WRf.get(a);if(c){var d=null;c=_.Wa(c);for(var e=c.next();!e.done;e=c.next())d=e.value,_.sk(d.target,d.type,d.callback,b),d=d.target;_.WRf.delete(a);if(b=_.XRf.get(a)){b=_.Wa(b);for(c=b.next();!c.done;c=b.next())c=c.value,c();_.XRf.delete(a)}d&&"_GTL_"in d&&_.Ha(d._GTL_,a)}};_.bSf=function(){$Rf||($Rf=_.YRf.delegate()||new aSf);return $Rf};_.cSf=function(a,b){return _.bSf().dlb(a,b)};
_.RG=function(a,b,c,d,e,f,g,h){return _.bSf().clb(a,b,c,d,e,f,g,h)};_.dSf=function(a,b,c,d){return _.bSf().blb(a,b,c,d)};_.SG=function(a){_.ZRf(a,!1)};$Rf=void 0;aSf=function(){};aSf.prototype.dlb=function(){return"DEFAULT_ID"};aSf.prototype.clb=function(){return"DEFAULT_ID"};aSf.prototype.blb=function(){return"DEFAULT_ID"};aSf.prototype.wBa=function(){return"DEFAULT_ID"};
}catch(e){_._DumpException(e)}
try{
_.w5r=function(){return _.Mc("appbar")};
}catch(e){_._DumpException(e)}
try{
var x5r;x5r=function(a){var b=_.w5r();b&&_.vn.enable(b,"hdtb-ab-o",!a)};
_.C5r=function(a,b,c){var d=this;this.ty=a;this.qF=b;this.callback=c;this.ty&&_.cSf(this.ty,function(){var e=!y5r(d);_.ov([new _.Lm(d.qF,e?"show":"hide")],{triggerElement:d.ty||void 0});var f=_.Mc("tndd");f&&(f.style.webkitTransform="translate3d(0,-"+_.uc(f,"height")+"px,0)");f=_.Mc("htnmenu");var g=_.Mc("htnoverlay");f&&g&&(f.style.webkitTransform="translate3d(0,0,0)",g.style.opacity="0.0",_.vn.remove(document.body,"fxd"));e?d.show():d.hide()});z5r(this);A5r(this);B5r(this,y5r(this))};
_.C5r.prototype.show=function(){var a=this,b=_.il("ibkV0b");if(b){var c=document.querySelector("[jsname=wKal9e]");c&&c.appendChild(b);_.w.nb(b,!0)}this.callback&&this.callback();B5r(this,!0);_.vn.remove(this.qF,"p4DDCd");(0,_.$c)(function(){_.vn.add(a.qF,"yyoM4d");x5r(!1);z5r(a);A5r(a)})};_.C5r.prototype.hide=function(){var a=this;B5r(this,!1);(0,_.$c)(function(){_.vn.remove(a.qF,"yyoM4d");_.vn.add(a.qF,"p4DDCd");x5r(!0);z5r(a);A5r(a);a.ty&&a.ty.focus()});var b=_.il("ibkV0b");b&&_.w.nb(b,!1)};
var y5r=function(a){return _.vn.contains(a.qF,"yyoM4d")},z5r=function(a){var b=_.Mc("botabar");b&&_.w.Id(b)&&(b.style.marginTop=y5r(a)?a.qF.offsetHeight+"px":"0");a=!y5r(a);x5r(a)},A5r=function(a){var b=_.Mc("epbar"),c=_.Mc("slim_appbar");c&&!_.w.Id(c)&&b&&(b.style.marginTop=y5r(a)?10+a.qF.offsetHeight+"px":"10px")},B5r=function(a,b){a.ty&&(_.vn.enable(a.ty,"hdtb-tl-sel",b),a.ty.setAttribute("aria-expanded",String(b)))};
}catch(e){_._DumpException(e)}
try{
_.CXc=function(a){return _.xua.apply(null,arguments)/arguments.length};var FXc;_.DXc=/iPhone|iPod|iPad/;_.EXc=function(){return _.oa(navigator.userAgent,"Android")};FXc=/Mac OS X.+Silk\//;_.wv=_.bta||_.DXc.test(navigator.userAgent)||_.EXc()||FXc.test(navigator.userAgent);_.GXc=window.navigator.msPointerEnabled;_.HXc=_.wv?"touchstart":_.GXc?"MSPointerDown":"mousedown";_.IXc=_.wv?"touchmove":_.GXc?"MSPointerMove":"mousemove";_.JXc=_.wv?"touchend":_.GXc?"MSPointerUp":"mouseup";_.KXc=_.GXc?"MSPointerCancel":"touchcancel";_.LXc=function(a){return a.touches||[a]};
}catch(e){_._DumpException(e)}
try{
var MXc=function(a){this.Rc=a;this.Rc._wect=this;this.oa={};this.ka={};this.wa={}},NXc,OXc,RXc,UXc,WXc,yv,$Xc,aYc,bYc,cYc,dYc;MXc.prototype.Dh=null;MXc.prototype.Aa=function(a,b){void 0==this.oa[a]&&(this.oa[a]=0);this.oa[a]++;for(var c=this.ka[a],d=c.length,e,f=0;f<d;f++)try{c[f](b)}catch(g){e=e||g}this.oa[a]--;if(e)throw e;};NXc=function(a,b){a.wa[b]||(a.wa[b]=(0,_.qg)(a.Aa,a,b));return a.wa[b]};
OXc=function(a,b,c,d){d=!!d;var e=b+":"+(d?"capture":"bubble");a.ka[e]||(a.ka[e]=[],a.Rc.addEventListener(b,NXc(a,e),d));a.ka[e].push(c)};_.PXc=function(a,b,c,d){d=!!d;var e=b+":"+(d?"capture":"bubble");a.ka[e]&&(a.oa[e]&&(a.ka[e]=a.ka[e].slice(0)),c=a.ka[e].indexOf(c),-1!=c&&a.ka[e].splice(c,1),0==a.ka[e].length&&(a.ka[e]=void 0,a.Rc.removeEventListener(b,NXc(a,e),d)))};MXc.prototype.fire=function(a,b){a.type&&(b=a.type+":"+(b?"capture":"bubble"),this.wa[b]&&NXc(this,b)(a))};
_.QXc=function(a){a._wect||new MXc(a);return a._wect};RXc=function(a,b,c){a.addEventListener("DOMFocusIn",function(d){d.target&&"TEXTAREA"==d.target.tagName&&b()},!1);a.addEventListener("DOMFocusOut",function(d){d.target&&"TEXTAREA"==d.target.tagName&&c()},!1)};_.xv=function(a,b,c,d,e){var f=_.QXc(a);OXc(f,b,c,d);e&&RXc(a,function(){OXc(f,b,c,d)},function(){_.PXc(f,b,c,d)})};_.SXc=function(a,b,c,d){return a<<21|b<<14|c<<7|d};_.TXc=function(){return _.oa(navigator.userAgent,"Chrome/")};UXc=/OS (\d+)_(\d+)(?:_(\d+))?/;
_.VXc=function(){var a=UXc.exec(navigator.userAgent)||[];a.shift();return _.SXc.apply(null,a)};WXc=/Chrome\/([0-9.]+)/;_.XXc=function(a){return function(b){b.touches=[];b.targetTouches=[];b.changedTouches=[];b.type!=_.JXc&&(b.touches[0]=b,b.targetTouches[0]=b);b.changedTouches[0]=b;a(b)}};_.YXc=function(a){var b;if(b=_.EXc()&&_.TXc())b=WXc.exec(navigator.userAgent),b=18==+(b?b[1]:"").split(".")[0];return b?new _.Ik(a.clientX,a.pageY-window.scrollY):new _.Ik(a.clientX,a.clientY)};
_.ZXc=function(a){return(_.GXc?[a]:a.changedTouches)||[]};cYc=function(a){if(!(2500<Date.now()-$Xc)){var b=_.YXc(a);if(!(1>b.x&&1>b.y)){for(var c=0;c<yv.length;c+=2)if(25>Math.abs(b.x-yv[c])&&25>Math.abs(b.y-yv[c+1])){yv.splice(c,c+2);return}a.stopPropagation();a.preventDefault();(a=aYc)&&a()}}};dYc=function(a){var b=_.YXc(_.LXc(a)[0]);yv.push(b.x,b.y);window.setTimeout(function(){for(var c=b.x,d=b.y,e=0;e<yv.length;e+=2)if(yv[e]==c&&yv[e+1]==d){yv.splice(e,e+2);break}aYc=void 0},2500)};
_.eYc=function(){void 0===bYc&&(bYc=_.VXc()>=_.SXc(6)||!0);return bYc};_.fYc=function(a,b,c){aYc=c;yv||(document.addEventListener("click",cYc,!0),c=dYc,_.wv||_.GXc||(c=_.XXc(c)),_.xv(document,_.HXc,c,!0,!0),yv=[]);$Xc=Date.now();for(c=0;c<yv.length;c+=2)if(25>Math.abs(a-yv[c])&&25>Math.abs(b-yv[c+1])){yv.splice(c,c+2);break}};
}catch(e){_._DumpException(e)}
try{
var iYc,jYc,mYc;_.gYc=function(){this.oa=[];this.ka=[]};_.hYc=function(a,b,c,d){a.oa.length=a.ka.length=0;a.oa.push(b,d);a.ka.push(c,d)};_.kYc=function(a,b,c,d){var e=a.oa[a.oa.length-2]-b,f=a.ka[a.ka.length-2]-c,g=a.oa,h=a.wa;h&&e&&2<g.length&&0<h^0<e&&g.splice(0,g.length-2);g=a.ka;(h=a.Aa)&&f&&2<g.length&&0<h^0<f&&g.splice(0,g.length-2);iYc(a.oa,d);iYc(a.ka,d);a.oa.push(b,d);a.ka.push(c,d);a.wa=e;a.Aa=f;return jYc(a,b,c,d)};iYc=function(a,b){for(;a.length&&250<b-a[1]||10<a.length;)a.splice(0,2)};
_.lYc=function(a,b,c,d){if(void 0!==b&&void 0!==c&&d)return iYc(a.oa,d),iYc(a.ka,d),jYc(a,b,c,d)};jYc=function(a,b,c,d){b=a.oa.length?(b-a.oa[0])/(d-a.oa[1]):0;c=a.ka.length?(c-a.ka[0])/(d-a.ka[1]):0;b=mYc(a,b);c=mYc(a,c);return new _.Ik(b,c)};mYc=function(a,b){var c=Math.abs(b);5<c&&(c=6>a.ka.length?1:5);return c*(0>b?-1:1)};
}catch(e){_._DumpException(e)}
try{

var nVf,oVf,sVf,wVf;_.HH=function(a,b,c,d){var e=function(f){return c(f.Bf)};_.Rd(a,b,e,d||!1);return new nVf(a,b,e)};_.IH=function(a,b,c){var d="gt"+oVf++;_.WRf.set(d,b);c&&_.XRf.set(d,c);"_GTL_"in a||(a._GTL_=[]);a._GTL_.push(d);return d};_.pVf=function(a){return!a||0===a.x&&0===a.y?0:Math.abs(a.x)>Math.abs(a.y)?0<a.x?6:4:0<a.y?5:3};_.qVf=function(a,b){return 0===b||2>=b&&a%2===b%2?!0:a===b};_.rVf=function(a,b,c,d){a=180*Math.atan2(d-b,c-a)/Math.PI;0>a&&(a+=360);return a};
_.uVf=function(a,b,c,d,e,f,g,h){a=Math.sqrt(sVf(new _.tVf(e,f,g,h)))/Math.sqrt(sVf(new _.tVf(a,b,c,d)));return isNaN(a)?1:isFinite(a)?a:10};nVf=function(a,b,c){this.target=a;this.type=b;this.callback=c};oVf=0;_.tVf=function(a,b,c,d){this.x0=a;this.y0=b;this.x1=c;this.y1=d};_.tVf.prototype.clone=function(){return new _.tVf(this.x0,this.y0,this.x1,this.y1)};_.tVf.prototype.equals=function(a){return this.x0==a.x0&&this.y0==a.y0&&this.x1==a.x1&&this.y1==a.y1};
sVf=function(a){var b=a.x1-a.x0;a=a.y1-a.y0;return b*b+a*a};_.vVf=function(a){return new _.Ik(_.Gk(a.x0,a.x1,.5),_.Gk(a.y0,a.y1,.5))};wVf=function(a,b,c){this.type=a;this.ka=b;this.target=c};_.xVf=function(a,b,c,d,e,f,g){wVf.call(this,4,a,b);this.scale=c;this.rotation=d;this.axis=e;this.x=f;this.y=g};_.A(_.xVf,wVf);_.yVf=function(a,b,c,d,e,f,g,h,l,q){wVf.call(this,3,a,b);this.direction=c;this.touches=d;this.oa=e;this.wa=f;this.x=g;this.y=h;this.velocityX=l;this.velocityY=q;this.Ca=0===c?c:c%2?1:2};_.A(_.yVf,wVf);_.yVf.prototype.Aa=function(){return 1===this.direction%2};_.zVf=function(a,b,c,d){wVf.call(this,1,a,b);this.x=c;this.y=d};_.A(_.zVf,wVf);_.AVf=function(a,b,c,d,e,f){wVf.call(this,a,b,c);this.touches=d;this.x=e;this.y=f};_.A(_.AVf,wVf);
}catch(e){_._DumpException(e)}
try{

var KVf=function(){};KVf.prototype.dlb=function(a,b){var c=[_.HH(a,"click",function(d){b(new _.zVf(d,a,d.screenX,d.screenY))}),_.HH(a,"keydown",function(d){var e=d.which||d.keyCode||d.key,f=a.tagName.toUpperCase();"TEXTAREA"===f||"BUTTON"===f||"INPUT"===f||a.isContentEditable||d.ctrlKey||d.shiftKey||d.altKey||d.metaKey||13!==e&&32!==e&&3!==e||(32===e&&d.preventDefault(),b(d))})];return _.IH(a,c)};
KVf.prototype.clb=function(a,b,c,d,e,f,g){function h(W){W=W.Bf;if(S){B=W.screenX;F=W.screenY;var ia=_.kYc(P,B,F,W.timeStamp);J=_.pVf(ia);_.qVf(J,q)&&b(new _.yVf(W,a,J,1,t,v,B,F,ia.x,ia.y))}}function l(W){W=W.Bf;if(_.qVf(J,q)){_.sk(a,"mousemove",h);_.sk(a,"mouseup",l);_.sk(a,"mouseout",l);var ia=_.lYc(P,B,F,W.timeStamp);d&&d(new _.yVf(W,a,J,1,t,v,W.screenX,W.screenY,ia.x,ia.y));g||_.fYc(t,v)}}var q=e||0,t,v,B,F,J,P=new _.gYc,S=!1;e=[_.HH(a,"mousedown",function(W){t=B=W.screenX;v=F=W.screenY;_.hYc(P,
t,v,W.timeStamp);c&&c(new _.yVf(W,a,0,1,t,v,B,F,0,0));_.Rd(a,"mousemove",h);_.Rd(a,"mouseup",l);_.Rd(a,"mouseout",l)}),_.HH(document.body,"mousedown",function(){S=!0}),_.HH(document.body,"mouseup",function(){S=!1})];return _.IH(a,e)};
KVf.prototype.blb=function(a,b,c,d){function e(P){P=P.Bf;v=P.screenX;B=P.screenY;F=_.rVf(q,t,v,B);var S=_.vVf(new _.tVf(q,t,v,B));c&&c(new _.xVf(P,a,1,0,F,S.x,S.y))}function f(P){P=P.Bf;if(h){var S=P.screenX,W=P.screenY,ia=_.rVf(q,t,S,W),pa=_.vVf(new _.tVf(q,t,S,W));b(new _.xVf(P,a,_.uVf(q,t,v,B,q,t,S,W),ia-F,ia,pa.x,pa.y))}}function g(P){l=!1;_.sk(a,"mousedown",e);_.sk(a,"mousemove",f);_.sk(a,"mouseup",g);_.sk(a,"mouseout",g);if(d){P=P.Bf;var S=P.screenX,W=P.screenY,ia=_.rVf(q,t,S,W),pa=_.vVf(new _.tVf(q,
t,S,W));d(new _.xVf(P,a,_.uVf(q,t,v,B,q,t,S,W),ia-F,ia,pa.x,pa.y))}_.fYc(q,t)}var h=!1,l=!1,q,t,v,B,F,J=[_.HH(a,"click",function(P){q=P.screenX;t=P.screenY;l||(_.Rd(a,"mousedown",e),_.Rd(a,"mousemove",f),_.Rd(a,"mouseup",g),_.Rd(a,"mouseout",g),l=!0)}),_.HH(document.body,"mousedown",function(){h=!0}),_.HH(document.body,"mouseup",function(){h=!1})];return _.IH(a,J)};
KVf.prototype.wBa=function(a,b,c,d,e,f){function g(v){v=v.Bf;t&&b&&b(new _.AVf(6,v,a,1,v.screenX,v.screenY))}function h(v){v=v.Bf;_.sk(a,"mousemove",g);_.sk(a,"mouseup",h);_.sk(a,"mouseout",h);d&&d(new _.AVf(7,v,a,1,v.screenX,v.screenY));f||_.fYc(l,q)}var l,q,t=!1;e=[_.HH(a,"mousedown",function(v){l=v.screenX;q=v.screenY;c&&c(new _.AVf(5,v,a,1,l,q));_.Rd(a,"mousemove",g);_.Rd(a,"mouseup",h);_.Rd(a,"mouseout",h)}),_.HH(document.body,"mousedown",function(){t=!0}),_.HH(document.body,"mouseup",function(){t=
!1})];return _.IH(a,e)};_.tm(_.YRf,KVf);
}catch(e){_._DumpException(e)}
try{
_.m("HYSCof");
var D5r=function(a){this.Ba=_.r(a,8)};_.A(D5r,_.z);D5r.prototype.Ya="Z1JpA";var E5r={D0d:_.C5r},F5r=function(a){_.y.call(this,a.Ka);this.oa=_.Mc("hdtb-tls");this.ka=_.Mc("hdtbMenus");a=_.Mc("pBDccd");var b=_.il("qbyxje");this.ka&&(a||b&&b.offsetParent)&&_.w.setStyle(this.ka,"margin-top","44px");this.oa&&this.ka&&new E5r.D0d(this.oa,this.ka)};_.A(F5r,_.y);F5r.Fa=function(){return{jsdata:{F9f:D5r}}};_.Q(_.a4a,F5r);

_.n();
}catch(e){_._DumpException(e)}
try{

_.Axs=function(a){var b=!0,c=!0;a.scrollWidth<=a.clientWidth?c=b=!1:(0===Math.floor(a.scrollLeft)&&(b=!1),Math.ceil(Math.abs(a.scrollLeft))>=a.scrollWidth-a.clientWidth&&(c=!1));return[b,c]};
}catch(e){_._DumpException(e)}
try{
_.m("KfnT9d");
var Gxs;_.Dxs=[];_.Exs=[];_.Fxs=[];Gxs=function(a){_.y.call(this,a.Ka);var b=this;this.ka=_.wg(function(){return b.getRoot()});this.oa=_.wg(function(){return Array.from(b.ka().Eb().querySelectorAll(".zItAnd"))});for(var c=_.Wa(_.Dxs),d=c.next();!d.done;d=c.next())d=d.value,d(this,a)};_.A(Gxs,_.y);Gxs.Fa=function(){return{}};Gxs.prototype.wa=function(){for(var a=_.Wa(_.Exs),b=a.next();!b.done;b=a.next())b=b.value,b()};
Gxs.prototype.Aa=function(){for(var a=_.Wa(_.Fxs),b=a.next();!b.done;b=a.next())b=b.value,b()};_.K(Gxs.prototype,"NfCDXd",function(){return this.Aa});_.K(Gxs.prototype,"VeAzv",function(){return this.wa});_.Q(_.X7a,Gxs);
_.Dxs.push(function(a){var b=a.ka(),c=b.el();c.addEventListener("mousedown",function(d){function e(){document.removeEventListener("mousemove",h);document.removeEventListener("mouseup",l);B=!1}function f(){e()}function g(){B||(B=!0,document.addEventListener("mousemove",h),document.addEventListener("mouseup",l))}function h(F){var J=q-F.screenX;if(F.currentTarget!==document){if(!v){if(3>Math.abs(J))return;v=!0;document.activeElement!==c&&document.activeElement instanceof HTMLElement&&document.activeElement.blur();
b.addClass("k7Cjob");c.style.cursor="grabbing";c.style.userSelect="none"}c.scrollLeft=t+J}F.preventDefault()}function l(){c.style.cursor="grab";c.style.removeProperty("user-select");b.removeClass("k7Cjob");B=v=!1;e();c.removeEventListener("mouseenter",f);c.removeEventListener("mouseleave",g);c.removeEventListener("mousemove",h);c.removeEventListener("mouseup",l)}var q=d.screenX,t=c.scrollLeft,v=!1,B=!1;c.addEventListener("mouseenter",f);c.addEventListener("mouseleave",g);c.addEventListener("mousemove",
h);c.addEventListener("mouseup",l)})});
(function(){function a(l){var q=h;void 0===l||l||(q*=-1);g&&(q*=-1);b.scroll({behavior:"smooth",left:b.scrollLeft+q})}var b,c,d,e,f,g=!1,h=0;_.Dxs.push(function(l){function q(S){S=void 0===S?!1:S;var W=_.Wa(_.Axs(b)),ia=W.next().value;W=W.next().value;B.toggleClass("KMif8b",ia);F.toggleClass("KMif8b",W);if(J!==ia||P!==W||S)J=ia,P=W,t.toggleClass("KMif8b",ia),v.toggleClass("KMif8b",W)}b=l.ka().Eb();var t=l.Da("ggE0ke"),v=l.Da("xpqF6b");c=t.el();d=v.el();var B=l.Da("dS5Bb"),F=l.Da("HbXMbc"),J=!1,P=
!1;g="rtl"===getComputedStyle(b).direction;h=_.qc(l.getData("suw"),b.clientWidth);f=_.Rd(b,"scroll",function(){q()});e=_.Rd(window,"resize",function(){q(!0)});q();l.zf(function(){_.tk(e);_.tk(f);f=e=null})});_.Exs.push(function(){a(!1);_.pv(c,{userAction:3})});_.Fxs.push(function(){a();_.pv(d,{userAction:3})})})();
(function(){function a(f){for(var g=f.length,h=0;h<g-1&&f[h].classList.contains("MgQdud")&&!f[h].classList.contains("ip7gnf");)h++;return[f[h],h]}function b(f){if(9===f.keyCode){var g=_.Wa(_.Axs(c)),h=g.next().value;g=g.next().value;if(h||g){h=d.oa();g=h.length;if(f.target===c)var l=a(h)[0];else{var q=h.indexOf(f.target);if(-1!==q){if(q===a(h)[1]&&f.shiftKey)return;q+=f.shiftKey?-1:1;0<=q&&q<g&&(l=h[q])}}if(!l){if(f.target===c)return;l=d.oa()[g-1]}f=l.offsetLeft-100;l=f+l.clientWidth+200;g=c.scrollLeft;
h=g+c.clientWidth;f>=g&&l<=h||(f-=g,l>h&&(f=l-h),c.scroll({behavior:"smooth",left:c.scrollLeft+f}))}}}var c,d,e;_.Dxs.push(function(f){d=f;c=d.ka().Eb();e=_.Rd(c,"keydown",b);d.zf(function(){_.tk(e);e=null})})})();
_.n();
}catch(e){_._DumpException(e)}
try{
_.m("pHXghd");
var uVe=function(){_.Ypa.apply(this,arguments)};_.A(uVe,_.Ypa);uVe.prototype.initialize=function(){_.vVe();_.wVe()};_.wVe=function(){};_.vVe=function(){};_.ha().WKb(uVe);
_.vVe=function(){_.Zm(_.Me(_.wWb),_.cXb);_.Zm(_.Me(_.BWb),_.XWb);_.Zm(_.Me(_.SXb),_.XWb)};
_.n();
}catch(e){_._DumpException(e)}
try{
var $Dd,hEd,XDd,YDd,cEd,jEd,dEd,ZDd,gEd,iEd,mEd,aEd,bEd,eEd,fEd,kEd;$Dd=function(){XDd(YDd(),!1);ZDd(!1)};hEd=function(a){if(aEd)bEd.add(a);else{a=YDd(new Set([a]));var b=cEd(),c=b.key,d=b.value;d=dEd(a,d,!0);eEd=function(e){e=YDd(e);d.current.eya=Object.assign(d.current.eya,e);fEd.set(c,d,"h")};aEd=(0,_.Rm)(gEd,100);XDd(a,!0)}};XDd=function(a,b){var c=cEd(),d=c.key;c=c.value;c=dEd(a,c,b);fEd.set(d,c)};
YDd=function(a){var b={};if(a){a=_.Wa(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=iEd.get(c);d&&(b[c]=d())}return b}a=_.Wa(iEd);for(c=a.next();!c.done;c=a.next())d=_.Wa(c.value),c=d.next().value,d=d.next().value,b[c]=d();return b};cEd=function(){var a=_.Zha(_.Yha()),b=a.metadata;a=a.url;b=b?String(b.pushId):a;var c=fEd.get(b);null===c&&(c=fEd.get(a));a=_.La(c)?c:{};return{key:b,value:{current:jEd(a.current),last:jEd(a.last)}}};
jEd=function(a){return a&&"object"===typeof a&&"object"===typeof a.eya&&"number"===typeof a.Ywb?a:{eya:{},Ywb:-1}};dEd=function(a,b,c){b.current.Ywb!==kEd&&(b.last=b.current,b.current={eya:{},Ywb:kEd});b.current.eya=c?Object.assign(b.current.eya,a):a;return b};ZDd=function(a){a=void 0===a?!0:a;kEd++;(0,_.Sm)(aEd);gEd(a)};gEd=function(a){(void 0===a||a)&&eEd&&bEd.size&&eEd(bEd);eEd=null;bEd.clear();aEd=null};_.lEd=function(){try{return _.pl().y}catch(a){return 0}};iEd=new Map;mEd=new Map;aEd=null;
bEd=new Set;eEd=null;fEd=_.Oia("s",{name:"sr"});kEd=_.Qd("performance.timing.navigationStart",_.rl())||_.sg();_.pia.set("ps",{getState:function(a,b,c,d){d||$Dd()},listener:function(){return ZDd()}});_.Rd(_.rl(),"pagehide",$Dd);_.nEd=function(a,b,c){b=_.Rd(b,"scroll",function(){hEd(a)});mEd.set(a,b);iEd.set(a,c);return function(){var d=cEd().value;d=(d.current.Ywb===kEd?d.last.eya:d.current.eya)[a];return void 0!==d?d:null}}("d",document,_.lEd);
}catch(e){_._DumpException(e)}
try{
_.S_g=_.I("Vf3xqc");
}catch(e){_._DumpException(e)}
try{
_.m("tIj4fb");
var T_g=function(a){_.y.call(this,a.Ka);var b=this;this.ka=_.Zk("searchform");this.oa=(this.Ea=(a=_.Mc("promos"))?a:null)?this.Ea.offsetHeight:0;var c=_.Rd(window,"scroll",function(){b.iHb()});this.zf(function(){_.tk(c)});this.Ca=this.getRoot().getData("adhmh").number(52);this.Aa=this.getRoot().getData("adhpt").number(20);this.Ia=this.getRoot().getData("adhth").number(122);this.wa=isNaN(this.oa)?this.Ia:this.Ia+this.oa;this.La=isNaN(this.oa)?this.Aa:this.Aa+this.oa;this.getRoot().el().hasAttribute("data-minidiv-on-page-load")&&
this.iHb()};_.A(T_g,_.y);T_g.Fa=_.y.Fa;_.k=T_g.prototype;_.k.iHb=function(){var a=_.lEd();a>=this.wa?(_.vn.contains(this.ka,"minidiv")||(_.vn.add(this.ka,"minidiv"),_.w.setStyle(this.ka,"position","fixed"),this.notify(_.Oz)),a<=this.wa+this.Ca?_.w.setStyle(this.ka,"top",a-this.wa-this.Ca+"px"):_.w.setStyle(this.ka,"top",0)):_.vn.contains(this.ka,"minidiv")&&(_.vn.remove(this.ka,"minidiv"),_.w.setStyle(this.ka,"top",this.La+"px"),_.w.setStyle(this.ka,"position","absolute"),this.notify(_.Oz));this.cxc()};
_.k.cxc=function(){_.Te(document.body,_.S_g)};_.k.gud=function(){};_.k.fud=function(){};_.k.hud=function(){};_.k.eud=function(){};_.K(T_g.prototype,"npAYtf",function(){return this.eud});_.K(T_g.prototype,"j3bJnb",function(){return this.hud});_.K(T_g.prototype,"jI3wzf",function(){return this.fud});_.K(T_g.prototype,"dFyQEf",function(){return this.gud});_.K(T_g.prototype,"ZaKCbe",function(){return this.cxc});_.K(T_g.prototype,"vo7I2e",function(){return this.iHb});_.Q(_.dZa,T_g);
_.n();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
