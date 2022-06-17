import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Table, Row, Col, ListGroup, Container } from "react-bootstrap";
import { GetProductByOrderId } from "../../../Utill/Api";
import { SideBar } from "../../Layout/SideBar";
/**
 * @author
 * @function OrderDetails
 **/

export const OrderDetails = (props) => {
  let { OrderId } = useParams();

  const [OrderDetails, setOrderDetails] = useState(null);
  console.log(OrderId);

  const [AllOrderDetails, setAllOrderDetails] = useState([]);

  const GetAllOrderDetails = () => {
    const Token = localStorage.getItem("Token");
    GetProductByOrderId(OrderId).then((data) => {
      console.log(data);
      setAllOrderDetails(data);
    });
  };

  useEffect(() => {
    GetAllOrderDetails();
  }, []);

  if (!AllOrderDetails) {
    return;
  }
  const convertDate = (e) => {
    const d = new Date(e);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
      .map((n) => (n < 10 ? `0${n}` : `${n}`))
      .join("/");
  };

  return (
    <>
    <Container>
    
        <h1 className="SuccessMargin">Order Details</h1>
        <p>
          __________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
      <Row>
        <Col sm={2}>
          {" "}
          <Col className="fw-bold"> {props.user ? `Welcom ${props.user.FirstName}` : <></>};</Col>
          <br></br>
          <SideBar user={props.user}></SideBar>
        </Col>
        <Col sm={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>#</td>
                <td>Product Id</td>
                <td>Price</td>
                <td>Order Id</td>
                <td>Order date</td>
                <td>Address</td>
              </tr>
            </thead>

            <tbody>
              {AllOrderDetails.map((x, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{x.ProductName}</td>
                    <td>{x.Price}</td>
                    <td>{x.OrderId}</td>
                    <td>{convertDate(x.CreatedDate)}</td>
                    <td>{x.Address}</td>
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
