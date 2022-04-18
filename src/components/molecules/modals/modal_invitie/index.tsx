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
  Select,
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_invitie: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
                <div className="pt-5">
                <Label>Seu link de convite: </Label>
                <Input type="text" name="link" placeholder="http://tradingservice.com.br/register?consultor=21" disabled/>

              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              <ButtonAccept onClick={() => {}}>Copiar</ButtonAccept>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_invitie;
