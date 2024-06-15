
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


