var erweima=document.getElementById("erweima");
var entryBox=document.getElementById("entrybox");
var entryBoxes=document.getElementById("entryboxes");
var dianshi=document.getElementById("dianshi");
erweima.onclick=function () {
    entryBox.style.display="none";
    entryBoxes.style.display="block";
};
dianshi.onclick=function () {
    entryBox.style.display="block";
    entryBoxes.style.display="none";
};

var ajax=new XMLHttpRequest();
ajax.open("post","../php/entry.php ",true);
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("user="+username.value+"&password="+password.value);
ajax.onreadystatechange=function () {
    if(ajax.readyState===4&&ajax.status===200){
        console.log(ajax.responseText);
        var res=JSON.parse(ajax.responseText).code;
        if(res===0){
                  alert("用户名不存在")
               }else if(res===1){
                  alert("密码错误")
               }else if(res===2){
                  alert("登录成功");
               }    
    }
}
