import { useState } from "react";
import { Chatbot } from "supersimpledev";
import spinnerImage from "./imgs/loading-spinner.gif";
import "./ChatInput.css";
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setInputText("");
    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
    ];
    // setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loadingImg" src={spinnerImage} />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);
    // setInputText("");
  }

  function checkForEnter(event) {
    if (event.key == "Enter") sendMessage();
    else if (event.key == "Escape") setInputText("");
  }

  return (
    <div className="input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={checkForEnter}
        className="input"
      />
      <button className="send-button" onClick={sendMessage}>
        {" "}
        Send{" "}
      </button>
      <button className="clear-button" onClick={() => setChatMessages([])}>
        Clear
      </button>
    </div>
  );
}

export default ChatInput;
