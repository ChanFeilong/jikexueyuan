define(["require"],function(n){$(document).ready(function(){$(".index-banner").mouseenter(function(){$(".swiper-container .arrow-left,.swiper-container .arrow-right").css("display","block")}).mouseleave(function(){$(".swiper-container .arrow-left,.swiper-container .arrow-right").css("display","none")}),$(".banner-box .arrow-left").click(function(){var n=($(".banner-box .swiper-wrapper").find("a"),$.isArray(".show")),r=n-1;return 0>r?r=4:(console.log(n),console.log(banner),$("bannner_arr[num]").removeClass("show"))})})});