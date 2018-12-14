<?php
$a=$_POST["user"];
$b=$_POST["password"];
// $a "aaa" 用户名
// $b  "123" 密码
$arr=array("梁悦","龙珠","老师");
$arr2=array("梁悦"=>"123","龙珠"=>"123","老师"=>"123");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
  echo '{"code":0}'; 
}
?>



