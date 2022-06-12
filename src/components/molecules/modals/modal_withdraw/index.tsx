import React, { useCallback, useEffect, useState } from "react";
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
  Label,
  Input,
  Select,
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

interface IDefault {
  id: string;
  description: string;
}

const modal_withdraw: React.FC<IProps> = ({ modal, setModal }) => {
  const [withdrawTypes, setWithdrawTypes] = useState<IDefault[]>(null);
  const [networks, setNetworks] = useState<IDefault[]>(null);
  const [pixKeyType, setPixKeyType] = useState<IDefault[]>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [typeId, setTypeId] = useState("");
  const [pixKeyTypeId, setPixKeyTypeId] = useState("");
  const [networkId, setNetworkId] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [address, setAddress] = useState("");
  const [avaiableAmount, setAvaiableAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const getWithdrawTypes = async () => {
    const response = await api.get("/transaction/withdraw-types", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data) {
      setWithdrawTypes(response.data);
      setTypeId(response.data[0].id);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  const getNetwork = async () => {
    const response = await api.get("/transaction/networks", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data) {
      setNetworks(response.data);
      setNetworkId(response.data[0].id);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  const getPixKeytype = async () => {
    const response = await api.get("/transaction/pix-key-types", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data) {
      setPixKeyType(response.data);
      setPixKeyTypeId(response.data[0].id);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  const load = async () => {
    return await Promise.all([
      getWithdrawTypes(),
      getNetwork(),
      getPixKeytype(),
      getAvaiableAmount(),
    ]);
  };

  useEffect(() => {
    if (typeof window != undefined) {
      load().then(() => {
        setLoading(false);
      });
    }
  }, [typeof window]);

  const viewPixKey = useCallback(() => {
    if (!!withdrawTypes && typeId.length !== 0) {
      const data = withdrawTypes.filter((e) => e.id == typeId);
      if (data[0].description === "pix") return true;
      return false;
    }
    return false;
  }, [typeId]);

  const viewNetworks = useCallback(() => {
    if (!!withdrawTypes && typeId.length !== 0) {
      const data = withdrawTypes.filter((e) => e.id == typeId);
      if (data[0].description === "bitcoin") return true;
      return false;
    }
    return false;
  }, [typeId]);

  const translate = (e: string) => {
    if (e == "document") return "CPF";
    if (e == "random") return "Aleatória";
    if (e == "phone") return "Celular";
    if (e == "email") return "E-mail";
    return e;
  };

  const getAvaiableAmount = async () => {
    const response = await api.get("/transaction/avaiable-amount-consultant", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!response.data?.message) {
      setAvaiableAmount(response.data);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  function getMoney(str) {
    if (!!str) {
      return parseFloat(str?.replace(/[\D]+/g, ""));
    }
    return str;
  }

  const IsInvalidCurency = useCallback(() => {
    if (amount / 100 > avaiableAmount) {
      return true;
    }
    return false;
  }, [amount]);

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

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const response = await api.post(
      "/transaction/request-withdraw-consultant",
      {
        typeId: typeId,
        amount: amount / 100,
        pixKeyTypeId: pixKeyTypeId,
        networkId: networkId,
        pixKey: pixKey,
        address: address,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data?.message) {
      toast.notify("Solicitação de saque enviada!", {
        title: "Sucesso",
      });
      getAvaiableAmount();
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setModal(false)
    setLoading(false);
  };

  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              {/* <div className="pt-5">
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
            </ModalFooter> */}
              {!!withdrawTypes && (
                <Select
                  value={typeId}
                  onChange={(e) => setTypeId(e.target.value)}
                >
                  {withdrawTypes?.map((res) => {
                    return (
                      <option key={res.id} value={res.id}>
                        {res.description.toUpperCase()}
                      </option>
                    );
                  })}
                </Select>
              )}

              {viewPixKey() && (
                <>
                  <Label>Tipo de chave</Label>
                  <Select
                    value={pixKeyTypeId}
                    onChange={(e) => setPixKeyTypeId(e.target.value)}
                  >
                    {pixKeyType?.map((res) => {
                      return (
                        <option key={res.id} value={res.id}>
                          {translate(res.description)}
                        </option>
                      );
                    })}
                  </Select>
                </>
              )}

              {viewNetworks() && (
                <>
                  <Label>Rede da carteira</Label>
                  <Select
                    value={networkId}
                    onChange={(e) => setNetworkId(e.target.value)}
                  >
                    {networks?.map((res) => {
                      return (
                        <option key={res.id} value={res.id}>
                          {res.description}
                        </option>
                      );
                    })}
                  </Select>
                </>
              )}

              <Label>Quantia</Label>
              <Input
                type="text"
                value={formatReal(amount)}
                style={IsInvalidCurency() ? { color: "red" } : {}}
                onChange={(e) => {
                  console.log(getMoney(e.target.value) / 100);
                  setAmount(getMoney(e.target.value));
                }}
                name="amount"
                id="aount"
                required
              />
              <small style={{ marginTop: -20, color: "#707070" }}>
                Valor disponível: {` `}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(avaiableAmount)}
              </small>

              {viewPixKey() && (
                <>
                  <Label>Chave</Label>
                  <Input
                    type="text"
                    value={pixKey}
                    onChange={(e) => setPixKey(e.target.value)}
                    name="pixkey"
                    id="pixkey"
                    required
                  />
                </>
              )}

              {viewNetworks() && (
                <>
                  <Label>Endereço</Label>
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    id="address"
                    required
                  />
                </>
              )}

              <ModalFooter>
                <ButtonDecline onClick={() => setModal(false)}>
                  Cancelar
                </ButtonDecline>
                <ButtonAccept onClick={onSubmit}>Solicitar saque</ButtonAccept>
              </ModalFooter>
            </ModalBody>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_withdraw;
