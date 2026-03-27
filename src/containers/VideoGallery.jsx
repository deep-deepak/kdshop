import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const videos = [
    "/new/5c494590-bbcb-4c08-bc1b-3bc14a9daff9.MP4",
    "/new/89845daf-f93f-4fae-90aa-cb71952bf3bd.MP4",
];

export default function VideoGallery() {
    const [visibleCount, setVisibleCount] = useState(4); // Initial visible videos

    const handleViewMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, videos.length));
    };

    return (
        <div style={{
            padding: "30px",
            backgroundColor: "#f4f7f6", // Soft light gray background to match
        }}>
            <h2 className="updatedgalley_heading mt-5" data-aos="fade-in">
                Our Videos
            </h2>
            <Container fluid className="Image_gallery mt-4 mb-5">
                <Row className="g-4 justify-content-center">
                    {videos.slice(0, visibleCount).map((src, index) => (
                        <Col key={index} md={4} sm={6}>
                            <div className="Image_gallery-item">
                                <video
                                    src={src}
                                    controls
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
                {visibleCount < videos.length && (
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
