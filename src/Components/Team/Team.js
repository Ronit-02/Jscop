import React from "react";
import "./Team.css";

// Importing Icons from React
 import {AiOutlineInstagram} from "react-icons/ai";
 import {FaLinkedin} from "react-icons/fa";

function Team() {
  return (
    <div className="Team" id="team">
      <section type="grid">
        <header className="grid-header in-view" in-view="fade-up">
          <div className="center u-clearfix">
            <p className="section-subhead-team">
              <span>Meet &amp; Greet</span>
            </p>
            <h2 className="section-title">the Organising <br/> team</h2>
          </div>
        </header>

        <div className="grid-content">
        <div className="page-wrapper">

      <div className="profile-box">
      <img src="ayush.jfif" alt="profile pic"/>
      <h3>Ayush Singhal</h3>
      <h4>President</h4>
      <div id="socials">
        <a href="https://www.instagram.com/a_yush._/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/ayush-singhal-/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Anshika.jpeg" alt="profile pic"/>
      <h3>Anshika Jain</h3>
      <h4>Vice President</h4>
      <div id="socials">
        <a href="https://www.instagram.com/anshiii__/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/anshikajain1518/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Sparsh.jpg" alt="profile pic"/>
      <h3>Sparsh Gupta</h3>
      <h4>Treasurer</h4>
      <div id="socials">
        <a href="https://www.instagram.com/the_phenomenone_one/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/sparsh-gupta-984438120/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="ishan.jpg" alt="profile pic"/>
      <h3>Ishan Saxena</h3>
      <h4>Secratary</h4>
      <div id="socials">
        {/* <a href="https://www.instagram.com/a_yush._/"> <AiOutlineInstagram size = "1.8rem"/> </a> */}
        <a href="https://www.linkedin.com/in/ishan-saxena-4757301a7/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Aayush.jpg" alt="profile pic"/>
      <h3>Aayush Mittal</h3>
      <h4>Strategic Chief</h4>
      <div id="socials">
        {/* <a href="https://www.instagram.com/a_yush._/"> <AiOutlineInstagram size = "1.8rem"/> </a> */}
        <a href="https://www.linkedin.com/in/aayush-mittal-4ba5b016a/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Tanmay.jpg" alt="profile pic"/>
      <h3>Tanmay Rohilla</h3>
      <h4>Strategic Chief</h4>
      <div id="socials">
        <a href="https://www.instagram.com/diabolical_toddler.xre/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/tanmay-rohilla-a39b12201/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Abhishek.jfif" alt="profile pic"/>
      <h3>Abhishek Kumar Tamoli</h3>
      <h4>Technical Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/aktamoli/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/aktamoli0910/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Digvijay.jpg" alt="profile pic"/>
      <h3>Digvijay Singh </h3>
      <h4>Outreach Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/digvijayy.music/?utm_medium=copy_link"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/digvijay-singh-73aa381b9/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="harit.jpeg" alt="profile pic"/>
      <h3>Harit Mohan</h3>
      <h4>Design Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/harit_01/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/harit-mohan/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Shweta.jpeg" alt="profile pic"/>
      <h3>Shweta Duggal</h3>
      <h4>Operations Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/shweta.duggal090/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/shweta-duggal-7439721ab/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Ananya.jpeg" alt="profile pic"/>
      <h3>Ananya Bose</h3>
      <h4>Content & Communication Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/_a.nanyaa/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/ananya-bose-974335203/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Ritawari.jpg" alt="profile pic"/>
      <h3>Ritawari Pareek</h3>
      <h4>Public Relations Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/ritawariipareek/"> <AiOutlineInstagram size = "1.8rem"/> </a>
        <a href="https://www.linkedin.com/in/ritawari-pareek-3abb31207/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    <div className="profile-box">
      <img src="Somesh.jfif" alt="profile pic"/>
      <h3>Somesh Naruka</h3>
      <h4>Design Head</h4>
      <div id="socials">
        <a href="https://www.instagram.com/somesh_naruka/"> <AiOutlineInstagram size = "1.8em"/> </a>
        <a href="https://www.linkedin.com/in/somesh-naruka-06037a1ba/"><FaLinkedin size = "1.6rem"/></a>
      </div>
    
    </div>
    
  </div>
          
          </div>
          
    
      </section>
    </div>
  );
}

export default Team;
