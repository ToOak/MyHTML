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
        scrollEvent();
    }else {

    }
    // $(".equal-dom-width").css("width",dom_width);

});

$(document).scroll(function(){
    if (parseFloat(dom_width) > 480) {
        scrollEvent();
    }else {

    }
})

var initValues = function () {
    head_height =  $("#head").height();
    dom_width = $(document).width();
    item_height1 = $("#item-1").height();
    item_height2 = $("#item-2").height();
    item_height3 = $("#item-3").height();
    item_height4 = $("#item-4").height();
};


var scrollEvent = function () {
    // dom_scrotop &  win_height
    sum_height = $(document).scrollTop() + $(window).height();
    console.info(sum_height);
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


// $(window).resize(function() {
//     width = $(document).width();
//     $(".equal-dom-width").css("width",width);
//     // alert("width: " + width);
//     console.info("width: " + width)
// });
