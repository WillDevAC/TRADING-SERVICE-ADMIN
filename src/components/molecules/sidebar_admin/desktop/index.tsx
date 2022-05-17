import React from "react";

import { 
    Sidebar,
    SidebarWrapper,
    Item
} from './styles';

import { AiFillHome, AiOutlineAppstoreAdd, AiOutlineSolution, AiTwotoneFileAdd } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import { ImBoxRemove } from 'react-icons/im'
import { BsFillChatTextFill } from 'react-icons/bs'

import Router from 'next/router'

const SidebarDesktop: React.FC = () => {
  return (
    <Sidebar>

      <div className="h-16 w-full flex items-center px-8 pt-2">
        <img src="/img/logo.png" alt="Logotipo" />
      </div>

      <SidebarWrapper>
        <Item onClick={() => Router.push('/painel/admin/')}> 
          <div className="flex items-center">
            <AiFillHome size={20}/>
            <span className="ml-2">Dashboard</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/investors')}>
          <div className="flex items-center">
            <FaUserTie/>
            <span className="ml-2">Investidores</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/consultants')}>
          <div className="flex items-center">
            <MdAdminPanelSettings/>
            <span className="ml-2">Consultores</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/withdrawn-requests')}>
          <div className="flex items-center">
            <AiTwotoneFileAdd/>
            <span className="ml-2">Saques investidores</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/withdrawn-requests-consultant')}>
          <div className="flex items-center">
            <AiTwotoneFileAdd/>
            <span className="ml-2">Saques consultores</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/deposit_requests')}>
          <div className="flex items-center">
            <ImBoxRemove/>
            <span className="ml-2">Dépositos</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/utilities')}>
          <div className="flex items-center">
            <AiOutlineSolution/>
            <span className="ml-2">Utilidades</span>
          </div>
        </Item>

        <Item onClick={() => Router.push('/painel/admin/chat')}>
          <div className="flex items-center">
            <BsFillChatTextFill/>
            <span className="ml-2">Chat</span>
          </div>
        </Item>

      </SidebarWrapper>

    </Sidebar>
  );
};

export default SidebarDesktop;
