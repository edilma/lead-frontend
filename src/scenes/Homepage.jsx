import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../styles/bridge.css"

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <Container className="homepage-container ">
                
                <Row>

                    <Col className="buttons-col">
                        <Row>
                            <Button
                                className="login-buyer"
                                size="lg"
                                onClick={() => navigate(`/login`)}
                            >
                                Buyer Log in
                            </Button>
                          

                        </Row>
                        <Row>    <Button
                            className="signup-buyer"
                            size="lg"
                            onClick={() => navigate(`/buyer`)}
                        >
                            Buyer Sign Up
                        </Button> </Row>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}