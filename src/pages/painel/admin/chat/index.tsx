import React, { useEffect, useState } from "react";

import ModalChat from "../../../../components/molecules/modals/modal_chat";

import Archives from "../../../../json/chats.json";

import {
  ChatContainer,
  ChatListContainer,
  ChatSearchIcon,
  ChatWrapper,
  ChatSearchInput,
  ChatList,
  ChatListTitle,
  ChatListItem,
  ChatTalk,
  ChatTalkProfile,
  GreenBall,
  ChatMessages,
  MessageLeft,
  MessageRight,
  ChatInputContainer,
  ChatInput,
} from "../../../../components/molecules/chat/styles";

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

  const FilterData = (e) => {
    const Filter = e.filter((n) => n.id)
  }

  useEffect(() => setData(Archives.data), []);

  return (
    <LayoutFragment title="Lista de chamados" isBreadcrumb={true} isBack={true}>
      <ChatWrapper>
        <ChatContainer>
          <ChatListContainer>
            <div className="px-3 py-3 sticky top-0 bg-gray-100 border-bt-1">
              <div className="relative text-gray-600">
                <ChatSearchIcon>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </ChatSearchIcon>
                <ChatSearchInput
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  name="search"
                  placeholder="Procurar"
                  required
                />
              </div>
            </div>

            <ChatList>
              {size < 1000 ? (
                <ModalChat modal={modal} setModal={setModal} />
              ) : () => {}}
              <ChatListTitle>Chats</ChatListTitle>
              <li>
                {data.map((e, key) => {
                  return (
                    <ChatListItem onClick={() => setModal(true)} key={key}>
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={e.profilepic}
                        alt="username"
                      />
                      <div className="w-full pb-2">
                        <div className="flex justify-between">
                          <span className="block ml-2 font-semibold text-gray-600">
                            {e.id}
                          </span>
                          {e.time / 60 < 60 ? (
                            <span className="block ml-2 text-sm text-gray-600">
                              há {e.time / 60} minutos
                            </span>
                          ) : e.time / 60 > 60 && e.time / 60 < 1440 ? (
                            <span className="block ml-2 text-sm text-gray-600">
                              há {e.time / 3600} horas
                            </span>
                          ) : (
                            <span className="block ml-2 text-sm text-gray-600">
                              há {e.time / 86400} dias
                            </span>
                          )}
                        </div>
                        <span className="block ml-2 text-sm text-gray-600">
                          {e.lastmsg}
                        </span>
                      </div>
                    </ChatListItem>
                  );
                })}
              </li>
            </ChatList>
          </ChatListContainer>
          {data.map((e, key) => {
            return (
              <ChatTalk key={key}>
                <div className="w-full h-full flex flex-col justify-between">
                  <ChatTalkProfile>
                    <img
                      className="object-cover w-10 h-10 rounded-full"
                      src={e.profilepic}
                      alt="username"
                    />
                    <span className="block ml-2 font-bold text-gray-600">
                      {e.id}
                    </span>
                    <GreenBall></GreenBall>
                  </ChatTalkProfile>
                  <ChatMessages>
                    {e.messages.map((e, key) => {
                      return (
                        <ul key={key} className="space-y-2">
                          <li className="flex justify-start">
                            {e.sender ? (
                              <MessageLeft>
                                <span className="block">{e.sender}</span>
                              </MessageLeft>
                            ) : null}
                          </li>
                          <li className="flex justify-end">
                            {e.receiver ? (
                              <MessageRight>
                                <span className="block">{e.receiver}</span>
                              </MessageRight>
                            ) : null}
                          </li>
                        </ul>
                      );
                    })}
                  </ChatMessages>

                  <ChatInputContainer>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>

                    <ChatInput
                      type="text"
                      placeholder="Mensagem"
                      name="message"
                      required
                    />
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </button>
                    <button type="submit">
                      <svg
                        className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </ChatInputContainer>
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
