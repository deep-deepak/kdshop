import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaSeedling, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                {/* Main Footer Content */}
                <Row className="gy-4">
                    {/* Logo and Company Info */}
                    <Col lg={3} md={6}>
                        <div className="mb-4">
                            <img
                                src="/logo.png"
                                alt="Company Logo"
                                style={{
                                    width: "250px",
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                            <p className="mb-4" style={{ marginTop: "10px" }}>We are dedicated to providing the best services to our customers with quality and innovation at the forefront of everything we do.</p>
                        </div>
                        <div className="d-flex gap-3 social_icon">
                            <Link href="https://x.com/KDShopfront" target='_blank' className="text-light hover:text-primary transition-colors">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/kdshopfrontshutters/" target='_blank' className="text-light hover:text-primary transition-colors">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCZsZxPrvAhV7TnzNZD601zA" target='_blank' className="text-light hover:text-primary transition-colors">
                                <FaYoutube size={24} />
                            </Link>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: "#16b943" }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="/" className="text-light text-decoration-none hover:text-primary">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/about" className="text-light text-decoration-none hover:text-primary">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/service" className="text-light text-decoration-none hover:text-primary">Services</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact" className="text-light text-decoration-none hover:text-primary">Contact</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/blog" className="text-light text-decoration-none hover:text-primary">Blog</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: "#16b943" }}>Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="mb-0">2D kent pier rd,</p>
                                <p className="mb-0">gravsend da119nb</p>
                                {/* <p className="mb-0">Postal Code</p> */}
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Phone: +44 7407057984</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Email: kdshopfrontandshutters@gmail.com</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Open: 24/7</p>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: "#16b943" }}>Newsletter</h5>
                        <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your email"
                                aria-label="Your email"
                            />
                            <button
                                className="btn btn-primary d-flex align-items-center"
                                type="button"
                                style={{ background: "#16b943", border: "1px solid #16b943" }}
                            >
                                <FaSeedling size={18} />
                            </button>
                        </div>
                    </Col>


                </Row>

                {/* Bottom Footer */}
                <Row className="mt-5">
                    <Col className="text-center">
                        <hr className="my-4" />
                        <p className="mb-0">
                            © {new Date().getFullYear()} k&d shop front. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;