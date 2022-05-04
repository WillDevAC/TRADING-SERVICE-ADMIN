import React from "react";

import {
  Modal,
  ModalOpacity,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ButtonDecline
} from "../global";

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
              Modal chat
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_chat;
