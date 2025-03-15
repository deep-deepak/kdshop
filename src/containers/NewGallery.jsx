import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const images = [
    "/images/gallery11.jpg",
    "/images/gallery112.jpg",
    "/images/gallery113.jpg",
    "/images/gallery114.jpg",
    "/images/gallery115.jpg",
    "/images/gallery116.jpg",
    "/images/gallery117.jpg",
    "/images/gallery118.jpg",
    "/images/gallery119.jpg",
    "/images/gallery120.jpg",
    "/images/gallery121.jpg",
    "/images/gallery123.jpg",
    "/images/gallery124.jpg",
    "/images/gallery125.jpg",
];

export default function NewGallery() {
    const [visibleCount, setVisibleCount] = useState(8); // Initial visible images

    const handleViewMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, images.length));
    };

    return (
        <div style={{
            padding: "30px",
            background: "linear-gradient(to bottom, #0baf3f, #e0ffe5)", // Gradient background
        }}>
            <h2 className="updatedgalley_heading" data-aos="fade-in">
                Our design
            </h2>
            <Container fluid className="Image_gallery">
                <Row className="g-3">
                    {images.slice(0, visibleCount).map((src, index) => (
                        <Col key={index} md={4}>
                            <div className="Image_gallery-item">
                                <img src={src} alt={`Gallery ${index}`} className="img-fluid" />
                            </div>
                        </Col>
                    ))}
                </Row>
                {visibleCount < images.length && (
                    <div className="text-center mt-3">
                        <Button variant="primary" onClick={handleViewMore} style={{ background: "#0baf3f", border: "none" }}>
                            View More
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );
}
