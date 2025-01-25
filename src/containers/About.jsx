import PageHeading from '@/common/PageHeading'
import Seo from '@/common/Seo';
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    const [activeTab, setActiveTab] = useState('mission');
    return (
        <div>
            <Seo title={"About us"} descrption={"About us page"} />
            <PageHeading title={"About us"} image={"/images/gallery1.jpg"} />

            <Container fluid className="py-5">
                <Row className="justify-content-center align-items-center mx-4 mx-md-5 gy-4">
                    <Col lg={6} className="pe-lg-4">
                        <div
                            data-aos="zoom-in"
                            className="position-relative"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                borderRadius: '4px',
                                transform: 'perspective(1000px) rotateY(0deg)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <img
                                src="/images/commerce.avif"
                                alt="Modern Commercial Building"
                                className="img-fluid w-100"
                                style={{
                                    borderRadius: '4px',
                                    display: 'block'
                                }}
                                data-aos="fade-right"
                            />
                        </div>
                    </Col>

                    <Col lg={6} className="ps-lg-4">
                        <div className="content" data-aos="fade-right">
                            <p className="mb-4 fs-5" style={{ lineHeight: '1.8', fontWeight: "bold" }} data-aos="fade-right">
                                At K&D Commercial, we believe in pushing the boundaries of design and engineering. Our innovative solutions are crafted to elevate every project, from the initial concept to the final installation, ensuring superior functionality and exceptional results.
                            </p>

                            <p className="fs-5" style={{ lineHeight: '1.8' }} data-aos="fade-right">
                                With over 10 years of industry experience, we specialize in the design, manufacturing, and installation of advanced architectural aluminium systems. We create high-performance commercial products such as shopfronts, curtain wall facades, windows, and doors that cater to businesses across a wide range of sectors.
                            </p>
                        </div>
                    </Col>
                </Row>

                <style jsx>{`
        .content {
          max-width: 90%;
        }

        @media (max-width: 992px) {
          .content {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .fs-5 {
            font-size: 1rem !important;
          }
        }
    `}</style>
            </Container>

            <Container fluid className="p-0">
                <Row className="mx-0">
                    <Col md={6} className="bg-black text-white p-5">
                        <div className="mb-4" data-aos="fade-right">
                            <small className="text-uppercase" style={{ color: "#16b943" }}>Services</small>
                        </div>

                        <h2 className="text-uppercase mb-5 display-4 fw-bold">Our Philosophy</h2>

                        <div className="mb-4">
                            <div
                                data-aos="fade-in"
                                className={`d-flex align-items-center cursor-pointer mb-3 ${activeTab === 'mission' ? 'text-danger' : ''}`}
                                onClick={() => setActiveTab('mission')}
                            >
                                <div className="me-2" style={{ width: '20px' }}>
                                    {activeTab === 'mission' ? '-' : '+'}
                                </div>
                                <h3 className="text-uppercase m-0" style={{ color: "#16b943" }}>Our Mission</h3>
                            </div>

                            {activeTab === 'mission' && (
                                <p className="ms-4" data-aos="slide-up">
                                    Our mission at K&D Commercial is to provide exceptional architectural aluminium systems that meet the highest standards of quality, performance, and design. We strive to deliver tailored solutions with a focus on innovation, customer satisfaction, and industry-leading craftsmanship.
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <div
                                className={`d-flex align-items-center cursor-pointer mb-3 ${activeTab === 'vision' ? 'text-danger' : ''}`}
                                onClick={() => setActiveTab('vision')}
                            >
                                <div className="me-2" style={{ width: '20px' }} data-aos="slide-in">
                                    {activeTab === 'vision' ? '-' : '+'}
                                </div>
                                <h3 className="text-uppercase m-0" style={{ color: "#16b943" }}>Our Vision</h3>
                            </div>

                            {activeTab === 'vision' && (
                                <p className="ms-4" data-aos="slide-up">
                                    Our vision is to be the leading provider of cutting-edge, sustainable aluminium solutions for the commercial sector. We aim to set new standards in architectural design, contributing to building spaces that inspire and perform at the highest level.
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <div
                                className={`d-flex align-items-center cursor-pointer mb-3 ${activeTab === 'values' ? 'text-danger' : ''}`}
                                onClick={() => setActiveTab('values')}
                            >
                                <div className="me-2" style={{ width: '20px' }}>
                                    {activeTab === 'values' ? '-' : '+'}
                                </div>
                                <h3 className="text-uppercase m-0" style={{ color: "#16b943" }}>Our Values</h3>
                            </div>

                            {activeTab === 'values' && (
                                <p className="ms-4" data-aos="slide-up">
                                    At K&D Commercial, we value innovation, integrity, and collaboration. We are committed to providing bespoke solutions that reflect the unique needs of our clients while maintaining a focus on sustainability and high-quality craftsmanship.
                                </p>
                            )}
                        </div>
                    </Col>

                    <Col md={6} className="text-white p-5 d-flex align-items-center about_background" style={{ background: "#16b943" }}>
                        <div>
                            <h2 className="text-uppercase mb-4">Who We Are</h2>
                            <p className="mb-0" style={{ fontSize: "20px" }} data-aos="slide-up">
                                From our manufacturing facility in Rainham, Essex, K&D Commercial’s highly-skilled engineers utilize cutting-edge technology and machinery to design and produce high-performance aluminium building solutions. We are dedicated to meeting the needs of businesses, creating functional, aesthetically pleasing spaces.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
