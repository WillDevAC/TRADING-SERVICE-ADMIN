import React, { useEffect, useState } from "react";

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
import { toast } from "react-nextjs-toast";
import ModalViewRequest from "../../../../components/molecules/modals/modal_viewDepositRequest";
import { api } from "../../../../services/api";
import dayjs from "dayjs";

export interface DepositData {
  id: string;
  user: {
    name: string;
  };
  status: {
    description: string;
  };
  priceBtc: string;
  confirmedAmount: string;
  receiptUrl: string;
  createdAt: string;
  amount: string;
}

const Deposit_requests: React.FC = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const take = 10;
  const [data, setData] = useState<DepositData[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState<string>("");
  const [id, setId] = useState(null);

  const onLoad = async () => {
    const response = await api.get(
      `/transaction/request-deposit?take=${take}&skip=${
        skip * take
      }&search=${search}`,
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
  }, [typeof window, skip, search, modalView]);

  const translateStatus = (arg: string) => {
    if (arg == "confirmed") {
      return "CONFIRMADO";
    }
    if (arg == "pending") {
      return "PENDENTE";
    }
    if (arg == "reject") {
      return "REJEITADO";
    }
    if (arg == "error") {
      return "ERROR";
    }
  };

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
                      <ColumnTh scope="col">Data</ColumnTh>
                      <ColumnTh scope="col">Valor solicitado</ColumnTh>
                      <ColumnTh scope="col">
                        Preço do BTC quando solicitado
                      </ColumnTh>
                      <ColumnTh scope="col">Valor em Reais</ColumnTh>
                      <ColumnTh scope="col">Ações</ColumnTh>
                    </Row>
                  </TableHead>
                  <TableBody>
                    {data?.length !== 0 ? (
                      data.map((res, i) => {
                        return (
                          <Row key={i}>
                            <ColumnTd>{res.user.name}</ColumnTd>
                            <ColumnTd>{dayjs(res.createdAt).format("DD/MM/YYYY")}</ColumnTd>
                            <ColumnTd>{res.amount + " BTC"}</ColumnTd>
                            <ColumnTd>
                              {parseFloat(res.priceBtc).toLocaleString(
                                "pt-BR",
                                {
                                  style: "currency",
                                  currency: "BRL",
                                }
                              )}
                            </ColumnTd>
                            <ColumnTd>
                              {(
                                parseFloat(res.amount) *
                                parseFloat(res.priceBtc)
                              ).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </ColumnTd>
                            <ColumnTd>
                              <Button
                                onClick={() => {
                                  setId(res.id);
                                  setModalView(true);
                                }}
                              >
                                Detalhes
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
                                {translateStatus(res.status.description)}
                              </span>
                            </ColumnTd>
                          </Row>
                        );
                      })
                    ) : (
                      <>
                        <div>
                          <span>Não há solicitações para mostrar...</span>
                        </div>
                      </>
                    )}
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
      <ModalViewRequest
        request={!!id ? data.find((e) => e.id == id) : null}
        modal={modalView}
        setModal={setModalView}
      />
    </LayoutFragment>
  );
};

export default Deposit_requests;
