const express = require('express')
const router = express.Router()
const { httpTrue, httpFalse } = require('../../../utils/httpMessage')
const dataProfiles = require('./endpointUrl')
const authProfile = require('../../../middleware/auth')
const { operationCrud } = require('../../../orm/operationCrud')
const { throwErrorMessage } = require('../../../utils/throwErrorMessage')
const { formatDate, excelToJson } = require('../../../dependencies')
const {
  getAllAssistsRH
} = require('../../../../application/rh/assistance/getAssists')
const { uploadMassAttendance } = require('../../../middleware/uploadFiles')
const upload = uploadMassAttendance.array('asistencia-rh', 1)
const authM = authProfile(dataProfiles)
const {
  massAssists
} = require('../../../../application/rh/assistance/massAttendance')

router.get(dataProfiles.getAllAssists.urlPath, authM, async (req, res) => {
  try {
    const infoToken = res.locals
    const dataQuery = req.query
    const assistanceRegistered = await getAllAssistsRH({
      infoToken,
      operationCrud,
      throwErrorMessage,
      formatDate,
      dataQuery
    })
    httpTrue({
      res,
      data: assistanceRegistered,
      message: 'Se trajeron todas las asistencias de RH.'
    })
  } catch (error) {
    httpFalse({
      res,
      error,
      message: 'No se pudieron traer todas las asistencias de RH.',
      code: 400
    })
  }
})

router.post(dataProfiles.massAttendance.urlPath, authM, async (req, res) => {
  upload(req, res, async function (err) {
    try {
      if (err) {
        throwErrorMessage({
          name: err.name,
          message: err.message
        })
      }
      if (!req.files) {
        throwErrorMessage({
          name: 'noFiles',
          message: 'Seleccione un archivo.'
        })
      }
      const infoToken = res.locals
      const bodyData = req.body
      const assistanceRegistered = await massAssists({
        infoToken,
        files: req.files,
        operationCrud,
        throwErrorMessage,
        excelToJson,
        formatDate,
        bodyData
      })
      httpTrue({
        res,
        data: assistanceRegistered,
        message: 'Se registraron todas las asistencias del día.'
      })
    } catch (error) {
      httpFalse({
        res,
        error,
        message: 'No se pudieron registrar todas las asistencias del día.',
        code: 400
      })
    }
  })
})

module.exports = router
