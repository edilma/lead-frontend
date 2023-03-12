import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { uri } from '../config.js';


export default function Login() {
  const navigate = useNavigate()
  const [messageNoMatch, setMessageNoMatch] = useState('')
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const setFormField = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("You need to correct the errors")
    }
    else {
      setValidated(true);
      const data = {
        email: formData.email,
        password: formData.password
      }
      console.log(data)

      fetch(`${uri}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then((data) =>{
          if(data.message ){
            console.log(data.message)
            setMessageNoMatch("Sorry the system is down")
          }
          else{
            if(!data.buyer){
              setMessageNoMatch("Please check your username or password")
            }
            else{
              const typeLead = data.buyer.leads_required;
              navigate(`/leads/${typeLead}`)

            }
          }
        })
        .catch(console.error)

    }
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={setFormField}
            value={formData.email}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
            onChange={setFormField}
            value={formData.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <h2 > {messageNoMatch} </h2>
    </>

  );
}
