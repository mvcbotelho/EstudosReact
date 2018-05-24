import React from 'react'

const Button = ({ children, handleClick }) => (
  <button className='main-btn' onClick={handleClick}>{children}</button>
)

export default Button
