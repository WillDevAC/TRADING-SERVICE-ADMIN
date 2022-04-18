import tw from 'tailwind-styled-components'

export const TableHeaderMain = tw.div `
    mt-8 px-4 py-3 sm:p-6 bg-white
`

export const TableHeaderWrapper = tw.div `
    flex rounded-md shadow-sm
`

export const TableLeftContent = tw.div `
    relative flex-grow focus-within:z-10 border rounded outline-none
`

export const TableRightContent = tw.div `
    cursor-pointer -ml-px relative inline-flex items-center pl-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150
`

export const IconWrapper = tw.div `
    absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none
`

export const InputSearch = tw.input `
    form-input block w-full h-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5 lg:outline-none md:outline-none
`

export const FilterWrapper = tw.div `
    ml-2
`