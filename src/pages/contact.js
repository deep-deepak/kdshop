import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import Layout from '@/layout/Layout';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const ContactForm = () => {
    return (
        <Layout>
            <Seo title={"Contact us"} descrption={"contact us"} />
            <PageHeading title={"Contact us"} image={"https://londonshopfitters.co.uk/wp-content/uploads/2022/03/pexels-olga-lioncat-7245368-scaled.jpg"} />

            <Container className="py-5">
                <Row className="justify-content-between">
                    <Col lg={5}>

                        <div>
                            <h5>Name:</h5>
                            <p className="mb-0 " style={{ color: "#16b943" }}>K&D Shop front and shutters</p>
                        </div>
                        <br />
                        <div className="mb-4">
                            <h5>Phone:</h5>
                            <p className=" mb-0" style={{ color: "#16b943" }}>+44 7407057984</p>
                        </div>
                        <div className="mb-4">
                            <h5>E-mail:</h5>
                            <a href="mailto:sales@londonshopfitters.co.uk"
                                className=" text-decoration-none" style={{ color: "#16b943" }}>
                                kdshopfrontandshutters@gmail.com
                            </a>
                        </div>
                        <div className="mb-4">
                            <h5>Address:</h5>
                            <p className=" mb-0" style={{ color: "#16b943" }}>
                                77A longbridg road,<br />
                                barking
                            </p>
                        </div>

                    </Col>

                    <Col lg={6}>
                        <Form className="bg-white p-4 shadow-sm rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter your phone number"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                    required
                                />
                            </Form.Group>



                            <Button
                                variant="primary"
                                type="submit"
                                className="px-4 submit_btn"
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default ContactForm;