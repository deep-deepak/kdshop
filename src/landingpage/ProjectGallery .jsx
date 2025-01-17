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
            url: '/images/gallery1.jpg',
            alt: 'Modern apartment building',
            title: 'Modern Architecture'
        },
        {
            id: 3,
            url: '/images/gallery1.jpg',
            alt: 'Retail storefront',
            title: 'Retail Design'
        },
        {
            id: 4,
            url: '/images/gallery1.jpg',
            alt: 'Interior design',
            title: 'Interior Spaces'
        },
        {
            id: 5,
            url: '/images/gallery1.jpg',
            alt: 'Design elements',
            title: 'Design Details'
        },
        {
            id: 6,
            url: '/images/gallery1.jpg',
            alt: 'Modern office',
            title: 'Office Spaces'
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <Container className="p-4">
            <Row className="g-4">
                {images.map((image) => (
                    <Col key={image.id} xs={12} md={6} lg={4}>
                        <div
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