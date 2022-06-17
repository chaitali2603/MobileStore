import React, { useEffect, useState } from "react";
import { Slider } from "./Filter/Slider";
import { CheckBox } from "./Filter/CheckBox";

import {
  Form,
  FormControl,
  Button,
  label,
  input,
  Container,
  mobiscroll,
  Accordion,
  Fade,
} from "react-bootstrap";

/**
 * @author
 * @function Filter
 **/

export const Filter = (props) => {
  const [filter, setFilter] = useState(props.value);

  useEffect(() => {
    props.onChangefilter(filter);
  }, [filter]);

  return (
    <>
      <Container>
        <h1>Filter</h1>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setFilter({ ...filter, search: e.target.value });
            }}
            aria-describedby="search-addon"
          />
        </div>

            
        <Slider
          onChangeSlider={(val) => {
            setFilter({ ...filter, Price: val });
          }}
          value={filter.Price}
          FilterType="Price Range"
        >
          {" "}
        </Slider>
          
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>RAM</Accordion.Header>
            <Accordion.Body>
              <CheckBox
                items={filter.Ram}
                onChangeCheckBox={(items) => {
                  setFilter({ ...filter, RAM: items });
                }}
              ></CheckBox>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Brand</Accordion.Header>
            <Accordion.Body>
              <CheckBox
                items={filter.Brand}
                onChangeCheckBox={(items) => {
                  setFilter({ ...filter, Brand: items });
                }}
              ></CheckBox>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Internal Storage</Accordion.Header>
            <Accordion.Body>
              <CheckBox
                items={filter.internalStorage}
                onChangeCheckBox={(items) => {
                  setFilter({ ...filter, internalStorage: items });
                }}
              ></CheckBox>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Operating System</Accordion.Header>
            <Accordion.Body>
              <CheckBox
                items={filter.OpratingSystem}
                onChangeCheckBox={(items) => {
                  setFilter({ ...filter, opratingSystem: items });
                }}
              ></CheckBox>
            </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </Container>
    </>
  );
};
