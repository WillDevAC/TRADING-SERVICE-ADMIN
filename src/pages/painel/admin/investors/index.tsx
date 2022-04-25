import React, { useState } from "react";

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

const Investors: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  return (
    <LayoutFragment
      title="Lista de investidores"
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
                      <ColumnTh scope="col">Nome do investidor</ColumnTh>
                      <ColumnTh scope="col">Patrimonio</ColumnTh>
                      <ColumnTh scope="col">Rendimento (Mensal)</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>JOSE RIBAMAR DA ROCHA</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>0.5%</ColumnTd>
                      <ColumnTd>
                        <Button onClick={() => setModalView(true)}>
                          Detalhes
                        </Button>
                        <Button onClick={() => Router.push("extract-investor")}>
                          Extrato
                        </Button>
                        <Button onClick={() => setModalEdit(true)}>
                          Editar
                        </Button>
                      </ColumnTd>
                    </Row>
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>

        <TableFooter />

        <ModalViewInvestor modal={modalView} setModal={setModalView} />
        <ModalEditInvestor modal={modalEdit} setModal={setModalEdit} />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Investors;
