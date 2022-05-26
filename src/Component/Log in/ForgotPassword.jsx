import React from "react";
import { SetNewPassword } from "./SetNewPassword";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

/**
* @author
* @function ForgotPassword

**/

export const ForgotPassword = (props) => {
  return (
    <>
      <Col>
        <Container>
          <h1>Forgot Password</h1>
          <p>Enter your email ans we'll send You a link for set password</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label align="left">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
    </>
  );
};
