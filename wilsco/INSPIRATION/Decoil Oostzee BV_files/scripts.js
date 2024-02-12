/*! Auxin WordPress Framework - v2.3.8 (2019-02-24)
 *  Scripts for initializing plugins 
 *  http://averta.net
 *  (c) 2014-2019 averta;
 */
function auxin_is_rtl(){return"undefined"==typeof auxin||"1"!=auxin.is_rtl&&"fa"!=auxin.wpml_lang?!1:!0}function auxin_get_contrast(color){var r,b,g,hsp,a=color;return a.match(/^rgb/)?(a=a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),r=a[1],g=a[2],b=a[3]):(a=+("0x"+a.slice(1).replace(a.length<5&&/./g,"$&$&")),r=a>>16,b=a>>8&255,g=255&a),hsp=Math.sqrt(.299*r*r+.587*g*g+.114*b*b),hsp>200?"black":"white"}function auxinUlikeHeartBeat(e){e.target.classList.add("aux-icon-heart")}function removeAuxinUlikeHeartBeat(e){e.target.classList.remove("aux-icon-heart")}!function($,window,document){"use strict";var distToFooter,footerHeight,$window=$(window),$siteHeader=$("#site-header"),headerStickyHeight=$("#site-header").data("sticky-height")||0,gotoTopBtn=$(".aux-goto-top-btn");$(function(){function scrollToTopOnScrollCheck(){$window.scrollTop()>200?(gotoTopBtn[0].style[window._jcsspfx+"Transform"]="translateY(0)",distToFooter=document.body.scrollHeight-$window.scrollTop()-window.innerHeight-footerHeight,0>distToFooter&&(gotoTopBtn[0].style[window._jcsspfx+"Transform"]="translateY("+distToFooter+"px)")):gotoTopBtn[0].style[window._jcsspfx+"Transform"]="translateY(150px)"}gotoTopBtn.length&&jQuery.fn.scrollTo&&(footerHeight=$("#sitefooter").outerHeight(),gotoTopBtn.on("click touchstart",function(){$window.scrollTo(0,{duration:gotoTopBtn.data("animate-scroll")?1500:0,easing:"easeInOutQuart"})}),gotoTopBtn.css("display","block"),scrollToTopOnScrollCheck(),$window.on("scroll",scrollToTopOnScrollCheck)),$("body").addClass("aux-dom-ready").removeClass("aux-dom-unready"),$.fn.scrollTo&&$('a[href^="#"]:not([href="#"]):not([href^="#elementor-"])').click(function(e){e.preventDefault();var $this=$(this);$this.closest(".woocommerce-tabs").length||(e.stopPropagation(),$window.scrollTo($($this.attr("href")).offset().top-headerStickyHeight,$this.hasClass("aux-jump")?0:1500,{easing:"easeInOutQuart"}),$this.closest(".aux-fs-popup .aux-fs-menu").length&&$("#nav-burger").trigger("click"))});var siteHeaderTopPosition,$adminBar=$("#wpadminbar"),marginFrameThickness=$(".aux-side-frames").data("thickness")||0;if($("#site-header").on("sticky",function(){$adminBar.hasClass("mobile")||window.innerWidth<=600||(siteHeaderTopPosition=0,$adminBar.length&&(siteHeaderTopPosition+=$adminBar.height()),marginFrameThickness&&window.innerWidth>=700&&(siteHeaderTopPosition+=marginFrameThickness),$(this).css("top",siteHeaderTopPosition+"px"))}).on("unsticky",function(){$(this).css("top","")}),$(".aux-search-field, #searchform #s").each(function(){var $this=$(this);$this.parent("form").on("submit",function(e){""===$this.val()&&e.preventDefault()})}),($siteHeader.hasClass("aux-overlay-with-tb")||$siteHeader.hasClass("aux-overlay-header"))&&$siteHeader.hasClass("aux-overlay-with-tb")){var $topBarHeight=$("#top-header").outerHeight();$(".aux-overlay-with-tb").css("top",$topBarHeight+"px")}}),window.auxinSetupLogoSwitcher=function(){if($("body").hasClass("aux-top-sticky")){var $btn,$btns=$("#site-header .aux-btns-box .aux-button"),$default_logo=$(".aux-logo-header .aux-logo-anchor:not(.aux-logo-sticky)"),$sticky_logo=$(".aux-logo-header .aux-logo-anchor.aux-logo-sticky"),has_sticky_logo=$sticky_logo.length;$("#site-header").on("sticky",function(){for(var i=0,l=$btns.length;l>i;i++)$btn=$btns.eq(i),$btn.removeClass("aux-"+$btn.data("colorname-default")).addClass("aux-"+$btn.data("colorname-sticky"));has_sticky_logo&&($default_logo.addClass("aux-logo-hidden"),$sticky_logo.removeClass("aux-logo-hidden"))}).on("unsticky",function(){for(var i=0,l=$btns.length;l>i;i++)$btn=$btns.eq(i),$btn.removeClass("aux-"+$btn.data("colorname-sticky")).addClass("aux-"+$btn.data("colorname-default"));has_sticky_logo&&($default_logo.removeClass("aux-logo-hidden"),$sticky_logo.addClass("aux-logo-hidden"))})}},window.auxinSetupLogoSwitcher()}(jQuery,window,document);for(var UlikeHeart=document.querySelectorAll(".wp_ulike_btn"),i=0;UlikeHeart.length>i;i++)UlikeHeart[i].addEventListener("click",auxinUlikeHeartBeat),UlikeHeart[i].addEventListener("animationend",removeAuxinUlikeHeartBeat);!function($){"use strict";$.fn.AuxinCarouselInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-lightbox-frame").photoSwipe({target:".aux-lightbox-btn",bgOpacity:.8,shareEl:!0}),$scope.find(".aux-lightbox-gallery").photoSwipe({target:".aux-lightbox-btn",bgOpacity:.97,shareEl:!0}),$scope.find(".aux-lightbox-video").photoSwipe({target:".aux-open-video",bgOpacity:.97,shareEl:!0}),$scope.find(".master-carousel-slider").AuxinCarousel({autoplay:!1,columns:1,speed:15,inView:15,autohight:!1,rtl:$("body").hasClass("rtl")}).on("auxinCarouselInit",function(){$scope.find(".aux-lightbox-in-slider").photoSwipe({target:".aux-lightbox-btn",bgOpacity:.8,shareEl:!0})}),$scope.find(".master-carousel").AuxinCarousel({speed:30,rtl:$("body").hasClass("rtl")})}}(jQuery,window,document),function($,window,document){$.fn.AuxinTiltElementInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-tilt-box").tilt({maxTilt:$(this).data("max-tilt"),easing:"cubic-bezier(0.23, 1, 0.32, 1)",speed:$(this).data("time"),perspective:2e3})},$.fn.AuxinFitVideosInit=function($scope){$scope=$scope||$(this),$scope.find("main").fitVids(),$scope.find("main").fitVids({customSelector:'iframe[src^="http://w.soundcloud.com"], iframe[src^="https://w.soundcloud.com"]'})},$.fn.AuxinImageBoxInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-image-box").AuxinImagebox()},$.fn.AuxinBeforeAfterInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-before-after").imagesLoaded(function(){$scope.find(".aux-before-after").each(function(){var $slider=$(this);$slider.twentytwenty({default_offset_pct:$slider.data("offset")||.5,orientation:"horizontal"})})})},$.fn.AuxinParallaxBoxInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-parallax-box").AvertaParallaxBox()},$.fn.AuxinParallaxSectionInit=function($scope){$scope=$scope||$(this);var $target=$scope.hasClass("aux-parallax-section")?$scope:$scope.find(".aux-parallax-section");$target.length&&$target.each(function(){var $parallax_box=$(this);$parallax_box.find(".aux-parallax-section").length||$parallax_box.AvertaParallaxBox({targets:"aux-parallax-piece"})})},$.fn.AuxinMediaElementInit=function(){if("function"==typeof MediaElementPlayer){var settings=window._wpmejsSettings||{};settings.features=settings.features||mejs.MepDefaults.features,settings.features.push("AuxinPlayList"),MediaElementPlayer.prototype.buildAuxinPlayList=function(player){if(player.container.closest(".wp-video-playlist").length){player.container.closest(".aux-mejs-container").length||(player.container.wrap("<div class='aux-mejs-container aux-4-6 aux-tb-1 aux-mb-1'></div>"),player.container.closest(".wp-playlist").addClass("aux-row").find(".wp-playlist-tracks").addClass("aux-2-6 aux-tb-1 aux-mb-1"),new PerfectScrollbar(".wp-playlist-tracks")),player.container.addClass("aux-player-light"),player.options.stretching="none",player.width="100%";var $playlistContainer=player.container.closest(".wp-playlist").find(".wp-playlist-tracks");$playlistContainer.find(".aux-playlist-background").length||$playlistContainer.prepend("<div class='aux-playlist-background'></div>");var $postFormatHeight=$(".aux-primary .content").width();player.height=$postFormatHeight>=1600?720:$postFormatHeight>=768&&1600>$postFormatHeight?480:$postFormatHeight>=480&&768>$postFormatHeight?360:240,$playlistContainer.css("height",player.height)}}}},$.fn.AuxinDynamicDropshadow=function(){var imgFrame,clonedImg,img;if(this instanceof jQuery){if(!this||!this[0])return;img=this[0]}else img=this;img.classList.contains("aux-img-has-shadow")||(imgFrame=document.createElement("div"),clonedImg=img.cloneNode(),clonedImg.classList.add("aux-img-dynamic-dropshadow-cloned"),clonedImg.classList.remove("aux-img-dynamic-dropshadow"),img.classList.add("aux-img-has-shadow"),imgFrame.classList.add("aux-img-dynamic-dropshadow-frame"),img.parentNode.appendChild(imgFrame),imgFrame.appendChild(img),imgFrame.appendChild(clonedImg))},$.fn.AuxinDynamicDropshadowInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-img-dynamic-dropshadow").each(function(){$(this).AuxinDynamicDropshadow()})},$.fn.AuxinScrollBlurImage=function(blurValue,startFrom,opacitySpeed){function getImage($target){var backgroundImage=$target.css("background-image");return $target.addClass("aux-orginal-blured-img"),backgroundImage}function createBluredImage(imgUrl){var bgImgElement=document.createElement("div");return $(bgImgElement).appendTo($this),$(bgImgElement).addClass("aux-blured-img"),bgImgElement.style[prefix+"backgroundImage"]=imgUrl,"auto"!=$this.css("background-size")&&(bgImgElement.style[prefix+"backgroundSize"]=$this.css("background-size")),"0% 0%"!=$this.css("background-position")&&(bgImgElement.style[prefix+"backgroundPosition"]=$this.css("background-position")),"repeat"!=$this.css("background-repeat")&&(bgImgElement.style[prefix+"backgroundRepeat"]=$this.css("background-repeat")),bgImgElement.style[prefix+"filter"]="blur("+blurValue+"px)",$(bgImgElement)}var scrollValue,opacityValue,$this=$(this),prefix=window._jcsspfx||"",clonedImage=getImage($this),bluredImage=createBluredImage(clonedImage),yVisible=startFrom*$this.outerHeight(),remainHeight=$this.outerHeight()-yVisible;$(window).on("scroll",function(){var winBot=$(window).scrollTop();scrollValue=winBot-$this.offset().top-yVisible,scrollValue>0?(opacityValue=scrollValue/remainHeight,opacityValue=Math.min(1,opacityValue*opacitySpeed),bluredImage[0].style[prefix+"opacity"]=1>opacityValue?opacityValue:1):0>scrollValue&&(bluredImage[0].style[prefix+"opacity"]=0)})},$.fn.AuxinScrollBlurImageInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-blur-fade").each(function(){$(this).AuxinScrollBlurImage(15,.3,4)})},$.fn.AuxinOtherElementsInit=function($scope){$scope=$scope||$(this)},$.fn.AuxinLiveTabsInit=function($scope){$scope=$scope||$(this),$scope.find(".widget-tabs .widget-inner").avertaLiveTabs({tabs:"ul.tabs > li",tabsActiveClass:"active",contents:"ul.tabs-content > li",contentsActiveClass:"active",transition:"fade",duration:"500"})},$.fn.AuxinAccordionInit=function($scope){$scope=$scope||$(this),$scope.find(".widget-toggle .widget-inner").each(function(){$(this).avertaAccordion({itemHeader:".toggle-header",itemContent:".toggle-content",oneVisible:$(this).data("toggle")})}),$scope.find(".aux-widget-faq").each(function(){$(this).avertaAccordion({items:".aux-faq-item",itemHeader:".toggle-header",itemContent:".toggle-content",oneVisible:$(this).data("toggle"),expandHashItem:!1})})},$.fn.AuxinTimelineInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-timeline").each(function(){$(this).hasClass("aux-right")?$(this).AuxinTimeline({responsive:{760:"right"}}):$(this).AuxinTimeline()})},$.fn.AuxinCodeHighlightInit=function($scope){$scope=$scope||$(this),"undefined"!=typeof hljs&&$scope.find("pre code").each(function(i,block){hljs.highlightBlock(block)})},$.fn.AuxinLoadMoreInit=function($scope){$scope=$scope||$(this),$scope.find('.widget-container[class*="aux-ajax-type"]').AuxLoadMore()},$.fn.AuxinVideoBoxInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-video-box").AuxinVideobox()},$.fn.AuxinImageInteractionInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-frame-cube").AuxinCubeHover(),$scope.find(".aux-hover-twoway").AuxTwoWayHover()},$.fn.AuxinToggleListInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-togglable").length&&$scope.find(".aux-togglable").AuxinToggleSelected()},$.fn.AuxinMasonryAnimateInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-widget-recent-products-parallax").AuxinMasonryAnimate()}}(jQuery,window,document),function($){"use strict";$.fn.AuxinIsotopeInit=function($scope){$scope=$scope||$(this),$.fn.AuxinIsotopeLayoutInit($scope),$.fn.AuxinIsotopeImageLayoutsInit($scope),$.fn.AuxinIsotopeBigGridInit($scope),$.fn.AuxinIsotopeFAQInit($scope)},$.fn.AuxinIsotopeImageLayoutsInit=function($scope){$scope=$scope||$(this),$.fn.AuxinIsotopeGalleryInit($scope),$.fn.AuxinIsotopeMasonryInit($scope),$.fn.AuxinIsotopeTilesInit($scope)},$.fn.AuxinIsotopeLayoutInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-isotope-layout").AuxIsotope({itemSelector:".aux-iso-item",revealTransitionDuration:600,revealBetweenDelay:50,revealTransitionDelay:0,hideTransitionDuration:300,hideBetweenDelay:0,hideTransitionDelay:0,updateUponResize:!0,transitionHelper:!0})},$.fn.AuxinIsotopeGalleryInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-gallery .aux-gallery-container").AuxIsotope({itemSelector:".gallery-item",justifyRows:{maxHeight:340,gutter:0},masonry:{gutter:0},revealTransitionDuration:600,hideTransitionDuration:600,revealBetweenDelay:70,hideBetweenDelay:40,revealTransitionDelay:0,hideTransitionDelay:0,updateUponResize:!0,transitionHelper:!0,deeplink:!1})},$.fn.AuxinIsotopeTilesInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-tiles-layout").AuxIsotope({itemSelector:".aux-post-tile, .aux-iso-item",layoutMode:"packery",revealTransitionDuration:600,hideTransitionDuration:600,revealBetweenDelay:70,hideBetweenDelay:40,revealTransitionDelay:0,hideTransitionDelay:0,updateUponResize:!0,transitionHelper:!0,packery:{gutter:0}}).on("auxinIsotopeReveal",function(e,items){items.forEach(function(item){item.$element.hasClass("aux-image-box")&&item.$element.AuxinImagebox("update")})})},$.fn.AuxinIsotopeBigGridInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-big-grid-layout").AuxIsotope({itemSelector:".aux-news-big-grid, .aux-iso-item",layoutMode:"packery",revealTransitionDuration:600,hideTransitionDuration:600,revealBetweenDelay:70,hideBetweenDelay:40,revealTransitionDelay:0,hideTransitionDelay:0,updateUponResize:!0,transitionHelper:!0,packery:{gutter:0}}).on("auxinIsotopeReveal",function(e,items){items.forEach(function(item){item.$element.hasClass("aux-image-box")&&item.$element.AuxinImagebox("update")})})},$.fn.AuxinIsotopeMasonryInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-masonry-layout").AuxIsotope({itemSelector:".aux-post-masonry",layoutMode:"masonry",updateUponResize:!0,transitionHelper:!1,transitionDuration:0})},$.fn.AuxinIsotopeFAQInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-isotope-faq").AuxIsotope({itemSelector:".aux-iso-item",revealTransitionDuration:600,hideTransitionDuration:600,revealBetweenDelay:70,hideBetweenDelay:40,revealTransitionDelay:0,hideTransitionDelay:0,updateUponResize:!1,transitionHelper:!0}).on("auxinIsotopeReveal",function(){$scope.find(".aux-iso-item").css({position:""})})}}(jQuery,window,document),function($,window,document){"use strict";$.fn.AuxinPagePreloadAnimationInit=function($scope){function setupPageAnimate(){if((!Modernizr||Modernizr.csstransitions)&&$body.hasClass("aux-page-animation")){var animType=$body.data("page-animation-type");animationConfig=pageAnimationConfig[animType],transitionTarget=$(pageAnimationConfig[animType].eventTarget)[0],transitionTarget.addEventListener("transitionend",pageShowAnimationDone),$('a:not([href^="#"]):not([href=""]), .elementor-template-canvas').AuxinAnimateAndRedirect({scrollFixTarget:"#inner-body",delay:animationConfig.hideDelay,animateIn:"aux-page-show-"+animType,animateOut:"aux-page-hide-"+animType,beforeAnimateOut:"aux-page-before-hide-"+animType})}}function pageShowAnimationDone(e){e.target===transitionTarget&&-1!==e.propertyName.indexOf(animationConfig.propertyWatch)&&($body.addClass("aux-page-animation-done"),$body.trigger("AuxinPageAnimationDone"),"circle"===$body.data("page-animation-type")&&$body.trigger("resize"),transitionTarget.removeEventListener("transitionend",pageShowAnimationDone))}$scope=$scope||$(this);var transitionTarget,animationConfig,$body=($scope.find("#inner-body"),$scope.find("body"));if($body.length){var pageAnimationConfig={fade:{eventTarget:".aux-page-animation-overlay",propertyWatch:"opacity",hideDelay:800,loadingHideDuration:810},circle:{eventTarget:"#inner-body",propertyWatch:"transform",hideDelay:1e3,loadingHideDuration:810},cover:{eventTarget:".aux-page-animation-overlay",propertyWatch:"transform",hideDelay:500,loadingHideDuration:810},slideup:{eventTarget:".aux-page-animation-overlay",propertyWatch:"transform",hideDelay:500,loadingHideDuration:810}},progressbarHideDuration=700;if($body.hasClass("aux-page-preload")){var $pageProgressbar=$scope.find("#pagePreloadProgressbar"),pageLoading=document.getElementById("pagePreloadLoading");$(window).on("load.preload",function(){if($body.data("page-animation")&&Modernizr&&Modernizr.csstransitions?setupPageAnimate():pageLoading&&setTimeout(function(){pageLoading.style.display="none"},810),$body.addClass("aux-page-preload-done"),$pageProgressbar.length){var pageProgressbar=$pageProgressbar[0];pageProgressbar.style.width=pageProgressbar.offsetWidth+"px",$pageProgressbar.removeClass("aux-no-js"),pageProgressbar.style[window._jcsspfx+"AnimationPlayState"]="paused",setTimeout(function(){pageProgressbar.style.width="100%",$pageProgressbar.addClass("aux-hide"),$body.addClass("aux-progressbar-done")},10),setTimeout(function(){pageProgressbar.style.display="none"},progressbarHideDuration)}}),window.onerror=function(){$pageProgressbar.addClass("aux-hide"),$body.addClass("aux-page-preload-done"),$(window).off("load.preload")}}else $(window).unload(function(){$(window).unbind("unload")}),$(window).bind("pageshow",function(event){event.originalEvent.persisted&&window.location.reload()}),setupPageAnimate()}},$.fn.AuxinPageCoverAnimation=function(){var posTop,$this=$(this),$window=$(window),fired=!1,scrollLock=!0;$this.closest("body").addClass("aux-page-cover"),$window.on("scroll",function(){scrollLock&&!fired?($window.scrollTo(0),$("body").addClass("aux-page-cover-off")):window.elementorFrontendConfig&&0===$window.scrollTop()&&window.elementorFrontendConfig.isEditMode&&$("body").removeClass("aux-page-cover-off")}),$this.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){"transform"===e.originalEvent.propertyName&&(posTop=$this.offset().top,0!==posTop?(fired=!0,scrollLock=!1):(fired=!1,scrollLock=!0))}),$this.find(".aux-page-cover-footer-text a").on("click",function(){$("body").addClass("aux-page-cover-off")})},$.fn.AuxinPageCoverAnimationInit=function($scope){$scope=$scope||$(this),$scope.hasClass("aux-page-cover-wrapper")?$scope.AuxinPageCoverAnimation():$scope.find(".aux-page-cover-wrapper").each(function(){$(this).AuxinPageCoverAnimation()})},$.fn.AuxinSetOnApearInit=function(){if($.fn.appearl){var appearTo,appearBuffer=0;$.fn.setOnAppear=function(once,delay){return $(this).each(function(index,element){var $element=$(element);$element.appearl(),$element[once?"one":"on"]("appear",function(){delay&&!$element.hasClass("aux-appeared-once")&&(element.style.transitionDelay=appearBuffer++*delay+"ms",appearTo=setTimeout(function(){appearBuffer=0},10)),$element.addClass("aux-appeared-once"),$element.addClass("aux-appeared").removeClass("aux-disappeared")}),once||$element.on("disappear",function(){$element.removeClass("aux-appeared").addClass("aux-disappeared")})})}}},$.fn.AuxinAppearTransitionsInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-check-appear, .aux-appear-watch:not(.aux-appear-repeat)").appearl({offset:"150px",insetOffset:"0px"}).one("appear",function(){this.classList.add("aux-appeared"),this.classList.add("aux-appeared-once")}),$scope.find(".aux-check-appear, .aux-appear-watch.aux-appear-repeat").appearl({offset:"150px",insetOffset:"0px"}).on("appear disappear",function(event){"disappear"===event.type?(this.classList.remove("aux-appeared"),this.classList.add("aux-disappeared")):(this.classList.remove("aux-disappeared"),this.classList.add("aux-appeared"))})},$.fn.AuxinAppearAnimationsInit=function($scope){$scope=$scope||$(this);var $target=$scope.hasClass("aux-appear-watch-animation")?$scope:$scope.find(".aux-appear-watch-animation");$target.length&&($("body").hasClass("aux-page-animation")?$("body").on("AuxinPageAnimationDone",function(){$target.appearl({offset:"200px",insetOffset:"0px"}).one("appear",function(){this.classList.add("aux-animated"),this.classList.add("aux-animated-once")})}):$target.appearl({offset:"200px",insetOffset:"0px"}).one("appear",function(){this.classList.add("aux-animated"),this.classList.add("aux-animated-once")}))}}(jQuery,window,document),function($,window,document,undefined){$.fn.AuxinPageLayoutInit=function($scope){$scope=$scope||$(this),$(function(){$scope.find(".aux-sticky-side > .entry-side, .aux-sticky-piece").AuxinStickyPosition()});var isResp=$scope.find("body").hasClass("aux-resp");$scope.find(".aux-float-layout").AuxinFloatLayout({autoLocate:isResp})},$.fn.AuxinMatchHeightInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-match-height > .aux-col").matchHeight()},$.fn.AuxinPageHeaderLayoutInit=function($scope){$scope=$scope||$(this);var $window=$(window),$siteHeader=$scope.find("#site-header"),headerStickyHeight=$scope.find("#site-header").data("sticky-height")||0;if($siteHeader.find(".secondary-bar").length&&(headerStickyHeight+=35),$scope.find("body").hasClass("aux-top-sticky")&&$scope.find("#site-header").AuxinStickyPosition(),$scope.find(".page-header.aux-full-height").AuxinFullscreenHero(),jQuery.fn.scrollTo){var $scrollToTarget=$scope.find("#site-title");$scope.find(".aux-title-scroll-down .aux-arrow-nav").click(function(){var target=$scrollToTarget.offset().top+$scrollToTarget.height()-headerStickyHeight;$window.scrollTo(target,{duration:1500,easing:"easeInOutQuart"})})}},$.fn.AuxinModernForm=function($scope){$scope=$scope||$(this);var groupClass=".aux-input-group",focusClass="aux-focused",$allFields=$scope.find(groupClass+" input ,"+groupClass+" textarea");$allFields.val()&&$allFields.each(function(){$scope.val()&&$scope.parents(groupClass).addClass(focusClass)}),$allFields.on("focus",function(){$(this).parents(groupClass).addClass(focusClass)}).on("blur",function(){""===$(this).val()&&$(this).parents(groupClass).removeClass(focusClass)}),$scope.find("input, textarea").placeholder()},$.fn.AuxinModernFormInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-modern-form").each(function(){$(this).AuxinModernForm()})},$.fn.AuxinDropdownEffect=function($scope){$basketWrapper=$scope||$(this);var $dropHover=$basketWrapper.find(".aux-action-on-hover"),dropAction="aux-cart-display-dropdown",$dropdownWrapper=$basketWrapper.find(".aux-card-dropdown");if($(window).on("load resize",function(){if($dropdownWrapper.length){var offsetRight=$dropdownWrapper.offset().left+$dropdownWrapper.outerWidth();offsetRight>$(window).width()&&!$dropdownWrapper.hasClass("aux-card-dropdown-resp")?$dropdownWrapper.addClass("aux-card-dropdown-resp"):$dropdownWrapper.removeClass("aux-card-dropdown-resp")}}),$dropHover.length)$dropHover.mouseover(function(){$basketWrapper.addClass(dropAction)}),$basketWrapper.mouseleave(function(){$basketWrapper.removeClass(dropAction)});else{var $dropClick=$basketWrapper.find(".aux-action-on-click");$dropClick.unbind("mouseover"),$basketWrapper.unbind("mouseleave"),$dropClick.click(function(e){e.preventDefault(),$basketWrapper.addClass(dropAction)}),$(document).click(function(e){$(e.target).closest($basketWrapper).length||$basketWrapper.removeClass(dropAction)})}},$.fn.AuxinDropdownEffectInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-top-header .aux-cart-wrapper, .site-header-section .aux-cart-wrapper, .aux-cart-element").each(function(){$(this).AuxinDropdownEffect()})},$.fn.AuxinCartCanvasInit=function($scope){function toggleOffcanvasBasket(){$basketContainer.toggleClass("aux-open"),$scope.toggleClass("aux-offcanvas-overlay"),isClosed=!isClosed}$scope=$scope||$(this);var $headerElement=$scope.find(".site-header-section"),$cartDropdown=$headerElement.find(".aux-card-dropdown"),$burgerBasket=$headerElement.find(".aux-shopping-basket"),$basketContainer=$scope.find("#offcart"),isClosed=!0;$cartDropdown.clone().appendTo($basketContainer.find(".aux-offcart-content")),$cartDropdown.hasClass("aux-card-dropdown-dark")&&$basketContainer.addClass("aux-offcanvas-dark"),$basketContainer.find(".aux-card-dropdown").removeClass("aux-phone-off"),$burgerBasket.click(toggleOffcanvasBasket),$basketContainer.find(".aux-close").click(toggleOffcanvasBasket),$(window).on("load resize",function(){window.innerWidth>767?($basketContainer.hide(),isClosed||$scope.removeClass("aux-offcanvas-overlay")):($basketContainer.show(),isClosed||$scope.addClass("aux-offcanvas-overlay"))})},$.fn.AuxinDropDownSelect=function($scope){function ClassCheck(){$DropDown.hasClass("aux-active")?$DropDown.removeClass("aux-active"):$DropDown.addClass("aux-active")}function InsertText(){var $ItemLabel=$(this).text();$FilterBy.find(".aux-filter-name").html($ItemLabel),ClassCheck()}$scope=$scope||$(this),$this=$scope.hasClass("aux-dropdown-filter")?$scope:$scope.find(".aux-dropdown-filter");var $DropDown=$this.find("ul"),$FilterBy=$this.find(".aux-filter-by"),$AllOptions=Array.from($DropDown.children("li"));if($FilterBy.click(function(){ClassCheck()}),!$this.attr("data-insert-text"))for(var i=0;$AllOptions.length>i;i++)$AllOptions[i].addEventListener("click",InsertText);window.addEventListener("click",function(e){e.target.className!=$FilterBy.attr("class")&&e.target.className!=$FilterBy.find(".aux-filter-name").attr("class")&&$DropDown.hasClass("aux-active")&&$DropDown.removeClass("aux-active")})},$.fn.AuxinDropDownSelectInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-filters.aux-dropdown-filter").each(function(){$(this).AuxinDropDownSelect()})},$.fn.AuxinTriggerResize=function($scope){$scope=$scope||$(window),$scope.trigger("resize")},$.fn.AuxinFeaturedColor=function($scope){$scope=$scope||$(this),$scope.find(".aux-featured-color").each(function(){var featuredColor=$(this).data("featured-color");""!=featuredColor&&$(this).css({"background-color":featuredColor,color:auxin_get_contrast(featuredColor)})})},$.fn.AuxinScrollScale=function(start,target,startScale,endScale){var scrollValue,elBot,scaleValue,$el=($(this),$(start)),$target=$(target),$window=$(window),endScale=endScale||1,targetHeight=$target.outerHeight();$window.on("scroll",function(){scrollValue=$window.height()+$window.scrollTop(),elBot=$el.offset().top+$el.outerHeight(),scrollValue>elBot&&(scrollValue=(scrollValue-elBot)/targetHeight,scaleValue=startScale-scrollValue*(startScale-endScale),endScale>scaleValue&&($target[0].style[window._jcsspfx+"Transform"]="scale("+scaleValue+")"))})},$.fn.AuxinScrollScaleInit=function($scope){$scope=$scope||$(this),$scope.find(".aux-bs-get-started").each(function(){$(this).AuxinScrollScale(".aux-bs-footer-scale",".aux-subfooter .aux-wrapper",.94,1)})},window.auxinToggleOverlayContainer=function($overlay,close,animDuration){var anim=$overlay.data("anim"),overlay=$overlay[0],animDuration=animDuration||800;anim&&anim.stop(!0),close?($overlay.css({opacity:0,display:"block"}),overlay.style[window._jcsspfx+"Transform"]="perspective(200px) translateZ(30px)",anim=CTween.animate($overlay,animDuration,{transform:"none",opacity:1},{ease:"easeOutQuart"})):anim=CTween.animate($overlay,animDuration/2,{transform:"perspective(200px) translateZ(30px)",opacity:0},{ease:"easeInQuad",complete:function(){$overlay.css("display","none")}}),$overlay.data("anim",anim)},$.fn.AuxinMobileMenuInit=function($scope){function toggleExpnadableMenu(){$burgerIcon.toggleClass("aux-close"),anim&&anim.stop(!0),isClosed?anim=CTween.animate($menuContainer,animDuration,{height:$menu.outerHeight()+"px"},{ease:"easeInOutQuart",complete:function(){$menuContainer.css("height","auto")}}):($menuContainer.css("height",$menu.outerHeight()+"px"),anim=CTween.animate($menuContainer,animDuration,{height:0},{ease:"easeInOutQuart"})),isClosed=!isClosed}function toggleOffcanvasMenu(){$burgerIcon.toggleClass("aux-close"),$menuContainer.toggleClass("aux-open"),isClosed=!isClosed}function toggleOverlayMenu(){$burgerIcon.toggleClass("aux-close"),isClosed&&$menuContainer.show(),auxinToggleOverlayContainer($menuContainer,isClosed),isClosed=!isClosed}function closeOnEsc(toggleFunction){$(document).keydown(function(e){27!=e.keyCode||isClosed||toggleFunction()})}$scope=$scope||$(this);{var anim,$menuContainer,$burger=$scope.find("#nav-burger"),$burgerIcon=$burger.find(">.aux-burger"),isClosed=!0,animDuration=600,$window=$(window),$menu=$scope.find("header .aux-master-menu");$menu.find('.aux-menu-item > a[href^="#"]')}switch($burger.data("target-panel")){case"toggle-bar":$menuContainer=$scope.find("header .aux-toggle-menu-bar"),$burger.click(toggleExpnadableMenu);break;case"offcanvas":$menuContainer=$scope.find("#offmenu"),$burger.click(toggleOffcanvasMenu),$menuContainer.find(".aux-close").click(toggleOffcanvasMenu);{var activeWidth=$menu.data("switch-width");$menuContainer.hasClass("aux-pin-right")?"right":"left"}activeWidth!==undefined&&$window.on("resize",function(){window.innerWidth>activeWidth?$menuContainer.hide():$menuContainer.show()}),closeOnEsc(toggleOffcanvasMenu);break;case"overlay":var activeWidth=$menu.data("switch-width"),oldSkinClassName=$menu.attr("class").match(/aux-skin-\w+/)[0];$menuContainer=$scope.find("#fs-menu-search"),$burger.click(toggleOverlayMenu),$menuContainer.find(".aux-panel-close").click(toggleOverlayMenu);var checkForHide=function(){window.innerWidth>activeWidth?($menuContainer.hide(),$menu.addClass(oldSkinClassName)):(isClosed||$menuContainer.show(),$menu.removeClass(oldSkinClassName))};activeWidth!==undefined&&(checkForHide(),$window.on("resize",checkForHide)),closeOnEsc(toggleOverlayMenu)}},$.fn.AuxinOverlaySearchInit=function($scope){function toggleOverlaySearch(){auxinToggleOverlayContainer(overlaySearchContainer,overlaySearchIsClosed),overlaySearchIsClosed=!overlaySearchIsClosed,overlaySearchIsClosed||searchField.focus()}$scope=$scope||$(this);var overlaySearchIsClosed=!0,overlaySearchContainer=$scope.find("#fs-search"),searchField=overlaySearchContainer.find('input[type="text"]');$scope.find(".aux-overlay-search").click(toggleOverlaySearch),overlaySearchContainer.find(".aux-panel-close").click(toggleOverlaySearch),$(document).keydown(function(e){27!=e.keyCode||overlaySearchIsClosed||toggleOverlaySearch()})},$.fn.AuxinMenuAutoSwitchInit=function($scope){$scope=$scope||$(this);var isResp=$("body").hasClass("aux-resp");!isResp&&$scope.find(".aux-master-menu").data("switch-width")<7e3&&$scope.find(".aux-master-menu").data("switch-width",0),$scope.find(".aux-fs-popup").hasClass("aux-no-indicator")?$scope.find(".aux-master-menu").mastermenu({useSubIndicator:!1,addSubIndicator:!1}):$("body").hasClass("aux-vertical-menu")?$scope.find(".aux-master-menu").mastermenu({keepSubmenuInView:!1}):$scope.find(".aux-master-menu").mastermenu()}}(jQuery,window,document),function($){function updateSidebarsHeight(){screenWidth=window.innerWidth;var $content=$(".aux-primary"),$sidebars=$(".aux-sidebar"),max_height=$(".aux-sidebar .sidebar-inner").map(function(){return $(this).outerHeight()}).get();if(max_height=Math.max.apply(null,max_height),max_height=Math.max($content.outerHeight(),max_height),$sidebars.height(screenWidth>=breakpoint_tablet?max_height:"auto"),breakpoint_desktop_plus>=screenWidth){for(original in layout_class_names)if($main_content.hasClass(original))return original_page_layout=original,void $main_content.removeClass(original).addClass(layout_class_names[original])}else""!==original_page_layout&&($main_content.removeClass("left-sidebar").removeClass("right-sidebar").addClass(original_page_layout),original_page_layout="")}var $_window=$(window),$body=$("body"),screenWidth=$_window.width(),$main_content=$("#main"),breakpoint_tablet=768,breakpoint_desktop_plus=1140,original_page_layout="",layout_class_names={"right-left-sidebar":"right-sidebar","left-right-sidebar":"left-sidebar","left2-sidebar":"left-sidebar","right2-sidebar":"right-sidebar"};if(window.instagramfeed){var _run=instagramfeed.prototype.run;instagramfeed.prototype.run=function(){var $target=$(this.options.target);
if($target.parents(".aux-sidebar").length>0){var _after=this.options.after;this.options.after=function(){_after.apply(this,arguments),$target.find("img").one("load",updateSidebarsHeight)}}_run.apply(this,arguments)}}$body.data("framed")&&$_window.on("debouncedresize",function(){$body.toggleClass("aux-framed",$_window.width()>700)}),$body.hasClass("aux-sticky-footer")&&$_window.on("debouncedresize",function(){var marginFrameThickness=$body.hasClass("aux-framed")?$(".aux-side-frames").data("thickness"):0,$footer=$(".aux-site-footer"),$subfooter=$(".aux-subfooter"),$subfooterBar=$(".aux-subfooter-bar"),footerHeight=$footer.is(":visible")?$footer.outerHeight():0;subfooterHeight=$subfooter.is(":visible")?$subfooter.outerHeight():0,subfooterBarHeight=$subfooterBar.is(":visible")?$subfooterBar.outerHeight():0,breakpoint_tablet>=screenWidth?($("body").removeClass("aux-sticky-footer"),$("#main").css("margin-bottom",""),$footer.css("bottom"),$subfooter.css("bottom",""),$subfooterBar.css("bottom","")):($body.hasClass("aux-sticky-footer")||$("body").addClass("aux-sticky-footer"),$("#main").css("margin-bottom",footerHeight+subfooterHeight+subfooterBarHeight),$footer.css("bottom",marginFrameThickness),$subfooter.css("bottom",footerHeight+marginFrameThickness),$subfooterBar.css("bottom",footerHeight+subfooterHeight+marginFrameThickness))}),$_window.on("debouncedresize",updateSidebarsHeight).trigger("debouncedresize"),$(document).on("lazyloaded",function(){$_window.trigger("resize")})}(jQuery),function($,window){"use strict";$.fn.AuxinJsSocialsInit=function($scope){$scope=$scope||$(this);var $shareButtons=$scope.find(".aux-tooltip-socials"),mainWrapperClass="aux-tooltip-socials-container",tooltipWrapperClass="aux-tooltip-socials-wrapper";if($shareButtons.length){for(var i=0,l=$shareButtons.length;l>i;i++)$shareButtons.eq(i).on("click",function(e){var $this=$(this);if(e.preventDefault(),e.stopPropagation(),!$this.parent("."+mainWrapperClass).length){$this.wrap("<div class='"+mainWrapperClass+"'></div>");var $container=$this.parent("."+mainWrapperClass);$container.append("<div class='"+tooltipWrapperClass+"'></div>"),$container.children("."+tooltipWrapperClass).jsSocials({shares:[{share:"facebook",label:"Facebook",logo:"auxicon-facebook"},{share:"twitter",label:"Tweet",logo:"auxicon-twitter"},{share:"googleplus",label:"Google Plus",logo:"auxicon-googleplus"},{share:"pinterest",label:"Pinterest",logo:"auxicon-pinterest"},{share:"linkedin",label:"LinkedIn",logo:"auxicon-linkedin"},{share:"stumbleupon",label:"Stumbleupon",logo:"auxicon-stumbleupon"},{share:"whatsapp",label:"WhatsApp",logo:"auxicon-whatsapp"},{share:"pocket",label:"Pocket",logo:"auxicon-pocket"},{share:"email",label:"Email",logo:"auxicon-email"},{share:"telegram",label:"Telegram",logo:"auxicon-paperplane"}],shareIn:"blank",showLabel:!1})}$this.parent("."+mainWrapperClass).addClass("aux-tip-open").removeClass("aux-tip-close")});$(window).on("click",function(){$scope.find("."+mainWrapperClass).removeClass("aux-tip-open").addClass("aux-tip-close")})}}}(jQuery,window,document),function($,window,document){window.AuxinInitPageModules=function($scope){$scope=$scope||$(document),$.fn.AuxinSetOnApearInit($scope),$.fn.AuxinJsSocialsInit($scope),$.fn.AuxinPageHeaderLayoutInit($scope),$.fn.AuxinPagePreloadAnimationInit($scope),$.fn.AuxinPageCoverAnimationInit($scope),$.fn.AuxinDropdownEffectInit($scope),$.fn.AuxinCartCanvasInit($scope),$.fn.AuxinDropDownSelectInit($scope),$.fn.AuxinFeaturedColor($scope),$.fn.AuxinScrollScaleInit($scope),$.fn.AuxinMatchHeightInit($scope),$.fn.AuxinPageLayoutInit($scope),$.fn.AuxinMobileMenuInit($scope),$.fn.AuxinMenuAutoSwitchInit($scope),$.fn.AuxinOverlaySearchInit($scope)},window.AuxinInitElements=function($scope){$scope=$scope||$(document),$.fn.AuxinTiltElementInit($scope),$.fn.AuxinFitVideosInit($scope),$.fn.AuxinImageBoxInit($scope),$.fn.AuxinBeforeAfterInit($scope),$.fn.AuxinCarouselInit($scope),$.fn.AuxinModernFormInit($scope),$.fn.AuxinOtherElementsInit($scope),$.fn.AuxinAppearTransitionsInit($scope),$.fn.AuxinAppearAnimationsInit($scope),$.fn.AuxinDynamicDropshadowInit($scope),$.fn.AuxinScrollBlurImageInit($scope)},window.AuxinInitElementsOnReady=function($scope){$scope=$scope||$(document),$.fn.AuxinIsotopeInit($scope),$.fn.AuxinLiveTabsInit($scope),$.fn.AuxinAccordionInit($scope),$.fn.AuxinTimelineInit($scope),$.fn.AuxinCodeHighlightInit($scope),$.fn.AuxinLoadMoreInit($scope),$.fn.AuxinVideoBoxInit($scope),$.fn.AuxinImageInteractionInit($scope),$.fn.AuxinToggleListInit($scope),$.fn.AuxinMasonryAnimateInit($scope),$.fn.AuxinMediaElementInit($scope),$.fn.AuxinParallaxBoxInit($scope),$.fn.AuxinParallaxSectionInit($scope)},window.AuxinInitAllModules=function($scope){$scope=$scope||$(document),AuxinInitPageModules($scope),AuxinInitElements($scope),AuxinInitElementsOnReady($scope)},AuxinInitPageModules(),AuxinInitElements(),$(function(){AuxinInitElementsOnReady()})}(jQuery,window,document),function($,window){var $vcWindow,$__window=$(window);"undefined"!=typeof wp&&"undefined"!=typeof wp.customize&&"undefined"!=typeof wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){AuxinInitAllModules($("body"))}),$__window.on("vc_reload",function(){if($vcWindow=$("#vc_inline-frame",window.parent.document).contents().find(".vc_element"),AuxinInitAllModules($vcWindow),"undefined"!=typeof MediaElement&&$vcWindow.find("video,audio").mediaelementplayer(),"undefined"!=typeof sbi_js_exists&&sbi_init(),"undefined"!=typeof fjgwpp_galleriesInit_functions)for(var i in fjgwpp_galleriesInit_functions)fjgwpp_galleriesInit_functions[i]();$__window.trigger("resize")})}(jQuery,window,document);
//# sourceMappingURL=scripts.min.map