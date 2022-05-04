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
<div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_JMNycTXgOsWZEW/view" data-text="Avail your pass now" data-color="#528FF0" data-size="large">
</div>
      </div>
    </div>
  )
}

export default Registration
