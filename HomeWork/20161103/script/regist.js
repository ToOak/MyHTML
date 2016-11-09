/**
 * Created by xushuailong on 2016/11/9.
 */
window.onload = function () {

    var submit = document.getElementById("submit");

    var account = document.getElementById("account");
    var password = document.getElementById("password");

    var province = document.getElementById("province");
    var city = document.getElementById("city");
    var area = document.getElementById("area");

    var gender = document.getElementsByName("gender");
    var hobby = document.getElementsByName("hobby");

    submit.onclick = function () {
        var registInfo;
        if (account.value != undefined && account.value != null){
           registInfo = "账号：" + account.value + "\n";
        }else {
            registInfo = "账号：\n";
        }
        if (password.value != undefined && password.value != null){
            registInfo += "密码：" + password.value + "\n";
        }else {
            registInfo += "密码：\n";
        }

        registInfo += "省：" + getProvince() + "    市：" + getCity() + "    区（县）：" + getArea() + "\n";

        registInfo += "性别：" + (gender[0].checked ? "男" : (gender[1].checked ? "女" : "不明"))  + "\n";
        registInfo += "爱好：";
        if (hobby[0].checked){
            registInfo += "音乐  ";
        }
        if (hobby[1].checked){
            registInfo += "运动  ";
        }
        if (!hobby[0].checked && !hobby[1].checked){
            registInfo += "没有  "
        }
        registInfo += "\n";

        alert(registInfo);

    }

    function getProvince() {
        switch (parseInt(province.value)){
            case 0 : {
                return "不明";
            }
            case 1 : {
                return "河南省";
            }
        }
    }

    var getCity = function () {
        switch (parseInt(city.value)){
            case 0 : {
                return "不明";
            }
            case 1 : {
                return "平顶山市";
            }
            case 2 : {
                return "信阳市";
            }
        }
    }

        // 对于DOM元素，children是指DOM Object类型的子对象，不包括tag之间隐形存在的TextNode，
        // 而childNodes包括tag之间隐形存在的TextNode对象。
    function getArea() {
        var areaItem = area.children;        // length = 11
        // var areaItem = area.childNodes;      // length = 23
        if (parseInt(area.value) == 0){
            return "不明";
        }else {
            return areaItem.item(parseInt(area.value)).innerHTML;
        }
    }


    province.onchange = function () {
        if (parseInt(province.value) == 1){
            if (parseInt(city.value) == 0){
                city.value = 1;
            }
            if (parseInt(area.value) == 0){
                area.value = 1;
            }
        }
    }

    city.onchange = function () {
        if (parseInt(city.value) == 2){
            area.innerHTML = "<option value='0' disabled >==请选择==</option>"
                + "<option value='1' selected>浉河区</option>"
                + "<option value='2'>息县</option>"
                + "<option value='3'>罗山县</option>"
                + "<option value='4'>光山县</option>"
                + "<option value='5'>商城县</option>"
                + "<option value='6'>固始县</option>"
                + "<option value='7'>潢川县</option>"
                + "<option value='8'>淮滨县</option>"
                + "<option value='9'>平桥区</option>"
                + "<option value='10'>新县</option>";
        }else if (parseInt(city.value) == 1){
            area.innerHTML = "<option value='0' disabled >==请选择==</option>"
                + "<option value='1' selected>郏县</option>"
                + "<option value='2'>宝丰县</option>"
                + "<option value='3'>鲁山县</option>"
                + "<option value='4'>舞钢市</option>"
                + "<option value='5'>汝州市</option>"
                + "<option value='6'>叶县</option>"
                + "<option value='7'>石龙区</option>"
                + "<option value='8'>湛河区</option>"
                + "<option value='9'>新华区</option>"
                + "<option value='10'>卫东区</option>";
        }
    }

    area.onchange = function () {
        if (parseInt(province.value) == 0){
            province.value = 1;
        }
        if (parseInt(city.value) == 0){
            city.value = 1;
        }
    }

}