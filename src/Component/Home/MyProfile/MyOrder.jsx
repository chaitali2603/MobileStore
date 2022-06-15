import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, ListGroup, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetOrderByUserId1 } from "../../../Utill/Api";
/**
 * @author
 * @function MyOrder
 **/

export const MyOrder = (props) => {
  const [myOrder, setmyOrder] = useState([]);
  const convertDate = (e) => {
    const d = new Date(e);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
      .map((n) => (n < 10 ? `0${n}` : `${n}`))
      .join("/");
  };

  const getAllOrders = () => {
    const Token = localStorage.getItem("Token");
    GetOrderByUserId1(Token).then((data) => {
      console.log(data);
      setmyOrder(data);
    });
  };
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <Container>
        <br></br>
        <h1>My Order</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            <Col className="fw-bold"> {props.user ? `Hello ${props.user.FirstName}` : <></>}</Col>
            <br></br>
            <ListGroup as="ul">
              <ListGroup.Item
                className="fw-bold"
                as="li"
                active
              ></ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyOrder"}> My Order</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/PersonalInformation"}>Personal Informaation</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyAddress"}> My Address</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Order Id</td>
                  <td>Order Date</td>
                  <td> View Details</td>
                </tr>
              </thead>
              <tbody>
                {myOrder.map((x, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{x.Id}</td>
                      <td>{convertDate(x.CreatedDate)}</td>
                      <td>
                        <Link to={`/Order/${x.Id}`}>
                          {" "}
                          <Button variant="secondary" size="sm">
                            View Details
                          </Button>{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
