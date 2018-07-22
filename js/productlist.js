$(function () {
  
  
  
  
  
  
  var categoryid = getSearch('categoryid');
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    data:{
      categoryid:categoryid
    },
    success:function (info) {

    $(".bread-left").html(template("tpl",info))
    
    }
    
  })
  
  
  
  
  var pageid = getSearch("pageid")

  // 设置总页数
  var durationPage=0;
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductlist",
    data:{
    categoryid:categoryid,
      pageid:pageid
    },
    success:function (info) {
console.log(info);
      $(".main ul").html(template("tpl2",info))
      // 将页面添加到info里
      info.pageid=pageid;
     
  // 总页数=总个数/每页最大个数
      durationPage=Math.ceil(info.totalCount/info.pagesize)
  
      // 将总页数添加到info里
      info.durationPage=durationPage;
      

      
      $("#page").html(template("tpl3",info))
      
    }
  })
  
  
  $(".prev").on("click",function () {
    var url=location.search;
  
    if (pageid <= durationPage && pageid > 1) {
      
      location.href =url.substr(0, url.length - 1) + (pageid - 1);
    }
    
  })
  
  $(".next").on("click",function () {
    var url=location.search;
    
    if (pageid < durationPage && pageid >= 1) {
      
      location.href = url.substr(0, url.length - 1) + (pageid + 1);
    }
    
  })
  
  $("#page").on("change",function () {
    var url=location.search;
    
    var id=$(this).val()
  
    location.href = url.substr(0,url.length-1)+id;
  })
  
})