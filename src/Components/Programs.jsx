import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../Ul/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import Image from '../Images/company.jpg'



const Programs = () => {
  return (

    <section className='programs' >
      {/* <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="programs" />

      <div className="programs__wrapper">
        {
          programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id} >
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
              <Link to={path} className="btn sm">Learn More 
              <AiFillCaretRight/>
              </Link>
              </Card>

            )
          })
        }
        </div>
      </div> */}

      <div className="container programs__container">
        <div className="program-item">
          <h1>Leading companies build teams on TopHire</h1>
          

        </div>
        <div className="program-image">
          <img src={Image} alt="company Image" />
        </div>
      </div>



    </section>


  )
}

export default Programs