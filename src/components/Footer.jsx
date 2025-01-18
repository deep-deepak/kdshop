import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row className="gy-4">
                    {/* Left Column - Logo and Company Info */}
                    <Col lg={6}>
                        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
                            {/* Logo */}
                            <div className="mb-3 mb-sm-0 me-sm-4">
                                <svg
                                    viewBox="0 0 40 40"
                                    width="60"
                                    height="60"
                                    className="text-white"
                                    fill="currentColor"
                                >
                                    <path d="M35 5v30H5V5h30m2-2H3v34h34V3z" />
                                    <path d="M10 10h20v2H10zM10 20h20v2H10z" />
                                </svg>
                            </div>

                            {/* Company Info */}
                            <div className="text-center text-sm-start">
                                <h2 className="h4 fw-bold mb-2">LSF Commercial</h2>
                                <p className="text-secondary mb-1">Windows • Doors • Curtain Walling</p>
                                <p className="small text-secondary mb-0">
                                    © {new Date().getFullYear()} London Shopfitters Ltd T/A LSF Commercial.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Right Column - Quick Links */}
                    <Col lg={6}>
                        <div className="d-flex flex-column align-items-center align-items-lg-end">
                            <h3 className="h5 fw-bold mb-3">QUICK LINKS</h3>
                            <ul className="list-unstyled text-center text-lg-end mb-0">
                                {[
                                    { text: 'About Us', href: '/about' },
                                    { text: 'Products', href: '/products' },
                                    { text: 'Sectors', href: '/sectors' },
                                    { text: 'Gallery', href: '/gallery' },
                                    { text: 'Privacy Policy', href: '/privacy' },
                                    { text: 'Skips', href: '/skips' }
                                ].map((link, index) => (
                                    <li key={index} className="mb-2 last:mb-0">
                                        <a
                                            href={link.href}
                                            className="text-white text-decoration-none position-relative"
                                            style={{
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#a0a0a0';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#ffffff';
                                            }}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;