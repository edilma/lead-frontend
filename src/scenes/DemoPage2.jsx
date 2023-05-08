import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState } from "react"
import LeadForm from "../components/LeadForm.jsx"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalForm from "../components/ModalForm.jsx";
import Header from "../components/Header.jsx";
import demo_sites from "../images/demo_sites.png"
import SelectLeadButton from "../components/SelectLeadButton.jsx";
import LeadList from "../components/LeadList.jsx";
import "../styles/demo.css"


export default function DemoPage2() {
    const [background,setBackground] = useState("demo")
 

    return (
        <>
        <Row>
        <Header/>
        </Row>
        <Row>
            <Col >
                <Row>
                PUT YOUR LEAD CAPTURE FORM HERE
                </Row>
                <Row>
                    Your Lead Capture Anywhere
                </Row>
                <Row>
                
                <ModalForm />
                </Row>
        
            </Col>


            <Col>
            <Row> GO TO SEE THE DEMO </Row>
            <Row>  

GO TO SEE THE LEADS
  </Row>
            <Row>
            
        put the button to redirect the users

                   </Row>
           
            </Col>
        </Row>
        <Row>
        <Header/>
        </Row>
        
        </>



    )
}