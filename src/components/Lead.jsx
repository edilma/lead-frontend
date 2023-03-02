import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Lead({lead}) {
    const {first_name, last_name, address, zip, city, 
        email,phone_number,learning_preferred} = lead
    return(
        <Row>
        <Col>{first_name + " " + last_name}</Col>
        <Col>{phone_number}</Col>
        <Col>{zip}</Col>
        <Col>{city}</Col>
        <Col>{email}</Col>
        <Col>{learning_preferred}</Col>
        </Row>
    )
}
   
