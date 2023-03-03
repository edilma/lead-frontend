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
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("You need to correct the errors")
    }
    else {
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
    
    console.log(data)
    setValidated(true);
  }
  }
  //change the state of the form field 
  //one by one (text fields)
  const setFormField = (event) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value});
  };
  //this takes the info in data.fieldName and 
  // using state put it in formData field for the checkbox 
  const setCheckboxField = (event) => {
    const { name, checked } = event.target;
    setFormData({...formData,[name]: checked});
    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: checked,
    // }));
  };

return (
  <>
    <h2> LEARN CODING IN WEEKS</h2>
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

        
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        name='local'
        type="checkbox" 
        label="Local Leads" 
        checked={formData.local}
        onChange={setFormField}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        name="remote" 
        type="checkbox" 
        label="Remote Leads" 
        checked={formData.remote}
        onChange={setFormField}
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
          onChange={setFormField}
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Please Contact Me</Button>
    </Form>
  </>
);
  }


