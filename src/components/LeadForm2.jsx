import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function LeadForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    city: '',
    state: '',
    zip: '',
    local: false,
    remote: false,
    agree: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert('You need to correct the errors');
    } else {
      // create an object with form data
      const data = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        local: formData.local,
        remote: formData.remote,
      };
      // make the API call with the form data object
      console.log(data);
      setValidated(true);
    }
  };

  const setFormField = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setCheckboxField = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <>
      <h2>LEARN CODING IN WEEKS</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name="first_name"
              onChange={setFormField}
              type="text"
              placeholder="First name"
              value={formData.first_name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name="last_name"
              onChange={setFormField}
              type="text"
              placeholder="Last name"
              value={formData.last_name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={setFormField}
              placeholder="Enter email"
              value={formData.email}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
