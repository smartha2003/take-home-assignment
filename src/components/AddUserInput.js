import React from 'react'
import { useState } from 'react'

const AddUserInput = ({onAdd}) => {
    const [input, setInput] = useState('')
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!input){
            alert("Please Enter today's date")
            return
        }

        onAdd({input})

        setInput('')
    }

  return (
    <form className = 'add-form' onSubmit={onSubmit}>
        <div className = 'form-control'>
            <label>Today's Date in IST</label>
            <input type = 'text' placeholder = "Enter today's date in IST" value={input} onChange= {(e) => setInput(e.target.value)}/>
        </div>
        <input type = 'submit' value = 'Print to Console' className = 'btn btn-block' />
    </form>
  )
}

export default AddUserInput