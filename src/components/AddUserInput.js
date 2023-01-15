import React from 'react'
import { useState } from 'react'

const AddUserInput = ({onAdd}) => {
    const [input, setInput] = useState('')
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!input){
            alert('Please pick a User ID ranging between 1 - 10')
            return
        }

        onAdd({input})

        setInput('')
    }
  return (
    <form className = 'add-form' onSubmit={onSubmit}>
        <div className = 'form-control'>
            <label>Pick User ID ranging between 1 - 10</label>
            <input type = 'text' placeholder = 'Enter User ID' value={input} onChange= {(e) => setInput(e.target.value)}/>
        </div>
        <input type = 'submit' value = 'Query REST API' className = 'btn btn-block' />
    </form>
  )
}

export default AddUserInput