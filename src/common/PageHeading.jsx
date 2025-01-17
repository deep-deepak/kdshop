import React from 'react';
import { Container } from 'react-bootstrap';

const PageHeading = ({ title }) => {
    return (
        <div className="position-relative w-full">
            {/* Hero container with background image */}
            <div
                className="w-full min-h-screen relative"
                style={{
                    backgroundImage: `url('https://londonshopfitters.co.uk/wp-content/uploads/2022/03/pexels-olga-lioncat-7245368-scaled.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "70vh",

                }}
            >
                {/* Dark overlay with gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%)'
                    }}
                />

                {/* Centered text content */}
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{
                        top: '40%',
                        position: "relative"
                    }}
                >
                    <h1
                        className="text-white text-center m-0 page_heading_title"
                    >
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;