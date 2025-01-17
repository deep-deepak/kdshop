import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const slides = [
    {
        title: "THE PROCESS",
        subtitle: "Design",
        content: "The first stage creates a vision of the final product. We communicate with designers, architects and surveyors in order to understand the requirements and create a design built upon existing specifications."
    },
    {
        title: "THE PROCESS",
        subtitle: "Fabrication",
        content: "Once designs have been approved, manufacturing begins to bring the product to life. We have been operating for almost half a century and have a reputation for the highest quality work coupled with exceptional customer service."
    },
    {
        title: "THE PROCESS",
        subtitle: "Installation",
        content: "Finally, once the product has been fabricated we take it to site. Safety is paramount to LSF Commercial. We work closely with a team of highly qualified safety consultants. Once safety checks are complete, only then do we start installing to the customers needs."
    }
];

const ExpertiseSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveSlide((prev) => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 500);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    // Handle manual slide change
    const handleSlideChange = (index) => {
        if (index !== activeSlide && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveSlide(index);
                setIsTransitioning(false);
            }, 500);
        }
    };

    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                {/* Left Section */}
                <Col md={6} className="bg-black text-white p-4 p-md-5" style={{ minHeight: '100vh' }}>
                    <div className="d-flex flex-column justify-content-center h-100">
                        <div className="expertise-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p className="small mb-3">EXPERTISE</p>
                            <h2 className="display-4 fw-bold mb-4" style={{ marginBottom: "20px" }}>WHY CHOOSE US?</h2>
                            <div className="red-line mt-3" style={{
                                width: '50px',
                                height: '3px',
                                backgroundColor: 'red'
                            }}></div>
                            <p className="mb-5 text-light" style={{ marginTop: "20px" }}>
                                Our experts are here to offer you professional and specialised window glazing guidance.
                                We will be able to supply sophisticated architectural glazing for your project.
                                For over 40 years, LSF Commercial has been a market leader in the field of architectural glazing in London.
                            </p>
                            <Button
                                variant="outline-danger"
                                size="lg"
                                className="rounded-0 px-4 about_us_btn"

                            >
                                ABOUT US
                            </Button>
                        </div>
                    </div>
                </Col>

                {/* Right Section */}
                <Col md={6} className="p-0">
                    <div
                        className="position-relative h-100 d-flex align-items-center"
                        style={{
                            minHeight: '100vh',
                            backgroundColor: '#EB0008',
                            opacity: 0.9
                        }}
                    >
                        {/* Background Pattern */}
                        <div className="position-absolute w-100 h-100" style={{ opacity: 0.1 }}>
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="position-absolute w-100"
                                    style={{
                                        height: '1px',
                                        backgroundColor: 'black',
                                        top: `${i * 5}%`,
                                        transform: 'rotate(-45deg)',
                                        transformOrigin: 'center'
                                    }}
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="position-relative p-4 p-md-5 text-white w-100">
                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <div
                                    className="slide-content"
                                    style={{
                                        minHeight: '300px',
                                        opacity: isTransitioning ? 0 : 1,
                                        transition: 'opacity 0.5s ease'
                                    }}
                                >
                                    <h2 className="display-4 fw-bold mb-4">{slides[activeSlide].title}</h2>
                                    <h3 className="h2 mb-3">{slides[activeSlide].subtitle}</h3>
                                    <p className="mb-5" style={{ fontSize: '1.1rem' }}>
                                        {slides[activeSlide].content}
                                    </p>
                                </div>

                                {/* Custom Dot Indicators */}
                                <div className="d-flex gap-3 mt-5">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSlideChange(index)}
                                            className="btn p-0 border-0"
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '50%',
                                                backgroundColor: activeSlide === index ? '#fff' : 'rgba(255,255,255,0.5)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                            aria-label={`Slide ${index + 1}`}
                                            disabled={isTransitioning}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <style jsx>{`
        .btn:focus {
          box-shadow: none;
        }
      `}</style>
        </Container>
    );
};

export default ExpertiseSection;