import React from 'react'
import './Category.css'
import men from '../../assets/men1.jpg'
import women from '../../assets/women1.jpg'
import kid from '../../assets/kid.webp'

const Category = () => {
  return (
     <div>
       <h1 className='section_heading'>CATEGORIES</h1>
         <div className='categories'>
              <div className="men category">
                    {<img src={men} alt="" />}
                    <p>MEN</p>
                  
              </div>
              <div className="women category">
                    {<img src={women} alt="" />}
                    <p>WOMEN</p>
              </div>
              <div className="kids category">
                    {<img src={kid} alt="" />}
                    <p>KIDS</p>
              </div>
        </div>
      
    </div>
  )
}

export default Category
