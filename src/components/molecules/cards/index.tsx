import React, { Component } from "react";

import {
  CardDetails,
  CardDetailsWrapper,
  CardDetailsContent,
  CardDetailsContentIcon,
  Group,
  Title,
  Content,
  Value,
} from "./styles";

interface IProps {
  title: string;
  value: number | string;
  icon: string;
}

const cards: React.FC<IProps> = ({ title, value, icon }) => {
  return (
    <CardDetails>
      <CardDetailsWrapper>
        <CardDetailsContent>
          <CardDetailsContentIcon>
            <img src={icon} alt={title} />
          </CardDetailsContentIcon>
          <Group>
            <Title>{title}</Title>
            <Content>
              <Value>{value}</Value>
            </Content>
          </Group>
        </CardDetailsContent>
      </CardDetailsWrapper>
    </CardDetails>
  );
};

export default cards;
