import React, { useState } from "react"
import './Main.css'
function App() {

  return (
    <>
      <div className='container'>
        <h1>TODO LIST</h1>
        <div className='form-part'>
          <input
            className="add-input"
            type="text" placeholder='Search note...' />
          <img id="vector-icon" src="./assets/Vector.svg" alt="Vector" />
          <select>
            <option value="All">ALL</option>
          </select>
          <img src="./images/theme.png" alt="Empty" />
        </div>
      </div>
    </>
  )
}

export default App
