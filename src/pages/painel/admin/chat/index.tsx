import React, { useEffect, useState } from "react";

import ChatMessage from "./chat_components/chat_message";

import ChatTalkProfile from "./chat_components/chat_talk_profile";

import ChatListItem from "./chat_components/chat_list_item";

import ChatInputContainer from "./chat_components/chat_input_container";

import ChatSearch from "./chat_components/chat_search";

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
  id: string;
  profilepic: string;
  lastmsg: string;
  time: number;
  messages: Message[];
}

import LayoutFragment from "../../../../components/layout/admin";

const chat: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const [size, setSize] = useState<number>();

  const [search, setSearch] = useState<number | string>();

  useEffect(() => setSize(window.innerWidth), []);

  const [data, setData] = useState<Datum[]>([]);

  const FilterData = (e: any) => {
    const Filter = e.filter((n: any) => n.id);
  };

  useEffect(() => setData(Archives.data), []);

  return (
    <LayoutFragment title="Lista de chamados" isBreadcrumb={true} isBack={true}>
      <ChatWrapper>
        <ChatContainer>
          <ChatListContainer>
            <ChatSearch setSearch={setSearch} value={search}/>
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
                    <>
                      <ChatListItem
                        id={e.id}
                        profilePic={e.profilepic}
                        time={e.time}
                        lastMsg={e.lastmsg}
                        modalState={setModal}
                      />
                    </>
                  );
                })}
              </li>
            </ChatList>
          </ChatListContainer>
          {data.map((e, key) => {
            return (
              <ChatTalk key={key}>
                <div className="w-full h-full flex flex-col justify-between">
                  <ChatTalkProfile id={e.id} profilePic={e.profilepic} />
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
