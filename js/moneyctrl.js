$(function () {

var durationPage;
var pageid=getSearch('pageid')||0;
  
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getmoneyctrl",
  data:{
    pageid:pageid
  },
  success:function (info) {

    
    $(".main ul").html(template("tpl",info))
    
    
    durationPage=Math.ceil(info.totalCount/info.pagesize);
    info.durationPage=durationPage;
    info.pageid=pageid+1;

    console.log(info);
    
    $("#page").html(template("tpl2",info))
  }
})
  

  $(".prev").on("click",function () {
   
 
    if(pageid<=durationPage && pageid>0){
      
      location.href='moneyctrl.html'+'?pageid='+(pageid-1)
    }
    
  })

$(".next").on("click",function () {
  
  if(pageid<durationPage&&pageid>=0){
    
    location.href='moneyctrl.html'+'?pageid='+(pageid+1)
  }

  
})
  
  $("#page").on('change',function () {
    console.log(1);
    var id=$(this).val();
    
    location.href='moneyctrl.html'+'?pageid='+id;
  })
  
  
  
  
  
  
  // 分页

})