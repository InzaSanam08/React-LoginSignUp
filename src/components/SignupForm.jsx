import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function SignupForm() {
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    
    // Auto hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <div>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Account created successfully!
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" required />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicTerms">
          <Form.Check 
            type="checkbox" 
            label="I agree to the Terms and Conditions" 
            required 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;