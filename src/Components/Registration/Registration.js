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
  <script>
    (function(){
      var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
      if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
      s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['_rzp_'];
      rzp && rzp.init && rzp.init()}})();
  </script>
</div>
      </div>
    </div>
  )
}

export default Registration
