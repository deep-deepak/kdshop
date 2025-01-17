import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-8">
            <Container>
                <Row className="align-items-center">

                    <Col md={6} className="mb-4 mb-lg-0">
                        <div className="d-flex align-items-center">
                            {/* Logo */}
                            <div className="me-3">
                                <svg
                                    viewBox="0 0 40 40"
                                    className="w-10 h-10 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M35 5v30H5V5h30m2-2H3v34h34V3z" />
                                    <path d="M10 10h20v2H10zM10 20h20v2H10z" />
                                </svg>
                            </div>

                            {/* Company Name and Details */}
                            <div>
                                <h2 className="text-xl font-bold mb-0">LSF Commercial</h2>
                                <p className="text-sm text-gray-300 mb-0">Windows • Doors • Curtain Walling</p>
                                <p className="text-xs text-gray-400 mt-2">
                                    © 2022 London Shopfitters Ltd T/A LSF Commercial.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col md={6}>
                        <div className="d-flex flex-column align-items-lg-end">
                            <h3 className="text-lg font-bold mb-3">QUICK LINKS</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="/about" className="text-white text-decoration-none hover:text-gray-300">
                                        About Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/products" className="text-white text-decoration-none hover:text-gray-300">
                                        Products
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/sectors" className="text-white text-decoration-none hover:text-gray-300">
                                        Sectors
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/gallery" className="text-white text-decoration-none hover:text-gray-300">
                                        Gallery
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/privacy" className="text-white text-decoration-none hover:text-gray-300">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/skips" className="text-white text-decoration-none hover:text-gray-300">
                                        Skips
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;