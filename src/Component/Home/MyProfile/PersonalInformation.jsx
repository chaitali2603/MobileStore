import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReqPersonalInformation } from "../../../Utill/Api";
import { GetAppUserById } from "../../../Utill/Api";

/**
 * @author
 * @function PersonalInformation
 **/

export const PersonalInformation = (props) => {
  const [PersonalInformationForm, setPersonalInformationForm] = useState({
    Email: "",
    Password: "",
    Address: "",
    Address2: "",
    City: "",
    Choose: "",
    Zip: "",
  });
  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  const validatePersonalInformation = (e) => {
    setShowError(false);

    if (!PersonalInformationForm.Email) {
      console.log("Email is Blank");
      setErroeMassage("Please enter Email Address");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.Password) {
      console.log("Password is Blank");
      setErroeMassage("Please Enter password");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.Address) {
      console.log("Address is blank");
      setErroeMassage("Please Enter Address");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.Address2) {
      console.log("Address 2 is blank");
      setErroeMassage("Please Enter Address 2");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.City) {
      console.log("City  is blank");
      setErroeMassage("Please Enter City");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.State) {
      console.log("State  is blank");
      setErroeMassage("Please Enter State");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.Zip) {
      console.log("Zip  is blank");
      setErroeMassage("Please Enter Zip Code");
      setShowError(true);
      return false;
    }
  };

  const OnSubmitPersonalInformation = (e) => {
    e.preventDefault();
    if (!validatePersonalInformation()) {
      return false;
    }
    ReqPersonalInformation(PersonalInformationForm).then(
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
    console.log(PersonalInformation);
  };

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    GetAppUserById(Token).then((data) => {
      console.log(data);
      setPersonalInformationForm(data);
    });
  }, []);

  return (
    <>
      <Container>
        <br></br>
        <h1>Personal Information</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>

        <Row>
          <Col sm={2}>
            <Col className="fw-bold"> Hello Chaitali Trivedi</Col>
            <br></br>

            <ListGroup as="ul">
              <ListGroup.Item className="fw-bold" as="li" active>
                <Link to={"/MyAccount"}> My account</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyOrder"}> My Order</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/PersonalInformation"}> Personal Information</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyAddress"}> My Address</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col sm={10}>
            {showError ? (
              <Alert variant={"danger"}>{ErroeMassage}</Alert>
            ) : null}
            <Form onSubmit={OnSubmitPersonalInformation}>
              <Row className="mb-3">
                <Col></Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={PersonalInformationForm.Email}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          Email: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      value={PersonalInformationForm.FirstName}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          FirstName: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {" "}
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label className="fw-bold"> Last Name</Form.Label>
                    <Form.Control
                      placeholder="Apartment, studio, or floor"
                      value={PersonalInformationForm.LasttName}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          LasttName: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <Row className="mb-3">
                <Col></Col>

                <Col></Col>
              </Row>

              {/* <Row className="mb-3">
                <Col></Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      value={PersonalInformationForm.City}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          City: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={PersonalInformationForm.State}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          State: e.target.value,
                        });
                      }}
                    >
                      <option>gujrat</option>
                      <option>maharastra</option>
                      <option>gujrat</option>
                      <option> kashmir</option>
                      <option>dilhi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      value={PersonalInformationForm.Zip}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          zip: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row> */}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
