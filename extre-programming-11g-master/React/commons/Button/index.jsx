// component pass ✅
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import ButtonComponent from './ButtonComponent'
const stringNotPropTypes = PropTypes.string

const Button = ({ link = '', classLink = '', ...props }) => {
  // Pass the onClick function to it´s parent
  const onClick = () => {
    if (props.onClick) props.onClick()
  }

  return (
    <>
      {link ? (
        <Link href={link}>
          <div className={classLink}>
            <ButtonComponent {...props} onClick={onClick} />
          </div>
        </Link>
      ) : (
        <ButtonComponent {...props} onClick={onClick} />
      )}
    </>
  )
}

Button.propTypes = {
  link: stringNotPropTypes,
  classLink: stringNotPropTypes
}

export default Button
