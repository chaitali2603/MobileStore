import React from "react";
import { useEffect, useState } from "react";
import { Table, Card, Row, Col, Form } from "react-bootstrap";
import { GetAddressByUserId } from "../../Utill/Api";

/**
 * @author
 * @function ConfrimOrder
 **/

export const ConfrimOrder = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const carts = localStorage.getItem("CartProduct");
    if (carts) setCartProducts(JSON.parse(carts));
  }, []);
  const [allAddress, setAllAddress] = useState([]);

  const getAllAddress = () => {
    const Token = localStorage.getItem("Token");
    GetAddressByUserId(Token).then((data) => {
      console.log(data);
      setAllAddress(data);
    });
  };
  useEffect(() => {
    getAllAddress();
  }, []);

  return (
    <>
      <div>
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {cartProducts.map((item, index) => {
              return (
                <tr key={index} className="align-middle">
                  <td>
                    <img
                      src={item.ImageUrl}
                      className="img-cart"
                      alt={item.Name}
                    />
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td>Quantity: {item.Qty} </td>
                  <td>{item.Qty * item.Price} </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {allAddress.map((address, index) => {
          return (
            <Row>
              <Col></Col>
              <Col>
                <Form.Check type="radio" aria-label="radio 1" {...address.address1}/>
                

                {/* <Card style={{ width: "20rem", height: "4rem" }}>
                  <Card.Body>
                    <Card.Title> {address.City}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {address.state}
                    </Card.Subtitle>
                    <Card.Text>{address.address1}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                {/* </Card.Body>
                </Card> */}
              </Col>
              <Col></Col>
            </Row>
          );
        })}
        <Table>
          <thead>
            <tr>
              <td>#</td>
              <td>City Name</td>
              <td>State</td>
              <td>Zip</td>
            </tr>
          </thead>
          <tbody>
            {allAddress.map((address, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{address.City}</td>
                  <td>{address.State}</td>
                  <td>{address.Pincode}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
