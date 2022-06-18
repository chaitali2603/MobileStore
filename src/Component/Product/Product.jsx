import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import noImage from "../../image/noimage.jpg";
/**
 * @author
 * @function Product
 **/

export const Product = (props) => {
  console.log(props);
  return (
    <>
      <Card className="Boxes">
        <Card.Img
          variant="top"
          src={props.product.ImageUrl ? props.product.ImageUrl : noImage}
        />
        <Card.Body className="cardclr">
          <Card.Title>
            <Link to={`/Product/${props.product.Id}`}>
              {props.product.Name}
            </Link>
          </Card.Title>
          <Card.Text>
            <div>RAM - {props.product.RAM}</div>
            <div>{props.product.DisplaySize}</div>
            <div>{props.product.Battery}</div>
            <div>{props.product.Brand}</div>
            <div>{props.product.Price}</div>
          </Card.Text>
          <>
            <div className="btn btn-sm btn-outline-success">
              <Button
                onClick={() => {
                  props.onAddCart(props.product);
                }}
                variant="primary"
                size="md"
                active
              >
                Add to Cart
              </Button>
            </div>
          </>
        </Card.Body>
      </Card>
    </>
  );
};
