import React from "react";
import { Container, Row, Col, ListGroup, Form, Button,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyProfile } from "./MyProfile";
import { useState, useEffect } from "react";
import { GetAddressByUserId } from "../../../Utill/Api";
import { ReqMyAddress } from "../../../Utill/Api";

/**
 * @author
 * @function MyAddress
 **/

export const MyAddress = (props) => {
  const [MyAddressForm, setMyAddressForm] = useState({
    Address: "",
    Address2: "",
    City: "",
    Choose: "",
    Zip: "",
  });
  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  const validateMyAddress = (e) => {
    setShowError(false);

  if (!MyAddressForm.Address) {
    console.log("Address  is Blank");
    setErroeMassage("Please enter Address");
    setShowError(true);
    return false;
  }
  if (!MyAddressForm.Address2) {
    console.log("Address 2  is Blank");
    setErroeMassage("Please enter Address 2");
    setShowError(true);
    return false;
  }
};

  const OnSubmitMyAddress = (e) => {
    e.preventDefault();
    if (!validateMyAddress()) {
      return false;
    }
    ReqMyAddress(MyAddressForm).then(
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
    console.log(MyAddress);
  };

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    GetAddressByUserId(Token).then((data) => {
      console.log(data);
      setMyAddressForm(data);
    });
  }, []);

  return (
    <>
      <Container>
        <br></br>
        <h1>My Address</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Col sm={2}>
          {" "}
          <Col className="fw-bold"> Hello Chaitali Trivedi</Col>
          <br></br>
          <ListGroup as="ul">
            <ListGroup.Item className="MyProfileCss" as="li" active>
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
          {showError ? <Alert variant={"danger"}>{ErroeMassage}</Alert> : null}
          <Form onSubmit={OnSubmitMyAddress}>
            <Row className="mb-3">
              <Col></Col>
              <Col>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={MyAddressForm.City}
                    onChange={(e) => {
                      setMyAddressForm({
                        ...setMyAddressForm,
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
                    value={MyAddressForm.State}
                    onChange={(e) => {
                      setMyAddressForm({
                        ...setMyAddressForm,
                        State: e.target.value,
                      });
                    }}
                  >
                    <option>Gujarat</option>
                    <option>Maharastra</option>
                    <option>Rajasthan</option>
                    <option> Kashmir</option>
                    <option>Dilhi</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    value={MyAddressForm.Zip}
                    onChange={(e) => {
                      setMyAddressForm({
                        ...setMyAddressForm,
                        zip: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>

              <Col></Col>
            </Row>
          </Form>
        </Col>
      </Container>
    </>
  );
};
