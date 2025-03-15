import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCards = () => {
    // Service data including titles and descriptions
    const services = [
        {
            id: 1,
            title: 'Roller Shutter Repair',
            description: 'From broken springs to broken motors we offer all type of roller shutter repair solutions. You can ensure your roller shutters are secure, operational, and efficient throughout your organization or residence.'
        },
        {
            id: 2,
            title: 'Window Installation Service',
            description: 'Expert window installation that improves comfort, appearance, and energy efficiency. For a long-lasting, fashionable, and secure finish for your house or place of business, we guarantee accurate fitting and premium materials.'
        },
        {
            id: 3,
            title: 'Emergency Shutter Repair',
            description: 'Get dependable, quick emergency shutter repairs to protect your home right now. We respond swiftly to urgent shutter issues and are available around-the-clock, restoring functioning and safety when you need it most.'
        },
        {
            id: 4,
            title: 'Aluminum Door Supplier',
            description: 'We provide high-quality aluminum doors, ensuring durability, security, and modern aesthetics for commercial and residential properties.'
        },
        {
            id: 5,
            title: 'Business Building',
            description: 'Partners with business buildings to offer top-quality glass doors, shutters, and security systems to improve both function and appearance.'
        },
        {
            id: 6,
            title: 'Automatic Door Installation',
            description: 'Expert in automatic door installation, updating the appearance of your company entrance and offering convenience and contemporary technology.'
        },
        {
            id: 7,
            title: 'Automatic Doors',
            description: 'Specializes in installing automatic doors to make your business entrance modern, secure, and efficient.'
        },
        {
            id: 8,
            title: 'Commercial Properties',
            description: 'Provides tailored solutions for commercial properties, including shopfront installations, security systems, and routine maintenance services.'
        },
        {
            id: 9,
            title: 'Complete Repair',
            description: 'For all your glass and window needs, provides complete repair solutions, addressing every detail with accuracy to restore your property to its best condition.'
        },
        {
            id: 10,
            title: 'Curtain Walling',
            description: 'Installs curtain walling systems, giving business buildings a stylish, long-lasting, and weatherproof glass facade.'
        },
        {
            id: 11,
            title: 'Customer Support',
            description: 'Known for great customer service, ensuring all your shopfront and repair needs are taken care of quickly and professionally.'
        },
        {
            id: 12,
            title: 'Damaged Glass',
            description: 'Trust for efficient and reliable damaged glass repair. We handle all types of glass damage, making sure your property remains safe and visually appealing.'
        },
        {
            id: 13,
            title: 'Damaged Window',
            description: 'Specializes in repairing damaged windows. We provide fast, reliable service to restore your window’s functionality and looks, keeping your space secure.'
        },
        {
            id: 14,
            title: 'Repair Roller Shutters',
            description: "Specializes in repairing roller shutters, guaranteeing that your company's shutter systems are secure and operational."
        },
        {
            id: 15,
            title: 'Security Shutters',
            description: "We provide top-quality security shutters for your property, offering reliable protection and peace of mind with durable, expertly installed shutters."
        },
        {
            id: 16,
            title: 'Shopfronts',
            description: "Specializes in stylish, functional shopfront installations and repairs. We provide customized solutions to improve your store’s appearance and security."
        },
        {
            id: 17,
            title: 'Sliding Doors',
            description: "For contemporary commercial spaces aiming to optimize entrance efficiency, we provide stylish and practical sliding door installations."
        }
    ];


    return (
        <Container className="py-5 bg-light" style={{ marginTop: "80px" }}>
            <Row className="mb-4">
                <Col className="text-center">
                    <h2 className="fw-bold">Our Services</h2>
                    <p className="lead">Explore our range of professional installation services</p>
                </Col>
            </Row>

            <Row>
                {services.map((service) => (
                    <Col key={service.id} xs={12} md={4} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Card.Title className="fs-4 mb-0 fw-bold">{service.title}</Card.Title>
                                    <div className="bg-light rounded-circle p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" />
                                        </svg>
                                    </div>
                                </div>
                                <Card.Text className="text-muted">{service.description}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServiceCards;