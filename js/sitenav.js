$(function () {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getsitenav",
    success:function (info) {
      console.log(info);
      $(".main-middle").html(template("tpl",info))
    }
  })
})