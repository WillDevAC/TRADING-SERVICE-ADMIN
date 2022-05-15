import React, { useEffect, useState } from "react";
import { RequestWithdraw } from "../../../../pages/painel/admin/withdrawn-requests";
import { api } from "../../../../services/api";
import { toast } from "react-nextjs-toast";
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
  request?: RequestWithdraw;
}

const modal_view_withdrawn: React.FC<IProps> = ({
  modal,
  setModal,
  request,
}) => {
  const [confirmedValue, setConfirmedValue] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if(!!request){
      setConfirmedValue(request?.confirmedAmount > 0 ? request?.confirmedAmount : request?.amount);
    }

  }, [request]);

  const approve = async () => {
    setLoading(true);
    const response = await api.put(
      "/transaction/request-withdraw/approve",
      {
        confirmedAmount: confirmedValue,
        requestWithdrawId: request.id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response?.data?.message) {
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
    setModal(false)
  };

  const reject = async () =>{
    setLoading(true);
    const response = await api.put(
      "/transaction/request-withdraw/reject",
      {
        requestWithdrawId: request.id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response?.data?.message) {
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
    setModal(false)
  }
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
                <b>
                  {request?.type.description.toUpperCase()} -{" "}
                  {request?.type.description === "bitcoin"
                    ? "Rede da " + request.network.description
                    : request.pixKeyType.description}
                </b>
              </div>

              <div className="pt-5">
                <p>Valor solicitado: </p>
                <b>
                  {request?.amount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </b>
              </div>

              <div className="pt-5">
                <p>
                  {request?.type.description === "bitcoin"
                    ? "Carteira"
                    : "Chave"}
                  :{" "}
                </p>
                <b>
                  {request?.type.description === "bitcoin"
                    ? request.address
                    : request.pixKey}
                </b>
              </div>

              <div className="pt-5">
                <Label>Valor confirmado</Label>
                <Input
                  type="number"
                  onChange={(e) => setConfirmedValue(e.target.value)}
                  disabled={
                    request.status.description === "pending" ? false : true
                  }
                  value={confirmedValue}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              {request.status.description === "pending" && (
                <ButtonAccept onClick={approve}>Aceitar</ButtonAccept>
              )}
              {request.status.description === "pending" && (
                <ButtonExclude onClick={reject}>Recusar</ButtonExclude>
              )}
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
      <div className={loading ? "loader" : ""} />
    </>
  );
};

export default modal_view_withdrawn;
