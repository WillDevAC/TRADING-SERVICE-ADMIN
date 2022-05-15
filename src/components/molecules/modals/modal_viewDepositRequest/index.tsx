import React, { useCallback, useEffect, useState } from "react";
import { DepositData } from "../../../../pages/painel/admin/deposit_requests";

import {
  Modal,
  ModalOpacity,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ButtonDecline,
  ButtonAccept,
  ButtonExclude,
  ButtonDocument,
  Label,
  Input,
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
  request?: DepositData;
}

const modal_view_deposit: React.FC<IProps> = ({ modal, setModal, request }) => {
  const [confirmedValue, setConfirmedValue] = useState(0);
  useEffect(() => {
    if (!!request) {
      setConfirmedValue(
        parseFloat(request?.confirmedAmount) > 0
          ? parseFloat(request?.confirmedAmount)
          : parseFloat(request?.amount)
      );
    }
  }, [request]);

  const getValueBRL = useCallback(() => {
    return (parseFloat(request?.priceBtc) * confirmedValue).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );
  }, [confirmedValue, request]);
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <h2 className="font-bold text-lg">Informações do déposito</h2>
              <div className="pt-5">
                <p>Solicitante: </p>
                <b>{request?.user?.name}</b>
              </div>

              <div className="pt-5">
                <p>Valor solicitado: </p>
                <b>{request?.amount + " BTC"}</b>
              </div>

              <div className="pt-5">
                <p>Preço do BTC quando solicitado: </p>
                <b>
                  {parseFloat(request?.priceBtc).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </b>
              </div>

              <div className="pt-5">
                <p>Valor em Reais: </p>
                <b>{getValueBRL()}</b>
              </div>

              <div className="pt-5">
                <Label>Valor confirmado em BTC</Label>
                <Input
                  type="number"
                  onChange={(e) => setConfirmedValue(e.target.value)}
                  disabled={
                    request.status.description === "pending" ? false : true
                  }
                  value={confirmedValue}
                />
              </div>

              <div className="pt-5">
                <p>Comprovante: </p>
                <div className="pt-5">
                  <ButtonDocument onClick={()=>{
                       window.open(request?.receiptUrl, '_blank')
                  }}>Ver comprovante</ButtonDocument>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              {request.status.description === "pending" && (
                <ButtonAccept>Aceitar</ButtonAccept>
              )}
              {request.status.description === "pending" && (
                <ButtonExclude>Recusar</ButtonExclude>
              )}
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_view_deposit;
