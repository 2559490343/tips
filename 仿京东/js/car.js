/**
 * Created by Administrator on 2019/6/13 0013.
 */
  $(function () {
    var count = 1;
    $("a").attr("href", "javascript:;");
    $('tbody>tr').mouseenter(function () {
      $(this).css("backgroundColor", "#fdedee").siblings("tr").css("backgroundColor", "");
    }).mouseleave(function () {
      $('tbody>tr').css("backgroundColor", "");
    });
    $('.amount>input').change(function () {
      var totalPrice = $(this).val() * 8848;
      $(this).parents("td").siblings().children(".total").text("" + totalPrice + ".00");
    });
    $('.plus').click(function () {
      count = $(this).siblings("input").val();
      count++;
      $(this).siblings("input").val("" + count + "");
      $(this).parents("td").siblings().children(".total").text("" + count * 8848 + ".00");
      counted();
    });
    $('.sub').click(function () {
      count = $(this).siblings("input").val();
      if (count == 1) {
        alert("不能再少了，亲！");
      } else {
        count--;
        $(this).siblings("input").val("" + count + "");
        $(this).parents("td").siblings().children(".total").text("" + count * 8848 + ".00");
      }
      counted();
    });
    $('.checkall').click(function () {
      $("td>input").prop("checked", $(this).prop("checked"));
    });
    $('td>input').click(function () {
      counted();
      if($(this).prop("checked")==false){
        $('.checkall').prop("checked",false);
      }
      else if($('td>input').prop("checked")){
        $('.checkall').prop("checked",true);
      }

    });
    $(".del").click(function () {
      if(confirm("确定要移除吗亲？")){
        $(this).parents("tr").remove();
        $("b").text($('tbody>tr').length);
      }
    });
    $(".delall").click(function () {
      if(confirm("确定要移除吗亲？")){
        $('td>input:checked').parents("tr").remove();
        $("b").text($('tbody>tr').length);
      }
    });
//    $('table').mousemove(function () {
//      var tot=0;
//     var objs=$('td>input:checked').parents('td').siblings().children('div').children('input');
//      for(var i= 0;i<objs.length;i++){
//        tot+=parseInt(objs[i].value);
//      }
//      $('.cart_tool_right>p>b').text(tot);
//      $('.cart_tool_right>span').text("￥"+tot*8848+".00");
//    });
    var counted= function () {
      var tot=0;
      var objs=$('td>input:checked').parents('td').siblings().children('div').children('input');
      for(var i= 0;i<objs.length;i++){
        tot+=parseInt(objs[i].value);
      }
      $('.cart_tool_right>p>b').text(tot);
      $('.cart_tool_right>span').text("￥"+tot*8848+".00");
    };
  });
