const {
  sendgridRecoverPassword,
  sendgridConfirmEmail,
  fromEmail,
  sendgridApiKey
} = require('../../domain/environment')
const serviceMail = require('@sendgrid/mail')

serviceMail.setApiKey(sendgridApiKey)

const switchApiKeySendgrid = ({ apiOption }) => {
  switch (apiOption) {
    case 'recoverPassword':
      return sendgridRecoverPassword

    case 'confirmEmail':
      return sendgridConfirmEmail

    default:
      return null
  }
}

const sendEmail = ({
  apiOption,
  emailTo,
  ccTo = [],
  bccTo = [],
  subject = 'Correo de prueba.',
  templateData
}) => {
  const msg = {
    from: fromEmail,
    to: emailTo,
    cc: ccTo,
    bcc: bccTo,
    subject,
    templateId: switchApiKeySendgrid({ apiOption }),
    dynamic_template_data: {
      ...templateData
    }
  }
  serviceMail.send(msg)
}

const multipleEmails = ({
  apiOption,
  emailTo,
  ccTo = [],
  bccTo = [],
  subject = 'Correo de prueba.'
}) => {
  const allEmails = emailTo.map((user) => {
    return {
      from: fromEmail,
      to: user.correoMuestra,
      cc: ccTo,
      bcc: bccTo,
      subject,
      templateId: switchApiKeySendgrid({ apiOption }),
      dynamic_template_data: {
        ...user.templateData
      }
    }
  })

  serviceMail.send(allEmails)
}

module.exports = {
  sendEmail,
  multipleEmails
}
