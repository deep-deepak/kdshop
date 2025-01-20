import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        {
            id: 1,
            url: '/images/gallery1.jpg',
            alt: 'Curtain walling building',
            title: 'CURTAIN WALLING',
            description: 'Developing and installing curtain wall systems creates elegant glazed facades on any commercial property, and maximises natural light in the workplace.'
        },
        {
            id: 2,
            url: '/images/home1.jpg',
            alt: 'Modern apartment building',
            title: 'Modern Architecture',
            description: "Secure, durable, energy-efficient and attractive, aluminium window systems are designed to meet the needs of your business and are available in a wide range of designs and configurations."
        },
        {
            id: 3,
            url: '/images/home2.jpg',
            alt: 'Retail storefront',
            title: 'Retail Design',
            description: "A wide range of high quality doors caters for different client needs and commercial building types and purposes. Design options include thermally broken commercial pivot doors, lift and slide designs, and frameless glass doors."
        },
        {
            id: 4,
            url: '/images/home3.jpg',
            alt: 'Interior design',
            title: 'Interior Spaces',
            description: "Fire-resistant aluminium solutions are now available from LSF Commercial. These add an extra layer of security to any structure while also providing weatherproofing, thermal performance, and aesthetic appeal."
        },
        {
            id: 5,
            url: '/images/home4.jpeg',
            alt: 'Design elements',
            title: 'Design Details',
            description: "Attractive, durable, secure and practically-designed, our aluminium shopfronts offer a wide variety of window arrangements to showcase your business."
        },
        {
            id: 6,
            url: '/images/home5.jpg',
            alt: 'Modern office',
            title: 'Office Spaces',
            description: "At LSF Commercial we can design and install stunning office spaces which help improve productivity, improve staff well-being and help make your office a space everyone will enjoy."
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <Container className="p-4">
            <Row className="g-4">
                {images.map((image) => (
                    <Col key={image.id} xs={12} md={6} lg={4}>
                        <div
                            data-aos="zoom-in"
                            className="position-relative overflow-hidden rounded shadow-sm"
                            onMouseEnter={() => setHoveredId(image.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className=""
                                style={{ height: "500px", width: "100%", objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                                style={{
                                    opacity: hoveredId === image.id ? 1 : 0,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                                data-aos="slide-up"
                            >
                                <h3 className="h5 mb-2 gallery_heading">{image.title}</h3>
                                {image.description && (
                                    <p className="small mb-0 gallery_desc">{image.description}</p>
                                )}
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Gallery;