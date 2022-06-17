import React from "react";
import { SideBar } from "../../Layout/SideBar";
import {
  Row,
  Col,
  Container,
  Button,
  Modal,
  Form,
  FloatingLabel,
  Alert,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { SearchAllProducts, CreateMyProduct } from "../../../Utill/Api";
import DataTable from "react-data-table-component";
import { DeleteMyProduct } from "../../../Utill/Api";

/**
 * @author
 * @function CreateProduct
 **/

export const CreateProduct = (props) => {
  const [filter, setFilter] = useState({
    pageno: 1,
    recordperpage: 10,
    Price: 150000,
    Ram: [
      { name: "2 GB", value: false },
      { name: "4 GB", value: false },
      { name: "6 GB", value: false },
      { name: "8 GB", value: false },
      { name: "12 GB", value: false },
    ],
    Brand: [
      { name: "Samsung", value: false },
      { name: "iphone", value: false },
      { name: "mi", value: false },
      { name: "Vivo", value: false },
      { name: "oppo", value: false },
      { name: "Oneplus", value: false },
      { name: "Poco", value: false },
    ],
    internalStorage: [
      { name: "8-15.9 GB", value: false },
      { name: "16-31.9 GB", value: false },
      { name: "32-63.9 GB", value: false },
      { name: "64-127.9 GB", value: false },
      { name: "128 GB and above", value: false },
    ],
    OpratingSystem: [
      { name: "ios", value: false },
      { name: "Android", value: false },
      { name: "Linus", value: false },
      { name: "Tizen", value: false },
      { name: "Kaios", value: false },
      { name: "Symbian", value: false },
    ],
    search: "",
  });

  const [Products, setProducts] = useState([]);

  const [popupProduct, setPopupProduct] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
      name: "Image",
      selector: (row) => row.ImageUrl,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Price",
      selector: (row) => row.Price,
    },
    {
      name: "Disscount",
      selector: (row) => row.Disscount,
    },
    {
      name: "Brand",
      selector: (row) => row.Brand,
    },
    {
      name: "Storage",
      selector: (row) => row.Storage,
    },
    {
      name: "RAM",
      selector: (row) => row.RAM,
    },

    {
      name: "Description",
      selector: (row) => row.Description,
    },
    {
      name: "OpratingSystem",
      selector: (row) => row.OS,
    },
    {
      button: true,
      cell: (row) => (
        <div className="App">
          <div className="openbtn text-center">
            <Button
              variant="primary"
              onClick={() => {
                setPopupProduct(row);
                setShowModal(true);
              }}
              size="sm"
            >
              {" "}
              Edit
            </Button>
            <Button
              onClick={() => {
                onDeleteCreateProduct(row);
              }}
              variant="danger"
              size="sm"
            >
              {" "}
              Delete
            </Button>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getProductdata();
  }, [filter]);

  const getProductdata = () => {
    SearchAllProducts(filter).then((data) => {
      console.log(data);
      setProducts(data);
    });
  };
  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  const validatepopupProduct = (e) => {
    debugger;
    setShowError(false);

    if (!popupProduct.Name) {
      console.log("Product Name  is Blank");
      setErroeMassage("Please enter Product Name");
      setShowError(true);
      return false;
    }
    if (!popupProduct.Price) {
      console.log("Price  is Blank");
      setErroeMassage("Please enter Price");
      setShowError(true);
      return false;
    }
    if (!popupProduct.RAM) {
      console.log("RAM  is Blank");
      setErroeMassage("Please enter RAM");
      setShowError(true);
      return false;
    }
    if (!popupProduct.Brand) {
      console.log("Brand  is Blank");
      setErroeMassage("Please enter Brand");
      setShowError(true);
      return false;
    }
    if (!popupProduct.OS) {
      console.log("Oprating System  is Blank");
      setErroeMassage("Please enter Oprating System ");
      setShowError(true);
      return false;
    }
    if (!popupProduct.Description) {
      console.log("Description  is Blank");
      setErroeMassage("Please enter Description ");
      setShowError(true);
      return false;
    }
    return true;
  };

  const onSubmitProduct = (e) => {
    e.preventDefault();
    setShowError(false);
    if (!validatepopupProduct()) {
      return false;
    }

    CreateMyProduct(popupProduct).then((data) => {
      console.log(data);
      setShowModal(false);
      getProductdata();
      alert("Product saved");
    });
    // return false;
    // console.log(CreateProduct);
  };
  const onDeleteCreateProduct = (product) => {
    console.log(product);
    DeleteMyProduct(product.Id).then(() => {
      getProductdata();
    });
  };

  return (
    <>
      <Container>
        <h1 className="SuccessMargin">All Products </h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            {" "}
            <SideBar></SideBar>{" "}
          </Col>

          <Col sm={10}>
            <Row>
              <Col>
                <Button
                  onClick={() => {
                    setPopupProduct({});
                    setShowModal(true);
                  }}
                  size="sm"
                  className="rightside"
                >
                  {" "}
                  Create Product
                </Button>
              </Col>
            </Row>
            <br></br>
            <DataTable columns={columns} data={Products} />
            <Modal
              show={showModal}
              fullscreen={false}
              onHide={() => {
                setShowModal(false);
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col>
                    {showError ? (
                      <Alert variant={"danger"}>{ErroeMassage}</Alert>
                    ) : null}
                    <Form onSubmit={onSubmitProduct}>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          type="Fname"
                          placeholder="Product Name"
                          value={popupProduct.Name}
                          onChange={(e) => {
                            setPopupProduct({
                              ...popupProduct,
                              Name: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="Fname"
                          placeholder="Product Price"
                          value={popupProduct.Price}
                          onChange={(e) => {
                            setPopupProduct({
                              ...popupProduct,
                              Price: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>

                      <Form.Label>RAM</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={popupProduct.RAM}
                        onChange={(e) => {
                          setPopupProduct({
                            ...popupProduct,
                            RAM: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select RAM</option>
                        <option value="2 GB">2 GB</option>
                        <option value="4 GB">4 GB</option>
                        <option value="6 GB">6 GB</option>
                        <option value="8 GB">8 GB</option>
                        <option value="12 GB">12 GB</option>
                      </Form.Select>

                      <Form.Label>Brand</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={popupProduct.Brand}
                        onChange={(e) => {
                          setPopupProduct({
                            ...popupProduct,
                            Brand: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select Brand</option>
                        <option value="Samsung"> Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Vivo">Vivo</option>
                        <option value="OPPO">OPPO</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="POCO">POCO</option>
                        <option value="Realme">Realme</option>
                      </Form.Select>

                      <Form.Label>Oprating System</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        value={popupProduct.OS}
                        onChange={(e) => {
                          setPopupProduct({
                            ...popupProduct,
                            OS: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select OpratingSystem</option>
                        <option value="iOS"> iOS</option>
                        <option value="Android">Android</option>
                        <option value="Windows">Windows</option>
                        <option value="Symbian">Symbian</option>
                        <option value="Tizen">Tizen</option>
                      </Form.Select>

                      <Form.Label>Description</Form.Label>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Description"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Description"
                          style={{ height: "100px" }}
                          value={popupProduct.Description}
                          onChange={(e) => {
                            setPopupProduct({
                              ...popupProduct,
                              Description: e.target.value,
                            });
                          }}
                        />
                      </FloatingLabel>

                      <Modal.Footer>
                        <Button type={"submit"} variant="primary">
                          Save changes
                        </Button>
                      </Modal.Footer>
                    </Form>
                    <Col></Col>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
