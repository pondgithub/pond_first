
// 点击同意协议
var putOff=document.getElementById("put_off");
var boss=document.getElementById("boss");
var but=document.getElementById("but");
putOff.onclick=function(){
       boss.style.display="none";  
}
but.onclick=function(){
       boss.style.display="none";  
}
// 小蜜蜂拖动
var littleBee=document.getElementById("littlebee");
littleBee.onmousedown=function(ev){
                    var x=ev.offsetX;
                    var y=ev.offsetY;
        document.onmousemove=function(ev){
               littleBee.style.left=ev.clientX-x+"px";
               littleBee.style.top=ev.clientY-y+"px";
                if(littleBee.offsetLeft<=0){
                                littleBee.style.left=0;
                              }    
                if(littleBee.offsetTop<=0){
                                littleBee.style.top=0;
                              }
                  if(littleBee.offsetLeft>=document.documentElement.clientWidth-littleBee.offsetWidth){
                                littleBee.style.left=document.documentElement.clientWidth-littleBee.offsetWidth+"px";
                              }
                              if(littleBee.offsetTop>=document.documentElement.clientHeight-littleBee.offsetHeight){
                                littleBee.style.top=document.documentElement.clientHeight-littleBee.offsetHeight+"px";
                              } 
                }
document.onmouseup=function(ev){
          document.onmousemove=null;
}
 }
 // 小蜜蜂点击删除
 var littleBee=document.getElementById("littlebee");
 var delet=document.getElementById("delet");
 delet.onclick=function(){
  littleBee.style.display="none";
 }

 // 拖动验证条
 var enter=document.getElementById("enter");
 var move=document.getElementById("move");
var backgcolor=document.getElementById("backgcolor");
   move.onmousedown=function(ev){
    var x=ev.offsetX
                move.onmousemove=function(){
                         backgcolor.style.width=move.style.left=move.pageX-x+"px";
                          if(move.offsetLeft>=enter.offsetWidth-move.offsetWidth){
             move.style.left=enter.offsetWidth-move.offsetWidth+"px";
         }
                }
                move.onmouseup=function(){
                move.onmousemove=null;
            }

   }
   // 手机号码验证
var oinput=document.getElementById("oinput")
var oinputip=document.getElementById("oinputip")
oinput.onblur=function(){
    var reg=/^1\d{10}$/;
    oinput_res=reg.test(this.value);
    if(!oinput_res){
        oinputip.innerHTML="请输入正确的手机号码";
        oinputip.style.color="red"
    }else{
        oinputip.innerHTML="手机号码正确";
        oinputip.style.color="green"
    }
}
//滑动块
var enter=document.getElementById("enter")
var backgcolor=document.getElementById("backgcolor")
var move=document.getElementById("move")
move.onmousedown=function(ev){
    ev.preventDefault();
    move.onmousemove=function(ev){
        move.style.left=ev.clientX-enter.offsetLeft+"px";
        if(move.offsetLeft>=258){
           move.style.left=258+"px";
           move_zi.innerHTML="请按动滑块，拖动到最右边"
        }
        if(move.offsetLeft<=0){
            move.style.left=0+"px"
        }
        backgcolor.style.width=move.style.left;     
    }
    move.onmouseup=function(){
        move.onmousemove=null;
         nextbu.style.background="#ff4001";
    }  
}

//下一步
var nextbu=document.getElementById("nextbu")
nextbu.onclick=function(){
    if(pnum_res){

        window.open("register_b.html","_blank");
    }else{
        alert("请完成所有的内容")
    }
}