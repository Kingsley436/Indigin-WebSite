import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const AboutUs = () => {
  const subsidiaries = [
    {
      name: 'Estate Masters',
      description: 'Estate Masters is a reputable real estate company with a nine-year track record of providing genuine lands. With a team of approximately 30 dedicated professionals, Estate Masters has established itself as a trusted player in the real estate market.',
      link: 'https://estatemastersgh.com/?playlist=12145a3&video=b48c4ec',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Hanex Weks',
      description: 'Hanex Weks is a dynamic construction company offering a comprehensive range of services, including home constructions, pergola designs, swimming pool, paving, woodworks, Alucuboard cladding, renovations, glazing works, and kitchen cabinet installations.',
      link: 'https://hanexweks.com/',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Nestas',
      description: 'Nestas is a forward-thinking real estate company specializing in the construction and sale of eco-friendly houses. With a focus on sustainability and innovation, Nestas contributes to the development of environmentally conscious living spaces.',
      link: 'https://nestas.com.gh/',
      image: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dwellys',
      description: 'Dwellys is a cutting-edge online listing platform that revolutionizes property advertising. Whether it\'s houses for sale or rent, Dwellys provides a user-friendly platform for individuals to list and showcase their properties.',
      link: 'https://www.dwellys.com/',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <>
      <div style={{ paddingTop: '100px' }}>
        {/* About Us Section */}
        <section className="section-padding section-light">
          <Container>
            <Row>
              <Col lg={12}>
                <h1 className="text-center mb-5 text-green">About Us</h1>
                <div className="text-center mb-5">
                  <p className="lead text-muted">
                    Indigin Group Ltd is the umbrella body of a number of companies with business offerings across diverse sectors, 
                    thus real estate, land development and estate, construction and civil engineering, real estate marketing, 
                    commodities etc. Indigin Group was founded by the current Executive Director Francis Nesta Opey. The group is 
                    driven by a commitment to creating sustainable and innovative solutions in every sector it operates in.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="g-5">
              <Col md={6}>
                <Card className="card-custom h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <i className="fas fa-eye" style={{fontSize: '2.5rem', color: 'var(--gold)'}}></i>
                    </div>
                    <Card.Title className="h3 text-green">Our Vision</Card.Title>
                    <Card.Text>
                      To ensure continuous success of all subsidiaries in spite of the economic climate in 
                      all countries we are present in.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-custom h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <i className="fas fa-bullseye" style={{fontSize: '2.5rem', color: 'var(--gold)'}}></i>
                    </div>
                    <Card.Title className="h3 text-green">Our Mission</Card.Title>
                    <Card.Text>
                      Indigin group envisions investment in diverse industries through subsidiary businesses and 
                      harmonizing under the umbrella of Indigin, ensuring optimum level corporate governance and 
                      to be as an African business group that would transcend generations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Subsidiary Companies Section */}
        <section className="section-padding section-dark">
          <Container>
            <Row>
              <Col lg={12}>
                <h2 className="text-center mb-5 text-green">Our Subsidiary Companies</h2>
                <Carousel>
                  {subsidiaries.map((company, index) => (
                    <Carousel.Item key={index}>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <img
                            src={company.image}
                            alt={company.name}
                            className="img-fluid rounded"
                            style={{ height: '350px', width: '100%', objectFit: 'cover' }}
                          />
                        </Col>
                        <Col md={6}>
                          <div className="p-4">
                            <h3 className="text-green">{company.name}</h3>
                            <p className="text-dark fs-6 text-justify pb-4">{company.description}</p>
                            <Button 
                              className="btn-custom"
                              href={company.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Explore Company
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AboutUs;