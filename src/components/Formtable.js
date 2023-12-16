import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Tittle : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>

              <label htmlFor="email">Task : </label>
              <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email}/>

              <label htmlFor="mobile">Date : </label>
              <input type="date" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>

              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Formtable