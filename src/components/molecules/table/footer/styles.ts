import tw from 'tailwind-styled-components'

export const TableMobileFooterPagination = tw.div `
    flex-1 flex items-center justify-between sm:hidden
`

export const TableFooterMain = tw.div `
    bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6
`

export const MobilePrevPagination = tw.div `
    relative inline-flex cursor-pointer items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150
`

export const MobileNextPagination = tw.div `
    -z-50 ml-3 relative inline-flex cursor-pointer items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150
`

export const CurrentMobilePagination = tw.div `
    px-2
`

export const Current = tw.p `
    text-sm leading-5 text-gray-700
`
export const TableFooterDesktop = tw.div `
    hidden sm:flex-1 sm:flex sm:items-center sm:justify-between -z-50
`

export const TableFooterDesktopPagination = tw.nav `
    relative z-0 inline-flex shadow-sm -z-50
`

export const Prev = tw.button `
    relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150
`

export const Next = tw.button `
    -ml-px relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150
`

export const CurrentPageDesktop = tw.p `
    -ml-px cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 bg-white
`