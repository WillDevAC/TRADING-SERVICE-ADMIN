import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

const modal_invitie: React.FC<IProps> = ({ modal, setModal }) => {
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setValue(
        "https://goexch-front.vercel.app/register?ref=" +
          localStorage.getItem("@userId")
      );
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
                <Label>Seu link de convite: </Label>
                <Input
                  type="text"
                  name="link"
                  placeholder={value}
                  disabled
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonDecline onClick={() => setModal(false)}>
                Fechar
              </ButtonDecline>
              <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                <ButtonAccept onClick={() => setCopied(true)}>{copied ? 'Copiado' : 'Copiar'}</ButtonAccept>
              </CopyToClipboard>
            </ModalFooter>
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default modal_invitie;
