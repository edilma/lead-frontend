import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Login from "../components/Login.jsx";
import Header from "../components/Header.jsx";
import LDS_Header from "../images/LDS_Header.png"
import "../styles/buyer.css"


export default function LandingPage() {
    return (
        <>

            <h1 className="login-title">BUYER LOGIN </h1>
            <Container className="loginBox">
                <Row>
                    <Col> <img className="hero-image" src={LDS_Header} alt="LDS Logo" />e</Col>
                    <Col>

                        <Row><Login /></Row>


                    </Col>
                </Row>
            </Container>
        </>
    )
}