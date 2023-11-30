import React from "react";
import "./Common.css";

const Slot = (props) => {
  const options = [
    {
      text: "Pick A Slot",
    },
  ];

  const handleSlot = () => {
    props.actionProvider.handleSlot();
  };
  const buttonsMarkup = options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleSlot(option.text)}
      className="option-button"
    >
      {option.text}
    </button>
  ));

  return <div className="slot-container">{buttonsMarkup}</div>;
};

export default Slot;
