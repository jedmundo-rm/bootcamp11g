const fs = require('fs')
const chunkSize = 16 * 1024

const verifyAsyncFs = ({ path }) =>
  new Promise((resolve, reject) => {
    fs.access(`${path}`, fs.constants.F_OK, (err) => {
      if (err) return resolve(false)
      resolve(true)
    })
  })

const createFolderAsync = ({ path }) =>
  new Promise((resolve, reject) => {
    fs.mkdir(`${path}`, { recursive: true }, (error) => {
      if (error) return reject(error)
      resolve(true)
    })
  })

const writeStream = ({ path, file }) =>
  new Promise((resolve, reject) => {
    const writeStreamRequest = fs.createWriteStream(path)
    writeStreamRequest.write(file)
    resolve()
    writeStreamRequest.on('error', (error) => {
      if (error) reject(error)
    })
  })

const readStream = ({ path }) =>
  new Promise((resolve, reject) => {
    const readStreamRequest = fs.createReadStream(path, {
      encoding: 'utf8',
      highWaterMark: chunkSize
    })
    resolve(readStreamRequest)
    readStreamRequest.on('error', function (error) {
      reject(error)
    })
  })

const readFileAsync = ({ path }) =>
  new Promise((resolve, reject) => {
    fs.readFile(path,
      'utf8',
      (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
  })

module.exports = {
  verifyAsyncFs,
  createFolderAsync,
  writeStream,
  readStream,
  readFileAsync
}
