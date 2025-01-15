import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
    const services = [
        "Design • Fabrication • Installation",
        "Windows • Doors • Curtain Walling",
        "Commercial • Residential • Industrial",
        "Planning • Building • Delivering",
        "Quality • Innovation • Excellence"
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) =>
                    prevIndex === services.length - 1 ? 0 : prevIndex + 1
                );
                setFadeIn(true);
            }, 500); // Wait for fade out before changing text
        }, 2000); // Change every 2 seconds

        return () => clearInterval(textInterval);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                backgroundImage: 'url("https://londonshopfitters.co.uk/wp-content/uploads/2022/03/pexels-olga-lioncat-7245368-scaled.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginTop: '0',  // Remove margin as header is fixed
                paddingTop: '76px' // Add padding to account for fixed header
            }}
        >
            {/* Dark overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
            />

            {/* Content */}
            <Container
                className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
            >
                <h1
                    className="display-1 fw-bold mb-4"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        letterSpacing: '2px'
                    }}
                >
                    LSF COMMERCIAL
                </h1>
                <div
                    className="fs-4 position-relative"
                    style={{
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                        letterSpacing: '1px',
                        opacity: fadeIn ? 1 : 0,
                        transform: `translateY(${fadeIn ? 0 : '10px'})`,
                        transition: 'all 0.5s ease-in-out',
                        height: '2em', // Fixed height to prevent layout shift
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {services[currentTextIndex]}
                </div>
            </Container>

            {/* Optional: Skip forward/backward buttons */}
            <div
                className="position-absolute bottom-0 mb-4 w-100 d-flex justify-content-center gap-2"
                style={{ zIndex: 2 }}
            >
                {services.map((_, index) => (
                    <button
                        key={index}
                        className="btn p-0"
                        onClick={() => {
                            setFadeIn(false);
                            setTimeout(() => {
                                setCurrentTextIndex(index);
                                setFadeIn(true);
                            }, 500);
                        }}

                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;