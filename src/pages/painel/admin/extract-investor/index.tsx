import React from "react";

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

import TableFooter from "../../../../components/molecules/table/footer";

import CardDetails from '../../../../components/molecules/cards';

import LayoutFragment from "../../../../components/layout/consultant";

const extract: React.FC = () => {
  return (
    <LayoutFragment title="Extrato individual" isBreadcrumb={true} isBack={true}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CardDetails title="Entradas" value={0.00} icon='/icons/saldo.svg'/>
        <CardDetails title="Saidas" value={0.00} icon='/icons/saldo.svg'/>
      </div>
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
                      <ColumnTh scope="col">Status da operação</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>15/03/2019</ColumnTd>
                      <ColumnTd>Déposito</ColumnTd>
                      <ColumnTd>+R$20.00</ColumnTd>
                      <ColumnTd>
                        <Badge color="bg-green-600">Finalizada</Badge>
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

export default extract;
