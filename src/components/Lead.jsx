import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Lead({lead}) {
    const {first_name, last_name, address, zip, city, state,
        email,phone_number,local, remote, agree} = lead
    return(
        <Row>
        <Col>{first_name + " " + last_name}</Col>
        <Col>{email}</Col>
        <Col>{address}</Col>
        <Col>{phone_number}</Col>
        <Col>{zip}</Col>
        <Col>{city}</Col>
        <Col>{state}</Col>
        <Col>{local}</Col>
        <Col>{remote}</Col>
        <Col>{agree}</Col>
        </Row>
    )
}

   
