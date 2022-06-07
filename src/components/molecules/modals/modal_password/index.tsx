import React, { useState } from "react";
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
} from "../global";
import { toast } from "react-nextjs-toast";
interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_password: React.FC<IProps> = ({ modal, setModal }) => {
  const [password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    if (password !== CPassword) {
      return toast.notify("Senhas não coincidem", {
        title: "error",
      });
    }

    if (loading) return;
    setLoading(true);

    const response = await api.put(
      "/consultant/edit-password",
      {
        password: password,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data?.message) {
      toast.notify("Senha alterada!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setModal(false);
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
                <Label>Nova senha </Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="pt-5">
                <Label>Confirmar nova senha </Label>
                <Input
                  type="password"
                  value={CPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              <ButtonAccept onClick={onSubmit}>Mudar senha</ButtonAccept>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_password;
