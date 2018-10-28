
$(document).ready(function(){
          //主页效果部分
          //1.右边购物车隐藏出现.
          console.log(666);
          $('#rtoolbar_cart').on("click",function(){
                  $('#content-cart').toggle(function(){
                      $(this).stop().animate({right:-250},300);
                     },function(){
                      $(this).stop().animate({right:0},300);
                     });
              })
          //2.1菜单隐藏出现.关于toggle的使用。toggle(fn,fn)不能再使用
          $('.nc-appbar-hide').on('click',function(){
              console.log($('.nc-hidebar'));
                  $('.nc-hidebar').stop().animate({right:59},300);
                  $('.nc-appbar').stop().animate({right:-60},300);     
          })
          $(".nc-hidebar-bg").on('click',function(){
                  $('.nc-hidebar').stop().animate({right:-86},300);
                  $('.nc-appbar').stop().animate({right:6},300);
          })
          //2.2登录页面隐藏出现。
          var userClick = 0;
          $('.user').on('click',function(){
            userClick++;
            if(userClick%2 == 1){
              $('.user-login-box').css('display','block');
            }else if(userClick%2 == 0){
              $('.user-login-box').css('display','none');
            }      
          });
          //3.鼠标移动到info块时,
          // console.log($(".item"));
          $(".list_pic").on("mouseover",".goods-info",function(){
                  $(this).stop().animate({top:180},300);
              }).on("mouseout",".goods-info",function(){
                  $(this).stop().animate({top:230},200);
          })
          //参数打印部分
          //1.先获取数据库中的数据
          $.get("./../api/goodsList.php",function(res){
              //console.log(res);
              //此时将字符串res转成json对象
              var goods = JSON.parse(res);
              // var $goodsList = $(".list_pic");
              // $goodsList.html("")
              var goodsList = document.getElementsByClassName("list_pic")[0];
              var price_orderBtn = document.getElementById("price_orderBtn");
              //初始化拼接
              pinJie(goods);
              // console.log(typeof(goods[0].date));
              // console.log(Number(goods[0].solePrice).toFixed(2));
              //测试排序

              // console.log(goods);
              // 记录鼠标点击次数
              var PriceClick = 0;
              var PopularClick = 0;
              var SoldNumClick = 0;
              //点击排序部分
              //jquery选中排序方式（css+js功能）
              $(".nch-sortbar-array ul li").on('click',function(e){
                //阻止默认行为以及css选中
                e.preventDefault();
                console.log($(this));
                $(".nch-sortbar-array ul li").removeClass('selected');
                $(this).addClass('selected');
                //点击对应li获取对应排序方式
                //1.默认排序
                if ($(this).hasClass("normal")){
                    console.log("默认排序");
                    goods.sort(function(a,b){
                        //序号从高到低
                        return a.id-b.id; 
                        });
                    pinJie(goods);
                }
                //2.价格排序      
                if($(this).hasClass("orderByPrice")){
                    console.log("按价格排序");
                    PriceClick++;
                    console.log(PriceClick);
                    if(PriceClick%2 == 1){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat 0px -11px");
                        goods.sort(function(a,b){
                        //价格从高到低
                        return b.soldPrice-a.soldPrice; 
                        });
                    }else if(PriceClick%2 == 0){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat -14px -11px");
                        goods.sort(function(a,b){
                        //价格从低到高
                        return a.soldPrice-b.soldPrice; 
                        });
                    }
                    pinJie(goods);
                }
                //3.销量排序
                if($(this).hasClass("orderBySoldNum")){
                    console.log("按价格排序");
                    SoldNumClick++;
                    console.log(SoldNumClick);
                    if(SoldNumClick%2 == 1){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat 0px -11px");
                        goods.sort(function(a,b){
                        //销量从高到低
                        return b.soldNum-a.soldNum; 
                        });
                    }else if(SoldNumClick%2 == 0){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat -14px -11px");
                        goods.sort(function(a,b){
                        //销量从低到高
                        return a.soldNum-b.soldNum; 
                        });
                    }
                    pinJie(goods);
                }
                //4.人气排序
                if($(this).hasClass("orderByPopular")){
                    console.log("按评论数量排序");
                    PopularClick++;
                    console.log(PopularClick);
                    if(PopularClick%2 == 1){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat 0px -11px");
                        goods.sort(function(a,b){
                        //销量从高到低
                        return b.commentNum-a.commentNum; 
                        });
                    }else if(PopularClick%2 == 0){
                        $(this).children('a').children('i').css("background","url(../images/2014shop_background_img.png) no-repeat -14px -11px");
                        goods.sort(function(a,b){
                        //销量从低到高
                        return a.commentNum-b.commentNum; 
                        });
                    }
                    pinJie(goods);
                }
                          
                });
          //网页加载完毕之后可以开始传参
          sendId();  
    })


    // 渲染函数
    function pinJie(goods){
        var goodsList = document.getElementsByClassName("list_pic")[0];
        // var best_items = document.getElementsByClassName("best_items")[0];
        var str = "";
        for(var i=0;i<goods.length;i++){
            str += '<li class="item">'
          +'<div class="goods-content" nctype_goods="226511" nctype_store="46">'
            +'<div class="goods-pic">'
              +'<a  data-param="'+goods[i].dataParam+'" href="https://www.nanshig.com/shop/item-226511.html" target="_blank" title="'+goods[i].goodName+'">'
              +'<img src="'+goods[i].imgUrl+'" rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05933889667177833_240.jpg" title="'+goods[i].goodName+'" alt="'+goods[i].goodName+'" style="display: inline;">'
              +'</a>'
            +'</div>'
           +'<div class="goods-info">'
              +'<div class="goods-pic-scroll-show">'
               +'<ul>'
                  +'<li class="selected">'
                    +'<a href="javascript:void(0);">'
                    +'<img src="'+goods[i].little_imgUrl+'" rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05933889667177833_60.jpg" style="display: inline;">'
                    +'</a></li>'
                +'</ul>'
              +'</div>'
              +'<div class="goods-name">'
                +'<a data-param="'+goods[i].dataParam+'" href="https://www.nanshig.com/shop/item-226511.html" target="_blank" title="">'+goods[i].goodName+''
                  +'<em></em>'
                +'</a>'
              +'</div>'
             +'<div class="goods-price">'
               +'<em class="sale-price" title="商城价¥'+Number(goods[i].soldPrice).toFixed(2)+'">¥'+Number(goods[i].soldPrice).toFixed(2)+'</em>'
               +'<em class="market-price" title="市场价¥'+Number(goods[i].marketPrice).toFixed(2)+'">¥'+Number(goods[i].marketPrice).toFixed(2)+'</em>'
                +'<span class="raty" data-score="5" title="很满意" style="width: 80px;">'
                +'<img src="./男士购 -_files/star-on.png" alt="1" title="很满意">&nbsp;<img src="./男士购 -_files/star-on.png" alt="2" title="很满意">&nbsp;<img src="./男士购 -_files/star-on.png" alt="3" title="很满意">&nbsp;<img src="./男士购 -_files/star-on.png" alt="4" title="很满意">&nbsp;<img src="./男士购 -_files/star-on.png" alt="5" title="很满意"><input type="hidden" name="score" value="5" readonly="readonly"></span>'
              +'</div>'
             +'<div class="goods-sub">'
                 +' <span class="goods-compare" nc_type="compare_226511" data-param="{&quot;gid&quot;:&quot;226511&quot;}"><i></i>加入对比</span>'
              +'</div>'
              +'<div class="sell-stat">'
                +'<ul>'
                  +'<li>'
                    +'<a href="https://www.nanshig.com/shop/item-226511.html#ncGoodsRate" target="_blank" class="status">'+goods[i].soldNum+'</a>'
                    +'<p>商品销量</p>'
                 + '</li>'
                  +'<li><a href="https://www.nanshig.com/shop/comments-226511-0-0.html" target="_blank">'+goods[i].commentNum+'</a>'
                    +'<p>用户评论</p>'
                  +'</li>'
                  +'<li><em member_id="17576">&nbsp;</em></li>'
                +'</ul>'
              +'</div>'
              +'<div class="store">'
                +'<a href="https://www.nanshig.com/shop/shop-46.html" title="'+goods[i].shopName+'" class="name">'+goods[i].shopName+'</a>'
              +'</div>'
              +'<div class="add-cart">'
                    +'<a href="javascript:void(0);" nctype="add_cart" data-param="'+goods[i].dataParam+'">'
                    +'<i class="icon-shopping-cart"></i>加入购物车'
                  +'</a>'
             +'</div>'
            +'</div>'
          +'</div>'
      +'</li>';
        }
        goodsList.innerHTML = str;
    }
    function sendId(){
      console.log($('.goods-name a'));
      var strId = "";
      $('.goods-name a').on("click",function(e){
        e.preventDefault();
        console.log($(this).attr("data-param"));
        strId = $(this).attr("data-param");
        //参数只能传递字符串
        location.href = "../html/details.html?"+encodeURI(strId);
      })
      $('.goods-pic a').on("click",function(e){
        e.preventDefault();
        console.log($(this).attr("data-param"));
        strId = $(this).attr("data-param");
        //参数只能传递字符串
        location.href = "../html/details.html?"+encodeURI(strId);
      })
    }
});