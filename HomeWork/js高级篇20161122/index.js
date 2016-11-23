
function Rectangle(config){
    this.config = config;
    this.div = document.createElement("div");
    var text = document.createTextNode(this.config.text);
    this.div.appendChild(text);
    for (var attr in this.config.style){
        this.div.style[attr] = this.config.style[attr];
    }
    // div.style.background = this.config.style.background;
    document.body.appendChild(this.div);
}
Rectangle.prototype.render = function () {
    //this.config //这里也可以获取该对象的config属性.

    //事件(比如点击)里的function中,this指向已经发生变化,所以需要在事件外面先对this进行缓存,
    //示例如下
    var that = this;
    var div = this.div;
    div.addEventListener('click', function () {
        switch (that.config.clickMethod){
            case 'fold':{
                if (this.style.height == "500px"){
                    this.style.height = "20px";
                    this.style.width = "80px";
                }else {
                    this.style.height = "500px";
                    this.style.width = "500px";
                }
                break;
            }
            case 'hide':{
                // that.div.style.visibility = "hidden";
                this.style.display = "none";
                break;
            }
        }
    })
}



//命题作业, 程序必须以下的两个方法实例化.
var clickDom1 = new Rectangle({
    style:{
        width:'500px',
        height:'500px',
        background:'red'
    },
    clickMethod:'fold',  //点击可以折叠
    text:'聊天界面'
}).render();

var clickDom2 = new Rectangle({
    style:{
        width:'300px',
        height:'100px',
        background:'yellow',
        position:'fixed',
        bottom:0,
        right:0
    },
    clickMethod:'hide',  //点击可以隐藏
    text:'消息界面'
}).render();


