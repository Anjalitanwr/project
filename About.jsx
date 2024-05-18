import React from "react"
import "./About.css"
import profile from "../assets/images/profile.jpeg"

const About = () => {
  return (
    <div id="about"className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src={profile} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I am a fresher web developer with have different skills and quality.I am hard working and responsible for work.</p>
                <p>My passion for web developer is not only reflected in my extensive experience But also in the enthusian and dedication.</p>
                </div>
                <div className="about-skills">
                  <div className="about-skill"><p>HTML & CSS</p><hr style={{Width:"50%"}}/></div>
                  <div className="about-skill"><p>React JS</p><hr style={{Width:"70%"}}/></div>
                  <div className="about-skill"><p>Javascript</p><hr style={{Width:"60%"}}/></div>
                  <div className="about-skill"><p>Python</p><hr style={{Width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>12+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>15+</h1>
                <p>GRADUATION</p>           
            </div>
        </div>                                              
    </div>
  )
}

export default About
