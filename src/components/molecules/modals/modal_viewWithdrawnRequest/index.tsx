import React from "react";
import { RequestWithdraw } from "../../../../pages/painel/admin/withdrawn-requests";

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
  request?: RequestWithdraw
}

const modal_view_withdrawn: React.FC<IProps> = ({ modal, setModal, request }) => {
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
                <b>{request.user.name}</b>
              </div>

              <div className="pt-5">
                <p>Tipo de saque: </p>
                <b>{request?.type.description}</b>
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
