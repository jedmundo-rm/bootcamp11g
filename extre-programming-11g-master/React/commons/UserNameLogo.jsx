import React from 'react'

const UserNameLogo = ({
  userName,
  classNameUser = '',
  classLetter = '',
  ...props
}) => {
  const onClickUserLogo = () => {
    if (props.onClickUserLogo) props.onClickUserLogo()
  }

  return (
    <div
      className={`logo-name-container ${classNameUser}`}
      onClick={onClickUserLogo}
    >
      <span className={`is-capitalized ${classLetter}`}>{userName}</span>
    </div>
  )
}

export default UserNameLogo
