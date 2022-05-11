import React, { useEffect, useState } from "react";

import LayoutFragment from "../../../../components/layout/admin";

import TableFooter from "../../../../components/molecules/table/footer";
import TableHeader from "../../../../components/molecules/table/header";

import ModalViewRequest from "../../../../components/molecules/modals/modal_viewWithdrawnRequest";

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
import { toast } from "react-nextjs-toast";

export interface RequestWithdraw {
  id: string;
  user?: {
    name: string;
  };
  type?: {
    description: string;
  };
  pixKeyType?: {
    description: string;
  };
  network?: {
    description: string;
  };
  status?: {
    description: string;
  };
  pixKey?: string;
  address?: string;
  amount: number;
  confirmedAmount: number;
  createdAt: string;
}

const Withdrawn_requests: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [count, setCount] = useState(0);
  const take = 10;
  const [data, setData] = useState<RequestWithdraw[]>([]);
  const [requestId, setRequestId] = useState(null);

  const onLoad = async () => {
    const response = await api.get(
      `/transaction/request-withdraw?take=${take}&skip=${skip}&search=${search}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!response.data.message) {
      setData(response.data.data);
      console.log(response.data);
      setCount(Math.ceil(response.data.count / take));
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  useEffect(() => {
    if (typeof window) {
      onLoad();
    }
  }, [typeof window, skip, search]);
  return (
    <LayoutFragment
      title="Solicitações de saque"
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
                      <ColumnTh scope="col">Nivel de acesso</ColumnTh>
                      <ColumnTh scope="col">Valor de retirada</ColumnTh>
                      <ColumnTh scope="col">Método de saque</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    {data.map((res, i) => {
                      return (
                        <Row key={i}>
                          <ColumnTd>{res.user.name}</ColumnTd>
                          <ColumnTd>Investidor</ColumnTd>
                          <ColumnTd>{res.amount}</ColumnTd>
                          <ColumnTd>{res.type.description}</ColumnTd>
                          <ColumnTd>
                            <Button
                              onClick={() => {
                                setRequestId(res.id);
                                setModalView(true);
                              }}
                            >
                              Detalhes
                            </Button>
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
        <ModalViewRequest
          request={
            !!requestId ? data.find((r) => r.id == requestId) : undefined
          }
          modal={modalView}
          setModal={setModalView}
        />
        <TableFooter count={count} take={take} skip={skip} setSkip={setSkip} />
      </Wrapper>
    </LayoutFragment>
  );
};

export default Withdrawn_requests;
