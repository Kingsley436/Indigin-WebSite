import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaHandshake, 
  FaHeart, 
  FaShieldAlt, 
  FaFire, 
  FaRocket, 
  FaEye, 
  FaSun, 
  FaExchangeAlt, 
  FaBolt, 
  FaHandHolding, 
  FaUsers, 
  FaUnity 
} from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      title: 'Acceptance',
      description: 'Embracing diversity and inclusivity',
      icon: <FaHandshake className="core-value-icon" />
    },
    {
      title: 'Honesty',
      description: 'Upholding transparency and integrity',
      icon: <FaHeart className="core-value-icon" />
    },
    {
      title: 'Resilience',
      description: 'Navigating challenges with strength and adaptability',
      icon: <FaShieldAlt className="core-value-icon" />
    },
    {
      title: 'Passion',
      description: 'Fueled by enthusiasm for excellence',
      icon: <FaFire className="core-value-icon" />
    },
    {
      title: 'Ambition',
      description: 'Striving for continuous growth and innovation',
      icon: <FaRocket className="core-value-icon" />
    },
    {
      title: 'Focus',
      description: 'Concentrating on delivering exceptional results',
      icon: <FaEye className="core-value-icon" />
    },
    {
      title: 'Optimism',
      description: 'Approaching challenges with a positive mindset',
      icon: <FaSun className="core-value-icon" />
    },
    {
      title: 'Change',
      description: 'Embracing evolution and adaptation',
      icon: <FaExchangeAlt className="core-value-icon" />
    },
    {
      title: 'Motivation',
      description: 'Igniting drive and determination',
      icon: <FaBolt className="core-value-icon" />
    },
    {
      title: 'Care',
      description: 'Nurturing relationships and communities',
      icon: <FaHandHolding className="core-value-icon" />
    },
    {
      title: 'Support',
      description: 'Standing together and uplifting one another',
      icon: <FaUsers className="core-value-icon" />
    },
    {
      title: 'Unity',
      description: 'Promoting solidarity within the organization and community',
      icon: <FaUnity className="core-value-icon" />
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="text-center mb-4 text-green">Our Core Values</h1>
              <p className="lead text-center mb-5 text-muted">
                Under the visionary leadership of Mr. Francis Nesta Opey and the strategic guidance of the executive committee, 
                Indigin Group shapes the real estate landscape with a commitment to strong core values and principles.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {values.map((value, index) => (
              <Col key={index} lg={3} md={4} sm={6}>
                <Card className="card-custom core-value-card">
                  <Card.Body>
                    {value.icon}
                    <Card.Title className="h5">{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CoreValues;