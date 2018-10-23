const port = 3000
const base_url_dev = 'http://api.webhref.com/api'
const base_url_pro = 'http://webhref.com'

module.exports = {
  port: process.env.PORT || port,
  baseURL: process.env.NODE_ENV === 'development' ? base_url_dev : base_url_pro
}
