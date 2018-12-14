

// 详情二维码下拉
$("#xqy_h").mousemove(function(){
        $("#xqy_h").css("background","#f5f5f5");
        $("#xqy_h>img").css("display","block");
    $("#xqy_h").mouseout(function(){
            $("#xqy_h").css("background","#fff");
            $("#xqy_h>img").css("display","none")
    })
});
//商品详情点击切换
 $(".same").click(function(){
            $(".same").css("borderTop","none").css("color","black")
            $(this).css("borderTop","2px solid red");

        })
// 销售量  收藏数
$("#baby_number_x").mousemove(function(){
    $(".amn_box").css("display","block");
    $(".amn_boxb").css("display","none");
});
$("#baby_number_s").mousemove(function(){
    $(".amn_box").css("display","none");
    $(".amn_boxb").css("display","block")
});

// 右侧黑条定位
$(".wdzc_box").mousemove(function(){
    $(".wdzc_box").css("background","red");
    $("#wdzc").css("display","block");
    $(".wdzc_box").mouseout(function(){
        $(".wdzc_box").css("background","black");
        $("#wdzc").css("display","none")
    })
});

$(".wkgd_box").mousemove(function(){
    $(".wkgd_box").css("background","red");
    $("#wkgd").css("display","block");
    $(".wkgd_box").mouseout(function(){
        $(".wkgd_box").css("background","black");
        $("#wkgd").css("display","none")
    })
});

$(".wdsc_box").mousemove(function(){
    $(".wdsc_box").css("background","red");
    $("#wdsc").css("display","block");
    $(".wdsc_box").mouseout(function(){
        $(".wdsc_box").css("background","black");
        $("#wdsc").css("display","none")
    })
});


$(".yhfk_box").mousemove(function(){
    $(".yhfk_box").css("background","red");
    $("#yhfk").css("display","block");
    $(".yhfk_box").mouseout(function(){
        $(".yhfk_box").css("background","black");
        $("#yhfk").css("display","none")
    })
});


$(".ysewm_box").mousemove(function(){
    $(".ysewm_box").css("background","red");
    $("#ysewm").css("display","block");
    $(".ysewm_box").mouseout(function(){
        $(".ysewm_box").css("background","black");
        $("#ysewm").css("display","none")
    })
});

$(".mygod_box").mousemove(function(){
    $(".mygod_box").css("background","red");
    $("#mygod").css("display","block");
    $(".mygod_box").mouseout(function(){
        $(".mygod_box").css("background","black");
        $("#mygod").css("display","none")
    })
});
// 颜色选项卡
 $(".yanse_boss>li").click(function(){
            $(".yanse_boss>li").css("border","1px solid #eee").eq($(this).index()).css("border","2px solid red");
        })
// 放大镜部分
$("#donghua_wen>li").mousemove(function(){
            $("#donghua_wen>li").css("border","2px solid transparent").eq($(this).index()).css("border","2px solid #000");
        })





  input_kuang.onkeyup=function(){

      var s=document.createElement("script");
      s.src="https://suggest.taobao.com/sug?code=utf-8&q="+input_kuang.value+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
      document.getElementsByTagName("body")[0].appendChild(s);
      document.getElementsByTagName("body")[0].removeChild(s);
    }
    function fn(data){

      var res=data.result;
      var str="";
      res.forEach(item=>{
          console.log(item);
        str+=`<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_2&_input_charset=utf-8&wq=e&suggest_query=e&source=suggest">${item[0]}</a></li>`
      })
        $("#serch_kuang2").html(str)
    }



