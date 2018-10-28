<?php
    //得到前端传来的值
    $uphone = isset($_GET["username"])?$_GET["username"] : '';
    // $uphone = "15816938410";
    //连接数据库
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "group5";

        // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检测连接

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    //取得表里面的所有数据
    $loginSql = 'select * from userlogin';
    $result = $conn->query($loginSql);
    //数据库中的而所有数据打印
    $loginSqlArr = $result -> fetch_all(MYSQLI_ASSOC); 
    // var_dump($loginSqlArr);
    // echo json_encode($loginSqlArr);
    // 查询数据库中是否有相同的账号名
    $userPhoneArr = $conn->query('select * from userlogin where phone = "'.$uphone.'"');
    $userPhoneRes = $userPhoneArr->fetch_all(MYSQLI_ASSOC);
    if(count($userPhoneRes) != 0){
        // var_dump($userPhoneRes);
        echo "exist";//数据库中有
    }else{
        echo "not";//数据库中没有
    }

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
    // echo json_encode($row);

    // 关闭数据库，避免资源浪费
    $conn->close();

?>