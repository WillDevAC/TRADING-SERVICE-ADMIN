import React, { useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import { FaRegMoneyBillAlt } from "react-icons/fa";

import { Ferrament } from "../../../../components/templates/consultant/ferraments/global";

import ModalDefineRendiment from '../../../../components/molecules/modals/modal_defineRendiment'

const utilities: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);

  return (
    <LayoutFragment title="Minhas utilidades" isBreadcrumb={true} isBack={true}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Ferrament onClick={() => setModalView(true)}>
          <a className="flex items-center w-full max-w-xs mx-auto">
            <div className="w-2/12 mr-2">
              <FaRegMoneyBillAlt size={40} />
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4">
              Definir rendimentos
            </h3>
          </a>
        </Ferrament>
      </div>

      <ModalDefineRendiment modal={modalView} setModal={setModalView} />

    </LayoutFragment>
  );
};

export default utilities;
