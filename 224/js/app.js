$(document).ready(function() {
  var destroyComment = true,
      MenuLink = $('.js-link'),
      mobileWidth = 767,
      CommentBreakpoint = 991,
      Banner = $('.hurryUp'),
      BannerClose = $('.hurryUp__close'),
      BannerButton = $('.show-btn'),
      SwipeBlock = $('.compare'),
      toggleSwipe = false,

      navbar = $('.navbar'),
      jsNavbarPoint = $('.js-button'),

      TopSection = $('#primary'),
      BottomSection = $('#primary_last'),
      windowWidth, windowHeigth,MenuHeight, jsNavbarShowTop, jsNavbarShowBottom, TopSectionPos,BottomSectionPos;
    function detectwindowWidth(){
      windowWidth = window.innerWidth
    }
    function detectSize(){
      windowWidth = window.innerWidth,
      windowHeigth = window.innerHeight,
     /* MenuHeight = topMenu.innerHeight(),*/
      jsNavbarShowTop =jsNavbarPoint.offset().top + jsNavbarPoint.innerHeight(),
      jsNavbarShowBottom = jsNavbarPoint.eq(1).offset().top,
      TopSectionPos = TopSection.offset().top + TopSection.innerHeight(),
      BottomSectionPos = BottomSection.offset().top,
      SwipeBlockPos = SwipeBlock.offset().top,
      SwipeBlockPosBottom = SwipeBlock.offset().top + SwipeBlock.innerHeight();
    }

  function animateScroll(element, speed) {
    $("html, body").animate({
      scrollTop: element.offset().top}, speed);
  };

  function hideMenu() {
      navbar.removeClass('fixed');
  };
  function showMenu() {
      navbar.addClass('fixed');
    };
 function hideMenuMobyle(){      
      if(windowWidth <= mobileWidth) {
          hideMenu();
          $('body').css({'overflow' : 'visible'});
      }      
  }
function swipeLeft(){
  $(".compare-wrap").removeClass('compare-animate');
}
function swipeRight(){
  $(".compare-wrap").addClass('compare-animate');
}
  function slideDetect() {
    if(window.innerWidth <= CommentBreakpoint && destroyComment){
           $('.comments-list').slick({
              infinite: true,
              dots: true,
              slidesToScroll: 1,
              autoplaySpeed: 4000,
              autoplay: true
            });
           $('.ingredient').slick({
              infinite: true,
              slidesToScroll: 1,
              autoplaySpeed: 4000,
              autoplay: true
            });
             destroyComment = false;
       } else if(window.innerWidth > CommentBreakpoint && !destroyComment){
         $('.comments-list').slick('unslick');
         $('.ingredient').slick('unslick');
          destroyComment = true;
        };
  };

 /*******************    load   *********************/
  detectwindowWidth();
  slideDetect();
    detectSize();


/*******************    resize   *********************/
   $(window).on("resize", function() {
         detectwindowWidth();
          slideDetect();
          detectSize();
     });
/*******************  end  resize   *********************/
/*******************  swipe   *********************/
var myElement = document.getElementById('compare');
var left = new Hammer(myElement);

 
left.on("panright", function(ev) {
    swipeLeft();
    toggleSwipe = true;
});
left.on("panleft", function(ev) {
    swipeRight();
});
/*******************  end swipe   *********************/
/*******************  scroll   *********************/
 $(window).on("scroll", function() {
   var scrolledTop = $(window).scrollTop() ,
        scrolledBottom = scrolledTop + windowHeigth;
        if(scrolledTop >= jsNavbarShowTop) {  
            if(scrolledBottom >= jsNavbarShowBottom){
              hideMenu();
            }else{
              showMenu();
            }
          } else {
            hideMenu();
          };
    if(windowWidth > mobileWidth) { 
        if(scrolledTop >= TopSectionPos && scrolledBottom < BottomSectionPos) {
              if(~Banner.attr('class').indexOf('js-fixed')){               
               BannerButton.removeClass('js-active');
              } else{
                BannerButton.addClass('js-active');
              }
           } else {
              BannerButton.removeClass('js-active');
              Banner.removeClass('js-fixed');
        }  
        if(scrolledBottom >= BottomSectionPos){
              Banner.appendTo(BottomSection);
              Banner.removeClass('js-hide');
        }
        if(scrolledTop <= TopSectionPos){
              Banner.appendTo(TopSection);
              Banner.removeClass('js-hide');
        } 
    } else{
      if(scrolledTop + windowHeigth/2 >= SwipeBlockPos && scrolledTop <= SwipeBlockPos + windowHeigth/4){
              if(toggleSwipe !== true){
                swipeRight();
              }
          }else{
      if(scrolledBottom <= SwipeBlockPos || scrolledTop >= SwipeBlockPosBottom){
            swipeLeft();
            toggleSwipe = false;
        }
          } 

      
  } 
  });
   /******************* end scroll   *********************/

   /******************* click   *********************/
  BannerButton.on("click", function() {
      Banner.removeClass('js-hide');
      Banner.addClass('js-fixed'); 
      $(this).removeClass('js-active');    
   });

   BannerClose.on("click", function() {
      if(~Banner.attr('class').indexOf('js-fixed')){
        Banner.removeClass('js-fixed');
        BannerButton.addClass('js-active');
      }else{
        Banner.addClass('js-hide');
      }
   });

  $('.js-to-form').on("click", function() {
      var scrolledTop = $(window).scrollTop(),
          docHeight = $(document).outerHeight(true);
          id = $(this).attr("href");
      if(scrolledTop < (docHeight-scrolledTop))
        {
          id = id+1;
        }else{
          id = id+2;
        } 
          hideMenuMobyle();
          animateScroll($(id), 900); });
  });
