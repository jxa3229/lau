/* 
* @Author: Marte
* @Date:   2018-10-25 09:26:28
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-26 15:30:23
*/

$(document).ready(function(){
    //gototop函数。页面归顶函数
    $('#gotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});