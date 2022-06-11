import React from "react";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyProfile } from "./MyProfile";


/**
 * @author
 * @function MyAddress
 **/

export const MyAddress = (props) => {
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
        </Col>
      </Container>
    </>
  );
};
