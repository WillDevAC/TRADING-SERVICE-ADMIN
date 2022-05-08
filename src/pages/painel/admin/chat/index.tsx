import React, { useState } from "react";

import ChatMessage from "../../../../components/chat/chat_message";
import ChatTalkProfile from "../../../../components/chat/chat_talk_profile";
import ChatListItem from "../../../../components/chat/chat_list_item";
import ChatInputContainer from "../../../../components/chat/chat_input_container";
import ChatSearch from "../../../../components/chat/chat_search";

import LayoutFragment from "../../../../components/layout/admin";
import useWindowSize from '../../../../hooks/getScreenSize'

import ModalChat from '../../../../components/molecules/modals/modal_chat'

import {
  ChatContainer,
  ChatListContainer,
  ChatWrapper,
  ChatList,
  ChatTalk,
  ChatMessages,
} from "../../../../components/molecules/chat/styles";

const chat: React.FC = () => {

  const [modal, setModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const size = useWindowSize();

  return (
    <LayoutFragment title="Lista de chamados" isBreadcrumb={true} isBack={true}>
      <ChatWrapper>
        <ChatContainer>
          <ChatListContainer>
            <ChatSearch setSearch={setSearch} />
            <ChatList>
              <li>
                <ChatListItem
                  name="willzinho"
                  profilePic="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                  time={1500}
                  lastMsg="Olá mundo"
                  setModal={setModal}
                />
                <ChatListItem
                  name="willzinho"
                  profilePic="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                  time={1500}
                  lastMsg="Olá mundinho"
                  setModal={setModal}
                />
                <ChatListItem
                  name="willzinho"
                  profilePic="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                  time={1800}
                  lastMsg="Olá tetinha"
                  setModal={setModal}
                />
              </li>
            </ChatList>
          </ChatListContainer>
              <ChatTalk key={0}>
                <div className="w-full h-full flex flex-col justify-between">
                  <ChatTalkProfile name="user" profilePic="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"/>
                  <ChatMessages>
                    <ChatMessage
                      key={0}
                      sender="eai maninho"
                      receiver="beleza pô"
                    />
                     <ChatMessage
                      key={1}
                      sender="top demais eim?"
                      receiver="né isso"
                    />
                     <ChatMessage
                      key={2}
                      sender="cansei dessa vida"
                      receiver="você não programa em java calma."
                    />
                  </ChatMessages>
                  <ChatInputContainer />
                </div>
              </ChatTalk>
        </ChatContainer>
      </ChatWrapper>

      {size.width <= 1000 && (
         <ModalChat setModal={setModal} modal={modal}/>
      )}

    </LayoutFragment>
  );
};

export default chat;
