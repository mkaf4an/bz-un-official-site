$(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() > 60) {
      $("#header-logo-s").fadeIn();
      $("#header-logo").fadeOut();
    }else{
      $("#header-logo-s").fadeOut();
      $("#header-logo").fadeIn();
    }
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 430 && $(window).scrollTop() < 2800) {
      $(".bottom-btn").show();
    }else{
      $(".bottom-btn").hide();
    }
  });

  $("#link1-solo").hover(
    function(){
      $("#solo-modal").show();
    },
    function(){
      $("#solo-modal").hide();
    }
  )

  $("#link1-sns").hover(
    function(){
      $("#sns-modal").show();
    },
    function(){
      $("#sns-modal").hide();
    }
  )

var $interval = 7000;
var $fade_speed = 500;
$("#main1-wrapper #main1 .slides .slide").hide();
$("#main1-wrapper #main1 .slides .slide:first").addClass("active").show();

var slideTimer;

function startSlideTimer(){
  slideTimer = setInterval(function(){
    var $activeSlide = $("#main1-wrapper #main1 .slides .slide.active");
    var $nextSlide = $activeSlide.next();
    var activeIndex = $("#main1-wrapper #main1 .slides .slide").index($(".active"));
    if(activeIndex == $("#main1-wrapper #main1 .slides .slide").length - 1) {
      $nextSlide = $("#main1-wrapper #main1 .slides .slide:first")
    }
    $activeSlide.fadeOut($fade_speed).removeClass("active");
    $nextSlide.fadeIn($fade_speed).addClass("active");
  }, $interval)
}

function stopSlideTimer(){
  clearInterval(slideTimer);
}

startSlideTimer();

$(".slide-btn").click(function() {
  var $activeSlide = $("#main1-wrapper #main1 .slides .slide.active");
  var activeIndex = $("#main1-wrapper #main1 .slides .slide").index($(".active"));
  $activeSlide.removeClass(".active");
  if($(this).hasClass("next-btn")) {
    if (activeIndex == $("#main1-wrapper #main1 .slides .slide").length-1) {
      $("#main1-wrapper #main1 .slides .slide:first").addClass("active");
    }else{
      $activeSlide.next().addClass("active");
    }
  } else {
    if (activeIndex == 0) {
      $("#main1-wrapper #main1 .slides .slide:last").addClass("active");
    }else{
    $activeSlide.prev().addClass("active");
    }
  }
  var $nextSlide = $activeSlide.next();
  if(activeIndex == $("#main1-wrapper #main1 .slides .slide").length - 1) {
    $nextSlide = $("#main1-wrapper #main1 .slides .slide:first")
  }
  $activeSlide.fadeOut($fade_speed).removeClass("active");
  $nextSlide.fadeIn($fade_speed).addClass("active");
  stopSlideTimer();
  startSlideTimer();
})

  $(".scroll-btn").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top - 65;
    $("html, body").animate({
      "scrollTop" : position
    }, 400);
  });

  $(".main2-items-wrapper").css("width", 300*8+"px");
  $(".main2-items-wrapper .main2-items li:last").prependTo(".main2-items");
  $(".main2-items-wrapper").css("margin-left", "-300px");

  $("#carousel-prev").click(function(){
    $(".main2-items-wrapper").animate({
      marginLeft : parseInt($(".main2-items-wrapper").css("margin-left"))+300+"px"
      },"slow","swing",
      function(){
        $(".main2-items-wrapper").css("margin-left","-300px")
        $(".main2-items-wrapper .main2-items li:last").prependTo(".main2-items");
      });
  });

  $("#carousel-next").click(function(){
    $(".main2-items-wrapper").animate({
      marginLeft : parseInt($(".main2-items-wrapper").css("margin-left"))-300+"px"
      },"slow","swing",
      function(){
        $(".main2-items-wrapper").css("margin-left","-300px")
        $(".main2-items-wrapper .main2-items li:first").appendTo(".main2-items");
      });
  });

  var timerID = setInterval(function(){$("#carousel-next").click()},5000);

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

  $(".banner").hover(
    function(){
      $(this).css("opacity", "0.5");
    },
    function(){
      $(this).css("opacity", "1");
    }
  );

  $("#carousel-prev").click(function(){
    $(".main2-items").css("")
  })



});
