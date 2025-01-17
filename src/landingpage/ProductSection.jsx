import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsSection = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center align-items-center mx-4 mx-md-5" style={{ minHeight: '70vh' }}>
                <Col md={5} className="mb-4 mb-md-0">
                    <div className="position-relative">
                        <h1 className=" fw-bold mb-4 product_heading">OUR PRODUCTS</h1>
                        <div className="red-line mt-3" style={{
                            width: '50px',
                            height: '3px',
                            backgroundColor: 'red'
                        }}></div>
                    </div>
                </Col>

                <Col md={7}>
                    <div className="pe-md-5">
                        <p className="mb-4 fs-5">
                            We specialize in author's projects which represent your individuality. Our
                            award-winning designers know how to create a perfect space for your.
                        </p>

                        <p className="mb-4 fs-5">
                            We specialise in a range of products, from aluminium windows and curtain walling to fire resistant systems and shutters. Everything LSF
                            Commercial creates is to the highest of standards, with durable materials,
                            qualitative work and innovative technologies. Click below and learn more
                            about each product we offer.
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