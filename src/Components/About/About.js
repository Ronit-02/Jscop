import React from "react";
import "./About.css";

// Importing Icons from React
import {IoRocketOutline} from "react-icons/io5";
import {FiMic} from "react-icons/fi";
import {GoBroadcast} from "react-icons/go";
import {GiAlarmClock} from "react-icons/gi";


function About() {
  return (
    <div className="About" id="About">
        <section type="whats-new" in-view="fade-up" className="in-view">
            <header className="About-header">
                <div className="center">
                    <h2 in-view="fade-right" className="section-title" > 
                        About 
                        <br />
                        {/* <span>JSCOP 4.0</span> */}
                    </h2> 
                </div> 
            </header>
        </section>
        <section id="about-section">
            <div id="about-section-div1" className="center">
                <p
                    >In the last few years, we have come to terms with the fact that
                    there can be nothing in real life which isn't possible and there
                    is nothing which we can Ctrl+ delete from the existence of our
                    history. Good, bad, endearing - all sorts of memories within our
                    heart, we always tend to look forward to what is yet to come with
                    infinite dreams and aspirations along with a ray of hope to go
                    beyond the knowns and unknowns and discover new
                    forms with our creative and curious minds.
                    With this hope and motto in our thoughts,
                    JIIT OPTICA STUDENT CHAPTER 
                </p> 
                <button id="about-section-btn">
                    Know More
                </button>
            </div>
            <div id="about-section-div2">
                <img src="JSCOP_profile_pic_2.JPG" alt="profile-pic"/>
            </div>
        </section>
        <section id="about-cards">
            <div id="card">
                <FiMic size = "4rem" id="card-icon"/>
                <h1>Speakers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante</p>
                <a href="#"> Read More</a>
            </div>
            <div id="card">
                <IoRocketOutline size = "4rem" id="card-icon"/>
                <h1>8 Hrs Marathon</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante</p>
                <a href="#"> Read More</a>
            </div>
            <div id="card">
                <GoBroadcast size = "4rem" id="card-icon"/>
                <h1>Live Broadcast</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante</p>
                <a href="#"> Read More</a>
            </div>
            <div id="card">
                <GiAlarmClock size = "4.5rem" id="card-icon"/>
                <h1>Early Bird</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante</p>
                <a href="#"> Read More</a>
            </div>
        </section>
    </div>
  );
}

export default About;
