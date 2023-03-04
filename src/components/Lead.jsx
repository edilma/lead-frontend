import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Lead({lead}) {
    const {first_name, last_name, zip, city, state,
        email,phone_number,learning_option, agree} = lead
    return(
        <Row>
        <Col>{first_name + " " + last_name}</Col>
        <Col>{zip}</Col>
        <Col>{city}</Col>
        <Col>{phone_number}</Col>
        <Col>{email}</Col>       
        <Col>{state}</Col>
        <Col>{learning_option}</Col>
        <Col>{agree}</Col>
        </Row>
    )
}

   
