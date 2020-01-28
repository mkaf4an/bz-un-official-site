$(function(){

// ---------------左上ロゴの拡大縮小---------------

  $(window).scroll(function(){
    if($(window).scrollTop() > 60) {
      $("#header-logo-s").fadeIn();
      $("#header-logo").fadeOut();
    }else{
      $("#header-logo-s").fadeOut();
      $("#header-logo").fadeIn();
    }
  });

// ---------------/左上ロゴの拡大縮小---------------

// ---------------右下スクロールボタンの表示非表示---------------
// ---------------変数は最下段に定義---------------

if(window.matchMedia("(min-width: 600px)").matches){
  $(window).scroll(function(){
    if($(window).scrollTop() > 430 && $(window).scrollTop() < bottomBtnHide) {
      $(".bottom-btn").show();
    }else{
      $(".bottom-btn").hide();
    }
  });
}

// ---------------/右下スクロールボタンの表示非表示---------------

// ---------------モーダル表示非表示---------------

$("#link-solo").hover(
    function(){
      $("#solo-modal").show();
    },
    function(){
      $("#solo-modal").hide();
    }
  )

  $("#link-sns").hover(
    function(){
      $("#sns-modal").show();
    },
    function(){
      $("#sns-modal").hide();
    }
  )

// ---------------/モーダル表示非表示---------------

// ---------------resスライドメニュー表示ー---------------

  $("#menu-bar").click(function(){
    $("#header-left, #menu-close-btn, #header-right").show();
    $("#header-left, #header-right").animate({
      "right" : 0
    }, 300);
    $("#slides li").css("opacity", 0.3);
  })

  $("#menu-close-btn").click(function(){
    $("#header-left, #header-right").animate({
      "right" : "-280px"
    }, 300);
    $("#slides li").css("opacity", 1);
  })

// ---------------/resスライドメニュー表示ー---------------

// ---------------スライド切替---------------

$("#slides-wrapper #slide-area #slides .slide").hide();
$("#slides-wrapper #slide-area #slides .slide:first").addClass("active").show();

var $fade_speed = 500;

function slideChange(){
  var $activeSlide = $("#slides-wrapper #slide-area #slides .slide.active");
  var activeIndex = $("#slides-wrapper #slide-area #slides .slide").index($(".active"));
  var $nextSlide = $activeSlide.next();
  if(activeIndex == $("#slides-wrapper #slide-area #slides .slide").length - 1) {
    $nextSlide = $("#slides-wrapper #slide-area #slides .slide:first")
  }
  $activeSlide.fadeOut($fade_speed).removeClass("active");
  $nextSlide.fadeIn($fade_speed).addClass("active");
}

var slideTimer;
var $interval = 7000;

function startSlideTimer(){
  slideTimer = setInterval(slideChange, $interval)
}

function stopSlideTimer(){
  clearInterval(slideTimer);
}

// $(window).focus();
startSlideTimer();
// $(window).focus(startSlideTimer).blur(stopSlideTimer);

$(".slide-btn").click(function() {
  var $activeSlide = $("#slides-wrapper #slide-area #slides .slide.active");
  var activeIndex = $("#slides-wrapper #slide-area #slides .slide").index($(".active"));
  var $nextSlide = $activeSlide.next();
  if($(this).hasClass("next-btn")) {
    if(activeIndex == $("#slides-wrapper #slide-area #slides .slide").length-1) {
      $nextSlide = $("#slides-wrapper #slide-area #slides .slide:first");
    }
  } else {
    if (activeIndex == 0) {
      $nextSlide = $("#slides-wrapper #slide-area #slides .slide:last");
    }else{
      $nextSlide = $activeSlide.prev();
    }
  }
  $activeSlide.fadeOut($fade_speed).removeClass("active");
  $nextSlide.fadeIn($fade_speed).addClass("active");
  stopSlideTimer();
  startSlideTimer();
})

// ---------------/スライド切替---------------

// ---------------スライド下ボタン---------------

  $(".scroll-btn").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top - 65;
    $("html, body").animate({
      "scrollTop" : position
    }, 400);
  });

