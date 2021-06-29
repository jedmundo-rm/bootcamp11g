import React, { useState } from 'react'
import Image from '../Image'
import PropTypes from 'prop-types'
const stringPropTypes = PropTypes.string.isRequired
const stringNotPropTypes = PropTypes.string
const booleanPropTypes = PropTypes.bool

const ButtonComponent = ({
  classButtonDiv = '',
  typeButton = 'button',
  classButton = '',
  isDisabled = false,
  titleButton = '',
  pathImage = '',
  altImage = '',
  classImage = '',
  classDivImage = '',
  ...props
}) => {
  const [stateButton, setStateButton] = useState(false)

  const onClick = () => {
    if (props.onClick) props.onClick()
    setStateButton(!stateButton)
  }

  return (
    <div className={classButtonDiv}>
      <button
        type={typeButton}
        tabIndex='0' // tabIndex is used to indicate if the element can be focus and participate in sequential keyboard navigation
        role=''
        aria-pressed={stateButton}
        className={`button ${classButton}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {pathImage ? (
          <Image
            pathImage={pathImage}
            altImage={altImage}
            classImage={classImage}
            classDivImage={classDivImage}
          />
        ) : null}
        {titleButton}
      </button>
    </div>
  )
}

ButtonComponent.propTypes = {
  classButtonDiv: stringNotPropTypes,
  typeButton: stringNotPropTypes,
  classButton: stringPropTypes,
  isDisabled: booleanPropTypes,
  titleButton: stringPropTypes,
  pathImage: stringNotPropTypes,
  altImage: stringNotPropTypes,
  classImage: stringNotPropTypes,
  classDivImage: stringNotPropTypes
}

export default ButtonComponent
