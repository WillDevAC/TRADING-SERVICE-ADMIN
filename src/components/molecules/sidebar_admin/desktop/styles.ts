import tw from 'tailwind-styled-components'

export const Sidebar = tw.div `
    absolute lg:relative w-64 h-screen bg-blue-900 hidden lg:block lg:sticky lg:top-0 lg:right-0
`

export const SidebarWrapper = tw.div `
    py-6
`
export const Item = tw.div `
    pl-6 cursor-pointer text-white text-tiny leading-3 tracking-normal pb-4 pt-5 transform hover:scale-105 flex items-center leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-200  hover:bg-yellow-400  hover:text-white focus:outline-none
`