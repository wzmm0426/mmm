$(function () {
  
  var brandtitleid=getSearch("brandtitleid")
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
      brandtitleid:brandtitleid
    },
    success:function (info) {
      console.log(info);
      $(".content ul").html(template("tpl",info))
    }
  })
  var pagesize=4;
  var productid;
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
      brandtitleid:brandtitleid,
      pagesize:pagesize
    },
    success:function (info) {
      console.log(info);
      $(".xiaoliang-content ul").html(template("tpl2",info))
      productid=info.result[0].productId;
      console.log(productid);
  
      $.ajax({
        type:'get',
        url:"http://127.0.0.1:9090/api/getproductcom",
        data:{
          productid:productid
        },
        success:function (info) {
          console.log(info);
          $(".pinlun-content ul").html(template("tpl3",info))
        }
    
      })
    }
  })
  
  

  
 
  
})