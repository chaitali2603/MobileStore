import {
  Container,
  Col,
  Form,
  Row,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import React, { useState } from "react";
import { SignUp } from "../Log in/SignUP";
import { Link } from "react-router-dom";
import { ReqLogin } from "../../Utill/Api";
import img from "../../image/login1.jpg";
import "./LogIn.css";
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
    setShowError(false);
    console.log(LoginForm);
    ReqLogin(LoginForm).then(
      (data) => {
        console.log(data);
        localStorage.setItem("Token", data.Token);
        window.location.href = "/";
      },
      (error) => {
        setShowError(true);
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
    // url(${Background})
    <div className="loginstyle" style={{ backgroundImage: `url(${img})` }}>
      <div class="bg-overlay doctris-overlay"></div>
      <Container>
        <Row>
          <Col sm={4}>
            <Card className="logincard">
              <h4 style={{ fontWeight: 600 }} class="text-center">
                Provider Login
              </h4>

              {showError ? (
                <Alert variant={"danger"}>Somthing went Wrong</Alert>
              ) : null}

              <Form onSubmit={onSubmitLogin}>
                <Row>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="12">
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
                  <Form.Group
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="6">
                      Password
                    </Form.Label>
                    <Col sm="12">
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
                  <div className="Linkwraper">
                    <Link className="ForgotPassword" to={"/ForgotPassword"}>
                      <span> Forgot Password?</span>
                    </Link>
                  </div>
                </Col>
                <Row>
                  <Col>
                    {/* <Link className="LoginBtn" to={"/SignUp"}>
                      <Button type="button" variant="outline-success">
                        Sign Up
                      </Button>
                    </Link> */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="loginbtn2"
                    >
                      Log In
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="signuptext">
                      <span>Don't have an Account?</span>
                      <Link className="Linkwrapera" to={"/SignUP"}>
                        <span style={{ fontWeight: "600" }}> Sign Up</span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};
