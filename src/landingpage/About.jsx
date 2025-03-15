import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
    const services = [
        {
            id: 1,
            title: 'COMMERCIAL',
            image: '/images/commercial.avif', // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 2,
            title: 'EDUCATION',
            image: '/images/educational.avif', // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 3,
            title: 'RETAIL',
            image: "/images/retail.avif", // Replace with actual image path
            bgPosition: 'center',
        },
        {
            id: 4,
            title: 'RESIDENTIAL',
            image: '/images/residence.avif', // Replace with actual image path
            bgPosition: 'center',
        },
    ];

    return (
        <Container className="py-5">
            {/* About Header */}
            <Row className="mb-5" data-aos="fade-right">
                <Col md={6}>
                    <div className="about-header">
                        <h6 className="text-uppercase mb-3" style={{ color: "#16b943" }}>WHO WE ARE</h6>
                        <h2 className="about_heading" data-aos="fade-up">TURNING INNOVATIVE IDEAS INTO STRUCTURAL REALITY</h2>
                        <div
                            className="red-line mt-3"
                            style={{
                                width: '50px',
                                height: '3px',
                                backgroundColor: '#16b943',
                            }}
                            data-aos="fade-right"
                        ></div>
                    </div>
                </Col>
                <Col md={6} data-aos="fade-left">
                    <p className="mb-4" style={{ fontWeight: "bold" }}>
                        At K&D Commercial, we specialize in high-quality aluminium windows, doors, curtain walling, shopfronts, and fire-rated solutions. With over a decade of experience, we continually innovate to provide cutting-edge designs that push boundaries and deliver exceptional results.
                    </p>
                    <p>
                        As experts in commercial property enhancement, we handle everything from concept design to production and installation. Whether it’s schools, restaurants, banks, offices, or showrooms, we are committed to transforming your commercial space with precision and style, ensuring that every project meets and exceeds client expectations.
                    </p>
                </Col>
            </Row>


            {/* Services Section */}
            <Row className="g-4" data-aos="fade-in">
                {services.map((service) => (
                    <Col key={service.id} xs={12} sm={6} lg={3} data-aos="zoom-in">
                        <div
                            className="service-card position-relative"
                            style={{
                                height: '500px',
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: service.bgPosition,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: "0px 9px 13px 0px rgba(0, 0, 0, 0.09)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            {/* Overlay */}
                            <div
                                className="service-overlay position-absolute w-100 h-100"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                    transition: 'background 0.3s ease',
                                }}
                            />

                            {/* Content */}
                            <div
                                className="service-content position-absolute bottom-0 start-0 w-100 p-3"
                                style={{
                                    zIndex: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <h3
                                    className="text-white mb-0 about_heading3"
                                    style={{
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px',
                                    }}
                                    data-aos="slide-up"
                                >
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutSection;
