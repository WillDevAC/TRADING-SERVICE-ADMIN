import React, { useState } from "react";

import { ChatListItem } from "../../molecules/chat/styles";

interface Props {
  profilePic: string;
  name: string;
  time: number;
  lastMsg: string;
  setModal: Function;
}

const chat_list_item: React.FC<Props> = ({
  profilePic,
  name,
  time,
  lastMsg,
  setModal
}) => {

  return (
    <>
      <ChatListItem onClick={() => setModal(true)}>
        <img
          className="object-cover w-10 h-10 rounded-full"
          src={profilePic}
          alt="username"
        />
        <div className="w-full pb-2">
          <div className="flex justify-between">
            <span className="block ml-2 font-semibold text-gray-600">{name}</span>
            {time / 60 < 60 ? (
              <span className="block ml-2 text-sm text-gray-600">
                há {time / 60} minutos
              </span>
            ) : time / 60 > 60 && time / 60 < 1440 ? (
              <span className="block ml-2 text-sm text-gray-600">
                há {time / 3600} horas
              </span>
            ) : (
              <span className="block ml-2 text-sm text-gray-600">
                há {time / 86400} dias
              </span>
            )}
          </div>
          <span className="block ml-2 text-sm text-gray-600">{lastMsg}</span>
        </div>
      </ChatListItem>
    </>
  );
};

export default chat_list_item;
