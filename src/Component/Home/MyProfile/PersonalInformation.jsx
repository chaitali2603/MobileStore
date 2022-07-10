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
import { ReqPersonalInformation } from "../../../Utill/Api";
import { GetAppUserById } from "../../../Utill/Api";
import { SideBar } from "../../Layout/SideBar";

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
    if (!PersonalInformationForm.FirstName) {
      console.log("First Name is Blank");
      setErroeMassage("Please Enter First Name");
      setShowError(true);
      return false;
    }
    if (!PersonalInformationForm.LasttName) {
      console.log("Last Name is blank");
      setErroeMassage("Please Enter Last Name ");
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
        <h1 className="SuccessMargin">Personal Information</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>

        <Row>
          <Col sm={2}>
            {/* <Col className="fw-bold">
              {" "}
              {props.user ? `Welcom ${props.user.FirstName}` : <></>};
            </Col> */}
            <br></br>

            {/* <SideBar user={props.user}></SideBar> */}
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
                          ...PersonalInformationForm,
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
                          ...PersonalInformationForm,
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
                          ...PersonalInformationForm,
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
