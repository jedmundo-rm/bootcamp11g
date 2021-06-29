const multer = require('multer')
const {
  fileFilterMassAttendance,
  generalUploadFilter,
  massivePersonalInfoFilter
} = require('./filterFunction')

const uploadMassAttendance = multer({
  limits: { fileSize: 10000000 },
  fileFilter: fileFilterMassAttendance
})

const generalUpload = multer({
  limits: { fileSize: 5000000 },
  fileFilter: generalUploadFilter
})

const uploadMassiveUser = multer({
  limits: { fileSize: 5000000 },
  fileFilter: massivePersonalInfoFilter
})

module.exports = {
  uploadMassAttendance,
  generalUpload,
  uploadMassiveUser
}
