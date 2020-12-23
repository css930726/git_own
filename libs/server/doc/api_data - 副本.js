define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\Administrator\\Desktop\\server\\doc\\main.js",
    "groupTitle": "C:\\Users\\Administrator\\Desktop\\server\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/getAllFruitsData",
    "title": "水果列表数据",
    "name": "getAllFruitsData",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getAllFruitsData",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>水果数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>水果 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>水果名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.src",
            "description": "<p>水果详情图</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getOneFruit",
    "title": "单个水果数据",
    "name": "getOneFruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>水果 ID</p>"
          }
        ]
      }
    },
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getOneFruit",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>水果数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>水果 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>水果名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.src",
            "description": "<p>水果详情图</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSON",
    "title": "学生列表数据",
    "name": "getStudentsJson",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSON",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONCROS",
    "title": "学生列表数据(CROS)",
    "name": "getStudentsJsonCROS",
    "description": "<p>CROS 跨域资源共享，带有 &quot;Access-Control-Allow-Origin&quot;:&quot;*&quot; 响应头</p>",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONCROS",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据(CROS)对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONDelay",
    "title": "学生列表数据（延迟）",
    "name": "getStudentsJsonDelay",
    "description": "<p>延时五秒发送学生数据</p>",
    "group": "Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONDelay",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/getStudentsJSONP.js",
    "title": "学生列表数据（JSONP）",
    "name": "getStudentsJsonP",
    "group": "Data",
    "description": "<p>用传入的 callback 函数包裹数据，以 callback(res) 形式返回 js 文件</p>",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getStudentsJSONP.js",
        "type": "url"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>学生数据对象组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/uploadFile",
    "title": "上传文件（Ajax课程）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "file_data",
            "description": "<p>要上传给服务器的文件数据，Binary表示是一个二进制数据，所以此字段不能传字符串内容</p><br />用法通常是使用FormData来处理，例如：<br /> <code> &lt;input type=\"file\" id=\"file_name\"> <br /> var file = document.querySelector('#file_name').files[0]; <br />var formData = new FormData();<br /> formData.append('file_data',file);</code>"
          }
        ]
      }
    },
    "name": "uploadFile",
    "group": "File",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/uploadFile",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据格式举例": [
          {
            "group": "Success 200",
            "type": "",
            "optional": false,
            "field": "",
            "description": '<code>{<br />&nbsp;&nbsp;"code":200,<br />&nbsp;&nbsp;"msg":"上传成功",<br />&nbsp;&nbsp;"src":"http:\\127.0.0.1:3001\\assets\\uploads\\upload_fe4d67ed24d46998c8840bba77865661.jpg"<br />}</code>'
          }
        ],
        "响应数据描述": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码，200：表述服务器响应数据成功  500:表示服务器处理失败，具体失败的原因在msg字段说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息，作用是：code响应状态码的中文解释</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>文件在服务器的路径，此路径可以被浏览器访问到</p>"
          }
        ]       
      }
    },   
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/getHero",
    "title": "获取英雄数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "heroName",
            "description": "<p>英雄名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "/getHero?heroName=程咬金",
          "type": "json"
        }
      ]
    },
    "name": "getHero",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getHero",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 英雄对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>英雄 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cname",
            "description": "<p>英雄名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>英雄外号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.skin_name",
            "description": "<p>英雄皮肤</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "get",
    "url": "/getHeroSkin",
    "title": "获取英雄皮肤(Ajax课程)",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "heroName",
            "description": "<p>英雄名，此参数不传或者值传空则获取全部数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "http://127.0.0.1:3001/getHeroSkin?heroName=程咬金",
          "type": "json"
        }
      ]
    },
    "name": "getHeroSkin",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getHeroSkin",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据格式举例": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            {
                "code": 200,
                "des": "请求成功",
                "data": {
                          "cname": "程咬金",
                          "skin_name": "爱与正义、华尔街大亨",
                          "id": 22
                      }
            }
              </code>
              `
          }
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码，200：表述服务器响应数据成功  500:表示服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述，作用是code响应状态码的中文解释</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 英雄皮肤对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>英雄 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cname",
            "description": "<p>英雄名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.skin_name",
            "description": "<p>英雄皮肤名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "post",
    "url": "/addHeroSkin",
    "title": "添加英雄皮肤(Ajax课程)",
    "name": "addHeroSkin",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cname",
            "description": "<p>英雄名</p>"
          },          
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skin_name",
            "description": "<p>英雄皮肤名称</p>"
          }
        ]
      }
    },
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/addHeroSkin",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `
            <code>
            成功处理响应的JSON数据：
              {
                "code":200,
                "msg":"添加成功"
              }   
              <hr />           
              失败处理响应的JSON数据：            
              {
                "code":500,
                "msg":"服务器处理失败"
              }
            </code>
            `
          }
        ],
        "响应数据描述": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200：成功，500：服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "get",
    "url": "/getJoke",
    "title": "获取笑话数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "jokeId",
            "description": "<p>笑话 ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "/getJoke?jokeId=2",
          "type": "json"
        }
      ]
    },
    "name": "getJoke",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getJoke",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 笑话对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>笑话 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>笑话内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "get",
    "url": "/getRandomDigit",
    "title": "获取 0-99 随机数",
    "name": "getRandomDigit",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getRandomDigit",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.digit",
            "description": "<p>0-99 随机数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "get",
    "url": "/getTwisters",
    "title": "获取歇后语数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "twistersId",
            "description": "<p>歇后语 ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "/getTwisters?twistersId=2",
          "type": "json"
        }
      ]
    },
    "name": "getTwisters",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getTwisters",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 歇后语对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>歇后语 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.riddle",
            "description": "<p>歇后语谜语</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.answer",
            "description": "<p>歇后语答案</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "post",
    "url": "/toHuoxing",
    "title": "转换火星文",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>需要转换的内容，小于 250 个字符</p>"
          }
        ]
      }
    },
    "name": "toHuoxing",
    "group": "Just_For_Fun",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/toHuoxing",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>转换后的内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Just_For_Fun"
  },
  {
    "type": "get",
    "url": "/validate",
    "title": "验证用户名是否可用",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数请求样例",
          "content": "http://127.0.0.1:3001/validate?userName=tom",
          "type": "url"
        }
      ]
    },
    "name": "get_validate_user_name",
    "group": "Register",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/validate",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200=可用，201=不可用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Register"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "用户登陆",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "name": "login",
    "group": "Register",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/login",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200=登陆成功，201=登陆失败，500=服务器错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Register"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "注册用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "name": "register",
    "group": "Register",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/register",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200=注册成功，201=注册失败，500=服务器错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Register"
  },
  {
    "type": "post",
    "url": "/registerDelay",
    "title": "注册用户（延迟）",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userPwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "name": "registerDelay",
    "group": "Register",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/registerDelay",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200=注册成功，201=注册失败，500=服务器错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Register"
  },
  {
    "type": "get",
    "url": "/getNameNoContentType",
    "title": "无 Content-Type 用户数据",
    "name": "getNameNoContentType",
    "description": "<p>一个没有 Content-Type 的数据返回例子，演示了 Content-Type 缺失或错误时的状态，具体是，由于没有 Content-Type 设定字符集，中文显示乱码。</p>",
    "group": "Sample_Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getNameNoContentType",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 用户对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Sample_Data"
  },
  {
    "type": "get",
    "url": "/getUserNameAjax",
    "title": "获取演示用户数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>用户 ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "/getUserNameAjax?userId=2",
          "type": "json"
        }
      ]
    },
    "name": "getUserNameAjax",
    "group": "Sample_Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getUserNameAjax",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>响应数据, 用户对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.zhuanye",
            "description": "<p>专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Sample_Data"
  },
  {
    "type": "get",
    "url": "/getUserNameXML",
    "title": "获取演示 XML 数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>用户 ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "/getUserNameXML?userId=2",
          "type": "json"
        }
      ]
    },
    "name": "getUserNameXML",
    "group": "Sample_Data",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getUserNameXML",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "XML",
            "optional": false,
            "field": "root",
            "description": "<p>响应数据, 根节点</p>"
          },
          {
            "group": "Success 200",
            "type": "XML",
            "optional": false,
            "field": "root.items",
            "description": "<p>items 节点</p>"
          },
          {
            "group": "Success 200",
            "type": "XML",
            "optional": false,
            "field": "root.items.item",
            "description": "<p>各个 item 节点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "root.items.item.id",
            "description": "<p>用户 ID 节点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "root.items.item.name",
            "description": "<p>用户名节点</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "root.items.item.age",
            "description": "<p>年龄节点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "root.items.item.gender",
            "description": "<p>性别节点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "root.items.item.zhuanye",
            "description": "<p>专业节点</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "root.items.item.address",
            "description": "<p>地址节点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "Sample_Data"
  },
  {
    "type": "post",
    "url": "/addProduct",
    "title": "添加商品数据",
    "name": "addProduct",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subName",
            "description": "<p>商品子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marketPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberPrice",
            "description": "<p>商品会员价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>商品图片</p>"
          }
        ]
      }
    },
    "group": "小米商城",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/addProduct",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "小米商城"
  },
  {
    "type": "get",
    "url": "/delProductById",
    "title": "删除单个商品",
    "name": "delProductById",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "group": "小米商城",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/delProductById",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "小米商城"
  },
  {
    "type": "get",
    "url": "/getProductById",
    "title": "获取单个商品数据",
    "name": "getProductById",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "group": "小米商城",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getProductById",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>商品 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名字</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subName",
            "description": "<p>商品子标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marketPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "memberPrice",
            "description": "<p>商品会员价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>商品图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "小米商城"
  },
  {
    "type": "get",
    "url": "/getProductList",
    "title": "获取所有商品",
    "name": "getProductList",
    "group": "小米商城",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getProductList",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "des",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>商品数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>商品 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>商品名字</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.subName",
            "description": "<p>商品子标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.marketPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.memberPrice",
            "description": "<p>商品会员价</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.src",
            "description": "<p>商品图片</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "小米商城"
  },
  {
    "type": "post",
    "url": "/updateProduct",
    "title": "更新商品数据",
    "name": "updateProduct",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subName",
            "description": "<p>商品子标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marketPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberPrice",
            "description": "<p>商品会员价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>商品图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isdelete",
            "description": "<p>更新删除状态</p>"
          }
        ]
      }
    },
    "group": "小米商城",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/updateProduct",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "小米商城"
  },
  {
    "type": "post",
    "url": "/addHero",
    "title": "添加英雄数据-Ajax课程",
    "name": "addHero",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>英雄名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>英雄性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>英雄头像地址，此地址需要先调用<a href=\"#api-File-uploadFile\">/uploadFile上传接口</a>才能获得</p>"
          }
        ]
      }
    },
    "group": "王者荣耀",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/addHero",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            服务器处理成功：
            {
              "code":200,
              "msg":"添加成功"
            }

            服务器处理失败：
            {
              "code":500,
              "msg":"服务器处理失败"
            }
            </code>`
          }
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200：服务器处理成功 500：服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述，对响应码code具体的中文说明</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "王者荣耀"
  },
  {
    "type": "get",
    "url": "/delHeroById",
    "title": "删除单个英雄-Ajax课程",
    "name": "delHeroById",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>要删除的英雄id，可以通过<a href=\"#api-王者荣耀-getHeroList\">/etHeroList</a>获取到英雄数据查看到</p>"
          }
        ]
      }
    },
    "group": "王者荣耀",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/delHeroById",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            服务器处理成功：
              {
                "code":200,
                "msg":"删除数据成功"
              }
            服务器处理失败：
            {
              "code":500,
              "msg":"服务器处理失败："
            }
            </code>`
          }
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200:服务器处成功  500:服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述，响应码对应的服务器处理的结果的中文描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "王者荣耀"
  },
  {
    "type": "get",
    "url": "/getHeroById",
    "title": "获取单个英雄数据-Ajax课程",
    "name": "getHeroById",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>英雄id</p>"
          }
        ]
      }
    },
    "group": "王者荣耀",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getHeroById",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            服务器处理成功：
            {
              "code": 200,
              "msg": "请求成功",
              "data":  {
                    "name": "程咬金",
                    "gender": "男",
                    "img": "http://127.0.0.1:3001/assets/uploads/222.jpg",
                    "id": 2
                    }                
              }
      
              服务器处理失败：
              {
                "code":500,
                "msg":"服务器处理失败"
              }
            </code>`
          }         
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码200：服务器处理成功，500：服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述，对code想要码的中文描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>英雄对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>英雄 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>英雄名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>英雄性别,男、女</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>英雄头像地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "王者荣耀"
  },
  {
    "type": "get",
    "url": "/getHeroList",
    "title": "获取所有英雄-Ajax课程",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "heroName",
            "description": "<p>英雄名，此参数不传或者值传空则获取全部英雄</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "带参数请求样例：",
          "content": "http://127.0.0.1:3001/getHeroList?heroName=程咬金",
          "type": "json"
        }
      ]
    },
    "name": "getHeroList",
    "group": "王者荣耀",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/getHeroList",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            服务器处理成功：
            {
              "code": 200,
              "msg": "请求成功",
              "data": [
                    {
                    "name": "程咬金",
                    "gender": "男",
                    "img": "http://127.0.0.1:3001/assets/uploads/222.jpg",
                    "id": 2
                    }              
                ]
              }
      
              服务器处理失败：
              {
                "code":500,
                "msg":"服务器处理失败"
              }
            </code>`
          }         
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 200:服务器处理成功，500：服务器处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述，对code状态码的中文解释</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>英雄组成的数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>英雄 ID，英雄的唯一标记，方便定位这个英雄用来做删除，更新操作</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>英雄名，例如：程咬金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gender",
            "description": "<p>英雄性别，男、女</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.img",
            "description": "<p>英雄头像地址，例如：http://127.0.0.1:3001/assets/uploads/222.jpg</p>"
          }          
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "王者荣耀"
  },
  {
    "type": "post",
    "url": "/updateHero",
    "title": "更新英雄数据-Ajax课程",
    "name": "updateHero",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>英雄ID，可以通过<a href=\"#api-王者荣耀-getHeroList\">/getHeroList</a>查看到所有英雄的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>英雄名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>英雄性别，男、女</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>英雄头像地址，此地址需要先调用<a href=\"#api-File-uploadFile\">/uploadFile上传接口</a>才能获得</p>"
          }
        ]
      }
    },
    "group": "王者荣耀",
    "examples": [
      {
        "title": "请求样例：",
        "content": "http://127.0.0.1:3001/updateHero",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "响应数据举例": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "服务器响应回来的成功和失败的数据格式",
            "description": `<code>
            服务器处理成功：
            {
              "code":200,
              "msg":"数据更新成功"
            }

            服务器处理失败：
            {
              "code":500,
              "msg":"服务器处理失败"
            }
            
            </code>`
          }
        ],
        "响应数据说明": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>响应码 成功 = 200</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controller.js",
    "groupTitle": "王者荣耀"
  }
] });
