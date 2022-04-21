import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className='Events'>
         <header className="section-header">
          <div className="center">
            <h2 className="section-title">
             Events<br />
             
            </h2>
          </div>
        </header>
        
<div className="wrapper">
  <div className="card"><img alt="events" src="coding-contest.jpeg"/>
    <div className="info">
      <h1>International Coding Contest</h1>
      <p>In this event programmers give solutions to critical problems using code. Brag your skills and knowledge and compete in a fair, healthy and unbiased environment.</p>
     
    </div>
  </div>
  <div className="card"><img alt="events" src="bhai-lang.jpeg"/>
    <div className="info">
      <h1>Bhai Lang</h1>
      <p>Bhai Lang is the new trend running in the world of programming and has gained a lot of popularity. Get a chance to expand the horizons of your knowledge, learn, compete and win exciting rewards in JSCOP's Bhai Lang Contest.</p>
     
    </div>
  </div>
  <div className="card"><img alt="events" src="ideathon.jpeg"/>
    <div className="info">
      <h1>Ideathon</h1>
      <p>Ideathon provides the young entrepreneurs with a platform to present their business idea in a fascinating way and win exciting prizes.</p>
    
    </div>
  </div>
  <div className="card"><img alt="events" src="trivia.jpeg"/>
    <div className="info">
      <h1>Trivia Falcon</h1>
      <p>Trivia Falcon is a Quiz competition where the competitors will get a chance to test their knowledge in the field of general awareness, science and technology.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Events