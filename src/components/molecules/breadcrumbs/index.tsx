import React from "react";

import { Title } from "./styles";

import { GrFormNext } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

import { useRouter } from "next/router";

const breadcrumbs: React.FC = () => {

  //Get router.
  const { pathname } = useRouter();
  const router = useRouter();

  const URL = pathname.split("/");

  return (
    <>
      <nav className="flex pt-5">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Title>
              <IoMdHome className="mr-2 w-4 h-4" size={20} />
              Home
            </Title>
          </li>
          <li>
            <div className="flex items-center">
              <GrFormNext className="mr-2 w-4 h-4" size={20} />
              <Title>{URL[2]}</Title>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <GrFormNext className="mr-2 w-4 h-4" size={20} />
              <Title>{URL[3]}</Title>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <GrFormNext className="mr-2 w-4 h-4" size={20} />
              <Title>{URL[4]}</Title>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default breadcrumbs;
