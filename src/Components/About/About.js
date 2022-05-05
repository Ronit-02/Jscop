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
                    >JIIT Student Conference on Optics and Photonics 2022, or JSCOP 4.0 is the annual flagship event of JIIT-OPTICA Student Chapter. It will be conducted from 7th-8th May on the premises of Jaypee Institute of Information Technology, NOIDA with great passion and enthusiasm. The fest will include a plethora of events and interactive webinars ranging from fields of science and tech to entrepreneurship and general Trivia and hence this year’s theme is aptly coined as ‘Multiverse’. The team spirit and dedication of all students working together has led to successful JSCOPs over the years and with your active participation we wish to make JSCOP 4.0 equally if not more special.
                </p> 
                {/* <button id="about-section-btn">
                    Know More
                </button> */}
            </div>
            <div id="about-section-div2">
                <img src="2019-8.jpeg" alt="about"/>
                {/* <img src="JSCOP_profile_pic_2.JPG" alt="profile-pic"/> */}
            </div>
        </section>
        {/* <section id="about-cards">
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
        </section> */}
    </div>
  );
}

export default About;