$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
 
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $(".list").html(template("tpl",info))
    }
  })
  
  $(".list").on("tap",".mui-navigate-right",function () {
    var id=$(this).data("id")
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getcategory",
      dataType: 'json',
      data:{
        titleid:id
      },
      success:function (info) {

       console.log(info);
        $(".list-content").html(template("tpl2",info))

      }
    })
  })
  
  
  
  
})