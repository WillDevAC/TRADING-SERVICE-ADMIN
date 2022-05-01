import React, { useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import TableFooter from "../../../../components/molecules/table/footer";
import TableHeader from "../../../../components/molecules/table/header";

import ModalViewRequest from '../../../../components/molecules/modals/modal_viewWithdrawnRequest'

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

const Withdrawn_requests: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);

  return (
    <LayoutFragment
      title="Solicitações de saque"
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
                      <ColumnTh scope="col">Nivel de acesso</ColumnTh>
                      <ColumnTh scope="col">Valor de retirada</ColumnTh>
                      <ColumnTh scope="col">Método de saque</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>JOSE SANTOS DA ROCHA</ColumnTd>
                      <ColumnTd>Consultor</ColumnTd>
                      <ColumnTd>R$ -400.00</ColumnTd>
                      <ColumnTd>PIX</ColumnTd>
                      <ColumnTd>
                        <Button onClick={() => setModalView(true)}>Detalhes</Button>
                      </ColumnTd>
                    </Row>
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>
        <ModalViewRequest modal={modalView} setModal={setModalView} />
        <TableFooter />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Withdrawn_requests;
