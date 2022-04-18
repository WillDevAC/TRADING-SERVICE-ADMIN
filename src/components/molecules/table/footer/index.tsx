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

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const TableFooter: React.FC = () => {
  return (
    <div className="w-full">
      <TableFooterMain>
        <TableMobileFooterPagination>
          <MobilePrevPagination>Anterior</MobilePrevPagination>
          <CurrentMobilePagination>
            <Current>1</Current>
          </CurrentMobilePagination>
          <MobileNextPagination>Próximo</MobileNextPagination>
        </TableMobileFooterPagination>

        <TableFooterDesktop>
          <Current>Exibindo 3 resultados</Current>
          <TableFooterDesktopPagination>
            <Prev aria-label="Previous">
                <GrFormPrevious/>
            </Prev>
            <CurrentPageDesktop>1</CurrentPageDesktop>
            <Next aria-label="Next">
                <GrFormNext/>
            </Next>
          </TableFooterDesktopPagination>
        </TableFooterDesktop>
      </TableFooterMain>
    </div>
  );
};

export default TableFooter;
