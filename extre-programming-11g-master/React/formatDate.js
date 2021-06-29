const { format } = require('date-fns')
const { es } = require('date-fns/locale')
const isValid = require('date-fns/isValid')
const compareAsc = require('date-fns/compareAsc')

const getDateFormat = ({ date, formatDate }) => {
  return format(new Date(date), formatDate, {
    locale: es
  })
}

const dateIsValid = ({ date }) => isValid(new Date(date))

const compareDates = ({ dateOne, dateTwo }) => {
  const datesCompared = compareAsc(new Date(dateOne), new Date(dateTwo))
  if (datesCompared === 0) return true
  else return false
}

module.exports = {
  dateIsValid,
  getDateFormat,
  compareDates
}
