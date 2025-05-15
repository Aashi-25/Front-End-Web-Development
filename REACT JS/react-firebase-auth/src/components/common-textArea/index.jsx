import React from 'react'

function CommonTextArea( {value , onChange , placeholder , className , rows = 4} ) {
  return (
    <textarea 
    rows = {rows}
    value = {value}
    onChange={onChange}
    placeholder={placeholder || 'Enter text here'}
    className={className || 'w-full block px-5 py-2 mt-2 text-black border rounded-lg'}
    />
  )
}

export default CommonTextArea;