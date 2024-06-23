import React from 'react'

function Button({children, handleClick}) {
  return (
    <button className='custom-button' onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
