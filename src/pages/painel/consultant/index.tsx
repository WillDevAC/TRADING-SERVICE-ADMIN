import React, { useEffect, useState } from "react";

import LayoutFragment from "../../../components/layout/consultant";
import CardDetails from "../../../components/molecules/cards";
import { api } from "../../../services/api";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface DataProps {
  amount: number;
  lockedAmount: number;
  invites: number;
  walletsUsersAmount: number;
}
const consultor: React.FC = () => {
  const [data, setData] = useState<DataProps>({
    amount: 0,
    invites: 0,
    lockedAmount: 0,
    walletsUsersAmount: 0
  } as DataProps);
  
  const onLoad = async () => {
    const response = await api.get("/consultant-info", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!response.data?.message) {
      setData(response.data);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      onLoad();
    }
  }, [typeof window]);

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
      <LayoutFragment title="Dashboard" isBreadcrumb={false} isBack={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CardDetails
            title="Saldo disponivel"
            value={formatReal(data.amount.toFixed(2))}
            icon="/icons/saldo.svg"
          />
          <CardDetails
            title="Saldo bloqueado"
            value={formatReal(data.lockedAmount.toFixed(2))}
            icon="/icons/bloqueado.svg"
          />
          <CardDetails
            title="Meus convidados"
            value={data.invites}
            icon="/icons/convidados.svg"
          />
          <CardDetails title="Soma das carteiras dos convidados" value={formatReal(data?.walletsUsersAmount?.toFixed(2))} icon='/icons/saques.svg'/>
        </div>
      </LayoutFragment>
    </>
  );
};



export default consultor;
