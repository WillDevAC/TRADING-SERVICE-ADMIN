import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";

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
  Wrapper,
} from "../global";
import { toast } from "react-nextjs-toast";
interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_define_rendiment: React.FC<IProps> = ({ modal, setModal }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [rate, setRate] = useState<number>(0);
  const [rateConsultant, setRateConsultant] = useState<number>(0);
  const [rateConsultantWithdraw, setRateConsultantWithdraw] = useState<number>(0)
  const onSubmit = async () => {
    setLoading(true);
    const response = await api.put("/config-edit", {
      rateMonth: rate,
      rateConsultant: rateConsultant,
      rateConsultantWithdraw: rateConsultantWithdraw
    },{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!response.data?.id) {
      toast.notify(response.data?.message, {
        title: "error",
      });
    } else {
      toast.notify("Dados atualizados com sucesso!", {
        title: "error",
      });
    }
    setLoading(false);
  };

  const onLoad = async () => {
    setLoading(true);
    const response = await api.get("/admin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data?.rateMonth || response.data?.rateMonth == 0) {
      setRate(response.data.rateMonth);
      setRateConsultant(response.data.rateConsultant)
      setRateConsultantWithdraw(response.data.rateConsultantWithdraw)
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof window != undefined) {
      onLoad();
    }
  }, [typeof window]);

  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>Rendimento mensal do cliente</Label>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div className="pt-5">
                <Label>Rendimento mensal do consultor</Label>
                <Input
                  type="number"
                  value={rateConsultant}
                  onChange={(e) => setRateConsultant(e.target.value)}
                />
              </div>

              <div className="pt-5">
                <Label>Rendimento sobre o saque do cliente para o consultor</Label>
                <Input
                  type="number"
                  value={rateConsultantWithdraw}
                  onChange={(e) => setRateConsultantWithdraw(e.target.value)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAccept
                onClick={() => {
                  onSubmit();
                  setModal(false);
                }}
              >
                Atualizar
              </ButtonAccept>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
      <div className={loading ? "loader" : ""} />
    </>
  );
};

export default modal_define_rendiment;
