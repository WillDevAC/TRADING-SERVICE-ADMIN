import tw from "tailwind-styled-components";

export const NavigationContainer = tw.div`
  h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10
`;

export const NavigationInput = tw.input`
  border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2
`;

export const NavigationUl = tw.div`
  p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16
`;

export const NavigationLi = tw.div`
  flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center
`;

export const NavigationChatIcon = tw.div`
  h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600
`;

export const NavigationBellDiv = tw.div`
  h-full w-20 flex items-center justify-center border-r border-l
`;

export const NavigationBellIcon = tw.div`
  relative cursor-pointer text-gray-600
`;

