// component pass ✅
import React from 'react'
import PropTypes from 'prop-types'
const stringPropTypes = PropTypes.string.isRequired
const stringNotPropTypes = PropTypes.string

const Image = ({
  pathImage,
  altImage,
  classImage = '',
  classDivImage = '',
  ...props
}) => {
  // Pass the onClickImage function to it´s parent
  const onClickImage = () => {
    if (props.onClickImage) props.onClickImage()
  }

  return (
    <div className={classDivImage} onClick={onClickImage}>
      <img
        role='img'
        aria-label={altImage} // Describe the image function
        src={pathImage}
        alt={altImage}
        className={classImage}
        loading='lazy'
      />
    </div>
  )
}

Image.propTypes = {
  pathImage: stringPropTypes,
  altImage: stringPropTypes,
  classImage: stringNotPropTypes,
  classDivImage: stringNotPropTypes
}

export default Image
