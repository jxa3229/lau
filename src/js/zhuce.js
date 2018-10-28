/* 
* @Author: Marte
* @Date:   2018-10-24 09:44:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-27 17:48:42
*/

$(document).ready(function(){
    let username = document.querySelector("#phone");//手机号码
    let sms_captcha = document.querySelector("#sms_captcha");//短信验证码
    let randomCode = document.querySelector("#randomCode");//获取短信验证码
    let submitBtn = document.querySelector("#submitBtn")//按钮跳转
    //初始化。提交表单不可用,获取短信验证码不可用
    //手机输入框失去聚焦之后验证是否已经存在此手机
    username.onblur = function(){
                let _username = username.value;
                console.log(_username);
                    if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(username.value)){
                          alert("请输入正确的手机号码格式");
                          // e.preventDefault();  //e.returnValue = false;
                          // return false; 
                      }else{
                          $.get("../api/register.php",{username : _username},function(res){
                              if(res == "exist"){
                                  alert("此手机已经被使用");
                              }else if(res == "not"){
                                  console.log("可以使用");
                                  $("#submitBtn").attr("disabled","disabled");
                              }
                          })
                        } 
                }
    //模拟验证码
    //点击发送验证码后生成一个随机六位数，绑定到该点击的对象下
    randomCode.onclick = function(){
        let code = getRandomSixNum();
        console.log(this);
        this.setAttribute("code", code);
    }
    //在验证码输入框得到六位验证码，并且验证是否
    sms_captcha.onblur = function(){
        let _sms_captcha = sms_captcha.value;
        // console.log(randomCode);
        // console.log(randomCode.getAttribute("code"));
        let code = randomCode.getAttribute("code")
        if(_sms_captcha == code){
            console.log("验证码正确");
            $("#submitBtn").attr("disabled","")
        }else{
            alert("请输入正确的验证码");
        }
        //若是验证码和手机都填入完毕，则移除提交表单不可用属性
    }
    
});