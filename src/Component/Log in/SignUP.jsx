import React from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
/**
 * @author
 * @function SignUp
 **/

export const SignUp = (props) => {
  return (
    <>
    
      <h1>Sign UP</h1>
      <p>Fill in this form to create an account </p>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="Fname" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="Lname" placeholder="Last Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Control placeholder="Password" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control placeholder="Confirm Password" />
            </Form.Group>
          </Row>
          <Form.Check type="checkbox" label=" I accept the Terms of Use & Privacy Policy" />
          <Button align="Left" variant="primary">
            Sign UP
          </Button>
         
          
        </Form>
      </Container>
    </>
  );
};
{
}
