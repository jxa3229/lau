/* 
* @Author: Marte
* @Date:   2018-10-28 17:23:44
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-28 17:36:50
*/

$(document).ready(function(){
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
        $('.addcart').on("click",function(e){
            e.preventDefault();
            var currentGuid = $(this).attr("data-param");
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
    })
});