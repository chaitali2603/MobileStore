import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { GetProductById } from "../../Utill/Api";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
/**
 * @author
 * @function ProductDetail
 **/

export const ProductDetail = (props) => {
  let { productId } = useParams();

  const [productDetail, setProductDetail] = useState({});
  console.log(productId);

  //steps
  //1 - API.js function 1 api/product/GetProductById?ProductId=productId
  //response setProductDetail

  const getProductDetail = () => {
    GetProductById(productId).then((x) => {
      console.log(x);
      setProductDetail(x);
    });
    //api.then((response)=>{setProductDetail(response)})
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  if (!productDetail.Id) {
    return; // <div>Loading</div>;
  }

  return (
    <>
      <div>
        <Row>
          <Col sm={5}>
            <Row>
              <Col>
                {" "}
                image <Image src={productDetail?.ImageUrl}></Image>
              </Col>
            </Row>
            <Row>
              <Col> Add TO Cart Button </Col>
              <Col> Buy Button </Col>
            </Row>
          </Col>
          <Col sm={7}>
            <Row>
              <Col>Name</Col>
            </Row>
            <Row>
              <Col>Price {productDetail.Price}</Col>
            </Row>
            <Row>
              <Col>Discription {productDetail.Discription}</Col>
            </Row>
            <Row>
              <Col>Colour {productDetail.Colour}</Col>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
