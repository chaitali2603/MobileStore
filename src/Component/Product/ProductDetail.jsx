import React, { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
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
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Row>
          <Col sm={5}>
            <Row>
              <Col>
                {" "}
                <Image src={productDetail?.ImageUrl}></Image>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Button
                  onClick={() => {
                    props.onAddCart(props.product);
                  }}
                  variant="outline-primary"
                  size="md"
                >
                  Add to Cart
                </Button>
              </Col>
              <Col>
                <Link to={"/ConfrimOrder"}>
                  <Button> Buy Now</Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col sm={7}>
            <Row>
              <Col><h1><b>{productDetail.ModelName}</b></h1></Col>
            </Row>
            <br></br>
            <Row>
            <div>{productDetail.Disscount>0?<span style={{textDecoration:'line-through'}} className="OrignalPrice"> <div>{productDetail.Price}</div></span>:null}
            </div>
            <Col><b>Discount: {productDetail.Disscount}%</b></Col>
            </Row>
            <br></br>
            <Row>
            <Col><b>Price: {productDetail.Price}</b></Col>
            </Row>
            <br></br>
            <Row>
              <Col><b>Discription: {productDetail.Description}</b></Col>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
    </>
  );
};
