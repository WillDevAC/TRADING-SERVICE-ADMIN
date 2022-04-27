import React, { useEffect, useState } from "react";

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
  sender: string;
  receiver: string;
}

interface Datum {
  id: string;
  profilepic: string;
  lastmsg: string;
  time: string;
  messages: Message[];
}

interface RootObject {
  data: Datum[];
}

import LayoutFragment from "../../../../components/layout/admin";

const chat: React.FC = () => {
  const [data, setData] = useState<Datum[]>([]);

  useEffect(() => setData(Archives.data), []);

  return (
    <LayoutFragment title="Lista de chamados" isBreadcrumb={true} isBack={true}>
      <ChatWrapper>
        <ChatContainer>
          <ChatListContainer>
            <div className="mx-3 my-3">
              <div className="relative text-gray-600">
                <ChatSearchIcon>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </ChatSearchIcon>
                <ChatSearchInput
                  type="search"
                  className=""
                  name="search"
                  placeholder="Procurar"
                  required
                />
              </div>
            </div>

            <ChatList>
              <ChatListTitle>Chats</ChatListTitle>
              <li>
                {data.map((e, key) => {
                  return (
                    <ChatListItem key={key}>
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
          <ChatTalk>
            <div className="w-full">
              <ChatTalkProfile>
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                  alt="username"
                />
                <span className="block ml-2 font-bold text-gray-600">
                  Maria
                </span>
                <GreenBall></GreenBall>
              </ChatTalkProfile>
              <ChatMessages>
                <ul className="space-y-2">
                  <li className="flex justify-start">
                    <MessageLeft>
                      <span className="block">
                        Olá, sou Maria, do suporte da Trading Service. Como
                        posso ajudá-lo?
                      </span>
                    </MessageLeft>
                  </li>
                  <li className="flex justify-end">
                    <MessageRight>
                      <span className="block">Olá, boa noite!</span>
                    </MessageRight>
                  </li>
                  <li className="flex justify-end">
                    <MessageRight>
                      <span className="block">
                        Poderia revisar minha solicitação de saque? ID: 1298367
                      </span>
                    </MessageRight>
                  </li>
                  <li className="flex justify-start">
                    <MessageLeft>
                      <span className="block">Ok, um momento.</span>
                    </MessageLeft>
                  </li>
                </ul>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
        </ChatContainer>
      </ChatWrapper>
    </LayoutFragment>
  );
};

export default chat;
