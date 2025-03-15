import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Open modal on every reload
    }, []);

    const handleClose = () => setShow(false);

    const openWhatsApp = () => {
        window.open("https://wa.me/447407057984", "_blank");
        handleClose();
    };

    return (
        <>
            {/* Floating WhatsApp Icon */}
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#25D366",
                    color: "white",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    zIndex: 1000,
                }}
                onClick={() => setShow(true)}
            >
                <FaWhatsapp size={30} />
            </div>

            {/* WhatsApp Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact on WhatsApp</Modal.Title>
                </Modal.Header>
                <Modal.Body>Click the button below to chat on WhatsApp.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={openWhatsApp}>
                        Open WhatsApp
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WhatsAppModal;
