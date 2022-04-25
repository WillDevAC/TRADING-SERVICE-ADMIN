import React from "react";

import {
  Sidebar,
  SidebarWrapper,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  Item,
  IconWrapper,
} from "./styles";

interface ISidebar {
  show: Boolean;
  setShow: Function;
}

import { AiFillHome } from "react-icons/ai";
import { FaUserTie, FaPiggyBank, FaSignOutAlt } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

import Router from 'next/router'

const sidebar: React.FC<ISidebar> = ({ show, setShow }) => {
  return (
    <>
      <div
        className={
          show
            ? "w-full h-full absolute z-40  transform  translate-x-0 "
            : "   w-full h-full absolute z-40  transform -translate-x-full"
        }
      >
        <Sidebar>
          <SidebarWrapper>
            <SidebarContent>
              <SidebarHeader>
                <div className="h-16 w-full flex items-center">
                  <img src="/img/logo.png" alt="Logotipo" />
                </div>

                <IconWrapper onClick={() => setShow(!show)}>
                  <AiOutlineClose size={20} />
                </IconWrapper>
              </SidebarHeader>

              <SidebarWrapper>
                <Item onClick={() => Router.push("/painel/consultant/")}>
                  <div className="flex items-center">
                    <AiFillHome size={20} />
                    <span className="ml-2">Dashboard</span>
                  </div>
                </Item>

                <Item
                  onClick={() => Router.push("/painel/consultant/investors")}
                >
                  <div className="flex items-center">
                    <FaUserTie />
                    <span className="ml-2">Investidores</span>
                  </div>
                </Item>

                <Item
                  onClick={() => Router.push("/painel/consultant/finances")}
                >
                  <div className="flex items-center">
                    <FaPiggyBank />
                    <span className="ml-2">Financeiro</span>
                  </div>
                </Item>

                <Item
                  onClick={() => Router.push("/painel/consultant/ferraments")}
                >
                  <div className="flex items-center">
                    <SiExpertsexchange />
                    <span className="ml-2">Ferramentas</span>
                  </div>
                </Item>

                <Item>
                  <div className="flex items-center">
                    <FaSignOutAlt />
                    <span className="ml-2">Desconectar</span>
                  </div>
                </Item>

              </SidebarWrapper>
            </SidebarContent>
          </SidebarWrapper>
        </Sidebar>
      </div>
    </>
  );
};

export default sidebar;
