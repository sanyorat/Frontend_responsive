import styled from "styled-components";

// Chat button styling for the bottom-right floating button
export const ChatButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px; /* Adjusted spacing to avoid overlap with other content */
  right: 30px;
  background-color: #4caf50; /* Updated to a green primary color */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #388e3c; /* Darker green on hover */
  }
`;

// Chat window styling
export const ChatWindowWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 350px;
  height: 450px; /* Increased height for more chat space */
  background-color: #ffffff; /* White background for the chat window */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 12px; /* Slightly rounded corners */
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

// Chat header with close button
export const ChatHeader = styled.header`
  padding: 15px;
  background-color: #3f51b5; /* Updated to a blue header */
  color: #ffffff; /* White text */
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between; /* Distribute space between title and button */
  align-items: center;

  h4 {
    margin: 0;
    font-size: 1.3rem;
    color: white;
  }
`;

// Chat content area
export const ChatBody = styled.div`
  flex: 1;
  padding: 15px;
  background-color: #f9f9f9; /* Light gray background for the body */
  overflow-y: auto;
  font-size: 1rem;
  color: #333333; /* Dark gray text for readability */
`;

// Chat footer area
export const ChatFooter = styled.div`
  padding: 10px;
  background-color: #f1f1f1; /* Slightly lighter gray for the footer */
  border-radius: 0 0 12px 12px;
  display: flex;
  align-items: center;
`;

// Chat close button (use an icon or image)
export const ChatIconButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #e0e0e0; /* Slight color change on hover */
  }
`;

// Chat icon image styling to fit the button
export const ChatButtonImage = styled.img`
  max-width: 60%; /* Adjusted size to fit well inside the button */
  max-height: 60%;
  object-fit: contain;
`;

// Chat messages container styling
export const ChatMessagesUser = styled.div`
  margin-bottom: 15px;
  font-size: 0.95rem;

  div {
    margin-bottom: 5px;
  }

  strong {
    color: #3f51b5; /* Color-coded for the bot's name */
  }

  text-align: right;
`;
export const ChatMessagesBot = styled.div`
  margin-bottom: 15px;
  font-size: 0.95rem;

  div {
    margin-bottom: 5px;
  }

  strong {
    color: #3f51b5; /* Color-coded for the bot's name */
  }

  text-align: left;
`;

// Chat input styling
export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 1rem;
`;

// Send button styling
export const SendButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c; /* Darker green on hover */
  }
`;
