import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    //What does a className do? I think the classes are created in index.css and making this the className will get those features for the thing
    <header className='header '>
      <h2>{title}</h2>
      <Button color={showAdd ? 'red' : 'green'} text= {showAdd ? 'Close' : 'Read more'} onClick={onAdd}/>
    </header >
  )
}

Header.defaultProps = {
  title: 'Let\'s query a public rest API!',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header