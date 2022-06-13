import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
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

    if (!MyAddressForm.City) {
      console.log("City  is Blank");
      setErroeMassage("Please enter City name");
      setShowError(true);
      return false;
    }
    if (!MyAddressForm.State) {
      console.log("State  is Blank");
      setErroeMassage("Please enter State name");
      setShowError(true);
      return false;
    }
    if (!MyAddressForm.Zip) {
      console.log("Zip code  is Blank");
      setErroeMassage("Please enter Zip code");
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
      <br></br>
      <h1> Address</h1>
      <p>
        _____________________________________________________________________________________________________________________________________________________________________________________________
      </p>
      <Container>
        <Row>
          <Col sm={2}>
            <Col className="fw-bold">
              {props.user ? `Welcom ${props.user.FirstName}` : <></>};
            </Col>
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
            {showError ? (
              <Alert variant={"danger"}>{ErroeMassage}</Alert>
            ) : null}
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
                          ...MyAddressForm,
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
                          ...MyAddressForm,
                          State: e.target.value,
                        });
                      }}
                    >
                      <option></option>
                      <option>maharastra</option>
                      <option>Gujarat</option>
                      <option> kashmir</option>
                      <option>delhi</option>
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
                          ...MyAddressForm,
                          Zip: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Row className="mb-3">
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
