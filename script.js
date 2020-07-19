$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#wrapper').hover(
    function() {
      $('p').fadeIn();
    },
    
    function() {
     $('p').fadeOut();  
    }
    );
});
