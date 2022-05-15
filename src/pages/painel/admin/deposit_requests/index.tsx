import React, { useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import TableFooter from "../../../../components/molecules/table/footer";
import TableHeader from "../../../../components/molecules/table/header";

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

import ModalViewRequest from "../../../../components/molecules/modals/modal_viewDepositRequest";

const Deposit_requests: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const take = 10;
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <LayoutFragment
      title="Solicitações de déposito"
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
                      <ColumnTh scope="col">Valor solicitado</ColumnTh>
                      <ColumnTh scope="col">Saldo atual</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    <Row>
                      <ColumnTd>JOSE SANTOS DA ROCHA</ColumnTd>
                      <ColumnTd>R$ +500.00</ColumnTd>
                      <ColumnTd>R$ 0.00</ColumnTd>
                      <ColumnTd>
                        <Button onClick={() => setModalView(true)}>
                          Detalhes
                        </Button>
                      </ColumnTd>
                    </Row>
                  </TableBody>
                </TableResponsive>
              </Content>
            </BoxTable>
          </TableWrapper>
        </Table>
        <TableFooter
          count={data?.length}
          setSkip={setSkip}
          skip={skip}
          take={take}
        />
      </Wrapper>
      <ModalViewRequest modal={modalView} setModal={setModalView} />
    </LayoutFragment>
  );
};

export default Deposit_requests;
