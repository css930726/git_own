function str2obj(str) {
    var arrTemp = str.split("&");
    //  console.log(arrTemp);
    // forin 语法遍历数组，再次切分字符串
    var obj = {};
    for(var index in arrTemp) {
        var propertyArr = arrTemp[index].split("=");
        //  console.log(propertyArr);
        //  开始拼接对象
        obj[propertyArr[0]] = propertyArr[1]
        // 相当于 obj['name'] = 'mike'
        // console.log(obj);
    }
    // console.log(obj);
    return obj;
}

function obj2str(obj) {
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
}