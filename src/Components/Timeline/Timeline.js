import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import './Timeline.css'
// import StarIcon from '@mui/icons-material/Star';

function Timeline() {
  return (
    <div className="Timeline" id="timeline">
      <header className="page-header">
        <div className="center">
          <div className="page-title">
            
            <h2 in-view="fade-right" className="in-view">
             Timeline
            </h2>
          </div>
        </div>
      </header>

                            {/*              COMING SOON            */}
        <section type="whats-new" in-view="fade-up" className="in-view">
            {/* <header className="timiline-header-comming-soon">
                <div className="center">
                    <h2 className="timeline-title-comming-soon">
                        Coming <br/> Soon<br />
                    </h2>
                </div>
  </header> */}
  <h2 id="day-title" className="section-title">
              <br/>
             Day - 1<br />
             
            </h2>
  

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10:00-10:45"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Inauguration</h3>
          <p>Venue: Auditorium</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11:15-12:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Talk-1</h3>
          <h4 className="vertical-timeline-element-subtitle">
           By Prof. Rupamanjari Ghosh
          </h4>
          <p>
            Venue: LT-4 <br/> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12:00-13:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Talk-2</h3>
          <h4 className="vertical-timeline-element-subtitle">
           By Dr. Shailendra Kumar Varshney
          </h4>
          <p>Venue: LT-4</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="13:00-14:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Lunch</h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="14:00-16:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Bhai Lang (Hybrid)
          </h3>
          <p>Venue: LT-4</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="16:00-17:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Quiz Round-1 (General Awareness and Science)
          </h3>
          <p>Venue: Auditorium</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="19:30-20:30"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Talk-3
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
         By Prof. Mark Dennis
          </h4>
          <p>Venue: Zoom(Online)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="21:00-23:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          International Coding Challenge
          </h3>
          
          <p>Venue: Online</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

                            {/*              COMING SOON            */}

    </section>  
    <section type="whats-new" in-view="fade-up" className="in-view">
            {/* <header className="timiline-header-comming-soon">
                <div className="center">
                    <h2 className="timeline-title-comming-soon">
                        Coming <br/> Soon<br />
                    </h2>
                </div>
  </header> */}
  <h2 id="day-title" className="section-title">
              <br/>
             Day - 2<br />
             
            </h2>
  

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="9:00-10:00"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Talk-4</h3>
          <h4 className="vertical-timeline-element-subtitle">
           By Carlos López-Mariscal
          </h4>
          <p>Venue: Zoom / LT-4</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10:00-11:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Talk-5 / Quiz Finals (Technical)</h3>
          <h4 className="vertical-timeline-element-subtitle">
           By Sumeet Malik
          </h4>
          <p>
            Venue: LT-4 and LT-5<br/> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="11:00-11:30"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tea Break</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11:30-12:30"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coding Contest Solution Discussion</h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>
            Venue: LT-4<br/> 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12:30-13:30"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Ideathon Final Round
          </h3>
          <p>Venue: Online</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="13:30-14:30"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Lunch
          </h3>
          {/* <p>Venue: Auditorium</p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="16:00-17:00"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Closing Ceremony
          </h3>
          
          <p>Venue: Auditorium</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

                            {/*              COMING SOON            */}

    </section>
    </div>
  );
}

export default Timeline;
