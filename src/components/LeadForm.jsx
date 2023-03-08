import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { uri } from '../config.js';
import "../styles/water.css"


export default function LeadForm() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    city: '',
    state: '',
    zip: '',
    learning_option: '',
    //local: false,
    //remote: false,
    agree: false,
  })
  //change the state of the form field 
  //one by one (text fields)
  const setFormField = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  //same for radio fields
  const handleRadioChange = (event) => {
    setFormField(event);
  };

  // same but for checkbox 
  const setCheckboxField = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };
  //now  handle submit.  
  //First check validation and then fetch
  // in fetch redirect to the thank you page
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("You need to correct the errors")
    }
    else {
      setValidated(true);
      const data = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone_number: formData.phone_number,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        learning_option: formData.learning_option,
        agree: formData.agree
      };
      fetch(`${uri}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => {
          navigate('/thanks')
        })
        .catch(console.error)
    }
  }

  return (
    <>
      <h4> GET HIRED AS A SOFTWARE ENGINEER!</h4>
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
            <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
          </Form.Group>

        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={setFormField}
              placeholder="Enter email"
              value={formData.email}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              name="phone_number"
              onChange={setFormField}
              type="text"
              placeholder="Phone Number"
              value={formData.phone_number}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              onChange={setFormField}
              type="text"
              placeholder="City"
              value={formData.city}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              name="state"
              onChange={setFormField}
              type="text"
              placeholder="State"
              value={formData.state}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>

          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              name="zip"
              onChange={setFormField}
              type="text"
              placeholder="Zip Code"
              value={formData.zip}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>

        </Row>
        <Row>
          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>How you prefer to learn</Form.Label>
            <Form.Check
              inline
              label="Remote"
              type="radio"
              name="learning_option"
              value="remote"
              checked={formData.learning_option === "remote"}
              onChange={handleRadioChange}
            />
            <Form.Check
              inline
              label="Local"
              type="radio"
              name="learning_option"
              value="local"
              checked={formData.learning_option === "local"}
              onChange={handleRadioChange}
            />
          </Form.Group>

        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            name='agree'
            type='checkbox'
            label="You will be contacted with information about Bootcamps."
            checked={formData.agree}
            onChange={setCheckboxField}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className='submit-button' type="submit">Please Contact Me</Button>
      </Form>
    </>
  );
}


