const massRegister = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]
const generalFormat = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'application/pdf'
]

const massiveFormats = [
  'xlsx',
  'csv'
]

function ErrorMessage ({ name, message }) {
  this.name = name
  this.message = message
}

const fileFilterMassAttendance = (req, file, cb) => {
  const mimeTypeFile = file.mimetype.toLowerCase()
  if (!massRegister.includes(mimeTypeFile)) {
    return cb(
      new ErrorMessage({
        name: 'fileNotAllowed',
        message: 'Archivo no permitido.'
      }),
      false
    )
  }
  cb(null, true)
}

const generalUploadFilter = (req, file, cb) => {
  const mimeTypeFile = file.mimetype.toLowerCase()
  if (!generalFormat.includes(mimeTypeFile)) {
    return cb(
      new ErrorMessage({
        name: 'fileNotAllowed',
        message: 'Archivo no permitido.'
      }),
      false
    )
  }
  cb(null, true)
}

const massivePersonalInfoFilter = (req, file, cb) => {
  const fileExtension = file.originalname.split('.')[1]
  if (!massiveFormats.includes(fileExtension)) {
    return cb(
      new ErrorMessage({
        name: 'fileNotAllowed',
        message: 'Archivo no permitido.'
      }),
      false
    )
  }
  cb(null, true)
}

module.exports = {
  fileFilterMassAttendance,
  generalUploadFilter,
  massivePersonalInfoFilter
}
