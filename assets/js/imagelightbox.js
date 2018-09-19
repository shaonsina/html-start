//
// By Osvaldas Valutis, www.osvaldas.info
// Available for use under the MIT License
//
!function(e){"object"==typeof module&&"object"==typeof module.exports?e(require("jquery"),window,document):e(jQuery,window,document)}(function(e,t,i){"use strict";var n=e("<div/>").attr("class","imagelightbox-loading").append(e("<div/>")),o=e("<button/>",{type:"button",class:"imagelightbox-arrow imagelightbox-arrow-left"}),a=e("<button/>",{type:"button",class:"imagelightbox-arrow imagelightbox-arrow-right"}),r=o.add(a),l=e("<div/>",{class:"imagelightbox-caption",html:"&nbsp;"}),c=e("<a/>",{class:"imagelightbox-close"}),u=e("<div/>",{class:"imagelightbox-overlay"}),s=e("<a/>",{href:"#",class:"imagelightbox-navitem"}),f=e("<div/>",{class:"imagelightbox-nav"}),g=e("<div/>",{class:"imagelightbox-wrapper"}),d=function(){var e=i.body||i.documentElement;return e=e.style,""===e.WebkitTransition?"-webkit-":""===e.MozTransition?"-moz-":""===e.OTransition?"-o-":""===e.transition&&""},h=!1!==d(),p=function(e,t,i){var n={},o=d();n[o+"transform"]="translateX("+t+") translateY(-50%)",n[o+"transition"]=o+"transform "+i+"s linear",e.css(n)},b="ontouchstart"in t,m=t.navigator.pointerEnabled||t.navigator.msPointerEnabled,v=function(e){if(b)return!0;if(!m||void 0===e||void 0===e.pointerType)return!1;if(void 0!==e.MSPOINTER_TYPE_MOUSE){if(e.MSPOINTER_TYPE_MOUSE!==e.pointerType)return!0}else if("mouse"!==e.pointerType)return!0;return!1},x=!1!=!!(i.fullscreenEnabled||i.webkitFullscreenEnabled||i.mozFullScreenEnabled||i.msFullscreenEnabled);e.fn.imageLightbox=function(o){function a(e){return e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),!1}function d(){return i.exitFullscreen?i.exitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitExitFullscreen&&i.webkitExitFullscreen(),!1}function y(){a(i.getElementById(w.id).parentElement)||d()}var w=e.extend({selector:"a[data-imagelightbox]",id:"imagelightbox",allowedTypes:"png|jpg|jpeg|gif",animationSpeed:250,activity:!1,arrows:!1,button:!1,caption:!1,enableKeyboard:!0,fullscreen:!1,gutter:10,offsetY:0,lockBody:!1,navigation:!1,overlay:!1,preloadNext:!0,quitOnEnd:!1,quitOnImgClick:!1,quitOnDocClick:!0,quitOnEscKey:!0},o),k=function(){w.arrows&&D(this),w.navigation&&P(),w.overlay&&T(),w.button&&F(),w.caption&&g.append(l)},E=function(){w.activity&&C(),w.caption&&M()},q=function(){w.activity&&I(),w.arrows&&r.css("display","block")},O=function(){var e=z.index(j)-1;if(e<0){if(!0===w.quitOnEnd)return $(),!1;e=z.length-1}j=z.eq(e),g.trigger("previous.ilb2"),H(-1)},S=function(){var e=z.index(j)+1;if(e>=z.length){if(!0===w.quitOnEnd)return $(),!1;e=0}j=z.eq(e),g.trigger("next.ilb2"),H(1)},C=function(){g.append(n)},I=function(){e(".imagelightbox-loading").remove()},T=function(){g.append(u)},F=function(){c.appendTo(g).on("click.ilb7",function(){return $(),!1})},M=function(){l.html("&nbsp;"),e(j).data("ilb2-caption")?l.html(e(j).data("ilb2-caption")):e(j).find("img").length>0&&l.html(e(j).find("img").attr("alt"))},P=function(){if(z.length){for(var t=0;t<z.length;t++)f.append(s.clone());var i=f.children("a");i.eq(z.index(j)).addClass("active"),g.on("previous.ilb2 next.ilb2",function(){i.removeClass("active").eq(z.index(j)).addClass("active")}),g.append(f),f.on("click.ilb7 touchend.ilb7",function(){return!1}).on("click.ilb7 touchend.ilb7","a",function(){var t=e(this);if(z.eq(t.index()).attr("href")!==e(".imagelightbox").attr("src")){var i=z.eq(t.index());i.length&&(U=z.index(j),j=i,H(t.index()<U?-1:1))}t.addClass("active").siblings().removeClass("active")})}},D=function(){g.append(r),r.on("click.ilb7 touchend.ilb7",function(t){return t.stopImmediatePropagation(),t.preventDefault(),e(this).hasClass("imagelightbox-arrow-left")?O():S(),!1})},R="",z=e([]),j=e(),X=e(),B=0,L=0,N=0,K=!1,U=0,Y=function(e){var t=w.allowedTypes;if(!/^(?!\|)[\w|]+(?!\|)$/.test(t))return!1;var n=function(e){var t,n,o,a=i.createElement("a"),r={};for(a.href=e,t=a.search.replace(/^\?/,"").split("&"),o=0;o<t.length;o++)r[(n=t[o].split("="))[0]]=n[1];return{protocol:a.protocol,host:a.host,hostname:a.hostname,port:a.port,pathname:a.pathname,search:a.search,searchObject:r,hash:a.hash}}(e.attr("href")).pathname;return new RegExp(t,"i").test(n)},_=function(){if(!X.length)return!0;var i=w.caption?l.outerHeight():0,n=e(t).width(),o=e(t).height()-i,a=Math.abs(1-w.gutter/100),r=new Image;r.src=X.attr("src"),r.onload=function(){if(B=r.width,L=r.height,B>n||L>o){var i=B/L>n/o?B/n:L/o;B/=i,L/=i}var l=L*a,c=B*a,u=(e(t).width()-c)/2;X.css({width:c+"px",height:l+"px",left:u+"px"})}},H=function(t){if(K)return!1;if(X.length){var i={opacity:0};h?p(X,100*t-N+"px",w.animationSpeed/1e3):i.left=parseInt(X.css("left"))+100*t+"px",X.animate(i,w.animationSpeed,function(){Q()}),N=0}K=!0,E(),setTimeout(function(){var i=j.attr("href");X=e("<img id='"+w.id+"' />").attr("src",i).on("load.ilb7",function(){var i={opacity:1};if(X.appendTo(g),_(),X.css("opacity",0),h)p(X,-100*t+"px",0),setTimeout(function(){p(X,"0px",w.animationSpeed/1e3)},50);else{var n=parseInt(X.css("left"));i.left=n+"px",X.css("left",n-100*t+"px")}if(X.animate(i,w.animationSpeed,function(){K=!1,q()}),w.preloadNext){var o=z.eq(z.index(j)+1);o.length||(o=z.eq(0)),e("<img />").attr("src",o.attr("href"))}g.trigger("loaded.ilb2")}).on("error.ilb7",function(){q()});var n=0,o=0,a=0;X.on(m?"pointerup.ilb7 MSPointerUp.ilb7":"click.ilb7",function(e){if(e.preventDefault(),w.quitOnImgClick)return $(),!1;if(v(e.originalEvent))return!0;var t=(e.pageX||e.originalEvent.pageX)-e.target.offsetLeft;B/2>t?O():S()}).on("touchstart.ilb7 pointerdown.ilb7 MSPointerDown.ilb7",function(e){if(!v(e.originalEvent)||w.quitOnImgClick)return!0;h&&(a=parseInt(X.css("left"))),n=e.originalEvent.pageX||e.originalEvent.touches[0].pageX}).on("touchmove.ilb7 pointermove.ilb7 MSPointerMove.ilb7",function(e){if(!m&&"pointermove"===e.type||!v(e.originalEvent)||w.quitOnImgClick)return!0;e.preventDefault(),o=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,N=n-o,h?p(X,-N+"px",0):X.css("left",a-N+"px")}).on("touchend.ilb7 touchcancel.ilb7 pointerup.ilb7 pointercancel.ilb7 MSPointerUp.ilb7 MSPointerCancel.ilb7",function(e){if(!v(e.originalEvent)||w.quitOnImgClick)return!0;Math.abs(N)>50?N<0?O():S():h?p(X,"0px",w.animationSpeed/1e3):X.animate({left:a+"px"},w.animationSpeed/2)})},w.animationSpeed+100)},Q=function(){if(!X.length)return!1;X.remove(),X=e()},W=function(t){if(K)return!1;K=!1,j=t,k(),e("body").append(g).addClass("imagelightbox-disable-select"),w.lockBody&&e("body").addClass("imagelightbox-scroll-lock"),g.trigger("start.ilb2"),H(0)},$=function(){if(g.trigger("quit.ilb2"),e("body").removeClass("imagelightbox-disable-select"),w.lockBody&&e("body").removeClass("imagelightbox-scroll-lock"),!X.length)return!1;X.animate({opacity:0},w.animationSpeed,function(){Q(),K=!1,z=e([]),g.remove().find("*").remove()})},A=function(t){function i(){t.filter(function(){return e(this).data("imagelightbox")===R}).filter(function(){return Y(e(this))}).each(function(){z=z.add(e(this))})}t.on("click.ilb7",{set:R},function(t){t.preventDefault(),R=e(t.currentTarget).data("imagelightbox"),i(),z.length<1?$():W(e(this))})};return e(t).on("resize.ilb7",_),e(i).ready(function(){e(i).on("keydown.ilb7",function(e){[13].indexOf(e.which)>-1&&e.preventDefault()}),w.quitOnDocClick&&e(i).on(b?"touchend.ilb7":"click.ilb7",function(t){X.length&&!e(t.target).is(X)&&(t.preventDefault(),$())}),(w.lockBody||w.fullscreen&&x)&&e(i).on("keydown.ilb7",function(e){if(!X.length)return!0;[9,32,38,40].indexOf(e.which)>-1&&e.preventDefault(),[13].indexOf(e.which)>-1&&y()}),w.enableKeyboard&&e(i).on("keyup.ilb7",function(e){if(!X.length)return!0;e.preventDefault(),[27].indexOf(e.which)>-1&&w.quitOnEscKey&&$(),[37].indexOf(e.which)>-1?O():[39].indexOf(e.which)>-1&&S()})}),e(i).off("click",w.selector),A(e(this)),this.addToImageLightbox=function(e){A(e)},this.loadPreviousImage=function(){O()},this.loadNextImage=function(){S()},this.quitImageLightbox=function(){return $(),this},this.startImageLightbox=function(t){t?t.trigger("click.ilb7"):e(this).trigger("click.ilb7")},this}});