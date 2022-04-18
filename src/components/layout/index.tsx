import React, { useState } from "react";

import SidebarMobile from "../../components/molecules/sidebar/mobile";
import SidebarDesktop from "../../components/molecules/sidebar/desktop";
import Breadcrumbs from "../../components/molecules/breadcrumbs";

import Header from "../molecules/header";

interface IProps {
  title: string;
  isBreadcrumb: boolean;
  isBack: boolean;
  urlBack?: string;
}

import Router from "next/router";

import { MdOutlineArrowBack } from "react-icons/md";

const layout: React.FC<IProps> = ({
  children,
  title,
  isBreadcrumb,
  isBack,
  urlBack,
}) => {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <div className="w-full h-full">
      <div className="flex flex-no-wrap">
        <SidebarDesktop />
        <SidebarMobile show={show} setShow={setShow} />

        <div className="w-full">
          <Header setShow={setShow} show={show} />

          <div className="container mx-auto py-10 card-block card block md:w-4/5 w-11/11 px-2">
            <div className="page-header mb-8 flex-wrap">
              <div className="text-xl flex items-center font-semibold gap-2">
                {isBack == true && (
                  <div className="bg-blue-900 p-1 rounded-sm cursor-pointer" onClick={() => Router.back()}>
                    <MdOutlineArrowBack size={20} className="text-white" />
                  </div>
                )}

                {title}
              </div>

              {isBreadcrumb == true && <Breadcrumbs />}
            </div>

            <div className="block w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
