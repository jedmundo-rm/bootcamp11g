// component pass ✅
import React, { useState, useEffect } from 'react'

const InputLabel = ({
  label,
  classNameInput = '',
  classContainerInput = '',
  ariaDescribedBy,
  isDisabled = false,
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
    <div className={`field ${classContainerInput}`}>
      <label className={`label ${classNameInput}`} htmlFor={props.id}>
        {label}
        <div className='control'>
          <input
            className={`input ${classNameInput}`}
            aria-labelledby={`${props.id}Label`} // It allows to specify the ID of another DOM element as an element label
            aria-describedby={ariaDescribedBy}
            defaultValue={inputState}
            disabled={isDisabled}
            onChange={onChange}
            onKeyPress={onKeyPressInput}
            {...props}
          />
        </div>
      </label>
    </div>
  )
}

export default InputLabel
