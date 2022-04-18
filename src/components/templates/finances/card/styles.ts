import tw from 'tailwind-styled-components'

interface Props {
    isColor: string;
}

export const CardRelatoryWrapper = tw.div `
    bg-white overflow-hidden
`

export const CardContent = tw.div<Props> `
    px-4 
    py-5 
    sm:p-6 
    border-l-8 
    ${(p) => p.isColor}
`