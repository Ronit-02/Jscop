import React from "react";

import "./Speaker.css";

function Speakers() {
    return (
        <div className="Speakers" id="speakers">
            <section type="whats-new" in-view="fade-up" className="in-view">
                <header className="section-header">
                    <div className="center">
                        <p className="section-subhead">JSCOP  2022</p>
                        <h2 className="section-title">
                            who's New <br />
                            <span>this year?</span>
                        </h2>
                    </div>
                </header>
                
                             {/*              COMING SOON            */}

                <section type="whats-new" in-view="fade-up" className="in-view">
                <header className="section-header-comming-soon">
                    <div className="center">
                      {/*  <h2 className="section-title-comming-soon">
                            Coming <br/> Soon<br />
                        </h2>*/}
                    </div>
                </header>

                            {/*              COMING SOON            */}
                
               <section className="post_content">
                    <div className="center">
                        <div className="post">
                            <div className="speakers__left">
                                <img src="Carlos López-Mariscal.jpg" className="post-picture" alt="" />
                            </div>
                            <div className="speakers__right">
                                <span className="post-title">Carlos López-Mariscal</span>
                                <p className="post-subtitle">Underwater Photonics, LLC <br/> Cozumel, Mexico  </p>
                                    <p>Science Leadership skills for real life</p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="speakers__left">
                                <img src="Prof.Mark-Dennis.jpg" className="post-picture" alt="" />
                            </div>
                            <div className="speakers__right">
                                <span className="post-title">Prof. Mark Dennis</span>
                                <p className="post-subtitle">University of Birmingham, UK </p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="speakers__left">
                                <img src="Sumeet Malik.jpg" className="post-picture" alt="" />
                            </div>
                            <div className="speakers__right">
                                <span className="post-title">Sumeet Malik</span>
                                <p className="post-subtitle"> Founder, Pepcoding </p>
                            </div>
                        </div>
                        <div className="post">
                            <div className="speakers__left">
                                <img src="Prof. Rupamanjari Ghosh.jpg" className="post-picture" alt="" />
                            </div>
                            <div className="speakers__right">
                                <span className="post-title">Prof. Rupamanjari Ghosh</span>
                                <p className="post-subtitle">Former Vice-Chancellor of SNU <br/> Uttar Pradesh, India</p>
                                {/*<p className="post-subtitle">Former Dean at the School of Physical Sciences, JNU, New Delhi</p>*/}
                            </div>
                        </div>
                        <div className="post">
                            <div className="speakers__left">
                                <img src="Dr. Shailendra Kumar Varshney.jpg" className="post-picture" alt="" />
                            </div>
                            <div className="speakers__right">
                                <span className="post-title">Dr.Shailendra Kumar Varshney</span>
                                <p className="post-subtitle">Associate Professor, Dept. of E&ECE <br/> IIT Kharagpur, W.B., India </p>
                            </div>
                        </div>
                    </div> 
                </section>
            </section>
            </section>
        </div>
        );
    }
    
    export default Speakers;
