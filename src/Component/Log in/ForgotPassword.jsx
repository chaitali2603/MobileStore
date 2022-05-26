import React, {useState} from "react";
import { SetNewPassword } from "./SetNewPassword";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

/**
* @author
* @function ForgotPassword

**/

export const ForgotPassword = (props) => {
  
  const [LoginForm, setLoginForm] = useState({
    Email: "",
  });

  const onClickLogin = () => {
    console.log(LoginForm);
  };
  const OnChangeEmail = (e) => {
    setLoginForm({ ...LoginForm, Email: e.target.value });
  };

  return (
    <>
        <Container>
        
          <row>
            <Col sm={4}>
              <Form>
                <Row>
                <Form.Text>
                Enter your email and we'll send You a link for reset password
                </Form.Text>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="Text"
                        value={LoginForm.Email}
                        onChange={OnChangeEmail}
                        placeholder="abcd@gamil.com"
                      />
                      <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                    </Col>
                  </Form.Group>
                </Row>
                <Row>
                <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </Col>
              </Row>
              </Form>
            </Col>
            <Col sm={8}></Col>
          </row>
        </Container>
    </>
  );
};