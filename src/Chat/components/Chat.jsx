import React, { useContext } from "react";
import Cam from "../../img/cam.svg";
import More from "../../img/more.svg"
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="user" >
            <img src={data.user?.photoURL} alt="" />
            <span>{data.user?.displayName}</span>
          </div>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;