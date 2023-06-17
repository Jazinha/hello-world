import React from 'react';
import Typewriter from './Typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Portfolio.css'; 
import Projects from './Projects'

function Portfolio() {

  return (
    <div>
      <div className="typewriter-container">
        <div className="typewriter-wrapper">
          <Typewriter />
        </div>
      </div>
      <section id="circle-word">
      <svg className="circle-svg">
        <defs>
          <path id="circle-path" d="M180,100 A80,80 0 1,1 20,100 A80,80 0 1,1 180,100" />
        </defs>
        <circle className="circle-shape" cx="100" cy="100" r="80" />
        <text className="circle-text">
          <textPath href="#circle-path" startOffset="50%">
            Welcome to My Portfolio!...Welcome to my Portfolio!...Welcome to my P...
          </textPath>
        </text>
      </svg>
    </section> 
    <section>

    </section>
    <section> 
    <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <p></p>
        </Col>
        <Col xs={6} md={4}>
        <p></p>
        </Col>
    </Row> 
    <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
    </Row> 
    <div className='container'>
    <div className="row">
            <div className="col-lg-6 ms-auto">
              <p className="welcome">
              Here is some info about me!
              </p> 
              <p className='skills'> I have a strong foundation in HTML, CSS, and JavaScript, Node.js, Express.js, MySQL, MongoDB, React.js, Bootstrap, Git, and more!</p> 
              <p>I also have previous design experience using different Adobe software and Figma.</p>
            </div>
            <div className="col-lg-4 me-auto"> 
            <p className='p1'>
            Previous experience includes: Communications Intern, Paralegel, Field Representative for the CDC and USCB, and currently an HR specialist.  
              </p> 
              <p className='p2'>
               I am currently learning Java and Python to expand my programming knowledge.  
              </p>
              <p className="lead2">
              I am trilingual and am fluent in English, Spanish, and Portuguese. Some hobbies of mine include hiking, drawing, painting, and playing chess. 
              </p>
            </div> 
            <div className="col-lg-6 ms-auto">
              <p className="click-about">
              To learn more about me, click the heart! 
              </p>  
            </div>  
            <div className="col-lg-4 me-auto"> 
            <p className='p1'>
            <a href='/about' className='about-click'><FontAwesomeIcon icon={faHeart} beat style={{color: "#000000",}} className="heart-click"/></a>
              </p> 
            </div>
          </div>
    </div>
        <div className="projects-portfolio-link">
        <div><h2 className='projectstitle'>Projects</h2></div>     
      <Projects /> 
      </div> 
    </section>
      
    </div>
  );
}

export default Portfolio;




















