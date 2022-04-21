import React from 'react'
import './Registration.css'
function Registration() {
  return (
    <div className='register'>
      <img src="events-pass-1.png" className='pass-photo' alt="" />
      <div className="benefit">
      <h2 className='benifit-text'>Benefits</h2>
      <ul>
        <li>Refreshments</li>
        <li>Talks from renowned speakers across the globe</li>
        <li>Best selling stock market course worth INR 999</li>
        <li>Exclusive access to all the events and competitions</li>
        <li>Goodies, swags and much more</li>
        <li>Participation Certificate for all</li>
      </ul>

      </div>
      <div className="blink">
      <button className='btn-primary'><a href="https://bit.ly/JSCOP4-REG"> AVAIL YOUR PASS </a></button>
      </div>
    </div>
  )
}

export default Registration