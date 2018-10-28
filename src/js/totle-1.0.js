$(document).ready(function(){
    //1.取得数据库的商品数据
    $.get("./../api/goodsList.php",function(res){
        var goodsList = JSON.parse(res);//数据库内可以调用的数据
        var arr = Cookie.getCookie("goodslist") || [];
            // 第一次进入页面，此时获取Cookie.getCookie("goodslist")获取到的是"",返回布尔值为false，最终返回空数组，
            // 后来进入页面，此时获取Cookie.getCookie("goodslist")返回字符串，返回布尔值为true。最终返回的是字符串.
            // console.log(arr);
            if(typeof(arr) == "string"){
                arr = JSON.parse(arr);
            }
            console.log(arr);
            console.log(goodsList);
        //1.点击添加到购物车，将该商品的信息写成对象{name,price,imgurl,guid}，推入数组。数组==>json字符串,存入cookie
        //2.第一次进入页面，arr为空数组。后面再进入页面，arr应该为拿到已存入cookie的值（字符串=>数组）。
        //3.点击同一个商品，不要创建对象，而是将对应的商品的数量加1
        // 3.点击清空购物车，清空数组，重新渲染。记得cookie也要清空
        //点击购物车重新渲染
        // a.进入页面直接开始渲染
        dataRun(goodsList,arr);
        // console.log($('tbody'));
        // 4.判断小购物车中是否存在商品，若是存在先将相关的商品删掉，再将cookie中的相关id删掉（获取cookie，将相关物品删掉，再渲染一次）
        // console.log($('.del'));
        console.log($(".add-substract-key:even"));//减少列
        console.log($(".add-substract-key:odd"));//增加列
        // 每次点击都会修改arr（）重新设置cookie。再渲染
        $(".add-substract-key:odd").on('click',function(){
            var currentGuid = $(this).attr("data-param");
            console.log(currentGuid);
            for(var i=0;i<arr.length;i++){
                if(arr[i].guid == currentGuid){
                    arr[i].qty++;
                    console.log(arr[i].qty);
                    console.log(arr);
                    //修改之后还要修改cookie
                    var goodslist = JSON.stringify(arr);
                    document.cookie = "goodslist=" + goodslist +"; path=/";
                }     
            }
           dataRun(goodsList,arr);
           location.reload();
        })
        $(".add-substract-key:even").on('click',function(){
            var currentGuid = $(this).attr("data-param");
            console.log(currentGuid);
            for(var i=0;i<arr.length;i++){
                if(arr[i].guid == currentGuid){
                    arr[i].qty--;
                    console.log(arr[i].qty);
                    console.log(arr);
                    //修改之后还要修改cookie
                    if(arr[i].qty == 0){
                        console.log(arr[i]);
                        // arr = arr.splice(arr[i], 1);
                    }
                    console.log(arr);
                    var goodslist = JSON.stringify(arr);
                    document.cookie = "goodslist=" + goodslist +"; path=/";
                }     
            }
           dataRun(goodsList,arr);
           location.reload();
        })
        //清楚剩余0的产品
        // clearQty(arr);
    })
});

//清除数量为0的商品的函数
// function clearQty(arr){
//     for(var i=0;i<arr.length;i++){
//             console.log(arr[i].qty);
//             console.log(arr);
//             //修改之后还要修改cookie
//                 if(arr[i].qty == 0){
//                     var clearId = i;
//                     // console.log(clearId);
//                     arr = arr.splice(clearId, 1);
//                 }
//             }
//     console.log(arr);     
//     var goodslist = JSON.stringify(arr);
//     document.cookie = "goodslist=" + goodslist +"; path=/";
// }


//根据cookieObj拿到goodsListObj购物车函数
function dataRun(goodsList,arr){
    // 获取到当前cookie里面的id
    var inputArr = Cookie.getCookie("goodslist") || [];
    inputArr = JSON.parse(inputArr);
    // 创建一个变量装载对应id的商品（数组）
    var shopCar = [];//
    // console.log(goodsList);
    // console.log(arr);
    for(var j = 0;j<arr.length;j++){
        for(var i = 0;i<goodsList.length;i++){
            if( arr[j].guid == goodsList[i].id ){
                // console.log(goodsList[i]);
                shopCar.push(goodsList[i]);
            }
        }
    }
    // console.log(shopCar);
    // console.log(arr);
    //页面渲染部分
    drewShopCar(shopCar,arr);

}

function drewShopCar(shopCar,arr){
    var str = "";
    var total = 0;
    // console.log(shopCar.length);
    for(var i = 0;i<shopCar.length;i++){
        // var tr = document.createElement("tr");
        var input = shopCar[i];
        // console.log();
        str +=  '<tr id="'+input.id+'" nc_group="29577" class="shop-list ">'
                +'<td><input type="checkbox" checked="" nc_type="eachGoodsCheckBox" value="29577|1" id="cart_id29577" name="cart_id[]"></td>'
                    +'<td class="w60"><a href="./../html/details.html?'+encodeURI(input.dataParam)+'" target="_blank" class="ncc-goods-thumb"><img src="./.'+input.little_imgUrl+'" alt="型男男鞋秋季透气潮鞋男士休闲鞋子韩版皮鞋百搭小白鞋男学生白色板鞋 黑色 39"></a></td>'
                    +'<td class="tl"><dl class="ncc-goods-info">'
                +'<dt><a href="./../html/details.html?'+encodeURI(input.dataParam)+'" target="_blank">'+input.goodName+'</a></dt>'
                +'</dl></td>'
                +'<td class="w120"><em id="item29577_price">'+(Number(input.soldPrice)).toFixed(2)+'</em></td>'
                    +'<td class="w120 ws0"><a href="JavaScript:void(0);" data-param="'+arr[i].guid+'" title="减少商品件数" class="add-substract-key tip">-</a>'
                +'<input id="input_item_29577" value="'+arr[i].qty+'"  onkeyup="change_quantity(29577, this);" type="text" class="text w20">'
                +'<a href="JavaScript:void(0);" data-param="'+arr[i].guid+'" title="增加商品件数" class="add-substract-key tip">+</a></td>'
                    +'<td class="w120">            <em id="item29577_subtotal" nc_type="eachGoodsTotal">'+(Number(input.soldPrice)*arr[i].qty).toFixed(2)+'</em>'
                +'</td>'
               +' <td class="w80">            <a href="javascript:void(0)" onclick="collect_goods(&#39;226559&#39;);">收藏</a><br>'
                        +'<a href="javascript:void(0)" onclick="drop_cart_item(29577);">删除</a></td>'
                +'</tr>';
            total += Number(input.soldPrice)*parseInt(arr[i].qty);
            // console.log(total);
            // 共计金额：<em class="goods-price">¥243.00</em>
            // $('.total-price').html('共计金额：<em class="goods-price">¥'+total+'</em>');
    }
    $("#cartTotal").text(total.toFixed(2));
    // console.log(total);
    $("tbody").html(str);
}