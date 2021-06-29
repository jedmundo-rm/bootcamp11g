const throwErrorMessage = ({ name, message }) => {
  function ErrorMessage ({ name, message }) {
    this.name = name
    this.message = message
  }
  throw new ErrorMessage({
    name,
    message
  })
}

module.exports = { throwErrorMessage }
