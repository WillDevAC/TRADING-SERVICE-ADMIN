import React from "react";

import { AiOutlinePaperClip } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

import { ChatInput } from "../../molecules/chat/styles";

const chat_input_container: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
      <button>
        <GrEmoji />
      </button>
      <button>
        <AiOutlinePaperClip />
      </button>

      <ChatInput type="text" placeholder="Mensagem" name="message" required />
      <button>
        <BsMic />
      </button>
      <button type="submit">
        <BiSend />
      </button>
    </div>
  );
};

export default chat_input_container;
