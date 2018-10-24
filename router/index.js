/**
 * @file router
 * @Author: yejiang
 * @Date: 2018-10-23 22:35:06
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:16:28
 */

'use strict'

const user = require('../controllers/user')
const common = require('../controllers/common')
const report = require('../controllers/report')

const Router = app => {
  app.get('/login', user.login)
  app.post('/signOut', user.signOut)

  // app.all('*', (req, res, next) => {
  //   console.log(req.headers.cookie)
  //   console.log(req.session)
  //   next()
  // })


  app.get('/swangrey/report/amount', report.pv)
  app.get('/swangrey/report/mtj', report.mtj)
  app.get('/swangrey/report/white', report.white)
  app.get('/swangrey/report/launch/', report.launch)


  app.get('*', common.getMethods)
  app.post('*', common.postMethods)


}

module.exports = Router
