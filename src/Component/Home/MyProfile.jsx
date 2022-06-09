import React from "react";
import { Row, Col, Accordion, Container,Form,Button } from "react-bootstrap";
/**
 * @author
 * @function MyProfile
 **/

export const MyProfile = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Col>Hello</Col>{" "}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="style1">
                  my Orders
                </Accordion.Header>
                <Accordion.Body>ACCOUNT SETTINGS</Accordion.Body>
                <Accordion.Body>Profile information</Accordion.Body>
                <Accordion.Body>manage address</Accordion.Body>
              </Accordion.Item>
            </Accordion>{" "}
          </Col>

          <Col sm={10}>
            {" "}
            <Form className="homeclr">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Row>
              

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
            

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
