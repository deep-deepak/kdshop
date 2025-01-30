import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import useRouter hook

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter(); // Get router object
    const [activeLink, setActiveLink] = useState("")

    const navItems = [
        { id: 'home', label: 'HOME', path: '/' },
        { id: 'about', label: 'ABOUT', path: '/about' },
        {
            id: 'services',
            label: 'SERVICES',
            dropdown: [
                {
                    category: 'Shop Fronts',
                    items: [
                        { label: 'ALUMINIUM SHOP FRONTS', path: '/shopfrontsaluminium' },
                        { label: 'GLASS SHOP FRONTS', path: '/shopfrontsglass' },
                        { label: 'TIMBER SHOP FRONTS', path: '/shopfrontstimber' },
                        { label: 'AUTOMATIC DOORS', path: '/shopfrontsautomaticdoors' },
                    ]
                },
                {
                    category: 'Shutters',
                    items: [
                        { label: 'PERFORATED ROLLER SHUTTERS', path: '/shuttersperforated' },
                        { label: 'PUNCHED ROLLER SHUTTERS', path: '/shutterspunched' },
                        { label: 'GRILLE ROLLER SHUTTERS', path: '/shuttersgrille' },
                    ]
                },
                {
                    category: 'Other Services',
                    items: [
                        { label: 'CURTAIN WALL SYSTEM', path: '/curtainwall' },
                        { label: 'WINDOWS & DOORS', path: '/windowsdoors' },
                        { label: 'PROTECTION SCREEN', path: '/protectionscreen' },
                    ]
                }
            ]
        },
        { id: 'contact', label: 'CONTACT', path: '/contact' }
    ];

    useEffect(() => {
        // Dynamically set the active link based on the current URL
        const currentPath = router.pathname;
        const activeNavItem = navItems.find(item => {
            // Check if the path of the nav item matches the current route
            return item.path === currentPath || (item.dropdown && item.dropdown.some(category => category.items.some(dropItem => dropItem.path === currentPath)));
        });
        if (activeNavItem) {
            setActiveLink(activeNavItem.id);
        }
    }, [router.pathname]); // Re-run the effect when the route changes

    const handleNavClick = (linkId) => {
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
                        onClick={() => handleNavClick('home')}
                    >
                        <Image
                            src="/logo.png"
                            width={220}
                            height={70}
                            alt="Logo"
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
                                    className={`nav-dropdown ${router.pathname.startsWith(item.path) ? 'active' : ''}`}
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
                                                        onClick={() => handleNavClick(item.id)}
                                                        className={`dropdown-item-custom ${router.pathname === dropItem.path ? 'active' : ''}`}
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
                                        className={`nav-link-custom ${router.pathname === item.path ? 'active' : ''}`}
                                        onClick={() => handleNavClick(item.id)}
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
                    opacity: 0.9;
                    box-shadow: 0 4px 6px rgba(176, 174, 174, 0.5);
                }

                .nav-link-custom {
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 0.5rem 1rem;
                    font-size: 15px;
                }

                .nav-link-custom:hover,
                .nav-link-custom.active {
                    color: #16b943 !important;
                    font-size: 16px;
                }

                .nav-dropdown .dropdown-menu {
                    background-color: #343a40;
                    border: 1px solid #494f54;
                    padding: 0.5rem 0;
                    margin-top: 0;
                    min-width: 280px;
                }

                .dropdown-category {
                    padding: 0.25rem 0;
                }

                .dropdown-category-title {
                    color: #16b943;
                    padding: 0.5rem 1.5rem;
                    font-weight: 600;
                    font-size: 14px;
                }

                .dropdown-item-custom {
                    color: white !important;
                    padding: 0.5rem 1.5rem 0.5rem 2rem;
                    transition: all 0.3s ease;
                    background-color: transparent;
                    font-size: 14px;
                }

                .dropdown-item-custom:hover,
                .dropdown-item-custom.active {
                    background-color: #494f54 !important;
                    color: #16b943 !important;
                    font-size: 15px;
                }

                .dropdown-divider {
                    border-top: 1px solid #494f54;
                    margin: 0.5rem 0;
                }

                .navbar-toggler {
                    border-color: rgba(255,255,255,0.5);
                }

                .navbar-toggler:focus {
                    box-shadow: none;
                }

                @media (max-width: 991px) {
                    .navbar-collapse {
                        background-color: #222a2e;
                        padding: 1rem;
                        margin: 0 -1rem;
                    }

                    .nav-link-custom {
                        padding: 0.75rem 0;
                    }

                    .dropdown-menu {
                        background-color: transparent !important;
                        border: none !important;
                        padding-left: 1rem !important;
                    }

                    .dropdown-item-custom {
                        padding: 0.5rem 1rem;
                    }

                    .dropdown-category-title {
                        padding: 0.5rem 1rem;
                        margin-top: 0.5rem;
                    }
                }
            `}</style>
        </Navbar>
    );
};

export default Header;
