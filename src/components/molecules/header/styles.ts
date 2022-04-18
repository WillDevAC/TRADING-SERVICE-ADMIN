import tw from 'tailwind-styled-components'

export const Header = tw.div `
    h-16 flex items-center lg:items-stretch justify-between lg:justify-between bg-blue-900 lg:bg-white relative z-10 lg:sticky lg:top-0 sticky top-0
`

export const HeaderWrapper = tw.div `
    hidden lg:flex w-full
`

export const HeaderDiviser = tw.div `
    w-1/2 h-full hidden lg:flex items-center pl-6 pr-20
`

export const HeaderGroup = tw.div `
    w-1/2 hidden lg:flex
`

export const HeaderGroupItem = tw.div `
    w-full flex items-center pl-8 justify-end
`

export const Item = tw.div `
    h-full w-20 flex items-center justify-center border-r border-l
`

export const HeaderGroupMobile = tw.div `
    text-white mr-8 visible lg:hidden relative
`