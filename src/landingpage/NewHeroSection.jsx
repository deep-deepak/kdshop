import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewHeroSection = () => {
    // Data for the landing page
    const pageData = {
        hero: {
            title: "A healthy meal delivered to your door, every single day",
            description: "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs."
        },
        testimonials: [
            { id: 1, avatar: '/path/to/avatar1.jpg', name: 'User 1' },
            { id: 2, avatar: '/path/to/avatar2.jpg', name: 'User 2' },
            { id: 3, avatar: '/path/to/avatar3.jpg', name: 'User 3' },
            { id: 4, avatar: '/path/to/avatar4.jpg', name: 'User 4' },
            { id: 5, avatar: '/path/to/avatar5.jpg', name: 'User 5' },
            { id: 6, avatar: '/path/to/avatar6.jpg', name: 'User 6' },
        ],
        foodImages: [
            {
                id: 1,
                src: '/images/gallery11.jpg',
                alt: 'Healthy food bowls',
                height: '300px'
            },
            {
                id: 2,
                src: '/images/gallery112.jpg',
                alt: 'Meal preparation',
                height: '300px'
            },
            {
                id: 3,
                src: '/images/gallery113.jpg',
                alt: 'Person enjoying meal',
                height: '300px'
            }
        ]
    };

    return (
        <Container fluid className="bg-black min-vh-100 d-flex align-items-center py-5">
            <Row className="w-100">
                {/* Left Column - Text Content */}
                <Col lg={6} className="px-4 px-lg-5">
                    <div className="text-white mb-5">
                        <h1 className="display-4 fw-bold mb-4" style={{ fontSize: '3.5rem' }}>
                            {pageData.hero.title.split(',').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < pageData.hero.title.split(',').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-secondary fs-5 mb-5">
                            {pageData.hero.description}
                        </p>

                        {/* Testimonial Avatars */}
                        <div className="d-flex align-items-center">
                            {pageData.testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    style={{
                                        marginLeft: index === 0 ? '0' : '-1rem',
                                        zIndex: pageData.testimonials.length - index
                                    }}
                                >
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        roundedCircle
                                        className="border border-2 border-dark"
                                        style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>

                {/* Right Column - Image Grid */}
                <Col lg={6}>
                    <div className="position-relative">
                        <Row className="g-4">
                            {pageData.foodImages.map((image) => (
                                <Col xs={12} key={image.id}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fluid
                                        className="rounded-3"
                                        style={{
                                            objectFit: 'cover',
                                            height: image.height,
                                            width: '100%'
                                        }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NewHeroSection;