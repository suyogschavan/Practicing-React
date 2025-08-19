import RobotProfileImage from './imgs/robotProfile.png';
import UserProfileImage from './imgs/userProfile.png';
import './chatMessage.css'

function ChatMessage({ message, sender }) {
    return (
      <div className={sender == "user" ? "userChat" : "robotChat"}>
        {sender === "robot" && (
          <img src={RobotProfileImage} className="profileImg" />
        )}
        <span className="txt">{message}</span>
        {sender === "user" && (
          <img src={UserProfileImage} className="profileImg" />
        )}
      </div>
    );
  }

export default ChatMessage;