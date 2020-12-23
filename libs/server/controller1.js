// 1. 引入内置核心模块
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const urlModule = require('url')

// 2. 向外暴露数据
module.exports = {
  // 显示index页面
  showIndexPage(req,res){
    res.render('index')
  },
  // 显示注册页面
  showRegisterPage(req,res){
    res.render('register')
  },
  // 显示获取学生json数据的页面
  showStudentsJSONPage(req,res){
    res.render('studentsJSON')
  },
  // 显示获取学生XML数据的页面
  showStudentsXMLPage(req,res){
    res.render('studentsXML')
  },
  // GET方式获取数据
  getDataOfGet(req,res){
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      res.json({
        "code": 200,
        "des": "请求成功",
        "data": JSON.parse(data)
      })
    })
  },
  // POST方式获取数据
  getDataOfPost(req,res){
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      res.json({
        "code": 200,
        "des": "请求成功",
        "data": JSON.parse(data)
      })
    })
  },
  // GET方式提交注册的数据
  submitUserOfGet(req,res){
    let {userName,userPwd} = req.query
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      let arr = JSON.parse(data);
      let flag = true;
      arr.some(item => {
        if (userName == item.userName) {
          flag = false;
          return true;
        }
      })
      if (flag) {
        arr.push(query);
        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(arr, null, ' '), err => {
          res.writeHeader(200, {
            "Content-Type": "text/plain;charset=utf-8",
            "refresh": "3;url=/index.html"
          })
          res.json({
            "code": 200,
            "msg": "恭喜你,注册成功"
          })
        })

      } else {
        res.writeHeader(200, {
          "Content-Type": "text/plain;charset=utf-8",
          "refresh": "3;url=/register.html"
        })
        res.json({
          "code": 201,
          "msg": "你好倒霉啊,用户名已经被占用,亲,换一个吧"
        })
      }
    })
  },
  // POST方式提交注册的数据
  submitUserOfPost(req,res){
    let str = ''
    req.on('data', chunk => {
      str += chunk;
    })
    req.on('end', () => {
      let user = querystring.parse(str);// 将post过来的数据转换成对象
      fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) return console.log(err.message);
        let arr = JSON.parse(data)
        let flag = true;
        arr.some(item => {
          if (item.userName == user.userName) {
            flag = false;
            return true;
          }
        })

        if (flag) {
          arr.push(user);
          fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(arr, null, ' '), err => {
            res.writeHeader(200, {
              "Content-Type": "text/plain;charset=utf-8",
              "refresh": "3;url=/index.html"
            })
            res.end(JSON.stringify({
              "code": 200,
              "msg": "恭喜你,注册成功"
            }))
          })
        } else {
          res.writeHeader(200, {
            "Content-Type": "text/plain;charset=utf-8",
            "refresh": "3;url=/register.html"
          })
          res.end(JSON.stringify({
            "code": 201,
            "msg": "你好倒霉啊,用户名已经被占用,亲,换一个吧"
          }))
        }
      })
    })
  },
  // 验证GET方式提交过来的数据
  validateOfGet(req,res){
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      let arr = JSON.parse(data);
      let flag = true;
      arr.some(item => {
        if (query.userName == item.userName) {
          flag = false
          return true;
        }
      })
      if (flag) {
        res.writeHeader(200, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        res.end('恭喜你,用户名可以使用')
      } else {
        res.writeHeader(200, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        res.end('该用户名已经被注册,请更换一个')
      }
    })
  },
  // 验证POST方式提交过来的数据
  validateOfPost(req,res){
    let str = ''
    req.on('data', chunk => {
      str += chunk;
    })
    req.on('end', () => {
      let user = querystring.parse(str);// 将post过来的数据转换成对象
      fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        if (err) return console.log(err.message);
        let arr = JSON.parse(data)
        let flag = true;
        arr.some(item => {
          if (item.userName == user.userName) {
            flag = false;
            return true;
          }
        })

        if (flag) {
          res.writeHeader(200, {
            'Content-Type': 'text/plain;charset=utf-8'
          })
          res.end("恭喜你,此用户名可以使用")

        } else {
          res.writeHeader(200, {
            "Content-Type": "text/plain;charset=utf-8"
          })
          res.end('你好倒霉啊,用户名已经被占用,亲,换一个吧')
        }
      })
    })
  },
  // GET方式获取学生json数据
  getStudentsJSONDataOfGet(req,res){
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      var obj = {
        "code": 100,
        "des": "数据查询成功",
        "data": arr
      }
      res.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8'
      })
      res.end(JSON.stringify(obj));// 将数据返回给前端页面
    })
  },
  // POST方式获取学生json数据
  getStudentsJSONDataOfPost(req,res){
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      var obj = {
        "code": 100,
        "des": "数据查询成功",
        "data": arr
      }
      res.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8'
      })
      res.end(JSON.stringify(obj));// 将数据返回给前端页面
    })
  },
  // GET方式获取学生xml数据
  getStudentsXMLDataOfGet(req,res){
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.xml'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      fs.readFile(path.join(__dirname, './students.xml'), 'utf-8', (err, data) => {
        if (err) return console.log(err.message);
        res.writeHeader(200, {
          'Content-Type': 'application/xml;charset=utf-8'
        })
        res.end(data);
      })
    })
  },
  // POST方式获取学生xml数据
  getStudentsXMLDataOfPost(req,res){
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.xml'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      fs.readFile(path.join(__dirname, './students.xml'), 'utf-8', (err, data) => {
        if (err) return console.log(err.message);
        res.writeHeader(200, {
          'Content-Type': 'application/xml;charset=utf-8'
        })
        res.end(data);
      })
    })
  },
  // 加载静态资源 
  loadStaticResource(req,res){
    fs.readFile(path.join(__dirname, pathname), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data)
    })
  }
}