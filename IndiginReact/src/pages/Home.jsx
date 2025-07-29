import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const carouselImages = [
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col lg={10} className="text-center">
              <div className="hero-content">
                <h1 className="hero-title">Indigin Group</h1>
                <p className="hero-subtitle">We're Resilient</p>
                <p className="hero-lead">
                  Your trusted partner across real estate, construction, land development, 
                  and commodities sectors.
                </p>
                <Link to="/contact">
                  <Button className="btn-custom me-4 pulse">Book Now</Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-outline-custom">Contact Us</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brief Intro Section */}
      <section className="section-padding section-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} className="fade-in-up">
              <h2 className="mb-4 text-green">Our Combined Services</h2>
              <p className="lead mb-5 text-muted">
                Indigin Group Ltd serves as the umbrella body for a diverse portfolio of companies 
                operating across multiple sectors. We specialize in real estate, land development, 
                construction and civil engineering, real estate marketing, and commodities trading. 
                Our integrated approach ensures comprehensive solutions for all your business needs.
              </p>
              
              <Row className="g-4">
                <Col md={6} lg={3}>
                  <div className="card card-custom h-100">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-home" style={{fontSize: '3rem', color: 'var(--gold)'}}></i>
                      </div>
                      <h5 className="card-title text-green">Real Estate</h5>
                      <p className="card-text">Premium property solutions and land development services</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className="card card-custom h-100">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-hammer" style={{fontSize: '3rem', color: 'var(--gold)'}}></i>
                      </div>
                      <h5 className="card-title text-green">Construction</h5>
                      <p className="card-text">Quality construction and civil engineering projects</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className="card card-custom h-100">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-bullhorn" style={{fontSize: '3rem', color: 'var(--gold)'}}></i>
                      </div>
                      <h5 className="card-title text-green">Marketing</h5>
                      <p className="card-text">Professional real estate marketing and advertising</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3}>
                  <div className="card card-custom h-100">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-chart-line" style={{fontSize: '3rem', color: 'var(--gold)'}}></i>
                      </div>
                      <h5 className="card-title text-green">Commodities</h5>
                      <p className="card-text">Strategic commodities trading and investment</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Carousel Section */}
      <section className="section-padding section-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="text-center mb-5 text-green">Our Projects Gallery</h2>
              <Carousel>
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Project ${index + 1}`}
                      style={{ height: '500px', objectFit: 'cover', borderRadius: '15px' }}
                      onClick={() => handleImageClick(image)}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal for Image Popup */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title className="text-white">Project Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={selectedImage} alt="Project" className="img-fluid rounded" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;