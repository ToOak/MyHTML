/**
 * Created by xushuailong on 2016/10/26.
 */
var dom_width;
var dom_scrotop;
var win_height;
var head_height;
var item_height1;
var item_height2;
var item_height3;
var item_height4;
var sum_height;


$(function () {
    initValues();
    if (parseFloat(dom_width) > 480){

        // $("#item-1 image:first-child").src = "image/1-1.png";
        document.getElementById("change-1-1").src = "image/1-1.png";
        document.getElementById("change-1-2").src = "image/1-2.png";
        document.getElementById("change-2-1").src = "image/2-1.png";
        document.getElementById("change-3-2").src = "image/3-2.png";
        document.getElementById("change-4-1").src = "image/4-1.png";
        scrollEvent();

        document.getElementById("change-1-2").onclick = function (event) {
            // alert("goto download");
            console.info("goto donload: " + event.pageX + "," + event.pageY);
            console.info(document.getElementById("change-1-2").offsetLeft + "," + document.getElementById("change-1-2").offsetTop);
            if (parseFloat(event.pageY - document.getElementById("change-1-2").offsetTop) >= 30){
                // alert("download");
            }
        }
    }else {
        // alert($("#item-1 img:first-child").attr("src",""));
        // $("#item-1 image:first-child").attr("src","image/mobile_1_1.png");
        document.getElementById("change-1-1").src = "image/mobile_1_1.png";
        document.getElementById("change-1-2").src = "image/mobile_1_2.png";
        document.getElementById("change-2-1").src = "image/mobile_2_1.png";
        document.getElementById("change-3-2").src = "image/mobile_3_2.png";
        document.getElementById("change-4-1").src = "image/mobile_4_1.png";

        document.getElementById("change-1-2").onclick = function (event) {
             // alert("goto download");
            console.info("goto donload: " + event.pageX + "," + event.pageY);
            console.info(document.getElementById("change-1-2").offsetLeft + "," + document.getElementById("change-1-2").offsetTop);
            if (parseFloat(event.pageY - document.getElementById("change-1-2").offsetTop) >= 30){
                alert("download");
            }
        }

        scrollEventMobile();
    }


    $(window).resize(function() {
        dom_width = $(document).width();
        if (parseFloat(dom_width) > 480){
            // $("#item-1 image:first-child").src = "image/1-1.png";
            document.getElementById("change-1-1").src = "image/1-1.png";
            document.getElementById("change-1-2").src = "image/1-2.png";
            document.getElementById("change-2-1").src = "image/2-1.png";
            document.getElementById("change-3-2").src = "image/3-2.png";
            document.getElementById("change-4-1").src = "image/4-1.png";
            document.getElementById("change-1-2").onclick = function (event) {
                // alert("goto download");
                console.info("goto donload: " + event.pageX + "," + event.pageY);
                console.info(document.getElementById("change-1-2").offsetLeft + "," + document.getElementById("change-1-2").offsetTop);
                if (parseFloat(event.pageY - document.getElementById("change-1-2").offsetTop) >= 30){
                    // alert("download");
                }
            }
        }else {
            // alert($("#item-1 img:first-child").attr("src",""));
            // $("#item-1 image:first-child").attr("src","image/mobile_1_1.png");
            document.getElementById("change-1-1").src = "image/mobile_1_1.png";
            document.getElementById("change-1-2").src = "image/mobile_1_2.png";
            document.getElementById("change-2-1").src = "image/mobile_2_1.png";
            document.getElementById("change-3-2").src = "image/mobile_3_2.png";
            document.getElementById("change-4-1").src = "image/mobile_4_1.png";

            document.getElementById("change-1-2").onclick = function (event) {
                // alert("goto download");
                console.info("goto donload: " + event.pageX + "," + event.pageY);
                console.info(document.getElementById("change-1-2").offsetLeft + "," + document.getElementById("change-1-2").offsetTop);
                if (parseFloat(event.pageY - document.getElementById("change-1-2").offsetTop) >= 30){
                    alert("download");
                }
            }
        }
        console.info("width: " + dom_width)
    });
    // $(".equal-dom-width").css("width",dom_width);

});

// window.onload = function () {
//     document.getElementById("change-1-2").onclick = function (event) {
//         // alert("goto download");
//         console.info("goto donload: " + event.pageX + "," + event.pageY);
//         console.info(document.getElementById("change-1-2").offsetLeft + "," + document.getElementById("change-1-2").offsetTop);
//     }
//
// }

$(document).scroll(function(){
    initValues();
    dom_width = $(document).width();
    // console.info("width: " + dom_width + " scroll: " + $(document).scrollTop() + " height: " + $(window).height());
    if (parseFloat(dom_width) > 480) {
        scrollEvent();
    }else {
        scrollEventMobile();
    }
});

function scrollEventMobile() {
    sum_height = $(document).scrollTop() + $(window).height();
    console.info("scrollEventMobile: " + sum_height);
    if ( sum_height >= head_height){
        // $("#item-1 img:first-child").slideDown(2000);
        // $("#item-1 img:first-child").fadeIn(1000);
        $("#item-1 img:first-child").animate({opacity : 1},500);
        $("#item-1 img:last-child").animate({opacity : 1},500);
    }

    if ( sum_height >= (head_height + item_height1)){
        $("#item-2 img:first-child").animate({opacity : 1},500);
        $("#item-2 img:last-child").animate({opacity : 1},500);
    }

    if ( sum_height >= (head_height + item_height1 + item_height2)){
        $("#item-3 img:first-child").animate({opacity : 1},500);
        $("#item-3 img:last-child").animate({opacity : 1},500);
    }
    if ( sum_height >= (head_height + item_height1 + item_height2 + item_height3)){
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
    console.info("scrollEvent: " + sum_height);
    if ( sum_height >= head_height){
        // $("#item-1 img:first-child").slideDown(2000);
        // $("#item-1 img:first-child").fadeIn(1000);
        $("#item-1 img:first-child").animate({opacity : 1, "margin-top": 0},500);
        $("#item-1 img:last-child").animate({opacity : 1, "margin-left": 30},500);
    }

    if ( sum_height >= (head_height + item_height1)){
        $("#item-2 img:first-child").animate({opacity : 1, "margin-left": -10},500);
        $("#item-2 img:last-child").animate({opacity : 1, "margin-top": 50},500);
    }

    if ( sum_height >= (head_height + item_height1 + item_height2)){
        $("#item-3 img:first-child").animate({opacity : 1, "margin-top": 50},500);
        $("#item-3 img:last-child").animate({opacity : 1, "margin-left": 30},500);
    }
    if ( sum_height >= (head_height + item_height1 + item_height2 + item_height3)){
        $("#item-4 img:first-child").animate({opacity : 1, "margin-left": -10},500);
        $("#item-4 img:last-child").animate({opacity : 1, "margin-top": 50},500);
    }
};



