import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const images = [
    "/new/31ed5db4-3ad2-4b19-b76e-8a318b705c93.jpg",
    "/new/42930801-10c1-40fd-9e3c-6b47d02c574d.jpg",
    "/new/727261db-f2cc-4d1c-a23a-1d32767b463c.jpg",
    "/new/7308f0f2-30a8-4258-8a8e-e1c0caa8461e.jpg",
    "/new/9fecccd7-08bd-4f9f-8074-a11158438f3d (1).jpg",
    "/new/9fecccd7-08bd-4f9f-8074-a11158438f3d.jpg",
    "/new/b369bdd8-6660-47e8-86f0-0d8dffb027d3.jpg",
    "/new/b72d1eb5-fd33-4157-80e2-d322ac77c702 (1).jpg",
    "/new/b72d1eb5-fd33-4157-80e2-d322ac77c702.jpg",
    "/new/fa3868d2-a687-40fa-abbf-05c5ac18e3e6.jpg",
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
            backgroundColor: "#f4f7f6", // Soft light gray background
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
