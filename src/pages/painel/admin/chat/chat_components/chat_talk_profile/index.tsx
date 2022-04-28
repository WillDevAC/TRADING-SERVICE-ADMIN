import React from "react";

import { GreenBall } from "../../../../../../components/molecules/chat/styles";

interface Props {
  id: string;
  profilePic: string;
}

const chat_talk_profile: React.FC<Props> = ({ profilePic, id }) => {
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={profilePic}
        alt="username"
      />
      <span className="block ml-2 font-bold text-gray-600">{id}</span>
      <GreenBall></GreenBall>
    </div>
  );
};

export default chat_talk_profile;
