import React from "react";

import {
  Modal,
  ModalOpacity,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ButtonDecline,
  ButtonAccept,
  Label,
  Input,
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_password: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>Senha antiga </Label>
                <Input
                  type="password"
                />
              </div>
              <div className="pt-5">
                <Label>Nova senha </Label>
                <Input
                  type="password"
                />
              </div>
              <div className="pt-5">
                <Label>Confirmar nova senha </Label>
                <Input
                  type="password"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              <ButtonAccept onClick={() => {}}>Mudar senha</ButtonAccept>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_password;
