import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import { uri } from '../config.js';


export default function BuyerForm() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [buyerFormData, setBuyerFormData] = useState({
    companyName: '',
    contactName: '',
    password:'',
    email: '',
    phone_number: '',
    city: '',
    zip: '',
    leads_required: 'local'
  });


  const setFormField = (event) => {
    const { name, value } = event.target;
    setBuyerFormData({ ...buyerFormData, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      alert("You need to correct some errors")
    }
    else {
      setValidated(true);
      const buyerData = {
        companyName: buyerFormData.companyName,
        contactName: buyerFormData.contactName,
        password: buyerFormData.password,
        email: buyerFormData.email,
        phone_number: buyerFormData.phone_number,
        city: buyerFormData.city,
        state: buyerFormData.state,
        zip: buyerFormData.zip,
        leads_required: buyerFormData.leads_required
      };
      fetch(`${uri}/buyers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buyerData)
      })
        .then(res => res.json())
        .then(() => {
          navigate(`/leads/${buyerData.leads_required}`)
        })
        .catch(console.error)
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            required
            name="companyName"
            onChange={setFormField}
            type="text"
            placeholder="Company Name"
            value={buyerFormData.companyName}
          />
          <Form.Control.Feedback type="invalid">Please enter your company name</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control
            required
            name="contactName"
            onChange={setFormField}
            type="text"
            placeholder="Contact Name"
            value={buyerFormData.contactName}
          />
          <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            onChange={setFormField}
            type="password"
            placeholder="Password"
            value={buyerFormData.password}
          />
          <Form.Control.Feedback type="invalid">Please enter your password</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            onChange={setFormField}
            placeholder="Enter email"
            value={buyerFormData.email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name="phone_number"
            onChange={setFormField}
            type="text"
            placeholder="Phone Number"
            value={buyerFormData.phone_number}
          />
          <Form.Control.Feedback>Please enter a valid phone number</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            name="city"
            onChange={setFormField}
            type="text"
            placeholder="City"
            value={buyerFormData.city}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            required
            name="zip"
            onChange={setFormField}
            type="text"
            placeholder="Zip Code"
            value={buyerFormData.zip}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} controlId="validationCustom07">
          <Form.Label>Leads Required</Form.Label>
          <Form.Select
            name='leads_required'
            value={buyerFormData.leads_required}
            onChange={setFormField}>
            <option value='local'>Local </option>
            <option value='remote'>Remote </option>
            <option value=''>Local and Remote </option>
          </Form.Select>
        </Form.Group>

      </Row>
      <Button variant="primary" type="submit">
        Show me my leads
      </Button>
    </Form>
  );
}
