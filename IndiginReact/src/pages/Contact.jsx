import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:qkingsley436@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setAlertMessage('Your message has been processed. Please send the email from your email client.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="text-center mb-5 text-green">Contact Us</h1>
            </Col>
          </Row>
          
          <Row className="g-5">
            <Col lg={8}>
              <Card className="contact-form">
                <Card.Body>
                  <h3 className="mb-4 text-green">Get In Touch</h3>
                  
                  {showAlert && (
                    <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                      {alertMessage}
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name: *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone:</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email: *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject:</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Message/Description: *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    
                    <Button type="submit" className="btn-custom" size="lg">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="card-custom h-100">
                <Card.Body>
                  <h4 className="mb-4 text-green">Contact Information</h4>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <FaMapMarkerAlt className="text-gold me-3" size={24} />
                      <div>
                        <h6 className="text-green">Location</h6>
                        <p className="mb-0">Dawhenya, Tema Community 25 - Ghana</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <FaEnvelope className="text-gold me-3" size={24} />
                      <div>
                        <h6 className="text-green">Email</h6>
                        <p className="mb-0">info@indigin.com.gh</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Maps Embed */}
                  <div className="mt-4">
                    <h6 className="mb-3 text-green">Find Us</h6>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7359117283975!2d0.0406771!3d5.7165134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDInNTkuNCJOIDDCsDI1JzAyLjQiRQ!5e0!3m2!1sen!2sgh!4v1640000000000!5m2!1sen!2sgh"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Indigin Group Location"
                        style={{ border: 0, borderRadius: '10px' }}
                      ></iframe>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;