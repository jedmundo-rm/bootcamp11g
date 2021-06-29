import React from 'react'
import Image from './Image'

const ImageTitle = ({
  pathImage,
  altImage,
  classImage = '',
  classDivImage = '',
  title,
  classTitleImage = ''
}) => {
  return (
    <div className={`${classTitleImage}`}>
      <Image
        pathImage={pathImage}
        altImage={altImage}
        classImage={classImage}
        classDivImage={classDivImage}
      />
      <span>{title}</span>
    </div>
  )
}

export default ImageTitle
