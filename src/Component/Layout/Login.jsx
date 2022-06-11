import { Container, Col, Form, Row, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { SignUp } from "../Log in/SignUP";
import { Link } from "react-router-dom";
import { ReqLogin } from "../../Utill/Api";

/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  const [LoginForm, setLoginForm] = useState({
    Email: "",
    Password: "",
  });
  const [showError, setShowError] = useState(false);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    setShowError(false)
    console.log(LoginForm);
    ReqLogin(LoginForm).then(
      (data) => {
        console.log(data);
        localStorage.setItem('Token',data.Token)
        window.location.href = "/";
      },
      (error) => {
        setShowError(true)
      }
    );
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
            {showError?<Alert variant={"danger"}>Somthing went Wrong</Alert>:null}
            
            <Form onSubmit={onSubmitLogin}>
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
              <Col>
                <Link className="ForgotPassword" to={"/ForgotPassword"}>
                  <span> Forgot Password</span>
                </Link>
              </Col>
              <Row>
                <Col>
                  <Link className="LoginBtn" to={"/SignUp"}>
                    <Button type="button" variant="outline-success">
                      Sign Up
                    </Button>
                  </Link>
                  <Button type="submit" variant="outline-success">
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
