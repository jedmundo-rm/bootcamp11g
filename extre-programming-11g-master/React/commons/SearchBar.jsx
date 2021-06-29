import React, { useState, useEffect, useRef } from 'react'
import Image from './Image'
import Input from './Input'

const SearchBar = (props = {}) => {
  const [selected, setSelected] = useState(false)
  const [dataSearchBar, setDataSearchBar] = useState()
  const refContainer = useRef(null)
  const handleClickOutside = (event) => {
    if (refContainer.current && !refContainer.current.contains(event.target)) {
      setSelected(false)
    }
  }
  const onClickSearch = () => {
    if (props.onClickSearch) props.onClickSearch(dataSearchBar)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
    }
  }, [])

  useEffect(() => {
    !dataSearchBar && onClickSearch(dataSearchBar)
  }, [dataSearchBar])

  return (
    <div className='field is-flex is-jc-flex-start '>
      <div
        onClick={() => {
          setSelected(true)
        }}
        ref={refContainer}
      >
        <Input
          type='search'
          classNameInput={`input ${
            selected ? 'input-reveal' : 'input-not-reveal'
          } border-radius-10`}
          isRequired
          ariaDescribedBy='input de la contraseña'
          placeholder='Buscar'
          isDisabled={false}
          name='inputSearch'
          autoComplete='on'
          onChange={(e) => setDataSearchBar(e.target.value)}
        />
      </div>
      {selected && (
        <Image
          pathImage='/icon/search.svg'
          altImage='clear icon'
          classImage='is-rounded background-gray-light has-padding-5'
          classDivImage='image is-32x32  is-flex is-jc-center is-clickable  has-margin-5 '
          onClickImage={() => {
            onClickSearch(dataSearchBar)
          }}
        />
      )}
    </div>
  )
}
export default SearchBar
