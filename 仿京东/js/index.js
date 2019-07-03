/**
 * Created by Administrator on 2019/6/13 0013.
 */

$(function () {
  var index=0;
  var count=0;
  var changeRight=function () {
    if(count>2){
      $('.uu1').animate({left:"0"},1000);
      count=0;
      $('.uu2>li:eq(0)').addClass("cls").siblings().removeClass("cls");
    }
    else
    {
      count++;
      $('.uu1').animate({left:"-"+(count*730)+"px"},1000);
      $('.uu2>li:eq('+count+')').addClass("cls").siblings().removeClass("cls");
    }
  }
  var timeId=setInterval(changeRight,3000);
//      商品列表部分start
  $(".itemlist>ul>li").mouseenter(function () {
    index=$(this).index();
    $(".dd>div:eq("+index+")").css("display","block");
    $(".dd>div:eq("+index+")").siblings("div").css("display","none");
  });
  $('.add').mouseleave(function () {
    $(".dd>div").css("display","none");
  });
  //商品列表部分end
  //轮播图部分start

  $('.uu2>li').click(function () {
    $(this).addClass("cls").siblings().removeClass("cls");
    index=($(this).index())*730;
    count=$(this).index();
    $('.uu1').animate({left:"-"+index+"px"},1000);
  });
  //点击右切换键切换轮播图
  $('.right').click(changeRight);
  $('.left').click(function () {
    if(count==0){
      $('.uu1').animate({left:"-2190px"},1000);
      count=3;
      $('.uu2>li:eq(3)').addClass("cls").siblings().removeClass("cls");
    }
    else
    {
      count--;
      $('.uu1').animate({left:"-"+(count*730)+"px"},1000);
      $('.uu2>li:eq('+count+')').addClass("cls").siblings().removeClass("cls");
    }
  });
  $('.core').mouseenter(function () {
    clearInterval(timeId);
    $('.core>span').show();
  }).mouseleave(function () {
    timeId=setInterval(changeRight,3000);
    $('.core>span').hide();
  });
});
