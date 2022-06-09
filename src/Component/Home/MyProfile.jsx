import React from "react";
import { Row, Col, Accordion, Container, ListGroup } from "react-bootstrap";

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
            <Row>Hello</Row>{" "}
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>my Orders</Accordion.Header>
                <Accordion.Body>ACCOUNT SETTINGS</Accordion.Body>
                <Accordion.Body>Profile information</Accordion.Body>
                <Accordion.Body>manage address</Accordion.Body>
              </Accordion.Item>
            </Accordion>{" "}
          </Col>

          <Col sm={10}></Col>
        </Row>
      </Container>
    </>
  );
};
