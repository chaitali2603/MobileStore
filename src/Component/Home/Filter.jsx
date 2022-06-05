import React, { useEffect,useState } from "react";
import { Slider } from "./Filter/Slider";
import { CheckBox } from "./Filter/CheckBox";
import { InternalStorage } from "./Filter/InternalStorage";
import { OpratingSystem } from "./Filter/OperatingSystem";

import {
  Form,
  FormControl,
  Button,
  label,
  input,
  Container,
  mobiscroll,
  Accordion
} from "react-bootstrap";
import { Ram } from "./Filter/Ram";

/**
 * @author
 * @function Filter
 **/

export const Filter = (props) => {
  const [filter, setFilter] = useState(props.value);

  useEffect(()=>{
    props.onChangefilter(filter)
  },[filter])
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
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
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
        <Ram></Ram>
        </Accordion.Body>
        </Accordion.Item>

      
          <Accordion.Item eventKey="1">
            <Accordion.Header>Brand</Accordion.Header>
            <Accordion.Body>   
        <CheckBox></CheckBox>
        </Accordion.Body>
        </Accordion.Item>
    

        <Accordion.Item eventKey="2">
            <Accordion.Header>Internal Storage</Accordion.Header>
            <Accordion.Body>   
        <InternalStorage></InternalStorage>
        </Accordion.Body>
        </Accordion.Item>
    

        <Accordion.Item eventKey="3">
            <Accordion.Header>Operating System</Accordion.Header>
            <Accordion.Body> 
        <OpratingSystem></OpratingSystem>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};
