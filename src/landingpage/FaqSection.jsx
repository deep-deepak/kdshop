import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { homeFaqs } from '@/data/homeFaqs';

const FaqSection = () => {
    return (
        <Container className="py-5">
            <div className="mb-4" data-aos="fade-up">
                <h6 className="text-uppercase mb-3" style={{ color: "#16b943" }}>FAQ</h6>
                <h2 className="about_heading">Frequently Asked Questions About Shopfront Shutters UK</h2>
                <div
                    className="mt-3"
                    style={{
                        width: '50px',
                        height: '3px',
                        backgroundColor: '#16b943',
                    }}
                ></div>
            </div>
            <Accordion defaultActiveKey="0" data-aos="fade-up">
                {homeFaqs.map((faq, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                        <Accordion.Header as="h3">{index + 1}. {faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
};

export default FaqSection;
