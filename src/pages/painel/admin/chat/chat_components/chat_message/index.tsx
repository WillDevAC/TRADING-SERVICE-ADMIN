import React from "react";

import {
  MessageLeft,
  MessageRight,
} from "../../../../../../components/molecules/chat/styles";

interface Props {
  sender?: string;
  receiver?: string;
}

const chat_message: React.FC<Props> = ({ sender, receiver }) => {
  return (
    <>
      <ul className="space-y-2">
        <li className="flex justify-start">
          {sender ? (
            <MessageLeft>
              <span className="block">{sender}</span>
            </MessageLeft>
          ) : null}
        </li>
        <li className="flex justify-end">
          {receiver ? (
            <MessageRight>
              <span className="block">{receiver}</span>
            </MessageRight>
          ) : null}
        </li>
      </ul>
    </>
  );
};

export default chat_message;
