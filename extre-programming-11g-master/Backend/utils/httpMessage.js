const httpTrue = ({ res, data, message }) => {
  res.json({
    success: true,
    message: `${message} ✅`,
    payload: data
  })
}

const httpFalse = ({ res, error, message, code }) => {
  res.status(code)
  res.json({
    success: false,
    message: `${message} ❌`,
    payload: {
      error
    }
  })
}

module.exports = {
  httpTrue,
  httpFalse
}
