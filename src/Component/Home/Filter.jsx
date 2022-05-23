import React from "react";
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
} from "react-bootstrap";

/**
 * @author
 * @function Filter
 **/

export const Filter = (props) => {
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
        <Slider FilterType="Price Range" > </Slider>
        <Slider FilterType="RAM"> </Slider>
        
          <CheckBox></CheckBox>
         
           <InternalStorage></InternalStorage>
           <OpratingSystem></OpratingSystem>
       
      </Container>
    </>
  );
};
