import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Founder = () => {
  const achievements = [
    {
      year: '2019',
      events: [
        {
          title: 'Inauguration of Multi-purpose Head Office Edifice',
          description: 'In April 2019, the Group purchased and inaugurated a multipurpose edifice for one of its subsidiaries- Kings City Real Estate Limited (now Estate Masters ltd) to help carry out operational functions after operating in a rented office for over 3years. This edifice enhanced departmental grouping in facilitating operational functions of the company and also boost morale of clients in doing business with us.'
        },
        {
          title: 'Re-branding of Hanex Weks',
          description: 'Indigin Group started experiencing immense growth after the Construction wing of the Group called Jcw ltd was rebranded to Hanex weks ltd and fully functional alongside the Estate wing. The purpose (intent) was to offer construction services to land buyers of the estate wing-Estate masters as well as external estate companies, individuals and corporate entities This move expanded the company\'s operations by adding more services and also widened its customer base.'
        }
      ]
    },
    {
      year: '2021',
      events: [
        {
          title: 'Inauguration of Kasoa Branch',
          description: '2021 saw a massive achievement by the Group when the kasoa branch of Estate Masters was inaugurated. This milestone leveraged the clientele base of the Group (company) and also led to acquisition of lands in Kasoa and its environs thereby, increasing the product line and stretching brand\'s recognition.'
        },
        {
          title: 'Dwellys Re-branded',
          description: 'Again, the Group rebranded one of its subsidiaries- Dwellys into an online property selling and renting platform, formerly a property brokerage firm. This brand has been intentionally crafted to transform and elevate the property buying, selling, and renting experience for both real estate professionals and individuals seeking their dream properties.'
        }
      ]
    },
    {
      year: '2023',
      events: [
        {
          title: 'Commence Building of Premium Estate Houses',
          description: 'In 2023, Nestas, one of Indigin Group wing acquired vast acres of land in the Tema community 26 enclave and currently building modern and luxurious affordable estate houses for sale. The intent seeks to reduce housing deficit currently facing the Ghanaian economy and also provide a serene environment for families to live in. This premium estate community is designed to elevate the standard of luxury living in Ghana.'
        },
        {
          title: 'Awards/Accolades',
          description: 'The Group CEO, Mr. Francis Nesta Opey later this year September 2023, received an award in Kenya for the \'Most Outstanding African in Industrial Real Estate\'. This recognition has pitched the brand in the continental stage.'
        }
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Founder Profile Section */}
      <section className="section-padding section-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="mb-4 text-green">Meet Our Founder</h1>
              <p className="lead">
                Mr. Francis Nesta Opey, the visionary leader behind Indigin Group, envisions a future where the real estate 
                industry combines innovation with sustainability. His leadership has been instrumental in steering the group 
                and its subsidiaries towards achieving this vision.
              </p>
              <p className='fs-6'>
                Indigin Group thrives on resilience, embodying a spirit that has not only weathered industry challenges but 
                has also restored hope, trust, and loyalty. In an industry where such values are paramount, Indigin Group's 
                commitment to acceptance, honesty, resilience, passion, ambition, focus and optimism defines our brand.
              </p>
              <p>
                The Group name for Estate Masters, Hanex Weks, Dwellys and Nestas limited. The main inspiration for the origin 
                of the name 'INDIGIN' was deduced from the word 'INDIGENE'- native/indigenous...
              </p>
              <div className="mt-4">
                <h5 className="text-gold">Francis N. Opey</h5>
                <p className="text-green font-weight-bold">Founder & CEO</p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="../src/assets/md.jpeg"
                alt="Francis Nesta Opey"
                className="img-fluid rounded shadow-lg"
                style={{ height: '600px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-padding section-dark">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="text-center mb-5 text-green">Our Story</h2>
              <p className="lead text-center mb-5 text-dark">
                Indigin Group has attained lot of successes since inception. The Group boasts of one of the best Estate companies 
                in Ghana-Estate Masters ltd selling lands to over 5,000 people in Ghana and abroad. Here are some great achievements 
                attained by the Group worth noting.
              </p>

              <div className="timeline">
                {achievements.map((yearData, yearIndex) => (
                  <div key={yearIndex} className="mb-5">
                    <h3 className="timeline-year">{yearData.year}</h3>
                    {yearData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="timeline-item">
                        <Card className="card-custom">
                          <Card.Body>
                            <Card.Title className="h5 text-green">{event.title}</Card.Title>
                            <Card.Text>{event.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Founder;