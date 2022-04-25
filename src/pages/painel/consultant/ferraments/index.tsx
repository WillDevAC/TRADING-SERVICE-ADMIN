import React, { useState } from "react";

import LayoutFragment from "../../../../components/layout/consultant";

import { AiOutlineLink } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";

import { Ferrament } from "../../../../components/templates/consultant/ferraments/global";

import Modal_Invitie from '../../../../components/molecules/modals/modal_invitie'
import Modal_Password from '../../../../components/molecules/modals/modal_password'

const ferraments: React.FC = () => {
  
  const [modalInvitie, setModalInvitie] = useState<boolean>(false);
  const [modalPassword, setModalPassword] = useState<boolean>(false)

  return (
    <>
      <LayoutFragment title="Ferramentas" isBreadcrumb={true} isBack={true}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Ferrament>
            <a className="flex items-center w-full max-w-xs mx-auto" onClick={() => setModalInvitie(true)}>
              <div className="w-2/12 mr-2">
                <AiOutlineLink size={40} />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4">
                Gerar link de convite
              </h3>
            </a>
          </Ferrament>

          <Ferrament>
            <a className="flex items-center w-full max-w-xs mx-auto" onClick={() => setModalPassword(true)}>
              <div className="w-2/12 mr-2">
                <Si1Password size={40} />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4">
                Alterar senha
              </h3>
            </a>
          </Ferrament>
          <Ferrament>
            <a className="flex items-center w-full max-w-xs mx-auto">
              <div className="w-2/12 mr-2">
                <FaHandsHelping size={40} />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4">
                Suporte
              </h3>
            </a>
          </Ferrament>

          <Modal_Invitie modal={modalInvitie} setModal={setModalInvitie} />
          <Modal_Password modal={modalPassword} setModal={setModalPassword}/>

        </div>
      </LayoutFragment>
    </>
  );
};

export default ferraments;
