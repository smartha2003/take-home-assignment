import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Input = ({input, onDelete}) => {
  return (
    <div  className='input'>
       <h3> {input.title} <FaTimes 
              style = {{color: 'red', cursor: 'pointer'}} 
              onClick = {() => onDelete(input.id)}
            />
        </h3>
    </div>
  )
}

export default Input