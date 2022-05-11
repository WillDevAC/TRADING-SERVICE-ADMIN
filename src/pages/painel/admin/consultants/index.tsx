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

const Investors: React.FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>('')
  const take = 10
  const onLoad = async () => {
    const response = await api.get("/consultant/all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    console.log('fsddsf',response)
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      onLoad();
    }
  }, [typeof window]);
  return (
    <LayoutFragment
      title="Lista de consultores"
      isBreadcrumb={true}
      isBack={true}
    >
      <TableHeader  search={search} setSearch={setSearch}  />
      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Nome</ColumnTh>
                      <ColumnTh scope="col">email</ColumnTh>
                      <ColumnTh scope="col">carteira</ColumnTh>
                      <ColumnTh scope="col">valor disponível para saque</ColumnTh>
                      <ColumnTh scope="col">Convidados</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>JOSE SANTOS DA ROCHA</ColumnTd>
                      <ColumnTd>as@gmail.com</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>0</ColumnTd>
                      <ColumnTd>
                        <Button
                          onClick={() => Router.push("details-consultant")}
                        >
                          Ver detalhes
                        </Button>
                      </ColumnTd>
                    </Row>
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>

        <TableFooter count={count} take={take} skip={skip} setSkip={setSkip}/>
      </Wrapper>
    </LayoutFragment>
  );
};

export default Investors;
