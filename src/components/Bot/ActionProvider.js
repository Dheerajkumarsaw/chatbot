import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const greet = () => {
    const messages = createChatBotMessage("Hello friend.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleGotIt = () => {
    // console.log(message)
    const messages = createChatBotMessage("Got It!", {
      widget: "slot",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleSlot = () => {
    const messages = createChatBotMessage("Select Day and Time", {
      widget: "available_slot",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleSelectDay = (selectedDay) => {
    console.log(selectedDay, "from provider");
  };

  const handleEmptyMessage = () => {
    const messages = createChatBotMessage("Please provide correct input!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleSelectTime = (selectedTime) => {
    console.log(selectedTime, "from provider");
    const messages = createChatBotMessage("Enter Name");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleAge = () => {
    const messages = createChatBotMessage("Enter Your Age");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };

  const handleEnd = () => {
    const messages = createChatBotMessage(
      "Thank you! for Enrollment Bot will exit with in 5 seconds",
      {
        widget: "end_message",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, messages],
    }));
  };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleSlot,
            handleEnd,
            handleGotIt,
            handleEmptyMessage,
            handleSelectDay,
            greet,
            handleSelectTime,
            handleAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
