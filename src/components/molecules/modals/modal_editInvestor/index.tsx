import React, { useEffect, useState } from "react";
import { User } from "../../../../pages/painel/admin/investors";
import { api } from "../../../../services/api";
import { toast } from "react-nextjs-toast";
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
  user?: User;
}

const modal_EditInvestor: React.FC<IProps> = ({ modal, setModal, user }) => {
  const [rate, setRate] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setRate(user?.rateMonth);
  }, [user]);
  function CPF(cpf: string) {
    cpf = cpf?.replace(/[^\d]/g, "");
    return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function RG(v) {
    v = v?.replace(/\D/g, "");
    v = v?.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }

  function formatReal(int) {
    if (!int) {
      int = 0;
    }
    var tmp = int + "";
    var v: any = parseFloat(tmp.replace(/\D/g, ""));
    v = (v / 100).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    return "R$ " + v;
  }

  const onSubmit = async () => {
    if (loading) return;
    setLoading(true);
    const response = await api.put(
      `/user/edit/${user?.id}`,
      {
        rateMonth: rate,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!!response.data?.id) {
      toast.notify("Dados atualizados!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
  };

  const aproveUser = async () => {
    setLoading(true);
    const response = await api.put(
      "/user/approve/" + user.id,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data.message) {
      toast.notify("Dados atualizados!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
  };

  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="pt-5">
                <Label>Nome completo</Label>
                <Input type="text" disabled value={user?.name} />
              </div>
              <div className="pt-5">
                <Label>CPF</Label>
                <Input type="text" disabled value={CPF(user?.cpf)} />
              </div>
              <div className="pt-5">
                <Label>RG</Label>
                <Input type="text" disabled value={RG(user?.rg)} />
              </div>
              <div className="pt-5">
                <Label>Endereço</Label>
                <Input
                  type="text"
                  disabled
                  value={user?.address + ", " + user?.addressNumber}
                />
              </div>
              <div className="pt-5">
                <Label>Patrimonio</Label>
                <Input
                  type="text"
                  disabled
                  value={formatReal(user?.wallet[0]?.amount.toFixed(2))}
                />
              </div>
              <div className="pt-5">
                <Label>Rendimento mensal (%)</Label>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              {user?.isActived ? (
                <ButtonAccept
                  onClick={() => {
                    onSubmit();
                    setModal(false);
                  }}
                >
                  Salvar
                </ButtonAccept>
              ) : (
                <ButtonAccept
                  onClick={() => {
                    aproveUser();
                    setModal(false);
                  }}
                >
                  Aprovar usuário
                </ButtonAccept>
              )}
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

export default modal_EditInvestor;
