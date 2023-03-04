import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lead from './Lead.jsx';
import { useEffect, useState } from 'react';

export default function LeadList({type}) {
    const [leads, setLeads] = useState([])
    console.log(type)
    useEffect(() => {
        fetch(`http://127.0.0.1:5002/leads/${type}`)
            .then(res => res.json())
            .then((leads) => {
                console.log(leads)
                setLeads(leads)
            })
            .catch(error => console.error)

    }, [])

    return (
        <Container>
            <h1>Leads Type: {type || "All Leads"}</h1>
            <Row>
                <Col>Full Name</Col>
                <Col>Zip Code</Col>
                <Col>City</Col>
                <Col>Phone Number</Col>
                <Col>Email</Col>
                <Col>State</Col>
                <Col>Learning Type</Col>
                <Col>Agree</Col>
            </Row>
            {!leads
                ? "There are no leads"
                : leads.map((lead) => (
                    <Lead key={lead._id} lead={lead} />
                ))
            }
        </Container>
    )
}