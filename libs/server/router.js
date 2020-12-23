// 1.引入内置核心模块
const querystring = require('querystring')
const urlModule = require('url')
const fs = require('fs')
const path = require('path')

// 2. 引入自定义模块
const ctrl = require('./controller')

// 3. 向外暴露数据
module.exports = function (req, res) {
  let method = req.method; // 获取请求方法
  let pathname = req.pathname
  if (method == 'GET' && pathname == '/index.html') {
    ctrl.showIndexPage(req, res)
    /* 梁伟老师新添加接口********************************************* */
  } else if (method === 'GET' && pathname === '/getHeroList') {
    ctrl.getHeroList(req, res)
  } else if (method === 'GET' && pathname === '/getHeroById') {
    ctrl.getHeroById(req, res)
  } else if (method === 'GET' && pathname === '/delHeroById') {
    ctrl.delHeroById(req, res)
  } else if (method === 'POST' && pathname === '/addHero') {
    ctrl.addHero(req, res)
  } else if (method === 'POST' && pathname === '/updateHero') {
    ctrl.updateHero(req, res)
  } else if (method === 'GET' && pathname === '/getProductList') {
    ctrl.getProductList(req, res)
  } else if (method === 'GET' && pathname === '/getProductById') {
    ctrl.getProductById(req, res)
  } else if (method === 'GET' && pathname === '/delProductById') {
    ctrl.delProductById(req, res)
  } else if (method === 'POST' && pathname === '/addProduct') {
    ctrl.addProduct(req, res)
  } else if (method === 'POST' && pathname === '/updateProduct') {
    ctrl.updateProduct(req, res)
  } else if (method == 'GET' && pathname == '/getUserNameAjax') {
    ctrl.getUserNameAjax(req, res)
  } else if (method == 'GET' && pathname == '/getUserNameXML') {
    ctrl.getUserNameXML(req, res)
  } else if (method == 'GET' && pathname == '/getJoke') {
    ctrl.getJoke(req, res)
  } else if (method == 'GET' && pathname == '/getHero') {
    ctrl.getHero(req, res)
  } else if (method == 'GET' && pathname == '/getHeroSkin') {
    ctrl.getHeroSkin(req, res)
  } else if (method == 'POST' && pathname == '/addHeroSkin') {
    ctrl.addHeroSkin(req, res)
  } else if (method == 'POST' && pathname == '/toHuoxing') {
    ctrl.toHuoxing(req, res)
  } else if (method == 'GET' && pathname == '/getTwisters') {
    ctrl.getTwisters(req, res)
  } else if (method == 'GET' && pathname == '/getNameNoContentType') {
    ctrl.getNameNoContentType(req, res)
  } else if (method == 'GET' && pathname == '/getRandomDigit') {
    ctrl.getRandomDigit(req, res)
  } else if (method == 'POST' && pathname == '/validatePost') {
    ctrl.validateOfPost(req, res)
  } else if (method == 'POST' && pathname == '/login') {
    ctrl.loginUser(req, res)
  } else if (method == 'GET' && pathname == '/login.html') {
    ctrl.showLoginPage(req, res)
    /* End 梁伟老师新添加接口********************************************* */
  } else if (method == 'GET' && pathname == '/register.html') {
    ctrl.showRegisterPage(req, res)
  } else if (method == 'GET' && pathname == '/studentsJSON.html') {
    ctrl.showStudentsJSONPage(req, res)
  } else if (method == 'GET' && pathname == '/studentsXML.html') {
    ctrl.showStudentsXMLPage(req, res)
  } else if (method == 'GET' && pathname == '/fruits.html') {
    ctrl.showFruitsPage(req, res)
  } else if (method == 'GET' && pathname == '/detail.html') {
    ctrl.showDetailPage(req, res)
  } else if (method == 'GET' && pathname == '/getAllFruitsData') {
    ctrl.getAllFruitsData(req, res)
  } else if (method == 'GET' && pathname == '/getOneFruit') {
    ctrl.getOneFruitById(req, res)
  } else if (method == 'GET' && pathname == '/getAllProduct') {
    ctrl.getAllProduct(req, res)
  } else if (method == 'GET' && pathname == '/getOneProduct') {
    ctrl.getOneProductById(req, res)
  } else if (method == 'GET' && pathname == '/submit') {
    ctrl.submitUserOfGet(req, res)
  } else if (method == 'POST' && pathname == '/submit') {
    ctrl.submitUserOfPost(req, res)
  } else if (method == 'GET' && pathname == '/validate') {
    ctrl.validateOfGet(req, res)
  } else if (method == 'POST' && pathname == '/validate') {
    ctrl.validateOfPost(req, res)
  } else if (method == 'GET' && pathname == '/getStudentsJSON') {
    ctrl.getStudentsJSONDataOfGet(req, res)
  } else if (method == 'GET' && pathname == '/getStudentsJSONCROS') {
    ctrl.getStudentsJSONCROSDataOfGet(req, res)
  } else if (method == 'GET' && pathname == '/getStudentsJSONP.js') {
    ctrl.getStudentsJSONPDataOfGet(req, res)
  } else if (method == 'GET' && pathname == '/getStudentsJSONDelay') {
    ctrl.getStudentsJSONDelayDataOfGet(req, res)
  } else if (method == 'POST' && pathname == '/getStudentsJSON') {
    ctrl.getStudentsJSONDataOfPost(req, res)
  } else if (method == 'GET' && pathname == '/getStudentsXML') {
    ctrl.getStudentsXMLDataOfGet(req, res)
  } else if (method == 'POST' && pathname == '/getStudentsXML') {
    ctrl.getStudentsXMLDataOfPost(req, res)
  } else if (method == 'GET' && pathname == '/getData') {
    ctrl.getDataOfGet(req, res)
  } else if (method == 'POST' && pathname == '/getData') {
    ctrl.getDataOfPost(req, res)
  } else if (method == 'GET' && pathname == '/getCode') {
    ctrl.getCode(req, res)
  } else if (method == 'GET' && pathname == '/getDelayCode') {
    ctrl.getDelayCode(req, res)
  } else if (method == 'GET' && pathname == '/validateName') {
    ctrl.validateName(req, res)
  } else if (method == 'POST' && pathname == '/register') {
    ctrl.registerUser(req, res)
  } else if (method == 'POST' && pathname == '/registerDelay') {
    ctrl.registerUserDelay(req, res)
  } else if (method == 'GET' && pathname.startsWith('/assets')) {
    ctrl.loadStaticResource(req, res)
  } else if (method == 'POST' && pathname == '/uploadFile') {
    ctrl.uploadFile(req, res)
  } else if (method == 'GET' && /.*\.html$/.test(pathname)) {
    ctrl.showPage(req, res, pathname)
  } else {
    // res.end('404')
    res.writeHead(404);
    res.end();
  }
}