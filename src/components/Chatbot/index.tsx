import React, { useState } from "react";
import { ChatbotProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ChatButtonWrapper,
  ChatWindowWrapper,
  ChatHeader,
  ChatBody,
  ChatFooter,
  ChatIconButton,
  ChatInput,
  SendButton,
  ChatMessagesUser,
  ChatMessagesBot,
} from "./styles";

const Chatbot = ({ chatIcon, chatCloseIcon }: ChatbotProps) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [userInput, setUserInput] = useState("");

  const toggleChatWindow = () => {
    setOpen(!open);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    // Add user message to the chat
    setMessages([...messages, { user: userInput, bot: "" }]);

    // "http://localhost:4000/api/v1/chat/message",
    const URL = "https://assign-backend-seven.vercel.app/api/v1/chat/message";

    // Send message to API
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        // Add bot's response to the chat
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { user: userInput, bot: data.data.response },
        ]);
      } else {
        // Handle error case
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          {
            user: userInput,
            bot: "Sorry, Will soon answer such questions, for now try asking about our expertise, solutions, contact details and pricing !",
          },
        ]);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { user: userInput, bot: "Error: Unable to connect to the server." },
      ]);
    }

    setUserInput(""); // Clear input field
  };

  return (
    <>
      <ChatButtonWrapper onClick={toggleChatWindow}>
        <SvgIcon src={chatIcon} width="100%" height="100%" />
      </ChatButtonWrapper>
      {open && (
        <ChatWindowWrapper>
          <ChatHeader>
            <h4>How may I HELP!</h4>
            <ChatIconButton onClick={toggleChatWindow}>
              <SvgIcon src={chatCloseIcon} width="100%" height="100%" />
            </ChatIconButton>
          </ChatHeader>
          <ChatBody>
            {messages.map((message, index) => (
              <>
                <ChatMessagesUser key={index}>
                  <div>
                    <strong>You:</strong> {message.user}
                  </div>
                </ChatMessagesUser>
                <ChatMessagesBot>
                  <div>
                    <strong>Bot:</strong> {message.bot}
                  </div>
                </ChatMessagesBot>
              </>
            ))}
          </ChatBody>
          <ChatFooter>
            <ChatInput
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <SendButton onClick={sendMessage}>Send</SendButton>
          </ChatFooter>
        </ChatWindowWrapper>
      )}
    </>
  );
};

export default Chatbot;
