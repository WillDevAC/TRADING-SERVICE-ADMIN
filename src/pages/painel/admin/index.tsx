import React, { useEffect, useState } from "react";
import { toast } from "react-nextjs-toast";
import LayoutFragment from "../../../components/layout/admin";
import CardDetails from "../../../components/molecules/cards";
import { api } from "../../../services/api";

const HomeAdministrator: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState({
    amountTotal: 0,
    countConsultant: 0,
    countDeposit: 0,
    countUser: 0,
    countWithdraw: 0,
  });
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

  const onLoad = async () => {
    setLoading(true)
    const response = await api.get("/admin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response.data?.countUser || response.data?.countUser == 0) {
      setData(response.data)
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof window != undefined) {
      onLoad();
    }
  }, [typeof window]);
  return (
    <>
      <LayoutFragment title="Dashboard" isBreadcrumb={false} isBack={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CardDetails
            title="Consultores"
            value={data.countConsultant}
            icon="/icons/consultores.svg"
          />
          <CardDetails
            title="Investidores"
            value={data.countUser}
            icon="/icons/investidores.svg"
          />
          <CardDetails
            title="Solicitações de déposito"
            value={data.countDeposit}
            icon="/icons/entradas.svg"
          />
          <CardDetails
            title="Solicitações de saque"
            value={data.countWithdraw}
            icon="/icons/saida.svg"
          />
          <CardDetails
            title="Carteira geral"
            value={formatReal(data.amountTotal.toFixed(2))}
            icon="/icons/carteira.svg"
          />
          <CardDetails
            title="Chats iniciados"
            value={0}
            icon="/icons/chat.svg"
          />
        </div>
      </LayoutFragment>
      <div className={loading ? "loader" : ""} />
    </>
  );
};

export default HomeAdministrator;
