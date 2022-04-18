import React from "react";

import {
  TableHeaderMain,
  TableHeaderWrapper,
  TableLeftContent,
  TableRightContent,
  IconWrapper,
  InputSearch,
  FilterWrapper,
} from "./styles";

import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilter } from 'react-icons/bi'

const TableHeader: React.FC = () => {
  return (
    <TableHeaderMain>
      <TableHeaderWrapper>
        <TableLeftContent>
          <IconWrapper>
            <AiOutlineSearch/>
          </IconWrapper>
          <InputSearch />
        </TableLeftContent>
        <TableRightContent>
          <BiFilter/>
          <FilterWrapper>
            <span className="mr-4">Filtrar</span>
          </FilterWrapper>
        </TableRightContent>
      </TableHeaderWrapper>
    </TableHeaderMain>
  );
};

export default TableHeader;
