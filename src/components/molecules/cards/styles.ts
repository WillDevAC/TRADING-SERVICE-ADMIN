import tw from 'tailwind-styled-components'

export const CardDetails = tw.div `
    bg-white overflow-hidden shadow rounded-lg
`

export const CardDetailsWrapper = tw.div `
    p-5
`

export const CardDetailsContent = tw.div `
    flex items-center
`

export const CardDetailsContentIcon = tw.div `
    flex-shrink-0
`

export const Group = tw.div `
    ml-5 w-0 flex-1
`

export const Title = tw.div `
    text-sm leading-5 font-medium text-cool-gray-500 truncate
`

export const Content = tw.div `
    text-lg leading-7 font-medium text-cool-gray-900
`

export const Value = tw.div `
    inline
`