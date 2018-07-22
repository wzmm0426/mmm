$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
      var id = getSearch('productid')
      console.log(id);
      
      
    $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    data:{
      productid:id
    },
    dataType:"json",
    success:function (info) {
      console.log(info);
      $(".main").html(template("tpl",info))
      $(".flist").html(template("tpl2",info))
      $(".common").html(template("tpl3",info))
    }
    
  })
  
  




  
  
  
    function getSearchObj() {
  
        var obj={}
        
        var search=location.search;
        
        search=decodeURI(search)
        
        
        search=search.slice(1);
        
        
        var arr= search.split("&")
        
        arr.forEach(function (item,index) {
          var k = item.split("=")[0]
          var v = item.split("=")[1]
          obj[k]=v;
        })
        return obj;
      }
      function getSearch(k) {
        return +getSearchObj()[k];
      }
})