
/*탭 컨텐츠*/
let tabmenu = $(".tabmenu li");
let tab = $(".tab_wrapper > div");

tabmenu.click(function(e){
  e.preventDefault();
  tabmenu.removeClass('active');
  $(this).addClass('active');
  let target = $(this).find('a').attr('href');
  tab.removeClass('active');
  $(target).addClass('active');
});

/*메인메뉴 슬라이드 다운*/

let mainMenu = $('.main-menu');
let main_ul = $('.main-menu ul ul');
mainMenu.mouseover(function(){
  main_ul.stop().slideDown();
}).mouseout(function(){
  main_ul.stop().slideUp();
});

/*슬라이드*/
let slideContainer = $('swapper');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;
function autoSlide(){
  setInterval(function(){
    let nextIdx = (currentIdx + 1) % slideCouont;
    slideContainer.animate({
      marginTop: -400 *nextIdx +'px'
    });
    currentIdx = nextIdx;
  }, 3000);
}
autoSlide();
