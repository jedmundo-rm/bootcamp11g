const { format, addHours, differenceInMinutes } = require('date-fns')
const { es } = require('date-fns/locale')
const isValid = require('date-fns/isValid')

const dateFormatConfig = {
  locale: es
}

const getDateFormat = ({ date, formatDate }) => {
  return format(new Date(date), formatDate, dateFormatConfig)
}

const dateIsValid = ({ date }) => isValid(new Date(date))

const timeZone = ({ date }) => {
  const objDate = new Date(date)
  const timeZoneDay = objDate.getHours() + 6
  objDate.setHours(timeZoneDay)
  return objDate
}

const addHoursFTS = ({ dateOrTime, hours }) => {
  return addHours(new Date(dateOrTime), hours)
}

const getDifferenceMinutes = ({ timeOne, timeTwo }) => {
  return differenceInMinutes(timeOne, timeTwo)
}

module.exports = {
  dateIsValid,
  getDateFormat,
  timeZone,
  addHoursFTS,
  getDifferenceMinutes
}
