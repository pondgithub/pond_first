// 我的淘宝下拉菜单
var mymai = document.getElementById("mymai");
var mymai_box = document.getElementById("mymai_box");
mymai.onmousemove = function () {
    mymai_box.style.display = "block"
    mymai.onmouseout = function () {
        mymai_box.style.display = "none"
    }
}
// 购物车下拉菜单
var mygou_box = document.getElementById("mygou_box");
var mygou = document.getElementById("mygou");
mygou_box.onmousemove = function () {
    mygou.style.display = "block"
    mygou_box.onmouseout = function () {
        mygou.style.display = "none"
    }
}

//收藏夹下拉
var mycang_box = document.getElementById("mycang_box");
var mycang = document.getElementById("mycang");
mycang_box.onmousemove = function () {
    mycang.style.display = "block"
    mycang_box.onmouseout = function () {
        mycang.style.display = "none"
    }
}

// 卖家中心下拉
var myzhong_box = document.getElementById("myzhong_box");
var myzhong = document.getElementById("myzhong");
myzhong_box.onmousemove = function () {
    myzhong.style.display = "block"
    myzhong_box.onmouseout = function () {
        myzhong.style.display = "none"
    }
}


// 9.9元疯抢
var my_crazy_box = document.getElementById("my_crazy_box");
var my_crazy = document.getElementById("my_crazy");
my_crazy_box.onmousemove = function () {
    my_crazy.style.display = "block"
    my_crazy_box.onmouseout = function () {
        my_crazy.style.display = "none"
    }
}
// 轮播
var i = 0;
var timer = null;
timer = setInterval(function () {
    if (i >= 3) {
        ul.style.left = 0;
        i = 0;
    }
    i++;
    move(ul, "left", -520 * i);
    pageColorChange()
}, 4000)

function move(ele, dir, end) {
    clearInterval(ele.timer)
    if (dir === "left") {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft - 10 + "px";
            if (ele.offsetLeft <= end) {
                ele.style.left = end + "px";
                clearInterval(ele.timer)
            }
        })
    } else {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + 10 + "px";
            if (ele.offsetLeft >= end) {
                ele.style.left = end + "px";
                clearInterval(ele.timer)
            }
        })
    }
}

next.onmouseover = function () {
    this.style.opacity = 1;
}
pre.onmouseover = function () {
    this.style.opacity = 1;
}
next.onclick = function () {
    if (i >= 3) {
        ul.style.left = 0;
        i = 0;
    }
    i++;
    move(ul, "left", -520 * i);
    pageColorChange()
}
pre.onclick = function () {
    if (i <= 0) {
        ul.style.left = "-1560px";
        i = 3;
    }
    i--;
    move(ul, "right", -520 * i);
    pageColorChange()
}
var lis = document.querySelectorAll("#page li");
// 点击事件
for (var k = 0; k < lis.length; k++) {
    lis[k].index = k;
    lis[k].onclick = function () {
        if (this.index >= i) {
            move(ul, "left", -520 * this.index);
        } else {
            move(ul, "right", -520 * this.index);
        }
        i = this.index;
        pageColorChange()
    }
}

function pageColorChange() {
    for (var t = 0; t < lis.length; t++) {
        lis[t].style.background = "#fff";
    }
    lis[i === 3 ? 0 : i].style.background = "red";
}

box.onmouseover = function () {
    clearInterval(timer);
    next.style.opacity = 1;
    pre.style.opacity = 1;
}
box.onmouseout = function () {
    timer = setInterval(function () {
        if (i >= 3) {
            ul.style.left = 0;
            i = 0;
        }
        i++;
        move(ul, "left", -520 * i);
        pageColorChange()
    }, 4000);
    next.style.opacity = 0;
    pre.style.opacity = 0;
}

// 轮播图2
var lu = 0;
var timer4 = null;
timer4 = setInterval(function () {
    if (lu >= 3) {
        ul_l.style.left = 0;
        lu = 0;
    }
    lu++;
    mo(ul_l, "left", -210 * lu);
}, 2000);

function mo(ele, dir, end) {
    clearInterval(ele.timer4)
    if (dir === "left") {
        ele.timer4 = setInterval(function () {
            ele.style.left = ele.offsetLeft - 10 + "px";
            if (ele.offsetLeft <= end) {
                ele.style.left = end + "px";
                clearInterval(ele.timer4)
            }
        })
    } else {
        ele.timer4 = setInterval(function () {
            ele.style.left = ele.offsetLeft + 10 + "px";
            if (ele.offsetLeft >= end) {
                ele.style.left = end + "px";
                clearInterval(ele.timer4)
            }
        })
    }
}

