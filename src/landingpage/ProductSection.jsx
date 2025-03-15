import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsSection = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center align-items-center mx-4 mx-md-5" style={{ minHeight: '70vh' }}>
                <Col md={5} className="mb-4 mb-md-0">
                    <div className="position-relative">
                        <h2 className="fw-bold mb-4 product_heading" data-aos="fade-down">OUR INNOVATIVE PRODUCTS</h2>
                        <div className="red-line mt-3"
                            data-aos="fade-right"
                            style={{
                                width: '50px',
                                height: '3px',
                                backgroundColor: '#16b943'
                            }}></div>
                    </div>
                </Col>

                <Col md={7}>
                    <div className="pe-md-5">
                        <p className="mb-4 fs-5" data-aos="zoom-in" style={{ fontWeight: "bold" }}>
                            At K&D Commercial, we believe in creating solutions that reflect your unique vision. Our award-winning design team specializes in crafting bespoke products tailored to your needs.
                        </p>

                        <p className="mb-4 fs-5" data-aos="zoom-in">
                            We offer a wide range of high-performance products, including state-of-the-art aluminium windows, curtain walling systems, fire-rated solutions, and robust shutters. All of our products are built with precision, using the highest quality materials and cutting-edge technologies. We ensure durability and design excellence, creating the perfect blend of functionality and style. Explore our offerings below to discover how we can elevate your space.
                        </p>
                    </div>
                </Col>
            </Row>

            <style jsx>{`
        @media (max-width: 768px) {
            .display-3 {
                font-size: 2.5rem;
            }
            .fs-5 {
                font-size: 1rem !important;
            }
        }
    `}</style>
        </Container>

    );
};

export default ProductsSection;