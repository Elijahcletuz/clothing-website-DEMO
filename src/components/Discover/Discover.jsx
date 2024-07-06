import React from 'react'
import './Discover.css'
import lady from '../../assets/lady.jpg'

const Discover = () => {
  return (
    <div className='discoveries'>
         <div >
          <h1 className='section_heading'>DISCOVERY</h1>
             
         </div>
        <div className="discovery">
            <div className="discount">
                   <h2> New To Mylezs?</h2>
                    <p>GET $10 OFF BY USING  THE CODE <span>FIRSTBUY</span> AT CHECKOUT</p>
                    <button>SHOP NOW</button>
            </div>

            <div className='discount_right'>
            {<img src={lady} alt="" />}
            </div>
        </div>

        <div className="discovery">
            
        </div>

        <div className="discovery">
            
        </div>

        <div className="discovery">
            
        </div>
      
    </div>
  )
}

export default Discover
