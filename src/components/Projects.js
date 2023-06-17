import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import hellokitty from '../images/hellokitty.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen} from '@fortawesome/free-solid-svg-icons'; 
import { faChessPawn} from '@fortawesome/free-solid-svg-icons'; 
import { faChessKing} from '@fortawesome/free-solid-svg-icons'; 
import { faChessBishop} from '@fortawesome/free-solid-svg-icons';
import './Projects.css'; // Import the custom CSS file
import geo from '../images/geo.jpg'; 
import bootlegtwitter from '../images/bootlegtwitter.jpg';
import myimage from '../images/myimage.jpg'; 

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSquareClick = (modalId) => {
    setShowModal(true);
    setActiveModal(modalId);
  };

  const renderModals = () => {
    const modalData = [
      {
        id: 1,
        title: 'Hello-weather',
        content:
          'Hello-weather is a cute Hello Kitty Weather app, that displays a 5-day forecast of any city you type in! Click on the link below to test it out.',
        image: hellokitty, 
        link: 'https://jazinha.github.io/Hello-kitty-weather/',
      },
      {
        id: 2,
        title: 'Geo-trivia',
        content: 'This is a 5 question timed trivia quiz on geography, where you have 60 seconds to complete the quiz, but time is subtracted every single time the question is incorrect. Click the link below to test your geography knowledge!',
        image: geo, 
        link: 'https://jazinha.github.io/geo-trivia/',
      },
      {
        id: 3,
        title: 'bootlegTwitter',
        content: 'This app as the name suggests, is a very simple skeleton of the popular social media app, Twitter. Although, it does not have all of the functionalities, it has its own database that allows users to create an account, log in and interact by posting Chirps (bootleg tweets). This was a group collaboration in between myself and some of my UCR bootcamp peers.',
        image: bootlegtwitter, 
        link: 'https://bootleg-twitter.herokuapp.com/login',
      },
      {
        id: 4,
        title: 'Hello-blog',
        content: '',
        image: '',
        link: 'https://jazinha.github.io/Hello-kitty-weather/',
      },
      {
        id: 5,
        title: 'e-commerce',
        content: 'Modal 5 content goes here.',
        image: '', // Replace with the image URL for Modal 5
      },
      {
        id: 6,
        title: 'dontREADME',
        content: 'Modal 6 content goes here.',
        image: '', // Replace with the image URL for Modal 6
      },
    ];

    return modalData.map((modal) => (
      <Modal
        key={modal.id}
        show={showModal && activeModal === modal.id}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.image && (
            <div className="modal-image-container">
              <img src={modal.image} alt={`Modal ${modal.id}`} className="modal-image" />
            </div>
          )}
          <p>{modal.content}</p>
          {modal.link && (
            <p>
              Additional information can be found{' '}
              <a href={modal.link} className="modal-link">
                here
              </a>
              .
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    ));
  };

  return ( 
    <section id="checkers"> 
      <Container> 
        <Row>
          <Col xs={4}>
            <div className="square1" onClick={() => handleSquareClick(1)}>
              8d 
            <div id="chess">
            <FontAwesomeIcon icon={faChessQueen} style={{color: "#000000",}} />
            </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="square2" onClick={() => handleSquareClick(2)}>
              8e 
              <div id="chess">
              <FontAwesomeIcon icon={faChessKing} style={{color: "#000000",}} />
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="square1" onClick={() => handleSquareClick(3)}>
              8f
              <div id="chess">
              <FontAwesomeIcon icon={faChessBishop} style={{color: "#000000",}} />
            </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <div className="square2" onClick={() => handleSquareClick(4)}>
              7d 
              <div id="chess">
              <FontAwesomeIcon icon={faChessPawn} bounce style={{color: "#000000",}} />
              </div> 
              <p id="chessp">Click chess tiles to view Projects!</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="square1" onClick={() => handleSquareClick(5)}>
              7e 
              <div id="chess">
              <FontAwesomeIcon icon={faChessPawn} style={{color: "#000000",}} />
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="square2" onClick={() => handleSquareClick(6)}>
              7f 
              <div id="chess">
              <FontAwesomeIcon icon={faChessPawn} style={{color: "#000000",}} />
              </div>
            </div>
          </Col>
        </Row>
        {renderModals()}
      </Container>
    </section>
  );
};

export default Projects;

