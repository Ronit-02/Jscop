import React from 'react'
import './Registration.css'
function Registration() {
  return (
    <div className='register'>
      <img src="events-pass-1.png" className='pass-photo' alt="" />
      <div className="benefit">
      <h2 className='benifit-text'>Benefits</h2>
      <ul>
        <li>Lunch +Tea for 2 days</li>
        <li>Exclusive access to all events and lectures</li>
        <li>Best selling stock market course worth INR 999</li>
        <li>Goodies and swags for every participant</li>
      </ul>

      </div>
      <div className="blink">
       <div className="first"><h3>Get your Exclusive pass in only <strike>199</strike> 149 only</h3></div>
      <div className="second"><h3>*Early bird discount for first 75 Registrations</h3></div> 
      <button className='btn-primary'><a href="https://bit.ly/JSCOP4-REG"> AVAIL YOUR PASS </a></button>
      </div>
    </div>
  )
}

export default Registration