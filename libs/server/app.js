// 1. 引入模块
const http = require('http')
const bindRender = require('./bindRender')
const router = require('./router')
// 2. 创建服务器对象
var server = http.createServer()

// 3. 开启服务并监听端口
server.listen(3001, () => {
  console.log('the server is running at http://127.0.0.1:3001');
})

// 4.注册请求事件,监听请求
server.on('request', (req, res) => {
  // console.log(req.url)
  if (req.method === 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //跨域允许的header类型
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
    //跨域允许的请求方式
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    return res.end();
  } else if (req.url && req.url.indexOf('/getStudentsJSONP.js') <= -1) {
    // console.log(req.url)
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    //跨域允许的header类型
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
    //跨域允许的请求方式
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  }
  bindRender(req, res)
  router(req, res)
})

