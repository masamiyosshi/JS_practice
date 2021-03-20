// トグルメニュー
$(".header-course").click(
    function () {
    $(".header-toggle").slideToggle();
    $(".header-toggle").toggleClass("active");
    });

// ページトップに戻る
$(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 80) {
            pagetop.fadeIn(300);
       } else {
            pagetop.fadeOut(300);
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
// モーダル表示
  $(function() {
    var grayDisplay = $('#gray-display');
    var largeImg = $('#large-img');
  
    grayDisplay.hide();
    largeImg.hide();
  
    $(".item img").click(function() {
      const targetImg = $(this).attr('src');
      grayDisplay.show();
      largeImg.append(`<img src="${targetImg}">`);
      largeImg.show();
  
      grayDisplay.click(function() {
        $(this).next().fadeOut(200, function() {
          grayDisplay.hide();
          largeImg.children().remove();
        });
      });
      return false;
    });
  });
  