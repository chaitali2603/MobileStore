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

  const GetdiscountedPrice = () => {
    if (!props.product || !props.product.Disscount) {
      return props.product.Price;
    }

    return (
      props.product.Price - (props.product.Price * props.product.Disscount) / 100
    );
  };
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
              {props.product.ModelName}
            </Link>
          </Card.Title>
          <Card.Text>
            <b><div>RAM - {props.product.RAM}</div>
            <div>{props.product.DisplaySize}</div>
            <div>{props.product.Battery}</div>
            <div>{props.product.Brand}</div>
            <div>
              {props.product.Disscount>0?<span style={{textDecoration:'line-through'}} className="OrignalPrice"> <div>{props.product.Price}</div></span>:null}
              {GetdiscountedPrice()}
            </div></b>
          </Card.Text>
          <>
            <Button
              onClick={() => {
                props.onAddCart(props.product);
              }}
              variant="outline-primary"
              size="md"
            >
              Add to Cart
            </Button>
          </>
        </Card.Body>
      </Card>
    </>
  );
};
