$(function () {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getgsshop",
    success:function (info) {
      console.log(info);
      $(".table-one").html(template("tpl",info))
    }
  })
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getgsshoparea",
    success:function (info) {
      console.log(info);
      $(".table-two").html(template("tpl2",info))
    }
  })
  
  var shopid=getSearch("shopid")||0
  var areaid=getSearch("areaid")||0
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getgsproduct",
    data:{
      shopid:shopid,
      areaid:areaid
    },
    success:function (info) {
      console.log(info);
      $(".main ul").html(template("tpl3",info))
    }
  })
  
  
  
  
  
  
  $(".one").click(function () {

    $(".table-one").toggleClass("showii").siblings().removeClass("showii")
    
  })
  
  $(".two").click(function () {
  
    $(".table-two").toggleClass("showii").siblings().removeClass("showii")
    
  })
})