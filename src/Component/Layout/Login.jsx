import { Container, Col, Form, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import { SignUp } from "../Log in/SignUP";
import { Link } from "react-router-dom";


/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  const [LoginForm, setLoginForm] = useState({
    Email: "",
    Password: "",
  });

  const onClickLogin = () => {
    console.log(LoginForm);
  };
  const OnChangeEmail = (e) => {
    setLoginForm({ ...LoginForm, Email: e.target.value });
  };
  const OnChangePassword = (e) => {
    setLoginForm({ ...LoginForm, Password: e.target.value });
  };
  return (
    <>
      <Container>
        <row>
          <Col sm={4}>
            <Form>
              <Row>
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
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      value={LoginForm.Password}
                      onChange={OnChangePassword}
                      placeholder="Password"
                    />
                  </Col>
                </Form.Group>
              </Row>
              <Row>
                <Col>
                <Link className="SignUpBtn" to={"/SignUp"}>
                <Button
                    type="button"
                    onClick={onClickLogin}
                    variant="outline-success">
                      Sign Up
                  </Button>
                  </Link>
                  <Button
                    type="button"
                    onClick={onClickLogin}
                    variant="outline-success">
                    Log In
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
