import React from "react";

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
  Wrapper
} from "../global";

interface IProps {
  modal: boolean;
  setModal: Function;
}

const modal_user: React.FC<IProps> = ({ modal, setModal }) => {
  return (
    <>
      {modal == true && (
        <Modal>
          <ModalOpacity />
          <ModalWrapper>
            <ModalBody>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <Wrapper>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none text-bold">
                        JOSÉ ROBERTO SILVA OLIVEIRA
                      </p>
                      <p className="text-gray-600 pt-5">
                        CPF: 061.306.422-45 - RG: 235489
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </div>
              <div className="pt-5">
                <Label>Patrimonio total</Label>
                <Input type="text" disabled value="xxx" />
              </div>
              <div className="pt-5">
                <Label>Rendimento mensal</Label>
                <Input type="text" disabled value="xxx" />
              </div>
              <div className="pt-5">
                <Label>Status da conta</Label>
                <Input type="text" disabled value="APROVADA" />
              </div>
              <div className="pt-5">
                <Label>Ultimo acesso</Label>
                <Input type="text" disabled value="20/04/2021 : 00:00" />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAccept>Baixar documentação</ButtonAccept>
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

export default modal_user;
