import React from "react";

import LayoutFragment from "../../../../components/layout/admin";

import {
  Wrapper,
  Input,
  Label,
} from "../../../../components/templates/admin/global";

const details_consultant: React.FC = () => {
  return (
    <LayoutFragment
      title="Visualizar consultor"
      isBreadcrumb={true}
      isBack={true}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Wrapper>
          <div className="pt-5">
            <Label htmlFor="email">Nome completo</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label>Email</Label>
            <Input type="password" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label>CPF</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label>RG</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label>CEP</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="pt-5">
            <Label>Endereço</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label htmlFor="email">Rendimento (mensal)</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5">
            <Label>Rendimento (diário)</Label>
            <Input type="text" placeholder="xxx" disabled required />
          </div>
          <div className="pt-5 flex">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Frente documento
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Costas documento
            </button>
          </div>
          <div className="pt-10 flex">
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Excluir conta</button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Editar conta</button>
          </div>
        </Wrapper>
      </div>
    </LayoutFragment>
  );
};

export default details_consultant;