// ---------------/スライド下ボタン---------------

// ---------------カルーセル---------------

  if(window.matchMedia("(min-width: 600px)").matches){
    var $carouselItemsWrapper = $("#carousel-items-wrapper");
    var wCarouselItemsWrapper = $carouselItemsWrapper.outerWidth();
    var wCarouselItem = wCarouselItemsWrapper/4
    $("#carousel-items").css("width", wCarouselItem * 8 + "px");
    $(".carousel-item").css("width", wCarouselItem + "px");
    $("#carousel-items-wrapper #carousel-items li:last").prependTo("#carousel-items");
    $("#carousel-items").css("margin-left", "-"+wCarouselItem+"px");

    $("#carousel-prev").click(function(){
      $("#carousel-items").animate({
        marginLeft : parseInt($("#carousel-items").css("margin-left"))+wCarouselItem+"px"
        },"slow","swing",
        function(){
          $("#carousel-items").css("margin-left","-"+wCarouselItem+"px")
          $("#carousel-items-wrapper #carousel-items li:last").prependTo("#carousel-items");
        });
    });

    $("#carousel-next").click(function(){
      $("#carousel-items").animate({
        marginLeft : parseInt($("#carousel-items").css("margin-left"))-wCarouselItem+"px"
        },"slow","swing",
        function(){
          $("#carousel-items").css("margin-left","-"+wCarouselItem+"px")
          $("#carousel-items-wrapper #carousel-items li:first").appendTo("#carousel-items");
        });
    });

    var timerID = setInterval(function(){$("#carousel-next").click()},5000);
  }

// ---------------/カルーセル---------------

// ---------------newsホバー---------------

  $(".topic").hover(
    function(){
      $(this).find(".topic-title").css("color", "gray");
      $(this).find(".topic-common").animate({
        left: 5
      }, 200);
    },
    function(){
      $(".topic-title").css("color", "white");
      $(this).find(".topic-common").animate({
        left: 0
      }, 200);
    }
  )

// ---------------/newsホバー---------------

// ---------------sns-postサイズ取得, 変更---------------

  var $posts = $(".posts");
  var wPosts = $posts.outerWidth();
  var wPost = wPosts/4;
  if(wPost < 200) {wPost = 200;}
  $(".post-wrapper").css("width", wPost*4+"px");
  $(".post").css("width", wPost+"px");
  var wPostImage = wPost*0.95;
  $(".post-img").css("width", wPostImage+"px");
  $(".post-img").css("height", wPostImage+"px");
  $(".post-contents").css("width", wPostImage+"px");
  $(".post-link").css("width", wPostImage+"px");

// ---------------/sns-postサイズ取得, 変更---------------

// ---------------sns-select---------------

  $(".sns-select-btn").click(function(){
    $(".sns-select-btn").removeClass("active-sns-btn")
    $(".sns-tab").removeClass("active-tab");
    if($(this).hasClass("instagram-select")){
      $(".instagram-select").addClass("active-sns-btn")
      $(".instagram-tab").addClass("active-tab");
    }else{
      $(".facebook-select").addClass("active-sns-btn")
      $(".facebook-tab").addClass("active-tab");
    }
  });

// ---------------/sns-select---------------

// ---------------linkホバー---------------

  $(".banner").hover(
    function(){
      $(this).css("opacity", "0.5");
    },
    function(){
      $(this).css("opacity", "1");
    }
  );

// ---------------/linkホバー---------------

// ---------------コンテンツ高さ取得---------------

var contentH = document.body.scrollHeight;
var moniH = $(window).height();
var bottomBtnHide = contentH-moniH-430;

// ---------------/コンテンツ高さ取得---------------

});
