import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'
import LeadForm from "./LeadForm.jsx"
import { useState } from "react"


export default function ModalForm(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [background,setBackground] = useState("demo")

    return(
        <div className="center-box">

<Button  onClick={handleShow}>
Launch Lead Capture Form
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Body>
<h3 className="modal-title text-center" > Yes, in only weeks, you will ...</h3>
<LeadForm />
</Modal.Body>
</Modal>

</div>


    )
}



