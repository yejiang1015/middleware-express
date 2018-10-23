/**
 * @file 入口文件
 * @Author: yejiang
 * @Date: 2018-10-23 22:27:59
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:53:19
 */

'use strict'

const express = require('express')
const CORS = require('cors')
const config = require('./config')
const router = require('./router')
const app = express()

app.use(express.static('./www/'));
app.use(CORS())
router(app)

app.listen(config.port, function() {
  console.log(`server start to: ${config.port}`)
})

module.exports = app
