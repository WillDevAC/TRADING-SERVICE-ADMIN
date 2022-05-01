import React from "react";

import LayoutFragment from "../../../components/layout/admin";
import CardDetails from '../../../components/molecules/cards';

const HomeAdministrator: React.FC = () => {
  return (
    <>
      <LayoutFragment title="Dashboard" isBreadcrumb={false} isBack={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <CardDetails title="Consultores" value={0.00} icon='/icons/consultores.svg'/>
          <CardDetails title="Investidores" value={0.00} icon='/icons/investidores.svg'/>
          <CardDetails title="Solicitações de déposito" value={0} icon='/icons/entradas.svg'/>
          <CardDetails title="Solicitações de saque" value={0} icon='/icons/saida.svg'/>
          <CardDetails title="Carteira geral" value={0} icon='/icons/carteira.svg'/>
          <CardDetails title="Chats iniciados" value={0} icon='/icons/chat.svg'/>
          
        </div>
      </LayoutFragment>
    </>
  );
};

export default HomeAdministrator;
