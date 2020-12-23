

// function ajax(type, url, data, dataType, success) {
// 直接写函数名，会有可能遇到跟引用处的变量命名冲突
// 所以使用 $ 符号包裹这些函数


var $ = {
    obj2str: function (obj) {
        var str = "";

        // 遍历 obj 属性，拼接字符串
        // forin 可以遍历对象属性（key）
        for (var key in obj) {
            // console.log(key, obj[key]);
            str += "&" + key + "=" + obj[key];
            // console.log(str);
        }
        //slice 方法切割字符串，去掉第一个 & 
        str = str.slice(1);
        // console.log(str);
        return str;
    },
    // 调用时使用 $.ajax(type, url, data, dataType, success)
    // ajax: function (type, url, data, dataType, success) {
    // 多个参数的情况下，容易出错，参数的顺序必须严格固定
    // 可以使用对象的方式传参进行优化
    // {
        // name: 'tom',
        // age: 12,
    // } 
    //对象的属性顺序可变，更加灵活易用
    ajax: function (options) {
        // 重新声明变量，获取 options 对象里面的参数
        // if (options.type) {
        //     var type = options.type;
        // }else {
        //     var type = 'GET';
        // }
        // 或者使用短路求值的方法
        var type = options.type || 'GET'; //如果 options.type 不存在，那么取值 GET;

        var url = options.url || '/';
        var data = options.data || {};
        var dataType = options.dataType || 'json';
        var success = options.success || function() {};
        //设置数据默认值，避免缺少定义的错误

        // 实际传输当中，请求发送的数据对象需要转换为字符串 var data = '?userId=3'
        var data2send = this.obj2str(data) // userId=3
        // obj2str 函数 同属于 $ 对象下面的属性 所以用 this 调用

        // 1. 创建异步对象
        var xhr = new XMLHttpRequest();

        // 2. 初始化异步对象
        // 想要获取 xml 数据，得请求对应的接口,
        // get 请求如需要带参数，则拼接在 url 上
        if (type.toUpperCase() == 'POST') {
            xhr.open(type, url);
        } else {
            xhr.open(type, url + '?' + data2send);
        }

        // get 请求不需要手动设置请求头
        // post 则需要设置请求头，特别是表明 Content-Type
        if (type.toUpperCase() == 'POST') { // post POST 兼容大小写输入, 强制转为大写字母再判断
            //设置请求头
            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        }

        // 3. 设置监听异步对象状态变更函数
        xhr.onreadystatechange = function () {
            // 5. 监听异步对象，获取数据完成状态
            // 响应码 200
            // readyState 4
            if (xhr.status == 200 && xhr.readyState == 4) {
                // 6. 页面渲染
                // json 数据 在 xhr.responseText 是一个字符串
                // xml 数据 在 xhr.responseXML 是一个类 dom 的 js 对象
                // 可以使用 dom 节点操作方式处理数据 比如 querySelector
                if (dataType.toUpperCase() == 'XML') { // 兼容 xml XML 大小写  
                    var resultData = xhr.responseXML;
                } else if(dataType.toUpperCase() == 'JSON') {
                    var resultData = JSON.parse(xhr.responseText);
                } else {
                    var resultData = xhr.responseText;
                }
                success(resultData);
            }
        }

        // 4. 发送请求

        if (type.toUpperCase() == 'POST') {
            xhr.send(data2send) // post 请求 把数据带在请求体上
        } else {
            xhr.send(null) // get 请求无需请求体
        }
    }
}