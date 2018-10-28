/* 
* @Author: Marte
* @Date:   2018-10-27 09:27:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-28 16:24:48
*/

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
            // console.log(arr);
        //1.点击添加到购物车，将该商品的信息写成对象{name,price,imgurl,guid}，推入数组。数组==>json字符串,存入cookie
        //2.第一次进入页面，arr为空数组。后面再进入页面，arr应该为拿到已存入cookie的值（字符串=>数组）。
        //3.点击同一个商品，不要创建对象，而是将对应的商品的数量加1
        $('.add-cart').children('a').on("click",function(e){
            e.preventDefault();
            var currentGuid = ($(this).attr("data-param")).slice(8);
            console.log(currentGuid);
            var i;
            var res =arr.some(function(item,idx){
                i = idx;
                return item.guid == currentGuid;
            });
            console.log(res);
            if(res){
                        arr[i].qty++;
                        //找到数组中改商品，数量加1
                    }else{
                        var goodsObj = {
                            guid : currentGuid,
                            qty : 1 
                        };
                        arr.push(goodsObj);
                    }
            var goodslist = JSON.stringify(arr);
            document.cookie = "goodslist=" + goodslist +"; path=/";
            dataRun(goodsList,arr);
        });
        // 3.点击清空购物车，清空数组，重新渲染。记得cookie也要清空
        //点击购物车重新渲染
        $('#rtoolbar_cart').on("click",function(){
            dataRun(goodsList,arr);
        })
        // 4.判断小购物车中是否存在商品，若是存在先将相关的商品删掉，再将cookie中的相关id删掉（获取cookie，将相关物品删掉，再渲染一次）
        // console.log($('.del'));
        
    })
    
});

//渲染购物车函数
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
    for(var i = 0;i<shopCar.length;i++){
        // var tr = document.createElement("tr");
        var input = shopCar[i];
        // console.log();
        str +=  '<li data-param = "'+input.id+'">'
                +'<div class="goods-pic">'
                    +'<a href="https://www.nanshig.com/shop/item-226559.html" title="型男男鞋秋季透气潮鞋男士休闲鞋子韩版皮鞋百搭小白鞋男学生白色板鞋 黑色 39" target="_blank" ;="">'
                    +'<img src="'+input.little_imgUrl+'" alt="型男男鞋秋季透气潮鞋男士休闲鞋子韩版皮鞋百搭小白鞋男学生白色板鞋 黑色 39"></a>'
                +'</div>'
                +'<dl>'
                    +'<dt class="goods-name">'
                        +'<a href="https://www.nanshig.com/shop/item-226559.html" title="型男男鞋秋季透气潮鞋男士休闲鞋子韩版皮鞋百搭小白鞋男学生白色板鞋 黑色 39" target="_blank" ;="">型男男鞋秋季透气潮鞋男士休闲鞋子韩版皮鞋百搭小白鞋男学生白色板鞋 黑色 39</a>'
                    +'</dt>'
                  +'<dd><em class="goods-price">¥'+(Number(input.soldPrice)).toFixed(2)+'</em>×'+arr[i].qty+'</dd>'
                +'</dl>'
                // +'<a href="javascript:void(0)" class="del" title="删除">X</a>'
                +'</li>';
            total += Number(input.soldPrice)*parseInt(arr[i].qty);
            // console.log(total);
            // 共计金额：<em class="goods-price">¥243.00</em>
            $('.total-price').html('共计金额：<em class="goods-price">¥'+total+'</em>');
    }
    // var carTotal = document.getElementsByClassName("carTotal")[0];
    // carTotal.innerHTML = total.toFixed(2);
    $(".cart-list").html(str);
}

