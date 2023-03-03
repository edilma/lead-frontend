import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Greeting({buyer}){
    const {name, leadType} = buyer
    return(
        <Container>
        <h1>WELCOME {name} TO LDS LEADS</h1>
        <h2>Leads You Can Depend On!</h2>
        <Row>
            <Col> Bootcamp Leads </Col>
            <Col>Type of Leads: {leadType}</Col>
        </Row>
        </Container>
    )
    
}