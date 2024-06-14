let tabmenu = $(".tabmenu li");
let tab = $(".tab > div");


tabmenu.click(function(e){
  e.preventDefault();
  tabmenu.removeClass('active');
  $(this).addClass('active');
  let target = $(this).find('a').attr('href');
  tab.removeClass('active');
  $(target).addClass('active');
});

let tabMenu = $(".tabmenu li");
let tab_content = $(".tab > div");


tabmenu.click(function(e){
  e.preventDefault();
  tabmenu.removeClass('active');
  $(this).addClass('active');
  let target = $(this).find('a').attr('href');
  tab.removeClass('active');
  $(target).addClass('active');
});