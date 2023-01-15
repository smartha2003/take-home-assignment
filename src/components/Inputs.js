import React from 'react'
import Input from './Input'

const Inputs = ({inputs, onDelete}) => {
  return (
    <>
    {/* iterates through every input in inputs */}
        {inputs.map((input) => (
           <Input key={input.id} input = {input} onDelete = {onDelete}/>
        ))}
    </>
  )
}

export default Inputs