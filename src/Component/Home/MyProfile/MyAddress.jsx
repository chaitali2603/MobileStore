import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyProfile } from './MyProfile'
import { PersonalInformation } from './PersonalInformation'

/**
* @author
* @function MyAddress
**/

export const MyAddress = (props) => {
  return(
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
  </Container>
  </>
   )
  }
