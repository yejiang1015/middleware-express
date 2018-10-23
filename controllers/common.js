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

const common = {
  getMethods(req, res, next) {
    const url = req._parsedUrl.pathname
    const { query, method } = req

    axios
      .get(url, {
        params: query
      })
      .then(response => {
        setRes(res, 200, response.data)
      })
      .catch(error => {
        const errorResponse = error.response
        setRes(res, errorResponse.status, errorResponse.data.error, errorResponse.statusText)
      })
  },
  postMethods(req, res, next) {
    setRes(res, 200, { name: 'post' })
  }
}

module.exports = common
