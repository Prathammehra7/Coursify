import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/main_header.png'

const MainHeader = () => {
  return (

    <header className='main__header'>
      <div className='container main__header-container'>
        <div className="main__header-left">
          <h4>Seeking brilliant minds and passionate souls!</h4>
          <h1>Ready to be part of something extraordinary?</h1>
          <h2>with Pratham Mehra</h2>
          <p>Join our team of exceptional software engineers, product managers, and data scientists to shape the future of innovation.</p>
          <Link to="/Login" > 
          <button className='demo'> 
           Apply To Join
          </button>
          
          </Link>
        </div>
        {/* <div className="main__header-right">
          <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt="Main Header Image" />
        </div>
        </div> */}
      </div>
    </header>


  )
}

export default MainHeader