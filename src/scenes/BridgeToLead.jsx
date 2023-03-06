import LeadForm from "../components/LeadForm.jsx"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "../styles/bridge.css"
import { useState } from "react"

export default function BridgeToLead() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <main className="center-container">
            <div className="center-box">

            <Button variant="primary" onClick={handleShow}>
        Lauch Lead Capture Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Learn to Code en Weeks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LeadForm />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            </div>
        </main>

    )
}