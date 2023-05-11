import ModalForm from "../components/ModalForm.jsx";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/demo.css"
import { useState } from "react";



export default function DemoPage(){
    const [background, useBackground] = useState()

    return(
        <>
        <Container fluid className="main-container">
            <Row>
                

            <Col xs={6}>
            <h1>LDS</h1>
            <h2>Lead Delivery System</h2>
            <h3>The complete solucion to get and deliver your leads</h3>
            </Col>
            <Col>
                <Row>   
                    <Col><ModalForm /></Col>
                    <Col>Lead Capture Forms</Col>
                </Row>
                <Row>
                <Col><Button>Click Here</Button></Col>
                    <Col>Lead Capture Forms</Col>
                </Row>
                <Row>
                <Col><Button>Click Here</Button></Col>
                    <Col>Lead Capture Forms</Col>
                </Row>

            </Col>
            </Row>
        </Container>
        </>
    )

}
