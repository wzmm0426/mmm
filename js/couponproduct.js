$(function () {
  couponid=getSearch("couponid")


    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getcouponproduct",
      data:{
        couponid:couponid
      },
      success:function (info) {
        console.log(info);
      
        $(".main ul").html(template("tpl",info))
        

      }
    })
  
  
  $(".main").on("tap","li",function () {
    
    showMask();
    
  })
  
  $(".main").on("tap","#mask",function () {
    hideMask()
  })
  
  
  
  
  
  // 遮挡层
  function showMask(){
    $("#mask").css("height",$(document).height());
    $("#mask").css("width",$(document).width());
    $("#mask").show();
  }
  
  
  //隐藏遮罩层
  function hideMask(){
    
    $("#mask").hide();
    
  }
  
  
  
  
})