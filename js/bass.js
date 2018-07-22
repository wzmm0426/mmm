mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

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

$('.top').on("click", function () {
  mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 1);
})