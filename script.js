$(function(){

  $("#slide-open").click(function()
  {
    if($("#burgur").hasClass('on')) //메뉴가 X 상태일때
    {
      $("#burgur").removeClass('on'); //메뉴 원복
      $("#slide").removeClass('on');  //슬라이드 메뉴 원복
    }
    else
    {
      $("#burgur").addClass('on'); //메뉴 3줄
      $("#slide").addClass('on'); //슬라이드 메뉴 감춤
    }
  }
);

});
