import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState } from "react"
import LeadForm from "../components/LeadForm.jsx"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import "../styles/demo.css"


export default function DemoPage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [background,setBackground] = useState("demo")

    return (
        <main className={`${background}`}>

<h1 className="login-title">BUYER LOGIN </h1>
<Container className="loginBox">


    <Row>
        <Col> 
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

        </Col>



        <Col>
            <Row>hello </Row>
        </Col>
    </Row>
</Container>












        </main>

    )
}