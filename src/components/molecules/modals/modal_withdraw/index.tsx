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

const modal_withdraw: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>* Método de saque</Label>
                <Select>
                  <option>PIX</option>
                  <option>Bitcoin</option>
                </Select>
              </div>

              <div className="pt-5">
                <Label>* Valor</Label>
                <Input type="text" name="email" />
              </div>

              <div className="pt-5">
                <Label>* Chave/carteira</Label>
                <Input type="text" name="email" />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Cancelar
              </ButtonDecline>
              <ButtonAccept onClick={() => {}}>Solicitar saque</ButtonAccept>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_withdraw;
