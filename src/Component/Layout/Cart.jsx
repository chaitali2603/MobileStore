import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  const{
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
  }=useCart();

  if(isEmpty) return <h5 className="text-center py-5"> Cart is Empty </h5>
  return (
    <>        
        <div className="container-fluid py-5">       
          <div className="row">
            <h4 className="text-center">My Cart</h4>
            <div className="col-12">
              <p className="position-relative fw-bolder text-title fs-5">Cart <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-2">{totalUniqueItems}</span></p>
              <p>Total Items ({totalItems}) </p>
            </div>
          </div>
        </div>
        
        <Row>
          <Col sm={8}>
            My Cart
            <Row>
              <Col sm={2}> Image
              </Col>
              <Col sm={6}> Middle</Col>
              <Col sm={4}>Last
               </Col>
            </Row>
          </Col>
          <Col sm={4}>
            Price Details
            <Row>
              <Col sm={9}> A</Col>
              <Col sm={3}> B</Col>
            </Row>
          </Col>
        </Row>
    </>
  );
};
