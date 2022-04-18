import React from "react";

import { CardRelatoryWrapper, CardContent } from "./styles";

interface IProps {
  title: string;
  value: number;
  isColor: string;
}

const card: React.FC<IProps> = ({ title, value, isColor }) => {
  return (
    <>
      <CardRelatoryWrapper>
        <CardContent isColor={isColor}>
          <dl>
            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
              {title}
            </dt>
            <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
              {value}
            </dd>
          </dl>
        </CardContent>
      </CardRelatoryWrapper>
    </>
  );
};

export default card;
