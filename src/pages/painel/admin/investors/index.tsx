import React, { useEffect, useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import TableFooter from "../../../../components/molecules/table/footer";
import TableHeader from "../../../../components/molecules/table/header";

import ModalViewInvestor from "../../../../components/molecules/modals/modal_viewInvestor";
import ModalEditInvestor from "../../../../components/molecules/modals/modal_editInvestor";

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
} from "../../../../components/molecules/table/global";
import { api } from "../../../../services/api";

export interface User {
  id: string;
  email: string;
  name: string;
  cpf: string;
  rg: string;
  cep: string;
  birthDate: string;
  address: string;
  addressNumber: string;
  docFrontUrl: string;
  docBackUrl: string;
  consultantId: string;
  isActived: boolean;
  isCnh: boolean;
  isEmailSent: boolean;
  isEmailApprovedSent: boolean;
  rateMonth: number;
  wallet: {
    id: string;
    amount: number;
    locked: number;
  }[];
}

const Investors: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [count, setCount] = useState(0);
  const take = 10;
  const onLoad = async () => {
    const response = await api.get(
      `/user/all?take=${take}&skip=${skip}&search=${search}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );

    if (!response.data?.message) {
      setUsers(response.data.data);
      setCount(Math.ceil(response.data.count / take));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      onLoad();
    }
  }, [typeof window, skip, search, modalEdit]);

  return (
    <LayoutFragment
      title="Lista de investidores"
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
                      <ColumnTh scope="col">Nome do investidor</ColumnTh>
                      <ColumnTh scope="col">Email</ColumnTh>
                      <ColumnTh scope="col">Patrimonio</ColumnTh>
                      <ColumnTh scope="col">Rendimento (Mensal)</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    {users.map((res, i) => {
                      return (
                        <Row key={i}>
                          <ColumnTd>{res.name}</ColumnTd>
                          <ColumnTd>{res.email}</ColumnTd>
                          <ColumnTd>
                            {res.wallet[0].amount.toLocaleString(
                              "pt-BR",
                              { style: "currency", currency: "BRL" }
                            )}
                          </ColumnTd>
                          <ColumnTd>{res.rateMonth}%</ColumnTd>
                          <ColumnTd>
                            <Button
                              onClick={() => {
                                setUserId(res.id);
                                setModalView(true);
                              }}
                            >
                              Detalhes
                            </Button>
                            <Button
                              onClick={() =>
                                Router.push("extract-investor?id=" + res.id)
                              }
                            >
                              Extrato
                            </Button>
                            <Button
                              onClick={() => {
                                setUserId(res.id);
                                setModalEdit(true);
                              }}
                            >
                              Editar
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

        <TableFooter count={count} take={take} skip={skip} setSkip={setSkip} />

        <ModalViewInvestor
          user={
            !!userId && userId.length !== 0
              ? users.find((e) => e.id === userId)
              : undefined
          }
          modal={modalView}
          setModal={setModalView}
        />
        <ModalEditInvestor
          user={
            !!userId && userId.length !== 0
              ? users.find((e) => e.id === userId)
              : undefined
          }
          modal={modalEdit}
          setModal={setModalEdit}
        />
      </Wrapper>

      <div className={loading ? "loader" : ""} />
    </LayoutFragment>
  );
};

export default Investors;
