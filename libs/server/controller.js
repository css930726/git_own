// 1. 引入内置核心模块
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const urlModule = require('url')
const jsonxml = require('jsonxml')

// 引入第三方模块
const formidable = require('formidable')

// 2. 向外暴露数据
module.exports = {
  // 显示index页面
  showIndexPage(req, res) {
    res.writeHeader(200, {
      "Content-Type": "text/html; charset=UTF-8",
    })
    res.render('index')
  },
  // 梁伟老师新加方法
  // 显示其他页面
  showPage(req, res, pathname) {
    res.writeHeader(200, {
      "Content-Type": "text/html; charset=UTF-8",
    })
    res.render(pathname.slice(0, -5));
  },

  // 显示注册页面
  showRegisterPage(req, res) {
    res.render('register')
  },
  // 显示登陆页面
  showLoginPage(req, res) {
    res.render('login')
  },
  // 显示获取学生json数据的页面
  showStudentsJSONPage(req, res) {
    res.render('studentsJSON')
  },
  // 显示获取学生XML数据的页面
  showStudentsXMLPage(req, res) {
    res.render('studentsXML')
  },
  // 显示水果超市主页面
  showFruitsPage(req, res) {
    res.render('fruits')
  },
  /**
 * @api {get} /getHeroList 获取所有英雄
 * @apiName getHeroList
 * @apiGroup 王者荣耀
 * @apiExample {url} 请求样例：
 *  http://127.0.0.1:3001/getHeroList
 * @param heroName 英雄名字
 * @apiExample  http://127.0.0.1:3001/getHeroList?heroName=白起
 * @apiSuccess {Number} code 响应码 成功 = 200
 * @apiSuccess {String} msg 响应描述
 * @apiSuccess {Object[]} data 英雄组成的数组
 * @apiSuccess {String} data.id 英雄 ID
 * @apiSuccess {String} data.name 英雄名
 * @apiSuccess {String} data.gender 英雄性别
 * @apiSuccess {String} data.img 英雄头像
 * @apiSuccess {String} data.isdelete 是否已经删除，1表示删除，0表示没有
 */
  getHeroList(req, res) {
    // fs.readFile(path.join(__dirname, './heimaHero.json'), 'utf-8', (err, data) => {
    //   if (err) return res.end('404')
    //   res.writeHeader(200, {
    //     'Content-Type': 'application/json ;charset=utf-8'
    //   })
    //   res.json({
    //     "code": 200,
    //     "msg": "请求成功",
    //     "data": JSON.parse(data)
    //   })
    // })
    try {
      fs.readFile(path.join(__dirname, './heimaHero.json'), 'utf-8', (err, data) => {
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器处理失败",
          "data": {}
        })

        try {
          let heroName = req.query.heroName || false;
          let jsonData = JSON.parse(data);
          let resData = jsonData;

          if (heroName) {
            resData = [];
            for (const iterator of jsonData) {
              if (iterator.name.indexOf(heroName) > -1) {
                // resData = [iterator];    
                resData.push(iterator)
              }
            }
          }

          res.json({
            "code": 200,
            "msg": "请求成功",
            "data": resData
          })
        } catch (innererr) {
          return res.json({
            "code": 500,
            "msg": "服务器处理失败:" + innererr ? innererr.message : innererr,
            "data": {}
          })
        }
      })
    } catch (err) {
      return res.json({
        "code": 500,
        "msg": "服务器处理失败:" + err ? err.message : err,
        "data": {}
      })
    }
  },
  /**
* @api {get} /getHeroById 获取单个英雄数据
* @apiName getHeroById
* @apiParam {Number} id 英雄id
* @apiGroup 王者荣耀
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/getHeroById
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
* @apiSuccess {String} data 英雄对象
* @apiSuccess {String} id 英雄 ID
* @apiSuccess {String} name 英雄名
* @apiSuccess {String} gender 英雄性别
* @apiSuccess {String} img 英雄头像
* @apiSuccess {String} isdelete 是否已经删除，1表示删除，0表示没有
*/
  getHeroById(req, res) {
    fs.readFile(path.join(__dirname, './heimaHero.json'), 'utf-8', (err, data) => {
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      if (err) return res.json({
        "code": 500,
        "msg": "服务器处理失败",
        "data": {}
      })

      try {
        const { id = 1 } = req.query;
        const jData = JSON.parse(data);
        const hero = jData && jData.find(item => {
          return item.id == id
        })
        res.json({
          "code": 200,
          "msg": "请求成功",
          "data": hero || {}
        })
      } catch (errout) {
        res.json({
          "code": 500,
          "msg": "服务器处理失败:" + errout ? errout.message : errout,
          "data": {}
        })
      }
    })
  },
  /**
* @api {get} /delHeroById 删除单个英雄
* @apiName delHeroById
* @apiParam {Number} id 英雄id
* @apiGroup 王者荣耀
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/delHeroById
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
*/
  delHeroById(req, res) {
    res.writeHeader(200, {
      'Content-Type': 'application/json ;charset=utf-8'
    })
    const { id } = req.query;
    const filePath = path.join(__dirname, './heimaHero.json')

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) res.json({
        "code": 500,
        "msg": "服务器处理失败:"+err?err.message:err
      })

      const jData = JSON.parse(data);
      const index = jData.findIndex(item => {
        return item.id == id
      })
      if (index === -1) {
        res.json({
          "code": 500,
          "msg": "服务器找不到对应id的数据，请检查传入的id是否存在",
        })
      }
      jData.splice(index, 1);
      fs.writeFile(filePath, JSON.stringify(jData), (err1) => {
        if (err1) {
          res.json({
            "code": 500,
            "msg": "服务器处理失败："+err1?err1.message:err1,
          })
        } else {
          res.json({
            "code": 200,
            "msg": "删除数据成功",
          })
        }
      })
    })
  },

  /**
* @api {post} /addHero 添加英雄数据
* @apiName addHero
* @apiParam {String} name 英雄名
* @apiParam {String} gender 英雄性别
* @apiParam {String} img 英雄头像
* @apiGroup 王者荣耀
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/addHero
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
*/
  addHero(req, res) {
    req.on('end', () => {
      const filePath = path.join(__dirname, './heimaHero.json')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器处理失败:" + err ? err.message : err,
        })

        try {
          const hero = req.body;
          // 给hero添加默认的isdelete属性
          const jData = JSON.parse(data);
          // 获取最后一个id值
          const lastId = jData[jData.length - 1] && jData[jData.length - 1].id || 0;
          hero.id = Number(lastId) + 1;
          jData.push(hero);
          fs.writeFile(filePath, JSON.stringify(jData), (err1) => {
            if (err1) {
              res.json({
                "code": 500,
                "msg": "服务器处理失败:" + err1 ? err1.message : err1
              })
            } else {
              res.json({
                "code": 200,
                "msg": "添加成功",
              })
            }
          })
        } catch (errout) {
          res.json({
            "code": 500,
            "msg": "服务器处理失败:" + errout ? errout.message : errout
          })
        }
      })
    })
  },

  /**
  * @api {post} /updateHero 更新英雄数据
  * @apiName updateHero
  * @apiParam {Number} id 英雄ID
  * @apiParam {String} name 英雄名
  * @apiParam {String} gender 英雄性别
  * @apiParam {String} img 英雄头像
  * @apiGroup 王者荣耀
  * @apiExample {url} 请求样例：
  *  http://127.0.0.1:3001/updateHero
  * @apiSuccess {Number} code 响应码 成功 = 200
  * @apiSuccess {String} msg 响应描述
  */
  updateHero(req, res) {
    req.on('end', () => {
      const hero = req.body;
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      if (!hero.id) return res.json({ code: 500, msg: 'id不能为空' })

      const filePath = path.join(__dirname, './heimaHero.json')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err)  res.json({ code: 500, msg: '服务器处理失败:'+err?err.message:err })

        const jData = JSON.parse(data);
        const index = jData.findIndex(item => {
          return item.id == hero.id;
        })
        if (index === -1) {
          return res.json({
            "code": 500,
            "msg": "找不到该数据,请确认传入的英雄ID是否正常",
          })
        }
        const updateHero = Object.assign(jData[index], hero);
        jData[index] = updateHero;
        fs.writeFile(filePath, JSON.stringify(jData), (err1) => {
          if (err1) {
            res.json({
              "code": 500,
              "msg": "服务器处理失败："+err1?err1.message:err1,
            })
          } else {
            res.json({
              "code": 200,
              "msg": "更新成功",
            })
          }
        })
      })
    })
  },
  // 获取所有商品
  /**
   * @api {get} /getProductList 获取所有商品
   * @apiName getProductList
   * @apiGroup 小米商城
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getProductList
   * @apiSuccess {Number} code 响应码 成功 = 200
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object[]} data 商品数组
   * @apiSuccess {String} data.id 商品 ID
   * @apiSuccess {String} data.name 商品名字
   * @apiSuccess {String} data.subName 商品子标题
   * @apiSuccess {String} data.marketPrice 商品原价
   * @apiSuccess {String} data.memberPrice 商品会员价
   * @apiSuccess {String} data.src 商品图片
   */
  getProductList(req, res) {
    fs.readFile(path.join(__dirname, './xiaomi.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      res.json({
        "code": 200,
        "msg": "请求成功",
        "data": JSON.parse(data)
      })
    })
  },
  /**
* @api {get} /getProductById 获取单个商品数据
* @apiName getProductById
* @apiParam {Number} id 商品id
* @apiGroup 小米商城
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/getProductById
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
* @apiSuccess {String} id 商品 ID
* @apiSuccess {String} name 商品名字
* @apiSuccess {String} subName 商品子标题
* @apiSuccess {String} marketPrice 商品原价
* @apiSuccess {String} memberPrice 商品会员价
* @apiSuccess {String} src 商品图片
*/
  getProductById(req, res) {
    fs.readFile(path.join(__dirname, './xiaomi.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      const { id = 1 } = req.query;
      const jData = JSON.parse(data);
      const hero = jData && jData.find(item => {
        return item.id == id
      })
      res.json({
        "code": 200,
        "msg": "请求成功",
        "data": hero || {}
      })
    })
  },

  /**
* @api {get} /delProductById 删除单个商品
* @apiName delProductById
* @apiParam {Number} id 商品id
* @apiGroup 小米商城
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/delProductById
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
*/
  delProductById(req, res) {
    res.writeHeader(200, {
      'Content-Type': 'application/json ;charset=utf-8'
    })
    const { id } = req.query;
    const filePath = path.join(__dirname, './xiaomi.json')
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.end('404')
      const jData = JSON.parse(data);
      const index = jData.findIndex(item => {
        return item.id == id
      })
      if (index === -1) {
        res.json({
          "code": 201,
          "msg": "找不到对应id的数据",
        })
      }
      jData.splice(index, 1);
      fs.writeFile(filePath, JSON.stringify(jData), (err) => {
        if (err) {
          res.json({
            "code": 201,
            "msg": "删除失败",
          })
        } else {
          res.json({
            "code": 200,
            "msg": "删除成功",
          })
        }
      })
    })
  },

  /**
* @api {post} /addProduct 添加商品数据
* @apiName addProduct
* @apiParam {String} name 商品名字
* @apiParam {String} subName 商品子标题
* @apiParam {String} marketPrice 商品原价
* @apiParam {String} memberPrice 商品会员价
* @apiParam {String} src 商品图片
* @apiGroup 小米商城
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/addProduct
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
*/
  addProduct(req, res) {
    req.on('end', () => {
      const filePath = path.join(__dirname, './xiaomi.json')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.end('404')
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })
        const hero = req.body;
        // 给hero添加默认的isdelete属性
        hero.isdelete = 0;
        const jData = JSON.parse(data);
        // 获取最后一个id值
        const lastId = jData[jData.length - 1] && jData[jData.length - 1].id || 0;
        hero.id = Number(lastId) + 1;
        jData.push(hero);
        fs.writeFile(filePath, JSON.stringify(jData), (err) => {
          if (err) {
            res.json({
              "code": 201,
              "msg": "添加失败",
            })
          } else {
            res.json({
              "code": 200,
              "msg": "添加成功",
            })
          }
        })
      })
    })
  },

  /**
  * @api {post} /updateProduct 更新商品数据
  * @apiName updateProduct
  * @apiParam {Number} id 商品id
  * @apiParam {String} name 商品名字
  * @apiParam {String} subName 商品子标题
  * @apiParam {String} marketPrice 商品原价
  * @apiParam {String} memberPrice 商品会员价
  * @apiParam {String} src 商品图片
  * @apiParam {String} isdelete 更新删除状态
  * @apiGroup 小米商城
  * @apiExample {url} 请求样例：
  *  http://127.0.0.1:3001/updateProduct
  * @apiSuccess {Number} code 响应码 成功 = 200
  * @apiSuccess {String} msg 响应描述
  */
  updateProduct(req, res) {
    req.on('end', () => {
      const hero = req.body;
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      if (!hero.id) return res.json({ code: 201, msg: 'id不能为空' })
      const filePath = path.join(__dirname, './xiaomi.json')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) return res.end('404')
        const jData = JSON.parse(data);
        const index = jData.findIndex(item => {
          console.log(item.id, hero.id)
          return item.id == hero.id;
        })
        if (index === -1) {
          return res.json({
            "code": 201,
            "msg": "找不到该数据",
          })
        }
        const updateHero = Object.assign(jData[index], hero);
        jData[index] = updateHero;
        fs.writeFile(filePath, JSON.stringify(jData), (err) => {
          if (err) {
            res.json({
              "code": 201,
              "msg": "更新失败",
            })
          } else {
            res.json({
              "code": 200,
              "msg": "更新成功",
            })
          }
        })
      })
    })
  },
  // 获取所有的水果数据
  /**
   * @api {get} /getAllFruitsData 水果列表数据
   * @apiName getAllFruitsData
   * @apiGroup Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getAllFruitsData
   * @apiSuccess {Number} code 响应码 成功 = 200
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object[]} data 水果数据对象组成的数组
   * @apiSuccess {String} data.id 水果 ID
   * @apiSuccess {String} data.name 水果名
   * @apiSuccess {String} data.src 水果详情图
   */
  getAllFruitsData(req, res) {
    fs.readFile(path.join(__dirname, './fruits.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      res.json({
        "code": 200,
        "des": "请求成功",
        "data": JSON.parse(data)
      })
    })
  },
  // 显示水果详情页面
  showDetailPage(req, res) {
    res.render('detail')
  },
  // 根据id获取某个水果详情
  /**
  * @api {get} /getOneFruit 单个水果数据
  * @apiName getOneFruit
  * @apiParam {Number} [id] 水果 ID
  * @apiGroup Data
  * @apiExample {url} 请求样例：
  *  http://127.0.0.1:3001/getOneFruit
  * @apiSuccess {Number} code 响应码 成功 = 200
  * @apiSuccess {String} des 响应描述
  * @apiSuccess {Object} data 水果数据对象
  * @apiSuccess {String} data.id 水果 ID
  * @apiSuccess {String} data.name 水果名
  * @apiSuccess {String} data.src 水果详情图
  */
  getOneFruitById(req, res) {
    fs.readFile(path.join(__dirname, 'fruits.json'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      let arr = JSON.parse(data);
      let flag = true;
      var fruit;
      arr.some(item => {
        if (req.query.id == item.id) {
          flag = false
          fruit = item
          return true;
        }
      })
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      if (flag) return res.json({
        "code": 201,
        "msg": "抱歉没找到"

      })

      res.json({
        "code": 200,
        "data": fruit
      })
    })
  },
  // GET方式获取数据

  /* 梁伟老师新添加接口********************************************* */

  /**
   * @api {get} /getHero 获取英雄数据
   * @apiParam {String} [heroName] 英雄名
   * @apiParamExample 带参数请求样例：
   *  /getHero?heroName=程咬金
   * @apiName getHero
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getHero
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 英雄对象
   * @apiSuccess {String} data.id 英雄 ID
   * @apiSuccess {String} data.cname 英雄名
   * @apiSuccess {String} data.title 英雄外号
   * @apiSuccess {String} data.skin_name 英雄皮肤
   */
  getHero(req, res) {
    fs.readFile(path.join(__dirname, './hero-copy.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let heroName = req.query.heroName || false;
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "英雄不存在"
      }

      let count = jsonData.length;
      if (!heroName) {
        var heroId = (Math.random() * count + 1).toFixed(0)
        for (const iterator of jsonData) {
          if (iterator.id == heroId) {
            resData = iterator
          }
        }
      } else {
        for (const iterator of jsonData) {
          if (iterator.cname == heroName) {
            resData = iterator
          }
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },


  /**
   * @api {get} /getHeroSkin 随机获取英雄皮肤数据
   * @apiParam {String} [heroName] 英雄名
   * @apiParamExample 带参数请求样例：
   *  /getHeroSkin?heroName=程咬金
   * @apiName getHeroSkin
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getHeroSkin
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 英雄对象
   * @apiSuccess {String} data.id 英雄 ID
   * @apiSuccess {String} data.cname 英雄名
   * @apiSuccess {String} data.skin_name 英雄皮肤
   */
  getHeroSkin(req, res) {
    fs.readFile(path.join(__dirname, './hero.json'), 'utf-8', (err, data) => {
      if (err) return res.json({
        "code": 500,
        "msg": "服务器处理失败" + err ? err.message : err,
      })

      let heroName = req.query.heroName || false;
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "英雄不存在"
      }

      let count = jsonData.length;
      if (!heroName) {
        var heroId = (Math.random() * count + 1).toFixed(0)
        for (const iterator of jsonData) {
          if (iterator.id == heroId) {
            resData = iterator
          }
        }
      } else {
        for (const iterator of jsonData) {
          if (iterator.cname == heroName) {
            resData = iterator
          }
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },
  /**
* @api {post} /addHeroSkin 添加英雄和皮肤数据
* @apiName addHeroSkin
* @apiParam {String} cname 英雄名
* @apiParam {String} skin_name 英雄皮肤
* @apiGroup 王者荣耀
* @apiExample {url} 请求样例：
*  http://127.0.0.1:3001/addHeroSkin
* @apiSuccess {Number} code 响应码 成功 = 200
* @apiSuccess {String} msg 响应描述
*/
  addHeroSkin(req, res) {
    //   // 先定义一个空字符串，里面准备存放接收到的数据
    //  let str = '';
    //  req.on('data', (chunk) => {
    //    console.log(111);
    //      str += chunk; // 把接收到的一块数据拼接到str中
    //  });

    req.on('end', () => {
      // console.log(str);
      const filePath = path.join(__dirname, './hero.json')
      fs.readFile(filePath, 'utf-8', (err, data) => {
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器处理失败" + err ? err.message : err,
        })

        let hero = req.body;
        const jData = JSON.parse(data);
        // 获取最后一个id值
        const lastId = jData[jData.length - 1] && jData[jData.length - 1].id || 0;
        hero.id = Number(lastId) + 1;
        jData.push(hero);
        fs.writeFile(filePath, JSON.stringify(jData), (err) => {
          if (err) {
            res.json({
              "code": 500,
              "msg": "服务器处理失败" + err ? err.message : err,
            })
          } else {
            res.json({
              "code": 200,
              "msg": "添加成功",
            })
          }
        })
      })
    })
  },
  /**
   * @api {post} /toHuoxing 转换火星文
   * @apiParam {String} content 需要转换的内容，小于 250 个字符
   * @apiName toHuoxing
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/toHuoxing
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据
   * @apiSuccess {String} data.content 转换后的内容
   */
  toHuoxing(req, res) {
    fs.readFile(path.join(__dirname, './huoxing.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')
      let reqObj = req.body
      let contentOrigin = reqObj.content || false;
      let jsonData = JSON.parse(data);
      let resData;

      if (!contentOrigin) {
        resData = {
          "content": "没有输入数据"
        }
      } else if (contentOrigin.length > 250) {
        resData = {
          "content": "内容不能超过 250 字符"
        }
      } else {
        const contentArrOrigin = contentOrigin.split('');
        contentArrOrigin.forEach((element, index) => {
          const shouldConvert = Math.floor((Math.random() * 100) + 1) > 50;
          if (shouldConvert && jsonData[element]) {
            contentArrOrigin[index] = jsonData[element];
          }
        });
        resData = {
          "content": contentArrOrigin.join('')
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },

  /**
   * @api {get} /getTwisters 获取歇后语数据
   * @apiParam {Number} [twistersId] 歇后语 ID
   * @apiParamExample 带参数请求样例：
   *  /getTwisters?twistersId=2
   * @apiName getTwisters
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getTwisters
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 歇后语对象
   * @apiSuccess {String} data.id 歇后语 ID
   * @apiSuccess {String} data.riddle 歇后语谜语
   * @apiSuccess {String} data.answer 歇后语答案
   */
  getTwisters(req, res) {
    fs.readFile(path.join(__dirname, './twisters.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let twistersId = req.query.twistersId || (Math.random() * 142 + 1).toFixed(0)
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "歇后语不存在"
      }
      for (const iterator of jsonData) {
        if (iterator.id == twistersId) {
          resData = iterator
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },

  /**
   * @api {get} /getJoke 获取笑话数据
   * @apiParam {Number} [jokeId] 笑话 ID
   * @apiParamExample 带参数请求样例：
   *  /getJoke?jokeId=2
   * @apiName getJoke
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getJoke
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 笑话对象
   * @apiSuccess {String} data.id 笑话 ID
   * @apiSuccess {String} data.content 笑话内容
   */
  getJoke(req, res) {
    fs.readFile(path.join(__dirname, './joke.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let jokeId = req.query.jokeId || (Math.random() * 39 + 1).toFixed(0)
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "笑话不存在"
      }
      for (const iterator of jsonData) {
        if (iterator.id == jokeId) {
          resData = iterator
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },

  /**
   * @api {get} /getUserNameAjax 获取演示用户数据
   * @apiParam {Number} [userId] 用户 ID
   * @apiParamExample 带参数请求样例：
   *  /getUserNameAjax?userId=2
   * @apiName getUserNameAjax
   * @apiGroup Sample Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getUserNameAjax
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 用户对象
   * @apiSuccess {String} data.id 用户 ID
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.age 年龄
   * @apiSuccess {String} data.gender 性别
   * @apiSuccess {String} data.zhuanye 专业
   * @apiSuccess {String} data.address 地址
   */
  getUserNameAjax(req, res) {
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let userId = req.query.userId || (Math.random() * 5 + 1).toFixed(0)
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "用户不存在"
      }
      for (const iterator of jsonData) {
        if (iterator.id == userId) {
          resData = iterator
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },

  /**
   * @api {get} /getUserNameXML 获取演示 XML 数据
   * @apiParam {Number} [userId] 用户 ID
   * @apiParamExample 带参数请求样例：
   *  /getUserNameXML?userId=2
   * @apiName getUserNameXML
   * @apiGroup Sample Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getUserNameXML
   * @apiSuccess {XML} root 响应数据, 根节点
   * @apiSuccess {XML} root.items items 节点
   * @apiSuccess {XML} root.items.item 各个 item 节点
   * @apiSuccess {String} root.items.item.id 用户 ID 节点
   * @apiSuccess {String} root.items.item.name 用户名节点
   * @apiSuccess {Number} root.items.item.age 年龄节点
   * @apiSuccess {String} root.items.item.gender 性别节点
   * @apiSuccess {String} root.items.item.zhuanye 专业节点
   * @apiSuccess {String} root.items.item.address 地址节点
   */
  getUserNameXML(req, res) {
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let userId = req.query.userId || (Math.random() * 5 + 1).toFixed(0)
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "用户不存在"
      }
      for (const iterator of jsonData) {
        if (iterator.id == userId) {
          resData = iterator
        }
      }

      res.writeHeader(200, {
        'Content-Type': 'application/xml ;charset=utf-8'
      })

      let xmlObj = {
        root: {
          items: {
            item: resData
          }
        }
      }

      let XMLstring = jsonxml(xmlObj, {
        header: true,
        indent: true
      });

      res.end(XMLstring)
    })
  },

  /**
   * @api {get} /getNameNoContentType 无 Content-Type 用户数据
   * @apiName getNameNoContentType
   * @apiDescription 一个没有 Content-Type 的数据返回例子，演示了 Content-Type 缺失或错误时的状态，具体是，由于没有 Content-Type 设定字符集，中文显示乱码。
   * @apiGroup Sample Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getNameNoContentType
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据, 用户对象
   * @apiSuccess {String} data.id 用户 ID
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.age 年龄
   * @apiSuccess {String} data.gender 性别
   * @apiSuccess {String} data.zhuanye 专业
   * @apiSuccess {String} data.address 地址
   */
  getNameNoContentType(req, res) {
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('404')

      let userId = (Math.random() * 5 + 1).toFixed(0)
      let jsonData = JSON.parse(data);
      let resData = {
        "name": "用户不存在"
      }
      for (const iterator of jsonData) {
        if (iterator.id == userId) {
          resData = iterator
        }
      }

      res.json({
        "code": 200,
        "des": "请求成功",
        "data": resData
      })
    })
  },

  /**
   * @api {get} /getRandomDigit 获取 0-99 随机数
   * @apiName getRandomDigit
   * @apiGroup Just For Fun
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getRandomDigit
   * @apiSuccess {Number} code 响应状态码
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object} data 响应数据
   * @apiSuccess {Number} data.digit 0-99 随机数
   */
  getRandomDigit(req, res) {
    res.writeHeader(200, {
      'Content-Type': 'application/json ;charset=utf-8'
    })
    res.json({
      "code": 200,
      "des": "请求成功",
      "data": {
        digit: (Math.random() * 98 + 1).toFixed(0)
      }
    })
  },

  // 登陆
  /**
   * @api {post} /login 用户登陆
   * @apiParam {String} userName 用户名
   * @apiParam {String} userPwd 密码
   * @apiName login
   * @apiGroup Register
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/login
   * @apiSuccess {Number} code 响应码 200=登陆成功，201=登陆失败，500=服务器错误
   * @apiSuccess {String} msg 响应信息
   */
  loginUser(req, res) {
    req.on('end', () => {
      let newObj = req.body
      console.log(newObj.userName);
      // 先将数据读出来 
      fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, data) => {
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器错误"
        });

        let arr = JSON.parse(data)
        let flag = true;
        let currentUser = false;
        arr.some(item => {
          if (item.userName == newObj.userName) {
            currentUser = item;
            flag = false;
            return true;
          }
        })

        if (!newObj.userName || !newObj.userPwd) {
          res.json({
            "code": 201,
            "msg": "请输入用户名和密码"
          });
        } else if (flag) {
          res.json({
            "code": 201,
            "msg": "用户名不存在"
          });
        } else if (newObj.userPwd == currentUser.userPwd) {
          res.json({
            "code": 200,
            "msg": "登陆成功"
          });
        } else {
          res.json({
            "code": 201,
            "msg": "密码错误"
          });
        }
      })
    })
  },

  /* End 梁伟老师新添加接口********************************************* */

  getDataOfGet(req, res) {
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
  getDataOfPost(req, res) {
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
  submitUserOfGet(req, res) {
    let { userName, userPwd } = req.query
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
        arr.push(req.query);
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
  submitUserOfPost(req, res) {
    req.on('end', () => {
      let user = req.body
      // let user = querystring.parse(str);// 将post过来的数据转换成对象
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
    })
  },
  // 验证GET方式提交过来的数据
  /**
   * @api {get} /validate 验证用户名是否可用
   * @apiParam {String} userName 用户名
   * @apiParamExample {url} 参数请求样例
   *  http://127.0.0.1:3001/validate?userName=tom
   * @apiName get validate user name
   * @apiGroup Register
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/validate
   * @apiSuccess {Number} code 响应码 200=可用，201=不可用
   * @apiSuccess {String} msg 响应信息
   */
  validateOfGet(req, res) {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
      if (err) return console.log(err.message);
      let arr = JSON.parse(data);
      let flag = true;
      arr.some(item => {
        if (req.query.userName == item.userName) {
          flag = false
          return true;
        }
      })

      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })

      if (flag) return res.json({
        "code": 200,
        "msg": "恭喜你,用户名可以使用"
      })

      res.json({
        "code": 201,
        "msg": "抱歉,用户名已经被占用,请更换一个"
      })
    })
  },
  // 验证POST方式提交过来的数据
  validateOfPost(req, res) {
    req.on('end', () => {
      let user = req.body;// 将post过来的数据转换成对象
      console.log(user);
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

        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (flag) return res.json({
          "code": 200,
          "msg": "恭喜你,用户名可以使用"
        })

        res.json({
          "code": 201,
          "msg": "抱歉,用户名已经被占用,请更换一个"
        })
      })
    })

  },
  // GET方式获取学生json数据
  /**
  * @api {get} /getStudentsJSON 学生列表数据
  * @apiName getStudentsJson
  * @apiGroup Data
  * @apiExample {url} 请求样例：
  *  http://127.0.0.1:3001/getStudentsJSON
  * @apiSuccess {Number} code 响应码 成功 = 200
  * @apiSuccess {String} des 响应描述
  * @apiSuccess {Object[]} data 学生数据对象组成的数组
  * @apiSuccess {String} data.id 用户 ID
  * @apiSuccess {String} data.name 用户名
  * @apiSuccess {Number} data.age 年龄
  * @apiSuccess {String} data.gender 性别
  * @apiSuccess {String} data.zhuanye 专业
  * @apiSuccess {String} data.address 地址
  */
  getStudentsJSONDataOfGet(req, res) {
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error')
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      // res.writeHeader(200,{
      //   "Access-Control-Allow-Origin":"*"
      // })
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      res.json({
        "code": 200,
        "des": "数据查询成功",
        "data": arr
      })// 将数据返回给前端页面
    })
  },
  // GET方式获取学生json数据(CROS)
  /**
   * @api {get} /getStudentsJSONCROS 学生列表数据(CROS)
   * @apiName getStudentsJsonCROS
   * @apiDescription CROS 跨域资源共享，带有 "Access-Control-Allow-Origin":"*" 响应头
   * @apiGroup Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getStudentsJSONCROS
   * @apiSuccess {Number} code 响应码 成功 = 200
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object[]} data 学生数据(CROS)对象组成的数组
   * @apiSuccess {String} data.id 用户 ID
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.age 年龄
   * @apiSuccess {String} data.gender 性别
   * @apiSuccess {String} data.zhuanye 专业
   * @apiSuccess {String} data.address 地址
   */
  getStudentsJSONCROSDataOfGet(req, res) {
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error')
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8',
        "Access-Control-Allow-Origin": "*"
      })
      res.json({
        "code": 200,
        "des": "数据查询成功",
        "data": arr
      })// 将数据返回给前端页面
    })
  },
  // GET方式获取学生json数据（延迟）
  /**
   * @api {get} /getStudentsJSONDelay 学生列表数据（延迟）
   * @apiName getStudentsJsonDelay
   * @apiDescription 延时五秒发送学生数据
   * @apiGroup Data
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getStudentsJSONDelay
   * @apiSuccess {Number} code 响应码 成功 = 200
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object[]} data 学生数据对象组成的数组
   * @apiSuccess {String} data.id 用户 ID
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.age 年龄
   * @apiSuccess {String} data.gender 性别
   * @apiSuccess {String} data.zhuanye 专业
   * @apiSuccess {String} data.address 地址
   */
  getStudentsJSONDelayDataOfGet(req, res) {
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error')
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      // res.writeHeader(200,{
      //   "Access-Control-Allow-Origin":"*"
      // })
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      let timeId = setTimeout(() => {
        res.json({
          "code": 200,
          "des": "数据查询成功",
          "data": arr
        })// 将数据返回给前端页面
        clearTimeout(timeId)
      }, 5000);
    })
  },
  // GET方式获取学生json数据 （JSONP）
  /**
   * @api {get} /getStudentsJSONP.js 学生列表数据（JSONP）
   * @apiName getStudentsJsonP
   * @apiGroup Data
   * @apiDescription 用传入的 callback 函数包裹数据，以 callback(res) 形式返回 js 文件
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/getStudentsJSONP.js
   * @apiParam {String} callback 回调函数名
   * @apiSuccess {Number} code 响应码 成功 = 200
   * @apiSuccess {String} des 响应描述
   * @apiSuccess {Object[]} data 学生数据对象组成的数组
   * @apiSuccess {String} data.id 用户 ID
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.age 年龄
   * @apiSuccess {String} data.gender 性别
   * @apiSuccess {String} data.zhuanye 专业
   * @apiSuccess {String} data.address 地址
   */
  getStudentsJSONPDataOfGet(req, res) {
    res.writeHeader(200, {
      'Content-Type': 'text/javascript ;charset=utf-8'
    })
    if (!req.query.callback) {
      res.end('console.log("请输入回调函数名")');
      return;
    }

    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error')
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      // res.writeHeader(200,{
      //   "Access-Control-Allow-Origin":"*"
      // })

      let callbackFn = req.query.callback;

      resData = {
        "code": 200,
        "des": "数据查询成功",
        "data": arr
      }
      let timeId = setTimeout(() => {
        res.end(callbackFn + "(" + JSON.stringify(resData) + ")");

        clearTimeout(timeId)
      }, 50000);
      // res.end(callbackFn + "(" + JSON.stringify(resData) + ")")// 将数据返回给前端页面
    })
  },
  // POST方式获取学生json数据
  getStudentsJSONDataOfPost(req, res) {
    // 读取数据返回给前端页面
    fs.readFile(path.join(__dirname, './students.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error')
      // 注意读取到的数据是字符串,返回给前台要有一定的数据格式,要有状态码和状态描述 
      var arr = JSON.parse(data);
      res.json({
        "code": 100,
        "des": "数据查询成功",
        "data": arr
      })// 将数据返回给前端页面
    })
  },
  // GET方式获取学生xml数据
  getStudentsXMLDataOfGet(req, res) {
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
  getStudentsXMLDataOfPost(req, res) {
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
  loadStaticResource(req, res) {
    fs.readFile(path.join(__dirname, req.pathname), (err, data) => {
      if (err) return console.log(err.message);
      res.end(data)
    })
  },
  // 获取验证码
  getCode(req, res) {
    var arr = ['12345', '23456', '34567', '45678']

    var index = Math.floor(Math.random() * arr.length)

    res.end(arr[index])
  },
  // 带有延迟的获取验证码 延迟5秒后发送
  getDelayCode(req, res) {
    var arr = ['12345', '23456', '34567', '45678']

    var index = Math.floor(Math.random() * arr.length)
    // 延迟5秒后返回验证码
    let timeId = setTimeout(() => {
      res.end(arr[index])
      clearTimeout(timeId)
    }, 5000);
  },
  // 注册案例之验证用户名
  validateName(req, res) {
    let obj = req.query
    fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, data) => {
      if (err) return res.end('error');

      var dataObj = JSON.parse(data);// 将读取到的字符串转换成数组对象对象

      var flag = false;
      dataObj.some(item => {
        if (item.userName == obj.userName) {
          flag = true;
          return true;// 说明账号已经被注册了不能使用
        }
      })
      if (flag) return res.json({
        "code": 201,
        "msg": "账号已经被占用,请更换一个"
      })

      res.json({
        "code": 200,
        "msg": "恭喜你,账号可以使用..."
      })

    })

  },
  // 注册案例之注册用户
  /**
   * @api {post} /register 注册用户
   * @apiParam {String} userName 用户名
   * @apiParam {String} userPwd 密码
   * @apiName register
   * @apiGroup Register
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/register
   * @apiSuccess {Number} code 响应码 200=注册成功，201=注册失败，500=服务器错误
   * @apiSuccess {String} msg 响应信息
   */
  registerUser(req, res) {
    req.on('end', () => {
      let newObj = req.body
      // 先将数据读出来 
      fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, data) => {
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器错误"
        });

        let arr = JSON.parse(data)
        let flag = true;
        arr.some(item => {
          if (item.userName == newObj.userName) {
            flag = false;
            return true;
          }
        })

        if (!newObj.userName || !newObj.userPwd) {
          res.json({
            "code": 201,
            "msg": "请输入用户名和密码"
          });
        } else if (flag) {
          arr.push(newObj);
          var str = JSON.stringify(arr, null, "  ");// 再将数组转换成字符串

          fs.writeFile(path.join(__dirname, './data.json'), str, (err) => {
            if (err) return res.json({
              "code": 500,
              "msg": "服务器错误"
            });
            res.json({
              "code": 200,
              "msg": "注册成功"
            });
          })
        } else {
          res.json({
            "code": 201,
            "msg": "用户名被占用啦，换一个？"
          });
        }
      })
    })
  },
  /**
   * @api {post} /registerDelay 注册用户（延迟）
   * @apiParam {String} userName 用户名
   * @apiParam {String} userPwd 密码
   * @apiName registerDelay
   * @apiGroup Register
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/registerDelay
   * @apiSuccess {Number} code 响应码 200=注册成功，201=注册失败，500=服务器错误
   * @apiSuccess {String} msg 响应信息
   */
  // 带有延迟5秒的注册用户
  registerUserDelay(req, res) {
    req.on('end', () => {
      let newObj = req.body
      res.writeHeader(200, {
        'Content-Type': 'application/json ;charset=utf-8'
      })
      // 先将数据读出来 
      fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, data) => {
        if (err) return res.json({
          "code": 500,
          "msg": "服务器错误"
        });
        var arr = JSON.parse(data);// 将读取到的数据转换成对象
        arr.push(newObj);
        var str = JSON.stringify(arr, null, "  ");// 再将数组转换成字符串

        fs.writeFile(path.join(__dirname, './data.json'), str, (err) => {
          if (err) return res.json({
            "code": 500,
            "msg": "服务器错误"
          });
          setTimeout(() => {
            res.json({
              "code": 200,
              "msg": "注册成功"
            });
          }, 5000);
        })
      })
    })
  },
  // 上传文件
  /**
   * @api {post} /uploadFile 上传文件
   * @apiParam {Binary} avatar 二进制文件数据
   * @apiName uploadFile
   * @apiGroup File
   * @apiExample {url} 请求样例：
   *  http://127.0.0.1:3001/uploadFile
   * @apiSuccess {Number} code 响应码 200=注册成功，201=注册失败，500=服务器错误
   * @apiSuccess {String} msg 响应信息
   * @apiSuccess {String} src 文件路径
   */
  uploadFile(req, res) {
    try {
      // 使用formidable接收上传过来的文件
      // 1. 创建对象
      var form = new formidable.IncomingForm()

      // 2.设置编码方式  因为formidable这个模块非常强大,不但可以处理上传过来的文件,还可以处理上传过来的json形式的字符串数据
      form.encoding = 'utf-8';

      // 3. 设置图片上传过来后的存储路径
      form.uploadDir = "./assets/uploads";
      // 当前的这个./不是以当前的控制器文件为参考点,而是以项目文件夹为参考

      // 4. 是否保留上传文件的后缀  true 保留   false不保留 
      form.keepExtensions = true;

      // 5. 设置上传字段的大小  json形式的字符串
      form.maxFieldsSize = 20 * 1024 * 1024;

      // 6.设置上传文件的大小
      form.maxFileSize = 200 * 1024 * 1024;

      // 7. 设置上传字段的对数 
      form.maxFields = 1000;

      // 8. 调用parse方法对上传过来的数据进行处理
      form.parse(req, function (err, fields, files) {
        console.log(req.headers.host)
        /**
         * 1. 上传过来的数据都在req这个对象里面
         * 2. parse方法会对req这个对象进行处理
         * 3. 如果上传成功err是一个null,否则是一个错误对象
         * 4. 如果上传成功fields里面存储的是上传过来的字符串数据
         * 5. 如果上传成功files里面存储的是上传过来的文件数据
         */
        res.writeHeader(200, {
          'Content-Type': 'application/json ;charset=utf-8'
        })

        if (err) return res.json({
          "code": 500,
          "msg": "服务器错误"
        })

        if (!files || !files.file_data) return res.json({
          "code": 500,
          "msg": "上传失败,请保证ajax上传文件时formData中的key:value正确写法为： formData.append('file_data',file)"
        })

        let src = path.join('http://', req.headers.host, files.file_data.path);
        res.json({
          "code": 200,
          "msg": "上传成功",
          "src": src
        })
      });
    } catch (err) {
      res.json({
        code: 500,
        msg: err ? err.message : err
      })
    }

  }
}