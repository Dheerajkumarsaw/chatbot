import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../options/GotIt";
import Slot from "../options/Slot";
import TimeSlots from "../Slots/TimeSlots";
import EndMessage from "../EndMessage/EndMessage";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello. Welcome to the student info system`, {
      widget: "options",
      delay: 3000,
      loading: true,
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "slot",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "available_slot",
      widgetFunc: (props) => <TimeSlots {...props} />,
    },

    {
      widgetName: "end_message",
      widgetFunc: (props) => <EndMessage {...props} />,
    },
  ],
};

export default config;
