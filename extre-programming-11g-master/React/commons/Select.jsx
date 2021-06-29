import React from 'react'

const Select = ({
  label,
  classSelect = '',
  ariaDescribedBy,
  idSelect,
  isDisabled = false,
  helperClass = '',
  classContainerInput = '',
  options,
  keyNameOption,
  keyNameValue,
  errorMessage = '',
  ...props
}) => {
  const optionsRender =
    options && options.length !== 0
      ? options.map((itemOption) => {
        return (
          <option
            key={itemOption[keyNameValue]}
            value={itemOption[keyNameValue]}
          >
            {itemOption[keyNameOption]}
          </option>
        )
      })
      : null

  const onChange = (event) => {
    if (props.onChange) props.onChange(event)
  }

  return (
    <div className={`field ${classContainerInput}`}>
      <label
        id={`${idSelect}Label`}
        className={`label ${classSelect}`}
        htmlFor={idSelect}
      >
        {label}
        <div className='control'>
          <div className='select is-full-width'>
            <select
              id={idSelect}
              className={`select ${classSelect} is-full-width`}
              aria-labelledby={`${label}Label`}
              aria-describedby={ariaDescribedBy}
              disabled={isDisabled}
              onChange={onChange}
              {...props}
            >
              <option value=''>Seleccione una opción</option>
              {optionsRender}
            </select>
          </div>
        </div>
      </label>
      {errorMessage ? (
        <p className='help has-text-weight-medium has-text-danger has-text-right has-margin-top-10'>
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default Select
