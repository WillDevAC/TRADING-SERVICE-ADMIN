import React, { useEffect, useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import TableFooter from "../../../../components/molecules/table/footer";
import TableHeader from "../../../../components/molecules/table/header";

import Router from "next/router";

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
  Button,
  WithdrawButton,
} from "../../../../components/molecules/table/global";
import { api } from "../../../../services/api";
import { data } from "browserslist";

interface Consultant {
  id: string;
  email: string;
  name: string;
  cpf?: string;
  isActived: boolean;
  isEmailSent: boolean;
  isEmailApprovedSent: boolean;
  isMaster: boolean;
  countUsers: number;
  walletUsersAmount: number;
  rateConsultant: string;
  rateConsultantWithdraw: string;
  wallet: {
    id: string;
    amount: number;
    locked: number;
  }[];
}
const Investors: React.FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const take = 10;
  const onLoad = async () => {
    const response = await api.get(
      `/consultant/all?take=${take}&skip=${skip * take}&search=${search}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data?.message) {
      setConsultants(response.data.data);
      setCount(Math.ceil(response.data.count / take));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      onLoad();
    }
  }, [typeof window, skip, search]);
  return (
    <LayoutFragment
      title="Lista de consultores"
      isBreadcrumb={true}
      isBack={true}
    >
      <TableHeader search={search} setSearch={setSearch} />
      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Nome</ColumnTh>
                      <ColumnTh scope="col">Email</ColumnTh>
                      <ColumnTh scope="col">Carteira</ColumnTh>
                      <ColumnTh scope="col">
                        Valor disponível para saque
                      </ColumnTh>
                      <ColumnTh scope="col">Taxa mensal</ColumnTh>
                      <ColumnTh scope="col">Taxa no saque</ColumnTh>
                      <ColumnTh scope="col">Convidados</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    {consultants.map((res, i) => {
                      return (
                        <Row key={i}>
                          <ColumnTd>{res.name}</ColumnTd>
                          <ColumnTd>{res.email}</ColumnTd>
                          <ColumnTd>
                            {res.walletUsersAmount.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </ColumnTd>
                          <ColumnTd>
                            {" "}
                            {(!!res.wallet && res.wallet.length !== 0
                              ? res.wallet[0].amount
                              : 0
                            ).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </ColumnTd>
                          <ColumnTd>{res.rateConsultant + '%'}</ColumnTd>
                          <ColumnTd>{res.rateConsultantWithdraw + '%'}</ColumnTd>
                          <ColumnTd>{res.countUsers}</ColumnTd>
                          <ColumnTd>
                            <Button
                              onClick={() =>
                                Router.push("details-consultant?id=" + res.id)
                              }
                            >
                              Ver detalhes
                            </Button>
                            <span
                                style={{
                                  padding: 10,
                                  borderRadius: 4,
                                  marginLeft: 8,
                                  border: "solid",
                                  borderWidth: 1,
                                }}
                              >
                                {res.isActived ? "APROVADO" : "PENDENTE"}
                              </span>
                          </ColumnTd>
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
          count={consultants.length}
          take={take}
          skip={skip}
          setSkip={setSkip}
        />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Investors;
