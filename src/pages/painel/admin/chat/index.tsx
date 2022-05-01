import React, { useEffect, useState } from "react";

import ChatMessage from "../../../../components/chat/chat_message";

import ChatTalkProfile from "../../../../components/chat/chat_talk_profile";

import ChatListItem from "../../../../components/chat/chat_list_item";

import ChatInputContainer from "../../../../components/chat/chat_input_container";

import ChatSearch from "../../../../components/chat/chat_search";

import {
  ChatContainer,
  ChatListContainer,
  ChatWrapper,
  ChatList,
  ChatListTitle,
  ChatTalk,
  ChatMessages,
} from "../../../../components/molecules/chat/styles";

import ModalChat from "../../../../components/molecules/modals/modal_chat";

import Archives from "../../../../json/chats.json";

interface Message {
  sender?: string;
  receiver?: string;
}

interface Datum {
  name: string;
  profilepic: string;
  lastmsg: string;
  time: number;
  messages: Message[];
}

import LayoutFragment from "../../../../components/layout/admin";

const chat: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const [size, setSize] = useState<number>();

  const [search, setSearch] = useState();

  useEffect(() => setSize(window.innerWidth), []);

  const [data, setData] = useState<Datum[]>([]);

  useEffect(() => setData(Archives.data), []);

  return (
    <LayoutFragment title="Lista de chamados" isBreadcrumb={true} isBack={true}>
      <ChatWrapper>
        <ChatContainer>
          <ChatListContainer>
            <ChatSearch setSearch={setSearch} />
            <ChatList>
              {size < 1000 ? (
                <ModalChat modal={modal} setModal={setModal} />
              ) : (
                () => {}
              )}
              <ChatListTitle>Chats</ChatListTitle>
              <li>
                {data.map((e, key) => {
                  return (
                    <ChatListItem
                      key={key}
                      name={e.name}
                      profilePic={e.profilepic}
                      time={e.time}
                      lastMsg={e.lastmsg}
                      modalState={setModal}
                    />
                  );
                })}
              </li>
            </ChatList>
          </ChatListContainer>
          {data.map((e, key) => {
            return (
              <ChatTalk key={key}>
                <div className="w-full h-full flex flex-col justify-between">
                  <ChatTalkProfile name={e.name} profilePic={e.profilepic} />
                  <ChatMessages>
                    {e.messages.map((e, key) => {
                      return (
                        <ChatMessage
                          key={key}
                          sender={e.sender}
                          receiver={e.receiver}
                        />
                      );
                    })}
                  </ChatMessages>
                  <ChatInputContainer />
                </div>
              </ChatTalk>
            );
          })}
        </ChatContainer>
      </ChatWrapper>
    </LayoutFragment>
  );
};

export default chat;
