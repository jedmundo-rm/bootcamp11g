import React from 'react'
import UserNameLogo from './UserNameLogo'

const LogoEmail = ({ dataUserInfo }) => {
  return (
    <div className='is-flex is-ai-center has-margin-bottom-15'>
      <div className='is-hidden-small'>
        <UserNameLogo
          userName={dataUserInfo && dataUserInfo.nombreCompleto[0]}
        />
      </div>
      <div className='is-flex is-fd-column'>
        {dataUserInfo && dataUserInfo.nombreCompleto && (
          <span className='is-size-6 has-margin-bottom-10 title has-text-weight-bold is-capitalized'>
            {dataUserInfo.nombreCompleto}
          </span>
        )}
        {dataUserInfo && dataUserInfo.correo && (
          <span className='is-size-6 has-margin-bottom-10 title has-text-grey-dark has-text-weight-semibold'>
            {dataUserInfo.correo}
          </span>
        )}
        {dataUserInfo && dataUserInfo.fechaRegistro && (
          <span className='is-size-6 has-margin-bottom-10 title has-text-weight-bold is-capitalized has-background-grey has-padding-5 has-border-radius-10 has-text-centered'>
            {dataUserInfo.fechaRegistro}
          </span>
        )}
      </div>
    </div>
  )
}

export default LogoEmail
