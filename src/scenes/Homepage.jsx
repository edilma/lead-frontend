import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import home_lds from '../images/home_lds.png'
import "../styles/bridge.css"

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <>
            <Container className="homepage-container">
                <Row>
                    <Col><img className="homepage-image"  src={home_lds} alt="LDS leads"/></Col>
                    <Col className="buttons-col">
                        <Row>
                            <Button
                                className="login-buyer"
                                size="lg"
                                onClick={() => navigate(`/login`)}
                            >
                                Log in Register Buyer
                            </Button>

                        </Row>
                        <Row>    <Button
                            className="signup-buyer"
                            size="lg"
                            onClick={() => navigate(`/buyer`)}
                        >
                            Sign Up New Buyer
                        </Button> </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}