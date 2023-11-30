import config from "./Bot/config";
import MessageParser from "./Bot/MessageParser";
import ActionProvider from "./Bot/ActionProvider";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";

const CustomChatbot = () => {
  return (
    <div className="flex justify-center item-center">
      <Chatbot
        headerText="Enrollment Chatbot"
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};
export default CustomChatbot;
