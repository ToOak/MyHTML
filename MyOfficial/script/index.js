/**
 * Created by xushuailong on 2016/10/26.
 */
var dom_width;

var head_height;
var item_height1;
var item_height2;
var item_height3;
var item_height4;
var sum_height;

var deviceType;


$(function () {
    deviceType = getDeviceType();
    console.info("deviceType: " + deviceType);
    if (deviceType == 'android' || deviceType == 'ios'){
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet" );
        link.setAttribute("href", "style/index_mobile.css");
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(link);
    }else if (deviceType == 'null'){
        var link = document.createElement("link");
        link.setAttribute("rel", "stylesheet" );
        link.setAttribute("href", "style/index.css");
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(link);
    }
    initValues();
    if (deviceType == 'null'){

        // $("#item-1 image:first-child").src = "image/1-1.png";
        document.getElementById("change-1-1").src = "image/1-1.png";
        document.getElementById("change-1-2").src = "image/1-2.png";
        document.getElementById("change-2-1").src = "image/2-1.png";
        document.getElementById("change-3-2").src = "image/3-2.png";
        document.getElementById("change-4-1").src = "image/4-1.png";

        document.getElementById("change-1-2").onclick = function (event) {

        }

        scrollEvent();
    }else if (deviceType == 'android' || deviceType == 'ios'){
        // alert($("#item-1 img:first-child").attr("src",""));
        // $("#item-1 image:first-child").attr("src","image/mobile_1_1.png");
        document.getElementById("change-1-1").src = "image/mobile_1_1.png";
        document.getElementById("change-1-2").src = "image/mobile_1_2.png";
        document.getElementById("change-2-1").src = "image/mobile_2_1.png";
        document.getElementById("change-3-2").src = "image/mobile_3_2.png";
        document.getElementById("change-4-1").src = "image/mobile_4_1.png";

        document.getElementById("change-1-2").onclick = function (event) {
             // alert("goto download");
            if (parseFloat(event.pageY - document.getElementById("change-1-2").offsetTop) >= 30){
                console.info("download");
                if (deviceType == 'ios'){
                    window.open("https://itunes.apple.com/cn/app/jian-kang-ri-ji-pei-yang-jian/id1074251079?mt=8");
                }else if (deviceType == 'android'){
                    // window.open("http://jkm.1zjk.com/h5/static/zip/Android_1.3.0.apk");
                    window.location.href = "http://jkm.1zjk.com/h5/static/zip/Android_1.3.0.apk";
                }

            }
        }

        scrollEventMobile();
    }

    /**
     * 获取设备类型
     * @returns {*}
     */
    function getDeviceType() {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isAndroid){
            console.log('android')
            return 'android';
        }else if(isiOS){
            console.log('ios')
            return 'ios'
        }else{
            console.log('others')
            return 'null';
        }
    }

    $(window).resize(function() {
        dom_width = $(document).width();
        console.info("width: " + dom_width)
    });
    // $(".equal-dom-width").css("width",dom_width);

});

$(document).scroll(function(){
    initValues();
    if (deviceType == 'null') {
        scrollEvent();
    }else if (deviceType == 'android' || deviceType == 'ios'){
        scrollEventMobile();
    }
});

function scrollEventMobile() {
    sum_height = $(document).scrollTop() + $(window).height();
    // console.info("scrollEventMobile: " + sum_height);
    if (( parseFloat($("#item-1 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-1 img:last-child").css("opacity")) == 0)
        && sum_height >= head_height){
        // $("#item-1 img:first-child").slideDown(2000);
        // $("#item-1 img:first-child").fadeIn(1000);
        console.info("mobile_action_1");
        $("#item-1 img:first-child").animate({opacity : 1},500);
        $("#item-1 img:last-child").animate({opacity : 1},500);
    }

    if ( ( parseFloat($("#item-2 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-2 img:last-child").css("opacity")) == 0)
        && sum_height >= (head_height + item_height1)){
        console.info("mobile_action_2");
        $("#item-2 img:first-child").animate({opacity : 1},500);
        $("#item-2 img:last-child").animate({opacity : 1},500);
    }

    if ( ( parseFloat($("#item-3 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-3 img:last-child").css("opacity")) == 0)
        && sum_height >= (head_height + item_height1 + item_height2)){
        console.info("mobile_action_3");
        $("#item-3 img:first-child").animate({opacity : 1},500);
        $("#item-3 img:last-child").animate({opacity : 1},500);
    }

    if ( ( parseFloat($("#item-4 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-4 img:last-child").css("opacity")) == 0)
        &&sum_height >= (head_height + item_height1 + item_height2 + item_height3)){
        console.info("mobile_action_4");
        $("#item-4 img:first-child").animate({opacity : 1},500);
        $("#item-4 img:last-child").animate({opacity : 1},500);
    }
};

function initValues() {
    head_height =  $("#head").height();
    dom_width = $(document).width();
    item_height1 = $("#item-1").height();
    item_height2 = $("#item-2").height();
    item_height3 = $("#item-3").height();
    item_height4 = $("#item-4").height();
};


function scrollEvent() {
    // dom_scrotop &  win_height
    sum_height = $(document).scrollTop() + $(window).height();
    // console.info("scrollEvent: " + sum_height);
    if (( parseFloat($("#item-1 img:first-child").css("opacity")) == 0
        || parseFloat($("#item-1 img:last-child").css("opacity")) == 0
        || parseFloat($("#item-1 img:first-child").css("margin-top")) != 0
        || parseFloat($("#item-1 img:last-child").css("margin-left")) != 30)
        && sum_height >= head_height){

        // $("#item-1 img:first-child").slideDown(2000);
        // $("#item-1 img:first-child").fadeIn(1000);
        console.info("action_1");
        $("#item-1 img:first-child").animate({opacity : 1, "margin-top": 0},500);
        $("#item-1 img:last-child").animate({opacity : 1, "margin-left": 30},500);
    }

    if ( ( parseFloat($("#item-2 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-2 img:last-child").css("opacity")) == 0
        || parseFloat($("#item-2 img:first-child").css("margin-left")) != -10
        ||  parseFloat($("#item-2 img:last-child").css("margin-top")) != 50)
        && sum_height >= (head_height + item_height1)){

        console.info("action_2");
        $("#item-2 img:first-child").animate({opacity : 1, "margin-left": -10},500);
        $("#item-2 img:last-child").animate({opacity : 1, "margin-top": 50},500);
    }

    if ( ( parseFloat($("#item-3 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-3 img:last-child").css("opacity")) == 0
        || parseFloat($("#item-3 img:first-child").css("margin-top")) != 50
        ||  parseFloat($("#item-3 img:last-child").css("margin-left")) != 30)
        && sum_height >= (head_height + item_height1 + item_height2)){

        console.info("action_3");
        $("#item-3 img:first-child").animate({opacity : 1, "margin-top": 50},500);
        $("#item-3 img:last-child").animate({opacity : 1, "margin-left": 30},500);
    }

    if ( ( parseFloat($("#item-4 img:first-child").css("opacity")) == 0
        ||  parseFloat($("#item-4 img:last-child").css("opacity")) == 0
        || parseFloat($("#item-4 img:first-child").css("margin-left")) != -10
        ||  parseFloat($("#item-4 img:last-child").css("margin-top")) != 50)
        && sum_height >= (head_height + item_height1 + item_height2 + item_height3)){

        console.info("action_4");
        $("#item-4 img:first-child").animate({opacity : 1, "margin-left": -10},500);
        $("#item-4 img:last-child").animate({opacity : 1, "margin-top": 50},500);
    }
};



