import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
    const services = [
        {
            id: 1,
            title: 'COMMERCIAL',
            image: '/images/about1.jpg', // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 2,
            title: 'EDUCATION',
            image: '/images/about2.jpg', // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 3,
            title: 'RETAIL',
            image: '/images/about3.jpg', // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 4,
            title: 'RESIDENTIAL',
            image: '/images/about4.jpg', // Replace with actual image path
            bgPosition: 'center'
        },
    ];

    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col md={6}>
                    <div className="about-header">
                        <h6 className="text-uppercase mb-3">ABOUT US</h6>
                        <h1 className="about_heading">WE CREATE AND TURN INTO REALITY</h1>
                        <div className="red-line mt-3" style={{
                            width: '50px',
                            height: '3px',
                            backgroundColor: 'red'
                        }}></div>
                    </div>
                </Col>
                <Col md={6}>
                    <p className="mb-4" style={{ fontWeight: "bold" }}>
                        LSF Commercial offers aluminium windows, doors, curtain walling,
                        shopfronts and fire rated products. With over 40 years of experience,
                        we push the boundaries and apply innovative design solutions to enhance
                        our products and exceed clients expectations.
                    </p>
                    <p>
                        Offering a complete commercial property enhancement service, we are
                        specialists in designing, producing and installing aluminium doors, windows,
                        shopfronts and curtain walling. From schools and colleges, to restaurants,
                        banks, offices and showrooms, we enhance commercial buildings across every
                        business sector.
                    </p>
                </Col>
            </Row>
            <Row className="g-4">
                {services.map((service) => (
                    <Col key={service.id} xs={12} sm={6} lg={3}>
                        <div
                            className="service-card position-relative"
                            style={{
                                height: '500px',
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: service.bgPosition,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                boxShadow: "0px 9px 13px 0px rgba(0, 0, 0, 0.09)"
                            }}
                        >
                            <div
                                className="service-overlay position-absolute bottom-0 start-0 w-100 p-3"

                            >
                                <h3 className="text-white mb-0 about_heading3">{service.title}</h3>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutSection;