import React from "react";
import { useDispatch } from "react-redux";
import { setName, setAge } from "../store/contentSlice";

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();

  const parse = (message) => {
    if (message.includes("hello")) {
      return actions.greet();
    }
    if (!message) {
      return actions.handleEmptyMessage();
    }

    if (isNaN(message)) {
      dispatch(setName(message));
      actions.handleAge();
    } else if (!isNaN(message)) {
      dispatch(setAge(message));
      return actions.handleEnd();
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
