import React from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

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
      <div className="text-white ml-5 font-bold">
        PORTAL DO CONSULTOR
      </div>
      <HeaderWrapper>
        <HeaderDiviser />

        <HeaderGroup>
          <HeaderGroupItem>
            <Item>
              <div className="relative cursor-pointer text-gray-600">
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
