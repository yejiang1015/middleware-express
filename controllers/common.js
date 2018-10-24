/**
 * @file common
 * @Author: yejiang
 * @Date: 2018-10-23 22:37:16
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:46:28
 */

'use strict'
const setRes = require('../utils/setRes')
const axios = require('../axios')

class Common {
  static getMethods(req, res, next) {
    const url = req._parsedUrl.pathname
    const { query } = req
    axios.get(url, { params: query }).then(response => {
      setRes(res, response.data.errno, response.data.data, response.data.errmsg)
    }).catch(error => {
      setRes(res, 500, null, error.message);
    })
  }
  
  static postMethods(req, res, next) {
    const url = req._parsedUrl.pathname
    const { body } = req
    axios.get(url, body).then(response => {
      setRes(res, response.data.errno, response.data.data, response.data.errmsg)
    }).catch(error => {
      setRes(res, 500, null, error.message);
    })
  }
}

module.exports = Common
