$(function () {
  
  var categoryId = getSearch("categoryId")

$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getcategorybyid",
  dataType:"json",
  data:{
    categoryid:categoryId
  },
  success:function (info) {
    console.log(info);
    $(".bread-left").html(template("tpl",info))
  
    // info.productName=productName;
  }
})
  
  
  
  var productId=getSearch("productId")
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproduct",
    dataType:"json",
    data:{
      productid:productId
    },
    success:function (info) {
      console.log(info);
      $(".main").html(template("tpl2",info))
      $(".back").html(template("tpl3",info))
    }
  })
  
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:productId
    },
    success:function(info){
      console.log(info);
      $(".user_content").html(template("tpl4",info))
    }
  })
  
  
  
})