import tw from 'tailwind-styled-components';

export const Sidebar = tw.div `
    absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-blue-900 lg:hidden transition duration-150 ease-in-out h-full
`

export const SidebarWrapper = tw.div `
    flex flex-col justify-between h-full w-full
`

export const SidebarContent = tw.div ``

export const SidebarHeader = tw.div `
    flex items-center justify-between px-8
`

export const SidebarItem = tw.div `
    py-6"
`

export const Item = tw.ul `
    pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 focus:text-indigo-700 focus:outline-none
`

export const IconWrapper = tw.div `
    flex items-center justify-center h-10 w-10 text-white
`