ears_box.onmouseover = function () {
    clearInterval(timer4);
    next.style.opacity = 1;
    pre.style.opacity = 1;
};
ears_box.onmouseout = function () {
    timer4 = setInterval(function () {
        if (lu >= 3) {
            ul_l.style.left = 0;
            lu = 0;
        }
        lu++;
        mo(ul_l, "left", -210 * lu);

    }, 2000);
    xiangyou.style.opacity = 0;
    xiangzuo.style.opacity = 0;
};
xiangyou.onclick = function () {
    if (lu >= 3) {
        ul_l.style.left = 0;
        lu = 0;
    }
    lu++;
    move(ul_l, "left", -210 * lu);
    pageColorChange()
}
xiangzuo.onclick = function () {
    if (lu <= 0) {
        ul_l.style.left = "-1560px";
        lu = 3;
    }
    lu--;
    move(ul_l, "right", -210 * lu);
}


var li = document.getElementsByClassName("posi1")
var timer2 = null;
for (var m = 0; m < li.length; m++) {
    li[m].index = m;
    li[m].onclick = function () {
        //判断向上还是向下
        if (600 * this.index > document.body.scrollTop) {
            layerMove("top", 600 * this.index)
        } else {
            layerMove("bottom", 600 * this.index)

        }
        for (var k = 0; k < li.length; k++) {
            li[k].style.background = "#fff";
        }
        li[this.index].style.background = "pink";
    }
}

// 滚动轴  运动
function layerMove(dir, end) {
    clearInterval(timer2);
    if (dir === "top") {
        timer2 = setInterval(function () {
            if (document.body.scrollTop <= end) {
                document.body.scrollTop += 10;
            } else {
                clearInterval(timer2);
            }
        })
    } else {
        timer2 = setInterval(function () {
            if (document.body.scrollTop >= end) {
                document.body.scrollTop -= 10;

            } else {
                clearInterval(timer2);
            }
        })
    }
}

// 淘宝折扣数据
$.ajax({
    type: "get",
    url: "data/feng.json",
    success: function (result, textStatus) {
        var data = result;
        var obj = data.obj;
        var str = ""
        for (var n = 0; n < obj.length; n++) {
            str += `<li class="baoy baoy1 baoy2">
                <img src="${obj[n].img}" alt="" class="meutu">
                <div class="ding"><p class="discrib">${obj[n].title}</p></div>
            <div class="pric">
                <span class="dolor">￥</span>
                <span class="numb">${obj[n].price}</span>
                <span class="numb unm1">.00</span>
                <span class="gree">${obj[n].you == 0 ? "包邮" : "不包邮"}</span>
                </div>
                </li>`
        }
        $("#tbzk_R").html(str)
    },
    error: function () {
        alert("数据请求失败2！")
    }
});

// 魅力女人数据
$.ajax({
    type: "get",
    url: "data/meilinvren.json",
    success: function (result, textStatus) {
        var data = result;
        var obj = data.obj;
        var str = "";
        str = `<div class="beatL">
            <span class="qureau"></span>
            <span class="womm">${obj.text}</span>
            <span class="baijia">${obj.bai}</span>
        </div>`;
        $(".beatL").html(str);
        $(".imglady").prop("src", obj.img);
        $(".spicile>span").html(obj.title);

        // var sty = "";
        // for (var n = 0; n < obj.list.length; n++) {
        //     sty += `<li class="fontco1"><a href="">${obj.list[n].black}</a></li>`
        // }
        // $(".shoplist").html(sty);

        var sky = "";
        for (var o = 0; o < obj.date.length; o++) {
            sky += `<li class="handsome">
                <p>${obj.date[o].wenzi}</p>
                <img src="${obj.date[o].img}" alt="" class="picsize">
            </li>`
        }
        $(".manman").html(sky);

    },
    error: function () {
        alert("数据请求失败！")
    }
});


$("#ears_box").on("mousemove",function () {
    $("#xiangzuo").css("opacity", "1");
    $("#xiangyou").css("opacity", "1");
})

// nav1L--women--hover
$(".cuxiao_L12").mousemove(function () {
    $(".cuxiao_L12").css("border", "none");
    $(".cuxiao_L11").css("background", "none");
    $(this).css({"border":"3px solid red"}).css({"borderRight":"3px solid #ffffff"})
    $("#women_hover").show()
    $(this).prev().css({"background":"#ff3376"})
    $(".cuxiao_L12").mouseout(function () {
        $("#women_hover").hide()
        $(".cuxiao_L12").css("border", "none");
        $(".cuxiao_L11").css("background", "none");
    })
})
$("#women_hover").mousemove(function () {
    $("#women_hover").show()
    $("#women_hover").mouseout(function () {
        $("#women_hover").hide()
    })
})

// 搜索
in_out.onkeyup=function(){
    var val=$(this).val()
    var s=document.createElement("script");
    s.src="https://suggest.taobao.com/sug?code=utf-8&q="+val+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4";
    document.getElementsByTagName("body")[0].appendChild(s);
    document.getElementsByTagName("body")[0].removeChild(s);
}
function fn(data){

    var res=data.result;
    var str="";
    res.forEach(item=>{
        str+=`<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${item[0]}&suggest=0_2&_input_charset=utf-8&wq=e&suggest_query=e&source=suggest">${item[0]}</a></li>`
    })
    $("#in_ul").html(str)
}



