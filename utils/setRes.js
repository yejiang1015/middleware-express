module.exports = (res, code, data, message) => {
  const response = {
    code: code || 200,
    data: data || null,
    message: message || 'success'
  }
  res.send(response)
}
