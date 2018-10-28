/* 
* @Author: Marte
* @Date:   2018-10-26 11:06:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-28 17:31:55
*/

$(document).ready(function(){
    var params = decodeURI(location.search);
        params = params.slice(9);
        //直接切出数据库相应的id
    // console.log(params);
    //开启数据库拿到数据
    $.get("./../api/goodsList.php",function(res){
              //console.log(res);
              //此时将字符串res转成json对象
              var goodsArr = JSON.parse(res);
              // console.log(goodsArr[params]);
              //渲染具体内容到页面中
              var a = 2;
              var goodPrice = goodsArr[params].soldPrice;
              var goodPrice = Number(goodPrice).toFixed(2);
              $('.price').children('strong').html("¥"+Number(goodsArr[params].soldPrice).toFixed(2));
              $('.cost-price').children('strong').html("¥"+Number(goodsArr[params].marketPrice).toFixed(2));
              $('.name').children('h1').html(goodsArr[params].goodName);
              var goodsPic360 = goodsArr[params].littlee_imgUrl;
              var goodsPic1280 = goodsArr[params].littleee_imgUrl;
              var goodsPic1280_2 = 'zoomImage: &#39;'+goodsPic1280+' &#39;';
              $('.gallery').children('img').attr({ src: goodsPic1280 });
              $('title').html(goodsArr[params].goodName);
              $('.addcart').attr("data-param",goodsArr[params].id);
    })
});

