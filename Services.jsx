import React from 'react'
import './Services.css'
import data from '../data.json'

const Services = () => {
  return (
    <div id='services'className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {data.map((data,index)=>{
                return <div key={index} className='services-format'>
                 <h3>{data.s_no}</h3>
                 <h2>{data.s_name}</h2>
                 <p>{data.s_desc}</p>
                 <div className='services-readmore'>
                    <p>Read More</p>
                 </div>
                </div>
            })}
        </div>  
        </div>
    
  )
}

export default Services
