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
  Wrapper
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_define_rendiment: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>Novo rendimento mensal</Label>
                <Input type="text" value="xxx" />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAccept>Atualizar</ButtonAccept>
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

export default modal_define_rendiment;
