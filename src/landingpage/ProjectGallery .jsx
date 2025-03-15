import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        {
            id: 1,
            url: '/images/curtainwall.avif',
            alt: 'Curtain walling building',
            title: 'Curtain Wall Systems',
            description: 'Enhance your commercial property with sleek curtain wall systems, offering natural light, modern aesthetics, and superior performance.'
        },
        {
            id: 2,
            url: '/images/modern.avif',
            alt: 'Modern apartment building',
            title: 'Contemporary Living Spaces',
            description: 'Experience secure, energy-efficient, and stylish aluminium window systems, tailored to elevate your business and meet modern design needs.'
        },
        {
            id: 3,
            url: '/images/retaildes.avif',
            alt: 'Retail storefront',
            title: 'Innovative Retail Solutions',
            description: 'Explore premium doors designed for diverse commercial applications, featuring options like thermally broken pivot doors and frameless glass designs.'
        },
        {
            id: 4,
            url: '/images/interia.avif',
            title: 'Enhanced Interior Solutions',
            description: 'Discover fire-resistant aluminium solutions that combine safety, thermal performance, and stunning aesthetics for interior spaces.'
        },
        {
            id: 5,
            url: '/images/designdetail.avif',
            alt: 'Design elements',
            title: 'Architectural Design Highlights',
            description: 'Showcase your business with durable, secure, and visually striking aluminium shopfronts available in various custom window configurations.'
        },
        {
            id: 6,
            url: '/images/office.avif',
            alt: 'Modern office',
            title: 'Inspired Office Environments',
            description: 'Create exceptional office spaces that promote productivity, enhance employee well-being, and reflect your brand identity.'
        }
    ];


    const [hoveredId, setHoveredId] = useState(null);

    return (
        <Container className="p-4">
            <Row className="g-4">
                {images.map((image) => (
                    <Col key={image.id} xs={12} md={6} lg={4}>
                        <div
                            className="gallery-item position-relative overflow-hidden rounded shadow-sm"
                            onMouseEnter={() => setHoveredId(image.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="gallery-image"
                            />
                            <div
                                className={`gallery-overlay ${hoveredId === image.id ? 'active' : ''}`}
                            >
                                <div className="overlay-content">
                                    <h3 className="gallery-title">{image.title}</h3>
                                    {image.description && (
                                        <p className="gallery-description">{image.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Gallery;
