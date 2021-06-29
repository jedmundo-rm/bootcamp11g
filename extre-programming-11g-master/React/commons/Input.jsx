// component pass ✅
import React, { useState, useEffect } from 'react'

const Input = ({
  classNameInput = '',
  classContainerInput = '',
  ariaDescribedBy,
  isDisabled = false,
  isRequired = false,
  value,
  ...props
}) => {
  const [inputState, setInputState] = useState(value)

  useEffect(() => {
    setInputState(value)
  }, [props])

  // Pass the onChange function to it´s parent
  const onChange = (event) => {
    if (props.onChange) props.onChange(event)
  }
  // Pass the onKeyPressInput function to it´s parent
  const onKeyPressInput = (e) => {
    if (props.onKeyPressInput) props.onKeyPressInput(e)
  }

  return (
    <div className={`control ${classContainerInput}`}>
      <input
        className={`${classNameInput}`}
        aria-describedby={ariaDescribedBy}
        disabled={isDisabled}
        required={isRequired}
        defaultValue={inputState}
        onChange={onChange}
        onKeyPress={onKeyPressInput}
        {...props}
      />
    </div>
  )
}

export default Input
