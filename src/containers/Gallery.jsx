import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GallerySection() {
    const images = [
        "/images/gallery11.jpg",
        "/images/gallery112.jpg",
        "/images/gallery113.jpg",
        "/images/gallery114.jpg",
        "/images/gallery115.jpg",
        "/images/gallery116.jpg",
        "/images/gallery117.jpg",
    ];

    return (
        <div className="updatedgalley-section">
            <div className="overlay"></div>

            <Container className="updatedgalley">
                <h1 className='updatedgalley_heading' data-aos="fade-in" >Our design</h1>
                <div className="updatedgalley_inner" data-aos="fade-up" >
                    {images.map((src, index) => (
                        <div key={index} className="item">
                            <Image
                                src={src}
                                alt={`updatedgalley image ${index + 1}`}
                                className="updatedgalley-image"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
