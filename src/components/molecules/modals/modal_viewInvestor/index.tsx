import React from "react";
import { User } from "../../../../pages/painel/admin/investors";

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
  user?:User
}

const modal_editInvestor: React.FC<IProps> = ({ modal, setModal, user }) => {
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
                        {user?.name}
                      </p>
                      <p className="text-gray-600 pt-5">
                        CPF: {user?.cpf} - RG: {user?.rg}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </div>
              <div className="pt-5">
                <Label>Patrimonio total</Label>
                <Input type="text" disabled value={formatReal(user?.wallet[0]?.amount)} />
              </div>
              <div className="pt-5">
                <Label>Rendimento mensal</Label>
                <Input type="text" disabled value={user?.rateMonth+ '%'}/>
              </div>
              <div className="pt-5">
                <Label>Status da conta</Label>
                <Input type="text" disabled value={!!user?.isActived ? "APROVADA": "PENDENTE"} />
              </div>
            </ModalBody>
            <ModalFooter>
              <ButtonAccept onClick={()=>{
                window.open(user?.docFrontUrl, '_blank')
              }}>Frente </ButtonAccept>
                <ButtonAccept onClick={()=>{
                window.open(user?.docBackUrl, '_blank')
              }}>Verso</ButtonAccept>
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

export default modal_editInvestor;
