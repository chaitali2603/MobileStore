import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Alert,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyProfile } from "./MyProfile";
import { useState, useEffect } from "react";
import { GetAddressByUserId } from "../../../Utill/Api";
import { ReqMyAddress } from "../../../Utill/Api";
import { DeleteAddressByAddressId } from "../../../Utill/Api";

/**
 * @author
 * @function MyAddress
 **/

export const MyAddress = (props) => {
  const [MyAddressForm, setMyAddressForm] = useState({
    Address: "",
    Address2: "",
    City: "",
    Choose: "",
    Pincode: "",
  });
  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  const validateMyAddress = (e) => {
    setShowError(false);

    if (!MyAddressForm.City) {
      console.log("City  is Blank");
      setErroeMassage("Please enter City name");
      setShowError(true);
      return false;
    }
    if (!MyAddressForm.State) {
      console.log("State  is Blank");
      setErroeMassage("Please enter State name");
      setShowError(true);
      return false;
    }
    if (!MyAddressForm.Pincode) {
      console.log("Zip code  is Blank");
      setErroeMassage("Please enter Zip code");
      setShowError(true);
      return false;
    }
    return true;
  };

  const OnSubmitMyAddress = (e) => {
    e.preventDefault();
    if (!validateMyAddress()) {
      return false;
    }
    ReqMyAddress(MyAddressForm).then(
      (data) => {
        console.log(data);
        // window.location.href = "/";
        getAllAddress();
        setMyAddressForm({
          Address: "",
          Address2: "",
          City: "",
          Choose: "",
          Pincode: "",
          State: "",
        });
      },
      (error) => {
        setShowError(true);
        setErroeMassage(error.message);
      }
    );
    return false;
    console.log(MyAddress);
  };

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

  const onEditAddress = (address) => {
    setMyAddressForm(address);
  };
  const onDeleteAddress = (address) => {
    console.log(address);
    DeleteAddressByAddressId(address.Id).then(() => {
      getAllAddress();
    });
  };

  return (
    <>
      <br></br>
      <h1> Address</h1>
      <p>
        _____________________________________________________________________________________________________________________________________________________________________________________________
      </p>
      <Container>
        <Row>
          <Col sm={2}>
            <Col className="fw-bold">
              {props.user ? `Welcom ${props.user.FirstName}` : <></>};
            </Col>
            <br></br>
            <ListGroup as="ul">
              <ListGroup.Item
                className="MyProfileCss"
                as="li"
                active
              ></ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyOrder"}> My Order</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/PersonalInformation"}> Personal Information</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyAddress"}> My Address</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col sm={10}>
            <div>
              {showError ? (
                <Alert variant={"danger"}>{ErroeMassage}</Alert>
              ) : null}
              <Form onSubmit={OnSubmitMyAddress}>
                <Row className="mb-3">
                  <Col></Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={MyAddressForm.City}
                        onChange={(e) => {
                          setMyAddressForm({
                            ...MyAddressForm,
                            City: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        value={MyAddressForm.State}
                        onChange={(e) => {
                          setMyAddressForm({
                            ...MyAddressForm,
                            State: e.target.value,
                          });
                        }}
                      >
                        <option value=""></option>
                        <option value="MH">maharastra</option>
                        <option value="Gj">Gujarat</option>
                        <option value="ks"> kashmir</option>
                        <option value="Dh">delhi</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        value={MyAddressForm.Pincode}
                        onChange={(e) => {
                          setMyAddressForm({
                            ...MyAddressForm,
                            Pincode: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Form>
            </div>

            <div>
              <Table>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>City Name</td>
                    <td>State</td>
                    <td>Zip</td>
                    <td>Option</td>
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
                        <td>
                          <Button
                            onClick={() => {
                              onEditAddress(address);
                            }}
                            variant="primary"
                            size="sm"
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            onClick={() => {
                              onDeleteAddress(address);
                            }}
                            variant="danger"
                            size="sm"
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
