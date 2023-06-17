import React from 'react';
import profilepic from '../images/profilepic.JPG';
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Typewriter2 from './Typewriter2';
import './About.css';


const About = () => {
  return (
    <>
 
      <section className="page-section text-black mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase"><FontAwesomeIcon icon={faHeart} beat style={{color: "#000000",}} className="heart-about"/>About me<FontAwesomeIcon icon={faHeart} beat style={{color: "#000000",}} className="heart-about"/></h2>
          <div className="text-center masthead">
        <div className="container d-flex align-items-center flex-column">
          <img src={profilepic} alt="" className="profile-image" />
          <p className="masthead-subheading font-weight-light mb-0" id="p-pic">
            UCR Coding Bootcamp Student - Full-Stack Developer
          </p>
        </div>
      </div>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 ms-auto">
              <p className="lead">
              Hello! I am a Southern California native with a deep-rooted passion for art, design, and all things creative, and strive to incorporate it into everything I do!
              </p>  
              <Typewriter2 />
            </div>
            <div className="col-lg-4 me-auto"> 
            <p className='p1'>
              As a UCR bootcamp student, I discovered my enthusiasm for coding and web development and the magic of bringing ideas to life through programming. Currently, I am currently a junior developer, primarily focusing on full stack web development.
              </p> 
              <p className='p2'>
              I am currently interersted in a junior developer position where I can apply my current skillset and grow as a developer. In the future, I am eager to delve into new technologies, explore different coding languages, and continue to expand my knowledge in all things programming. I hope to combine my passion for the arts to deliver new and exciting digital experiences.
              </p>
              <p className="lead2">
              Thank you for taking the time to learn a bit about me and my journey as a developer! 
              </p>
            </div>
          </div>
        </div> 
        <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <p className='p1'> </p>
        </Col>
        <Col xs={6} md={4}>
          <p></p>
          <p></p>
        </Col>
      </Row>
      </section>
    </>
  );
};

export default About;




