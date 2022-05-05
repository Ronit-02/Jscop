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
          date="Time: 10:00-10:45"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Inauguration</h3>
          <p>Venue: Auditorium</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Time: 11:15-12:00"
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
          date="Time: 12:00-13:00"
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
          date="Time: 13:00-14:00"
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
          date="Time: 14:00-16:00"
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
          date="Time: 16:00-17:00"
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
          date="Time: 19:30-20:30"
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
          date="Time: 21:00-23:00"
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
    </div>
  );
}

export default Timeline;
