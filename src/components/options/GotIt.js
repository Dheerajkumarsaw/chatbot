import React from "react";

import "./Common.css";

const Options = (props) => {
  const options = [
    {
      text: "Got it!",
      handler: props.actionProvider.handleGotIt,
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
