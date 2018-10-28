/* 
* @Author: Marte
* @Date:   2018-10-23 11:14:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-23 18:16:39
*/

$(document).ready(function(){
    let username = document.querySelector("#phone");
    let tip = username.nextElementSibling;
    username.onblur = function(){
                let _username = username.value;
                $.get("../api/register.php",{username : _username},function(res){
                    if(res == "exist"){
                        // tip.innerHTML = "该用户名太受欢迎了,换一个吧";
                        // tip.classList.add("exist");
                        alert("此手机已经被使用");
                    }else if(res == "not"){
                        // tip.innerHTML = "恭喜你，可以使用";
                        // tip.classList.remove("exist");
                        alert("可以使用");
                    }
                })
            }
});