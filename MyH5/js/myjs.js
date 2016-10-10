/**
 * Created by xushuailong on 2016/8/18.
 */


/*
alert(new Boolean(false));   //false

 if (new Boolean(false)){     //true
    alert(true)
}else {
    alert(false)
}
 var a = "e",b = "π";
 alert(a.length);
 alert(b.length)
 */

// alert(1 << 3)
// alert(5 % -2);
// var a = new String("ab");
// alert(a === "ab")  //false
// alert(a == "ab")   //true
// alert("1" == true)    //true
// alert("1" === true)   //false

var geval = eval;
var x = "global", y = "global";
function f() {
    var x = "local";
    eval("x += 'changed';");
    return x;
}
function g() {
    var y = "local";
    geval("y += 'changed';");
    return y;
}
console.log(f(), x);
console.log(g(), y);




var Y = 1;
function setLocalVariable() {
    // document.write("局部变量Y = " + window.Y + "<br/>");
    document.write("局部变量Y = " + Y + "<br/>");
    var Y = 2;
    // Y = 2;
    document.write("局部变量Y = " + Y + "<br/>" );
}
/*document.write("全局变量Y = " + Y + "<br/>");
setLocalVariable();
document.write("全局变量Y = " + Y + "<br/>");*/
var a = [];
a.push(1,2,3);
document.write(a + "<br/>");
a.reverse();
document.write(a.toString().replace(",","").replace(",","") + "<br/>");
var s = "test", n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);
document.write(typeof (s) + "\t" + typeof (n) + "\t" + typeof (b) + "<br/>");
document.write(typeof (S) + "\t" + typeof (N) + "\t" + typeof (B) + "<br/>");


/**
 * 将传入信息弹窗出来
 * @param msg
 */
function popupMsg(msg) {
    alert(msg);
    console.info("popupMsg: " + msg);
    // NaN测试
    var a;
    console.info(a + 0);
}
/**
 * 开起空白窗口
 */
function openBlank() {
    window.open('about:blank');
}
/**
 * 根据输入内容都button状态做出改变
 */
function edit_change() {
    var elem_myText = document.getElementById("myText");
    var elem_myButton = document.getElementById("myButton");
    console.info(elem_myText.value);
    if(elem_myText.value == "abc"){
        elem_myButton.disabled = false;
    }else {
        elem_myButton.disabled = true;
    }
    console.info(elem_myButton.disabled);
}