/**
 * @file axios数据请求插件
 * @Author: yejiang
 * @Date: 2018-06-05 22:12:29
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:47:35
 */

const axios = require('axios')
const config = require('../config')
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImppYW5nIiwidXNlclB3ZCI6ImUzYjU2YTI5OWJmYWI0OWI1ZTY0YzhhMDFmZTNhY2E5IiwiaWF0IjoxNTQwMzA3OTEwLCJleHAiOjE1NDAzNTExMTB9.fFnP47YaZiIhoFrqV05F_LpujH-LZ5MQ1VnCddmfjdY'

// 创建axios实例
const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

// request过滤器
instance.interceptors.request.use(
  config => {
    config.headers['authorization'] = 'Bearer ' + token || '';
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response过滤器
instance.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

// 返回axios实例
module.exports = instance
