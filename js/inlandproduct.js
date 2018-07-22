$(function () {
  
  
  var productId=getSearch('productId')
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getdiscountproduct",
  data:{
      productid:productId
  },
    success:function (info) {
      console.log(info);
      $(".main").html(template("tpl",info))
      // $(".flist").html(template("tpl2",info))
      $(".common").html(template("tpl3",info))
    }
  
  })
  
  
  
  
  
  
  
})