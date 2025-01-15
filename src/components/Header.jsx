import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const navItems = [
        { id: 'home', label: 'HOME' },
        { id: 'about', label: 'ABOUT' },
        {
            id: 'products',
            label: 'PRODUCTS',
            dropdown: [
                'Windows',
                'Doors',
                'Curtain Walling',
                'Glazing Systems',
                'Architectural Panels'
            ]
        },
        {
            id: 'sectors',
            label: 'SECTORS',
            dropdown: [
                'Commercial',
                'Residential',
                'Education',
                'Healthcare',
                'Industrial'
            ]
        },
        { id: 'partners', label: 'PARTNERS' },
        {
            id: 'gallery',
            label: 'GALLERY',
            dropdown: [
                'Project Portfolio',
                'Case Studies',
                'Installation Photos',
                'Product Showcase'
            ]
        },
        { id: 'contact', label: 'CONTACT' }
    ];

    const handleNavClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <Navbar
            expand="lg"
            variant="dark"
            style={{
                backgroundColor: '#222a2e',
                color: "white",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1030,
                opacity: 0.7
            }}
            className="py-3"
        >
            <Container>
                <Navbar.Brand
                    href="#home"
                    className="d-flex align-items-center"
                    onClick={() => handleNavClick('home')}
                >
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item) => (
                            item.dropdown ? (
                                <NavDropdown
                                    key={item.id}
                                    title={item.label}
                                    id={`nav-dropdown-${item.id}`}
                                    style={{
                                        color: activeLink === item.id ? '#dc3545' : 'white',
                                    }}
                                    className={`nav-dropdown ${activeLink === item.id ? 'active' : ''}`}
                                    onSelect={() => handleNavClick(item.id)}
                                >
                                    {item.dropdown.map((dropItem, index) => (
                                        <NavDropdown.Item
                                            key={index}
                                            href={`#${item.id}-${index}`}
                                            style={{ color: 'white' }}
                                            className="dropdown-item"
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#494f54'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = '#343a40'}
                                        >
                                            {dropItem}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ) : (
                                <Nav.Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={activeLink === item.id ? 'active' : ''}
                                    style={{
                                        color: activeLink === item.id ? '#dc3545' : 'white',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onClick={() => handleNavClick(item.id)}
                                    onMouseEnter={(e) => {
                                        if (activeLink !== item.id) {
                                            e.currentTarget.style.color = '#a0aec0';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeLink !== item.id) {
                                            e.currentTarget.style.color = 'white';
                                        }
                                    }}
                                >
                                    {item.label}
                                </Nav.Link>
                            )
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style>
                {`
                    .nav-dropdown .dropdown-menu {
                        background-color: #343a40;
                        border: 1px solid #494f54;
                        color: white;
                    }
                    
                    .nav-dropdown .dropdown-item {
                        color: white !important;
                    }
                    
                    .nav-dropdown .dropdown-item:hover {
                        background-color: #494f54;
                        color: #dc3545 !important;
                        font-size: 17px;
                    }
                    
                    .nav-dropdown.active .nav-link {
                        color: #dc3545 !important;
                        font-size: 17px;
                    }
                `}
            </style>
        </Navbar>
    );
};

export default Header;