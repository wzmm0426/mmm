$(function () {
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getbrandtitle",
      success:function (info) {
        console.log(info);
        $(".mui-table-view").html(template("tpl",info))
      }
    })
})

mui('body').on('tap','a',function(){document.location.href=this.href;});