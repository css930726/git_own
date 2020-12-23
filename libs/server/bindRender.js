// 引入模块
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')

// 向外暴露数据
module.exports = function (req,res) {
  let urlObj = url.parse(req.url, true)
  res.render = function (fileName) {
    fs.readFile(path.join(__dirname, 'views/' + fileName + '.html'), (err, data) => {
      if (err) return res.end('404')
      this.end(data)
    })
  }
  res.json = function(obj){
    this.end(JSON.stringify(obj))
  }
  ;(function(){
    req.query = urlObj.query
    req.pathname = urlObj.pathname
    if(req.method=='POST'&&req.pathname!='/uploadFile'){
      let str = ''
      req.on('data',chunk=>{
        str += chunk
      })
      req.on('end',()=>{
        let obj = querystring.parse(str)
        req.body = obj
      })
    }
  }());
 
}