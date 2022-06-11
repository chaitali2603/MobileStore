import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
/**
 * @author
 * @function ProductDetail
 **/

export const ProductDetail = (props) => {
  let { productId } = useParams();

  const [productDetail, setProductDetail] = useState(null);
  console.log(productId);

  //steps
  //1 - API.js function 1 api/product/GetProductById?ProductId=productId
  //response setProductDetail

  if (!productDetail) {
     return // <div>Loading</div>;
  }

  return (
    <div>
      <Row>
        <Col>
          <Image src={productDetail?.ImageSrc}></Image>
        </Col>
        <Col>Product name {productDetail.Price}</Col>
      </Row>
    </div>
  );
};
