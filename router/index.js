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

const Router = app => {
  app.get('/login', user.login)
  app.post('/signOut', user.signOut)

  app.get('*', common.getMethods)
  app.post('*', common.postMethods)
}

module.exports = Router
