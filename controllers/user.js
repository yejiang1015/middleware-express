/**
 * @file user
 * @Author: yejiang
 * @Date: 2018-10-23 22:37:16
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:00:08
 */

'use strict'
const setRes = require('../utils/setRes')

const user = {
  login(req, res, next) {
    setRes(res, 200, {name: '登陆成功'})
  },
  signOut(req, res, next) {
    setRes(res, 200, {name: '退出成功'})
  }
}

module.exports = user
