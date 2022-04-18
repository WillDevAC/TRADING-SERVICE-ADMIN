import tw from 'tailwind-styled-components'


interface Props {
    color: string;
}


export const Table = tw.div `
    flex flex-col
`

export const TableWrapper = tw.div `
    overflow-x-auto sm:-mx-6 lg:-mx-8 rounded
`

export const Wrapper = tw.div `
    my-4
`
export const BoxTable = tw.div `
    py-2 inline-block min-w-full sm:px-6 lg:px-8 -z-50
`

export const Content = tw.div `
    overflow-hidden -z-50
`

export const ColumnTh = tw.th `
    text-sm font-medium text-gray-900 px-6 py-4 text-left -z-50
`

export const Row = tw.tr `bg-white`

export const ColumnTd = tw.td `
    text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap -z-50
`

export const TableResponsive = tw.table `
    min-w-full -z-50
`

export const TableHead = tw.thead `
    border-b bg-white -z-50
`

export const TableBody = tw.tbody `
`

export const Button = tw.button `
    bg-transparent hover:bg-blue-900 ml-2 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded outline-none
`

export const Badge = tw.span<Props> `
    inline-flex 
    items-center 
    justify-center 
    px-2 py-1 
    text-xs 
    font-bold 
    leading-none 
    text-indigo-100 
    rounded
    ${(p) => p.color}
`

export const WithdrawButton = tw.button `
    cursor-pointer 
    inline-flex 
    shadow 
    items-center 
    px-4 
    py-2 
    border 
    border-transparent 
    text-sm leading-5 
    font-medium 
    rounded-md 
    text-white 
    bg-indigo-600 
    hover:bg-indigo-500 
    focus:outline-none 
    focus:border-indigo-700 
    focus:shadow-outline-indigo 
    active:bg-indigo-700 
    transition 
    ease-in-out d
    uration-150
`