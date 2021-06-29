const envVars = process.env

module.exports = {
  host: envVars.LHI_HOST,
  user: envVars.LHI_USER,
  password: envVars.LHI_PASSWORD,
  database: envVars.DB_SERVER,
  port: envVars.PORT,
  webPath: envVars.ENDPOINT_WEBPAGE,
  secret: envVars.KEY,
  dbPlatform: envVars.DB_SERVER,
  cronTime: envVars.CRON_TIME,
  pathFiles: envVars.PATH_FILES,
  sendgridRecoverPassword: envVars.SENDGRID_RECOVER_PASSWORD,
  sendgridConfirmEmail: envVars.SENDGRID_CONFIRM_EMAIL,
  fromEmail: envVars.EMAIL_FROM,
  sendgridApiKey: envVars.SENDGRID_API_KEY,
  keyPlatform: envVars.KEY_PLATFORM
}
