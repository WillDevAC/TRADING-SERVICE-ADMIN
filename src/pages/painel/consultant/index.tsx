import React from "react";

import LayoutFragment from "../../../components/layout/consultant";
import CardDetails from '../../../components/molecules/cards';

const consultor: React.FC = () => {
  return (
    <>
      <LayoutFragment title="Dashboard" isBreadcrumb={false} isBack={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <CardDetails title="Comissão disponivel" value={0.00} icon='/icons/saldo.svg'/>
          <CardDetails title="Saldo bloqueado" value={0} icon='/icons/bloqueado.svg'/>
          <CardDetails title="Meus convidados" value={0} icon='/icons/convidados.svg'/>
          <CardDetails title="Saques do mês" value={0} icon='/icons/saques.svg'/>
          
        </div>
      </LayoutFragment>
    </>
  );
};

export default consultor;
