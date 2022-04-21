import React from 'react'
import './SponsorsMain.css'

function SponsorsMain() {
  return (
    <div className="SponsorsMain">
      <header className="section-header">
          <div className="center">
            <h2 className="section-title">
             Our<br/> Collaborations<br />
             
            </h2>
          </div>
        </header>
    <div class="scrollbox scrollbox--primary">
  <div class="scrollbox__item"><img src="Animall-sponsor1.jpeg.png" alt="" /></div>
  <div class="scrollbox__item"><img src="LIC-sponsor.jpg" alt="logo"/></div>
  <div class="scrollbox__item"><img src="JRG_Automotive-sponsors.jpg" alt="" /></div>
  <div class="scrollbox__item"><img src="Campus memories-sponsors.png" alt="" /></div>
</div>

{/* <div class="scrollbox scrollbox--secondary scrollbox--reverse">
<div class="scrollbox__item"><img src="adidas.png" alt="" /></div>
  <div class="scrollbox__item"><img src="facebook.png" alt="logo"/></div>
 
  <div class="scrollbox__item"><img src="nike.png" alt="" /></div>
</div> */}

    </div>
  )
}

export default SponsorsMain