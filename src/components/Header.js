import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//we can make the buttons have different color, text, onClick
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header '>
      <h2>{title}</h2>
      <Button color={showAdd ? 'red' : 'green'} text= {showAdd ? 'Close' : 'Read more'} onClick={onAdd}/> {/*Open and close button */}
    </header >
  )
}

//setting defaults
Header.defaultProps = {
  title: 'Let\'s query a public rest API!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header