import React from "react";

import {
  TableFooterMain,
  TableFooterDesktop,
  TableMobileFooterPagination,
  TableFooterDesktopPagination,
  MobilePrevPagination,
  MobileNextPagination,
  CurrentMobilePagination,
  CurrentPageDesktop,
  Prev,
  Next,
  Current,
} from "./styles";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface Props {
  skip: number;
  take: number;
  count: number;
  setSkip(arg: number): void;
}
const TableFooter: React.FC<Props> = ({ skip, setSkip, take, count }) => {
  return (
    <div className="w-full">
      <TableFooterMain>
        <TableMobileFooterPagination>
          <MobilePrevPagination
            onClick={() => {
              if (skip > 0) {
                setSkip(skip - 1);
              }
            }}
          >
            Anterior
          </MobilePrevPagination>
          <CurrentMobilePagination>
            <Current>{skip + 1}</Current>
          </CurrentMobilePagination>
          <MobileNextPagination
            onClick={() => {
              setSkip(skip + 1);
            }}
          >
            Próximo
          </MobileNextPagination>
        </TableMobileFooterPagination>

        <TableFooterDesktop>
          <Current>Exibindo {count} resultados</Current>
          <TableFooterDesktopPagination>
            <Prev
              onClick={() => {
                if (skip > 0) {
                  setSkip(skip - 1);
                }
              }}
              aria-label="Previous"
            >
              <GrFormPrevious />
            </Prev>
            <CurrentPageDesktop>{skip + 1}</CurrentPageDesktop>
            <Next
              onClick={() => {
                setSkip(skip + 1);
              }}
              aria-label="Next"
            >
              <GrFormNext />
            </Next>
          </TableFooterDesktopPagination>
        </TableFooterDesktop>
      </TableFooterMain>
    </div>
  );
};

export default TableFooter;
