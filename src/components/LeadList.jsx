import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lead from './Lead.jsx';
import { useEffect, useState } from 'react';

const fakeleads = [{
    id: 1,
    first_name: "Peter",
    last_name: "Smith",
    phone_number: "9544564567",
    address: "24 Main St",
    email: "patricm@gmail.com",
    zip: "33311",
    city: "Ft Lauderdale",
    learning_preferred: "Local",
    agreed_to_contact: true,
    ip_address: "104.84.136.14",
    site_collected: "yahoo.com"
},
{
    id: 2,
    first_name: "Marcus",
    last_name: "Patel",
    phone_number: "9543454567",
    address: "25 Main Ave",
    email: "marie@mail.com",
    zip: "33486",
    city: "Boca Raton",
    learning_preferred: "Remote",
    agreed_to_contact: true,
    ip_address: "104.56.136.14",
    site_collected: "findit.com"
}]

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
                <Col>Phone</Col>
                <Col>Zip Code</Col>
                <Col>City</Col>
                <Col>Email</Col>
                <Col>Type</Col>
            </Row>
            {!leads
                ? "There are no leads"
                : leads.map((lead) => (
                    <Lead key={lead.id} lead={lead} />
                ))
            }
        </Container>
    )
}