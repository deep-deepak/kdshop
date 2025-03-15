import { useRouter } from 'next/router';
import React from 'react';
import Seo from './Seo';
import PageHeading from './PageHeading';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { formatString } from './formatString';

export default function Service({ data, serviceName }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    // Fallback in case data is not found
    if (!data) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <Seo
                title={data.title}
                description={data.description}
            />
            <PageHeading
                title={data.heroSection.title}
                image={`${data.gallerySection.gallery[1].image}`}
            />
            <Container className="py-5">
                <Row className="align-items-center g-4">
                    <Col lg={6}>
                        <Card className="border-0 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={data.heroSection.image}
                                alt="Office interior with glass partitions"
                                className="img-fluid rounded"
                                style={{ height: "450px", width: "600px" }}
                                data-aos="slide-up"
                            />
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <div className="p-3">
                            <h2 className="mb-4 fw-bold" data-aos="slide-in">
                                {data.heroSection.title}
                            </h2>
                            {data.heroSection.description.map((paragraph, index) => (
                                <p key={index} className="mb-4 text-dark" data-aos="fade-up">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Gallery Section */}
            <Container className="py-5">
                <h2 className="text-center mb-4 text-4xl font-bold text-gray-800" data-aos="fade-right">
                    {data.gallerySection.title}
                </h2>

                {/* Download Links */}
                <Row className="justify-content-center mb-5 gap-4">
                    {data.gallerySection.downloads.map((download) => (
                        <Col key={download.id} md={4} className="text-center">
                            <a
                                href={"#"}
                                className="text-decoration-none text-dark d-flex align-items-center justify-content-center gap-2"
                            >
                                <FaArrowRight size={20} style={{ color: "#16b943" }} />
                                <span>{download.title}</span>
                            </a>
                        </Col>
                    ))}
                </Row>

                {/* Gallery Images */}
                <Row className="g-4 mb-5">
                    {data.gallerySection.gallery.map((item) => (
                        <Col key={item.id} md={4}>
                            <img
                                data-aos="fade-up"
                                style={{ height: "350px", width: "450px" }}
                                src={item.image}
                                alt={item.alt}
                                className="img-fluid rounded shadow-sm w-full object-cover hover:opacity-90 transition-opacity duration-300"
                            />
                        </Col>
                    ))}
                </Row>

                {/* View Gallery Button */}
                <div className="text-center">
                    <Button
                        onClick={() => router.push("/gallery")}
                        variant="outline-danger"
                        className="px-4 py-2 text-uppercase tracking-widest view_gallery"
                    >
                        View Gallery
                    </Button>
                </div>
            </Container>
        </div >
    );
}