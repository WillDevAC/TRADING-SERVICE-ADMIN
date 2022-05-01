import React from "react";

import {
  Modal,
  ModalOpacity,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ButtonDecline,
  ButtonAccept,
  ButtonExclude,
  ButtonDocument
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_view_withdrawn: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <h2 className="font-bold text-lg">Informações do saque</h2>
              <div className="pt-5">
                <p>Solicitante: </p>
                <b>Wydenmairion silva da rocha</b>
              </div>

              <div className="pt-5">
                <p>Saldo atual: </p>
                <b>R$ 0.00</b>
              </div>

              <div className="pt-5">
                <p>Valor solicitado: </p>
                <b>R$ +0.00</b>
              </div>

              <div className="pt-5">
                <p>Chave/carteira: </p>
                <b>...</b>
              </div>

              
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>Fechar</ButtonDecline>
              <ButtonAccept>Aceitar</ButtonAccept>
              <ButtonExclude>Recusar</ButtonExclude>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_view_withdrawn;
