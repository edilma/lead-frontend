import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Login from "../components/Login.jsx";
import Header from "../components/Header.jsx";

export default function LandingPage(){
    return(
        <>
        <Header />
        <Row>
            <Col>Image here</Col>
            <Col>
            <Row>buttons here</Row>
            <Row><Login /></Row>
            
            
            </Col>
        </Row>
        </>
    )
}