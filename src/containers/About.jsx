import PageHeading from '@/common/PageHeading'
import Seo from '@/common/Seo';
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    const [activeTab, setActiveTab] = useState('mission');
    return (
        <div>
            <Seo title={"About us"} descrption={"About us page"} />
            <PageHeading title={"About us"} image={"https://londonshopfitters.co.uk/wp-content/uploads/2022/03/pexels-olga-lioncat-7245368-scaled.jpg"} />

            <Container fluid className="py-5">
                <Row className="justify-content-center align-items-center mx-4 mx-md-5 gy-4">
                    <Col lg={6} className="pe-lg-4">
                        <div
                            className="position-relative"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                borderRadius: '4px',
                                transform: 'perspective(1000px) rotateY(0deg)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <img
                                src="/images/aboutsec.jpg"
                                alt="Modern Commercial Building"
                                className="img-fluid w-100"
                                style={{
                                    borderRadius: '4px',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </Col>

                    <Col lg={6} className="ps-lg-4">
                        <div className="content">
                            <p className="mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                                We apply innovative design solutions to enhance our products and to exceed client expectations. Our team collaborates closely with our clients to deliver the best possible results.
                            </p>

                            <p className="fs-5" style={{ lineHeight: '1.8' }}>
                                With over 40 years' industry experience, LSF Commercial specialise in the design, manufacturing and installation of architectural aluminium systems: creating attractive high-performance shopfronts, curtain wall facades, windows and doors for commercial clients across every sector.
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
                        <div className="mb-4">
                            <small className="text-uppercase">Services</small>
                        </div>

                        <h2 className="text-uppercase mb-5 display-4 fw-bold">Our Philosophy</h2>

                        <div className="mb-4">
                            <div
                                className={`d-flex align-items-center cursor-pointer mb-3 ${activeTab === 'mission' ? 'text-danger' : ''}`}
                                onClick={() => setActiveTab('mission')}
                            >
                                <div className="me-2" style={{ width: '20px' }}>
                                    {activeTab === 'mission' ? '-' : '+'}
                                </div>
                                <h3 className="text-uppercase m-0">Our Mission</h3>
                            </div>

                            {activeTab === 'mission' && (
                                <p className="ms-4">
                                    With more than 40 years experience in manufacturing aluminium systems,
                                    our mission at LSF Commercial is to provide our customers with a bespoke,
                                    flexible and competitive service that is second to none.
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <div
                                className={`d-flex align-items-center cursor-pointer mb-3 ${activeTab === 'vision' ? 'text-danger' : ''}`}
                                onClick={() => setActiveTab('vision')}
                            >
                                <div className="me-2" style={{ width: '20px' }}>
                                    {activeTab === 'vision' ? '-' : '+'}
                                </div>
                                <h3 className="text-uppercase m-0">Our Vision</h3>
                            </div>

                            {activeTab === 'vision' && (
                                <p className="ms-4">
                                    With more than 40 years experience in manufacturing aluminium systems,
                                    our mission at LSF Commercial is to provide our customers with a bespoke,
                                    flexible and competitive service that is second to none.
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
                                <h3 className="text-uppercase m-0">Our Values</h3>
                            </div>

                            {activeTab === 'values' && (
                                <p className="ms-4">
                                    With more than 40 years experience in manufacturing aluminium systems,
                                    our mission at LSF Commercial is to provide our customers with a bespoke,
                                    flexible and competitive service that is second to none.
                                </p>
                            )}
                        </div>
                    </Col>

                    <Col md={6} className="bg-danger text-white p-5 d-flex align-items-center about_background">
                        <div>
                            <h2 className="text-uppercase mb-4">Who We Are</h2>
                            <p className="mb-0">
                                From our manufacturing facility in Rainham Essex, our highly-skilled
                                engineers use state of the art technology and machinery to design and
                                manufacture commercial aluminium building solutions to suit the needs
                                of your business, staff and premises.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
