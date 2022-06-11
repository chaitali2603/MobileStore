import React, { useState } from "react";

import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReqSignUP } from "../../Utill/Api";

/**
 * @author
 * @function SignUp
 **/

export const SignUp = (props) => {
  const [SignUpForm, setSignUpForm] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    isChecked: false,
    ConfirmPassword: "",
  });

  const validateSignUpForm = (e) => {
    setShowError(false);
    if (!SignUpForm.FirstName) {
      console.log("Fisrt Name is Blank");
      setErroeMassage("Please enter First name");
      setShowError(true);
      return false;
    }

    if (!SignUpForm.LastName) {
      console.log("Last NAmeis Blank");
      setErroeMassage("Please Enter Last Name");
      setShowError(true);
      return false;
    }
    if (!SignUpForm.Email) {
      console.log("Email is blank");
      setErroeMassage("Please Enter Email");
      setShowError(true);
      return false;
    }
    if (!SignUpForm.Password) {
      console.log("Password is blank");
      setErroeMassage("Please Enter Password");
      setShowError(true);
      return false;
    }
    if (!SignUpForm.ConfirmPassword) {
      console.log("Confrim password is blank");
      setErroeMassage("Please Enter Confrim password");
      setShowError(true);
      return false;
    }
    if (SignUpForm.Password != SignUpForm.ConfirmPassword) {
      setErroeMassage("confrim password is not match to Password ");
      setShowError(true);
      return false;
    }
    if (!SignUpForm.isChecked) {
      console.log("Check Box is not selected");
      setErroeMassage("Please Click on the CheckBox ");
      setShowError(true);
      return false;
    }
    return true;
  };
  const OnSubmitSignUp = (e) => {
    e.preventDefault();
    if (!validateSignUpForm()) {
      return false;
    }

    ReqSignUP(SignUpForm).then(
      (data) => {
        console.log(data);
        window.location.href = "/";
      },
      (error) => {
        setShowError(true);
        setErroeMassage(error.message);
      }
    );
    return false;
    console.log(SignUpForm);
  };
  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  return (
    <>
      <h1>Sign UP</h1>
      <p>Fill in this form to create an account </p>
      <Container>
        <Row>
        <Col></Col>
          <Col>
            {showError ? (
              <Alert variant={"danger"}>{ErroeMassage}</Alert>
            ) : null}
            <Form onSubmit={OnSubmitSignUp}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Control
                      type="Fname"
                      placeholder="First Name"
                      value={setSignUpForm.FirstName}
                      onChange={(e) => {
                        setSignUpForm({
                          ...SignUpForm,
                          FirstName: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Control
                      type="Lname"
                      placeholder="Last Name"
                      value={setSignUpForm.LastName}
                      onChange={(e) => {
                        setSignUpForm({
                          ...SignUpForm,
                          LastName: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control
                      placeholder="Email"
                      value={setSignUpForm.Email}
                      onChange={(e) => {
                        setSignUpForm({
                          ...SignUpForm,
                          Email: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control
                      placeholder="Password"
                      value={setSignUpForm.Password}
                      onChange={(e) => {
                        setSignUpForm({
                          ...SignUpForm,
                          Password: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridCity">
                    <Form.Control
                      placeholder="Confirm Password"
                      value={setSignUpForm.ConfirmPassword}
                      onChange={(e) => {
                        setSignUpForm({
                          ...SignUpForm,
                          ConfirmPassword: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Check
                    type="checkbox"
                    label=" I accept the Terms of Use & Privacy Policy"
                    checked={SignUpForm.isChecked}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      setSignUpForm({
                        ...SignUpForm,
                        isChecked: e.target.checked,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link className="ForgotPassword" to={"/LogIn"}>
                    <span> Back To Log In</span>
                  </Link>
                </Col>
              </Row>
              <Button type="submit" align="Left" variant="primary">
                Sign UP
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
{
}
