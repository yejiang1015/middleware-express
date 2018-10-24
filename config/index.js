const port = 3000
const base_url_dev = 'http://10.94.100.40:8082'
const base_url_pro = 'http://njjs-sys-replace7022.njjs.baidu.com:8082'

module.exports = {
  port: process.env.PORT || port,
  baseURL: process.env.NODE_ENV === 'development' ? base_url_dev : base_url_pro
}
