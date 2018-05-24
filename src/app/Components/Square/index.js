import React from 'react'

const Square = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '200px',
    width: '200px'
  }} />
)

Square.defaultProps = {
  color: 'white'
}

export default Square