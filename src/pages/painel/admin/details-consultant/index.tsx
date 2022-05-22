import React, { useEffect, useState } from "react";
import LayoutFragment from "../../../../components/layout/admin";
import { toast } from "react-nextjs-toast";
import {
  Wrapper,
  Input,
  Label,
} from "../../../../components/templates/admin/global";
import { api } from "../../../../services/api";
import { useRouter } from "next/router";

interface Data {
  address: string;
  addressNumber: string;
  cep: string;
  cpf: string;
  docBackUrl: string;
  docFrontUrl: string;
  email: string;
  id: string;
  isCnh: boolean;
  isActived: boolean;
  name: string;
  rg: string;
  rateConsultant: string;
  rateConsultantWithdraw: string;
}
const details_consultant: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data>({} as Data);
  const [rateConsultant, setRateConsultant] = useState(0);
  const [rateConsultantWithdraw, setRateConsultantWithdraw] = useState(0);


  const onSubmit = async () => {
    if (loading) return;
    setLoading(true);
    const response = await api.put(
      `/consultant/edit/${data?.id}`,
      {
        rateConsultant: rateConsultant,
        rateConsultantWithdraw: rateConsultantWithdraw
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!!response.data?.id) {
      toast.notify("Dados atualizados!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
    onLoad()
  };


  function RG(v: string) {
    if (!v) return "";
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
  }

  function CPF(cpf: string) {
    if (!cpf) return "";
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const onLoad = async () => {
    const response = await api.get("/consultant/show/" + router.query.id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    setData(response.data);
    setRateConsultant(response.data.rateConsultant);
    setRateConsultantWithdraw(response.data.rateConsultantWithdraw);
  };

  useEffect(() => {
    if (typeof window !== undefined && !!router.query?.id) {
      onLoad();
    }
  }, [typeof window !== undefined && router.query?.id]);

  const aproveUser = async () => {
    setLoading(true);
    const response = await api.put(
      "/consultant/approve/" + data.id,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data.message) {
      toast.notify("Dados atualizados!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
    onLoad()
  };

  const deleteUser = async () => {
    setLoading(true);
    const response = await api.delete("/consultant/delete/" + data.id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!response.data.message) {
      toast.notify("Dados atualizados!", {
        title: "success",
      });
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }

    setLoading(false);
    router.replace('/painel/admin/consultants')
  };

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
            <Input type="text" value={data?.name} disabled required />
          </div>
          <div className="pt-5">
            <Label>Email</Label>
            <Input type="text" value={data?.email} disabled required />
          </div>
          <div className="pt-5">
            <Label>CPF</Label>
            <Input type="text" value={CPF(data?.cpf)} disabled required />
          </div>
          <div className="pt-5">
            <Label>RG</Label>
            <Input type="text" value={RG(data?.rg)} disabled required />
          </div>
          <div className="pt-5">
            <Label>CEP</Label>
            <Input type="text" value={data?.cep} disabled required />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="pt-5">
            <Label>Endereço</Label>
            <Input type="text" value={data?.address} disabled required />
          </div>
          <div className="pt-5">
            <Label>Número</Label>
            <Input type="text" value={data?.addressNumber} disabled required />
          </div>
          <div className="pt-5">
            <Label htmlFor="email">Rendimento (mensal)</Label>
            <Input
              type="number"
              value={rateConsultant}
              disabled={!data?.isActived}
              onChange={(e) => setRateConsultant(e.target.value)}
              required
            />
          </div>
          <div className="pt-5">
            <Label>
              Taxa de saque (sobre o saque dos usuários do consultor)
            </Label>
            <Input
              type="number"
              disabled={!data?.isActived}
              value={rateConsultantWithdraw}
              onChange={(e) => setRateConsultantWithdraw(e.target.value)}
              required
            />
          </div>
          <div className="pt-5 flex">
            <button
              onClick={() => {
                window.open(data.docFrontUrl, "_blank");
              }}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Frente documento
            </button>
            <button
              onClick={() => {
                window.open(data.docBackUrl, "_blank");
              }}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Costas documento
            </button>
          </div>
          <div className="pt-10 flex">
            {data?.isActived ? (
              <button
                type="button"
                onClick={deleteUser}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Excluir conta
              </button>
            ) : (
              <button
                type="button"
                onClick={aproveUser}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Aprovar cadastro
              </button>
            )}
            {!!data?.isActived && (
              <button
                type="button"
                onClick={onSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Salvar alterações
              </button>
            )}
          </div>
        </Wrapper>
      </div>
      <div className={loading ? "loader" : ""} />
    </LayoutFragment>
  );
};

export default details_consultant;
