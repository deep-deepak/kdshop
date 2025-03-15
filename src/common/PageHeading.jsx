import React from 'react';
import { Container } from 'react-bootstrap';

const PageHeading = ({ title, image }) => {
    return (
        <div
            className="position-relative w-100 vh-70 d-flex align-items-center"
            style={{
                height: '70vh',
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Light overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(to bottom, rgba(86, 84, 84, 0.1) 0%, rgba(40, 39, 39, 0.3) 100%)',
                    zIndex: 1
                }}
            />

            {/* Content container */}
            <Container className="position-relative" style={{ zIndex: 2 }}>
                <h1
                    className="text-center text-white m-0"
                    style={{
                        fontFamily: '"Oswald", Sans-serif',
                        fontSize: 'clamp(2.5rem, 7vw, 4.375rem)', // 40px to 70px
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: 1.3,
                        letterSpacing: '4px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Added for better text visibility
                    }}
                >
                    {title}
                </h1>
            </Container>

            <style>
                {`
                    @media (max-width: 768px) {
                        .vh-70 {
                            height: 50vh !important;
                        }
                    }

                    @media (max-width: 576px) {
                        .vh-70 {
                            height: 40vh !important;
                        }
                        h1 {
                            letter-spacing: 2px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default PageHeading;