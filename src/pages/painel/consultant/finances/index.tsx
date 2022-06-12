import React, { useCallback, useEffect, useState } from "react";

import LayoutFragment from "../../../../components/layout/consultant";
import Card_Relatory from "../../../../components/templates/consultant/finances/card";

import TableFooter from "../../../../components/molecules/table/footer";

import Modal from "../../../../components/molecules/modals/modal_withdraw";

import {
  Table,
  TableWrapper,
  Wrapper,
  ColumnTh,
  ColumnTd,
  Content,
  BoxTable,
  Row,
  TableResponsive,
  TableHead,
  TableBody,
  Badge,
  WithdrawButton,
} from "../../../../components/molecules/table/global";
import { useRouter } from "next/router";
import { api } from "../../../../services/api";
import { toast } from "react-nextjs-toast";
import dayjs from "dayjs";

interface IStatement {
  id: string;
  amount: number;
  oldAmount: number;
  createdAt: string;
  type: {
    id: string;
    description: string;
  };
}

interface DataProps {
  amount: number;
  lockedAmount: number;
  invites: number;
  walletsUsersAmount: number;
}

const Finances: React.FC = () => {
  const [data, setData] = useState<DataProps>({
    amount: 0,
    invites: 0,
    lockedAmount: 0,
    walletsUsersAmount: 0,
  } as DataProps);
  const onLoadInfo = async () => {
    const response = await api.get("/consultant-info", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!response.data?.message) {
      setData(response.data);
    }
  };

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

  useEffect(() => {
    if (typeof window !== undefined) {
      onLoadInfo();
    }
  }, [typeof window]);

  const [modal, setModal] = useState<boolean>(false);
  const { query } = useRouter();
  const [count, setCount] = useState(0);
  const take = 10;
  const [skip, setSkip] = useState(0);
  const [statement, setStatement] = useState<IStatement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const tranlate = (e: string, isPlural?: boolean) => {
    if (e == "deposit") return String("Depósito" + (!!isPlural ? "s" : ""));
    if (e == "reward") return String("Rendimento" + (!!isPlural ? "s" : ""));
    if (e == "withdraw") return String("Saque" + (!!isPlural ? "s" : ""));
    return "";
  };

  const onLoad = async () => {
    setLoading(true);
    const response = await api.get(
      `/statement/consultant?take=${take}&skip=${skip * take}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!!response?.data) {
      setStatement(response.data.data);
      setCount(response.data.count / 5);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      onLoad();
    }
  }, [typeof window, query, skip]);

  return (
    <LayoutFragment title="Financeiro" isBreadcrumb={true} isBack={true}>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card_Relatory
          title="Soma das carteiras dos convidados"
          value={formatReal(data.walletsUsersAmount.toFixed(2))}
          isColor="border-green-400"
        />

        <Card_Relatory
          title="Convidados"
          value={data.invites}
          isColor="border-gray-400"
        />
        <Card_Relatory
          title="Valor disponivel para saque"
          value={formatReal((data.amount - data.lockedAmount).toFixed(2))}
          isColor="border-yellow-900"
        />
        <Card_Relatory
          title="Valor bloqueado"
          value={formatReal(data.lockedAmount.toFixed(2))}
          isColor="border-yellow-400"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between mt-8">
        <span className="flex sm:w-auto w-full sm:mt-0 mt-4 justify-end">
          <WithdrawButton onClick={() => setModal(true)}>
            Efetuar saque
          </WithdrawButton>
        </span>
      </div>

      <Modal modal={modal} setModal={setModal} />

      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Data</ColumnTh>
                      <ColumnTh scope="col">Operação</ColumnTh>
                      <ColumnTh scope="col">Valor</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    {statement.map((res) => {
                      return (
                        <Row>
                          <ColumnTd>
                            {" "}
                            {dayjs(res.createdAt)
                              .format("DD/MM/YYYY")
                              .toString()}
                          </ColumnTd>
                          <ColumnTd> {tranlate(res.type.description)}</ColumnTd>
                          <ColumnTd>
                            {" "}
                            {(res.amount - res.oldAmount).toLocaleString(
                              "pt-BR",
                              { style: "currency", currency: "BRL" }
                            )}
                          </ColumnTd>
                          <ColumnTd></ColumnTd>
                        </Row>
                      );
                    })}
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>

        <TableFooter
          count={statement?.length}
          setSkip={setSkip}
          skip={skip}
          take={take}
        />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Finances;
