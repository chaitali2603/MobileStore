import React from "react";

/**
* @author
* @function Slider

**/

export const Slider = (props) => {
  return (
    <>
    <div>
      <label className="form-label" >
        {props.FilterType}
      </label>
      <div className="range">
        <input type="range" className="form-range" id="customRange1" />
      </div>
      </div>
    </>
  );
};
export default Slider;