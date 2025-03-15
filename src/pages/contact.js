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
                                2D kent pier rd,<br />
                                gravsend da119nb
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
            <Row>
                <Col md={12} style={{ borderTop: "5px solid #16b943" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9947.143964532357!2d0.3372023612334156!3d51.44372402595956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b613ac89dd8f%3A0x33eab612ee28b828!2s2D%20Kent%20Pier%20Rd%2C%20Northfleet%2C%20Gravesend%20DA11%209NB%2C%20UK!5e0!3m2!1sen!2sin!4v1742056929398!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Layout>
    );
};

export default ContactForm;