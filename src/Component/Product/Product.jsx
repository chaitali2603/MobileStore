import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

/**
 * @author
 * @function Product
 **/

export const Product = (props) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://picsum.photos/200/300?grayscale"
        height={200}
      />
      <Card.Body>
        <Card.Title>{props.product.ProductName}</Card.Title>
        <Card.Text>
          <div>
            {props.product.RAM}
          </div>
          <div>
            {props.product.DisplaySize}
          </div>
          <div>
            {props.product.Battery}
          </div>
          <div>
            {props.product.OperatingSystem}
          </div>
          <div>
            {props.product.Price}
          </div>         
        </Card.Text>
        <>
  <Button variant="primary" size="lg" active>
    Add to Cart
  </Button>{' '}
  <Button variant="secondary" size="lg" active>
    Buy
  </Button>
</>
      </Card.Body>
    </Card>
  );
};
