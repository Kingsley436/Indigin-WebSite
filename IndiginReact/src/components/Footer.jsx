import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container className='py-3'>
        <Row className='pb-3'>
          <Col md={8}>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/founder">Founder</Link>
              <Link to="/core-values">Core Values</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="social-icons text-md-end">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: '#34495e', margin: '30px 0 20px' }} />
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Kingsley Quarshie. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;