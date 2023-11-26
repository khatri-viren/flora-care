/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordian = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title flex justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-semibold">{props.title}</div>
        <div className="my-auto hover:cursor-pointer text-xl mr-3">
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content text-sm font-light my-2">
          {props.content}
        </div>
      )}
      <hr className="border border-solid border-umedium my-4" />
    </div>
  );
};

export default Accordian;
