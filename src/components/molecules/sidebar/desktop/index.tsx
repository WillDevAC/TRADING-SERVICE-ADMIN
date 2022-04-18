import React from "react";

import { 
    Sidebar,
    SidebarWrapper,
    Item
} from './styles';

import { AiFillHome } from 'react-icons/ai'
import { FaUserTie, FaPiggyBank } from 'react-icons/fa'
import { SiExpertsexchange } from 'react-icons/si'

import Router from 'next/router'

const SidebarDesktop: React.FC = () => {
  return (
    <Sidebar>

      <div className="h-16 w-full flex items-center px-8 pt-2">
        <img src="/img/logo.png" alt="Logotipo" />
      </div>

      <SidebarWrapper>
        <Item onClick={() => Router.push('/painel/consultant/')}> 
          <div className="flex items-center">
            <AiFillHome size={20}/>
            <span className="ml-2">Dashboard</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/consultant/investors')}>
          <div className="flex items-center">
            <FaUserTie/>
            <span className="ml-2">Investidores</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/consultant/finances')}>
          <div className="flex items-center">
            <FaPiggyBank/>
            <span className="ml-2">Financeiro</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/consultant/ferraments')}>
          <div className="flex items-center">
            <SiExpertsexchange/>
            <span className="ml-2">Ferramentas</span>
          </div>
        </Item>

      </SidebarWrapper>

    </Sidebar>
  );
};

export default SidebarDesktop;
