import React, { useState } from "react";

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

const Investors: React.FC = () => {
  return (
    <LayoutFragment
      title="Lista de consultores"
      isBreadcrumb={true}
      isBack={true}
    >
      <TableHeader />
      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Nome</ColumnTh>
                      <ColumnTh scope="col">Carteira</ColumnTh>
                      <ColumnTh scope="col">Comissão</ColumnTh>
                      <ColumnTh scope="col">Saques</ColumnTh>
                      <ColumnTh scope="col">Convidados</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>JOSE SANTOS DA ROCHA</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>0</ColumnTd>
                      <ColumnTd>0</ColumnTd>
                      <ColumnTd>
                        <Button onClick={() => Router.push('details-consultant')}>Ver detalhes</Button>
                      </ColumnTd>
                    </Row>
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>

        <TableFooter />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Investors;
