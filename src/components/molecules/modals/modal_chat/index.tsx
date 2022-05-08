import React from "react";

import { Modal, ModalOpacity, ModalWrapper, ModalBody } from "../global";

import { ChatMessages } from "../../../../components/molecules/chat/styles";

import ChatMessage from "../../../../components/chat/chat_message";
import ChatTalkProfile from "../../../../components/chat/chat_talk_profile";
import ChatInputContainer from "../../../../components/chat/chat_input_container";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_chat: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <ChatTalkProfile
                name="user"
                profilePic="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
              />
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
            </ModalBody>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_chat;
