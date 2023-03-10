import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lead from './Lead.jsx';
import { useEffect, useState } from 'react';
import { uri } from '../config.js';
import '../../src/styles/leadList.css'

export default function LeadList1({type}) {
    //const [bgType, setbgType] = useState("all")
    const [leads, setLeads] = useState([])
    console.log(type)
    useEffect(() => {
        fetch(`${uri}/leads/${type}`)
            .then(res => res.json())
            .then((leads) => {
                console.log(leads)
                setLeads(leads)
            })
            .catch(error => console.error)

    }, [])

    return (
        <Container >
            <h1>Leads Type: {type || "All Leads"}</h1>
            <Row >
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
                    <Lead type={type} key={lead._id} lead={lead} />
                ))
            }
        </Container>
    )
}