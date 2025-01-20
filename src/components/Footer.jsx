import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaSeedling, FaTwitter, FaYoutube } from 'react-icons/fa';

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
                                src="logo.png"
                                alt="Company Logo"
                                style={{
                                    width: "300px",
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
                                <a href="#" className="text-light text-decoration-none hover:text-primary">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover:text-primary">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover:text-primary">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover:text-primary">Contact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none hover:text-primary">Blog</a>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Info */}
                    <Col lg={3} md={6}>
                        <h5 className="mb-4" style={{ color: "#16b943" }}>Contact Info</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <p className="mb-0">77A longbridg</p>
                                <p className="mb-0">barking</p>
                                {/* <p className="mb-0">Postal Code</p> */}
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Phone: +44 7407057984</p>
                            </li>
                            <li className="mb-3">
                                <p className="mb-0">Email: kdshopfrontandshutters@gmail.com</p>
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