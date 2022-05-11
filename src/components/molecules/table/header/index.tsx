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

interface Props {
  search: string;
  setSearch(args: string): void;
}
const TableHeader: React.FC<Props> = ({search, setSearch}) => {
  return (
    <TableHeaderMain>
      <TableHeaderWrapper>
        <TableLeftContent>
          <IconWrapper>
            <AiOutlineSearch/>
          </IconWrapper>
          <InputSearch  value={search} onChange={(e)=> setSearch(e.target.value)}/>
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
