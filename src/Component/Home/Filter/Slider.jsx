import React from "react";

/**
* @author
* @function Slider

**/

export const Slider = (props) => {
  return (
    <>
      <div>
        <label className="form-label">{props.FilterType}</label>
        <div className="range">
          <input
          min={0} max={150000}
            onChange={(e) => {
              props.onChangeSlider(e.target.value)
            }}
            type="range"
            className="form-range"
            value={props.value}
            id="customRange1"
          />
          ({props.value})
        </div>
      </div>
    </>
  );
};
export default Slider;
