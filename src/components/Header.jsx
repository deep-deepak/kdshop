import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();

    const navItems = [
        { id: 'home', label: 'HOME', path: '/' },
        { id: 'about', label: 'ABOUT', path: '/about' },
        { id: 'category', label: 'CATEGORY', path: '/category' },
        { id: 'blog', label: 'BLOG', path: '/blog' },
        {
            id: 'services',
            label: 'SERVICES',
            path: '/services',
            dropdown: [
                {
                    category: 'Shop Fronts',
                    items: [
                        { label: 'ALUMINIUM SHOP FRONTS', path: '/shop-fronts-aluminium' },
                        { label: 'GLASS SHOP FRONTS', path: '/shop-fronts-glass' },
                        { label: 'TIMBER SHOP FRONTS', path: '/shop-fronts-timber' },
                        { label: 'AUTOMATIC DOORS', path: '/shop-fronts-automatic-doors' },
                    ]
                },
                {
                    category: 'Shutters',
                    items: [
                        { label: 'PERFORATED ROLLER SHUTTERS', path: '/shutters-perforated' },
                        { label: 'PUNCHED ROLLER SHUTTERS', path: '/shutters-punched' },
                        { label: 'GRILLE ROLLER SHUTTERS', path: '/shutters-grille' },
                    ]
                },
                {
                    category: 'Other Services',
                    items: [
                        { label: 'CURTAIN WALL SYSTEM', path: '/curtain-wall' },
                        { label: 'WINDOWS & DOORS', path: '/windows-doors' },
                        { label: 'PROTECTION SCREEN', path: '/protection-screen' },
                    ]
                }
            ]
        },
        { id: 'contact', label: 'CONTACT', path: '/contact' }
    ];

    // Check if current path is in a dropdown
    const isPathInDropdown = (path) => {
        for (const item of navItems) {
            if (item.dropdown) {
                for (const category of item.dropdown) {
                    for (const dropItem of category.items) {
                        if (dropItem.path === path) {
                            return item.id;
                        }
                    }
                }
            }
        }
        return null;
    };

    // Check if the path is active
    const isActive = (path) => {
        if (path === '/') {
            return router.pathname === '/';
        }
        return router.pathname === path || router.pathname.startsWith(path + '/');
    };

    const handleNavClick = () => {
        setIsExpanded(false);
    };

    return (
        <Navbar
            expand="lg"
            variant="dark"
            expanded={isExpanded}
            onToggle={(expanded) => setIsExpanded(expanded)}
            className="py-2 py-lg-3 navbar-custom"
        >
            <Container>
                <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand
                        className="d-flex align-items-center"
                        onClick={() => handleNavClick()}
                    >
                        <Image
                            src="/logo.png"
                            width={180}
                            height={58}
                            alt="Logo"
                            priority
                        />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item) => (
                            item.dropdown ? (
                                <NavDropdown
                                    key={item.id}
                                    title={item.label}
                                    id={`nav-dropdown-${item.id}`}
                                    className={`nav-dropdown ${isPathInDropdown(router.pathname) === item.id || isActive(item.path) ? 'active' : ''}`}
                                >
                                    {item.dropdown.map((category, idx) => (
                                        <div key={idx} className="dropdown-category">
                                            <div className="dropdown-category-title">{category.category}</div>
                                            {category.items.map((dropItem, index) => (
                                                <Link
                                                    key={index}
                                                    href={dropItem.path}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <NavDropdown.Item
                                                        onClick={() => handleNavClick()}
                                                        className={`dropdown-item-custom ${isActive(dropItem.path) ? 'active' : ''}`}
                                                    >
                                                        {dropItem.label}
                                                    </NavDropdown.Item>
                                                </Link>
                                            ))}
                                            {idx < item.dropdown.length - 1 && <NavDropdown.Divider />}
                                        </div>
                                    ))}
                                </NavDropdown>
                            ) : (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    passHref
                                    legacyBehavior
                                >
                                    <Nav.Link
                                        className={`nav-link-custom ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => handleNavClick()}
                                    >
                                        {item.label}
                                    </Nav.Link>
                                </Link>
                            )
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style jsx global>{`
                .navbar-custom {
                    background-color: #222a2e;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1030;
                    opacity: 0.95;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }

                .nav-link-custom {
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1rem;
                    font-size: 15px;
                    margin: 0 0.2rem;
                    position: relative;
                }

                .nav-link-custom:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #16b943;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }

                .nav-link-custom:hover:after,
                .nav-link-custom.active:after {
                    width: 70%;
                }

                .nav-link-custom:hover,
                .nav-link-custom.active {
                    color: #16b943 !important;
                }

                .nav-dropdown .dropdown-toggle {
                    position: relative;
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1rem;
                    font-size: 15px;
                    margin: 0 0.2rem;
                }

                .nav-dropdown.active .dropdown-toggle {
                    color: #16b943 !important;
                }

                .nav-dropdown .dropdown-toggle:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #16b943;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }

                .nav-dropdown:hover .dropdown-toggle:after,
                .nav-dropdown.active .dropdown-toggle:after {
                    width: 70%;
                }

                .nav-dropdown .dropdown-menu {
                    background-color: #2c3539;
                    border: 1px solid #3a4145;
                    border-radius: 4px;
                    padding: 0.25rem 0;
                    margin-top: 0.5rem;
                    min-width: 280px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .dropdown-category {
                    padding: 0.25rem 0;
                }

                .dropdown-category-title {
                    color: #16b943;
                    padding: 0.5rem 1.5rem;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                }

                .dropdown-item-custom {
                    color: #e0e0e0 !important;
                    padding: 0.5rem 1.5rem 0.5rem 2rem;
                    transition: all 0.3s ease;
                    background-color: transparent;
                    font-size: 14px;
                }

                .dropdown-item-custom:hover,
                .dropdown-item-custom.active {
                    background-color: #3a4145 !important;
                    color: #16b943 !important;
                    border-left: 3px solid #16b943;
                    padding-left: calc(2rem - 3px);
                }

                .dropdown-divider {
                    border-top: 1px solid #3a4145;
                    margin: 0.5rem 1rem;
                    opacity: 0.5;
                }

                .navbar-toggler {
                    border-color: rgba(255,255,255,0.3);
                    padding: 0.375rem 0.5rem;
                }

                .navbar-toggler:focus {
                    box-shadow: 0 0 0 3px rgba(22, 185, 67, 0.25);
                    outline: none;
                }

                @media (max-width: 991px) {
                    .navbar-custom {
                        padding: 0.5rem 0;
                    }
                    
                    .navbar-collapse {
                        background-color: #222a2e;
                        padding: 1rem;
                        margin: 0 -1rem;
                        max-height: calc(100vh - 70px);
                        overflow-y: auto;
                        border-top: 1px solid #3a4145;
                    }

                    .nav-link-custom {
                        padding: 0.75rem 1rem;
                        margin: 0.25rem 0;
                        border-radius: 4px;
                    }

                    .nav-link-custom:after {
                        display: none;
                    }

                    .nav-link-custom:hover,
                    .nav-link-custom.active {
                        background-color: #2c3539;
                        padding-left: 1.5rem;
                        border-left: 3px solid #16b943;
                    }

                    .nav-dropdown .dropdown-toggle {
                        padding: 0.75rem 1rem;
                        margin: 0.25rem 0;
                        border-radius: 4px;
                    }

                    .nav-dropdown .dropdown-toggle:after {
                        display: none;
                    }

                    .nav-dropdown.active .dropdown-toggle {
                        background-color: #2c3539;
                        padding-left: 1.5rem;
                        border-left: 3px solid #16b943;
                    }

                    .nav-dropdown .dropdown-menu {
                        background-color: transparent !important;
                        border: none !important;
                        box-shadow: none;
                        padding: 0 !important;
                        margin: 0 0 0.5rem 1.5rem !important;
                        animation: none;
                    }

                    .dropdown-category {
                        background-color: #2c3539;
                        margin: 0.5rem 0;
                        border-radius: 4px;
                        padding: 0.5rem 0;
                    }

                    .dropdown-item-custom {
                        padding: 0.5rem 1rem 0.5rem 1.5rem;
                    }

                    .dropdown-item-custom:hover,
                    .dropdown-item-custom.active {
                        background-color: #3a4145 !important;
                        border-left: 2px solid #16b943;
                        padding-left: calc(1.5rem - 2px);
                    }

                    .dropdown-category-title {
                        padding: 0.5rem 1rem;
                        font-size: 13px;
                    }
                }
            `}</style>
        </Navbar>
    );
};

export default Header;