$(function () {
  
  
  mui('body').on('tap','a',function(){document.location.href=this.href;});
 
  mui.init({
    pullRefresh : {
      container:".mui-scroll-wrapper",
      down : {
        auto:true,
        callback :function () {
          // page=1;
          render(function (info) {
           
            $(".shoplist").html(template("tpl",info))
            
            mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh();
            mui('.mui-scroll-wrapper').pullRefresh().refresh(true);
          })
        }
      },
      up:{
        callback:function () {
          // page++;
          render(function (info) {
            
            mui('.mui-scroll-wrapper').pullRefresh().endPullupToRefresh(info.data.length === 0);
            
          })
        }
      }
    }
  });
  
  
  
  
  
function render(callback) {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getinlanddiscount",
    success:function (info) {
      console.log(info);
      // $(".shoplist").html(template("tpl",info))
      
      setTimeout(function () {
        
        callback(info)
        console.log(info);
        
      },500)
    }
    
  })
  
}
  
})