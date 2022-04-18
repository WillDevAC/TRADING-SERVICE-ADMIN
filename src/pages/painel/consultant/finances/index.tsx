import React, { useState } from "react";

import LayoutFragment from "../../../../components/layout";
import Card_Relatory from "../../../../components/templates/finances/card";

import TableFooter from "../../../../components/molecules/table/footer";

import Modal from '../../../../components/molecules/modals/modal_withdraw'

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

const Finances: React.FC = () => {

  const [modal, setModal] = useState<boolean>(false);

  return (
    <LayoutFragment title="Financeiro" isBreadcrumb={true} isBack={true}>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card_Relatory
          title="Carteira geral"
          value={0.0}
          isColor="border-green-400"
        />
        <Card_Relatory
          title="Comissões"
          value={0.0}
          isColor="border-yellow-400"
        />
        <Card_Relatory
          title="Convidados"
          value={0.0}
          isColor="border-gray-400"
        />
        <Card_Relatory
          title="Valor disponivel"
          value={0.0}
          isColor="border-yellow-900"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between mt-8">
        <div>
          <div className="text-indigo-500 underline text-sm font-medium cursor-pointer">
            Alterar minha conta para CNPJ
          </div>
        </div>
        <span className="flex sm:w-auto w-full sm:mt-0 mt-4 justify-end">
          <WithdrawButton onClick={() => setModal(true)}>Efetuar saque</WithdrawButton>
        </span>
      </div>

      <Modal modal={modal} setModal={setModal}/>

      <Wrapper>
        <Table>
          <TableWrapper>
            <BoxTable>
              <Content>
                <TableResponsive>
                  <TableHead>
                    <Row>
                      <ColumnTh scope="col">Data</ColumnTh>
                      <ColumnTh scope="col">Valor</ColumnTh>
                      <ColumnTh scope="col">Status</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>15/03/2019</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>
                        <Badge color="bg-indigo-900">Em análise</Badge>
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

export default Finances;
