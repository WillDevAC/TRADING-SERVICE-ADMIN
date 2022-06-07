import React, { useEffect, useState } from "react";

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
import { toast } from "react-nextjs-toast";
import TableFooter from "../../../../components/molecules/table/footer";

import CardDetails from "../../../../components/molecules/cards";

import LayoutFragment from "../../../../components/layout/consultant";
import { api } from "../../../../services/api";
import { useRouter } from "next/router";
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

const extract: React.FC = () => {
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
      `/statement/${query?.id}?take=${take}&skip=${skip * take}`,
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
    if (typeof window !== undefined && !!query?.id)  {
      onLoad();
    }
  }, [typeof window, query, skip]);
  return (
    <LayoutFragment
      title="Extrato individual"
      isBreadcrumb={true}
      isBack={true}
    >
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CardDetails title="Entradas" value={0.0} icon="/icons/saldo.svg" />
        <CardDetails title="Saidas" value={0.0} icon="/icons/saldo.svg" />
      </div> */}
      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Data/hora</ColumnTh>
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

export default extract;
