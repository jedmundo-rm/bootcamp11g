import React, { createRef } from 'react'

const InputFile = ({
  label,
  classInput = '',
  ariaDescribedBy,
  isDisabled = false,
  helperClass = '',
  classContainerInput = '',
  messageFile,
  ...props
}) => {
  const fileInput = createRef()
  const id = `${props.name}ID`

  const onChange = () => {
    if (props.onChange) props.onChange(fileInput.current.files)
  }

  const onClick = (e) => {
    e.target.value = null
  }

  return (
    <div className={`field ${classContainerInput}`}>
      <label id={`${id}Label`} className={`label ${classInput}`} htmlFor={id}>
        {label}
        <div className='control'>
          <input
            id={id}
            type='file'
            className={`input ${classInput}`}
            aria-labelledby={`${id}Label`} // It allows to specify the ID of another DOM element as an element label
            aria-describedby={ariaDescribedBy}
            disabled={isDisabled}
            {...props}
            ref={fileInput}
            onChange={onChange}
            onClick={onClick}
          />
          {messageFile ? (
            <p className={`help has-text-weight-medium  is-danger ${helperClass}`}>
              {messageFile}
            </p>
          ) : null}
        </div>
      </label>
    </div>
  )
}

export default InputFile
