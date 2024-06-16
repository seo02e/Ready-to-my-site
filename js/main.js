
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

/*메인메뉴의 서브메뉴 다운*/

let mainMenu = $('.main-menu');
let main_ul = $('.main-menu ul ul');
mainMenu.mouseover(function(){
  main_ul.stop().slideDown();
}).mouseout(function(){
  main_ul.stop().slideUp();
});

/*슬라이드*/

let swapper = $('.swapper');
let slideContainer = swapper.find('.slide-img'); // ul 요소 선택
let slide = slideContainer.find('li');
let slideCount = slide.length;
let currentIdx = 0;

function goToSlide(idx) {
  slideContainer.animate({
    marginTop: -400 * idx + 'px'
  });
  currentIdx = idx;
}

$('.radio-buttons input[type="radio"]').click(function() {
  let idx = $(this).index();
  goToSlide(idx / 2); // 라벨이 두 번째 요소이기 때문에 인덱스를 2로 나눔
});

function autoSlide() {
  setInterval(function() {
    let nextIdx = (currentIdx + 1) % slideCount;
    goToSlide(nextIdx);
    $(`.radio-buttons input[type="radio"]:eq(${nextIdx})`).prop('checked', true);
  }, 3000);
}

autoSlide();
/*
let swapper = $('.swapper');
let slide = swapper.find('li');
let slideCount = slide.length;
let currentIdx =0;
function autoSlide(){
  setInterval(function(){
    let nextIdx = (currentIdx + 1) % slideCount;
    slide.removeClass('active');
    slide.eq(nextIdx).addClass('active');
    currentIdx = nextIdx;
  }, 3000);
}
autoSlide();
*/