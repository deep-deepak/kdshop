import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: 'SmarterBlood',
        description: 'Email your results to mail@smarterblood.org now for your free analysis',
        buttonText: 'Get Started',
        buttonLink: '/login',
        image: '/images/herobanner.png',
        overlayColor: 'rgba(168, 50, 45, 0.85)',
    },
    {
        id: 2,
        title: 'SmarterBlood',
        description: 'Email your results to mail@smarterblood.org now for your free analysis',
        buttonText: 'Get Started',
        buttonLink: '/login',
        image: '/images/herobanner.png',
        overlayColor: 'rgba(168, 50, 45, 0.85)',
    },
    {
        id: 3,
        title: 'SmarterBlood',
        description: 'Email your results to mail@smarterblood.org now for your free analysis',
        buttonText: 'Get Started',
        buttonLink: '/login',
        image: '/images/herobanner.png',
        overlayColor: 'rgba(168, 50, 45, 0.85)',
    },
    {
        id: 4,
        title: 'SmarterBlood',
        description: 'Email your results to mail@smarterblood.org now for your free analysis',
        buttonText: 'Get Started',
        buttonLink: '/login',
        image: '/images/herobanner.png',
        overlayColor: 'rgba(168, 50, 45, 0.85)',
    },
    {
        id: 5,
        title: 'SmarterBlood',
        description: 'Email your results to mail@smarterblood.org now for your free analysis',
        buttonText: 'Get Started',
        buttonLink: '/get-started',
        image: '/images/herobanner.png',
        overlayColor: 'rgba(168, 50, 45, 0.85)',
    }
];

const NewHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStart === null) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        setTouchStart(null);
    };

    return (
        <>
            <div className='hero_section_top'></div>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    overflow: 'hidden'
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                            zIndex: 1,
                        }}
                    >
                        <Image
                            src={slide.image}
                            alt="SmarterBlood Analysis"
                            layout="fill"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                            priority={index === 0}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '50%',
                                height: '100%',
                                background: `linear-gradient(to right, ${slide.overlayColor} 70%, transparent 20%)`,
                                zIndex: 2,
                            }}
                        />
                    </div>
                ))}

                <Container style={{ height: '100%', position: 'relative', zIndex: 3 }}>
                    <Row style={{ height: '100%' }}>
                        <Col
                            xs={12}
                            md={6}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                color: 'white',
                                opacity: isTransitioning ? 0 : 1,
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        >
                            <h1 style={{ fontSize: '3.5rem', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>
                                {slides[currentSlide].title}
                            </h1>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                                {slides[currentSlide].description}
                            </p>
                            <Button
                                href={slides[currentSlide].buttonLink}
                                style={{
                                    backgroundColor: '#1a237e',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    fontSize: '1rem',
                                    borderRadius: '4px',
                                    border: 'none',
                                }}
                            >
                                {slides[currentSlide].buttonText}
                            </Button>
                        </Col>
                    </Row>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '10px',
                        }}
                    >
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => goToSlide(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NewHeroSection;
