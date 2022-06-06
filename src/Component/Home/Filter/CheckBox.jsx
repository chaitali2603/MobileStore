import React from "react";
import { useState,useEffect } from "react";


/**
* @author
* @function CheckBox

**/

export const CheckBox = (props) => {
  const [items, setitems] = useState(props.items);

  useEffect(() => {
    props.onChangeCheckBox(items);
  }, [items]);

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="form-check">
            <input
              onChange={(e) => {
                console.log(e.target.value);
                console.log(e.target.checked);
                setitems(
                  items.map((el) =>
                    el.name == e.target.value
                      ? { ...el, value: e.target.checked }
                      : el
                  )
                );
              }}
              className="form-check-input"
              type="checkbox"
              checked={item.value}
              value={item.name}
              id="flexCheckDefault"
            />

            <label className="form-check-label">{item.name}</label>
          </div>
        );
      })}
    </div>
  );
};
