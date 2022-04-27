import tw from "tailwind-styled-components/dist/tailwind";

export const ChatWrapper = tw.div `
  container mx-auto 
`;

export const ChatContainer = tw.div `
  min-w-full border rounded lg:grid lg:grid-cols-3 h-600
`;

export const ChatListContainer = tw.div `
  border-r border-gray-300 lg:col-span-1 overflow-auto
`;

export const ChatSearchIcon = tw.span `
  absolute inset-y-0 left-0 flex items-center pl-2
`;

export const ChatSearchInput = tw.input `
  block w-full py-2 pl-10 bg-gray-200 rounded outline-none
`;

export const ChatList = tw.ul `
  overflow-auto h-[32rem]
`;

export const ChatListTitle = tw.h2 `
  my-2 mb-2 ml-2 text-lg text-gray-600
`;

export const ChatListItem = tw.a `
  flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none
`;

export const ChatTalk = tw.div `
  hidden lg:col-span-2 lg:block
`;

export const ChatTalkProfile = tw.div `
  relative flex items-center p-3 border-b border-gray-300
`;

export const GreenBall = tw.span `
  absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3  
`;

export const ChatMessages = tw.div `
  relative w-full p-6 overflow-y-auto h-[40rem] h-full
`;

export const MessageLeft = tw.div `
  relative max-w-xl px-4 py-2 text-gray-700 rounded shadow
`;

export const MessageRight = tw.div `
  relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow
`;

export const ChatInputContainer = tw.div `
  flex items-center justify-between w-full p-3 border-t border-gray-300
`;

export const ChatInput = tw.input `
  block w-full py-2 pl-4 mx-3 bg-gray-200 rounded-full outline-none focus:text-gray-700
`;