import {useRef, useEffect} from 'react';
import ChatMessage from './ChatMessage';
import "./ChatMessages.css"


function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);

    useEffect(() => {
      const containerElement = chatMessagesRef.current;
      if (containerElement) {
        containerElement.scrollTop = containerElement.scrollHeight;
      }
    }, [chatMessages]);
    return (
      <div ref={chatMessagesRef} className="chats-container">
        {chatMessages.map(({ message, sender, id }) => {
          return <ChatMessage message={message} sender={sender} key={id}/>;
        })}
      </div>
    );
  }
export default ChatMessages;