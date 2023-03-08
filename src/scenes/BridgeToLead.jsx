import { useState } from "react"
import LeadForm from "../components/LeadForm.jsx"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "../styles/bridge.css"


export default function BridgeToLead() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [background,setBackground] = useState("buyer")

    return (

        <main className={`${background}`}>
          <div className="center-container">
            <div className="center-box">

            <Button onClick={handleShow}>
        Lauch Lead Capture Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3 className="modal-title text-center" > Yes, in only weeks, you will ...</h3>
          <LeadForm />
        </Modal.Body>
      </Modal>

            </div>
          </div>
        </main>

    )
}