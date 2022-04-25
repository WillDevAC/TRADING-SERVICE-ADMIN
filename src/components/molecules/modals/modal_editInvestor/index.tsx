import React from "react";

import {
  Modal,
  ModalOpacity,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ButtonAccept,
  ButtonDecline,
  ButtonExclude,
  Label,
  Input,
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_EditInvestor: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>Nome completo</Label>
                <Input type="text" value="xxx" />
              </div>
              <div className="pt-5">
                <Label>CPF</Label>
                <Input type="text" value="xxx" />
              </div>
              <div className="pt-5">
                <Label>RG</Label>
                <Input type="text" value="xxx" />
              </div>
              <div className="pt-5">
                <Label>Endereço</Label>
                <Input type="text" value="xxx" />
              </div>
              <div className="pt-5">
                <Label>Patrimonio</Label>
                <Input type="text" value="0.00" />
              </div>
              <div className="pt-5">
                <Label>Rendimento mensal</Label>
                <Input type="text" value="0%" />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAccept onClick={() => setModal(false)}>
                Salvar
              </ButtonAccept>
              <ButtonExclude onClick={() => setModal(false)}>
                Fechar conta
              </ButtonExclude>
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

export default modal_EditInvestor;
