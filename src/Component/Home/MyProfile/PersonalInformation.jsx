import React, { useState } from "react";
import { Container, Row, ListGroup, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReqPersonalInformation } from "../../../Utill/Api";

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
    if (!PersonalInformation.Email) {
      console.log("Email is Blank");
      setErroeMassage("Please enter Email Address");
      setShowError(true);
      return false;
    }
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
                    <Link to={"/PersonalInformation"}>
                      {" "}
                      Personal Information
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    {" "}
                    <Link to={"/MyAddress"}> My Address</Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col sm={10}>
                {" "}
                <Form onSubmit={OnSubmitPersonalInformation}>
                  <Row className="mb-3">
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={setPersonalInformationForm.Email}
                        onChange={(e) => {
                          setPersonalInformationForm({
                            ...setPersonalInformationForm,
                            Email: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={setPersonalInformationForm.Password}
                        onChange={(e) => {
                          setPersonalInformationForm({
                            ...setPersonalInformationForm,
                            Password: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Col></Col>
                  </Row>

                  <Col></Col>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      value={setPersonalInformationForm.Address}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          Address: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Col></Col>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                      placeholder="Apartment, studio, or floor"
                      value={setPersonalInformationForm.Address2}
                      onChange={(e) => {
                        setPersonalInformationForm({
                          ...setPersonalInformationForm,
                          Address2: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Col></Col>

                  <Row className="mb-3">
                    <Col></Col>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={setPersonalInformationForm.City}
                        onChange={(e) => {
                          setPersonalInformationForm({
                            ...setPersonalInformationForm,
                            City: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        value={setPersonalInformationForm.State}
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

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        value={setPersonalInformationForm.Zip}
                        onChange={(e) => {
                          setPersonalInformationForm({
                            ...setPersonalInformationForm,
                            zip: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Col></Col>
                  </Row>

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
  };

