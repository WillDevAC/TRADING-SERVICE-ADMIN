import React from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

import Router from "next/router";
import {
  Header,
  HeaderWrapper,
  HeaderDiviser,
  HeaderGroup,
  HeaderGroupItem,
  HeaderGroupMobile,
  Item,
} from "./styles";

interface IHeader {
  setShow: Function;
  show: Boolean;
}

const header: React.FC<IHeader> = ({ setShow, show }) => {
  return (
    <Header>
      <div className="text-white ml-5 font-bold">PORTAL TRADING SERVICE</div>
      <HeaderWrapper>
        <HeaderDiviser />

        <HeaderGroup>
          <HeaderGroupItem>
            <Item>
              <div
                onClick={() => {
                  localStorage.clear();
                  Router.replace("/auth/login");
                }}
                className="relative cursor-pointer text-gray-600"
              >
                <MdLogout size={25} />
              </div>
            </Item>
          </HeaderGroupItem>
        </HeaderGroup>
      </HeaderWrapper>

      <HeaderGroupMobile onClick={() => setShow(!show)}>
        {show ? " " : <HiOutlineMenuAlt3 size={25} />}
      </HeaderGroupMobile>
    </Header>
  );
};

export default header;
