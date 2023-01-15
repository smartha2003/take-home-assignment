import React from 'react'
import PropTypes from 'prop-types'

//A typical Button component is made here; like every button has a color, text and onClick
//In header.js we can make the buttons have different color, text, onClick
const Button = ({color, text, onClick}) => {
  return <button onClick={onClick} style={{backgroundColor: color}} className='btn'> {text} </button>
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button