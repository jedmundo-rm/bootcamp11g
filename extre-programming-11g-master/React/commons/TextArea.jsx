import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const stringPropTypes = PropTypes.string.isRequired
const boolPropTypes = PropTypes.bool.isRequired

const TextArea = (props) => {
  const [state, setState] = useState('')

  const {
    idLabel,
    idInput,
    titleLabelInput,
    name,
    classTextArea = '',
    isDisabled = false,
    readOnly,
    isRequired = false,
    row,
    value
  } = props

  useEffect(() => {
    setState(value)
  }, [props])

  // Function to detect input user
  const onChange = (e) => {
    if (props.onChange) props.onChange(e)
  }

  const onKeyPress = (e) => {
    if (props.onKeyPress) props.onKeyPress(e)
  }

  return (
    <div className='field'>
      <label className='label' id={idLabel} htmlFor={idInput}>
        {titleLabelInput}
        <div className='control'>
          <textarea
            id={idInput}
            className={`textarea ${classTextArea}`}
            name={name}
            aria-labelledby={idLabel} // It allows to specify the ID of another DOM element as an element label
            aria-required={isRequired}
            disabled={isDisabled}
            readOnly={readOnly}
            required={isRequired}
            rows={row}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={state}
          />
        </div>
      </label>
    </div>
  )
}

TextArea.propTypes = {
  idLabel: stringPropTypes,
  idInput: stringPropTypes,
  titleLabelInput: stringPropTypes,
  name: stringPropTypes,
  classTextArea: stringPropTypes,
  isDisabled: boolPropTypes,
  readOnly: stringPropTypes,
  isRequired: boolPropTypes,
  row: stringPropTypes,
  value: stringPropTypes
}

export default TextArea
