<?php
    //创建连接，防止乱码输出
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "group5";

    $conn = new mysqli($servername,$username,$password,$dbname);
    $conn->set_charset('utf8');
    //取得表内所有数据
    $listPriceSql = 'select * from Goodlist';
    $result = $conn->query($listPriceSql);
    $listPriceArr = $result -> fetch_all(MYSQLI_ASSOC);
    //汉字转义
    echo json_encode($listPriceArr,JSON_UNESCAPED_UNICODE);
    $result->close();
    $conn->close();
    
?>